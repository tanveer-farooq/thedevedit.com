# TheDevEdit — static design prototype

Upload the contents of this folder to the root of a GitHub Pages repo, served at the domain root (thedevedit.com). Pages use root-absolute paths (`/support.js`, `/_ds/…`), so a project subpath like `user.github.io/repo/` won't work, and neither will a `/docs` folder.

- `index.html` is the homepage (formerly `Home 3.dc.html`, which now redirects to `/`).
- `.nojekyll` is required — without it GitHub Pages hides the `_ds/` folder (design system assets).
- Pages must be served over http(s); opening files directly from disk won't load shared header/footer.
- Concept homepages: `Home.dc.html`, `Home 2.dc.html`, `Home 4.dc.html`.

## URLs

Every URL is lowercase, hyphenated and ends in a slash. Posts sit at the root, never inside a category or type folder.

| Page | URL | Template |
|---|---|---|
| Category hub | `/testing/` | `Category Hub.dc.html` |
| Post type page | `/tools/`, `/reviews/`, `/alternatives/`, `/compare/` (filter: `?category=testing`) | `Index.dc.html` |
| Tools post | `/automation-testing-tools/` (no "best", year or count) | `Listicle.dc.html` |
| Review | `/playwright-review/` | `Review.dc.html` |
| Alternatives | `/browserstack-alternatives/` | `Alternatives.dc.html` |
| Comparison | `/cypress-vs-playwright/` (tools in alphabetical order) | none yet |
| Info pages | `/how-we-test/`, later `/about/`, `/contact/` | `How We Rank.dc.html` |
| Authors | `/authors/` and `/authors/zaid-bin-ashraf/` (`author="<slug>"` on the import; data in `AUTHORS` in `content.js`) | `Author.dc.html` |

Each clean URL is a folder holding a small `index.html` that imports its template with `<dc-import>` and sets the page `<title>`. To add a page, copy one of those folders and change the title and import. The old `.dc.html` addresses redirect to their clean URLs.

## Category hubs

Each hub (`/testing/`, `/ai/` …) uses `Category Hub.dc.html`, laid out as a buyer's guide to the whole category. Top to bottom: headline, a **search box** (matches the category's tools, rankings, reviews, comparisons and alternatives as you type; Enter opens the top match, Esc clears), the byline, **Our picks** (reviewed tools by score, with a "best for" label), **Compare at a glance**, **Which type of tool do you need?** (each ranking with a one-line summary, plus its top three once that list is published), **How we score**, comparisons and alternatives, FAQs and **Recently updated**.

- Copy for each category lives in `HUBS` in `content.js`: `types` (one line and top three per ranking), `bestFor` (label per reviewed tool) and `faqs`. The page's data comes from `hubModel()` in the same file.
- When you publish a new Tools list or review in a category, add its entry to `types` or `bestFor`, or the hub shows it without a summary or label.
- The byline lists the authors in `AUTHORS` whose `beats` include the category, otherwise "TheDevEdit Editorial Team".
- Copy on hubs must match how the published pages say they were scored (official docs and pricing), so don't claim hands-on tests there.

Design options that weren't chosen stay up for reference at `/hub-preview/` (Editorial, Finder, Scoreboard; `?category=` switches category). `/hub-preview/guide/` shows the live template.

To keep hubs from competing with their own pages:
- A hub owns its whole category. No Tools post may cover a whole category: "Cyber security tools" and "Computer security software" overlap with `/security/` and should be folded in or narrowed.
- A hub only summarises. The field guide gives a type 1–2 lines and three names, then links out. The full ranking of a type lives only on its Tools post.
- A post sits on at most two hubs (`cat` plus one `also`), so hubs don't fill up with the same pages.

Posts live in `content.js`, each tagged with one main category (`cat`), one type (`type`) and, at most, one extra category hub to appear on (`also`). A tool keeps the same slug in its review, alternatives and comparison URLs.
