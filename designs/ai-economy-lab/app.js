const ARTICLES = [
  {
    id: 'agent-workflow',
    category: 'work', label: '仕事のAI', art: 'AGENT', artStyle: 'work', minutes: 5,
    title: 'AIエージェントは、どの仕事を任せられる？',
    excerpt: 'AIエージェントと従来のチャットAIの違いを、会社の実務を例に整理します。',
    intro: 'AIエージェントは、指示に応じて複数の工程を進めることを目指す仕組みです。ただし、利用できる範囲や安全性は製品と設定によって異なります。',
    example: '例えば、議事録からタスク候補を作り、担当者の確認後に管理表へ登録するような工程が考えられます。',
    caution: '社外送信、金銭の移動、契約締結などは、権限管理と人間の承認が不可欠です。',
    nico: 'NICOでは業務効率化ツールやパーソナルAIエージェントを開発中です。現時点では機能の公開・利用可否を確約するものではありません。'
  },
  {
    id: 'daily-planning',
    category: 'life', label: '暮らしのAI', art: 'DAY', artStyle: 'life', minutes: 4,
    title: '予定整理の負担をAIで軽くする、最初の一歩',
    excerpt: '家族の予定や買い物リストなど、日常の小さな作業から考えるAI活用。',
    intro: 'AIは、バラバラに書かれた予定やメモを整理する補助として利用できます。',
    example: '一週間の予定、移動時間、準備物を文章で伝え、見やすい表にする使い方が考えられます。',
    caution: '本人や家族の個人情報を外部サービスに入力する前に、利用規約や設定を確認してください。',
    nico: 'NICOの個人向けエージェントは開発中です。利用開始の案内は正式な登録先の公開後に行います。'
  },
  {
    id: 'tools-compare',
    category: 'tools', label: 'ツール比較', art: 'AI / AI', artStyle: 'tools', minutes: 6,
    title: 'AIツール比較で確認したい5つの条件',
    excerpt: '性能だけで選ばないために、料金・日本語・安全性・連携・サポートをチェック。',
    intro: 'AIツール選びでは、ベンチマークの点数より、実際の目的に適しているかが重要です。',
    example: '同じ作業を複数のツールで試し、品質、操作回数、費用、再現性を比較すると判断しやすくなります。',
    caution: '価格・提供機能・データ利用条件は変更されます。契約前に各社の公式情報を確認してください。',
    nico: 'NICOの運営メディアとして、競合製品も含めて必要な情報を公平に紹介する編集方針です。'
  },
  {
    id: 'invoice-work',
    category: 'work', label: '仕事のAI', art: 'PDF', artStyle: 'work', minutes: 4,
    title: '請求書・領収書処理を自動化する前に確認すること',
    excerpt: 'OCRだけで終わらない。確認・仕訳・承認まで業務の流れを見直します。',
    intro: '請求書や領収書の電子化は、多くの会社で検討できる業務改善テーマです。',
    example: '受領、読み取り、内容確認、会計ソフトへの登録、証憑保管までの手順を整理し、自動化できる箇所を見つけます。',
    caution: '税務・会計処理や保存要件の正確性は、適用される制度と専門家による確認が必要です。',
    nico: 'NICOでは領収書・経理関連の支援機能を開発・検討しています。実装や提供状況は正式案内をご確認ください。'
  },
  {
    id: 'family-ai',
    category: 'life', label: '暮らしのAI', art: 'LIFE', artStyle: 'life', minutes: 3,
    title: 'AI初心者が最初の1週間で試せること',
    excerpt: '調べもの・文章整理・献立のヒント。小さな成功体験から始める使い方。',
    intro: 'AIを使い始めるときは、難しい専門用語を覚えるより、日常の課題をひとつ選ぶ方が続けやすくなります。',
    example: '「買い物リストを整理して」「長い文章を短くして」「旅行の持ち物を考えて」など、結果を確認しやすい課題が向いています。',
    caution: 'AIの回答には間違いがあり得ます。医療・法律・金融などの重要な判断にそのまま使わないでください。',
    nico: 'NICOは誰もが使いやすいAIを目指していますが、現在は開発段階です。'
  },
  {
    id: 'meeting-work',
    category: 'work', label: '仕事のAI', art: 'MEET', artStyle: 'work', minutes: 5,
    title: '議事録AIを導入するときの設計ポイント',
    excerpt: '文字起こしの精度だけでなく、話者・要点・TODO・情報管理を見ます。',
    intro: '会議の文字起こしから要約、決定事項、タスク抽出までを一連の流れで考えると、導入効果を評価しやすくなります。',
    example: '最初は社内の短い打ち合わせで試し、固有名詞の認識や決定事項の取り違えがないかを検証します。',
    caution: '録音や文字起こしを行う際は参加者への周知、保存先、アクセス権限などを事前に確認してください。',
    nico: 'NICOでは会議・議事録関連のシステムを開発中です。公開済みの利用機能を示すものではありません。'
  }
];

const EN_ARTICLES = {
  'agent-workflow': {
    label: 'AI at work', title: 'What tasks can AI agents actually handle?',
    excerpt: 'Understand the difference between AI agents and chat assistants through everyday business tasks.',
    intro: 'AI agents are systems designed to carry out several steps toward a goal. Their capabilities and safeguards depend on the product and its configuration.',
    example: 'An agent could draft follow-up tasks from meeting notes and, after a person approves them, add them to a shared task list.',
    caution: 'Sending information outside the company, moving money, or signing agreements requires appropriate permissions and human approval.',
    nico: 'NICO is developing productivity tools and a personal AI agent. This preview does not promise the availability or release of any particular feature.'
  },
  'daily-planning': {
    label: 'AI for life', title: 'A simple way to organize your schedule with AI',
    excerpt: 'Start with small everyday tasks, from family calendars to shopping lists.',
    intro: 'AI can help turn scattered notes and appointments into a clearer plan.',
    example: 'You could describe your weekly schedule, travel times, and things to prepare, then ask AI to organize them into an easy-to-read table.',
    caution: 'Check the privacy terms and settings before entering personal information about yourself or your family into third-party tools.',
    nico: 'NICO’s personal AI agent is in development. Official sign-up details will be provided when a verified registration channel is available.'
  },
  'tools-compare': {
    label: 'Tool comparison', title: 'Five things to check when comparing AI tools',
    excerpt: 'Look beyond performance scores: price, language support, safety, integrations, and help.',
    intro: 'The best AI tool is not always the one with the highest benchmark score. It is the one that fits your actual task.',
    example: 'Try the same task in several tools and compare output quality, steps required, cost, and consistency.',
    caution: 'Pricing, features, and data-use terms change. Check each provider’s official information before purchasing.',
    nico: 'As a NICO-operated publication, we aim to discuss competing services fairly and distinguish editorial content from promotion.'
  },
  'invoice-work': {
    label: 'AI at work', title: 'What to check before automating invoice processing',
    excerpt: 'Look beyond OCR to review, approval, accounting entries, and record keeping.',
    intro: 'Digitizing invoices and receipts is a practical starting point for improving many business workflows.',
    example: 'Map the process from receiving a document to reading, checking, entering, approving, and storing it. Then identify which steps can be automated safely.',
    caution: 'Tax, accounting, and record-retention requirements depend on the applicable rules and may need professional review.',
    nico: 'NICO is exploring and developing receipt and accounting support features. Actual availability will be announced separately.'
  },
  'family-ai': {
    label: 'AI for life', title: 'What AI beginners can try in their first week',
    excerpt: 'Research, writing, and everyday planning—start with small wins.',
    intro: 'You do not need to master technical jargon to begin using AI. Start with one simple task you can evaluate yourself.',
    example: 'Try requests such as “organize my shopping list,” “summarize this long note,” or “help me pack for a weekend trip.”',
    caution: 'AI can be wrong. Do not rely solely on its output for important medical, legal, or financial decisions.',
    nico: 'NICO aims to make AI approachable, but the personal service is still in development.'
  },
  'meeting-work': {
    label: 'AI at work', title: 'How to plan a useful AI meeting-notes workflow',
    excerpt: 'Accuracy matters, but so do speaker labels, decisions, tasks, and information security.',
    intro: 'Meeting AI works best when transcription, summarization, decisions, and task assignment are designed as one workflow.',
    example: 'Begin with a short internal meeting. Review names, technical terms, decisions, and follow-up actions before expanding the system.',
    caution: 'Before recording or transcribing, review participant notices, data storage, and access permissions.',
    nico: 'NICO is developing communication and meeting-related systems. This is not a claim that these features are publicly available.'
  }
};

const EN_UI = {
  sample: 'Editorial sample', readingTime: minutes => `${minutes} min read`, openArticle: 'Read story ＋',
  practicalExample: 'Practical example', caution: 'What to watch out for', nicoConnection: 'How this relates to NICO',
  demoArticleNote: 'This is a sample article for reviewing the MVP. It does not report a specific news announcement.',
  personalEyebrow: 'NICO / PERSONAL', businessEyebrow: 'NICO / BUSINESS',
  personalTitle: 'Personal AI agent', businessTitle: 'AI workflow review for businesses',
  personalBody: 'We are developing a personal AI service to help with planning, organizing information, and everyday work.',
  businessBody: 'We plan to offer a consultation entry point for small, practical workflow improvements.',
  routeInfo: 'Official registration and consultation channels are being prepared. This preview does not accept applications.',
  routeNote: 'Before launch, forms will clearly explain how data is used, how it is handled, and which service features are available.',
  formResult: 'The form works as a demo. Your email address has not been sent, saved, or subscribed.'
};

function isEnglish() { return window.NicoI18n?.getLocale() === 'en'; }
function localizedArticle(article) { return isEnglish() ? { ...article, ...EN_ARTICLES[article.id] } : article; }

const grid = document.getElementById('news-grid');
const search = document.getElementById('news-search');
const filters = [...document.querySelectorAll('[data-filter]')];
let activeFilter = 'all';

function renderArticles() {
  const q = search.value.trim().toLocaleLowerCase('ja');
  const matches = ARTICLES.map(localizedArticle).filter(article => {
    const categoryMatches = activeFilter === 'all' || activeFilter === article.category;
    const queryMatches = !q || [article.title, article.excerpt, article.label].some(text => text.toLocaleLowerCase('ja').includes(q));
    return categoryMatches && queryMatches;
  });
  grid.innerHTML = matches.map(article => `
    <article class="news-card">
      <div class="news-art" data-art="${article.artStyle}"><span class="art-symbol">${article.art}</span><span class="art-corner">IDEA / PREVIEW</span></div>
      <div class="news-body"><div class="card-topline"><span class="category-chip">${article.label}</span><span class="card-date">${isEnglish() ? EN_UI.sample : '編集サンプル'}</span></div>
      <h3>${article.title}</h3><p>${article.excerpt}</p>
      <div class="card-footer"><span>${isEnglish() ? EN_UI.readingTime(article.minutes) : `約${article.minutes}分で読める`}</span><button type="button" class="card-open" data-open-article="${article.id}">${isEnglish() ? EN_UI.openArticle : '記事を見る ＋'}</button></div></div>
    </article>`).join('');
  document.getElementById('news-empty').hidden = matches.length > 0;
}

function setFilter(filter) {
  activeFilter = filter;
  for (const button of filters) {
    const selected = button.dataset.filter === filter;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  }
  renderArticles();
}

filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
search.addEventListener('input', renderArticles);
document.querySelectorAll('[data-go-filter]').forEach(link => link.addEventListener('click', () => {
  setFilter(link.dataset.goFilter);
  search.value = '';
  renderArticles();
}));

const articleDialog = document.getElementById('article-dialog');
const routeDialog = document.getElementById('route-dialog');
let openArticleId = null;
let openRouteType = null;
function openArticle(id) {
  const baseArticle = ARTICLES.find(item => item.id === id);
  const article = baseArticle && localizedArticle(baseArticle);
  if (!article) return;
  openArticleId = id;
  document.getElementById('dialog-content').innerHTML = `
    <span class="dialog-eyebrow">${article.label.toUpperCase()} / ${isEnglish() ? EN_UI.sample : '編集サンプル'}</span><h2>${article.title}</h2>
    <p>${article.intro}</p><h3>${isEnglish() ? EN_UI.practicalExample : '活用イメージ'}</h3><p>${article.example}</p>
    <h3>${isEnglish() ? EN_UI.caution : '利用時に気をつけたいこと'}</h3><p>${article.caution}</p>
    <div class="dialog-tip"><strong>${isEnglish() ? EN_UI.nicoConnection : 'NICOとのつながり'}</strong><p>${article.nico}</p></div>
    <p class="dialog-subtext">${isEnglish() ? EN_UI.demoArticleNote : '本記事はMVPの構成確認用です。具体的なニュース発表を報じたものではありません。'}</p>`;
  if (!articleDialog.open) articleDialog.showModal();
}

document.addEventListener('click', event => {
  const articleButton = event.target.closest('[data-open-article]');
  if (articleButton) openArticle(articleButton.dataset.openArticle);
  const routeButton = event.target.closest('[data-route-info]');
  if (routeButton) openRoute(routeButton.dataset.routeInfo);
});

function openRoute(persona) {
  const personal = persona === 'personal';
  openRouteType = persona;
  document.getElementById('route-content').innerHTML = `
    <span class="dialog-eyebrow">${isEnglish() ? (personal ? EN_UI.personalEyebrow : EN_UI.businessEyebrow) : `NICO / ${personal ? 'PERSONAL' : 'BUSINESS'}`}</span>
    <h2>${isEnglish() ? (personal ? EN_UI.personalTitle : EN_UI.businessTitle) : (personal ? '個人向けAIエージェント' : '法人向けAI業務診断')}</h2>
    <p>${isEnglish() ? (personal ? EN_UI.personalBody : EN_UI.businessBody) : (personal ? '生活や仕事の情報整理を助けるパーソナルAIを構想・開発しています。' : '小さな業務改善から始める相談窓口を設ける計画です。')}</p>
    <div class="dialog-tip">${isEnglish() ? EN_UI.routeInfo : '現在、正式な登録・相談先との接続を準備中です。このプレビューでは申し込みを受け付けません。'}</div>
    <p class="dialog-subtext">${isEnglish() ? EN_UI.routeNote : '正式公開時には、利用目的・個人情報の取扱い・サービス提供状況を明示したフォームへ接続します。'}</p>`;
  if (!routeDialog.open) routeDialog.showModal();
}

document.getElementById('dialog-close').addEventListener('click', () => articleDialog.close());
document.getElementById('route-close').addEventListener('click', () => routeDialog.close());
for (const dialog of [articleDialog, routeDialog]) {
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}

document.getElementById('newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  const result = document.getElementById('form-result');
  result.textContent = isEnglish() ? EN_UI.formResult : '入力確認ができました。これはデモです。メールアドレスは送信・保存されず、登録も行われません。';
  event.currentTarget.reset();
});

document.addEventListener('nico-language-change', () => {
  renderArticles();
  if (articleDialog.open && openArticleId) openArticle(openArticleId);
  if (routeDialog.open && openRouteType) openRoute(openRouteType);
  const result = document.getElementById('form-result');
  if (result.textContent.trim()) {
    result.textContent = isEnglish() ? EN_UI.formResult : '入力確認ができました。これはデモです。メールアドレスは送信・保存されず、登録も行われません。';
  }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.hidden = expanded;
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}));

renderArticles();
