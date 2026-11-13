# Content Rules: Tech Listicles

Source of truth for every agent in the tech listicle pipeline (researcher-writer, auditor, formatter).
When a rule here conflicts with accuracy, accuracy wins.

> Accurate first. Useful second. Clear third. Optimized without compromising the first three.

---

## 1. Writing standards

- **Audience**: B2B SaaS and technology buyers and practitioners (engineering leads, QA managers, DevOps, product and IT decision makers) unless the brief says otherwise. Assume they are smart and short on time.
- **Language**: US English unless the brief says otherwise.
- **Sentences**: average 20 words or fewer. Mix short and medium sentences. One idea per sentence.
- **Paragraphs**: 1 to 4 sentences. One topic per paragraph.
- **Voice**: active voice. Address the reader as "you" when it helps.
- **Jargon**: use the correct technical term, and define it on first use if the audience may not know it.
- **Numbers**: use numerals for statistics, prices, and counts ("7 tools", "$29 per user per month").
- **Names**: use exact official product and company names with official capitalization (for example "GitHub Actions", not "Github actions").
- **Dashes**: no em dashes (—). Use a comma, colon, period, or parentheses.
- **Formatting**: tables for comparisons, numbered lists for steps, bullets for unordered sets. Bold only key terms, sparingly.

## 2. No-fluff rules

Every sentence must carry at least one of: information, evidence, context, an example, an explanation, a comparison, or a practical takeaway. Delete any sentence that carries none.

Cut on sight:
- generic openers ("Technology continues to change how businesses operate.")
- obvious statements the reader already knows
- filler transitions ("With that said,", "Now, let's take a look at")
- summaries that repeat the paragraph above
- sentences that only restate the heading
- hype adjectives without evidence ("powerful", "innovative", "best-in-class")
- conclusions that add nothing ("The right choice depends on your needs.")

Fluff: "Choosing the right tool is crucial for success in today's competitive market."
Useful: "If your team runs more than 500 tests per build, parallel execution limits matter more than per-seat price."

## 3. Directness rules

- Answer first, then explain.
- Keep the introduction to about 120 words or fewer, with the direct answer in the first 40 to 60 words.
- No "In this article, we will..." or "Let's dive in."
- Cut hedges that don't protect accuracy ("very", "really", "quite", "somewhat", "arguably"). Keep hedges that do ("as of October 2026", "according to the vendor's documentation").
- If a paragraph can be cut in half without losing meaning, cut it.

## 4. Humanization rules

Write like an experienced practitioner explaining something to a colleague.

- Vary sentence length and structure. Avoid paragraphs that all follow the same pattern.
- Use concrete specifics (names, numbers, versions, workflows) instead of abstractions.
- Don't default to lists of three. Use as many items as the facts support.
- Avoid "not only X but also Y" and "X isn't just Y, it's Z".
- Don't open sections with rhetorical questions.
- Don't end paragraphs with a moral or summary line.
- No forced casualness ("Let's be honest", "Here's the thing", "Spoiler alert").
- No fake enthusiasm or exclamation marks.
- Opinions are allowed only when labelled as opinion and backed by a reason.
- Listicle entries must not read as copies of each other with the names swapped.

## 5. Forbidden AI-sounding language

Avoid these words and phrases. A term is allowed only when it is technically necessary in its literal sense (for example "npm ecosystem", "robust statistics", "navigate to Settings").

| Avoid | Use instead |
|---|---|
| delve, dive into, deep dive | look at, explain, cover |
| landscape, realm, space (as in "the testing landscape") | market, field, or name it |
| navigate (figurative), journey, embark | handle, process, start |
| leverage, harness, utilize | use |
| robust, powerful, cutting-edge, state-of-the-art, next-generation, best-in-class, world-class | state the specific capability |
| seamless, seamlessly, effortless | say what actually happens ("syncs on commit") |
| unlock, unleash, supercharge, elevate, empower, revolutionize, transform | state the outcome |
| game-changer, game-changing, transformative | state the effect and evidence |
| streamline (vague) | say what step is removed or sped up |
| in today's fast-paced / digital / ever-evolving world | cut |
| it's important to note, it's worth noting, notably | cut, just state it |
| plays a crucial / pivotal / vital role | say what it does |
| crucial, pivotal, paramount, essential (as filler) | important, or cut |
| a wide range of, a plethora of, a myriad of, a variety of | name them or give the number |
| comprehensive, ultimate, definitive (in titles/intros) | cut or be specific |
| holistic, synergy, foster, testament to | cut or be specific |
| boasts, stands out, shines | has, offers, differs because |
| look no further, whether you're X or Y | cut |
| in conclusion, to sum up, at the end of the day, ultimately | cut |
| elevate your X, take X to the next level | state the outcome |
| tailored, curated (as filler) | built for, selected by (with criteria) |

**New phrases**: the auditor proposes additions in each audit report. The lead asks the user before adding them here.

## 6. SEO checklist

- [ ] **Title / H1**: accurate, clear, primary keyword where natural, no clickbait, no stuffing. If it says a number ("9 best..."), the article lists exactly that many items.
- [ ] **SEO title**: 60 characters or fewer, keyword near the front where natural.
- [ ] **Meta description**: 150 to 160 characters, accurate, matches the article, gives a reason to click.
- [ ] **Slug**: short, lowercase, hyphenated, descriptive, no dates or stop-word clutter, stable (for example `/blog/ai-testing-tools`).
- [ ] **Headings**: one H1, logical H2s, H3 only when needed, each heading describes its section.
- [ ] **Keyword use**: primary keyword in the H1, within the first 100 words, and in at least one H2 where natural. Related and semantic terms used naturally. No forced exact-match repetition.
- [ ] **Internal links**: 3 to 5 relevant internal links with descriptive anchors when site context exists. No orphan pages.
- [ ] **External links**: authoritative, relevant, working, and they support the claim they sit on.
- [ ] **Freshness**: visible "Last updated" date. Time-sensitive facts carry "as of <Month YYYY>".

## 7. AEO checklist (answer engine optimization)

- [ ] Main question answered directly within the first 40 to 60 words.
- [ ] Major H2s map to real questions (what, how, why, vs, alternatives, cost) where it fits naturally.
- [ ] Definitions start with the term and say what it is in one sentence.
- [ ] Steps are numbered and actionable.
- [ ] A comparison table appears where comparison helps.
- [ ] Examples are concrete.
- [ ] FAQs: 3 to 6 genuine questions not already answered in the body, each answered in 2 to 4 sentences. No padding.
- [ ] Don't force every answer to 40 to 60 words. Accuracy and usefulness come first.

## 8. GEO checklist (generative engine optimization)

- [ ] Key facts are written as standalone sentences that name the entity ("TestRail's Professional plan starts at...", not "It starts at...").
- [ ] Explicit dates on anything time-sensitive.
- [ ] Every statistic names its source in the sentence or the linked anchor.
- [ ] A methodology section explains how items were chosen and ordered.
- [ ] Terminology and entity names are consistent throughout.
- [ ] Original information (first-party data, real workflows, SME input) is included when available, and never fabricated.
- [ ] No paragraph mixes several unrelated claims.
- [ ] A summary table lets a reader (or a model) extract the comparison at a glance.

## 9. E-E-A-T checklist

Target: 8/10 or higher, without inflation.

- **Experience**: real first-hand use, testing, workflows, or customer evidence, only when it actually happened and the brief's human input confirms it. Never write "we tested" or "our team found" otherwise.
- **Expertise**: technically correct explanations, correct terminology, depth where the reader needs it, SME review where appropriate.
- **Authoritativeness**: primary sources first, named author with relevant credentials (supplied by a human), references to official documentation.
- **Trust**: transparent sourcing, honest limitations for every item (including the client's product), disclosure of commercial relationships, current information, no unsupported guarantees.

## 10. Product / SaaS requirements

- Verify features, integrations, platform support, and deployment options from the vendor's official documentation, not from marketing pages alone or third-party listicles.
- **Pricing**: plan name, starting price, billing basis (per user, per month, annual), free tier or trial details, and "as of <Month YYYY>". If pricing is not public, say "pricing on request" or "contact sales".
- **Security and compliance** (SOC 2 Type II, ISO 27001, GDPR, HIPAA, and so on): only from the vendor's trust or security page. Say exactly what the vendor states.
- **Never upgrade a claim**: "helps with X" never becomes "automates X"; "supports X" never becomes "works with every X".
- **Limitations**: state them as documented facts ("does not list a self-hosted option in current documentation"), not as invented weaknesses.
- **Product status**: check for renames, acquisitions, deprecations, and sunsets before writing.
- **Client product**: included only if it meets the same inclusion criteria as every other item, with the same scrutiny, honest limitations, and a disclosure line. Never placed first without a methodology that justifies it.
- **Competitors**: factual comparison only. No "fastest", "most reliable", or "can't do X" without strong evidence.

## 11. Google crawler checklist (live URL only)

The auditor's section 23 has the full check. In summary, when a live URL exists:
HTTP 200 over HTTPS with no redirect chain; robots.txt does not block the page or its CSS, JS, and images; no accidental `noindex`/`nofollow` in meta robots or X-Robots-Tag; a self-referencing or correct canonical that returns 200; main content, H1, and links present in the raw HTML; content not hidden behind JS, clicks, or forms; internal links to the article; the canonical URL listed in the XML sitemap; consistent mobile content; one canonical version across HTTP/HTTPS, www/non-www, trailing slash, and parameters; valid JSON-LD that matches the visible content.
Never claim Googlebot access, indexing, or Search Console submission that was not actually verified.

## 12. Image SEO requirements

- **Filenames**: descriptive, lowercase, hyphenated (`testrail-test-run-dashboard.webp`, not `IMG_0042.png`).
- **Alt text**: describes what the image shows, 125 characters or fewer, keyword only if it is naturally part of the description. Decorative images get empty alt.
- **Format and size**: WebP or AVIF where supported, compressed (aim for under 200 KB), explicit width and height to avoid layout shift.
- **Loading**: lazy-load below-the-fold images only. Never lazy-load the hero or first image.
- **Content**: prefer original screenshots, dated when captured. Important information never lives only inside an image.
- **Placement**: next to the text it supports, with a caption when it adds context.
- **Crawlability**: image URLs return 200 and are not blocked by robots.txt.

## 13. Citation requirements

- Link the claim itself to its source with descriptive anchor text (never "click here", "source", or a bare URL).
- **Source priority**: (1) official product docs, (2) official company docs, (3) official product pages, (4) government, (5) standards bodies, (6) original research, (7) academic papers, (8) first-party case studies, (9) reputable industry research, (10) high-quality independent publications.
- Do not use SEO listicles, affiliate pages, scraped or AI-generated sites, anonymous blogs, or forum comments as evidence for facts.
- Statistics: cite the original source, not an aggregator that repeats it, and include the year of the data.
- Quotes: verbatim, attributed to a named person or organization, linked to the original.
- The writer records the access date of every source in `research.md`.
- Every important claim must be traceable to the claim table in `research.md`.

## 14. Listicle requirements

- **Methodology**: a short section stating inclusion criteria, how candidates were found, how they are ordered, and what was and was not done (for example "documentation and pricing review, no hands-on testing").
- **Ordering**: by use case, alphabetically, or by the stated criteria. No invented rankings. Use "best" only when the methodology and evidence justify it.
- **Count**: the title number matches the number of items.
- **Comparison table** near the top: name, best for, starting price (as of date), key differentiator.
- **Each item** covers the fields that matter for it: what it is (one line), best for, key capabilities (specific), pricing (as of date), integrations, limitations, differentiator. Do not force identical fields when they are not meaningful.
- **Distinct value**: every entry must give the reader something the others don't. No shared boilerplate.
- **Disclosure**: one line whenever the publisher's own product appears.
- **FAQ and conclusion**: only when they add value (see sections 2 and 7).
