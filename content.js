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
    ['AI tools', 'AI tools like ChatGPT', 'Free AI tools', 'AI agents', 'AI automation tools', 'Agentic AI platforms', 'AI coding assistants', 'Vector databases', 'AI agent builders', 'Open source LLMs', 'AI productivity tools', 'AI governance tools'],
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
  lists.forEach((t, i) => ITEMS.push({ type: 'tools', cat, topic: t, title:`Best ${t.replace(/^([A-Z])(?=[a-z])/, c => c.toLowerCase())}`, summary: `${7 + (i % 4)} tools ranked after hands-on testing.`, url: `/${slug(t)}/`, date: DATES[i % 8] }));
  reviews.forEach(([n, d, r], i) => ITEMS.push({ type: 'reviews', cat, title: n, tool: n, logo: ini(n), summary: d, rating: r.toFixed(1), url: `/${slug(n)}-review/`, date: DATES[(i + 2) % 8] }));
  alts.forEach((n, i) => ITEMS.push({ type: 'alternatives', cat, title: `${n} alternatives`, tool: n, logo: ini(n), summary: `${6 + i} replacements, with migration notes.`, url: `/${slug(n)}-alternatives/`, date: DATES[(i + 1) % 8] }));
  comps.forEach(([a, b], i) => { const [x, y] = [a, b].sort(); ITEMS.push({ type: 'compare', cat, title: `${pretty(x)} vs ${pretty(y)}`, summary: 'Same tests, side by side, one verdict.', url: `/${x}-vs-${y}/`, date: DATES[(i + 3) % 8], la: ini(pretty(x)), lb: ini(pretty(y)) }); });
}
// Real, published articles: they link to their own page and override the placeholder summary and date.
const LIVE = {
  '/ai-tools/': { summary: '7 tools scored from official docs and pricing.', date: 'Nov 14' },
  '/ai-tools-like-chatgpt/': { summary: '7 assistants scored from official docs and pricing.', date: 'Nov 14' },
  '/free-ai-tools/': { summary: '7 free plans scored on what you get without paying.', date: 'Nov 14' },
  '/ai-agents/': { summary: '7 work agents scored from official docs and pricing.', date: 'Nov 15' },
  '/ai-automation-tools/': { summary: '7 workflow platforms scored on AI steps, run controls and pricing.', date: 'Nov 15' },
  '/agentic-ai-platforms/': { summary: '7 platforms for building agents, scored from official docs.', date: 'Nov 15' },
  '/ai-governance-tools/': { summary: '7 governance platforms scored from official docs.', date: 'Nov 15' },
};
ITEMS.forEach(i => { i.href = LIVE[i.url] ? i.url : (SAMPLE[i.type] || '#'); if (LIVE[i.url]) Object.assign(i, LIVE[i.url], { live: true, pub: Object.keys(LIVE).indexOf(i.url) }); if (ALSO[i.url]) i.also = ALSO[i.url]; });

// Tool logos in /logos/. Tools without one fall back to initials.
export const LOGOS = {
  Playwright: '/logos/playwright.svg', 'Claude Code': '/logos/claude.svg', Claude: '/logos/claude.svg', PostgreSQL: '/logos/postgresql.svg', 'VS Code': '/logos/vscode.svg',
  Cursor: '/logos/cursor.svg', 'GitHub Copilot': '/logos/github-copilot.svg', Docker: '/logos/docker.svg', Podman: '/logos/podman.svg', Cypress: '/logos/cypress.svg',
  Datadog: '/logos/datadog.svg', 'New Relic': '/logos/new-relic.svg', Airbyte: '/logos/airbyte.svg', '1Password': '/logos/1password.svg', Bitwarden: '/logos/bitwarden.svg',
};

// Category hub copy. The hub owns the broad category; it never publishes a full ranking of its own.
// Each type gets a short "what it's for" line and three names, then links to the ranking that owns that type.
// Rule: no Tools post may target a whole category (e.g. "cyber security tools"). That job belongs to the hub.
// editor: sample names, replace before launch. bestFor: keyed by reviewed tool.
export const HUBS = {
  ai: {
    editor: 'Daniel Ortiz',
    note: 'Most AI tools demo well and fall over on a real codebase. We run every assistant and agent on the same 40 tickets from a production repo, and score what actually merges.',
    tagline: 'Same tickets. Every model.',
    bench: ['40 real tickets from one production TypeScript repo, given to every tool', 'Scored on what merged after review, not on the demo', 'Seat and token costs priced for a 10-person team'],
    types: {
      'AI tools': ['General-purpose assistants for writing, research, analysis and everyday work.', ['ChatGPT', 'Claude', 'Gemini']],
      'AI tools like ChatGPT': ['Chat assistants that do what ChatGPT does, each with a different strength.', ['Microsoft Copilot', 'Claude', 'Gemini']],
      'Free AI tools': ['What you actually get on free plans, with no trial clock running.', ['ChatGPT', 'n8n', 'Ollama']],
      'AI coding assistants': ['Autocomplete, chat and agents that write and edit code in your editor or terminal.', ['Claude Code', 'Cursor', 'GitHub Copilot']],
      'Vector databases': ['Store embeddings and run similarity search for RAG and semantic search.', ['Pinecone', 'Weaviate', 'Qdrant']],
      'AI agent builders': ['Frameworks for wiring models to tools, memory and multi-step plans.', ['LangChain', 'LlamaIndex', 'CrewAI']],
      'Open source LLMs': ['Models you can download, fine-tune and run on your own hardware.', ['Llama', 'Mistral', 'Qwen']],
      'AI automation tools': ['Connect models to your apps and run workflows without writing glue code.', ['n8n', 'Zapier', 'Make']],
      'AI productivity tools': ['Assistants for writing, meetings and search across your work apps.', ['Claude', 'ChatGPT', 'Notion AI']],
      'AI governance tools': ['Track model use, evaluate outputs and enforce policy before AI reaches production.', ['Credo AI', 'Arthur', 'Holistic AI']],
    },
    bestFor: { 'Claude Code': 'Best for multi-file changes', Cursor: 'Best AI-first editor', 'GitHub Copilot': 'Best IDE coverage', Ollama: 'Best for local models', Pinecone: 'Best managed vector DB', LangChain: 'Best agent framework' },
    faqs: [
      ['Which AI coding assistant is best for a large codebase?', 'In our tests, agents that read and edit many files at once did best on multi-file tickets. Inline completion is still faster for small, single-file edits.'],
      ['Do I need a vector database for RAG?', 'Not always. For a few hundred thousand chunks, Postgres with pgvector is usually enough. A dedicated vector database pays off at larger scale or with heavy filtering.'],
      ['Are open-source LLMs good enough for production?', 'For classification, extraction and summaries, often yes, and they are cheaper at volume. For complex reasoning and coding, hosted frontier models led our tests.'],
    ],
    related: ['dev-tools', 'data'],
  },
  'dev-tools': {
    editor: 'Leo Novak',
    note: 'The best developer tool is the one you stop noticing. We use each one as our daily driver for a week and note every time it gets in the way.',
    tagline: 'One week. Daily driver.',
    bench: ['A full week as the daily driver on a real project', 'Cold start, memory and battery measured on the same laptops', 'Every extension and plugin we needed, installed and tried'],
    types: {
      'Code editors': ['Where you write code, from lightweight editors to full IDEs with debuggers and refactoring.', ['VS Code', 'IntelliJ IDEA', 'Zed']],
      'Android emulators': ['Run Android apps on a desktop for development, testing or gaming.', ['Android Studio', 'Genymotion', 'BlueStacks']],
      'Terminal emulators': ['The window your shell runs in, with tabs, splits, search and themes.', ['Warp', 'iTerm2', 'WezTerm']],
      'App development software': ['Frameworks and platforms for building and shipping mobile and desktop apps.', ['Flutter', 'React Native', 'Xcode']],
      'No-code app builders': ['Build internal tools and simple apps by dragging components, not writing code.', ['Retool', 'Bubble', 'Glide']],
      'Git clients': ['A visual layer over Git for staging, history, branches and conflicts.', ['GitHub Desktop', 'GitKraken', 'Fork']],
    },
    bestFor: { 'VS Code': 'Best overall editor', GitHub: 'Best for code hosting', Docker: 'Best for containers', 'Android Studio': 'Best for Android', Warp: 'Best modern terminal', Podman: 'Best rootless containers' },
    faqs: [
      ['Is VS Code still the best code editor?', 'For most teams, yes. It is free, fast enough and has the largest extension ecosystem. JetBrains IDEs win on deep refactoring for Java and Kotlin.'],
      ['Docker or Podman?', 'Docker has the smoother desktop app and more docs. Podman runs without a daemon or root, which suits locked-down Linux servers.'],
      ['Do developer tools need to be paid?', 'Rarely to start. Most tools here have strong free tiers. Paid plans add team features, SSO and support.'],
    ],
    related: ['ai', 'devops'],
  },
  testing: {
    editor: 'Maya Rao',
    note: 'Every testing tool claims to end flaky tests. We run each one against the same checkout suite, change the UI on purpose, and count what survives.',
    tagline: 'Same suite. Every tool.',
    bench: ['The same 50-test checkout suite, run on every tool', 'The UI changed mid-run to measure self-healing and flake', 'Pass rate, run time and authoring hours logged for each'],
    types: {
      'Automation testing tools': ['Browser and end-to-end tests that click through your app the way a user would.', ['Playwright', 'TestMu AI', 'Cypress']],
      'API testing tools': ['Send requests, assert on responses and catch contract breaks before the UI does.', ['Postman', 'Bruno', 'REST Assured']],
      'Performance testing tools': ['Simulate thousands of users to find where response times fall apart.', ['Grafana k6', 'JMeter', 'Gatling']],
      'Visual testing tools': ['Screenshot every page and flag the pixel changes functional tests miss.', ['Percy', 'Applitools', 'Chromatic']],
      'Mobile testing tools': ['Automate iOS and Android apps on emulators and real devices.', ['Appium', 'TestMu AI', 'Espresso']],
      'Regression testing tools': ['Re-run your suite on every change so old bugs stay fixed.', ['TestMu AI', 'Katalon', 'Playwright']],
      'Testing tools for Python': ['Test runners and libraries for Python codebases, from unit tests to the browser.', ['pytest', 'Playwright', 'Robot Framework']],
    },
    bestFor: { Playwright: 'Best overall', 'TestMu AI': 'Best for enterprise scale', Cypress: 'Best for front-end devs', Postman: 'Best for API testing', 'Grafana k6': 'Best for load testing', Selenium: 'Best for language choice', Katalon: 'Best low-code' },
    faqs: [
      ['What is the difference between automation and regression testing tools?', 'Automation tools are how you write and run tests. Regression testing is when you run them: on every change, to check nothing that worked has broken. Most automation tools double as regression tools.'],
      ['Is Selenium still worth learning?', 'Yes if your team writes Java or C#, or already runs a Selenium grid. For a new JavaScript or Python project, Playwright was faster and less flaky in our tests.'],
      ['Do I need a cloud testing grid?', 'Only when you need browsers, operating systems or real devices your CI cannot run, or more parallel runs than it allows.'],
    ],
    related: ['devops', 'dev-tools'],
  },
  devops: {
    editor: 'Sam Okafor',
    note: 'Observability bills grow faster than the systems they watch. We run each tool on the same staging cluster, fire the same incidents, and price it at 50 and 500 hosts.',
    tagline: 'Same cluster. Every alert.',
    bench: ['One Kubernetes staging cluster, the same services for every tool', 'The same 12 incidents injected and timed to first alert', 'Priced at 50 and 500 hosts, overages included'],
    types: {
      'APM tools': ['Trace requests through your services to find the slow call or failing dependency.', ['Datadog', 'New Relic', 'Dynatrace']],
      'Network monitoring tools': ['Watch devices, bandwidth and uptime across your network and cloud.', ['PRTG', 'Zabbix', 'Auvik']],
      'Incident management software': ['On-call schedules, escalations and the war room when something breaks.', ['PagerDuty', 'incident.io', 'Opsgenie']],
      'CI/CD tools': ['Build, test and deploy every commit automatically.', ['GitHub Actions', 'GitLab CI', 'CircleCI']],
      'Log management tools': ['Collect, search and alert on logs from every service in one place.', ['Grafana Loki', 'Datadog', 'Elastic']],
      'Alert management software': ['Route, group and de-duplicate alerts so the right person sees the right one.', ['PagerDuty', 'Opsgenie', 'Squadcast']],
    },
    bestFor: { Datadog: 'Best all-in-one', Grafana: 'Best open dashboards', PagerDuty: 'Best for on-call', 'New Relic': 'Best free tier', 'GitHub Actions': 'Best CI/CD', Sentry: 'Best error tracking' },
    faqs: [
      ['What is the difference between monitoring and observability?', 'Monitoring tells you when a known metric crosses a line. Observability lets you ask new questions of logs, metrics and traces to find out why. Most tools here now do both.'],
      ['Why do observability costs grow so fast?', 'Most tools charge per host, per GB ingested or per user, and all three grow with your system. We price every tool at 50 and 500 hosts so you can see the curve.'],
      ['Do we need a separate incident management tool?', 'Once more than one team is on call, usually yes. Alerts in chat work for one team. Schedules, escalations and post-mortems need a dedicated tool.'],
    ],
    related: ['testing', 'security'],
  },
  data: {
    editor: 'Priya Raman',
    note: 'Data tools look identical on a slide and very different on a real dataset. We load the same 50 GB into each one and time every sync, query and refresh.',
    tagline: 'Same 50 GB. Every tool.',
    bench: ['The same 50 GB dataset, loaded into every tool', 'Sync, query and refresh times measured three times each', 'Connector failures and schema changes triggered on purpose'],
    types: {
      'ETL tools': ['Extract data from your sources, transform it and load it into a warehouse.', ['Fivetran', 'Airbyte', 'dbt']],
      'Data integration tools': ['Keep data in sync between apps, databases and your warehouse.', ['Fivetran', 'Airbyte', 'Informatica']],
      'Data visualization tools': ['Turn warehouse tables into dashboards the business can read.', ['Tableau', 'Power BI', 'Looker']],
      'Data governance tools': ['Catalog, lineage and access rules, so people find and trust the right data.', ['Atlan', 'Collibra', 'Alation']],
      'Database software': ['Relational, document and analytical databases to store and query your data.', ['PostgreSQL', 'MySQL', 'MongoDB']],
      'Data replication software': ['Copy changes from one database to another in near real time.', ['Fivetran', 'Debezium', 'Qlik Replicate']],
    },
    bestFor: { PostgreSQL: 'Best open-source database', dbt: 'Best for transformations', Snowflake: 'Best cloud warehouse', Fivetran: 'Best managed connectors', Airbyte: 'Best open-source ELT', Tableau: 'Best for analysts' },
    faqs: [
      ['ETL or ELT?', 'ELT loads raw data first and transforms it inside the warehouse, which is the default with modern warehouses. ETL still makes sense when data must be cleaned or masked before it lands.'],
      ['Do we need a data warehouse yet?', 'If your analytics queries fit on a Postgres replica, not yet. A warehouse pays off when many sources and heavy queries start slowing production.'],
      ['Open-source or managed connectors?', 'Managed connectors cost more but break less and need no upkeep. Open-source connectors are cheaper at volume if someone owns them.'],
    ],
    related: ['ai', 'devops'],
  },
  security: {
    editor: 'Nadia Haddad',
    note: 'Security tools are judged by the alerts you end up ignoring. We run each one against the same attack simulations and count what it caught, what it missed and how much noise it made.',
    tagline: 'Same attacks. Every tool.',
    bench: ['The same attack simulations run against every tool', 'Detections, misses and false positives counted', 'Deployment time and agent overhead measured on one fleet'],
    types: {
      'SIEM tools': ['Collect security events from everywhere and correlate them into alerts.', ['Splunk', 'Microsoft Sentinel', 'Elastic Security']],
      'Endpoint security software': ['Detect and stop threats on laptops and servers before they spread.', ['CrowdStrike Falcon', 'SentinelOne', 'Microsoft Defender']],
      'DAST tools': ['Attack your running web app from the outside to find exploitable flaws.', ['Burp Suite', 'OWASP ZAP', 'Invicti']],
      'Cyber security tools': ['The core tools a security team runs, across endpoint, cloud and application security.', ['CrowdStrike Falcon', 'Wiz', 'Snyk']],
      'Vulnerability scanners': ['Scan code, dependencies, containers and hosts for known vulnerabilities.', ['Snyk', 'Tenable Nessus', 'Trivy']],
      'Mobile security software': ['Protect company data on phones and test mobile apps for weaknesses.', ['Lookout', 'Zimperium', 'MobSF']],
      'Password managers': ['Store and share credentials across a team, with SSO and access logs.', ['1Password', 'Bitwarden', 'Dashlane']],
    },
    bestFor: { 'CrowdStrike Falcon': 'Best endpoint protection', Splunk: 'Best enterprise SIEM', 'Burp Suite': 'Best for web app testing', '1Password': 'Best team password manager', Snyk: 'Best for developer security', Wiz: 'Best cloud security' },
    faqs: [
      ['What security tools does a small team need first?', 'A password manager, endpoint protection on every laptop and dependency scanning in CI cover the most common ways small teams get breached. A SIEM can wait.'],
      ['Why does the false-positive rate matter so much?', 'Every false alarm costs analyst time, and teams that drown in alerts start ignoring them. We weight noise as heavily as detection in our scores.'],
      ['Is a free password manager safe for business?', 'Bitwarden’s open-source core is well audited. Business plans add what teams need: SSO, admin controls and access logs.'],
    ],
    related: ['devops', 'it-management'],
  },
  'it-management': {
    editor: 'Owen Brooks',
    note: 'IT tools are bought by one person and lived with by everyone. We deploy each one to the same mixed fleet and run a month of real tickets through it.',
    tagline: 'Same fleet. Every console.',
    bench: ['Deployed to the same 50-device Windows, Mac and Linux fleet', 'A month of real tickets, patches and remote sessions', 'Priced for teams of 5, 50 and 500 devices'],
    types: {
      'Remote desktop software': ['Control another computer over the internet for support or remote work.', ['AnyDesk', 'TeamViewer', 'Splashtop']],
      'MDM software': ['Enroll, configure and lock down company phones, tablets and laptops.', ['Jamf', 'Kandji', 'Microsoft Intune']],
      'RMM software': ['Monitor, patch and script every endpoint from one console.', ['NinjaOne', 'Datto RMM', 'N-able']],
      'Virtualization software': ['Run several operating systems on one machine or server.', ['VMware Workstation', 'VirtualBox', 'Proxmox']],
      'IT asset management software': ['Track every device and licence you own, who has it and when it expires.', ['Lansweeper', 'Snipe-IT', 'Freshservice']],
      'Help desk software': ['Take in IT requests, route tickets and track them to resolution.', ['Freshservice', 'Jira Service Management', 'Zendesk']],
    },
    bestFor: { Jamf: 'Best for Apple fleets', NinjaOne: 'Best RMM', AnyDesk: 'Best lightweight remote access', Freshservice: 'Best help desk', TeamViewer: 'Best cross-platform support', 'VMware Workstation': 'Best desktop virtualization' },
    faqs: [
      ['RMM or MDM: which do we need?', 'MDM enrolls and configures devices, especially phones and Macs. RMM monitors and patches them, especially Windows. Many teams need both, and some tools now cover both.'],
      ['Is TeamViewer free for business use?', 'No. The free version is for personal use only, and commercial use triggers a licence prompt. Most remote desktop tools have the same rule.'],
      ['When does a small IT team need a help desk tool?', 'Once requests arrive in more than one place, or nobody can say what is still open. Most help desks have free tiers for small teams.'],
    ],
    related: ['security', 'productivity'],
  },
  productivity: {
    editor: 'Grace Liu',
    note: 'A collaboration tool only works if the whole team keeps using it. We roll each one out to a real 12-person team for a month and track who stops opening it.',
    tagline: 'Same team. Every app.',
    bench: ['A real 12-person team, one month per tool', 'Weekly active use tracked, not first impressions', 'Migration in and out tested with real data'],
    types: {
      'Project management software': ['Plan work, assign it and see what is late, from simple boards to full roadmaps.', ['Linear', 'Asana', 'Jira']],
      'Wiki software': ['One place for the team’s processes, decisions and how-tos.', ['Notion', 'Confluence', 'Slite']],
      'Note-taking apps': ['Capture ideas, meeting notes and research, then find them again.', ['Obsidian', 'Notion', 'Apple Notes']],
      'Team chat apps': ['Real-time messaging in channels, threads and huddles.', ['Slack', 'Microsoft Teams', 'Discord']],
      'Whiteboard tools': ['An infinite canvas for workshops, diagrams and brainstorming.', ['Miro', 'FigJam', 'Excalidraw']],
      'Documentation tools': ['Write and publish product and API docs that stay in sync with your code.', ['GitBook', 'Mintlify', 'Docusaurus']],
    },
    bestFor: { Linear: 'Best for software teams', Notion: 'Best all-in-one workspace', Slack: 'Best team chat', Miro: 'Best whiteboard', Jira: 'Best for large orgs', Confluence: 'Best alongside Jira' },
    faqs: [
      ['Notion or Confluence for a team wiki?', 'Notion is faster to set up and nicer to write in. Confluence wins if you already live in Jira and need strict page permissions.'],
      ['Linear or Jira?', 'Linear is faster and more opinionated, built for software teams. Jira bends to any process, which large organisations need and small teams rarely do.'],
      ['How do you test collaboration tools fairly?', 'Each tool gets the same 12-person team for a month, the same projects, and a migration in and out. We score on whether people kept using it.'],
    ],
    related: ['dev-tools', 'it-management'],
  },
};

// Writers and reviewers. Each has a profile at /authors/<slug>/ (template: Author.dc.html).
// Facts come from each person's own profile; keep personal emails and phone numbers off the site.
// photo: 400x400 headshot at /authors/photos/<slug>.jpg; empty shows initials instead.
export const AUTHORS = [
  {
    slug: 'zaid-bin-ashraf',
    name: 'Zaid Bin Ashraf',
    ini: 'ZA',
    photo: '/authors/photos/zaid-bin-ashraf.jpg',
    role: 'Writer and reviewer, security',
    title: 'Senior Manager, Application Security at R1 RCM',
    location: 'Srinagar, India',
    since: 2015,
    years: '11 years in security',
    beats: ['security', 'testing'],
    card: 'Runs application security at a healthcare company. 11 years across SAST, DAST, SCA, threat modeling and penetration testing.',
    bio: [
      'Zaid Bin Ashraf leads application security at R1 RCM, a healthcare revenue cycle company, where Zaid has been Senior Manager of Application Security since August 2023. The job covers building the AppSec program end to end: policy, code and architecture review, threat modeling, and the SAST, DAST and SCA tooling that runs in the delivery pipeline.',
      'Before R1, Zaid spent two years at Accenture, first as a Senior Security Engineer and then as Security Delivery Lead, and six years at BQE Software. At BQE the work started with firewalls, site-to-site VPNs and cloud servers, and moved to monthly vulnerability audits, patch management and penetration testing with Metasploit, Burp Suite, OWASP ZAP, Nmap and Wireshark.',
      'Zaid is also a security researcher. Bugs reported to Zapier, Google, Netlify and Accenture earned places in their security halls of fame, and Zaid has published a write-up on taking a stored XSS bug to a full organisation takeover.',
    ],
    here: 'At TheDevEdit, Zaid writes and reviews our security coverage: application security testing (SAST, DAST and SCA), vulnerability scanners and threat modeling tools, plus the security sections of our testing and developer tool reviews.',
    tools: ['Fortify', 'Veracode', 'Coverity', 'Black Duck', 'SonarQube', 'Burp Suite', 'IriusRisk', 'OWASP ZAP', 'Metasploit', 'Nmap', 'Wireshark'],
    creds: ['OSCP+', 'CCNP Security', 'CCNA Security', 'MCSA', 'Akamai Web Application & API Protection'],
    honors: ['Hall of Fame, Zapier', 'Hall of Fame, Google API', 'Hall of Fame, Netlify', 'Hall of Fame, Accenture vulnerability disclosure program'],
    career: [
      ['R1 RCM', 'Senior Manager, Application Security', 'Aug 2023 – now'],
      ['Accenture', 'Security Delivery Lead', 'May 2022 – Aug 2023'],
      ['Accenture', 'Senior Security Engineer', 'Jul 2021 – May 2022'],
      ['BQE Software', 'Senior Security Engineer', 'May 2017 – Jul 2021'],
      ['BQE Software', 'Network Security and Server Support Engineer', 'Jul 2015 – May 2017'],
    ],
    education: [],
    links: [['LinkedIn', 'https://www.linkedin.com/in/zaidbhat']],
  },
  {
    slug: 'sameer-misger',
    name: 'Sameer Misger',
    ini: 'SM',
    photo: '/authors/photos/sameer-misger.jpg',
    role: 'Writer and reviewer, AI and developer tools',
    title: 'Application Development Team Lead at IST Networks',
    location: 'Riyadh, Saudi Arabia',
    since: 2012,
    years: '14 years in software',
    beats: ['ai', 'dev-tools'],
    card: 'Leads application development for omnichannel customer experience systems in Saudi Arabia. Java developer since 2012, now building AI-first.',
    bio: [
      'Sameer Misger leads application development at IST Networks in Saudi Arabia. Sameer joined in August 2017 as a Senior Consultant and has led the application development team since January 2023, designing omnichannel customer experience (CX) systems, including contact centre routing on Genesys, with AI built in from the start.',
      'On client projects, Sameer is the single point of contact from design to delivery, and judges the work by one measure: whether the client is satisfied with it.',
      'Before IST Networks, Sameer spent five years building Java applications in India: as a Senior Software Developer at NovelVox, as a consultant and developer at Prospecta Software, and as a trainee software engineer at Super Computers Kokernag. That work covered application design, build and unit test plans, setting up development and test environments, and tuning applications in production.',
    ],
    here: 'At TheDevEdit, Sameer writes and reviews our AI and developer tools coverage, with a focus on AI agents, integration and automation platforms, and the software that runs customer service and contact centres.',
    tools: ['Java', 'Java EE', 'Genesys Composer', 'UnifyApps'],
    creds: ['Genesys Composer 9 Routing Applications for Multimedia', 'Oracle certification in Core Java', 'Java EE certification', 'UnifyApps Partner Enablement: Technical Enablement (Explorer)', 'UnifyApps Partner Enablement: Technical Enablement (Intermediate)'],
    honors: [],
    career: [
      ['IST Networks', 'Application Development Team Lead', 'Jan 2023 – now'],
      ['IST Networks', 'Senior Consultant', 'Aug 2017 – now'],
      ['NovelVox', 'Senior Software Developer', 'Mar 2016 – Jul 2017'],
      ['Prospecta Software', 'Consultant and Developer', 'Jan 2013 – Feb 2016'],
      ['Super Computers Kokernag', 'Software Engineer Trainee', 'Jan 2012 – Jan 2013'],
    ],
    education: [
      ['University of Kashmir', 'Master of Computer Applications (MCA)', '2009 – 2011'],
      ['Govt Boys Degree College Anantnag', 'Bachelor of Computer Applications (BCA)', '2006 – 2009'],
    ],
    links: [['LinkedIn', 'https://www.linkedin.com/in/misgersameer']],
  },
];
export const authorBySlug = s => AUTHORS.find(a => a.slug === s);
export const authorUrl = a => `/authors/${a.slug}/`;

export const catBySlug = s => CATEGORIES.find(c => c.slug === s) || CATEGORIES[2];
export const inCat = (i, c) => i.cat === c || (i.also || []).includes(c);
export const reviewHref = name => ITEMS.find(i => i.type === 'reviews' && i.tool === name) ? SAMPLE.reviews : '#';
export const reviewUrl = name => `/${slug(name)}-review/`;
export const qs = k => { try { return new URLSearchParams(location.search).get(k); } catch (e) { return null; } };
export const load = () => Promise.resolve({ CATEGORIES, TYPES, ITEMS, catBySlug, qs, reviewUrl });
