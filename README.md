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

Each clean URL is a folder holding a small `index.html` that imports its template with `<dc-import>` and sets the page `<title>`. To add a page, copy one of those folders and change the title and import. The old `.dc.html` addresses redirect to their clean URLs.

## Category hub redesign (draft, not live)

`Category Hub v2.dc.html` is a proposed redesign of `Category Hub.dc.html`. No page imports it yet, so the live hubs are unchanged. In it, each hub (`/testing/`, `/ai/` …) is the guide to its whole category. Top to bottom: a masthead with the editor's note and page counts, **The shortlist** (every reviewed tool in the category, ranked by score, with a "best for" label), **Field guide** (each type of tool: what it's for, our top three, and a link to the ranking that owns it), **How we test** (the category's test bench), **Head to head** (comparisons and alternatives), **Latest from the desk**, FAQs and related categories. The copy for each category lives in `HUBS` in `content.js`.

To keep hubs from competing with their own pages:
- A hub owns its whole category. No Tools post may cover a whole category. Before v2 goes live, replace the "Cyber security tools" list with "Vulnerability scanners" (the v2 copy in `HUBS` already assumes this), since `/security/` is that page.
- A hub only summarises. The field guide gives a type 1–2 lines and three names, then links out. The full ranking of a type lives only on its Tools post.
- A post sits on at most two hubs (`cat` plus one `also`), so hubs don't fill up with the same pages.

Posts live in `content.js`, each tagged with one main category (`cat`), one type (`type`) and, at most, one extra category hub to appear on (`also`). A tool keeps the same slug in its review, alternatives and comparison URLs.
