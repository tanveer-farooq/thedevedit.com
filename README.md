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

Posts live in `content.js`, each tagged with one main category (`cat`), one type (`type`) and, at most, one extra category hub to appear on (`also`). A tool keeps the same slug in its review, alternatives and comparison URLs.
