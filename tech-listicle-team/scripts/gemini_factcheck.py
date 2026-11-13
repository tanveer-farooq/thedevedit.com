#!/usr/bin/env python3
"""Independent Gemini fact-check layer for the tech listicle auditor.

Reads GEMINI_API_KEY (and optional GEMINI_MODEL) from the .env file at the repo
root, falling back to the environment. The key is sent only in the request
header and is never printed, logged, or written to disk.

Usage:
  python gemini_factcheck.py --in claims.txt --out gemini-1.md [--model NAME] [--no-search]
  python gemini_factcheck.py --list-models

Model: --model, else the GEMINI_MODEL env var, else the newest Gemini Pro model
the key can call (stable preferred over preview).

Exit codes: 0 ok, 1 API or network error, 2 GEMINI_API_KEY not set, 3 bad input.
"""
import argparse
import datetime
import json
import os
import re
import sys
import urllib.error
import urllib.request

API = "https://generativelanguage.googleapis.com/v1beta"
ENV_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", ".env")


def load_env_file(path=ENV_FILE):
    """Load KEY=VALUE lines from the repo-root .env into os.environ (.env wins)."""
    try:
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                k, v = k.strip().removeprefix("export ").strip(), v.strip().strip("'\"")
                if k and v:
                    os.environ[k] = v
    except OSError:
        pass

SYSTEM = """You are an independent fact-checker reviewing claims from a B2B SaaS / technology article before publication. Today's date is {today}.

Check each numbered claim against current, authoritative information: official product documentation, pricing pages, vendor release notes and changelogs, trust/security pages, standards bodies, government sources, and original research. Use Google Search when it is available.

Return one Markdown table row per claim with these columns:
| ID | Status | What is wrong or uncertain | Correct / current information | Best primary source to verify |

Status must be exactly one of:
- VERIFIED_FACT: matches current authoritative information you found
- LIKELY_FACT: consistent with what you know, but not confirmed against a primary source
- UNSUPPORTED: no evidence either way; needs a primary source
- POTENTIALLY_FALSE: conflicts with information you found
- OUTDATED: was true earlier but has changed (say what changed and when)
- OPINION: a judgment, not a checkable fact
- MARKETING_LANGUAGE: vendor promotional wording presented as fact

After the table, list separately:
1. Possible hallucinations: products, features, integrations, people, or numbers that may not exist
2. Exaggerated or overgeneralized claims (for example "supports X" written as "works with every X")
3. Misleading comparisons between products
4. Technical inaccuracies
5. Claims that need a primary source before publication

Rules: do not guess. When unsure, use LIKELY_FACT or UNSUPPORTED rather than VERIFIED_FACT. Cite only URLs you actually found. Be concise."""


class ApiError(Exception):
    pass


def call(path, key, body=None, timeout=300):
    data = json.dumps(body).encode("utf-8") if body is not None else None
    req = urllib.request.Request(
        f"{API}/{path}",
        data=data,
        headers={"x-goog-api-key": key, "Content-Type": "application/json"},
        method="POST" if data is not None else "GET",
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        try:
            message = json.load(e).get("error", {}).get("message", "")
        except Exception:
            message = ""
        raise ApiError(f"HTTP {e.code}: {message or e.reason}") from None
    except urllib.error.URLError as e:
        raise ApiError(f"network error: {e.reason}") from None


def list_models(key):
    models, token = [], ""
    while True:
        page = call("models?pageSize=1000" + (f"&pageToken={token}" if token else ""), key)
        models += page.get("models", [])
        token = page.get("nextPageToken")
        if not token:
            return models


def pick_model(models):
    """Newest gemini-<version>-pro text model that supports generateContent."""
    best, best_rank = None, None
    for m in models:
        name = m.get("name", "").removeprefix("models/")
        if "generateContent" not in m.get("supportedGenerationMethods", []):
            continue
        match = re.fullmatch(r"gemini-(\d+(?:\.\d+)?)-pro(-(?:preview|exp|latest)[\w.-]*)?", name)
        if not match:
            continue
        version = tuple(int(p) for p in match.group(1).split("."))
        version += (0,) * (2 - len(version))
        stable = match.group(2) is None
        rank = (version, stable, -len(name))
        if best_rank is None or rank > best_rank:
            best, best_rank = name, rank
    return best


def generate(key, model, claims, search):
    body = {
        "systemInstruction": {"parts": [{"text": SYSTEM.format(today=datetime.date.today().isoformat())}]},
        "contents": [{"role": "user", "parts": [{"text": claims}]}],
    }
    if search:
        body["tools"] = [{"google_search": {}}]
    return call(f"models/{model}:generateContent", key, body)


def render(resp, model, search_note):
    candidates = resp.get("candidates") or []
    if not candidates:
        reason = resp.get("promptFeedback", {}).get("blockReason", "no candidates returned")
        raise ApiError(f"empty response ({reason})")
    cand = candidates[0]
    text = "".join(p.get("text", "") for p in cand.get("content", {}).get("parts", []) if not p.get("thought"))
    meta = cand.get("groundingMetadata", {})
    sources = [c["web"] for c in meta.get("groundingChunks", []) if c.get("web")]
    queries = meta.get("webSearchQueries", [])

    out = [
        "# Gemini independent fact-check",
        "",
        f"- Model: {model}",
        f"- Google Search grounding: {search_note}",
        f"- Run (UTC): {datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d %H:%M')}",
        f"- Finish reason: {cand.get('finishReason', 'unknown')}",
        "- Gemini is a secondary verification layer, not an authority. Verify important findings against primary sources.",
        "",
        "## Gemini response",
        "",
        text.strip() or "(no text returned)",
        "",
        "## Grounding sources",
        "",
        "These are Google redirect URLs. Resolve them before citing.",
        "",
    ]
    out += [f"- [{s.get('title') or 'untitled'}]({s.get('uri', '')})" for s in sources] or ["- none"]
    out += ["", "## Searches Gemini ran", ""]
    out += [f"- {q}" for q in queries] or ["- none"]
    return "\n".join(out) + "\n"


def main():
    ap = argparse.ArgumentParser(description="Gemini fact-check layer for the tech listicle auditor.")
    ap.add_argument("--in", dest="infile", help="claims file (UTF-8 text)")
    ap.add_argument("--out", dest="outfile", help="Markdown report to write")
    ap.add_argument("--model", help="Gemini model id (overrides GEMINI_MODEL)")
    ap.add_argument("--no-search", action="store_true", help="disable Google Search grounding")
    ap.add_argument("--list-models", action="store_true", help="list Gemini Pro models available to the key")
    args = ap.parse_args()

    load_env_file()
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not key:
        print("GEMINI_API_KEY is not set. Skipping the Gemini layer.", file=sys.stderr)
        return 2

    try:
        if args.list_models:
            for m in list_models(key):
                name = m.get("name", "").removeprefix("models/")
                if "pro" in name and "generateContent" in m.get("supportedGenerationMethods", []):
                    print(name)
            return 0

        if not args.infile or not args.outfile:
            print("--in and --out are required.", file=sys.stderr)
            return 3
        try:
            with open(args.infile, encoding="utf-8") as f:
                claims = f.read().strip()
        except OSError as e:
            print(f"Cannot read claims file: {e}", file=sys.stderr)
            return 3
        if not claims:
            print("Claims file is empty.", file=sys.stderr)
            return 3

        model = args.model or os.environ.get("GEMINI_MODEL", "").strip() or pick_model(list_models(key))
        if not model:
            print("No Gemini Pro model found for this key. Set GEMINI_MODEL or pass --model.", file=sys.stderr)
            return 1

        search_note = "off (--no-search)"
        if args.no_search:
            resp = generate(key, model, claims, search=False)
        else:
            try:
                resp = generate(key, model, claims, search=True)
                search_note = "on"
            except ApiError as e:
                if not str(e).startswith("HTTP 400"):
                    raise
                resp = generate(key, model, claims, search=False)
                search_note = f"unavailable, ran without it ({e})"

        report = render(resp, model, search_note)
        os.makedirs(os.path.dirname(os.path.abspath(args.outfile)), exist_ok=True)
        with open(args.outfile, "w", encoding="utf-8") as f:
            f.write(report)
        print(f"Wrote {args.outfile} (model {model}, grounding {search_note.split(' ')[0]})")
        return 0
    except ApiError as e:
        print(f"Gemini API error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
