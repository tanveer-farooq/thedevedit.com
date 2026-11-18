# TheDevEdit page structures

The standard layout for the four post types on TheDevEdit. Every new post of a type follows its structure here, section by section, in the same order.

| Type | Example URL | Template | Built from |
|---|---|---|---|
| Tools (best-of list) | `/automation-testing-tools/` | `Listicle.dc.html` | the live page |
| Review | `/playwright-review/` | `Review.dc.html` | the live page |
| Comparison | `/cypress-vs-playwright/` | none yet | CTO Club's "X vs Y" format (see note in section 3) |
| Alternatives | `/browserstack-alternatives/` | `Alternatives.dc.html` | the live page |

Writing rules (voice, banned words, sourcing, SEO/AEO/GEO) live in `tech-listicle-team/content.md`. This file only covers what goes on the page and in what order.

---

## 0. Rules for every post type

### URL and slug

- Lowercase, hyphenated, ends in a slash. Posts sit at the root, never inside a category folder.
- Tools: `/<topic>-tools/`. No "best", no year, no count in the URL (`/automation-testing-tools/`, not `/best-10-automation-testing-tools-2026/`).
- Review: `/<tool>-review/`.
- Comparison: `/<tool-a>-vs-<tool-b>/`, tools in **alphabetical order** (`/cypress-vs-playwright/`, never `/playwright-vs-cypress/`).
- Alternatives: `/<tool>-alternatives/`.
- A tool keeps the same slug everywhere: `playwright-review`, `playwright-alternatives`, `cypress-vs-playwright`.

### Registration in `content.js`

Each post is one entry with:
- `cat`: one main category (`testing`, `ai`, `dev-tools`, `devops`, `data`, `security`, `it-management`, `productivity`)
- `type`: `tools`, `reviews`, `compare` or `alternatives`
- `also`: at most one extra category hub to appear on
- `title`, `summary` (one line for cards), `date`, and for reviews `tool` and `rating`

### Page wrapper

Each clean URL is a folder with a small `index.html` that sets `<title>` (`<Title> | TheDevEdit`) and imports its template with `<dc-import name="...">`.

### Shared building blocks

These appear on several post types. Use the same wording and format each time.

| Block | What it holds |
|---|---|
| **Eyebrow label** | Small mono label above each section heading, written `SECTION NAME` with **no `//`** (user, 2026-11-15), for example `THE SHORT ANSWER`. In final.md the `// NAME` lines are only section markers for the converter. |
| **Byline row** | Author name and role, "Reviewed by <name>" when there is a second reviewer, read time, a test count ("10 tools tested", "30 test runs"), and the date prices were checked. |
| **Trust line** | Not on tools pages (removed by the user, 2026-11-15); their disclosure sits in the "How we score" note under the table (1.4). Other types: "We test every tool ourselves, and vendors cannot pay for a ranking. Some links earn us a commission." plus a link to **How we test** (`/how-we-test/`). |
| **Updated date** | `UPDATED <MON DD, YYYY>` at the top of the page. |
| **Score** | One decimal out of 10 (`9.4 /10`). |
| **Price note** | Every price table ends with what was priced and when ("Prices checked by hand on Sep 26, 2026. Annual billing, entry paid plan."). |
| **Terminal block** | A short CLI-style log of our test run: command, what ran, checkmarks for results, saved report path. Shows the testing really happened. Only use real runs. |
| **FAQ** | Keyword-led heading `FAQs about <topic>` (user, 2026-11-15, replaces "Questions people actually ask"), 4 to 5 questions as an accordion. Each answer opens with a one-sentence direct answer and runs 2 to 3 sentences, 60 words at most. |
| **Sponsored box** | Clearly labelled `SPONSORED` / `AD`, with "Sponsorship never affects our rankings." Never inside a ranking or verdict. |
| **Tool initials** | Two-letter mark (`Pw`, `Tm`, `Cy`) or the tool's logo from `/logos/`. |

### Writing style and content limits (user, 2026-11-14)

Every post type follows these. The model is the rhythm of CTO Club's best-of pages (for example thectoclub.com/tools/best-asset-management-software/): short blocks, labelled fields, bullets and white space, so a long page never feels content heavy. Take the rhythm only, never their wording, examples or claims.

- **No chunky paragraphs.** A paragraph is at most **2 sentences and 45 words**, anywhere on the page. Split longer text at a sentence end. The build also splits any longer paragraph, but write it short in the first place.
- **Short sentences.** About 12 to 18 words on average, none over 30. No stacked fragments or slogans for rhythm.
- **Break the content.** Any run of 3 or more features, steps, pros, cons or criteria is a bullet list, not a sentence. One idea per bullet.
- **Labelled fields over prose.** Reviews use the fixed field labels in 1.6 (and 4.5), each with its own length cap, instead of free-form paragraphs.
- **Say it once.** A fact stated in one field is not repeated in another. The card lead, Why we picked it and the FAQ each say something new.
- **Lengths per block** are set in each section below. When a cap and the content disagree, cut words, never documented facts.

---

## 1. Tools page (best-of list)

Reference: `/automation-testing-tools/`, built by `tech-listicle-team/scripts/build-tools-page.mjs`.

**Visual update (user, 2026-11-18): the "Cards" look.** All 23 published Tools pages (live reference: `/ai-tools/`) now use the soft Cards design taken from the category hubs: stone page, white rounded cards, Newsreader serif headings, yellow "best for" tags, a facts box in the header, a scored bar per tool in the table, labelled rows in each review and a five-tile score breakdown in place of the dark strip. Sections, their order and all copy are unchanged, so the content rules below still apply. **`build-tools-page.mjs` still outputs the old look:** update it to match the markup of `/ai-tools/` before building or rebuilding a Tools page, or that page will revert. The design options are at `/tools-preview/`.

**Purpose**: rank N tools for one job by the same rubric. Default N is 7, and never more than 7 (user rule, 2026-11-14).

**Layout update (user, 2026-11-15):**
- No `//` anywhere on the page.
- No trust line under the byline.
- No "How we evaluated", "Also considered" or "How to choose" sections.
- Fixed line counts for the dek, the short answer, the quick picks and the card leads.
- A CTO Club-style comparison table.
- An image for every tool.
- Sentence-case H4 field headings in each review.

In final.md, `// NAME` lines stay as section markers for the converter; the page never shows them.

### Page title and meta

- `<title>`: `Best <topic> | TheDevEdit`
- H1: `The <N> best <topic> for <year>` (the number must equal the number of tools reviewed)

### Section order

1. Header (1.1)
2. The short answer + 3 quick picks (1.2)
3. Comparison table + "How we score" note (1.4)
4. Sponsored slot, optional (1.5)
5. The reviews (1.6)
6. FAQ (1.9)
7. Footer blocks (1.10)

#### 1.1 Header

- Eyebrow: `BEST-OF LIST · UPDATED <MON DD, YYYY>` (no slashes)
- **H1**: `The 7 best AI agents for 2026`
- **Dek** (the description under the H1): **3 lines ideal, 4 lines at most** on desktop (about 72 characters a line).
  - About 30 to 40 words, and never over 48 words or 290 characters.
  - It says what the list covers and how it was ranked.
- **Byline row**: author + role, read time, `7 tools reviewed · prices checked <date>`
- **No trust line** (removed by the user, 2026-11-15). The commission disclosure moves to the "How we score" note under the table.

#### 1.2 The short answer

- Eyebrow: `THE SHORT ANSWER`
- **3 to 5 lines** on desktop (about 74 characters a line):
  - 35 to 58 words, 370 characters at most, in 1 or 2 short paragraphs.
  - Names the #1 pick and why, then "Pick X if…" for one or two other needs.
- **3 quick-pick boxes, identical in size and content length** (user, 2026-11-15):

  | Part | Limit |
  |---|---|
  | Label (`BEST OVERALL`, `BEST FOR CODING`) | 20 characters at most, one line |
  | Tool initials or logo + tool name | the name fits one line (the build sizes long names down) |
  | Why line | **45 to 60 characters**, so two lines in every box |
  | Buttons | `Visit site ↗` and `Read review`, one line each, pinned to the bottom of the box |

  All three boxes have the same height. No box is raised or offset.

#### 1.3 How we evaluated: removed (user, 2026-11-15)

There is no methodology section.
- The method lives in a **"How we score" note** under the comparison table (1.4).
- Every review keeps its score breakdown line.
- The full rubric (weights and scoring rules) stays in research.md, so the auditor can check every score.

#### 1.4 Comparison table

- **H2: keyword-led for SEO**, for example `Best AI agents compared` or `<Primary keyword> comparison`. Never `All 7 at a glance`.
- **Look: modelled on CTO Club's summary tables** (for example thectoclub.com/tools/best-android-emulator-for-windows/):
  - a clean white table with a light header row, thin row dividers, generous row height and a hover tint
  - tool cell: rank, logo or initials, the tool name in bold, and a grey "Best for …" line under it
  - pricing in bold ("From $20/mo") with a small grey billing note
  - free tier as a Yes / No pill
  - deployment, plus SSO when it splits the tools
  - score as a pill (`9.7/10`)
  - a `Visit ↗` button
  - on phones each row becomes a stacked card, with no horizontal scroll
- **Filters** above the table, only those that split the tools: Free tier, Self-hosted option, Business plan with SSO.
- **Sort**: Our ranking, Rating, Price low to high.
- Keep the compare tray (1.11).
- **Under the table, at most 3 short lines:**
  1. The price note: what was priced and when.
  2. **How we score:** each criterion with its weight, from official docs and pricing, not hands-on tests. Example: "How we score: agent jobs 30% · oversight 25% · free and entry access 20% · admin and data 25%. Editorial scores from official docs and pricing, not hands-on tests."
  3. "Vendors can't pay for a ranking. Some links earn us a commission."
- Empty filter state: "No tools match this filter."

#### 1.5 Sponsored slot (optional)

One labelled sponsor box between the table and the reviews. "Featured partner. Sponsorship never affects our rankings."

#### 1.6 The reviews

- Eyebrow: `THE REVIEWS`
- **H2**: keyword-led, `The 7 best <topic>, reviewed`
- **One block per tool, in rank order**: the card, then the image, then the fields in continuous scroll. No box around the fields and no Show more toggle.
- **The card (boxed):** rank, initials or logo, **H3 tool name**, best-for tag, lead, score and Visit button.
  - **The lead is 2 to 3 lines in every card**, never 1 and never 4 or more (user, 2026-11-15).
  - In the card that is about 48 characters a line, so **one sentence of 15 to 24 words, 95 to 145 characters**.
  - Write it AEO-friendly: a direct definition plus the main finding. Example: "Cursor is an AI code editor for macOS, Windows and Linux whose agent edits files and runs commands from a prompt."
- **Image under every card** (user, 2026-11-15), chosen topic by topic. The brief sets `images: screenshot` or `images: logo`.
  - **screenshot**: for apps and platforms with a product UI to show.
    - The tool's public homepage, captured by us in a headless browser at 1280×800.
    - Saved as WebP, 150 KB at most, at `/images/<slug>/<tool-id>.webp`.
    - Full column width with a 1px border.
    - Alt text "<Tool> homepage"; caption "<Tool> homepage, captured <date>".
  - **logo**: for SDKs, frameworks and APIs, or when a homepage blocks capture or shows nothing useful.
    - The official logo from the vendor's press or brand page, saved to `/logos/`.
    - It replaces the initials in the card, and a larger copy (about 120px) sits on a neutral panel under the card.
  - Never use an image that names or shows an excluded vendor.
- **Fields under the image: each label is an H4 heading in sentence case** (user, 2026-11-15: "keep them in h4 and better visible … don't write these in title case").
  - The headings are `Why we picked it`, `Who it's for`, `Standout features`, `Integrations`, `Pricing`, `Pros`, `Cons`. Never all caps, never Title Case.
  - On the page: 18px, weight 600, dark text, with space above.
  - Pros and Cons sit side by side, each H4 with a green or red marker.

| Field (H4) | What to write | Limit |
|---|---|---|
| Overview (optional, no heading) | What the tool is, if the lead didn't say it | 1 paragraph, at most 2 sentences, 45 words |
| Why we picked it | The documented reasons it ranks here, tied to the criteria it scored best on | 2 to 3 sentences in 1 to 2 short paragraphs, 70 words at most |
| Who it's for | The team or user type it suits | 1 sentence, 25 words at most |
| Standout features | Bullets: the feature name in bold, then what it does, from the vendor's docs | 3 to 5 bullets, 20 words at most each |
| Integrations | "Integrations include A, B, C…" from the vendor's integration docs; allowed vendors only | 1 line, 4 to 8 names |
| Pricing | Free tier or not, entry paid price, billing basis | 1 line, 30 words at most |
| Topic field (optional) | One extra field when the topic needs it, for example `Free plan` on a free-tools list | 1 line, or 2 to 4 bullets |
| Pros | Documented strengths | 3 bullets, 12 words at most each |
| Cons | Documented limits | 3 bullets, 12 words at most each |
| Score breakdown | The per-criterion scores, shown as the dark strip | 1 line |

- **Length per tool:** about 180 to 260 words below the card, with no free-form extra paragraphs.
- **Say it once.** The lead, Why we picked it, Pros, Cons and the FAQ each add something new.
- **Markdown shape in final.md.** The converter reads exactly this shape. Field labels stay in caps in the markdown; the build turns them into sentence-case H4s.

  ```markdown
  <card lead: one sentence, 15 to 24 words>
  <!-- END OF CARD -->
  <optional overview, 1 short paragraph>

  - **WHY WE PICKED IT:** …
  - **WHO IT'S FOR:** …
  - **STANDOUT FEATURES:**
    - **Feature name:** what it does.
  - **INTEGRATIONS:** Integrations include …
  - **PRICING:** …
  - **PROS:**
    - …
  - **CONS:**
    - …
  - **SCORE BREAKDOWN:** Criterion 9.5 · Criterion 9.0 · …
  ```

- Data fields per tool (matches the `TOOLS` array): `id, name, initial, bestFor, bestForShort, score, price, priceSort, freeTier, deployment, sso, site, scores, summary, fields, image`

#### 1.7 Also considered: removed (user, 2026-11-15)

There is no "also considered" section on the page. Candidates that missed the list stay in research.md with the reason.

#### 1.8 How to choose: removed (user, 2026-11-15)

There is no "how to choose" section. Buying guidance goes in the short answer ("Pick X if…"), the Who it's for fields and the FAQ.

#### 1.9 FAQ

- Eyebrow: `FAQ`
- **H2**: `FAQs about <topic>` (keyword-led; replaces "Questions people actually ask")
- 4 to 5 questions people search for.
- Each answer opens with a one-sentence direct answer, then 1 to 2 more sentences, 60 words at most in total.
- Question pattern:
  - What is the best <topic> for <common need>?
  - Is there a free <topic>?
  - How do <topic> differ from <neighbouring category>?
  - <Tool A> or <Tool B>? (link to the comparison page when it is live)

#### 1.10 Footer blocks

- **About the author**: name, role, 1 to 2 sentences
- **Submit CTA**: "Built a <topic> tool? Send it in. We review every submission against the same rubric. Listing is free." → `Get your tool listed`

#### 1.11 Sidebar and interactive parts (the build handles these)

- **Left sidebar**: `ON THIS PAGE` (The short answer · the table H2 · The reviews · FAQ) and `JUMP TO TOOL` (ranked list)
- **Right sidebar**: sponsored ad (labelled) and newsletter box ("The Tuesday Table")
- **Compare tray**: when 1 to 3 tools are ticked, a bar shows `n/3`, the names, `Clear` and `Compare`. The side-by-side view shows each tool's best for, pricing, deployment, score and Visit site.

---

## 2. Review page

Reference: `/playwright-review/`, template `Review.dc.html`.

**Purpose**: one tool, tested hands-on, with a score you can trust.

### Page title and meta

- `<title>`: `<Tool> review | TheDevEdit`
- H1: `<Tool> review`

### Section order

#### 2.1 Hero

- Tool initials or logo
- Eyebrow: `// TOOL REVIEW` and its rank in the main list (`#1 IN AUTOMATION TESTING`)
- **H1**: `Playwright review`
- **Dek** (1 to 2 sentences): what the tool is, who makes it, and the headline test result. Example: "Open-source browser automation from Microsoft. The most stable framework in our 2026 test, with zero flaky steps across 30 runs."
- **Score**: `9.4 /10 our score`
- Buttons: `Visit <domain> ↗` and `Compare with others`

#### 2.2 Tabs

Four tabs, in this order: **Overview · Pricing · Our test · Alternatives**

#### 2.3 Overview tab

1. **Screenshots**: 3 figures with numbered captions and the URL shown
   - `Fig 1 — Homepage, first viewport`
   - `Fig 2 — <key feature> docs`
   - `Fig 3 — <second feature> docs`
2. **`// OUR VERDICT`**: 2 sentences. Who should use it ("If your engineers write tests, start here.") and the strongest finding from our test, with a comparison to a named rival.
3. **`WHAT WE LIKED`**: 4 points, each starting with `+`, each tied to a test result or a fact ("Zero flaky steps across 30 runs, thanks to auto-waiting").
4. **`WHAT HELD IT BACK`**: 3 points, each starting with `–`, documented limits only.
5. **`// SCORE BREAKDOWN`**: 5 criteria, each with its weight and score. Reference weights:

| Criterion | Weight |
|---|---|
| Stability | 30% |
| Authoring speed | 20% |
| Browser coverage | 20% |
| CI fit | 15% |
| Price at scale | 15% |

Keep these 5 criteria and weights for every review in the same category, so scores compare across reviews. The overall score is the weighted total.

#### 2.4 Pricing tab

- **H2**: `Pricing, checked <date>`
- **3 plan cards**, each with: plan name (caps), price, one line on what it includes or how we estimated it
  - For a paid tool: the plans on the vendor's pricing page
  - For a free tool: the real cost (framework, CI runners, optional cloud grid), with the estimate method stated
- **One paragraph** on the real cost at scale ("At 10 parallel workers our 50-step suite used about 6 runner-minutes per run.")

#### 2.5 Our test tab

- **H2**: `Our test, run by run`
- **Terminal block**: the real command, workers used, one line per browser with time, total passed, artifact path
- **4 stat tiles**: `50/50 STEPS PASSED` · `38s MEDIAN RUN` · `0 FLAKY STEPS` · `2h 40m TO AUTHOR`

#### 2.6 Alternatives tab

- **H2**: `<Tool> alternatives`
- 4 rows, each with: initials, name, "Best for…" line, score (links to that tool's review)
- Link to the full `/<tool>-alternatives/` page when it exists

#### 2.7 Sidebar: `AT A GLANCE`

7 spec rows (reference set, adapt the keys to the category):

| Key | Example |
|---|---|
| Pricing | Free, open source |
| License | Apache 2.0 |
| Deployment | Self-hosted |
| Languages | TS, JS, Python, Java, .NET |
| Browsers | Chromium, Firefox, WebKit |
| Maintainer | Microsoft |
| First release | 2020 |

Then:
- **`APPEARS IN`**: every list that ranks this tool, with its rank (`#1 in Best automation testing tools`, `#3 in BrowserStack alternatives`)
- **Footer line**: `Tested by <author>. Updated <date>.`

### Review data fields

`scores` [criterion, weight, score] · `specs` [key, value] · `plans` {name, price, description} · `pros` [] · `cons` [] · `alts` [initials, name, best for, score]

---

## 3. Comparison page (X vs Y)

Example URL: `/cypress-vs-playwright/`. No template exists yet.

> **Source note.** You asked for CTO Club's fixed structure from https://thectoclub.com/tools/testmu-ai-vs-browserstack/. That page blocks automated access, so I could not read it directly. The layout below follows the standard CTO Club "X vs Y: Comparison & Expert Reviews" format, adapted to TheDevEdit's blocks. **Check it against the real page before building the template.** If you save that page from your browser (Ctrl+S) into the repo, the section list can be matched exactly.

**Purpose**: two tools, same tests, one verdict per use case.

### Page title and meta

- `<title>`: `<Tool A> vs <Tool B> | TheDevEdit` (alphabetical in the URL; the page may lead with the better-known tool)
- H1: `<Tool A> vs <Tool B>: Comparison & Expert Review for <year>`

### Section order

#### 3.1 Header

- Eyebrow: `// HEAD TO HEAD`, `UPDATED <date>`
- **H1** as above
- **Dek**: 1 to 2 sentences on how they were compared ("We ran the same 50-step suite on both and priced 5 parallel sessions.")
- **Byline row** and **Trust line**

#### 3.2 `// THE SHORT ANSWER`

- 2 to 3 sentences: the main difference, then "Choose A if… Choose B if…"
- Two verdict cards side by side, one per tool: initials/logo, name, score `/10`, "Best for…" line, `Visit site ↗`, `Read review`

#### 3.3 `// AT A GLANCE`

One summary table, tools as columns:

| Row | Tool A | Tool B |
|---|---|---|
| Our score | /10 | /10 |
| Best for | | |
| Starting price | as of date | as of date |
| Free plan / free trial | | |
| Deployment | | |
| Languages / frameworks | | |
| Browsers / devices | | |
| Standout feature | | |

Price note under the table.

#### 3.4 `// OVERVIEW`

- **H2**: `What <Tool A> and <Tool B> do`
- One short block per tool (3 to 4 sentences): what it is, who makes it, who uses it, its main approach

#### 3.5 `// SCORES`

- **H2**: `How they scored`
- The same weighted criteria used in reviews for that category (Stability 30%, Authoring speed 20%, Browser coverage 20%, CI fit 15%, Price at scale 15%), shown as one table with both tools' scores and a winner mark per row
- One sentence per criterion explaining the gap

#### 3.6 `// FEATURE BY FEATURE`

- **H2**: `Feature comparison`
- One H3 per feature area (for example Test authoring, Browser and device coverage, Debugging, CI/CD integrations, AI features, Reporting, Security and compliance)
- Under each H3: 2 to 4 sentences, a **winner line** (`Winner: <Tool>` or `Tie`), and the evidence (test result or doc link)

#### 3.7 `// PRICING`

- **H2**: `Pricing, checked <date>`
- Side-by-side plan table: plan name, price, billing basis, what's included, for each tool
- One "real cost" line at a fixed load (for example 5 parallels, annual billing)

#### 3.8 `// OUR TEST`

- **H2**: `Same suite, both tools`
- Terminal block for each tool, then a stat row: steps passed, median run, flaky steps, time to author

#### 3.9 `// STRENGTHS`

- **H2**: `Where each one wins`
- Two columns: `WHERE <A> WINS` (3 to 4 `+` points) and `WHERE <B> WINS` (3 to 4 `+` points)
- Then `WHAT HOLDS EACH BACK` (2 to 3 `–` points per tool)

#### 3.10 `// WHO SHOULD CHOOSE WHICH`

- **H2**: `Choose <A> if… Choose <B> if…`
- Two lists of 3 to 4 concrete situations each (team type, stack, budget, scale)

#### 3.11 `// ALTERNATIVES`

- **H2**: `If neither fits`
- 3 rows: initials, name, "Best for…" line, score, link to its review

#### 3.12 `// FAQ`

- `Questions people actually ask`, 4 to 5 questions. Pattern:
  - Is <A> better than <B>?
  - Is <A> cheaper than <B>?
  - Can I move my tests from <A> to <B>?
  - Which is better for <specific need>?
  - Do <A> and <B> support <key feature>?

#### 3.13 Footer

- **Bottom line**: 2 to 3 sentences, the final call per use case
- Related links: both reviews, both alternatives pages, the main tools list
- About the author

---

## 4. Alternatives page

Reference: `/browserstack-alternatives/`, template `Alternatives.dc.html`.

**Purpose**: help someone leaving one tool pick the right replacement, and tell them honestly when to stay.

### Page title and meta

- `<title>`: `<Tool> alternatives | TheDevEdit`
- H1: `The <N> best <Tool> alternatives for <year>`

### Section order

#### 4.1 Header

- Eyebrow: `// ALTERNATIVES`, `UPDATED <date>`
- **H1**: `The 7 best BrowserStack alternatives for 2026`
- **Dek**: what we moved and how we compared. "We moved the same 50-step suite off BrowserStack Automate and onto seven other grids, then compared price at five parallel runs."
- **Byline row**: author + role, `9 min read · 7 grids tested · prices checked <date>`
- **Trust line** with shield icon

#### 4.2 `// THE SHORT ANSWER`

- 2 to 3 sentences: the best alternative for most teams and why, then "Choose X for…, or Y if…"

#### 4.3 `// WHY TEAMS SWITCH`

- **H2**: `Three reasons we heard again and again`
- 3 numbered reasons (`01`, `02`, `03`). Each has a short title and one sentence with a number from our test.
  - `01 Parallel runs get expensive`: "At 5 parallels the bill tripled from the entry plan."
  - `02 Queue times at peak hours`: "Our runs waited up to 90 seconds for a session during US mornings."
  - `03 No help writing tests`: "Teams now want AI to write and heal tests too."

#### 4.4 `// COMPARISON TABLE`

- **H2**: `Side by side with <Tool>`
- Includes the original tool as a row for reference
- **Columns** (reference set, adapt to the category): `TOOL` · `5 PARALLELS` (price at a fixed load) · `REAL DEVICES` · `FREE TIER` · `AI AUTHORING` · `BEST FOR`
- Price note: "Monthly price for 5 parallel desktop sessions, annual billing, checked <date>."

#### 4.5 `// THE ALTERNATIVES`

- **H2**: `When to switch, and when to stay`
- **One block per alternative**, ranked:

| Field | What to write |
|---|---|
| Rank + initials | `01`, `Tm` |
| **H2**: tool name | `TestMu AI` |
| Price line | price at the fixed load + free tier note (`$395/mo at 5 parallels · free tier`) |
| Button | `Visit site ↗` |
| `SWITCH IF` | One sentence: the situation where this tool beats the original |
| `STAY WITH <TOOL> IF` | One sentence: the situation where the original is still better |

The "stay if" line is required for every alternative. It's what makes the page honest.

The section 0 writing limits apply here too: `SWITCH IF` and `STAY WITH <TOOL> IF` are one sentence each, 25 words at most. When an alternative gets a full write-up, it uses the field structure and limits in 1.6 (Why we picked it, standout features, integrations, pricing, pros and cons).

#### 4.6 `// MIGRATION`

- **H2**: `Moving your suite takes one config change` (or whatever our test actually found)
- **Code block**: the real before/after config diff (`- hostname: …` / `+ hostname: …`)
- One sentence on how many tools accepted the suite without code changes ("six of seven")

#### 4.7 `// FAQ`

- `Questions people actually ask`, 4 questions. Pattern:
  - What is the cheapest <Tool> alternative?
  - Is there a free <Tool> alternative?
  - Which alternative has the most <key capability>?
  - Can I keep my existing tests?

#### 4.8 Related links

3 `RELATED` links: the main tools list for the category, a neighbouring list, and another alternatives page.

---

## 5. Before publishing (all types)

- [ ] URL follows section 0, and the post is registered in `content.js`
- [ ] The number in the H1 matches the number of items
- [ ] Every price has a "checked <date>" note
- [ ] Every test claim (steps, timings, flaky counts) comes from a real run. Never invent test results.
- [ ] Scores use the category's standard criteria and weights
- [ ] The trust line and the How we test link are present
- [ ] Sponsored blocks are labelled and sit outside rankings and verdicts
- [ ] Cross-links: list ↔ review ↔ comparison ↔ alternatives for every tool that has those pages
- [ ] FAQ questions are not already answered in the body
- [ ] No chunky paragraphs: every paragraph is at most 2 sentences and 45 words (section 0)
- [ ] Every review uses the 1.6 fields in order and stays within each field's limit (bullets for features, pros and cons)
- [ ] Every name in an `INTEGRATIONS` line comes from the vendor's docs and passes the excluded-vendors check
