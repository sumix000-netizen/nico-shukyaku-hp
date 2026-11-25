const ARTICLES = [
  {
    id: 'econ-labor', date: '2026-11-24', status: 'outlook',
    source: '出典：公的統計・業界団体の調査（例）',
    category: 'economy', label: '経済・産業', art: 'LABOR', artStyle: 'economy', minutes: 6,
    title: '生成AIは人手不足をどこまで補えるか',
    excerpt: '事務・接客・現場の仕事で、AIが代わりにできること・できないことを経済の視点で整理します。',
    intro: '人手不足が続くなか、生成AIを「人を減らす道具」ではなく「足りない手を補う道具」として検討する企業が増えています。効果は業種や業務の進め方によって大きく変わります。',
    impactPersonal: '定型的な事務作業の比重が下がり、確認・判断・対人の仕事の価値が相対的に高まる可能性があります。',
    impactBusiness: '採用だけに頼らず、業務の一部をAIで補う選択肢を検討できます。まず1つの業務で効果を測るのが現実的です。',
    example: '問い合わせの一次対応、見積書や日報の下書き、マニュアル検索などは、比較的早く効果を確かめやすい領域です。',
    caution: '導入効果の試算は前提条件で大きく変わります。人件費の削減額だけでなく、確認作業や教育の時間も含めて評価してください。',
    nico: 'NICOでは中小企業の業務効率化を支援するツールを開発中です。効果を保証するものではありません。'
  },
  {
    id: 'econ-invest', date: '2026-11-23', status: 'report',
    source: '出典：企業の決算資料・公的統計（例）',
    category: 'economy', label: '経済・産業', art: 'CAPEX', artStyle: 'economy', minutes: 5,
    title: 'AI投資のお金はどこへ流れる？データセンター・半導体・電力',
    excerpt: 'AIブームの裏側で動く設備投資の流れと、国内の産業・暮らしへの波及を読み解きます。',
    intro: 'AIの開発と利用には、計算設備、半導体、電力、通信網などへの大きな投資が必要です。投資の動きは関連産業の売上や雇用、地域経済にも影響します。',
    impactPersonal: '電気料金や関連企業の求人など、暮らしや働き方に間接的に影響する可能性があります。',
    impactBusiness: '取引先や地域でデータセンターや関連工事が増えると、新たな受注機会につながる場合があります。',
    example: '企業の決算説明資料や設備投資計画を読み比べると、どの分野にお金が向かっているかの傾向をつかみやすくなります。',
    caution: '投資計画は変更されることがあり、市場の期待が先行する場合もあります。本記事は特定の銘柄や投資を勧めるものではありません。',
    nico: 'NICOは投資助言を行いません。経済の動きを理解するための情報として紹介しています。'
  },
  {
    id: 'agent-workflow', date: '2026-11-21', status: 'report',
    source: '出典：各社の製品発表・公式ドキュメント（例）',
    category: 'work', label: '仕事のAI', art: 'AGENT', artStyle: 'work', minutes: 5,
    title: 'AIエージェントは、どの仕事を任せられる？',
    excerpt: 'AIエージェントと従来のチャットAIの違いを、会社の実務を例に整理します。',
    intro: 'AIエージェントは、指示に応じて複数の工程を進めることを目指す仕組みです。ただし、利用できる範囲や安全性は製品と設定によって異なります。',
    impactPersonal: '定型作業を任せられる範囲が広がると、仕事の進め方や求められるスキルが変わる可能性があります。',
    impactBusiness: '任せる業務と人が承認する業務の線引きを決めることが、導入効果と安全性の両方につながります。',
    example: '例えば、議事録からタスク候補を作り、担当者の確認後に管理表へ登録するような工程が考えられます。',
    caution: '社外送信、金銭の移動、契約締結などは、権限管理と人間の承認が不可欠です。',
    nico: 'NICOでは業務効率化ツールやパーソナルAIエージェントを開発中です。現時点では機能の公開・利用可否を確約するものではありません。'
  },
  {
    id: 'money-household', date: '2026-11-22', status: 'tested',
    source: '出典：編集部の試用メモ（例）',
    category: 'life', label: 'お金・暮らし', art: 'BUDGET', artStyle: 'life', minutes: 4,
    title: 'AIで家計管理はラクになる？使う前に決めたい3つのこと',
    excerpt: '明細の分類や支出の振り返りにAIを使うときの、便利さと注意点。',
    intro: 'AIは、支出の分類や月ごとの振り返りを手伝う道具として使えます。目的とルールを先に決めると、続けやすくなります。',
    impactPersonal: '振り返りの手間が減ると、固定費の見直しなど判断に時間を使いやすくなります。',
    impactBusiness: '従業員向けの福利厚生や、金融リテラシー研修の題材としても活用できます。',
    example: '口座番号などを伏せた支出メモをもとに、費目ごとの集計や「先月より増えた項目」の確認をAIに頼む使い方が考えられます。',
    caution: '口座番号、カード番号、ログイン情報はAIに入力しないでください。投資や保険の判断は、AIの回答だけで決めないでください。',
    nico: 'NICOの個人向けエージェントは開発中です。家計管理機能の提供を約束するものではありません。'
  },
  {
    id: 'econ-policy', date: '2026-11-19', status: 'report',
    source: '出典：各省庁・自治体の公表資料（例）',
    category: 'economy', label: '経済・産業', art: 'POLICY', artStyle: 'economy', minutes: 5,
    title: '中小企業のAI導入と、補助金・税制の見方',
    excerpt: '支援策は毎年度変わります。制度名より先に押さえたい、対象・時期・手間の確認ポイント。',
    intro: '国や自治体には、IT導入や省力化投資を支援する制度があります。ただし、対象経費や申請時期、要件は年度ごとに見直されます。',
    impactPersonal: '個人事業主も対象になる制度があります。条件は制度ごとに異なるため、公式情報で確認してください。',
    impactBusiness: '補助率だけでなく、申請・報告にかかる社内の手間と、交付までの資金繰りも含めて検討すると判断しやすくなります。',
    example: '導入したいAIツールや機器を決める前に、対象経費になるか、事前申請が必要か、報告義務があるかを公式情報で確認すると手戻りを防げます。',
    caution: '本記事は制度の最新情報を示すものではありません。申請前に必ず公募要領などの公式情報を確認し、必要に応じて専門家に相談してください。',
    nico: 'NICOは補助金の採択を保証しません。制度を理解するための一般的な情報として紹介しています。'
  },
  {
    id: 'invoice-work', date: '2026-11-20', status: 'report',
    source: '出典：国税庁などの公的資料（例）',
    category: 'work', label: '仕事のAI', art: 'PDF', artStyle: 'work', minutes: 4,
    title: '請求書・領収書処理を自動化する前に確認すること',
    excerpt: 'OCRだけで終わらない。確認・仕訳・承認まで業務の流れを見直します。',
    intro: '請求書や領収書の電子化は、多くの会社で検討できる業務改善テーマです。',
    impactPersonal: '個人事業主の経費整理や、確定申告の準備の負担を減らせる可能性があります。',
    impactBusiness: '経理の作業時間を減らし、確認や分析に時間を回せる可能性があります。',
    example: '受領、読み取り、内容確認、会計ソフトへの登録、証憑保管までの手順を整理し、自動化できる箇所を見つけます。',
    caution: '税務・会計処理や保存要件の正確性は、適用される制度と専門家による確認が必要です。',
    nico: 'NICOでは領収書・経理関連の支援機能を開発・検討しています。実装や提供状況は正式案内をご確認ください。'
  },
  {
    id: 'tools-compare', date: '2026-11-18', status: 'tested',
    source: '出典：各社の料金・機能ページ（例）',
    category: 'tools', label: 'ツール比較', art: 'AI / AI', artStyle: 'tools', minutes: 6,
    title: 'AIツール比較で確認したい5つの条件',
    excerpt: '性能だけで選ばないために、料金・日本語・安全性・連携・サポートをチェック。',
    intro: 'AIツール選びでは、ベンチマークの点数より、実際の目的に適しているかが重要です。',
    impactPersonal: '無料版と有料版の違いを理解すると、不要なサブスク支出を避けやすくなります。',
    impactBusiness: 'ツール費用は利用人数に応じて増えます。期待できる効果と総費用を比べて選ぶことが大切です。',
    example: '同じ作業を複数のツールで試し、品質、操作回数、費用、再現性を比較すると判断しやすくなります。',
    caution: '価格・提供機能・データ利用条件は変更されます。契約前に各社の公式情報を確認してください。',
    nico: 'NICOの運営メディアとして、競合製品も含めて必要な情報を公平に紹介する編集方針です。'
  },
  {
    id: 'daily-planning', date: '2026-11-17', status: 'tested',
    source: '出典：編集部の試用メモ（例）',
    category: 'life', label: 'お金・暮らし', art: 'DAY', artStyle: 'life', minutes: 4,
    title: '予定整理の負担をAIで軽くする、最初の一歩',
    excerpt: '家族の予定や買い物リストなど、日常の小さな作業から考えるAI活用。',
    intro: 'AIは、バラバラに書かれた予定やメモを整理する補助として利用できます。',
    impactPersonal: '予定や持ち物の整理にかかる時間を減らせる可能性があります。',
    impactBusiness: '社員の予定調整や社内連絡の効率化にも応用できます。',
    example: '一週間の予定、移動時間、準備物を文章で伝え、見やすい表にする使い方が考えられます。',
    caution: '本人や家族の個人情報を外部サービスに入力する前に、利用規約や設定を確認してください。',
    nico: 'NICOの個人向けエージェントは開発中です。利用開始の案内は正式な登録先の公開後に行います。'
  },
  {
    id: 'meeting-work', date: '2026-11-16', status: 'outlook',
    source: '出典：各社の製品発表・導入事例（例）',
    category: 'work', label: '仕事のAI', art: 'MEET', artStyle: 'work', minutes: 5,
    title: '議事録AIを導入するときの設計ポイント',
    excerpt: '文字起こしの精度だけでなく、話者・要点・TODO・情報管理を見ます。',
    intro: '会議の文字起こしから要約、決定事項、タスク抽出までを一連の流れで考えると、導入効果を評価しやすくなります。',
    impactPersonal: '会議後のメモ整理の負担が減り、決定事項を追いやすくなります。',
    impactBusiness: '決定事項とTODOの抜け漏れが減れば、会議全体のコスト削減につながる可能性があります。',
    example: '最初は社内の短い打ち合わせで試し、固有名詞の認識や決定事項の取り違えがないかを検証します。',
    caution: '録音や文字起こしを行う際は参加者への周知、保存先、アクセス権限などを事前に確認してください。',
    nico: 'NICOでは会議・議事録関連のシステムを開発中です。公開済みの利用機能を示すものではありません。'
  }
];

const EN_ARTICLES = {
  'econ-labor': {
    source: 'Source: official statistics and industry surveys (example)',
    label: 'Economy & industry', title: 'How far can generative AI ease labour shortages?',
    excerpt: 'An economic look at what AI can and cannot take over in office, customer-facing and on-site work.',
    intro: 'As labour shortages persist, more companies are exploring generative AI not as a way to cut staff but as a way to fill gaps. The impact varies widely by industry and workflow.',
    impactPersonal: 'Routine office tasks may matter less, while checking, judgement and people-facing work may become relatively more valuable.',
    impactBusiness: 'Instead of relying only on hiring, you can consider using AI to cover part of the workload. Measuring the effect on one task first is a practical start.',
    example: 'First-line customer enquiries, drafting quotes and daily reports, and searching manuals are areas where results are relatively quick to test.',
    caution: 'Savings estimates depend heavily on assumptions. Include time for review and training, not just reduced labour costs.',
    nico: 'NICO is developing tools to help small businesses work more efficiently. Results are not guaranteed.'
  },
  'econ-invest': {
    source: 'Source: company earnings materials and official statistics (example)',
    label: 'Economy & industry', title: 'Where does AI investment go? Data centres, chips and power',
    excerpt: 'Following the capital spending behind the AI boom and its knock-on effects for industry and daily life.',
    intro: 'Building and running AI requires heavy investment in computing facilities, semiconductors, electricity and networks. These flows also affect revenue, jobs and regional economies in related industries.',
    impactPersonal: 'It may indirectly affect daily life and work, for example through electricity prices or hiring at related companies.',
    impactBusiness: 'More data centres and related construction in your area or supply chain may create new business opportunities.',
    example: 'Comparing company earnings materials and capital spending plans helps reveal where money is heading.',
    caution: 'Investment plans can change, and market expectations may run ahead of reality. This article does not recommend any specific stock or investment.',
    nico: 'NICO does not provide investment advice. This is shared to help readers understand economic trends.'
  },
  'agent-workflow': {
    source: 'Source: vendor announcements and official docs (example)',
    label: 'AI at work', title: 'What tasks can AI agents actually handle?',
    excerpt: 'Understand the difference between AI agents and chat assistants through everyday business tasks.',
    intro: 'AI agents are systems designed to carry out several steps toward a goal. Their capabilities and safeguards depend on the product and its configuration.',
    impactPersonal: 'As more routine work can be delegated, the way you work and the skills in demand may change.',
    impactBusiness: 'Deciding which tasks to delegate and which need human approval supports both results and safety.',
    example: 'An agent could draft follow-up tasks from meeting notes and, after a person approves them, add them to a shared task list.',
    caution: 'Sending information outside the company, moving money, or signing agreements requires appropriate permissions and human approval.',
    nico: 'NICO is developing productivity tools and a personal AI agent. This preview does not promise the availability or release of any particular feature.'
  },
  'money-household': {
    source: 'Source: editorial test notes (example)',
    label: 'Money & life', title: 'Can AI make household budgeting easier? Three things to decide first',
    excerpt: 'The benefits and pitfalls of using AI to categorise spending and review your month.',
    intro: 'AI can help categorise expenses and review monthly spending. Deciding your goals and rules first makes it easier to keep going.',
    impactPersonal: 'Spending less time on reviews leaves more time for decisions such as cutting fixed costs.',
    impactBusiness: 'It can also be a topic for employee benefits or financial literacy training.',
    example: 'You could share a spending note with account numbers removed and ask AI to total each category or flag items that rose since last month.',
    caution: 'Never enter account numbers, card numbers or login details into AI tools. Do not make investment or insurance decisions based solely on AI answers.',
    nico: 'NICO’s personal agent is in development. This is not a commitment to offer budgeting features.'
  },
  'econ-policy': {
    source: 'Source: government and local authority publications (example)',
    label: 'Economy & industry', title: 'AI adoption, subsidies and tax incentives for small businesses',
    excerpt: 'Support schemes change every year. What to check first: eligibility, timing and paperwork.',
    intro: 'National and local governments offer schemes that support IT adoption and labour-saving investment. Eligible costs, deadlines and requirements are reviewed each fiscal year.',
    impactPersonal: 'Some schemes are open to sole proprietors. Conditions vary, so check the official information.',
    impactBusiness: 'Consider the internal effort needed for applications and reports, and cash flow until funds arrive—not just the subsidy rate.',
    example: 'Before choosing an AI tool or device, check official guidance to see whether the cost is eligible, whether prior application is required and what reporting is needed.',
    caution: 'This article does not reflect the latest scheme details. Always check the official guidelines before applying and consult a professional if needed.',
    nico: 'NICO does not guarantee subsidy approval. This is general information to help readers understand the schemes.'
  },
  'invoice-work': {
    source: 'Source: official government guidance (example)',
    label: 'AI at work', title: 'What to check before automating invoice processing',
    excerpt: 'Look beyond OCR to review, approval, accounting entries, and record keeping.',
    intro: 'Digitizing invoices and receipts is a practical starting point for improving many business workflows.',
    impactPersonal: 'It may reduce the effort of organising expenses and preparing tax returns for sole proprietors.',
    impactBusiness: 'It may cut bookkeeping time and free up time for review and analysis.',
    example: 'Map the process from receiving a document to reading, checking, entering, approving, and storing it. Then identify which steps can be automated safely.',
    caution: 'Tax, accounting, and record-retention requirements depend on the applicable rules and may need professional review.',
    nico: 'NICO is exploring and developing receipt and accounting support features. Actual availability will be announced separately.'
  },
  'tools-compare': {
    source: 'Source: vendor pricing and feature pages (example)',
    label: 'Tool comparison', title: 'Five things to check when comparing AI tools',
    excerpt: 'Look beyond performance scores: price, language support, safety, integrations, and help.',
    intro: 'The best AI tool is not always the one with the highest benchmark score. It is the one that fits your actual task.',
    impactPersonal: 'Understanding free versus paid plans helps you avoid unnecessary subscriptions.',
    impactBusiness: 'Tool costs grow with the number of users. Compare the total cost with the expected benefit.',
    example: 'Try the same task in several tools and compare output quality, steps required, cost, and consistency.',
    caution: 'Pricing, features, and data-use terms change. Check each provider’s official information before purchasing.',
    nico: 'As a NICO-operated publication, we aim to discuss competing services fairly and distinguish editorial content from promotion.'
  },
  'daily-planning': {
    source: 'Source: editorial test notes (example)',
    label: 'Money & life', title: 'A simple way to organize your schedule with AI',
    excerpt: 'Start with small everyday tasks, from family calendars to shopping lists.',
    intro: 'AI can help turn scattered notes and appointments into a clearer plan.',
    impactPersonal: 'You may spend less time organising plans and things to bring.',
    impactBusiness: 'The same approach can streamline staff scheduling and internal communication.',
    example: 'You could describe your weekly schedule, travel times, and things to prepare, then ask AI to organize them into an easy-to-read table.',
    caution: 'Check the privacy terms and settings before entering personal information about yourself or your family into third-party tools.',
    nico: 'NICO’s personal AI agent is in development. Official sign-up details will be provided when a verified registration channel is available.'
  },
  'meeting-work': {
    source: 'Source: vendor announcements and case studies (example)',
    label: 'AI at work', title: 'How to plan a useful AI meeting-notes workflow',
    excerpt: 'Accuracy matters, but so do speaker labels, decisions, tasks, and information security.',
    intro: 'Meeting AI works best when transcription, summarization, decisions, and task assignment are designed as one workflow.',
    impactPersonal: 'Less tidying of notes after meetings, and decisions become easier to follow.',
    impactBusiness: 'Fewer missed decisions and tasks may lower the overall cost of meetings.',
    example: 'Begin with a short internal meeting. Review names, technical terms, decisions, and follow-up actions before expanding the system.',
    caution: 'Before recording or transcribing, review participant notices, data storage, and access permissions.',
    nico: 'NICO is developing communication and meeting-related systems. This is not a claim that these features are publicly available.'
  }
};

// Sample indicator tiles. All values are fictional placeholders for layout review.
const INDICATORS = [
  { article: 'agent-workflow', dir: 'up', change: '+5pt', value: { ja: '40%', en: '40%' },
    ja: { label: '企業の生成AI導入率', period: '前期比', note: '法人：同業他社の動きを知る目安' },
    en: { label: 'Companies using generative AI', period: 'vs last quarter', note: 'For businesses: a benchmark against peers' } },
  { article: 'econ-invest', dir: 'up', change: '+20%', value: { ja: '指数 120', en: 'Index 120' },
    ja: { label: 'AI関連の設備投資', period: '前年比', note: '半導体・電力・建設の需要につながる' },
    en: { label: 'AI-related capital spending', period: 'year on year', note: 'Drives demand for chips, power and construction' } },
  { article: 'econ-labor', dir: 'up', change: '+1.0pt', value: { ja: '5.0%', en: '5.0%' },
    ja: { label: 'AIスキルを求める求人の割合', period: '前年比', note: '個人：学び直しの優先度を考える材料' },
    en: { label: 'Job ads asking for AI skills', period: 'year on year', note: 'For individuals: a guide to reskilling priorities' } },
  { article: 'tools-compare', dir: 'flat', change: '±0', value: { ja: '月3,000円', en: '¥3,000/mo' },
    ja: { label: '生成AIツールの月額料金（目安）', period: '前年比', note: '家計・経費：サブスク見直しの目安' },
    en: { label: 'Typical monthly AI tool price', period: 'year on year', note: 'For budgets: a reference for reviewing subscriptions' } }
];

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
  formResult: 'The form works as a demo. Your email address has not been sent, saved, or subscribed.',
  topStory: 'Top story this week', readStory: 'Read the story', sources: 'Sources',
  sourceNote: 'At launch, links to original announcements and primary materials will appear here.',
  impactTitle: 'What it means for you', impactPersonal: 'For individuals', impactBusiness: 'For businesses',
  personalLink: 'NICO for individuals', businessLink: 'NICO for businesses',
  sampleValue: 'Sample value', relatedStory: 'Related story', up: 'Up', down: 'Down', flat: 'Flat'
};

const STATUS_LABELS = {
  ja: { report: '発表ベース', tested: '検証あり', outlook: '予測を含む' },
  en: { report: 'Announced', tested: 'Tested', outlook: 'Includes outlook' }
};
const TOP_STORY_ID = 'econ-labor';
const DIGEST_IDS = ['econ-invest', 'invoice-work', 'money-household'];
const SAMPLE_JA = 'サンプル';

function isEnglish() { return window.NicoI18n?.getLocale() === 'en'; }
function localizedArticle(article) { return isEnglish() ? { ...article, ...EN_ARTICLES[article.id] } : article; }
function statusLabel(status) { return STATUS_LABELS[isEnglish() ? 'en' : 'ja'][status]; }
function statusChip(article) { return `<span class="status-chip" data-status="${article.status}">${statusLabel(article.status)}</span>`; }
function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return isEnglish()
    ? new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
    : `${y}.${String(m).padStart(2, '0')}.${String(d).padStart(2, '0')}`;
}
function readingTime(article) { return isEnglish() ? EN_UI.readingTime(article.minutes) : `約${article.minutes}分で読める`; }
function findArticle(id) { const base = ARTICLES.find(item => item.id === id); return base && localizedArticle(base); }

function renderTopStory() {
  const article = findArticle(TOP_STORY_ID);
  document.getElementById('top-story-content').innerHTML = `
    <span class="top-kicker">${isEnglish() ? EN_UI.topStory : '今週のトップ記事'}</span>
    <div class="top-meta"><span class="category-chip">${article.label}</span>${statusChip(article)}</div>
    <h2 class="top-title">${article.title}</h2>
    <p class="top-excerpt">${article.excerpt}</p>
    <p class="top-source">${article.source}</p>
    <div class="top-foot"><span>${formatDate(article.date)} · ${isEnglish() ? EN_UI.sample : SAMPLE_JA} · ${readingTime(article)}</span>
    <button type="button" class="button button-primary" data-open-article="${article.id}">${isEnglish() ? EN_UI.readStory : '記事を読む'} <span aria-hidden="true">↗</span></button></div>`;
}

function renderIndicators() {
  const en = isEnglish();
  const arrow = { up: '▲', down: '▼', flat: '—' };
  const dirLabel = { up: en ? EN_UI.up : '上昇', down: en ? EN_UI.down : '低下', flat: en ? EN_UI.flat : '横ばい' };
  document.getElementById('indicator-grid').innerHTML = INDICATORS.map(item => {
    const t = en ? item.en : item.ja;
    return `<div class="indicator-card">
      <div class="indicator-top"><span class="indicator-label">${t.label}</span><span class="sample-tag">${en ? EN_UI.sampleValue : 'サンプル値'}</span></div>
      <strong class="indicator-value">${en ? item.value.en : item.value.ja}</strong>
      <span class="indicator-change" data-dir="${item.dir}"><span aria-hidden="true">${arrow[item.dir]}</span><span class="visually-hidden">${dirLabel[item.dir]}</span> ${item.change} <small>${t.period}</small></span>
      <p class="indicator-note">${t.note}</p>
      <button type="button" class="text-button" data-open-article="${item.article}">${en ? EN_UI.relatedStory : '関連記事を読む'} <span aria-hidden="true">↗</span></button>
    </div>`;
  }).join('');
}

function renderDigest() {
  document.getElementById('digest-items').innerHTML = DIGEST_IDS.map((id, index) => {
    const article = findArticle(id);
    return `<button type="button" class="digest-item" data-open-article="${id}"><span class="digest-number">0${index + 1}</span><span><strong>${article.title}</strong><small>${article.label} · ${statusLabel(article.status)} · ${formatDate(article.date)}</small></span><span class="digest-plus" aria-hidden="true">＋</span></button>`;
  }).join('');
}

const grid = document.getElementById('news-grid');
const search = document.getElementById('news-search');
const filters = [...document.querySelectorAll('[data-filter]')];
let activeFilter = 'all';
let showAllArticles = false;
const INITIAL_ARTICLE_COUNT = 6;
const moreButton = document.getElementById('news-more');

function renderArticles() {
  const q = search.value.trim().toLocaleLowerCase('ja');
  const matches = ARTICLES.map(localizedArticle).filter(article => {
    const categoryMatches = activeFilter === 'all' || activeFilter === article.category;
    const queryMatches = !q || [article.title, article.excerpt, article.label].some(text => text.toLocaleLowerCase('ja').includes(q));
    return categoryMatches && queryMatches;
  });
  const collapsed = !showAllArticles && activeFilter === 'all' && !q && matches.length > INITIAL_ARTICLE_COUNT;
  const visible = collapsed ? matches.slice(0, INITIAL_ARTICLE_COUNT) : matches;
  moreButton.hidden = !collapsed;
  if (collapsed) {
    const rest = matches.length - INITIAL_ARTICLE_COUNT;
    moreButton.textContent = isEnglish() ? `Show all stories (${rest} more)` : `すべての記事を見る（残り${rest}本）`;
  }
  grid.innerHTML = visible.map(article => `
    <article class="news-card">
      <div class="news-art" data-art="${article.artStyle}"><span class="art-symbol">${article.art}</span><span class="art-corner">IDEA / PREVIEW</span></div>
      <div class="news-body"><div class="card-topline"><span class="category-chip">${article.label}</span>${statusChip(article)}<span class="card-date">${formatDate(article.date)} · ${isEnglish() ? EN_UI.sample : SAMPLE_JA}</span></div>
      <h3>${article.title}</h3><p>${article.excerpt}</p><p class="card-source">${article.source}</p>
      <div class="card-footer"><span>${readingTime(article)}</span><button type="button" class="card-open" data-open-article="${article.id}">${isEnglish() ? EN_UI.openArticle : '記事を見る ＋'}</button></div></div>
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
moreButton.addEventListener('click', () => {
  showAllArticles = true;
  renderArticles();
  const next = grid.children[INITIAL_ARTICLE_COUNT]?.querySelector('button');
  if (next) next.focus();
});
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
  const article = findArticle(id);
  if (!article) return;
  openArticleId = id;
  document.getElementById('dialog-content').innerHTML = `
    <span class="dialog-eyebrow">${article.label.toUpperCase()} / ${isEnglish() ? EN_UI.sample : '編集サンプル'}</span>
    <div class="dialog-meta">${statusChip(article)}<span>${formatDate(article.date)} · ${readingTime(article)}</span></div><h2 id="dialog-title">${article.title}</h2>
    <p>${article.intro}</p>
    <h3>${isEnglish() ? EN_UI.impactTitle : 'あなたへの影響'}</h3>
    <div class="impact-grid">
      <div class="impact-card"><span>${isEnglish() ? EN_UI.impactPersonal : '個人への影響'}</span><p>${article.impactPersonal}</p><button type="button" class="text-button" data-route-info="personal">${isEnglish() ? EN_UI.personalLink : '個人向けNICOの案内'} <span aria-hidden="true">↗</span></button></div>
      <div class="impact-card"><span>${isEnglish() ? EN_UI.impactBusiness : '法人への影響'}</span><p>${article.impactBusiness}</p><button type="button" class="text-button" data-route-info="business">${isEnglish() ? EN_UI.businessLink : '法人向けNICOの案内'} <span aria-hidden="true">↗</span></button></div>
    </div>
    <h3>${isEnglish() ? EN_UI.practicalExample : '活用イメージ'}</h3><p>${article.example}</p>
    <h3>${isEnglish() ? EN_UI.caution : '利用時に気をつけたいこと'}</h3><p>${article.caution}</p>
    <h3>${isEnglish() ? EN_UI.sources : '出典'}</h3><p>${article.source.replace(/^(出典：|Source: )/, '')}<br /><small class="source-note">${isEnglish() ? EN_UI.sourceNote : '正式公開時は、ここに公式発表・一次資料へのリンクを掲載します。'}</small></p>
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
  if (articleDialog.open) articleDialog.close();
  document.getElementById('route-content').innerHTML = `
    <span class="dialog-eyebrow">${isEnglish() ? (personal ? EN_UI.personalEyebrow : EN_UI.businessEyebrow) : `NICO / ${personal ? 'PERSONAL' : 'BUSINESS'}`}</span>
    <h2 id="route-title">${isEnglish() ? (personal ? EN_UI.personalTitle : EN_UI.businessTitle) : (personal ? '個人向けAIエージェント' : '法人向けAI業務診断')}</h2>
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
  renderTopStory();
  renderIndicators();
  renderDigest();
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

renderTopStory();
renderIndicators();
renderDigest();
renderArticles();
document.documentElement.classList.remove('i18n-pending');
