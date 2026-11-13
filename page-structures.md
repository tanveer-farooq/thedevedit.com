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
| **Eyebrow label** | Small mono label above each section heading, written `// SECTION NAME` (for example `// THE SHORT ANSWER`). |
| **Byline row** | Author name and role, "Reviewed by <name>" when there is a second reviewer, read time, a test count ("10 tools tested", "30 test runs"), and the date prices were checked. |
| **Trust line** | "We test every tool ourselves, and vendors cannot pay for a ranking. Some links earn us a commission." plus a link to **How we test** (`/how-we-test/`). |
| **Updated date** | `UPDATED <MON DD, YYYY>` at the top of the page. |
| **Score** | One decimal out of 10 (`9.4 /10`). |
| **Price note** | Every price table ends with what was priced and when ("Prices checked by hand on Sep 26, 2026. Annual billing, entry paid plan."). |
| **Terminal block** | A short CLI-style log of our test run: command, what ran, checkmarks for results, saved report path. Shows the testing really happened. Only use real runs. |
| **FAQ** | Heading "Questions people actually ask", 4 to 5 questions as an accordion, 2 to 4 sentence answers. |
| **Sponsored box** | Clearly labelled `SPONSORED` / `AD`, with "Sponsorship never affects our rankings." Never inside a ranking or verdict. |
| **Tool initials** | Two-letter mark (`Pw`, `Tm`, `Cy`) or the tool's logo from `/logos/`. |

---

## 1. Tools page (best-of list)

Reference: `/automation-testing-tools/`, template `Listicle.dc.html`.

**Purpose**: rank N tools for one job, after testing all of them the same way. Default N is 10.

### Page title and meta

- `<title>`: `Best <topic> tools | TheDevEdit`
- H1: `The <N> best <topic> tools for <year>` (the number must equal the number of tools reviewed)

### Section order

#### 1.1 Header

- Eyebrow: `// BEST-OF LIST`, `UPDATED <date>`, and a `TOP POST` tag when it applies
- **H1**: `The 10 best automation testing tools for 2026`
- **Dek** (1 to 2 sentences): what we did to test, in concrete terms. Example: "We wrote the same 50-step checkout suite in every tool, ran it on three browsers, and checked every price by hand. Here is what held up."
- **Byline row**: author + role, reviewer, `14 min read · 10 tools tested · 30 test runs`
- **Trust line** with the How we test link

#### 1.2 `// THE SHORT ANSWER`

- **One paragraph, 2 to 3 sentences**: the #1 pick and why, then "Pick X if…" for two other needs.
  Example: "Playwright is the best automation testing tool for most teams that write code: free, fast and stable across Chromium, Firefox and WebKit. Pick Katalon if testers need low-code. Pick TestMu AI if you need AI-written tests…"
- **3 quick-pick cards**, each with:
  - label: `BEST OVERALL`, `BEST LOW-CODE`, `BEST FOR ENTERPRISE` (or other "best for" labels that fit the topic)
  - tool initials or logo, tool name
  - one line on why (under 12 words)
  - buttons: `Visit site ↗` and `Read review`

#### 1.3 `// HOW WE TESTED`

- **H2**: a short claim about the method, for example "One suite, ten tools, no shortcuts."
- **Terminal block**: suite name, what was loaded (`10 tools · 50 steps · 3 runs each`), results with ✓ / ◆ markers, report path
- **One sentence on the scoring criteria**: "Each tool was scored on stability, authoring speed, browser coverage, CI fit and price at 10 parallel runs." plus the How we test link

#### 1.4 `// COMPARISON TABLE`

- **H2**: `All 10 at a glance`
- **Filters** above the table (for example Free tier, Open source, Cloud, Low-code) and a **Sort** control: Our ranking, Rating, Price low to high
- "Tick up to 3 tools to compare side by side" (compare tray, see 1.11)
- **Columns**: `TOOL` (rank + initials + name) · `BEST FOR` (short, 2 to 4 words) · `PRICING` (starting price) · `FREE TIER` (Yes / Trial only) · `DEPLOYMENT` (Self-hosted / Cloud / Both) · `SCORE` (/10) · `Visit ↗`
- **Price note** under the table
- Empty filter state: "No tools match this filter."

#### 1.5 Sponsored slot (optional)

One labelled sponsor box between the table and the reviews. "Featured partner. Sponsorship never affects our rankings."

#### 1.6 `// THE REVIEWS`

- **H2**: `The 10 tools, reviewed`
- **One block per tool, in rank order.** Each block has:

| Field | What to write |
|---|---|
| Rank label + initials | `#1`, `Pw` |
| **H2**: tool name | `Playwright` |
| Best-for tag | `Best overall`, `Best for enterprise scale` |
| Summary | 1 to 2 sentences: the main finding from our test |
| Score | `9.4 /10` |
| Button | `Visit <tool> ↗` |
| Screenshot | Homepage capture with caption `<Tool> homepage, captured <date>` and the domain shown |
| `WHO IT'S FOR` | One sentence naming the team type |
| `STANDOUT FEATURE` | One named feature and what it does |
| `PRICING` | Free tier or not, entry price, billing basis |
| `LIMITATIONS` | 1 to 2 honest, documented limits |
| `our test` strip | `✓ 50/50 steps passed` · `median 38s` · `0 flaky` · `authoring 2h 40m` |
| Expand toggle | "Show more / Show less" for the detail fields |

- Data fields per tool (matches the `TOOLS` array): `id, name, initial, bestFor, bestForShort, score, price, priceSort, freeTier, oss, deployment, langs, summary, whoFor, standout, pricingDetail, limits, pass, median, flaky, authoring`

#### 1.7 `// ALSO CONSIDERED`

- **H2**: `Tested, but not in the top 10`
- 6 to 8 small cards: initials, name, **one line on why it missed the list** ("Mobile-only. Covered in our mobile testing list.")

#### 1.8 `// HOW TO CHOOSE`

- **H2**: `Four questions, in this order.`
- 4 numbered steps. Each has a question as the title and a 1 to 2 sentence answer that names tools. Reference steps:
  1. Who writes the tests?
  2. Which browsers and devices matter?
  3. Where will tests run?
  4. What does it cost at 10 parallel runs?

#### 1.9 `// FAQ`

- **H2**: `Questions people actually ask`
- 5 questions. Pattern from the reference page:
  - What is the best free <topic> tool?
  - Is <legacy tool> still worth learning in <year>?
  - Which <topic> tool is best for beginners?
  - Can AI <do the job>?
  - <Tool A> or <Tool B>? (link to the comparison page)

#### 1.10 Footer blocks

- **About the author**: name, 1 to 2 sentences of real experience with numbers ("11 years in test automation… shipped suites past 4,000 tests"), `More from <name>`
- **Submit CTA**: "Built a <topic> tool? Send it in. We review every submission with the same suite. Listing is free." → `Get your tool listed`

#### 1.11 Sidebar and interactive parts (template handles these)

- **Left sidebar**: `ON THIS PAGE` (The short answer · How we tested · Comparison table · The 10 tools, reviewed · How to choose · FAQ) and `JUMP TO TOOL` (ranked list)
- **Right sidebar**: sponsored ad (labelled) and newsletter box ("The Tuesday Table")
- **Compare tray**: when 1 to 3 tools are ticked, a bar shows `n/3`, the names, `Clear` and `Compare`. The side-by-side view shows for each tool: BEST FOR, PRICING, DEPLOYMENT, LANGUAGES, OUR TEST, LIMITATIONS, score, Visit site.

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
