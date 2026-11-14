// Single source of truth: 8 categories + every page, each tagged with exactly one category.
export const CATEGORIES = [
  { slug: 'ai', name: 'AI & LLMs', icon: 'AiAgent', desc: 'Coding assistants, agent frameworks, vector databases and the models behind them. Tested on real tickets, priced by hand.' },
  { slug: 'dev-tools', name: 'Developer Tools', icon: 'CodeXml', desc: 'Editors, emulators, terminals and app builders. Every tool installed, configured and used for a week.' },
  { slug: 'testing', name: 'Testing & QA', icon: 'TestFlask', desc: 'Automation, API, performance and visual testing. Every tool run against the same checkout suite.' },
  { slug: 'devops', name: 'DevOps & Observability', icon: 'Gauge', desc: 'CI/CD, monitoring, APM and incident response. Scored on setup time, alert quality and cost at scale.' },
  { slug: 'data', name: 'Data & Databases', icon: 'StackDatabase', desc: 'ETL, integration, visualization and the databases underneath. Benchmarked on the same 50 GB dataset.' },
  { slug: 'security', name: 'Security', icon: 'ShieldCheck', desc: 'SIEM, endpoint, application and identity security. Scored on detection coverage and noise.' },
  { slug: 'it-management', name: 'IT Management', icon: 'DesktopSettings', desc: 'Remote desktop, MDM, RMM and asset management for IT teams of 5 to 500.' },
  { slug: 'productivity', name: 'Productivity & Collaboration', icon: 'Notes', desc: 'Docs, wikis, project tracking and team chat. Tested with a real 12-person team for a month.' },
];

export const TYPES = {
  tools: { label: 'Tools', eyebrow: 'TOOLS', h1: 'All tool lists', desc: 'Every ranked list we publish, re-tested and re-priced at least monthly.' },
  reviews: { label: 'Reviews', eyebrow: 'REVIEW', h1: 'All reviews', desc: 'One page per tool: our score, pricing, what we tested and who it suits.' },
  compare: { label: 'Compare', eyebrow: 'COMPARISON', h1: 'All comparisons', desc: 'Two tools, the same tests, one verdict.' },
  alternatives: { label: 'Alternatives', eyebrow: 'ALTERNATIVES', h1: 'All alternatives', desc: 'Switching away from a tool? Ranked replacements, with migration notes.' },
};

const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const ini = n => n.replace(/[^A-Za-z0-9 ]/g, '').split(' ').map(w => w[0]).join('').slice(0, 2).replace(/^(.)$/, (m) => n.slice(0, 2));

// [category, tool list topics[], reviews [name, one-liner, rating][], alternatives [tool][], comparisons [a,b][]]
const RAW = {
  ai: [
    ['AI tools', 'AI tools like ChatGPT', 'AI coding assistants', 'Vector databases', 'AI agent builders', 'Open source LLMs', 'AI automation tools', 'AI productivity tools', 'AI governance tools'],
    [['Claude Code', 'Terminal coding agent with strong multi-file edits', 7.5], ['GitHub Copilot', 'In-editor completions and chat, widest IDE support', 8.1], ['Cursor', 'AI-first code editor built on VS Code', 8.4], ['Pinecone', 'Managed vector database for production search', 8.5], ['LangChain', 'Framework for chaining LLM calls and tools', 8.1], ['Ollama', 'Run open models locally with one command', 8.6]],
    ['LangChain', 'GitHub Copilot', 'Pinecone'],
    [['cursor', 'github-copilot'], ['chroma', 'pinecone']],
  ],
  'dev-tools': [
    ['Code editors', 'Android emulators', 'Terminal emulators', 'App development software', 'No-code app builders', 'Git clients'],
    [['VS Code', 'Free, extensible editor most teams default to', 9.1], ['Android Studio', 'Official IDE with the fastest emulator', 8.7], ['Warp', 'Modern terminal with blocks and AI commands', 8.3], ['Docker', 'Container builds and local dev environments', 8.9], ['Podman', 'Daemonless, rootless Docker-compatible containers', 8.2], ['GitHub', 'Code hosting, reviews and Actions in one place', 9.0]],
    ['Docker', 'VS Code', 'BlueStacks'],
    [['docker', 'podman'], ['jetbrains', 'vs-code']],
  ],
  testing: [
    ['Automation testing tools', 'API testing tools', 'Performance testing tools', 'Visual testing tools', 'Mobile testing tools', 'Regression testing tools', 'Testing tools for Python'],
    [['Playwright', 'Open-source browser automation from Microsoft', 9.4], ['TestMu AI', 'Cloud grid with AI-native test authoring', 9.1], ['Cypress', 'Developer-friendly front-end testing', 8.7], ['Selenium', 'The original WebDriver standard', 8.2], ['Postman', 'API design, testing and mocking', 8.6], ['Grafana k6', 'Scriptable load testing in JavaScript', 8.4], ['Katalon', 'Low-code test automation suite', 7.9]],
    ['BrowserStack', 'Cypress', 'Selenium', 'Postman'],
    [['cypress', 'playwright'], ['playwright', 'selenium'], ['jmeter', 'grafana-k6']],
  ],
  devops: [
    ['APM tools', 'Network monitoring tools', 'Incident management software', 'CI/CD tools', 'Log management tools', 'Alert management software'],
    [['Datadog', 'Full-stack observability, priced per host', 8.6], ['Grafana', 'Open dashboards over any data source', 8.8], ['PagerDuty', 'On-call scheduling and incident response', 8.5], ['New Relic', 'APM with a generous free tier', 8.2], ['GitHub Actions', 'CI/CD built into your repo', 8.9], ['Sentry', 'Error tracking with performance traces', 8.7]],
    ['Datadog', 'PagerDuty', 'Jenkins'],
    [['datadog', 'new-relic'], ['github-actions', 'gitlab-ci']],
  ],
  data: [
    ['ETL tools', 'Data integration tools', 'Data visualization tools', 'Data governance tools', 'Database software', 'Data replication software'],
    [['Fivetran', 'Managed connectors for 500+ sources', 8.6], ['dbt', 'SQL transformations with tests and docs', 9.0], ['Airbyte', 'Open-source ELT with a large connector catalog', 8.3], ['Snowflake', 'Cloud data warehouse that scales storage and compute apart', 8.8], ['PostgreSQL', 'The default open-source relational database', 9.2], ['Tableau', 'Drag-and-drop dashboards for analysts', 8.1]],
    ['Fivetran', 'Tableau', 'Snowflake'],
    [['airbyte', 'fivetran'], ['bigquery', 'snowflake']],
  ],
  security: [
    ['SIEM tools', 'Endpoint security software', 'DAST tools', 'Cyber security tools', 'Mobile security software', 'Password managers'],
    [['CrowdStrike Falcon', 'Endpoint detection with low false positives', 9.0], ['Splunk', 'SIEM and log search at enterprise scale', 8.4], ['Burp Suite', 'The standard for web app security testing', 8.8], ['1Password', 'Team password manager with SSO and SCIM', 9.1], ['Snyk', 'Dependency and code scanning in CI', 8.5], ['Wiz', 'Agentless cloud security posture', 8.7]],
    ['Splunk', 'LastPass', 'Snyk'],
    [['1password', 'bitwarden'], ['crowdstrike-falcon', 'sentinelone']],
  ],
  'it-management': [
    ['Remote desktop software', 'MDM software', 'RMM software', 'Virtualization software', 'IT asset management software', 'Help desk software'],
    [['TeamViewer', 'Cross-platform remote access and support', 8.2], ['AnyDesk', 'Fast, lightweight remote desktop', 8.4], ['Jamf', 'Apple device management for business', 8.9], ['NinjaOne', 'RMM and patching for MSPs and IT teams', 8.7], ['VMware Workstation', 'Desktop virtualization for Windows and Linux', 8.1], ['Freshservice', 'ITSM help desk with asset tracking', 8.3]],
    ['TeamViewer', 'Jamf', 'ServiceNow'],
    [['anydesk', 'teamviewer'], ['jamf', 'kandji']],
  ],
  productivity: [
    ['Project management software', 'Wiki software', 'Note-taking apps', 'Team chat apps', 'Whiteboard tools', 'Documentation tools'],
    [['Notion', 'Docs, wikis and databases in one workspace', 8.8], ['Linear', 'Fast issue tracking built for software teams', 9.2], ['Jira', 'Configurable tracking for large orgs', 8.0], ['Slack', 'Team chat with the deepest integrations', 8.6], ['Confluence', 'Wiki that lives next to Jira', 7.8], ['Miro', 'Infinite whiteboard for workshops', 8.5]],
    ['Notion', 'Jira', 'Confluence'],
    [['linear', 'jira'], ['notion', 'obsidian'], ['miro', 'mural']],
  ],
};

const DATES = ['Sep 28', 'Sep 26', 'Sep 22', 'Sep 18', 'Sep 14', 'Sep 10', 'Sep 04', 'Aug 30'];
const pretty = s => s.split('-').map(w => w === 'ci' ? 'CI' : w === 'vs' ? 'VS' : w[0].toUpperCase() + w.slice(1)).join(' ').replace('Github', 'GitHub').replace('Bigquery', 'BigQuery').replace('Sentinelone', 'SentinelOne').replace('Crowdstrike', 'CrowdStrike').replace('Jetbrains', 'JetBrains').replace('Gitlab', 'GitLab').replace('New Relic', 'New Relic').replace('K6', 'k6').replace('Jmeter', 'JMeter').replace('Anydesk', 'AnyDesk').replace('Teamviewer', 'TeamViewer').replace('1password', '1Password');

// Only one post of each type has a page so far; every other post links to it.
const SAMPLE = { tools: '/automation-testing-tools/', reviews: '/playwright-review/', alternatives: '/browserstack-alternatives/' };
// Extra category hub a post also appears on (at most one), keyed by its URL. Its main category stays `cat`.
const ALSO = { '/docker-review/': ['devops'], '/docker-alternatives/': ['devops'], '/grafana-k6-review/': ['devops'], '/snyk-review/': ['dev-tools'], '/snyk-alternatives/': ['dev-tools'], '/vector-databases/': ['data'], '/pinecone-review/': ['data'] };

// URLs: every post sits at the root. Tools /{topic}/, reviews /{tool}-review/, alternatives /{tool}-alternatives/, comparisons /{a}-vs-{b}/ (alphabetical).
export const ITEMS = [];
for (const [cat, [lists, reviews, alts, comps]] of Object.entries(RAW)) {
  lists.forEach((t, i) => ITEMS.push({ type: 'tools', cat, title: `Best ${t.replace(/^([A-Z])(?=[a-z])/, c => c.toLowerCase())}`, summary: `${7 + (i % 4)} tools ranked after hands-on testing.`, url: `/${slug(t)}/`, date: DATES[i % 8] }));
  reviews.forEach(([n, d, r], i) => ITEMS.push({ type: 'reviews', cat, title: n, tool: n, logo: ini(n), summary: d, rating: r.toFixed(1), url: `/${slug(n)}-review/`, date: DATES[(i + 2) % 8] }));
  alts.forEach((n, i) => ITEMS.push({ type: 'alternatives', cat, title: `${n} alternatives`, tool: n, logo: ini(n), summary: `${6 + i} replacements, with migration notes.`, url: `/${slug(n)}-alternatives/`, date: DATES[(i + 1) % 8] }));
  comps.forEach(([a, b], i) => { const [x, y] = [a, b].sort(); ITEMS.push({ type: 'compare', cat, title: `${pretty(x)} vs ${pretty(y)}`, summary: 'Same tests, side by side, one verdict.', url: `/${x}-vs-${y}/`, date: DATES[(i + 3) % 8], la: ini(pretty(x)), lb: ini(pretty(y)) }); });
}
// Real, published articles: they link to their own page and override the placeholder summary and date.
const LIVE = {
  '/ai-tools/': { summary: '10 tools scored from official docs and pricing.', date: 'Nov 14' },
  '/ai-tools-like-chatgpt/': { summary: '7 assistants scored from official docs and pricing.', date: 'Nov 14' },
};
ITEMS.forEach(i => { i.href = LIVE[i.url] ? i.url : (SAMPLE[i.type] || '#'); if (LIVE[i.url]) Object.assign(i, LIVE[i.url], { live: true, pub: Object.keys(LIVE).indexOf(i.url) }); if (ALSO[i.url]) i.also = ALSO[i.url]; });

export const catBySlug = s => CATEGORIES.find(c => c.slug === s) || CATEGORIES[2];
export const inCat = (i, c) => i.cat === c || (i.also || []).includes(c);
export const reviewHref = name => ITEMS.find(i => i.type === 'reviews' && i.tool === name) ? SAMPLE.reviews : '#';
export const reviewUrl = name => `/${slug(name)}-review/`;
export const qs = k => { try { return new URLSearchParams(location.search).get(k); } catch (e) { return null; } };
export const load = () => Promise.resolve({ CATEGORIES, TYPES, ITEMS, catBySlug, qs, reviewUrl });
