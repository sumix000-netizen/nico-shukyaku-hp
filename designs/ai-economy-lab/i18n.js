// All translations are authored locally; none are fetched or generated at runtime.
// Japanese HTML is the canonical fallback, and is restored when switching back.
const ENGLISH_HTML = [
  ['.preview-ribbon', '<span class="ribbon-long">Development preview: stories summarise published reports and official announcements. No registration information is sent.</span><span class="ribbon-short">Preview: nothing you enter is sent</span>'],
  ['.brand-type', 'Japan AI Economy Lab<small>by NICO</small>'],
  ['.main-nav a[href="#news"], .mobile-nav a[href="#news"], .footer-links a[href="#news"]', 'Latest news'],
  ['.main-nav a[href="#ranking"], .mobile-nav a[href="#ranking"], .footer-links a[href="#ranking"]', 'Ranking'],
  ['.main-nav a[href="#archive"], .mobile-nav a[href="#archive"], .footer-links a[href="#archive"]', 'Archive'],
  ['.main-nav a[href="#economy"], .mobile-nav a[href="#economy"], .footer-links a[href="#economy"]', 'AI economy watch'],
  ['.main-nav a[href="#guide"], .mobile-nav a[href="#guide"], .footer-links a[href="#guide"]', 'Practical guides'],
  ['.main-nav a[href="#newsletter"], .mobile-nav a[href="#newsletter"], .footer-links a[href="#newsletter"]', 'Newsletter'],
  ['.main-nav a[href="#nico"], .mobile-nav a[href="#nico"], .footer-links a[href="#nico"]', 'About NICO'],
  ['.mobile-nav a[data-go-filter="beginner"], .footer-links a[data-go-filter="beginner"]', 'Beginner guides'],
  ['.header-cta', 'Get the newsletter'],
  ['.main-nav a[href="#news"]', 'News'],
  ['.main-nav a[href="#economy"]', 'Economy watch'],
  ['#hero-title', 'Make the future of AI<br /><em>work for you.</em>'],
  ['.hero-description', 'How AI is changing the economy, work and household finances—made clear.<br />Go beyond the headline—and discover what you can do today.'],
  ['#indicators-title', '2026<br /><span>AI economy watch.</span>'],
  ['.indicators .section-heading>p', 'Tracking how AI affects companies, jobs and household budgets—with published data.<span class="sample-flag">Figures are as of each source’s publication. Surveys differ in scope and definitions, so they cannot be compared directly.</span>'],
  ['.hero-actions .button-primary', 'Explore stories <span aria-hidden="true">↗</span>'],
  ['.hero-actions .button-ghost', 'Find practical ideas'],
  ['.hero-note', '<span class="hero-mini-icon">✳</span> For life and work. AI made more approachable.'],
  ['.digest-heading h2', 'Today’s highlights'],
  ['.digest-heading p', 'Find what you can use, not just what is trending.'],
  ['#news-title', 'Make AI news<br /><span>relevant to you.</span>'],
  ['.news-section .section-heading>p', 'Not only what the technology does, but what it means for the economy, your work and your household budget—and what you can do next.'],
  ['.filter[data-filter="all"]', 'All'],
  ['.filter[data-filter="beginner"]', 'Beginner guides'],
  ['.beginner-cta', '<span class="status-chip" data-status="guide">Basics</span><span class="beginner-cta-text">New to AI news? Our guides explain the key terms and ideas in plain language.</span><button type="button" class="text-button" data-go-filter="beginner">Read the beginner guides <span aria-hidden="true">→</span></button>'],
  ['.filter[data-filter="economy"]', 'Economy & markets'],
  ['.filter[data-filter="policy"]', 'Policy & rules'],
  ['.filter[data-filter="work"]', 'Work & jobs'],
  ['.filter[data-filter="life"]', 'Money & life'],
  ['.filter[data-filter="tools"]', 'Models & tools'],
  ['#news-empty', 'No matching stories. Try a different keyword.'],
  ['.status-legend', '<span class="status-chip" data-status="report">Reported</span>Summary of announcements and reports　<span class="status-chip" data-status="outlook">Includes outlook</span>Contains forecasts or projections　<span class="status-chip" data-status="guide">Basics</span>Original explainers for beginners'],
  ['.sample-note', '* News stories are editorial summaries of published reports and official announcements; beginner guides are our own explainers. Figures and dates are as of each source; see the source links in each story for details.'],
  ['#ranking-title', 'Editors’<br /><span>top stories.</span>'],
  ['.ranking .library-heading>p', 'Ranked by our editors according to their impact on the economy and business.<span class="sample-flag">Not a popularity ranking—page views are not yet measured.</span>'],
  ['.rank-tab[data-rank="week"]', 'This week'],
  ['.rank-tab[data-rank="year"]', 'Key stories of 2026'],
  ['#archive-title', '2026<br /><span>AI economy archive.</span>'],
  ['.archive .library-heading>p', 'The year’s major AI stories, kept month by month. Items with a brief open the story; others link to the source.'],
  ['#value-title', 'Don’t just read.<br /><span>Put AI to work.</span>'],
  ['.value-heading>p', 'When a story catches your eye, the next step is to ask: how could I use this in my own life or business?'],
  ['.value-card:nth-child(1) h3', 'Discover'],
  ['.value-card:nth-child(1) p', 'Key developments in technology, investment and policy, with links to original sources.'],
  ['.value-card:nth-child(2) h3', 'Understand'],
  ['.value-card:nth-child(2) p', 'Explore benefits, limitations and implications for people and businesses.'],
  ['.value-card:nth-child(3) h3', 'Try'],
  ['.value-card:nth-child(3) p', 'Follow practical guides and independently tested examples.'],
  ['.value-card:nth-child(4) h3', 'Delegate'],
  ['.value-card:nth-child(4) p', 'One day, let NICO AI agents take care of repetitive tasks.'],
  ['#audience-title', 'Find the right AI<br /><span>ideas for you.</span>'],
  ['.audience-section .section-heading>p', 'The same technology can have very different value depending on who uses it. Choose where you would like to start.'],
  ['.life-card .audience-bottom>p', 'AI for money & everyday life'],
  ['.life-card .audience-bottom h3', 'Make each day<br />a little easier.'],
  ['.life-card .audience-bottom>span', 'Budgeting · Planning · Organizing information · Daily tasks'],
  ['.life-card .audience-bottom b', 'Explore stories <span aria-hidden="true">↗</span>'],
  ['.work-card .audience-bottom>p', 'AI for business'],
  ['.work-card .audience-bottom h3', 'More time for<br />meaningful work.'],
  ['.work-card .audience-bottom>span', 'Accounting · Sales · Meetings · Automation'],
  ['.work-card .audience-bottom b', 'Explore stories <span aria-hidden="true">↗</span>'],
  ['#newsletter-title', 'Your week in AI,<br />in five minutes.'],
  ['.newsletter-inner>div>p:not(.section-kicker):not(.newsletter-disclaimer)', 'A weekly digest of the most useful AI developments and practical ideas is coming soon.'],
  ['.newsletter-disclaimer', '* Preview only. Email addresses are not transmitted, stored, or subscribed.'],
  ['.newsletter-form>label:first-child', 'Newsletter form (demo)'],
  ['.email-row button', 'Try the form'],
  ['.checkbox-label span', 'I understand this is a demo and that no subscription or email delivery will take place.'],
  ['#nico-title', 'Beyond knowing AI.<br /><span>Make it your personal agent.</span>'],
  ['.nico-copy>p', 'NICO is an AI project in development, working toward a future where individuals and small businesses can solve everyday challenges with accessible AI. We aim to turn useful ideas into useful tools.'],
  ['.nico-status', '<span class="status-indicator"></span> Personal AI agent: in development'],
  ['.nico-path:nth-child(1)>span', 'For individuals'],
  ['.nico-path:nth-child(1) h3', 'Another helping hand for everyday life.'],
  ['.nico-path:nth-child(1) p', 'We aim to support planning, organizing information, and everyday tasks.'],
  ['.nico-path:nth-child(1) button', 'About the free trial & waitlist <span>↗</span>'],
  ['.nico-path:nth-child(2)>span', 'For businesses'],
  ['.nico-path:nth-child(2) h3', 'Start with one small problem.'],
  ['.nico-path:nth-child(2) p', 'Explore opportunities in accounting, meeting notes, and workflow automation.'],
  ['.nico-path:nth-child(2) button', 'About the free AI workflow review <span>↗</span>'],
  ['#editorial-title', 'Reliable information<br />comes first.'],
  ['.editorial-rules p:nth-child(1)', '<strong>Show our sources.</strong> We check original announcements and provide references.'],
  ['.editorial-rules p:nth-child(2)', '<strong>Separate claims from testing.</strong> We clearly label unverified information and predictions.'],
  ['.editorial-rules p:nth-child(3)', '<strong>Be transparent.</strong> NICO operates this publication; advertisements and editorial content are identified separately.'],
  ['.footer-inner>div>p', 'Make the future of AI work for you.'],
  ['.footer-bottom span:nth-child(1)', '© 2026 NICO / Japan AI Economy Lab — Development preview'],
  ['.footer-bottom span:nth-child(2)', 'Public development preview (not indexed by search engines).']
];

const ENGLISH_ATTRIBUTES = [
  ['.brand[href="#top"]', 'aria-label', 'Japan AI Economy Lab, back to top'],
  ['.main-nav', 'aria-label', 'Main navigation'],
  ['.mobile-nav', 'aria-label', 'Mobile navigation'],
  ['.language-switch', 'aria-label', 'Display language'],
  ['.menu-toggle', 'aria-label', 'Open menu'],
  ['.digest', 'aria-label', 'Today’s highlights'],
  ['#top-story', 'aria-label', 'Top story'],
  ['.filter-group', 'aria-label', 'Story categories'],
  ['#news-search', 'aria-label', 'Search stories'],
  ['#news-search', 'placeholder', 'Search stories'],
  ['#newsletter-email', 'placeholder', 'Email address'],
  ['#dialog-close', 'aria-label', 'Close'],
  ['#route-close', 'aria-label', 'Close'],
  ['.library', 'aria-label', 'Ranking and archive'],
  ['.rank-tabs', 'aria-label', 'Ranking period']
];

const originalHtml = new Map();
const originalAttributes = new Map();
let currentLocale = 'ja';
try { if (localStorage.getItem('nico-news-locale') === 'en') currentLocale = 'en'; } catch { /* Storage may be unavailable. */ }

function translateStatic() {
  for (const [selector, english] of ENGLISH_HTML) {
    for (const element of document.querySelectorAll(selector)) {
      if (!originalHtml.has(element)) originalHtml.set(element, element.innerHTML);
      element.innerHTML = currentLocale === 'en' ? english : originalHtml.get(element);
    }
  }
  for (const [selector, attribute, english] of ENGLISH_ATTRIBUTES) {
    for (const element of document.querySelectorAll(selector)) {
      const key = `${selector}:${attribute}`;
      if (!originalAttributes.has(element)) originalAttributes.set(element, new Map());
      const attrs = originalAttributes.get(element);
      if (!attrs.has(key)) attrs.set(key, element.getAttribute(attribute));
      const value = currentLocale === 'en' ? english : attrs.get(key);
      if (value === null) element.removeAttribute(attribute);
      else element.setAttribute(attribute, value);
    }
  }
  document.documentElement.lang = currentLocale;
  document.title = currentLocale === 'en' ? 'Japan AI Economy Lab | by NICO' : '日本AI経済ラボ | by NICO';
  document.querySelector('meta[name="description"]').content = currentLocale === 'en'
    ? 'Japan AI Economy Lab connects AI developments to the economy, business and everyday life, with practical ideas for individuals and organizations. From NICO.'
    : '日本AI経済ラボは、AIの最新動向を経済・ビジネス・暮らしの視点で読み解き、個人・法人が実践に活かすヒントを届けるNICOのAIメディアです。';
  for (const button of document.querySelectorAll('[data-language]')) {
    const active = button.dataset.language === currentLocale;
    button.setAttribute('aria-pressed', String(active));
  }
}

function setLocale(nextLocale) {
  if (!['ja', 'en'].includes(nextLocale) || nextLocale === currentLocale) return;
  currentLocale = nextLocale;
  try { localStorage.setItem('nico-news-locale', nextLocale); } catch { /* Storage may be unavailable. */ }
  translateStatic();
  const search = document.getElementById('news-search');
  if (search) search.value = '';
  document.dispatchEvent(new CustomEvent('nico-language-change', { detail: { locale: currentLocale } }));
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLocale(button.dataset.language));
});

window.NicoI18n = { getLocale: () => currentLocale, setLocale };
translateStatic();
