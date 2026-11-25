// Real news digests (2026). Facts are summarised from the linked reports and official announcements.
// Each source: [Japanese label, English label, URL].
const CATEGORY_LABELS = {
  ja: { economy: '経済・市場', policy: '政策・ルール', work: '仕事・雇用', life: 'お金・暮らし', tools: 'モデル・ツール', beginner: '初心者向け' },
  en: { economy: 'Economy & markets', policy: 'Policy & rules', work: 'Work & jobs', life: 'Money & life', tools: 'Models & tools', beginner: 'Beginner guides' }
};
const ART_STYLE = { economy: 'economy', policy: 'policy', work: 'work', life: 'life', tools: 'tools', beginner: 'beginner' };

const ARTICLES = [
  {
    id: 'market-1125', date: '2026-11-25', status: 'report', category: 'economy', art: 'MARKET', minutes: 3,
    sources: [
      ['時事ドットコム「東京株、一時2100円超安 AI株に反動の売り」', 'Jiji Press (Japanese): Tokyo stocks fall over ¥2,100 as AI shares sold', 'https://www.jiji.com/jc/article?k=2026112500501&g=eco'],
      ['日本経済新聞「東証前引け 日経平均は大幅反落 一時2100円安」', 'Nikkei (Japanese): Nikkei slumps in morning trade', 'https://www.nikkei.com/article/DGXZQOFL250FS0V21C26A1000000/']
    ],
    ja: {
      title: 'AI株に売り、日経平均が一時2100円超安',
      excerpt: '米国の半導体株の急落を受け、東京市場でAI・半導体関連株が売られました。AI投資の「回収」への不安が続いています。',
      intro: '11月25日の東京株式市場で日経平均株価が大きく下げ、下げ幅は一時2100円を超えました。午前の終値は前日比1934円20銭安（3.30%安）の5万6710円43銭です。前日の米国市場で主要な半導体株でつくる指数（SOX）が7%あまり下落した流れを受け、前日に大きく戻していたAI・半導体関連株に売りが膨らみました。報道では、AI投資の収益性やデータセンター建設をめぐる規制への不安が背景に挙げられています。',
      impactPersonal: '投資信託や年金の運用成績は、AI関連株の比重が高いほど値動きが大きくなります。短期の上下で慌てず、自分の資産配分を確かめる機会にできます。',
      impactBusiness: '株価の変動は、取引先の設備投資や採用の姿勢に波及することがあります。AI関連の受注やサービス導入を計画している場合は、相手先の判断が慎重になる可能性も想定しておくと安心です。',
      example: '市場の関心は「AIはすごいか」から「AIへの巨額投資を利益で回収できるか」に移りつつあります。決算や設備投資のニュースは、売上の伸びと投資額のバランスに注目すると流れがつかみやすくなります。',
      caution: '数値は11月25日午前時点の報道によるもので、終値とは異なります。本記事は特定の銘柄や投資を勧めるものではありません。'
    },
    en: {
      title: 'Nikkei falls more than 2,100 points intraday as AI stocks slide',
      excerpt: 'After a sharp drop in US chip stocks, AI and semiconductor shares sold off in Tokyo amid lingering doubts about returns on AI investment.',
      intro: 'On 25 November the Nikkei Stock Average fell sharply, at one point by more than 2,100 points. It closed the morning session down ¥1,934.20 (3.30%) at ¥56,710.43. After the Philadelphia Semiconductor Index (SOX) fell more than 7% in the US the previous day, selling hit AI and chip stocks that had rebounded strongly the day before. Reports point to concerns about the profitability of AI investment and regulation of data-centre construction.',
      impactPersonal: 'Investment funds and pensions with a heavy weighting in AI stocks will swing more. Rather than reacting to short-term moves, use it as a chance to check your own asset mix.',
      impactBusiness: 'Market swings can affect customers’ capital spending and hiring. If you are planning AI-related projects or sales, allow for clients becoming more cautious.',
      example: 'Markets are shifting from “Is AI impressive?” to “Can huge AI investments pay off?” When reading earnings or capex news, compare revenue growth with the amount being invested.',
      caution: 'Figures reflect reports from the morning of 25 November and differ from the closing level. This article is not a recommendation to buy or sell any security.'
    }
  },
  {
    id: 'un-summit', date: '2026-11-23', status: 'report', category: 'policy', art: 'UN', minutes: 4,
    sources: [
      ['UN News「Bridgetown AI summit to tackle safety as risks outpace capacity to respond」', 'UN News: Bridgetown AI summit to tackle safety as risks outpace capacity to respond', 'https://news.un.org/en/story/2026/11/1168854'],
      ['UN News「UN chief urges talks on global AI safety framework」', 'UN News: UN chief urges talks on global AI safety framework', 'https://news.un.org/en/story/2026/11/1168861'],
      ['国連プレスリリース（事務総長演説）', 'UN press release: Secretary-General at Special Summit on AI Safety', 'https://press.un.org/en/2026/sgsm23382.doc.htm']
    ],
    ja: {
      title: '国連がAI安全の特別サミット、1年以内の国際枠組みづくりを呼びかけ',
      excerpt: 'カリブ海のバルバドスで開かれたサミットで、グテレス事務総長はAIのリスク管理に向けた多国間の枠組みづくりを各国に求めました。',
      intro: '国連とバルバドス政府は11月23日、首都ブリッジタウンでAIの安全に関する特別サミットを共催しました。グテレス事務総長は、AIのリスクを管理する多国間の枠組みについて話し合いを始めるよう加盟国に呼びかけました。「ブリッジタウン行動要請」は、独立した監視の仕組みを備えた原則ベースの枠組みを1年以内につくることや、途上国のAI能力の底上げへの投資を求めています。軍事利用は議題の対象外とされました。',
      impactPersonal: 'AIの表示ルールや安全基準は、各国の議論を経て、私たちが使うサービスの仕様に反映されていきます。すぐに生活が変わるわけではありませんが、AIのルールづくりが国際的に進んでいる流れとして押さえておくと役立ちます。',
      impactBusiness: '海外との取引や海外製AIの利用では、国ごとのルールの違いが業務に影響します。EUのAI法など先行する規制と合わせて、利用しているサービスの対応状況を確認しておくと備えになります。',
      example: 'AIのルールづくりは、EU（法規制）、日本（基本計画とガイドライン）、国連（国際協調）と、層ごとに進んでいます。今回のサミットは合意文書を交渉する場ではなく、今後1年の議論の出発点と位置づけられています。',
      caution: 'サミットの内容は主に国連側の発表に基づいています。枠組みの具体的な中身や各国の参加は、今後の協議次第です。'
    },
    en: {
      title: 'UN holds special AI safety summit, calls for a global framework within a year',
      excerpt: 'At a summit in Barbados, Secretary-General António Guterres urged member states to start work on a multilateral framework for managing AI risk.',
      intro: 'On 23 November the United Nations and the Government of Barbados co-hosted a Special Summit on AI Safety in Bridgetown. Guterres called on member states to begin talks on a multilateral framework for managing AI risk. The “Bridgetown Call to Action” asks countries to develop, within a year, a principles-based framework with independent oversight, and to invest in AI capacity in the Global South. Military uses of AI were outside the scope of the summit.',
      impactPersonal: 'Labelling rules and safety standards for AI eventually shape the services we use. Nothing changes overnight, but it is worth knowing that AI rule-making is now an international process.',
      impactBusiness: 'If you trade internationally or use overseas AI services, differences between national rules can affect your operations. Check how your providers respond to rules such as the EU AI Act.',
      example: 'AI governance is advancing in layers: the EU through legislation, Japan through a national plan and guidelines, and the UN through international cooperation. This summit was a starting point for a year of talks, not a negotiated agreement.',
      caution: 'Outcomes are reported mainly by the UN itself. The content of any framework and which countries join depend on future negotiations.'
    }
  },
  {
    id: 'nvidia-ceo', date: '2026-11-23', status: 'report', category: 'economy', art: 'NVIDIA', minutes: 3,
    sources: [
      ['NVIDIA「NVIDIA Announces CEO Transition」（11月12日）', 'NVIDIA: NVIDIA Announces CEO Transition (12 Nov)', 'https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition'],
      ['NVIDIA「NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director」', 'NVIDIA: Board Reinstates Jensen Huang as President, CEO and Board Director', 'https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director'],
      ['TechCrunch「Nvidia reverses course and brings Jensen Huang back as CEO」', 'TechCrunch: Nvidia reverses course and brings Jensen Huang back as CEO', 'https://techcrunch.com/2026/11/23/nvidia-reverses-course-and-brings-jensen-huang-back-as-ceo/']
    ],
    ja: {
      title: 'NVIDIA、辞任したフアン氏をCEOに復帰させる',
      excerpt: '11月12日に辞任が発表されたジェンスン・フアン氏が、約10日後に最高経営責任者へ復帰しました。AI半導体最大手のトップ交代劇は市場も揺らしました。',
      intro: 'NVIDIAは11月12日、ジェンスン・フアン氏が社長兼CEOと取締役を即日辞任し、コレット・クレス最高財務責任者（CFO）が暫定CEOに就くと発表しました。その後、取締役会は11月23日、フアン氏を社長兼CEO・取締役に復帰させると発表しました。同社は政府の調査には引き続き協力するとし、最高コンプライアンス責任者（CCO）を新たに置くための人選も始めるとしています。',
      impactPersonal: 'NVIDIAはAI向け半導体の中心企業で、株価指数や投資信託への影響も大きい存在です。1社の経営の安定が、AI関連株全体の材料になることを示した出来事です。',
      impactBusiness: 'AIの計算基盤は少数の企業に頼る度合いが高く、供給元の経営や規制の動きがクラウド料金や調達計画に影響し得ます。特定の供給元に頼りすぎていないか見直すきっかけになります。',
      example: 'AIの成長を支える企業が少数に集中していること自体が、市場ではリスクとして意識されています。トップ人事のような企業統治（ガバナンス）の問題も、いまやAI経済のニュースの一部です。',
      caution: '辞任の経緯をめぐっては米国で調査が続いていると報じられています。本記事は同社の公式発表を中心に要約したもので、特定の銘柄や投資を勧めるものではありません。'
    },
    en: {
      title: 'Nvidia reinstates Jensen Huang as CEO after his resignation',
      excerpt: 'Jensen Huang, whose resignation was announced on 12 November, returned as chief executive about ten days later. The leadership turmoil at the leading AI chipmaker rattled markets.',
      intro: 'On 12 November Nvidia announced that Jensen Huang had resigned as President, CEO and board member with immediate effect, with CFO Colette Kress named interim CEO. On 23 November the board announced that Huang had been reinstated as President, CEO and director. The company said it will keep cooperating with government inquiries and is starting a search for a new Chief Compliance Officer.',
      impactPersonal: 'Nvidia is central to AI chips and carries heavy weight in stock indices and funds. The episode showed how one company’s stability can move AI stocks as a whole.',
      impactBusiness: 'AI computing depends on a small number of suppliers, so their management and regulatory issues can affect cloud prices and procurement plans. It is a good moment to check whether you rely too heavily on one provider.',
      example: 'Markets increasingly see the concentration of AI infrastructure in a few firms as a risk in itself. Corporate governance issues such as leadership changes are now part of AI economy news.',
      caution: 'Reports say US inquiries related to the resignation are ongoing. This summary is based mainly on the company’s announcements and is not investment advice.'
    }
  },
  {
    id: 'anthropic-ipo', date: '2026-11-19', status: 'report', category: 'economy', art: 'IPO', minutes: 4,
    sources: [
      ['Anthropic「Anthropic announces closing of initial public offering」', 'Anthropic: Anthropic announces closing of initial public offering', 'https://www.anthropic.com/news/ipo-close'],
      ['CNBC「Anthropic IPO raises over $81 billion in largest offering on record」', 'CNBC: Anthropic IPO raises over $81 billion in largest offering on record', 'https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html'],
      ['CNBC「Anthropic IPO live updates: ANT stock price and Nasdaq debut」', 'CNBC: Anthropic IPO live updates', 'https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html'],
      ['Anthropic「Anthropic prices initial public offering」', 'Anthropic: Anthropic prices initial public offering', 'https://www.anthropic.com/news/anthropic-prices-initial-public-offering']
    ],
    ja: {
      title: 'アンソロピックがナスダック上場、IPOの調達額は過去最大の約935億ドル',
      excerpt: '対話AI「Claude」を開発する米アンソロピックが上場しました。最先端AIの開発企業として初の上場は、AI投資の行方を占う試金石とされています。',
      intro: '米アンソロピックは11月18日、公開価格を想定を上回る1株83ドルに決めました。19日にナスダック市場で取引が始まり（銘柄コードANT）、初値は111.50ドル、終値は公開価格を17%上回る97.17ドルでした。20日には上場手続きの完了を発表し、引受証券会社による追加購入枠（1億4700万株）がすべて行使されて、売り出しは計11億2700万株、IPOの調達総額は約935億ドルになりました。同時に、AMDやGoogle、Microsoft、NVIDIAなどに株式を割り当てる私募で約260億ドルを調達し、合計は約1195億ドルに上ります。ただ、上場した週はハイテク株の下落が重なり、市場の不安定さも浮き彫りになりました。',
      impactPersonal: '多くの人が使うAIサービスの開発企業が上場したことで、AI企業の業績や株価が日常的なニュースになります。株価指数を通じて、間接的に資産に影響する可能性もあります。',
      impactBusiness: '調達した資金は計算基盤や研究開発に向かうとみられ、AIサービスの機能や価格の競争に影響します。業務で使うAIサービスの料金や提供条件の変化には注意しておくと安心です。',
      example: '巨額の資金調達はAIへの期待の大きさを示す一方、上場後は四半期ごとの業績で投資の回収状況が問われます。AI投資の収益性をめぐる市場の議論（記事：AI株に売り）と合わせて読むと、今の局面がわかりやすくなります。',
      caution: '当初報じられた約813億ドルは、追加購入枠を含まない金額です。IPOの調達総額には既存株主の売り出し分も含まれ、同社の手取りは約916億ドルとされています。本記事は投資を勧めるものではありません。'
    },
    en: {
      title: 'Anthropic lists on Nasdaq after a record IPO of about $93.5 billion',
      excerpt: 'Anthropic, the developer of the Claude assistant, has gone public. As the first frontier AI lab to list, it is seen as a test of where AI investment goes next.',
      intro: 'On 18 November Anthropic priced its shares at $83, above the expected range. Trading began on Nasdaq on 19 November under the ticker ANT; the stock opened at $111.50 and closed at $97.17, 17% above the offer price. On 20 November Anthropic announced the offering had closed: with the underwriters’ option for 147 million additional shares fully exercised, 1.127 billion shares were sold for gross IPO proceeds of about $93.5 billion. A concurrent private placement to AMD, Google, Microsoft, NVIDIA and others raised about $26.0 billion, for combined gross proceeds of about $119.5 billion. The listing coincided with a broad tech sell-off, highlighting market volatility.',
      impactPersonal: 'With a widely used AI developer now listed, AI company results and share prices will become everyday news, and may affect your savings indirectly through stock indices.',
      impactBusiness: 'The capital raised is expected to go into computing and research, shaping features and price competition among AI services. Keep an eye on pricing and terms for the AI tools you use at work.',
      example: 'A huge raise signals high expectations, but as a listed company Anthropic will be judged on quarterly results and returns on investment. Read it alongside the market’s debate on AI profitability (see: Nikkei falls as AI stocks slide).',
      caution: 'Early reports of $81.3 billion excluded the underwriters’ option. Gross IPO proceeds include shares sold by existing holders; Anthropic’s own share is about $91.6 billion. This article is not investment advice.'
    }
  },
  {
    id: 'frontier-models', date: '2026-11-18', status: 'report', category: 'tools', art: 'MODEL', minutes: 4,
    sources: [
      ['OpenAI「Introducing GPT-6.2 Astra and Sol」', 'OpenAI: Introducing GPT-6.2 Astra and Sol', 'https://openai.com/index/introducing-gpt-6-2-astra-sol/'],
      ['Anthropic「Introducing Claude Fable 5.2 and Claude Mythos 5.2」', 'Anthropic: Introducing Claude Fable 5.2 and Claude Mythos 5.2', 'https://www.anthropic.com/claude-fable-and-mythos-5-2'],
      ['Google「Introducing Gemini 4 Neon」', 'Google: Introducing Gemini 4 Neon', 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/'],
      ['Google「Introducing Gemini 4 Hydrogen」', 'Google: Introducing Gemini 4 Hydrogen', 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/'],
      ['OpenAI「GPT-6 and Intelligent UI for everyone」', 'OpenAI: GPT-6 and Intelligent UI for everyone', 'https://openai.com/index/gpt-6-for-everyone/'],
      ['Google「Gemini 4 Argon: our next era of frontier intelligence」', 'Google: Gemini 4 Argon: our next era of frontier intelligence', 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/']
    ],
    ja: {
      title: 'GPT-6.2、Claude Fable 5.2、Gemini 4…主力AIモデルが相次ぎ刷新',
      excerpt: '秋から11月にかけて、OpenAI・Anthropic・Googleが主力モデルを次々に更新しました。性能だけでなく「価格」が競争の軸になっています。',
      intro: 'OpenAIは9月に「GPT-6 Astra」の提供を始め、10月7日にはChatGPTでGPT-6の提供を始めました。11月には後継の「GPT-6.2 Astra」と日常業務向けの「GPT-6.2 Sol」を公開し、Astraの利用料金を前の世代より20%下げています。Anthropicは11月9日に「Claude Fable 5.2」を公開しました。Googleは9月30日の「Gemini 4 Argon」に続き、11月12日にエージェント向けの「Gemini 4 Hydrogen」、18日に「Gemini 4 Neon」を発表しています。100万トークンあたりの利用料金（入力／出力）は、GPT-6.2 AstraとClaude Fable 5.2が8ドル／40ドル、Gemini 4 Neonが3ドル／15ドル、Gemini 4 Hydrogenが1.50ドル／7.50ドルです。各社とも、サイバー分野などの高い能力は審査を受けた利用者に限って提供しています。',
      impactPersonal: '無料・低価格のプランで使えるAIの性能が上がり、文章作成や調べものの質が上がりやすくなります。一方、モデル名やプランの変更が頻繁なので、使っているサービスの条件を時々確かめると安心です。',
      impactBusiness: 'API料金の引き下げが続くと、社内業務にAIを組み込むコストが下がります。特定のモデルに頼りすぎず、定期的に性能と料金を比べ直す運用が有効です。',
      example: 'AIモデルは性能の差が縮まり、「同じ性能をいくらで使えるか」の競争に移りつつあります。利用企業にとってはコスト低下ですが、開発企業にとっては巨額投資の回収を難しくする要因にもなります。',
      caution: 'モデル名・料金・提供範囲は短期間で変わります。料金は発表時点のもので、導入時は各社の最新の公式情報を確認してください。トークンや料金の見方は、初心者向け記事「AI料金の読み方」で解説しています。'
    },
    en: {
      title: 'GPT-6.2, Claude Fable 5.2, Gemini 4: flagship AI models refreshed in quick succession',
      excerpt: 'From autumn into November, OpenAI, Anthropic and Google updated their flagship models one after another. Price, not just performance, is now central to the race.',
      intro: 'OpenAI began rolling out GPT-6 Astra in September and brought GPT-6 to ChatGPT on 7 October. In November it released GPT-6.2 Astra and GPT-6.2 Sol for everyday work, pricing Astra 20% below the previous generation. Anthropic released Claude Fable 5.2 on 9 November. Google followed Gemini 4 Argon (30 September) with Gemini 4 Hydrogen for agentic work on 12 November and Gemini 4 Neon on 18 November. Prices per million tokens (input/output) are $8/$40 for GPT-6.2 Astra and Claude Fable 5.2, $3/$15 for Gemini 4 Neon and $1.50/$7.50 for Gemini 4 Hydrogen. All three companies restrict their most advanced capabilities, such as cyber, to vetted users.',
      impactPersonal: 'AI available on free and low-cost plans keeps getting better at writing and research. Model names and plans change often, so check the terms of the services you use from time to time.',
      impactBusiness: 'Falling API prices lower the cost of building AI into your workflows. Avoid locking into one model and compare performance and price regularly.',
      example: 'As performance gaps narrow, competition is shifting to how cheaply the same capability can be delivered. That is good for users, but makes it harder for developers to recoup massive investments.',
      caution: 'Model names, prices and availability change quickly. Prices are as announced; check each provider’s latest official information before adopting. Our beginner guide “How to read AI pricing” explains tokens and prices.'
    }
  },
  {
    id: 'cohere-japan', date: '2026-11-13', status: 'report', category: 'economy', art: 'LOCAL', minutes: 3,
    sources: [
      ['PR TIMES「Cohere、日本におけるソブリンAI導入拡大に向け投資を強化」', 'PR TIMES (Japanese): Cohere strengthens investment in sovereign AI in Japan', 'https://prtimes.jp/main/html/rd/p/000000001.000194140.html'],
      ['日本経済新聞「カナダAIのCohere、日本法人設立を計画 CEOが投資意欲」', 'Nikkei (Japanese): Canada’s Cohere plans Japanese subsidiary', 'https://www.nikkei.com/article/DGXZQOUC125030S6A111C2000000/']
    ],
    ja: {
      title: 'カナダのCohereが日本法人設立へ、「ソブリンAI」に投資',
      excerpt: '企業向けAIを手がけるカナダのCohereが、データを国内で扱える「ソブリンAI」の需要を見込み、日本への投資を強化します。',
      intro: '企業向けAIを開発するカナダのCohereは11月13日、日本法人を設立し、日本の規制・言語・産業の要件に合わせたソブリンAIへの投資を広げると発表しました。富士通と組んで日本語向けの大規模言語モデル「Takane」の開発・導入を支援しているほか、AIモデルを特定の地域の中で運用できる推論基盤「Model Vault」の国内提供も進めるとしています。',
      impactPersonal: '行政や金融、医療など機密性の高い分野でも、データを国外に出さずにAIを使う選択肢が広がります。自分の情報がどこで処理されるかが、サービス選びの観点の一つになっていきます。',
      impactBusiness: '顧客情報や設計データを扱う企業にとって、データの処理場所はAI導入の大きな判断材料です。国内で処理できるサービスが増えれば、慎重だった業種でも導入しやすくなります。',
      example: '海外の巨大AI企業への依存を減らしたいという「ソブリン（主権）AI」の考え方は、日本政府の国産AI支援とも重なる流れです（記事：国産AIに44社連合）。',
      caution: '日本法人の規模や開始時期の詳細は、発表時点では明らかになっていません。'
    },
    en: {
      title: 'Canada’s Cohere to set up a Japanese subsidiary and invest in sovereign AI',
      excerpt: 'Enterprise AI developer Cohere is stepping up investment in Japan, betting on demand for “sovereign AI” that keeps data in the country.',
      intro: 'On 13 November Canadian enterprise AI company Cohere announced it will establish a Japanese subsidiary and expand investment in sovereign AI tailored to Japan’s regulations, language and industries. It already supports development of Takane, a Japanese-optimised large language model, with Fujitsu, and plans to offer Model Vault, its inference platform for running models within a specific region, in Japan.',
      impactPersonal: 'Even in sensitive fields such as government, finance and healthcare, there will be more ways to use AI without sending data abroad. Where your data is processed is becoming a factor in choosing services.',
      impactBusiness: 'For companies handling customer or design data, where data is processed is a key adoption criterion. More domestic options make AI easier to adopt in cautious industries.',
      example: 'The push for “sovereign AI”—reducing dependence on overseas AI giants—overlaps with Japan’s own support for domestic AI (see: 44-company alliance for domestic AI).',
      caution: 'Details such as the size and start date of the Japanese subsidiary had not been disclosed at the time of the announcement.'
    }
  },
  {
    id: 'labor-whitepaper', date: '2026-09-29', status: 'report', category: 'work', art: 'OECD', minutes: 4,
    sources: [
      ['日本経済新聞「日本企業の生成AI利用率、OECD平均の半分未満 労働経済白書」', 'Nikkei (Japanese): Japanese firms’ generative AI use under half the OECD average', 'https://www.nikkei.com/article/DGXZQOUA285EY0Y6A920C2000000/'],
      ['厚生労働省 労働経済白書 第Ⅱ部「AI等技術革新が進む中での労働市場の現状と課題」（PDF）', 'MHLW White Paper on the Labour Economy, Part II (PDF, Japanese)', 'https://www.mhlw.go.jp/wp/hakusyo/roudou/26/dl/26-1-2.pdf']
    ],
    ja: {
      title: '労働経済白書：日本企業の生成AI利用率は9.2%、OECD平均の半分未満',
      excerpt: '厚生労働省の白書は日本企業のAI活用の遅れを指摘しました。一方、AIの普及で労働需要全体が落ち込んでいる状況ではないとしています。',
      intro: '厚生労働省がまとめた2026年版の労働経済白書は、AIなどの技術革新が進む中での労働市場を取り上げました。日本経済新聞によると、日本企業の生成AIの利用率は9.2%で、OECD加盟国平均の20.2%の半分未満にとどまります。白書は、AIの導入が進む時期も有効求人倍率は1倍を超える水準を保っており、AIによって労働需要全体が大きく鈍っている状況ではないとしています。',
      impactPersonal: '「AIで仕事がなくなる」というより、仕事の中身が少しずつ入れ替わる段階です。AIを使える側に回ることが、働き方の選択肢を広げることにつながります。',
      impactBusiness: '国際的に見て導入が遅れている分、早く取り組む企業ほど生産性で差をつけやすい状況です。人手不足が続く中、採用と並ぶ選択肢としてAI活用を検討する価値があります。',
      example: '同じ「生成AIの利用率」でも、総務省の情報通信白書では業務で使う企業が86.4%と大きく異なります。調査対象や「利用」の定義（一部の社員が使う／企業として本格導入する）が違うためで、数字を見るときは定義の確認が欠かせません。',
      caution: '9.2%という数値は報道による要約です。定義や算出方法は白書本文で確認してください。'
    },
    en: {
      title: 'Labour white paper: Japanese firms’ generative AI use at 9.2%, under half the OECD average',
      excerpt: 'The health and labour ministry’s report highlights Japan’s slow AI uptake, while finding no broad drop in labour demand due to AI.',
      intro: 'The 2026 White Paper on the Labour Economy from Japan’s Ministry of Health, Labour and Welfare focused on the labour market amid AI-driven change. According to Nikkei, 9.2% of Japanese companies use generative AI, less than half the OECD average of 20.2%. The report notes that the job-openings-to-applicants ratio has stayed above 1 during the AI adoption period, and that AI is not significantly dampening overall labour demand.',
      impactPersonal: 'Rather than jobs disappearing, the content of work is gradually changing. Learning to use AI widens your options.',
      impactBusiness: 'Because Japan lags internationally, early adopters can gain a productivity edge. With labour shortages persisting, AI is worth considering alongside hiring.',
      example: 'The internal affairs ministry’s white paper finds 86.4% of firms use generative AI in some work—a very different number. Survey scope and the definition of “use” (some staff using it vs. company-wide adoption) differ, so always check definitions.',
      caution: 'The 9.2% figure is as summarised in press reports. Check the white paper for definitions and methods.'
    }
  },
  {
    id: 'dc-power', date: '2026-09', status: 'report', category: 'economy', art: 'POWER', minutes: 4,
    sources: [
      ['日本経済新聞「JERAが首都圏で『発電所一体型』データセンター 米デルと2兆円投資」', 'Nikkei (Japanese): JERA plans power-plant-integrated data centre with Dell', 'https://www.nikkei.com/article/DGXZQOUC302J80Q6A930C2000000/'],
      ['日本経済新聞「電力8社がデータセンター送電網増強 全国30カ所」', 'Nikkei (Japanese): Eight utilities to reinforce grids for data centres at 30 sites', 'https://www.nikkei.com/article/DGXZQOUC0889M0Y6A500C2000000/'],
      ['資源エネルギー庁「省エネ・非化石転換法に基づくデータセンター業に係る措置」（PDF）', 'Agency for Natural Resources and Energy: measures for the data-centre industry (PDF, Japanese)', 'https://www.enecho.meti.go.jp/category/saving_and_new/saving/enterprise/factory/support-tools/data/dc_gaiyo.pdf']
    ],
    ja: {
      title: 'AIデータセンター投資が電力を動かす：JERAは2兆円超の計画',
      excerpt: 'AIの計算需要を背景に、発電所と一体のデータセンターや送電網の増強計画が相次いでいます。電気代や地域経済にも関わるテーマです。',
      intro: 'JERAは千葉火力発電所の敷地にAIデータセンターを整備し、米デル・テクノロジーズなどと2兆3000億円を投じる計画を明らかにしました。電力容量は約40万キロワットで、2028年ごろの稼働を見込みます。大手電力8社も、データセンターの需要を見据えて全国30カ所で変電所を新設・増設する計画です。国は2026年4月から、省エネ法に基づいてデータセンター業にエネルギー使用の合理化を求める措置を始めています。',
      impactPersonal: 'データセンターの電力需要は、電気料金や電源構成の議論に関わってきます。地域によっては建設工事や関連の雇用が増える可能性もあります。',
      impactBusiness: '建設・電気工事・設備保守などの業種には受注機会が広がる一方、電力を多く使う企業には系統接続の待ち時間や電力コストが課題になります。立地や電力契約の計画は早めの情報収集が有効です。',
      example: 'AIへの投資は、半導体だけでなく電力・送電網・建設にも大きなお金を流しています。データセンターの接続に最大で10年ほどかかる事例もあり、電力インフラがAI成長のボトルネックになりつつあります。',
      caution: '投資額や稼働時期は計画段階の数値で、変わる可能性があります。'
    },
    en: {
      title: 'AI data centres reshape the power sector: JERA plans over ¥2 trillion',
      excerpt: 'Driven by AI computing demand, plans for data centres built alongside power plants and for grid upgrades are multiplying—affecting electricity bills and local economies.',
      intro: 'JERA announced plans to build an AI data centre on the site of its Chiba thermal power station, investing ¥2.3 trillion with Dell Technologies and others. With about 400 MW of capacity, it is expected to start operating around 2028. Eight major utilities also plan new or expanded substations at 30 sites nationwide in anticipation of data-centre demand. Since April 2026, the government has required the data-centre industry to rationalise energy use under the Energy Conservation Act.',
      impactPersonal: 'Data-centre power demand feeds into debates over electricity prices and the energy mix. Some regions may see more construction work and related jobs.',
      impactBusiness: 'Construction, electrical work and facility maintenance may see new orders, while power-hungry businesses face longer grid-connection waits and higher power costs. Gather information early when planning sites or power contracts.',
      example: 'AI investment is channelling large sums not only into chips but into power, grids and construction. With some data-centre grid connections taking up to around ten years, power infrastructure is becoming a bottleneck for AI growth.',
      caution: 'Investment amounts and timelines are planning figures and may change.'
    }
  },
  {
    id: 'eu-ai-act', date: '2026-08-02', status: 'report', category: 'policy', art: 'EU', minutes: 4,
    sources: [
      ['欧州委員会「Transparency obligations under Article 50 of the AI Act」', 'European Commission: Transparency obligations under Article 50 of the AI Act', 'https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act'],
      ['欧州委員会「Commission publishes guidelines on transparency obligations」', 'European Commission: Commission publishes guidelines on transparency obligations', 'https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems']
    ],
    ja: {
      title: 'EU AI法の透明性義務が適用開始、AI生成コンテンツに表示義務',
      excerpt: '8月2日から、EUではAIとの対話であることの明示や、AIが生成したコンテンツへの機械で読み取れる表示が求められるようになりました。',
      intro: 'EUのAI法第50条（透明性義務）が2026年8月2日に適用されました。AIを提供する事業者には、利用者がAIとやり取りしているとわかる設計や、AIが生成・加工したコンテンツに機械で読み取れる表示を付けることが求められます。AIを利用する事業者にも、ディープフェイクなどを開示する義務があります。欧州委員会は7月20日に解釈のガイドラインを公表しました。8月2日より前に市場に出たシステムの表示義務には、12月2日までの猶予があります。',
      impactPersonal: 'EU向けのサービスを中心に「AIが作成」といった表示が増えていきます。見分ける手がかりが増える一方、表示がないから人が作ったとは限らない点に注意が必要です。',
      impactBusiness: 'EUの利用者にAIチャットや生成コンテンツを提供する日本企業も対象になり得ます。EU向けの事業がある場合は、表示の仕組みや利用しているAIサービスの対応状況を確認しましょう。',
      example: 'EUのルールは、世界展開するAIサービスの標準仕様に影響しやすいのが特徴です。日本国内向けのサービスでも、同じ表示の仕組みが取り入れられる可能性があります。',
      caution: '適用範囲や例外の判断は個別の事情によります。対象になるかどうかは、欧州委員会のガイドラインや専門家に確認してください。'
    },
    en: {
      title: 'EU AI Act transparency rules take effect, requiring labels on AI-generated content',
      excerpt: 'From 2 August, the EU requires disclosure when people interact with AI, and machine-readable marking of AI-generated content.',
      intro: 'Article 50 of the EU AI Act, covering transparency obligations, has applied since 2 August 2026. AI providers must design systems so people know they are interacting with AI, and mark AI-generated or manipulated content in a machine-readable way. Deployers must also disclose deepfakes and similar content. The European Commission published interpretive guidelines on 20 July; systems placed on the market before 2 August have until 2 December to meet the marking obligation.',
      impactPersonal: 'Expect more “AI-generated” labels, especially on services aimed at the EU. Labels help, but the absence of one does not prove a human made something.',
      impactBusiness: 'Japanese companies offering AI chat or generated content to EU users may be covered. If you do business in the EU, check your labelling and how your AI providers comply.',
      example: 'EU rules tend to shape the default design of AI services sold worldwide, so similar labelling may appear in services aimed at Japan too.',
      caution: 'Scope and exceptions depend on individual circumstances. Consult the Commission’s guidelines or a specialist to confirm whether you are covered.'
    }
  },
  {
    id: 'noetra', date: '2026-07-16', status: 'report', category: 'economy', art: 'JP AI', minutes: 4,
    sources: [
      ['日本経済新聞「国産AIに44社連合、ホンダやソニーなど出資 国が1兆円支援」', 'Nikkei (Japanese): 44-company alliance for domestic AI with up to ¥1 trillion state support', 'https://www.nikkei.com/article/DGXZQOUC165XL0W6A710C2000000/'],
      ['経済産業省「AIロボット・フィジカルAIを見据えたマルチモーダル基盤モデル開発事業を開始します」', 'METI: Launch of the multimodal foundation model programme for AI robotics (Japanese)', 'https://www.meti.go.jp/press/2026/06/20260630005/20260630005.html'],
      ['日本経済新聞「ソフトバンクが国産AIの新会社設立、NECやホンダなど8社出資」', 'Nikkei (Japanese): SoftBank sets up domestic AI company with eight investors', 'https://www.nikkei.com/article/DGXZQOUC1207B0S6A410C2000000/']
    ],
    ja: {
      title: '国産AIに44社連合、国が最大1兆円規模で支援',
      excerpt: 'ソフトバンク、ホンダ、NEC、ソニーグループを中核に、国産の基盤モデルを開発する企業連合が正式に発足しました。',
      intro: '経済産業省は、ソフトバンク、ホンダ、NEC、ソニーグループの4社を中核とする「Noetra（旧・日本AI基盤モデル開発）」を、最大1兆円規模の支援事業の対象に選びました。日本経済新聞によると、企業連合は7月16日に正式に発足し、44社が連携します。4月にはソフトバンクが設立した新会社に、NECやホンダ、3メガバンクなどが出資していました。2026年度に基盤モデルを公開し、ロボットと組み合わせる「フィジカルAI」に向けて、画像や音声も扱えるよう進化させる計画です。',
      impactPersonal: '日本語や日本の商習慣に強いAIが育てば、行政サービスや身近なアプリの使い勝手に反映される可能性があります。',
      impactBusiness: '製造業などでは、現場のデータを国内で扱えるAIの選択肢が増えることが期待されます。国の支援事業や実証の公募情報は、業界団体などを通じて注目しておく価値があります。',
      example: '巨額の公的支援は、海外の巨大AI企業への依存を減らす「技術主権」の確保が狙いです。一方で、海外の最先端モデルとの性能差も指摘されており、ものづくりやロボットといった得意分野への絞り込みが鍵になります。',
      caution: '支援額は「最大」の規模で、成果や公開時期は計画段階です。'
    },
    en: {
      title: '44-company alliance for domestic AI, backed by up to ¥1 trillion in state support',
      excerpt: 'An alliance to develop Japanese foundation models, centred on SoftBank, Honda, NEC and Sony Group, has formally launched.',
      intro: 'Japan’s Ministry of Economy, Trade and Industry selected Noetra (formerly Japan AI Foundation Model Development), centred on SoftBank, Honda, NEC and Sony Group, for a support programme worth up to ¥1 trillion. According to Nikkei, the alliance formally launched on 16 July with 44 participating companies. In April, NEC, Honda and Japan’s three megabanks among others had invested in the new company set up by SoftBank. It plans to release a foundation model in fiscal 2026 and extend it to images and audio for “physical AI” combined with robotics.',
      impactPersonal: 'AI that is strong in Japanese language and business customs could improve public services and everyday apps.',
      impactBusiness: 'Manufacturers may gain more options for AI that processes shop-floor data in Japan. Watch for government programmes and pilot calls through industry associations.',
      example: 'The large public support aims to secure “technological sovereignty” by reducing dependence on overseas AI giants. Performance gaps with leading foreign models remain, so focusing on strengths such as manufacturing and robotics will be key.',
      caution: 'The support figure is a maximum; results and release dates are still at the planning stage.'
    }
  },
  {
    id: 'ai-plan', date: '2026-07-14', status: 'report', category: 'policy', art: 'PLAN', minutes: 3,
    sources: [
      ['時事ドットコム「サイバー攻撃対策『不断に強化』 ＡＩ計画、技術革新受け改定」', 'Jiji Press (Japanese): AI plan revised to keep strengthening cyber defences', 'https://www.jiji.com/jc/article?k=2026071500868&g=pol'],
      ['日本経済新聞「高性能AI、安全評価とサイバー防御に活用 政府が基本計画を改定」', 'Nikkei (Japanese): Government revises AI basic plan', 'https://www.nikkei.com/article/DGXZQOUA0730O0X00C26A7000000/'],
      ['内閣府「AI戦略」', 'Cabinet Office: AI Strategy (Japanese)', 'https://www8.cao.go.jp/cstp/ai/index.html']
    ],
    ja: {
      title: '政府がAI基本計画を改定、高性能AIのリスクにサイバー対処を強化',
      excerpt: '初の策定から約半年で改定しました。高性能AIを安全評価やサイバー防御に生かす方針を盛り込んでいます。',
      intro: '政府は7月14日、人工知能基本計画の改定を閣議決定しました。この計画は2025年12月に初めて策定された日本のAIに関する国家戦略で、「世界で最もAIを開発・活用しやすい国」を目標に掲げています。改定では、高性能AIがもたらす深刻なリスクに対応するため、サイバー対処能力を不断に強化すると明記し、高性能AIを安全評価やサイバー防御に活用する方針を示しました。計画は当面、毎年見直すとされています。',
      impactPersonal: '行政サービスでのAI活用や、AIを悪用したサイバー攻撃への対策が国の方針として進みます。詐欺メールなど身近な被害への備えも、引き続き大切です。',
      impactBusiness: '国の計画は、補助金や実証事業、ガイドラインの方向性を左右します。中小企業にとっても、AI活用とセキュリティ対策をセットで進めることが求められる流れです。',
      example: '高性能AIは、サイバー攻撃にも防御にも使える「両刃の剣」です。AI企業自身が高性能モデルの公開を制限する動きもあり（記事：Mythos）、各国の政策は活用と安全の両立に軸足を置いています。',
      caution: '具体的な施策や予算は、関係省庁の発表で確認してください。'
    },
    en: {
      title: 'Government revises Japan’s AI basic plan, strengthening cyber defences',
      excerpt: 'About six months after the first plan, the revision adds the use of advanced AI for safety evaluation and cyber defence.',
      intro: 'On 14 July the Cabinet approved a revision of the Artificial Intelligence Basic Plan. First adopted in December 2025 as Japan’s national AI strategy, the plan aims to make Japan “the easiest country in the world to develop and use AI.” The revision commits to continually strengthening cyber-response capabilities against serious risks posed by advanced AI, and to using advanced AI for safety evaluation and cyber defence. The plan is to be reviewed annually for the time being.',
      impactPersonal: 'Expect more AI in public services and stronger national measures against AI-enabled cyber attacks. Staying alert to scam emails remains important.',
      impactBusiness: 'The national plan steers subsidies, pilot programmes and guidelines. Small businesses, too, are expected to pair AI adoption with security measures.',
      example: 'Advanced AI is a double-edged sword for attack and defence. Some AI companies are even restricting their most capable models (see: Mythos), and policies worldwide aim to balance use and safety.',
      caution: 'Check announcements by the relevant ministries for specific measures and budgets.'
    }
  },
  {
    id: 'soumu-whitepaper', date: '2026-07', status: 'report', category: 'work', art: '86.4%', minutes: 4,
    sources: [
      ['総務省 令和8年版情報通信白書「生成AIの活用方針等」', 'MIC 2026 White Paper on Information and Communications: generative AI policies (Japanese)', 'https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r08/html/nd121110.html'],
      ['総務省 令和8年版情報通信白書「生成AIの業務利用状況」', 'MIC 2026 White Paper: business use of generative AI (Japanese)', 'https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r08/html/nd121130.html'],
      ['総務省 令和8年版情報通信白書（概要）PDF', 'MIC 2026 White Paper summary (PDF, Japanese)', 'https://www.soumu.go.jp/main_content/001082851.pdf']
    ],
    ja: {
      title: '情報通信白書：生成AIを業務で使う企業は86.4%、活用方針は7割に',
      excerpt: '総務省の2026年版白書で、日本企業の生成AI活用が1年で大きく進んだことがわかりました。ただし組織としての取り組みには課題が残ります。',
      intro: '総務省が7月に公表した令和8年版情報通信白書によると、何らかの業務で生成AIを使っている日本企業は86.4%でした。生成AIを「積極的に活用する」「領域を限定して利用する」方針の企業は68.9%で、前年度の49.7%から大きく上がりました（大企業74.0%、中小企業58.1%）。用途は議事録・メール作成の補助が約7割で最も多くなっています。一方、「組織的な取組はない」と答えた企業は27.0%で、米国・ドイツ・中国より高い水準です。',
      impactPersonal: '職場でAIを使うことは当たり前になりつつあります。議事録やメールの下書きなど、身近な作業から使い慣れておくと役立ちます。',
      impactBusiness: '中小企業は大企業より活用方針づくりが遅れています。全社的なガイドラインを整えている企業は41.1%で、情報漏えいへの不安が最大の懸念です。まず「使ってよい範囲」を決めることが第一歩になります。',
      example: '「個人が便利に使う」段階から「会社として成果を出す」段階への移行が課題です。利用率の高さに比べて組織的な取り組みや効果の測定が追いついていない点が、日本企業の生産性の伸びしろといえます。',
      caution: '調査は2025年度に、日本・米国・ドイツ・中国の企業を対象に行われたものです。'
    },
    en: {
      title: 'ICT white paper: 86.4% of firms use generative AI at work, and 70% now have a policy',
      excerpt: 'Japan’s 2026 white paper shows a big jump in corporate use of generative AI in a year, though organisation-wide efforts still lag.',
      intro: 'According to the 2026 White Paper on Information and Communications published in July by the Ministry of Internal Affairs and Communications, 86.4% of Japanese companies use generative AI in some part of their work. Companies with a policy to “actively use” or “use in limited areas” rose to 68.9% from 49.7% a year earlier (74.0% of large firms, 58.1% of SMEs). The most common use, at about 70%, is help with meeting minutes and emails. However, 27.0% said they have no organisational effort, higher than in the US, Germany or China.',
      impactPersonal: 'Using AI at work is becoming the norm. Getting comfortable with everyday tasks such as drafting minutes and emails pays off.',
      impactBusiness: 'SMEs lag large firms in setting AI policies. Only 41.1% have company-wide guidelines, and data leakage is the top concern. Deciding what AI may be used for is the first step.',
      example: 'The challenge is moving from individuals using AI for convenience to companies achieving measurable results. That gap is where Japanese firms have room to raise productivity.',
      caution: 'The survey was conducted in fiscal 2025 among companies in Japan, the US, Germany and China.'
    }
  },
  {
    id: 'chatgpt-ads', date: '2026-06', status: 'report', category: 'life', art: 'ADS', minutes: 3,
    sources: [
      ['日本経済新聞「ChatGPT内に広告表示、日本でOpenAIが展開 電通や博報堂が仲介」', 'Nikkei (Japanese): OpenAI rolls out ads in ChatGPT in Japan', 'https://www.nikkei.com/article/DGXZQOUC179OF0X10C26A6000000/'],
      ['日本経済新聞「OpenAI、ChatGPT広告収入が年1600億円ペース」', 'Nikkei (Japanese): OpenAI’s ChatGPT ad revenue at ¥160 billion annual pace', 'https://www.nikkei.com/article/DGXZQOGN31AFT0R30C26A8000000/'],
      ['OpenAI「ChatGPT での広告のテスト」', 'OpenAI: Testing ads in ChatGPT', 'https://openai.com/index/testing-ads-in-chatgpt/']
    ],
    ja: {
      title: 'ChatGPTの広告が日本でも開始、会話の内容に合わせて表示',
      excerpt: 'OpenAIは6月、ChatGPT内での広告配信を日本で始めました。大手広告会社が販売を担い、金融・通信などの大手が出稿しています。',
      intro: 'OpenAIは2月に米国でChatGPT内の広告を始め、6月に日本でも導入しました。電通グループ、博報堂DYホールディングス、サイバーエージェントなどが販売パートナーとなり、NTTドコモやPayPayカードなどが出稿していると報じられています。広告は会話の文脈に応じて表示され、OpenAIは広告が回答の内容に影響しないこと、会話の内容を広告主に開示しないことを説明しています。日本経済新聞は、OpenAIの広告収入が年1600億円のペースに達したと報じました。',
      impactPersonal: 'AIに家計や買い物の相談をすると、関連する商品の広告が表示されることがあります。広告と回答を区別して読み、気になる商品は自分でも比べる習慣が大切です。',
      impactBusiness: '検索広告に加えて、「AIとの会話の中」が新しい集客の場になりつつあります。自社の商品がAIの回答や広告の中でどう紹介されるかは、今後のマーケティングの論点になります。',
      example: '無料で使えるAIサービスの収益源に広告が加わり、AI企業の巨額投資を支える仕組みが「サブスク＋広告」に広がっています。',
      caution: '広告が表示される料金プランや出稿の条件は変わる可能性があります。最新情報はOpenAIの公式発表を確認してください。'
    },
    en: {
      title: 'Ads arrive in ChatGPT in Japan, shown according to conversation context',
      excerpt: 'In June OpenAI began showing ads inside ChatGPT in Japan. Major ad agencies sell the placements, and big finance and telecom brands are advertising.',
      intro: 'OpenAI started ads in ChatGPT in the US in February and introduced them in Japan in June. Dentsu Group, Hakuhodo DY Holdings and CyberAgent are among the sales partners, and advertisers reportedly include NTT Docomo and PayPay Card. Ads appear based on conversation context; OpenAI says ads do not influence answers and conversations are not shared with advertisers. Nikkei reported OpenAI’s ad revenue had reached an annual pace of ¥160 billion.',
      impactPersonal: 'Asking AI about budgeting or shopping may bring up related ads. Read ads and answers separately, and compare products yourself.',
      impactBusiness: 'Beyond search ads, conversations with AI are becoming a new place to reach customers. How your products appear in AI answers and ads is becoming a marketing question.',
      example: 'Ads add a revenue stream for free AI services, broadening the model that funds massive AI investment to “subscriptions plus advertising.”',
      caution: 'Which plans show ads and the conditions for advertisers may change. Check OpenAI’s official announcements for the latest.'
    }
  },
  {
    id: 'siri', date: '2026-06-08', status: 'report', category: 'life', art: 'SIRI', minutes: 3,
    sources: [
      ['CNBC「WWDC 2026: Apple makes its big Siri AI reveal」', 'CNBC: WWDC 2026: Apple makes its big Siri AI reveal', 'https://www.cnbc.com/2026/06/08/apple-wwdc-2026-live-updates.html'],
      ['TechCrunch「Apple’s long-awaited AI Siri overhaul is finally here」', 'TechCrunch: Apple’s long-awaited AI Siri overhaul is finally here', 'https://techcrunch.com/2026/06/08/apples-long-awaited-ai-siri-overhaul-is-finally-here/'],
      ['CNBC「Apple partnering with Google and Nvidia for most advanced AI model」', 'CNBC: Apple partnering with Google and Nvidia for most advanced AI model', 'https://www.cnbc.com/2026/06/08/apple-google-nvidia-ai-chips.html']
    ],
    ja: {
      title: 'Apple、Googleと組んで開発した新しいSiriを発表',
      excerpt: '開発者会議WWDCで、会話型に生まれ変わった「Siri AI」を披露しました。基盤モデルの開発ではGoogleと協力しています。',
      intro: 'Appleは6月8日、開発者会議WWDCで新しい「Siri AI」を発表しました。より自然に会話できるようになり、過去のやり取りを見返せる専用アプリや、画面の内容を理解する機能が加わります。基盤モデルの開発ではGoogleと協力し、最上位のクラウドモデルはGoogleのクラウド上のNVIDIA製GPUで動くとされています。一般向けには秋から提供され、欧州と中国では規制上の理由から当初は提供されません。',
      impactPersonal: 'スマートフォンの音声アシスタントが、予定の調整や調べものを会話で頼める身近なAIに近づきます。どの情報をAIに渡すか、プライバシー設定を確認しておくと安心です。',
      impactBusiness: '利用者がアプリを開かずにAIに頼む場面が増えると、お店やサービスの情報がAIにどう伝わるかが集客に影響します。営業時間や商品情報など、基本情報を正確に公開しておくことが大切です。',
      example: 'スマートフォン大手がAIの基盤を他社と組んで開発したことは、AI開発の規模とコストの大きさを示しています。端末メーカー、AI開発企業、クラウド事業者の協業が、AI経済の新しい形になりつつあります。',
      caution: '日本語での提供時期や対応機種は、Appleの公式情報で確認してください。'
    },
    en: {
      title: 'Apple unveils a new Siri developed with Google',
      excerpt: 'At WWDC, Apple showed off “Siri AI,” rebuilt for conversation. It worked with Google on the underlying foundation models.',
      intro: 'On 8 June at its WWDC developer conference, Apple announced the new Siri AI. It is more conversational, with a dedicated app for revisiting past chats and on-screen awareness. Apple collaborated with Google on its foundation models, and its most advanced cloud model is said to run on Nvidia GPUs in Google’s cloud. It rolls out to the public from the autumn, but not initially in Europe or China because of regulatory issues.',
      impactPersonal: 'Phone assistants are becoming everyday AI you can ask to plan or research by conversation. Review your privacy settings to decide what information AI can use.',
      impactBusiness: 'As people ask AI instead of opening apps, how your business information reaches AI will affect customer reach. Keep basics like opening hours and product details accurate online.',
      example: 'That a smartphone giant co-developed its AI foundations with another company shows the scale and cost of AI development. Partnerships among device makers, AI developers and cloud providers are a new shape of the AI economy.',
      caution: 'Check Apple’s official information for Japanese-language availability and supported devices.'
    }
  },
  {
    id: 'mythos', date: '2026-04-07', status: 'report', category: 'policy', art: 'CYBER', minutes: 4,
    sources: [
      ['CNBC「Anthropic limits Mythos AI rollout over fears hackers could use model for cyberattacks」', 'CNBC: Anthropic limits Mythos AI rollout over fears hackers could use model for cyberattacks', 'https://www.cnbc.com/2026/04/07/anthropic-claude-mythos-ai-hackers-cyberattacks.html'],
      ['Anthropic「Project Glasswing」', 'Anthropic: Project Glasswing', 'https://www.anthropic.com/glasswing'],
      ['TechCrunch（6月12日：米政府による提供停止命令）', 'TechCrunch (12 June): US government orders access shut off', 'https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/'],
      ['Bloomberg（6月30日：制限解除の通知）', 'Bloomberg (30 June): curbs to be lifted', 'https://www.bloomberg.com/news/articles/2026-06-30/what-the-saga-over-anthropic-s-mythos-tells-us-about-the-cyber-risks-from-ai']
    ],
    ja: {
      title: '「強すぎるAI」の公開を制限、アンソロピックのMythosが投げかけた問い',
      excerpt: 'ソフトウェアの弱点を見つける能力が高すぎるとして、アンソロピックは高性能モデルの一般公開を見送りました。6月には米政府が一時、提供停止を命じる事態にもなりました。',
      intro: 'アンソロピックは4月、新モデル「Claude Mythos Preview」について、ソフトウェアの欠陥を見つけて悪用する能力が高く、攻撃者の手に渡ると危険だとして一般公開を見送りました。防御目的の限られたパートナーだけに提供する取り組み「Project Glasswing」を進めています。6月12日には米政府が国家安全保障上の懸念から同社の2つのモデルへのアクセス停止を命じ、6月30日に同社が制限解除の通知を受けたと報じられました。',
      impactPersonal: 'AIの能力が高まるほど、詐欺や不正アクセスに悪用されるリスクも高まります。パスワードの使い回しをやめる、ソフトウェアを最新に保つといった基本の対策がより重要になっています。',
      impactBusiness: 'AIによって弱点の発見が速くなると、修正（更新プログラムの適用）の遅れがそのまま被害につながりやすくなります。自社のシステムやサイトの更新体制を見直すきっかけになります。',
      example: '「性能が高いほど売れる」という単純な競争ではなく、安全を理由に公開を絞る判断が経営課題になっています。政府による提供停止のように、規制リスクがAI企業の事業計画に直接響く例でもあります。',
      caution: '公開制限の是非には議論があり、小型のモデルでも似た成果を再現できたとする企業の指摘も報じられています。'
    },
    en: {
      title: 'Too powerful to release? The questions raised by Anthropic’s Mythos',
      excerpt: 'Anthropic withheld a general release of an advanced model, citing its ability to find software flaws. In June the US government briefly ordered access shut off.',
      intro: 'In April Anthropic declined to make its new Claude Mythos Preview model generally available, saying its skill at finding and exploiting software flaws could help attackers. It is offered only to a limited set of partners for defensive purposes through Project Glasswing. On 12 June the US government ordered access to two of the company’s models shut off over national-security concerns; on 30 June the company reportedly received notice that the curbs would be lifted.',
      impactPersonal: 'As AI grows more capable, so does the risk of misuse in scams and hacking. Basics such as not reusing passwords and keeping software updated matter more than ever.',
      impactBusiness: 'If AI speeds up the discovery of vulnerabilities, delays in patching translate more directly into damage. Use this as a prompt to review how you keep systems and websites updated.',
      example: 'Rather than a simple race where more capability sells more, limiting releases for safety has become a business decision. The government shutdown also shows how regulatory risk can hit AI companies’ plans directly.',
      caution: 'The restriction is debated; one company reportedly replicated much of the result with smaller models.'
    }
  },
  {
    id: 'jobs-survey', date: '2026-04', status: 'outlook', category: 'work', art: 'JOBS', minutes: 4,
    sources: [
      ['日本経済新聞「〈労働臨界〉人手不足『AIで代替』6割 経営トップ 日経調査」', 'Nikkei (Japanese): 60% of CEOs see AI filling labour shortages', 'https://www.nikkei.com/article/DGKKZO95458170U6A400C2EA5000/'],
      ['日本経済新聞「東京商工リサーチ、2026年4月『生成AI』に関するアンケート調査結果を発表」', 'Nikkei (Japanese): Tokyo Shoko Research April 2026 generative AI survey', 'https://www.nikkei.com/article/DGXZRSP706492_X20C26A4000000/'],
      ['経済産業省 説明資料（2026年1月、厚生労働省会議資料）PDF', 'METI briefing material (Jan 2026, PDF, Japanese)', 'https://www.mhlw.go.jp/content/11801000/001645034.pdf']
    ],
    ja: {
      title: 'AIは雇用を奪う？2026年の調査が示すのは「削減」より「入れ替え」',
      excerpt: '経営トップの約6割が人手不足を補う手段に生成AIを挙げる一方、すぐに大規模な人員削減につながる状況ではないとする調査が相次いでいます。',
      intro: '日本経済新聞の社長アンケート（143社回答）では、6割弱の経営トップが人手不足を補う手段に生成AIを挙げました。東京商工リサーチの4月の調査（6,327社回答）では、今後5年以内にホワイトカラーの早期退職を募集する可能性が「ある」と答えた企業は3.6%にとどまります。経済産業省の2040年の就業構造の推計では、事務職が約440万人余る一方、AI・ロボットを使いこなす人材などが不足する可能性が示されています。',
      impactPersonal: '事務作業の一部はAIに置き換わる一方、AIを使いこなす人材や現場の人材は不足が見込まれています。今の仕事にAIをどう組み込めるかを考えることが、学び直しの第一歩になります。',
      impactBusiness: '人を減らすためではなく、足りない人手を補い、配置転換で付加価値の高い仕事に人を回す使い方が主流です。社員の学び直しの支援は、採用難への対策にもなります。',
      example: 'AIの雇用への影響は、仕事の「量」より「種類」に表れます。職種間のミスマッチをどう解消するかが、日本の生産性と賃金を左右する論点です。',
      caution: '調査ごとに対象や時期が異なり、単純には比べられません。将来の推計は前提条件によって変わります。'
    },
    en: {
      title: 'Is AI taking jobs? 2026 surveys point to reshuffling, not cuts',
      excerpt: 'Nearly 60% of CEOs see generative AI as a way to cover labour shortages, while surveys suggest large-scale job cuts are not imminent.',
      intro: 'In a Nikkei survey of company presidents (143 responses), just under 60% cited generative AI as a way to cover labour shortages. In Tokyo Shoko Research’s April survey (6,327 responses), only 3.6% said they might seek early retirements among white-collar staff within five years. METI’s projection of Japan’s 2040 employment structure suggests a surplus of about 4.4 million clerical workers alongside shortages of people who can use AI and robots.',
      impactPersonal: 'Some clerical work will shift to AI, while people who can use AI and frontline workers are expected to be in short supply. Thinking about how AI fits into your current job is the first step in reskilling.',
      impactBusiness: 'The main approach is not cutting staff but covering shortages and redeploying people to higher-value work. Supporting staff reskilling also helps with hiring difficulties.',
      example: 'AI’s impact on employment shows up in the type of work more than the amount. Resolving mismatches between occupations is central to Japan’s productivity and wages.',
      caution: 'Surveys differ in scope and timing and cannot be compared directly. Projections depend on their assumptions.'
    }
  },
  {
    id: 'subsidy', date: '2026-03', status: 'report', category: 'work', art: 'GRANT', minutes: 3,
    sources: [
      ['中小企業庁「デジタル化・AI導入補助金2026の公募要領を公開しました」', 'SME Agency: Application guidelines for the 2026 Digitalisation & AI Adoption Subsidy (Japanese)', 'https://www.chusho.meti.go.jp/koukai/hojyokin/kobo/2026/260310001.html'],
      ['デジタル化・AI導入補助金2026 公式サイト', 'Digitalisation & AI Adoption Subsidy 2026 official site (Japanese)', 'https://it-shien.smrj.go.jp/'],
      ['北海道経済産業局「デジタル化・AI導入補助金2026の公募を開始しました」', 'Hokkaido Bureau of Economy, Trade and Industry: call for applications (Japanese)', 'https://www.hkd.meti.go.jp/hokcm/digital_ai2026/index.htm']
    ],
    ja: {
      title: '「デジタル化・AI導入補助金2026」が始動、旧IT導入補助金',
      excerpt: 'AIを含むITツールの導入費用を国が一部補助します。通常枠の第7次締切は12月1日、第8次は2027年1月7日です。',
      intro: '中小企業・小規模事業者のITツール導入を支援してきた「IT導入補助金」が、「デジタル化・AI導入補助金」に名称を変えました。労働生産性の向上を目的に、AIを含むソフトウェアやサービスの導入費用の一部を補助します。通常枠の補助額は5万円〜450万円、補助率は原則2分の1以内（条件を満たすと3分の2以内）です。申請には、事務局に登録された「IT導入支援事業者」との連携と、GビズIDプライムが必要です。',
      impactPersonal: '個人事業主や小規模事業者も対象になり得ます。会計・予約・顧客管理など、日々の事務を軽くするツールの導入費用を抑えられる可能性があります。',
      impactBusiness: '補助金を使えば、AIツール導入の初期負担を下げられます。ただし締切が近く、支援事業者選びや申請準備に時間がかかるため、早めの相談が必要です。',
      example: '国が補助金の名前に「AI」を加えたことは、中小企業の生産性向上の柱としてAI活用を位置づけた表れです。人手不足が深刻な中小企業ほど、効果が出やすい分野でもあります。',
      caution: '公募要領や締切は変わることがあります。申請前に必ず事務局の公式サイトで最新情報を確認してください。本記事は制度の概要を紹介するものです。'
    },
    en: {
      title: 'Japan’s 2026 Digitalisation & AI Adoption Subsidy (formerly the IT Introduction Subsidy)',
      excerpt: 'The government covers part of the cost of IT tools, including AI. The 7th deadline for the standard track is 1 December; the 8th is 7 January 2027.',
      intro: 'Japan’s IT Introduction Subsidy for small businesses has been renamed the Digitalisation & AI Adoption Subsidy. To raise labour productivity, it covers part of the cost of software and services, including AI. Under the standard track, grants range from ¥50,000 to ¥4.5 million, generally covering up to half of costs (up to two-thirds if conditions are met). Applicants must partner with a registered IT support vendor and hold a gBizID Prime account.',
      impactPersonal: 'Sole proprietors and very small businesses may be eligible, reducing the cost of tools for accounting, bookings and customer management.',
      impactBusiness: 'The subsidy can lower the upfront cost of AI tools. Deadlines are close and choosing a vendor and preparing takes time, so start early.',
      example: 'Adding “AI” to the subsidy’s name signals that the government sees AI as a pillar of SME productivity—especially valuable for firms facing severe labour shortages.',
      caution: 'Guidelines and deadlines may change. Always check the official secretariat website before applying. This article is an overview only.'
    }
  },
  {
    id: 'gennai-agents', date: '2026-11-06', status: 'report', category: 'policy', art: 'GENNAI', minutes: 4,
    sources: [
      ['デジタル庁「ガバメントAI 源内においてAIエージェント利用環境の提供を開始するとともに、『源内基準』を公表します」', 'Digital Agency (Japanese): AI agent environment launched on Government AI Gennai; Gennai Standard published', 'https://www.digital.go.jp/policies/genai/agent-safety-standard'],
      ['デジタル庁「ガバメントAI 源内で『国会答弁作成支援AIアプリ』のプロトタイプ版を提供開始します」', 'Digital Agency (Japanese): Prototype app to support drafting Diet answers launched on Gennai', 'https://www.digital.go.jp/policies/genai/b736d2d7-b03b-43f0-9932-eba7da7f8142']
    ],
    ja: {
      title: '政府職員約18万人にAIエージェント環境、「源内」が次の段階へ',
      excerpt: 'デジタル庁は、政府の生成AI基盤「ガバメントAI 源内」で、約18万人の政府職員を対象にAIエージェントの利用環境を提供し始めました。安全に使うためのルール「源内基準」も公表しています。',
      intro: 'デジタル庁は11月6日、「ガバメントAI 源内」で約18万人の政府職員を対象に、2種類のAIエージェント利用環境の提供を始めると発表しました。手軽に作って動かせる「エージェントチャット」は同日から各府省庁へ順次導入し、高度なエージェントを構築できる「源内工房」は2026年12月ごろまでの導入を目指します。あわせて、ガバナンス・セキュリティ・セーフティに関する「源内基準」を、AIセーフティ・インスティテュート（AISI）の協力を得て策定・公表しました。11月16日には、過去の答弁や根拠資料を探して答弁案づくりを支える「国会答弁作成支援AIアプリ」のプロトタイプ版も提供が始まり、臨時国会での試行を経て、来年1月からの通常国会で本格提供する計画です。',
      impactPersonal: '行政の文書作成や調べものにAIが使われると、手続きや問い合わせ対応が速くなる可能性があります。一方、デジタル庁はAIが職員の確認や最終判断を代わるものではないとしており、「AIが答えたから正しい」とはならない点は民間の使い方と同じです。',
      impactBusiness: '行政がAIエージェントの運用ルールを公開したことは、企業が社内ルールをつくるときの参考になります。利用者・管理者・開発者ごとに責任を分ける考え方は、中小企業でも取り入れやすい枠組みです。',
      example: '18万人という規模は国内でも最大級の導入例で、行政の業務時間の使い方そのものを変える可能性があります。行政がまとまった規模でAIを使い始めると、対応するシステム開発や研修、セキュリティなどの関連需要も生まれやすくなります。',
      caution: '18万人は提供対象の規模で、実際の利用者数ではありません。国会答弁支援AIはプロトタイプ（試行）段階です。「源内基準」の詳細は、デジタル庁が公開している資料でご確認ください。'
    },
    en: {
      title: 'AI agents for some 180,000 civil servants as “Gennai” enters its next stage',
      excerpt: 'Japan’s Digital Agency has begun offering AI agent tools on its Government AI platform “Gennai” to about 180,000 government employees, and published a “Gennai Standard” for safe use.',
      intro: 'On 6 November the Digital Agency announced two AI agent environments on Government AI Gennai for about 180,000 government employees. “Agent Chat”, for quickly creating and running agents, is being introduced to ministries in stages from that day; “Gennai Kobo”, for building more advanced agents, is targeted for around December 2026. The agency also published the Gennai Standard on governance, security and safety, drawn up with help from Japan’s AI Safety Institute (AISI). On 16 November it launched a prototype app that helps staff draft answers for the Diet by finding past answers and supporting materials; after a trial in the current extraordinary session, full rollout is planned for the ordinary session from January.',
      impactPersonal: 'AI in government drafting and research could speed up procedures and enquiries. But the agency stresses that AI does not replace staff checks or final decisions—just as “the AI said so” is no proof of accuracy anywhere else.',
      impactBusiness: 'Published government rules for AI agents are a useful reference for writing your own. Splitting responsibilities between users, administrators and developers is a framework small firms can adopt too.',
      example: 'At 180,000 people this is one of the largest deployments in Japan, and it could change how public-sector working time is spent. Large-scale government use also tends to create related demand for system development, training and security.',
      caution: '180,000 is the number of staff eligible, not the number of active users. The Diet-answer app is a prototype under trial. See the Digital Agency’s published materials for details of the Gennai Standard.'
    }
  },
  {
    id: 'chatgpt-wallet', date: '2026-11-13', status: 'report', category: 'life', art: 'WALLET', minutes: 4,
    sources: [
      ['OpenAI「Introducing ChatGPT Wallet」', 'OpenAI: Introducing ChatGPT Wallet', 'https://openai.com/index/introducing-chatgpt-wallet/']
    ],
    ja: {
      title: 'ChatGPTに「財布」、AIが買い物の支払いまで担う時代へ',
      excerpt: 'OpenAIは、AIエージェントが利用者に代わって支払いできる「ChatGPT Wallet」を発表しました。まずは米国のProプラン利用者が対象で、日本ではまだ使えません。',
      intro: 'OpenAIは11月13日、「ChatGPT Wallet」の提供開始を発表しました。カードを一度登録しておけば、AIエージェントが選んだ商品の購入を、カード情報を入力し直さずに承認できます。購入前には商品・合計金額・使うカードが表示され、利用者が顔認証や指紋認証で承認する仕組みで、承認ごとに記録が残ります。支払いには本物のカード番号の代わりにトークン（代替番号）が使われ、店側は実際のカード情報を受け取りません。対象は米国の18歳以上のChatGPT Pro利用者で、米国発行の対象カードに限られます。OpenAIは将来、上限額やカテゴリを決めて購入を任せる形も想定しているとしています。',
      impactPersonal: '日本ではまだ使えませんが、「探す・比べる・買う」をAIに任せる流れは広がりそうです。便利な一方、いつ・いくら・何に使ったかを自分で確かめる習慣がこれまで以上に大切になります。',
      impactBusiness: '店舗やECにとっては、人ではなくAIが商品を比べて選ぶ場面が増えます。価格・在庫・返品条件などの情報を、AIが読み取りやすい形で正確に公開しておくことが販売機会につながります。',
      example: '買い物の入口が検索や広告から「AIとの会話」に移ると、どの店が選ばれるかの仕組みも変わります。カード会社や決済会社、不正対策の企業が多数参加しており、AIを介した商取引が新しい市場になりつつあることがわかります。',
      caution: '2026年11月時点で対象は米国のみで、日本での提供時期は発表されていません。料金はProプランの利用料以外に記載がありません。'
    },
    en: {
      title: 'A wallet in ChatGPT: AI moves into paying for your shopping',
      excerpt: 'OpenAI has announced ChatGPT Wallet, which lets AI agents pay on a user’s behalf. It starts with Pro subscribers in the US and is not yet available in Japan.',
      intro: 'On 13 November OpenAI announced ChatGPT Wallet. After adding a card once, users can approve purchases an AI agent has selected without re-entering card details. Before each purchase the items, total and card are shown, and the user approves with a check such as Face ID or a fingerprint; each approval is recorded. Payments use a token (a substitute card number), so merchants never receive the real card details. It is available to ChatGPT Pro subscribers aged 18+ in the US with eligible US-issued cards. OpenAI says it expects users eventually to delegate purchases within limits such as spending caps or categories.',
      impactPersonal: 'It is not available in Japan yet, but handing “search, compare, buy” to AI looks set to spread. That makes checking when, how much and on what you spent more important than ever.',
      impactBusiness: 'For shops and e-commerce, more products will be compared and chosen by AI rather than people. Publishing accurate prices, stock and return terms in a machine-readable form will matter for sales.',
      example: 'If the starting point for shopping shifts from search and ads to a conversation with AI, the way shops get chosen changes too. With card networks, payment providers and fraud-prevention firms involved, AI-mediated commerce is becoming a market in its own right.',
      caution: 'As of November 2026 it is US-only, and no date for Japan has been announced. No fees are stated beyond the Pro subscription.'
    }
  },
  {
    id: 'agentic-star', date: '2026-10-26', status: 'report', category: 'work', art: 'STAR', minutes: 3,
    sources: [
      ['ソフトバンク「AIと人が連携する業務プロジェクト機能を搭載した『AGENTIC STAR 3.0』を提供開始」', 'SoftBank (Japanese): AGENTIC STAR 3.0 launched with a project feature linking AI and people', 'https://www.softbank.jp/business/news/2026/1026-01'],
      ['ソフトバンク「『AGENTIC STAR』が『Workato』とのMCP連携に対応」', 'SoftBank (Japanese): AGENTIC STAR supports MCP integration with Workato', 'https://www.softbank.jp/business/news/2026/1111-01']
    ],
    ja: {
      title: '人とAIがひとつの業務を分担、ソフトバンク「AGENTIC STAR 3.0」',
      excerpt: 'ソフトバンクは、企業向けAIエージェント基盤の新版を提供開始しました。AIの処理と人の確認・承認を組み合わせて、複数の手順からなる業務を流せるようにしたのが特徴です。',
      intro: 'ソフトバンクは10月26日、企業向けAIエージェント基盤「AGENTIC STAR」の新版「3.0」の提供を始めました。新しい「プロジェクト機能」では、業務の流れをワークフローとして定義し、各ステップでAIエージェントの処理と人による確認・承認を組み合わせられます。AIの実行履歴を記録・保存し、完了件数や失敗件数、処理時間を見える化して、投資対効果を測りやすくしたとしています。11月11日には、業務自動化サービス「Workato」とMCP（AIと外部システムをつなぐ共通規格）で連携し、クラウドサービスや社内システムにもつなげられるようになりました。',
      impactPersonal: '会社でAIエージェントが使われるようになると、仕事は「AIが下ごしらえし、人が確認して決める」形に変わっていきます。AIの結果をチェックし、判断できる力の価値が高まります。',
      impactBusiness: 'すべてをAIに任せるのではなく、承認が必要な場面に人を入れる設計は、ミスや責任の所在を心配する企業でも導入しやすい考え方です。処理件数や時間が見えると、効果を社内に説明しやすくなります。',
      example: 'AIエージェントの導入は「試してみる」段階から「効果を測って広げる」段階に移りつつあります。実行履歴や処理時間を記録する機能は、AI投資の費用対効果を経営が判断するための材料になります。',
      caution: '3.0の料金はチャット中心の従来版とは別体系とされていますが、具体的な金額は公表されていません。'
    },
    en: {
      title: 'People and AI share one workflow: SoftBank’s AGENTIC STAR 3.0',
      excerpt: 'SoftBank has released a new version of its enterprise AI agent platform, built to run multi-step work that combines AI processing with human review and approval.',
      intro: 'On 26 October SoftBank launched AGENTIC STAR 3.0, the latest version of its enterprise AI agent platform. A new project feature lets companies define a business process as a workflow in which each step combines an AI agent’s work with human review or approval. Agent execution history is recorded, and completed tasks, failures and processing times are visualised to make return on investment easier to measure. On 11 November it added MCP integration—a common standard for connecting AI to other systems—with the automation platform Workato, opening links to cloud services and in-house systems.',
      impactPersonal: 'As AI agents arrive at work, jobs shift toward “AI prepares, people check and decide.” The ability to review AI output and make judgements becomes more valuable.',
      impactBusiness: 'Putting people in at the approval points, rather than handing everything to AI, makes adoption easier for firms worried about errors and accountability. Visible volumes and times make the benefits easier to explain internally.',
      example: 'AI agents are moving from “let’s try it” to “measure and scale.” Logging executions and processing times gives management the evidence to judge the return on AI spending.',
      caution: 'Version 3.0 is priced separately from the chat-based edition, but no figures have been published.'
    }
  },
  {
    id: 'copilot-autopilot', date: '2026-09-25', status: 'report', category: 'tools', art: 'PILOT', minutes: 4,
    sources: [
      ['Microsoft「Introducing the new Copilot with Home, Code and Autopilot」', 'Microsoft: Introducing the new Copilot with Home, Code and Autopilot', 'https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/'],
      ['Microsoft「Introducing the Microsoft Copilot harness」', 'Microsoft: Introducing the Microsoft Copilot harness', 'https://blogs.microsoft.com/blog/2026/10/28/introducing-the-microsoft-copilot-harness-unlocking-the-potential-of-truly-multi-model-agentic-work/'],
      ['Microsoft「Ignite 2026: Building the frontier ecosystem」', 'Microsoft: Ignite 2026: Building the frontier ecosystem', 'https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/']
    ],
    ja: {
      title: '指示を待たずに働き続けるAI、Microsoftが「Autopilot」を発表',
      excerpt: 'Microsoftは、利用者がいない間も仕事を進める常駐型エージェント「Autopilot」を含む新しいCopilotを発表しました。AIは「呼び出す道具」から「任せる同僚」に近づいています。',
      intro: 'Microsoftは9月25日、新しいCopilotアプリを発表しました。チャットと共同作業をまとめた「Home」、話し言葉で小さなアプリや自動化をつくれる「Code」、そして常駐型エージェント「Autopilot」が柱です。Autopilotは名前・役割・目標を与えると、チャンネルの確認や返信の催促、定期業務を続け、数日後に作業を再開することもできるとしています。クラウド上で動き、顧客の環境の中で権限や監査の管理を受ける仕組みです。Autopilotは9月末から限定プレビューで、HomeとCodeも段階的な提供です。10月28日には複数のAIモデルを組み合わせてエージェントをつくる「Copilot harness」を開発者向けに公開し、11月17日の年次イベント「Ignite」でもエージェント戦略を前面に出しました。',
      impactPersonal: '「毎週の集計」「返事が来ない相手への催促」など、細かな定型作業をAIに任せられる場面が増えそうです。ただし、AIが自分の名前で何をしたかを後から確認できることが前提になります。',
      impactBusiness: '常駐型エージェントは利用量に応じた課金で提供されるため、使い方次第で費用が膨らむ可能性があります。Microsoftは、管理者が支出の上限や承認の流れを設定できる機能も用意するとしています。',
      example: 'AIの料金が「1人あたり月額」から「使った分だけ」に移ると、AIは作業量に応じて増減する、人件費に近いコストになります。どの仕事をAIに任せると割に合うかを見極めることが、企業の新しい経営課題になります。',
      caution: 'Autopilotは限定プレビュー段階で、一般提供の時期や価格は公表されていません。日本での提供条件も記載がありません。'
    },
    en: {
      title: 'AI that keeps working without waiting for instructions: Microsoft unveils Autopilot',
      excerpt: 'Microsoft has announced a new Copilot, including Autopilot, an always-on agent that keeps working while you are away. AI is moving from a tool you call on to a colleague you delegate to.',
      intro: 'On 25 September Microsoft announced a new Copilot app built around Home (combining chat and co-working), Code (building small apps and automations in plain language) and Autopilot, a persistent agent. Given a name, a role and a goal, Autopilot can watch channels, chase replies and run recurring work, picking projects back up days later. It runs in the cloud within the customer’s tenant, under its permissions and audit controls. Autopilot entered private preview at the end of September, and Home and Code are rolling out in stages. On 28 October Microsoft opened the Copilot harness, for building agents that combine multiple AI models, to developers, and agents were front and centre at its Ignite event on 17 November.',
      impactPersonal: 'Small recurring chores—weekly tallies, chasing replies—may increasingly be handed to AI. That only works if you can check afterwards what the AI did in your name.',
      impactBusiness: 'Always-on agents are billed by usage, so costs can climb depending on how they are used. Microsoft says admins will be able to set spending policies and approval workflows.',
      example: 'As AI pricing shifts from “per user per month” to “pay for what you use”, AI starts to look like a labour cost that scales with the work done. Deciding which tasks are worth giving to AI becomes a new management question.',
      caution: 'Autopilot is in private preview; general availability dates and prices have not been announced, and terms for Japan are not stated.'
    }
  },
  {
    id: 'agent-skills', date: '2026-10-22', status: 'report', category: 'tools', art: 'SKILLS', minutes: 3,
    sources: [
      ['Anthropic「Donating Agent Skills to the Agentic AI Foundation」', 'Anthropic: Donating Agent Skills to the Agentic AI Foundation', 'https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation']
    ],
    ja: {
      title: 'AIエージェントの「技能」を共通規格に、Agent Skillsが中立団体へ',
      excerpt: 'Anthropicは、AIエージェントに専門的な手順を教える仕組み「Agent Skills」を、業界団体のAgentic AI Foundationに寄贈すると発表しました。特定の企業に縛られない共通規格として育てる狙いです。',
      intro: 'Anthropicは10月22日、オープン規格「Agent Skills」をAgentic AI Foundation（AAIF）に寄贈すると発表しました。スキルは、作業の手順や知識を書いたファイル（SKILL.md）と必要な資料をまとめたフォルダで、AIエージェントに特定の仕事のやり方を教えるものです。同社によると、ChatGPTやCursor、GitHub Copilotなど70以上のエージェント製品が対応し、公開されたスキルは100万件、インストールは約2億8000万回に達しています。AAIFはLinux Foundationのもとで運営され、AnthropicがBlockやOpenAIと共同で設立した団体で、AIと外部ツールをつなぐ規格「MCP」もすでに寄贈されています。今後はGoogleやOpenAIなどの技術者も個人として規格の維持に加わります。',
      impactPersonal: '一度つくった「仕事の手順書」を、別のAIサービスでも使い回しやすくなります。特定のAIから乗り換えにくくなる心配が少し減ります。',
      impactBusiness: '社内の業務手順をスキルとして整えておけば、AIサービスを替えても資産として残せます。ベンダーを選ぶ際は、こうした共通規格に対応しているかを確認するとよいでしょう。',
      example: '共通規格が整うと、スキルをつくる・売る・保守するといった周辺ビジネスが育ちやすくなります。インターネットが共通規格で広がったように、AIエージェントも「つなぎ方」の標準化が市場拡大の土台になります。',
      caution: '規格自体は2025年12月にすでに公開されており、今回は運営を中立団体に移す発表です。版管理や安全指針などのロードマップは提案段階です。'
    },
    en: {
      title: 'Making AI agents’ “skills” a shared standard: Agent Skills goes to a neutral foundation',
      excerpt: 'Anthropic is donating Agent Skills, a way to teach AI agents specialised procedures, to the Agentic AI Foundation, to grow it as a vendor-neutral standard.',
      intro: 'On 22 October Anthropic announced it is donating the open Agent Skills standard to the Agentic AI Foundation (AAIF). A skill is a folder containing a SKILL.md file describing a task or domain, plus any scripts or references, that teaches an agent how to do a particular job. Anthropic says more than 70 agent products, including ChatGPT, Cursor and GitHub Copilot, support it, with 1 million skills published and nearly 280 million installs. AAIF operates under the Linux Foundation and was co-founded by Anthropic, Block and OpenAI; the Model Context Protocol (MCP) has already been donated to it. Engineers from Google, OpenAI and others will help maintain the standard as individuals.',
      impactPersonal: 'Instruction sets you write once become easier to reuse across AI services, reducing the worry of being locked into one assistant.',
      impactBusiness: 'Turning your procedures into skills keeps them as assets even if you switch AI vendors. When choosing a vendor, check whether it supports shared standards like this.',
      example: 'Shared standards help side businesses grow—building, selling and maintaining skills. Just as common protocols let the internet spread, standardising how agents connect lays the groundwork for a larger market.',
      caution: 'The standard itself was published in December 2025; this announcement moves its governance to a neutral body. Roadmap items such as versioning and security guidance are proposals.'
    }
  },
  {
    id: 'nttdata-cobol', date: '2026-11-17', status: 'report', category: 'economy', art: 'COBOL', minutes: 3,
    sources: [
      ['NTTデータ「生成AIでCOBOLの基幹システムを保守性の高いJavaへ再設計する『クリーンモダナイゼーション』を提供開始」', 'NTT DATA (Japanese): Clean Modernization launched to redesign COBOL core systems in Java with generative AI', 'https://www.nttdata.com/global/ja/news/release/2026/111700/']
    ],
    ja: {
      title: '古い基幹システムをAIで作り直す、NTTデータが「COBOLからJava」へ',
      excerpt: 'NTTデータは、生成AIで古いプログラムから業務の仕様を読み解き、保守しやすいJavaのシステムへ作り直すサービスを始めました。開発期間は約4割短縮できると試算しています。',
      intro: 'NTTデータは11月17日、「クリーンモダナイゼーション」の提供を始めました。生成AIを使ってCOBOLなどで書かれた既存のプログラムや設計書から業務の仕様を復元し、機能ごとに依存関係を減らしたJavaのシステムへ作り直すサービスです。同社の試算では、刷新にかかる開発期間を約4割短縮し、刷新後の保守の開発工数を約5割減らせるとしています。2027〜2029年度の3年間で累計500億円の売上を目指します。',
      impactPersonal: '銀行や保険、行政などの古いシステムが刷新されると、手続きのオンライン化や新しいサービスの登場が早まる可能性があります。',
      impactBusiness: '「中身がわかる人がいない」古いシステムは、多くの企業の悩みです。AIで仕様を読み解ける時代になり、刷新の費用や期間の見積もりが変わる可能性があります。自社システムの更新計画を見直すきっかけになります。',
      example: '日本では古い基幹システムの維持費がIT予算を圧迫し、新しい投資を妨げていると指摘されてきました。AIで刷新のコストが下がれば、その分を新しいサービス開発に回せるようになり、企業の生産性に直結します。',
      caution: '期間短縮・工数削減の数字は、一定の条件を置いたNTTデータの試算で、すべての案件での実現を保証するものではありません。'
    },
    en: {
      title: 'Rebuilding legacy systems with AI: NTT DATA moves COBOL to Java',
      excerpt: 'NTT DATA has launched a service that uses generative AI to recover business specifications from old programs and rebuild them as maintainable Java systems, estimating about 40% shorter development.',
      intro: 'On 17 November NTT DATA launched Clean Modernization, which uses generative AI to reconstruct business specifications from existing programs (such as COBOL) and design documents, then rebuilds them as Java systems with fewer dependencies between functions. The company estimates that development time for the migration can be cut by about 40%, and maintenance effort afterwards by about 50%. It is aiming for cumulative sales of ¥50 billion over fiscal 2027–2029.',
      impactPersonal: 'Modernising old systems at banks, insurers and government could speed up online procedures and new services.',
      impactBusiness: 'Legacy systems no one fully understands are a common headache. With AI able to read their logic, estimates for the cost and time of replacement may change—a reason to revisit your own system roadmap.',
      example: 'In Japan, the cost of maintaining old core systems has long been said to squeeze IT budgets and crowd out new investment. If AI lowers migration costs, money can move to new services, with a direct effect on productivity.',
      caution: 'The time and effort savings are NTT DATA’s estimates under specific conditions and are not guaranteed for every project.'
    }
  },
  {
    id: 'hokuyo-bank', date: '2026-11-10', status: 'report', category: 'work', art: '2,500', minutes: 3,
    sources: [
      ['ソフトバンク「北洋銀行の生成AI活用を『生成AIパッケージ』で支援、合計約2,500IDを全行へ導入」', 'SoftBank (Japanese): Supporting Hokuyo Bank’s use of generative AI with about 2,500 IDs bank-wide', 'https://www.softbank.jp/business/news/2026/1110-01']
    ],
    ja: {
      title: '地方銀行の全店に生成AI、北洋銀行の利用回数は約7倍に',
      excerpt: '北洋銀行は、ソフトバンクの生成AIパッケージを全店に導入し、約2,500IDで活用しています。営業の現場では、面談記録の入力時間が約4割減ったという声も出ています。',
      intro: 'ソフトバンクは11月10日、北洋銀行の生成AI活用を支援している事例を公表しました。北洋銀行は、外部と切り離した環境で使える同社の「生成AIパッケージ」を全店に導入し、合計約2,500IDで利用しています。2025年9月から本格的に使い始め、導入前と比べて利用者数は約3.0倍、利用回数は約7.1倍に増えました。現場での利用率は7割に達し、営業担当者からは顧客管理システムへの面談記録の入力時間が約4割減ったという声が出ています。',
      impactPersonal: '金融機関の事務作業が効率化されると、窓口や相談に充てる時間が増えることが期待されます。',
      impactBusiness: '規制が厳しく慎重な銀行でも、閉じた環境と社内ルールを整えれば全社規模で使えることを示す事例です。最初から完璧を目指すより、利用者を増やしながら使いどころを広げる進め方が参考になります。',
      example: '生成AIの効果は「導入したか」ではなく「現場でどれだけ使われているか」で決まります。利用率や作業時間の変化を測っておくと、投資の効果を数字で説明できます。',
      caution: '数値はこの事例でのもので、同じ効果を保証するものではないと公表元が注記しています。'
    },
    en: {
      title: 'Generative AI across a regional bank: Hokuyo Bank’s usage up about sevenfold',
      excerpt: 'Hokuyo Bank has rolled out SoftBank’s generative AI package to all branches with about 2,500 IDs. Sales staff report that entering meeting notes now takes about 40% less time.',
      intro: 'On 10 November SoftBank published a case study on its support for Hokuyo Bank. The bank has deployed SoftBank’s Generative AI Package, which runs in a closed environment, across all branches with about 2,500 IDs. Since full use began in September 2025, the number of users has risen about 3.0 times and usage about 7.1 times compared with before. Usage among frontline staff has reached 70%, and a sales user said entering meeting records into the CRM now takes about 40% less time.',
      impactPersonal: 'Lighter back-office work at banks could free up more time for counters and consultations.',
      impactBusiness: 'Even a heavily regulated, cautious bank can use AI company-wide with a closed environment and internal rules. Growing users while widening use cases, rather than waiting for perfection, is a useful model.',
      example: 'The value of generative AI depends not on whether it was introduced but on how much it is used on the front line. Tracking usage rates and time saved lets you explain the return in numbers.',
      caution: 'The figures apply to this case; the publisher notes the same results are not guaranteed.'
    }
  },
  {
    id: 'econ-scenarios', date: '2026-09', status: 'outlook', category: 'economy', art: '2030', minutes: 4,
    sources: [
      ['Anthropic「Scenarios for our Economic Future」', 'Anthropic: Scenarios for our Economic Future', 'https://www.anthropic.com/institute/econ-scenarios']
    ],
    ja: {
      title: 'AIで2030年の経済はどうなる？ Anthropicが3つのシナリオを公開',
      excerpt: 'Anthropicの経済チームは、AIが米国の成長・雇用・賃金に与える影響を2030年まで試算したシナリオを公開しました。予測ではなく「起こりうる幅」を示すものです。',
      intro: 'Anthropicは9月、AIが米国経済に与える影響を2030年まで試算した「経済シナリオ」を公開しました。影響がインターネット並みにとどまる「穏当」シナリオでは、2030年の米国GDPが1.6%押し上げられます。2030年までに知識労働の半分をAIが担う「大幅」シナリオでは8.3%増える一方、知識労働者の賃金はほぼ横ばいです。AIが急速に自己改良する「極端」シナリオでは32.4%増えますが、知識労働者の賃金は1割以上下がり、失業が歴史的な水準まで急増する可能性もあるとしています。米国の一般の人など約1万1000人への調査では、回答の平均は「大幅」シナリオに近い結果でした。',
      impactPersonal: 'どのシナリオでも、AIを使いこなす人とそうでない人の差は広がりやすいと読めます。自分の仕事のうちAIに任せられる部分と、人が担う部分を考えておくことが備えになります。',
      impactBusiness: '経済全体が伸びても、賃金や雇用の配分は大きく変わりえます。人材計画では、AIで置き換わる作業と、人が付加価値を出す業務を分けて考える必要があります。',
      example: '注目点は、GDPが増えても労働者に回る分（労働分配率）が下がる可能性が示されていることです。AIの恩恵が誰に届くかは、技術だけでなく政策や企業の選択に左右されます。',
      caution: '米国経済を対象にした試算モデル（第1版）で、予測ではありません。政策対応などは考慮されておらず、日本にそのまま当てはまるものではありません。'
    },
    en: {
      title: 'What will AI do to the economy by 2030? Anthropic publishes three scenarios',
      excerpt: 'Anthropic’s economics team has published scenarios estimating AI’s impact on US growth, jobs and wages through 2030—a range of possibilities, not a forecast.',
      intro: 'In September Anthropic published economic scenarios modelling AI’s effect on the US economy to 2030. In a “modest” scenario with internet-like impact, US GDP in 2030 is 1.6% higher. In a “substantial” scenario, where AI does half of knowledge work by 2030, GDP is 8.3% higher but knowledge workers’ wages are roughly flat. In an “extreme” scenario with rapid recursive self-improvement, GDP is 32.4% higher, yet knowledge-worker wages fall by more than 10% and unemployment could spike to historic levels. A survey of about 11,000 members of the US public produced an average answer close to the substantial scenario.',
      impactPersonal: 'In every scenario, the gap between people who use AI well and those who don’t tends to widen. Thinking about which parts of your work AI could take on—and which remain yours—is a good way to prepare.',
      impactBusiness: 'Even if the economy grows, the distribution of wages and jobs could change sharply. Workforce plans should separate tasks AI may replace from work where people add value.',
      example: 'The key point is that the share of output going to workers (the labour share) could fall even as GDP rises. Who benefits from AI depends not just on technology but on policy and business choices.',
      caution: 'This is a version 1 model of the US economy, not a forecast. It omits policy responses and does not translate directly to Japan.'
    }
  },
  {
    id: 'chatgpt-business', date: '2026-11-10', status: 'report', category: 'economy', art: 'BIZ', minutes: 3,
    sources: [
      ['OpenAI「Introducing Businesses in ChatGPT」', 'OpenAI: Introducing Businesses in ChatGPT', 'https://openai.com/index/introducing-businesses-chatgpt/']
    ],
    ja: {
      title: 'ChatGPTに「お店のページ」、AI経由の集客が始まる',
      excerpt: 'OpenAIは、企業や店舗がChatGPT上の自社情報を管理できる「Businesses in ChatGPT」をベータ版で始めました。AIに正しく紹介してもらうための新しい窓口です。',
      intro: 'OpenAIは11月10日、「Businesses in ChatGPT」をベータ版で公開しました。確認を受けた企業は「Business Hub」で自社のプロフィールを登録・更新し、価格や在庫を含む商品情報を追加できます。プライバシーに配慮した集計の形で、ChatGPT内での言及やクリック、どんな話題で見つけられたかも確認できます。顧客の質問に答える「Business Agents」は当初、米国の対象となるEC・オンラインサービス事業者向けでしたが、11月19日の更新で米国外の事業者も登録・公開できるようになりました。OpenAIによると、ChatGPTは毎週12億人に使われています。',
      impactPersonal: 'ChatGPTでお店や商品を調べたとき、事業者自身が更新した情報が表示されやすくなります。ただし、AIの回答は比較の条件などによって変わりうる点は意識しておきましょう。',
      impactBusiness: 'これまでの検索対策や口コミ対策に加え、「AIにどう紹介されるか」が集客の新しい論点になります。まずは自社の基本情報や価格を正確に保つことが出発点です。',
      example: '検索結果の上位を争う時代から、AIの回答の中で選ばれる時代へ。消費者との接点がAIに集まるほど、AIを運営する企業が新しい「商店街の大家」のような立場になる点も見ておきたいところです。',
      caution: 'ベータ版で、対象事業者や機能は国・業種によって異なります。料金の記載はありません。'
    },
    en: {
      title: 'A business page in ChatGPT: winning customers via AI begins',
      excerpt: 'OpenAI has launched Businesses in ChatGPT in beta, letting companies and shops manage their information inside ChatGPT—a new way to be described accurately by AI.',
      intro: 'On 10 November OpenAI launched Businesses in ChatGPT in beta. Verified businesses can claim and update their profile through Business Hub and add product feeds with pricing and availability. They can also see aggregated, privacy-protected insights such as mentions, clicks and the topics through which they were discovered. Business Agents, which answer customer questions, launched for eligible US e-commerce and online-service businesses; an update on 19 November extended claiming and publishing agents to such businesses outside the US. OpenAI says 1.2 billion people use ChatGPT each week.',
      impactPersonal: 'When you look up shops or products in ChatGPT, information updated by the businesses themselves will be more likely to appear. Remember that AI answers can still vary with comparison criteria and other factors.',
      impactBusiness: 'Alongside search and review management, how AI describes you becomes a new marketing question. Keeping your basic information and prices accurate is the place to start.',
      example: 'From competing for the top of search results to being chosen inside AI answers. As customer contact concentrates in AI, the companies running those AIs become something like the landlord of a new high street.',
      caution: 'This is a beta; eligibility and features vary by country and sector. No pricing is stated.'
    }
  },
  {
    id: 'beginner-agent', date: '2026-11-25', status: 'guide', category: 'beginner', art: 'AI 101', minutes: 3,
    sources: [
      ['Microsoft「Introducing the new Copilot with Home, Code and Autopilot」', 'Microsoft: Introducing the new Copilot with Home, Code and Autopilot', 'https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/'],
      ['ソフトバンク「『AGENTIC STAR 3.0』を提供開始」', 'SoftBank (Japanese): AGENTIC STAR 3.0 launched', 'https://www.softbank.jp/business/news/2026/1026-01'],
      ['デジタル庁「ガバメントAI 源内においてAIエージェント利用環境の提供を開始」', 'Digital Agency (Japanese): AI agent environment launched on Government AI Gennai', 'https://www.digital.go.jp/policies/genai/agent-safety-standard']
    ],
    ja: {
      title: '「AIエージェント」ってなに？ チャットAIとの違いを3分で',
      excerpt: 'ニュースで毎日のように見かける「AIエージェント」。質問に答えるチャットAIと何が違うのかを、身近な例でやさしく解説します。',
      intro: 'チャットAIは、聞かれたことに答える「相談相手」です。これに対してAIエージェントは、目標を伝えると自分で手順を考え、ほかのアプリやシステムを操作しながら作業を進める「代わりに動く助手」です。たとえば「来週の会議の準備をして」と頼むと、予定を確認し、資料を集め、参加者への案内文を下書きする、といった複数の作業をまとめて進めます。最近は、大事な場面で人に確認を求める仕組みや、何をしたかの記録を残す仕組みも整ってきました。',
      points: ['チャットAI：質問に答える。作業そのものは人がする', 'AIエージェント：目標に向けて手順を考え、ツールを使って作業まで進める', '支払い・送信・削除など大事な操作は、人が承認する設計が基本', '「何をしたか」を後から確認できるかが、安心して任せられるかの分かれ目'],
      impactPersonal: 'まずは「調べてまとめる」「下書きをつくる」など、失敗しても困らない作業から試すのがおすすめです。お金の支払いやメールの送信は、自分で確認してから行いましょう。',
      impactBusiness: 'いきなり全自動を目指すより、「AIが下ごしらえし、人が確認する」流れを1つの業務でつくってみるのが近道です。効果（時間・件数）を測っておくと、広げるかどうかを判断しやすくなります。',
      example: '政府の「源内」、ソフトバンクの「AGENTIC STAR」、Microsoftの「Autopilot」など、2026年は行政・企業・個人のそれぞれでエージェントが本格的に動き始めた年です。各ニュース記事とあわせて読むと、違いがつかみやすくなります。',
      caution: '「エージェント」という言葉の使い方は会社によって幅があります。サービスを選ぶときは、どこまで自動で動き、どこで人の確認が入るのかを確かめましょう。'
    },
    en: {
      title: 'What is an “AI agent”? How it differs from a chatbot, in three minutes',
      excerpt: '“AI agents” are in the news almost daily. Here is a plain-language explanation of how they differ from chatbots that answer questions.',
      intro: 'A chatbot is a conversation partner that answers what you ask. An AI agent, by contrast, is an assistant that acts for you: give it a goal and it works out the steps and gets the job done, using other apps and systems along the way. Ask it to “prepare for next week’s meeting” and it might check calendars, gather documents and draft an invitation—several tasks in one go. Increasingly, agents ask a person to confirm key steps and keep a record of what they did.',
      points: ['Chatbot: answers questions; you do the work', 'AI agent: plans steps toward a goal and carries out the work using tools', 'Important actions—payments, sending, deleting—are normally designed to need human approval', 'Being able to check afterwards what the agent did is what makes it safe to delegate'],
      impactPersonal: 'Start with tasks where mistakes don’t matter much, such as researching and summarising or drafting. Check payments and messages yourself before they go out.',
      impactBusiness: 'Rather than aiming for full automation at once, build one workflow where AI prepares and a person checks. Measuring time and volume makes it easier to decide whether to expand.',
      example: 'Japan’s government Gennai, SoftBank’s AGENTIC STAR and Microsoft’s Autopilot show that 2026 is the year agents got going in government, business and personal use. Read the related stories to see how they differ.',
      caution: 'Companies use the word “agent” loosely. When choosing a service, check how much it does automatically and where a person must confirm.'
    }
  },
  {
    id: 'beginner-mcp', date: '2026-11-25', status: 'guide', category: 'beginner', art: 'MCP', minutes: 3,
    sources: [
      ['Anthropic「Donating Agent Skills to the Agentic AI Foundation」', 'Anthropic: Donating Agent Skills to the Agentic AI Foundation', 'https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation'],
      ['ソフトバンク「『AGENTIC STAR』が『Workato』とのMCP連携に対応」', 'SoftBank (Japanese): AGENTIC STAR supports MCP integration with Workato', 'https://www.softbank.jp/business/news/2026/1111-01']
    ],
    ja: {
      title: 'MCPとAgent Skillsってなに？ AIと仕事の道具をつなぐ「共通ルール」',
      excerpt: 'AIエージェントのニュースでよく出てくる「MCP」と「Agent Skills」。それぞれ何のためのものかを、コンセントと手順書にたとえて解説します。',
      intro: 'AIエージェントが仕事をするには、メールや表計算、顧客管理など、さまざまな道具とつながる必要があります。MCP（Model Context Protocol）は、AIと外部のツールやデータをつなぐための共通の規格で、家電のコンセントの形をそろえるようなものです。一方のAgent Skillsは、AIに「この仕事はこの手順でやる」と教える手順書をまとめる共通の形式です。どちらも特定の企業に縛られないよう、Linux Foundationのもとにある中立団体Agentic AI Foundationで運営されています。',
      points: ['MCP：AIと道具をつなぐ「コンセント」。つなぎ方の共通ルール', 'Agent Skills：AIに仕事のやり方を教える「手順書」の共通フォーマット', '共通ルールなので、AIサービスを替えても使い回しやすい', '例：ソフトバンクのAGENTIC STARは、MCPで業務自動化サービスWorkatoとつながった'],
      impactPersonal: '使っているAIが「MCP対応」なら、カレンダーやメモアプリなどとつないで、できることを広げられる場合があります。つなぐ前に、AIにどこまでの情報を見せるかを確認しましょう。',
      impactBusiness: '社内の手順や知識を「スキル」として文書化しておくと、AIにも新人にも引き継げる資産になります。ツールを選ぶときに共通規格への対応を確認しておくと、乗り換えの負担を減らせます。',
      example: 'つなぎ方がそろうと、ツールを提供する企業は一度対応するだけで多くのAIから使ってもらえます。共通規格は、AIエージェントの市場が広がるための「道路」のような役割を果たします。',
      caution: 'AIを外部ツールにつなぐと、AIが読み書きできる範囲も広がります。権限は必要最小限にし、重要な操作には承認を入れましょう。'
    },
    en: {
      title: 'What are MCP and Agent Skills? The shared rules connecting AI to your tools',
      excerpt: 'MCP and Agent Skills come up constantly in AI agent news. Here is what each is for, explained as a plug socket and an instruction manual.',
      intro: 'To do real work, an AI agent has to connect to tools such as email, spreadsheets and customer databases. MCP (Model Context Protocol) is a common standard for connecting AI to external tools and data—like agreeing on one shape for plug sockets. Agent Skills is a common format for manuals that teach AI “do this job in these steps.” To keep them vendor-neutral, both are governed by the Agentic AI Foundation under the Linux Foundation.',
      points: ['MCP: the “plug socket”—a shared rule for connecting AI to tools', 'Agent Skills: a shared format for “manuals” that teach AI how to do a job', 'Because they are shared standards, they are easier to reuse if you switch AI services', 'Example: SoftBank’s AGENTIC STAR connected to the automation service Workato via MCP'],
      impactPersonal: 'If your AI assistant supports MCP, you may be able to connect it to calendars or note apps to do more. Before connecting, decide how much information the AI should see.',
      impactBusiness: 'Documenting procedures and know-how as skills creates assets that can be handed to AI and new staff alike. Checking support for shared standards when choosing tools reduces switching costs.',
      example: 'With a common way to connect, a tool provider only needs to integrate once to be usable by many AIs. Shared standards act like the roads that let the AI agent market expand.',
      caution: 'Connecting AI to external tools widens what it can read and change. Keep permissions to the minimum and require approval for important actions.'
    }
  },
  {
    id: 'beginner-price', date: '2026-11-25', status: 'guide', category: 'beginner', art: 'TOKEN', minutes: 3,
    sources: [
      ['Google「Introducing Gemini 4 Neon」', 'Google: Introducing Gemini 4 Neon', 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/'],
      ['OpenAI「Introducing GPT-6.2 Astra and Sol」', 'OpenAI: Introducing GPT-6.2 Astra and Sol', 'https://openai.com/index/introducing-gpt-6-2-astra-sol/']
    ],
    ja: {
      title: '「100万トークン3ドル」ってどういう意味？ AI料金の読み方',
      excerpt: 'AIモデルの発表で必ず出てくる「100万トークンあたり○ドル」。トークンとは何か、実際の費用感はどれくらいかを、簡単な計算で確かめます。',
      intro: 'トークンは、AIが文章を処理するときの単位です。英語ではおおよそ単語の一部、日本語ではおおむね1文字前後が1トークンにあたりますが、数え方はモデルによって異なります。料金は、AIに渡す文章（入力）とAIが書く文章（出力）で別々に決まっていて、出力のほうが高いのが一般的です。たとえばGoogleのGemini 4 Neonは、入力100万トークンあたり3ドル、出力15ドルと発表されています。',
      points: ['入力＝AIに読ませる量、出力＝AIが書く量。出力のほうが高いことが多い', '試算例：3,000字の資料を500字に要約する作業を100回 → 入力約30万トークン（約0.9ドル）＋出力約5万トークン（約0.75ドル）＝約1.65ドル', 'ChatGPTなどの月額プランは定額や上限付きが多く、API（従量課金）とは料金の仕組みが違う', '安いモデルと人の確認を組み合わせ、難しい作業だけ高いモデルを使うのが費用を抑えるコツ'],
      impactPersonal: '個人で使う場合は、月額プランの範囲で足りることがほとんどです。料金表の「100万トークン」は、主にアプリやシステムに組み込む開発者向けの値段だと考えると混乱しません。',
      impactBusiness: '社内システムにAIを組み込むなら、「1回あたりの処理量×回数」で月の費用をざっくり見積もれます。まずは小さく試し、実際の請求額から単価を確かめると安心です。',
      example: '2026年は各社が値下げを競い、OpenAIはGPT-6.2 Astraの料金を前の世代より20%下げました。AIの単価が下がるほど、これまで人手でしか割に合わなかった作業にもAIを使えるようになります。',
      caution: '試算は目安です。文字数とトークン数の関係はモデルや文章によって変わり、料金も改定や為替で変わります。最新の料金は各社の公式ページで確認してください。'
    },
    en: {
      title: 'What does “$3 per million tokens” mean? How to read AI pricing',
      excerpt: 'Every AI model launch quotes a price “per million tokens.” Here is what a token is, and what the cost looks like with a simple calculation.',
      intro: 'A token is the unit AI uses to process text. In English a token is roughly part of a word; in Japanese it is about one character, though each model counts differently. Prices are set separately for the text you give the AI (input) and the text it writes (output), with output usually costing more. Google, for example, priced Gemini 4 Neon at $3 per million input tokens and $15 per million output tokens.',
      points: ['Input = how much the AI reads; output = how much it writes. Output usually costs more', 'Worked example: summarising a 3,000-character Japanese document into 500 characters, 100 times → about 300,000 input tokens (≈$0.90) + 50,000 output tokens (≈$0.75) = about $1.65', 'Monthly plans such as ChatGPT subscriptions are usually flat-rate or capped, unlike pay-as-you-go API pricing', 'Pair a cheaper model with human checks, and save premium models for hard tasks, to keep costs down'],
      impactPersonal: 'For personal use, a monthly plan is usually enough. Think of “per million tokens” price lists as mainly for developers building AI into apps and systems.',
      impactBusiness: 'If you build AI into internal systems, estimate monthly cost as volume per task × number of tasks. Start small and check the per-task cost against your actual bill.',
      example: 'Price competition intensified in 2026; OpenAI priced GPT-6.2 Astra 20% below the previous generation. The cheaper AI gets, the more tasks that only made sense for people become worth giving to AI.',
      caution: 'The calculation is a rough guide. The ratio of characters to tokens varies by model and text, and prices change with revisions and exchange rates. Check each provider’s official pricing.'
    }
  },
  {
    id: 'beginner-rules', date: '2026-11-25', status: 'guide', category: 'beginner', art: 'RULES', minutes: 4,
    sources: [
      ['デジタル庁「ガバメントAI 源内においてAIエージェント利用環境の提供を開始するとともに、『源内基準』を公表します」', 'Digital Agency (Japanese): Gennai Standard published', 'https://www.digital.go.jp/policies/genai/agent-safety-standard'],
      ['デジタル庁「国会答弁作成支援AIアプリのプロトタイプ版を提供開始」', 'Digital Agency (Japanese): Prototype Diet-answer support app', 'https://www.digital.go.jp/policies/genai/b736d2d7-b03b-43f0-9932-eba7da7f8142'],
      ['IPA「AIセキュリティ短信」', 'IPA (Japanese): AI Security Bulletin', 'https://www.ipa.go.jp/digital/ai/security/ai-security-bulletin.html']
    ],
    ja: {
      title: '仕事で生成AIを使う前に決めておきたい5つのこと',
      excerpt: '便利な生成AIも、使い方のルールがないと情報漏えいや誤りのもとになります。政府の取り組みも参考に、小さな会社でもすぐ決められる5つのポイントをまとめました。',
      intro: '生成AIは、文章の下書きや要約、調べものを大きく効率化します。一方で、入力した情報の扱いや、もっともらしい誤り（ハルシネーション）といった注意点もあります。政府は職員向けAI「源内」で、利用者・管理者・開発者それぞれの責務を定めた「源内基準」を公表し、国会答弁支援AIでも「AIは職員の確認や最終判断を代替しない」ことを原則にしています。会社でも、最初に次の5つを決めておくと安心です。',
      points: ['① 入れてよい情報・入れてはいけない情報を決める（個人情報、取引先の機密など）', '② 使ってよいサービスを決める（会社で契約したものなど）', '③ 出力は必ず人が確認する。数字や固有名詞は出典と照らし合わせる', '④ 最終判断と責任は人が持つ。お客様に出す文書は担当者が確認する', '⑤ 困ったときの相談先と、ルールを見直す時期を決めておく'],
      impactPersonal: '個人で使うときも、①と③は特に大切です。家族や友人の個人情報、パスワードなどは入力しないようにしましょう。',
      impactBusiness: '総務省の情報通信白書によると、生成AIの活用方針を定めた企業は全体で68.9%、中小企業では58.1%にとどまります。A4一枚の簡単なルールからでも始める価値があります。',
      example: 'ルールは「禁止」のためではなく、安心して使う人を増やすためのものです。北洋銀行の事例のように、閉じた環境とルールを整えたうえで利用者を増やすと、効果が現場に広がりやすくなります。',
      caution: '業種によっては、個人情報保護や業法上のルールが別にあります。本記事は一般的な考え方の紹介で、法的な助言ではありません。'
    },
    en: {
      title: 'Five things to decide before using generative AI at work',
      excerpt: 'Without ground rules, even useful generative AI can lead to data leaks and mistakes. Drawing on the government’s approach, here are five points any small company can settle quickly.',
      intro: 'Generative AI greatly speeds up drafting, summarising and research. But there are pitfalls, such as how your input is handled and plausible-sounding errors (hallucinations). Japan’s government has published the Gennai Standard setting out the responsibilities of users, administrators and developers of its staff AI, and its Diet-answer assistant follows the principle that AI does not replace staff checks or final decisions. Companies will feel safer if they decide these five things first.',
      points: ['1. What information may and may not be entered (personal data, client secrets, etc.)', '2. Which services may be used (e.g. those the company has contracted)', '3. A person always checks the output—verify figures and names against sources', '4. People keep final decisions and responsibility; staff check anything sent to customers', '5. Who to ask when unsure, and when the rules will be reviewed'],
      impactPersonal: 'Points 1 and 3 matter for personal use too. Don’t enter other people’s personal information or passwords.',
      impactBusiness: 'According to Japan’s Information and Communications White Paper, 68.9% of firms have a generative AI policy, but only 58.1% of SMEs. Even a one-page set of rules is worth starting with.',
      example: 'Rules are not there to ban things but to let more people use AI with confidence. As the Hokuyo Bank case shows, expanding use after setting up a closed environment and rules helps the benefits spread.',
      caution: 'Some industries have additional rules on personal data or sector regulation. This article is general guidance, not legal advice.'
    }
  },
  {
    id: 'beginner-words', date: '2026-11-25', status: 'guide', category: 'beginner', art: 'WORDS', minutes: 4,
    sources: [
      ['Anthropic「Donating Agent Skills to the Agentic AI Foundation」', 'Anthropic: Donating Agent Skills to the Agentic AI Foundation', 'https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation'],
      ['IPA「AIセキュリティ短信」', 'IPA (Japanese): AI Security Bulletin', 'https://www.ipa.go.jp/digital/ai/security/ai-security-bulletin.html']
    ],
    ja: {
      title: 'ニュースがぐっと読みやすくなる、AI用語10選',
      excerpt: '「基盤モデル」「ハルシネーション」「プレビュー」……AIニュースによく出てくる言葉を、ひとことで説明します。',
      intro: 'AIのニュースには、専門用語やカタカナ語がたくさん出てきます。意味をざっくり押さえておくだけで、記事の読みやすさが大きく変わります。日本AI経済ラボの記事によく登場する10の言葉を選びました。',
      points: ['生成AI：文章・画像・音声などを新しくつくり出すAI', '基盤モデル（LLM）：大量のデータで学習した、さまざまな用途に使える土台のAI。GPT、Claude、Geminiなど', 'AIエージェント：目標に向けて手順を考え、ツールを使って作業まで進めるAI', 'トークン：AIが文章を処理する単位。料金の計算にも使われる', 'ハルシネーション：AIがもっともらしい誤りを答えること。出典の確認が大切', 'API：アプリやシステムからAIを呼び出すための窓口。多くは使った分だけの従量課金', 'MCP：AIと外部のツールやデータをつなぐための共通規格', 'オンプレミス：クラウドではなく、自社の設備の中でシステムを動かすこと', 'プレビュー／ベータ版：正式提供の前に、限られた人向けに試験的に出す段階', '実証（PoC）：本格導入の前に、効果や課題を小さく試して確かめること'],
      impactPersonal: '記事を読んでいてわからない言葉が出てきたら、このページに戻ってきてください。言葉の意味がわかると、自分に関係があるニュースかどうかも判断しやすくなります。',
      impactBusiness: '社内でAIの話をするときに言葉の意味がそろっていると、議論や検討が進めやすくなります。研修の最初に共有するのもおすすめです。',
      example: '特に大切なのは「プレビュー」「実証」「提供開始」の違いです。同じ「発表」でも、すぐ使えるものと、まだ試験段階のものがあります。日本AI経済ラボでは、記事の中でできるだけこの区別を書くようにしています。',
      caution: '用語の説明はわかりやすさを優先した簡略版です。厳密な定義は分野や企業によって異なります。'
    },
    en: {
      title: 'Ten AI terms that make the news easier to read',
      excerpt: 'Foundation models, hallucinations, previews… a one-line explanation of words that often appear in AI news.',
      intro: 'AI news is full of jargon. A rough grasp of the key terms makes stories much easier to follow. We have picked ten words that appear often in Japan AI Economy Lab stories.',
      points: ['Generative AI: AI that creates new text, images, audio and more', 'Foundation model (LLM): a general-purpose AI trained on huge amounts of data—e.g. GPT, Claude, Gemini', 'AI agent: AI that plans steps toward a goal and carries out the work using tools', 'Token: the unit AI uses to process text, also used for pricing', 'Hallucination: when AI gives a plausible but wrong answer—check sources', 'API: the interface apps and systems use to call AI, usually pay-as-you-go', 'MCP: a common standard for connecting AI to external tools and data', 'On-premises: running systems on your own premises rather than in the cloud', 'Preview / beta: a trial stage for limited users before full release', 'Proof of concept (PoC): a small trial to check benefits and issues before full adoption'],
      impactPersonal: 'Come back to this page whenever you meet an unfamiliar term. Knowing what the words mean makes it easier to tell whether a story affects you.',
      impactBusiness: 'Shared vocabulary makes internal AI discussions go more smoothly. It is worth sharing at the start of any training.',
      example: 'The difference between “preview”, “trial” and “launch” matters most. Two announcements can look alike while one is ready to use and the other still experimental. We flag this distinction in our stories wherever possible.',
      caution: 'These are simplified explanations; precise definitions vary by field and company.'
    }
  }
];

// Shorter archive entries without a full write-up (linked to their sources).
const ARCHIVE_EXTRA = [
  { date: '2026-11-24', category: 'policy', ja: 'NEDO、生成AI基盤モデル開発のあり方と「GENIAC-PRIZE 2027」運営に関する調査の公募を予告', en: 'NEDO gives notice of studies on foundation-model development and running GENIAC-PRIZE 2027', source: ['NEDO', 'NEDO (Japanese)', 'https://www.nedo.go.jp/koubo/CD1_100463.html'] },
  { date: '2026-11-24', category: 'work', ja: '森トラスト、社員約30人がAIエージェント開発研修で実務課題に挑戦（パーソルイノベーション公表）', en: 'Mori Trust: about 30 staff build AI agents for real tasks in a training programme (Persol Innovation)', source: ['PR TIMES（パーソルイノベーション）', 'PR TIMES (Persol Innovation, Japanese)', 'https://prtimes.jp/main/html/rd/p/000000730.000071591.html'] },
  { date: '2026-11-19', category: 'economy', ja: 'NVIDIAとMicrosoft、AzureからWindows PCまでAI計算基盤を拡充', en: 'NVIDIA and Microsoft expand accelerated computing from Azure to Windows PCs', source: ['NVIDIA', 'NVIDIA', 'https://blogs.nvidia.com/blog/microsoft-ignite-accelerated-computing-azure-windows-pcs/'] },
  { date: '2026-11-18', category: 'tools', ja: 'SB C&S、オンプレミス型の企業向けAI基盤「Cosnex」の取り扱いを開始', en: 'SB C&S begins distributing Cosnex, an on-premises enterprise AI platform', source: ['SB C&S', 'SB C&S (Japanese)', 'https://cas.softbank.jp/information/261118_01/'] },
  { date: '2026-11-18', category: 'life', ja: 'Geminiアプリ、メモリの少ないAndroid（Go edition）端末でも利用可能に', en: 'Gemini app now available on lower-memory Android (Go edition) devices', source: ['Google', 'Google', 'https://blog.google/innovation-and-ai/products/gemini-app/gemini-lower-memory-devices/'] },
  { date: '2026-11-17', category: 'work', ja: 'OpenAI、営業チーム向け「ChatGPT for Sales」を発表', en: 'OpenAI introduces ChatGPT for Sales', source: ['OpenAI', 'OpenAI', 'https://openai.com/index/introducing-chatgpt-for-sales/'] },
  { date: '2026-11-16', category: 'work', ja: 'OpenAI、医療向けChatGPTにコンピューター操作エージェントや臨床検索を追加', en: 'OpenAI adds computer-use agents and clinical search to ChatGPT for Healthcare', source: ['OpenAI', 'OpenAI', 'https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare/'] },
  { date: '2026-11-16', category: 'work', ja: 'OpenAI、医療現場のコンピューター操作エージェントの評価結果を公表', en: 'OpenAI publishes evaluations of computer-use agents for healthcare teams', source: ['OpenAI', 'OpenAI', 'https://openai.com/index/advancing-computer-use-for-healthcare-teams/'] },
  { date: '2026-11-16', category: 'work', ja: 'NEDO、「記録レス介護」に向けた介護特化AIモデルの研究開発を公募（12月16日まで）', en: 'NEDO opens call for R&D on care-specific AI models to cut care record-keeping (until 16 Dec)', source: ['NEDO', 'NEDO (Japanese)', 'https://www.nedo.go.jp/koubo/CD2_100456.html'] },
  { date: '2026-11-16', category: 'work', ja: 'パテント・インテグレーション、特許調査を支援する「サマリアAgent」β版を提供開始', en: 'Patent Integration launches Summaria Agent (beta) for patent searches', source: ['PR TIMES（パテント・インテグレーション）', 'PR TIMES (Patent Integration, Japanese)', 'https://prtimes.jp/main/html/rd/p/000000033.000086119.html'] },
  { date: '2026-11-16', category: 'economy', ja: 'NVIDIA、MLPerf Trainingで全項目に結果、Vera Rubinが初登場（初期結果）', en: 'NVIDIA sweeps MLPerf Training as Vera Rubin debuts (early results)', source: ['NVIDIA', 'NVIDIA', 'https://blogs.nvidia.com/blog/mlperf-training-endpoints-vera-rubin/'] },
  { date: '2026-11-13', category: 'work', ja: 'SCSK、営業・見積・受発注などを担う専門商社向けAIエージェントを提供開始', en: 'SCSK launches AI agents for specialty trading firms covering sales, quotes and orders', source: ['PR TIMES（SCSK）', 'PR TIMES (SCSK, Japanese)', 'https://prtimes.jp/main/html/rd/p/000000091.000152961.html'] },
  { date: '2026-11-13', category: 'policy', ja: 'IPA「AIセキュリティ短信」11月号、AIエージェント型の攻撃基盤の広がりなどを整理', en: 'IPA AI Security Bulletin (November) covers the spread of agent-based attack tools', source: ['IPA', 'IPA (Japanese)', 'https://www.ipa.go.jp/digital/ai/security/ai-security-bulletin.html'] },
  { date: '2026-11-12', category: 'work', ja: 'サイボウズ、kintoneの「プロセスAIエージェント」を発表（2027年2月販売予定）', en: 'Cybozu announces Process AI Agent for kintone (sales planned for February 2027)', source: ['PR TIMES（サイボウズ）', 'PR TIMES (Cybozu, Japanese)', 'https://prtimes.jp/main/html/rd/p/000000363.000027677.html'] },
  { date: '2026-11-12', category: 'tools', ja: 'NTT、少量の業務マニュアルから専門LLMをつくるチューニング技術を確立（研究成果）', en: 'NTT develops a technique to tune specialist LLMs from small sets of manuals (research)', source: ['NTT', 'NTT (Japanese)', 'https://group.ntt/jp/newsrelease/2026/11/12/261112a.html'] },
  { date: '2026-11-12', category: 'life', ja: 'Google検索に「Gemini 4 Hydrogen」、全ユーザー向けに提供', en: 'Google Search upgraded with Gemini 4 Hydrogen for all users', source: ['Google', 'Google', 'https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/'] },
  { date: '2026-11-11', category: 'economy', ja: 'NEDO、AI用データセンターの技術ニーズ調査の実施先をPwCコンサルティングに決定', en: 'NEDO selects PwC Consulting for a study of AI data-centre technology needs', source: ['NEDO', 'NEDO (Japanese)', 'https://www.nedo.go.jp/koubo/CD3_100445.html'] },
  { date: '2026-11-10', category: 'work', ja: 'Adobe Firefly、AIクリエイティブエージェントを搭載（新機能の多くはベータ）', en: 'Adobe Firefly adds an AI creative agent (most new features in beta)', source: ['Adobe', 'Adobe', 'https://news.adobe.com/news/2026/11/adobe-firefly-expands'] },
  { date: '2026-11-09', category: 'tools', ja: 'ChatGPT EnterpriseがAWS Marketplaceで購入可能に', en: 'ChatGPT Enterprise now available in AWS Marketplace', source: ['OpenAI', 'OpenAI', 'https://openai.com/index/chatgpt-enterprise-aws-marketplace/'] },
  { date: '2026-11-05', category: 'tools', ja: 'OpenAI、脆弱性の発見・検証に特化した「GPT-6 Cyber」を限定提供', en: 'OpenAI introduces GPT-6 Cyber for approved security teams', source: ['OpenAI', 'OpenAI', 'https://openai.com/index/introducing-gpt-6-cyber/'] },
  { date: '2026-11-05', category: 'policy', ja: 'NEDO、オフライン・オフグリッドで使える生成AI基盤モデルの研究開発公募を予告', en: 'NEDO gives notice of an R&D call for foundation models that work offline and off-grid', source: ['NEDO', 'NEDO (Japanese)', 'https://www.nedo.go.jp/koubo/CD1_100460.html'] },
  { date: '2026-11-05', category: 'work', ja: 'NTTデータ、AIエージェントで経営管理業務を支援するサービスを開始', en: 'NTT DATA launches AI agent service for management planning', source: ['NTTデータ', 'NTT DATA (Japanese)', 'https://www.nttdata.com/global/ja/news/topics/2026/110500/'] },
  { date: '2026-11-04', category: 'policy', ja: 'OpenAI、米政府向けクラウド（AWS GovCloud）でサイバー防御モデルを提供', en: 'OpenAI makes its cyber-defence model available in AWS GovCloud via Daybreak Red', source: ['OpenAI', 'OpenAI', 'https://openai.com/index/daybreak-red-aws-govcloud/'] },
  { date: '2026-11-02', category: 'tools', ja: 'AWS週次まとめ：BedrockでGPT-6.1 Terra、Step Functionsをエージェントのツールに', en: 'AWS weekly roundup: GPT-6.1 Terra on Bedrock, Step Functions as agent tools', source: ['AWS', 'AWS', 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-gpt-6-1-terra-on-bedrock-step-functions-as-agent-tools-and-more-november-2-2026/'] },
  { date: '2026-10-28', category: 'economy', ja: 'NTTデータ、製造業向け「AIネイティブなSCM」への移行支援を開始', en: 'NTT DATA launches support for manufacturers moving to AI-native supply chains', source: ['NTTデータ', 'NTT DATA (Japanese)', 'https://www.nttdata.com/global/ja/news/topics/2026/102800/'] },
  { date: '2026-10-28', category: 'work', ja: '日立ソリューションズ、PC画面を操作するAIエージェント「Opnova」を国内で提供', en: 'Hitachi Solutions brings Opnova, an AI agent that operates PC screens, to Japan', source: ['PR TIMES（日立ソリューションズ）', 'PR TIMES (Hitachi Solutions, Japanese)', 'https://prtimes.jp/main/html/rd/p/000000407.000053429.html'] },
  { date: '2026-10-28', category: 'tools', ja: 'Microsoft、複数のAIモデルでエージェントをつくる「Copilot harness」を公開', en: 'Microsoft opens the Copilot harness for multi-model agents', source: ['Microsoft', 'Microsoft', 'https://blogs.microsoft.com/blog/2026/10/28/introducing-the-microsoft-copilot-harness-unlocking-the-potential-of-truly-multi-model-agentic-work/'] },
  { date: '2026-10-28', category: 'tools', ja: 'Anthropic、研究者向け「AI for Science」を財団・研究機関に拡大', en: 'Anthropic expands AI for Science to foundations and research institutions', source: ['Anthropic', 'Anthropic', 'https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions'] },
  { date: '2026-10-21', category: 'life', ja: 'あいち銀行とNTTデータ、話し言葉で残高を照会できる対話型アプリを実証', en: 'Aichi Bank and NTT DATA trial a conversational app for checking balances', source: ['NTTデータ', 'NTT DATA (Japanese)', 'https://www.nttdata.com/global/ja/news/topics/2026/102100/'] },
  { date: '2026-10-13', category: 'tools', ja: 'SB Intuitions、国産LLM「Sarashina」の無償ベータ版サービスを公開', en: 'SB Intuitions opens a free beta of its Japanese LLM service Sarashina', source: ['SB Intuitions', 'SB Intuitions (Japanese)', 'https://www.sbintuitions.co.jp/news/press/20261013_01/'] },
  { date: '2026-10-02', category: 'work', ja: 'Anthropic、1億ドルを投じて1万人のAI導入エンジニアを育成へ', en: 'Anthropic commits $100 million to train 10,000 AI deployment engineers', source: ['Anthropic', 'Anthropic', 'https://www.anthropic.com/news/claude-frontier-academy'] },
  { date: '2026-09-29', category: 'tools', ja: 'AWS、OpenAIと共同開発した「Bedrock Managed Agents」をプレビュー提供', en: 'AWS previews Bedrock Managed Agents, built with OpenAI', source: ['AWS', 'AWS', 'https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/'] },
  { date: '2026-09-30', category: 'tools', ja: 'Google、最上位モデル「Gemini 4 Argon」を発表', en: 'Google announces its flagship Gemini 4 Argon model', source: ['Google', 'Google', 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/'] },
  { date: '2026-09-03', category: 'tools', ja: 'OpenAI、「GPT-6 Astra」の提供を開始', en: 'OpenAI begins rolling out GPT-6 Astra', source: ['CNBC', 'CNBC', 'https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html'] },
  { date: '2026-07-10', category: 'policy', ja: '政府の生成AI基盤「源内」に国産言語モデルを試験導入', en: 'Government AI platform “Gennai” trials domestic language models', source: ['日本経済新聞', 'Nikkei (Japanese)', 'https://www.nikkei.com/article/DGXZQOUA0998R0Z00C26A7000000/'] },
  { date: '2026-06-30', category: 'policy', ja: '経産省、フィジカルAIを見据えた基盤モデル開発事業を開始', en: 'METI launches foundation-model programme for physical AI', source: ['経済産業省', 'METI (Japanese)', 'https://www.meti.go.jp/press/2026/06/20260630005/20260630005.html'] },
  { date: '2026-06-12', category: 'policy', ja: '米政府、アンソロピックの2モデルへのアクセス停止を命令（6月30日に解除の通知）', en: 'US government orders access to two Anthropic models shut off (lifting notified 30 June)', source: ['TechCrunch', 'TechCrunch', 'https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/'] },
  { date: '2026-04-12', category: 'economy', ja: 'ソフトバンクの国産AI新会社に、NEC・ホンダ・3メガバンクなどが出資', en: 'NEC, Honda, megabanks and others invest in SoftBank’s domestic AI company', source: ['日本経済新聞', 'Nikkei (Japanese)', 'https://www.nikkei.com/article/DGXZQOUC1207B0S6A410C2000000/'] },
  { date: '2026-04', category: 'economy', ja: 'データセンター業に省エネ法の新たな措置を施行', en: 'New Energy Conservation Act measures for data centres take effect', source: ['資源エネルギー庁', 'Agency for Natural Resources and Energy (Japanese)', 'https://www.enecho.meti.go.jp/category/saving_and_new/saving/enterprise/factory/support-tools/data/dc_gaiyo.pdf'] },
  { date: '2026-02', category: 'life', ja: 'OpenAI、米国でChatGPT内の広告を開始', en: 'OpenAI starts ads in ChatGPT in the US', source: ['OpenAI', 'OpenAI', 'https://openai.com/index/testing-ads-in-chatgpt/'] }
];

// Indicators quoted from published sources.
const INDICATORS = [
  { article: 'soumu-whitepaper', value: { ja: '86.4%', en: '86.4%' },
    ja: { label: '生成AIを業務で使う日本企業', change: '2025年度調査', note: '法人：同業他社の動きを知る目安', src: '総務省 情報通信白書' },
    en: { label: 'Japanese firms using generative AI at work', change: 'FY2025 survey', note: 'For businesses: a benchmark against peers', src: 'MIC White Paper' } },
  { article: 'soumu-whitepaper', dir: 'up', value: { ja: '68.9%', en: '68.9%' },
    ja: { label: '生成AIの活用方針を定めた企業', change: '+19.2pt（前年度比）', note: '中小企業は58.1%。方針づくりが課題', src: '総務省 情報通信白書' },
    en: { label: 'Firms with a generative AI policy', change: '+19.2pt year on year', note: 'Only 58.1% among SMEs—policy is the gap', src: 'MIC White Paper' } },
  { article: 'labor-whitepaper', value: { ja: '9.2%', en: '9.2%' },
    ja: { label: '生成AI利用率（OECD比較）', change: 'OECD平均は20.2%', note: '定義が違えば数字も変わる。比べる前に確認を', src: '労働経済白書（日本経済新聞の報道）' },
    en: { label: 'Generative AI use (OECD comparison)', change: 'OECD average: 20.2%', note: 'Different definitions, different numbers—check before comparing', src: 'Labour white paper (via Nikkei)' } },
  { article: 'anthropic-ipo', value: { ja: '約935億ドル', en: '$93.5bn' },
    ja: { label: 'アンソロピックのIPO調達額', change: '過去最大のIPO（追加購入枠を含む）', note: 'AIへの期待と、投資の回収を問う市場の目', src: 'Anthropic' },
    en: { label: 'Anthropic IPO proceeds', change: 'Largest IPO on record (incl. option)', note: 'High hopes for AI—and scrutiny of returns', src: 'Anthropic' } }
];

const RANKINGS = {
  week: ['market-1125', 'anthropic-ipo', 'frontier-models', 'nttdata-cobol', 'un-summit'],
  year: ['anthropic-ipo', 'gennai-agents', 'chatgpt-wallet', 'noetra', 'soumu-whitepaper']
};

const EN_UI = {
  readingTime: minutes => `${minutes} min read`, openArticle: 'Read story ＋',
  practicalExample: 'The economic angle', caution: 'Points to note', nicoConnection: 'How this relates to NICO',
  nicoBody: 'NICO is developing workflow tools and a personal AI agent to help individuals and small businesses make the most of changes like these. Features and availability are not yet confirmed.',
  articleNote: 'This brief summarises published reports and official announcements. Figures and dates are as of each source’s publication.',
  newsBrief: 'NEWS BRIEF', sourceNote: 'Links open external sites. Some (such as Nikkei) may require a subscription.',
  personalEyebrow: 'NICO / PERSONAL', businessEyebrow: 'NICO / BUSINESS',
  personalTitle: 'Personal AI agent', businessTitle: 'AI workflow review for businesses',
  personalBody: 'We are developing a personal AI service to help with planning, organizing information, and everyday work.',
  businessBody: 'We plan to offer a consultation entry point for small, practical workflow improvements.',
  routeInfo: 'Official registration and consultation channels are being prepared. This preview does not accept applications.',
  routeNote: 'Before launch, forms will clearly explain how data is used, how it is handled, and which service features are available.',
  formResult: 'The form works as a demo. Your email address has not been sent, saved, or subscribed.',
  topStory: 'Top story', readStory: 'Read the story', sources: 'Sources',
  impactTitle: 'What it means for you', impactPersonal: 'For individuals', impactBusiness: 'For businesses',
  personalLink: 'NICO for individuals', businessLink: 'NICO for businesses',
  published: 'Published data', relatedStory: 'Related story', sourceLabel: 'Source: ', up: 'Up',
  guideBrief: 'BASICS', guideImpact: 'Getting started', guideMore: 'Going further', guideSources: 'Further reading',
  guideNote: 'This is an original explainer by our editors on AI basics, current as of November 2026.',
  items: n => `${n} ${n === 1 ? 'item' : 'items'}`, externalLink: '(opens in a new tab)'
};

const STATUS_LABELS = {
  ja: { report: '発表・報道', outlook: '予測を含む', guide: '基礎解説' },
  en: { report: 'Reported', outlook: 'Includes outlook', guide: 'Basics' }
};
const TOP_STORY_ID = 'market-1125';
const DIGEST_IDS = ['gennai-agents', 'chatgpt-wallet', 'beginner-agent'];

function isEnglish() { return window.NicoI18n?.getLocale() === 'en'; }
function lang() { return isEnglish() ? 'en' : 'ja'; }
function categoryLabel(category) { return CATEGORY_LABELS[lang()][category]; }
function localizedArticle(article) {
  const l = lang();
  return { ...article, ...article[l], label: categoryLabel(article.category), artStyle: ART_STYLE[article.category],
    sourceList: article.sources.map(([ja, en, url]) => ({ name: l === 'en' ? en : ja, url })) };
}
function sourceSummary(article) {
  const names = article.sources.map(([ja, en]) => (isEnglish() ? en : ja).split(/[「:（(]/)[0].trim());
  return (isEnglish() ? 'Source: ' : '出典：') + [...new Set(names)].join(isEnglish() ? ', ' : '・');
}
function statusLabel(status) { return STATUS_LABELS[lang()][status]; }
function statusChip(article) { return `<span class="status-chip" data-status="${article.status}">${statusLabel(article.status)}</span>`; }
function formatDate(iso, short) {
  const [y, m, d] = iso.split('-').map(Number);
  if (isEnglish()) {
    const date = new Date(Date.UTC(y, m - 1, d || 1));
    const opts = d ? (short ? { month: 'short', day: 'numeric' } : { year: 'numeric', month: 'short', day: 'numeric' }) : (short ? { month: 'short' } : { year: 'numeric', month: 'short' });
    return date.toLocaleDateString('en-US', { ...opts, timeZone: 'UTC' });
  }
  const mm = String(m).padStart(2, '0');
  if (short) return d ? `${mm}.${String(d).padStart(2, '0')}` : `${m}月`;
  return d ? `${y}.${mm}.${String(d).padStart(2, '0')}` : `${y}.${mm}`;
}
function readingTime(article) { return isEnglish() ? EN_UI.readingTime(article.minutes) : `約${article.minutes}分で読める`; }
function findArticle(id) { const base = ARTICLES.find(item => item.id === id); return base && localizedArticle(base); }
function escapeAttr(text) { return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

function renderTopStory() {
  const article = findArticle(TOP_STORY_ID);
  document.getElementById('top-story-content').innerHTML = `
    <span class="top-kicker">${isEnglish() ? EN_UI.topStory : '注目のニュース'}</span>
    <div class="top-meta"><span class="category-chip">${article.label}</span>${statusChip(article)}</div>
    <h2 class="top-title">${article.title}</h2>
    <p class="top-excerpt">${article.excerpt}</p>
    <p class="top-source">${sourceSummary(article)}</p>
    <div class="top-foot"><span>${formatDate(article.date)} · ${readingTime(article)}</span>
    <button type="button" class="button button-primary" data-open-article="${article.id}">${isEnglish() ? EN_UI.readStory : '記事を読む'} <span aria-hidden="true">↗</span></button></div>`;
}

function renderIndicators() {
  const en = isEnglish();
  document.getElementById('indicator-grid').innerHTML = INDICATORS.map(item => {
    const t = en ? item.en : item.ja;
    const arrow = item.dir === 'up' ? `<span aria-hidden="true">▲</span><span class="visually-hidden">${en ? EN_UI.up : '上昇'}</span> ` : '';
    return `<div class="indicator-card">
      <div class="indicator-top"><span class="indicator-label">${t.label}</span><span class="sample-tag">${en ? EN_UI.published : '公表値'}</span></div>
      <strong class="indicator-value">${en ? item.value.en : item.value.ja}</strong>
      <span class="indicator-change" data-dir="${item.dir || 'flat'}">${arrow}${t.change}</span>
      <p class="indicator-note">${t.note}</p>
      <p class="indicator-src">${en ? EN_UI.sourceLabel : '出典：'}${t.src}</p>
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

let activeRanking = 'week';
const rankTabs = [...document.querySelectorAll('[data-rank]')];
function renderRanking() {
  document.getElementById('rank-list').innerHTML = RANKINGS[activeRanking].map((id, index) => {
    const article = findArticle(id);
    return `<li><button type="button" class="rank-item" data-open-article="${id}"><span class="rank-no" aria-hidden="true">${index + 1}</span><span class="rank-body"><strong><span class="visually-hidden">${isEnglish() ? `No. ${index + 1}: ` : `${index + 1}位：`}</span>${article.title}</strong><small>${article.label} · ${formatDate(article.date)}</small></span></button></li>`;
  }).join('');
  for (const tab of rankTabs) {
    const selected = tab.dataset.rank === activeRanking;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-pressed', String(selected));
  }
}
rankTabs.forEach(tab => tab.addEventListener('click', () => { activeRanking = tab.dataset.rank; renderRanking(); }));

const archiveOpen = new Set();
const archiveExpanded = new Set();
const ARCHIVE_MONTH_LIMIT = 8;
let archiveInitialised = false;
function renderArchive() {
  const en = isEnglish();
  const container = document.getElementById('archive-list');
  container.querySelectorAll('details').forEach(d => { if (d.open) archiveOpen.add(d.dataset.month); else archiveOpen.delete(d.dataset.month); });
  const entries = [
    ...ARTICLES.filter(a => a.status !== 'guide').map(a => ({ date: a.date, category: a.category, id: a.id, title: (en ? a.en : a.ja).title })),
    ...ARCHIVE_EXTRA.map(x => ({ date: x.date, category: x.category, title: en ? x.en : x.ja, url: x.source[2], sourceName: en ? x.source[1] : x.source[0] }))
  ].sort((a, b) => b.date.localeCompare(a.date));
  const months = [];
  for (const entry of entries) {
    const key = entry.date.slice(0, 7);
    let group = months.find(g => g.key === key);
    if (!group) { group = { key, items: [] }; months.push(group); }
    group.items.push(entry);
  }
  if (!archiveInitialised) { months.slice(0, 1).forEach(g => archiveOpen.add(g.key)); archiveInitialised = true; }
  container.innerHTML = months.map(group => {
    const [y, m] = group.key.split('-').map(Number);
    const heading = en ? new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' }) : `${y}年${m}月`;
    const expanded = archiveExpanded.has(group.key) || group.items.length <= ARCHIVE_MONTH_LIMIT + 2;
    const shown = expanded ? group.items : group.items.slice(0, ARCHIVE_MONTH_LIMIT);
    const rest = group.items.length - shown.length;
    const items = shown.map(item => {
      const day = item.date.length > 7 ? formatDate(item.date, true) : (en ? 'Month' : '月内');
      const main = item.id
        ? `<button type="button" class="archive-link" data-open-article="${item.id}">${item.title}</button>`
        : `<a class="archive-link" href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer">${item.title} <span aria-hidden="true">↗</span><span class="visually-hidden">${en ? EN_UI.externalLink : '（新しいタブで開きます）'}</span></a><small class="archive-src">${item.sourceName}</small>`;
      return `<li class="archive-item"><span class="archive-date">${day}</span><span class="archive-main"><span class="archive-chip" data-category="${item.category}">${categoryLabel(item.category)}</span>${main}</span></li>`;
    }).join('') + (rest ? `<li class="archive-more-wrap"><button type="button" class="archive-more" data-archive-more="${group.key}">${en ? `Show ${rest} more` : `残り${rest}件を表示`}</button></li>` : '');
    return `<details class="archive-month" data-month="${group.key}"${archiveOpen.has(group.key) ? ' open' : ''}><summary><span>${heading}</span><small>${en ? EN_UI.items(group.items.length) : `${group.items.length}件`}</small></summary><ul>${items}</ul></details>`;
  }).join('');
}

document.getElementById('archive-list').addEventListener('click', event => {
  const more = event.target.closest('[data-archive-more]');
  if (!more) return;
  const key = more.dataset.archiveMore;
  archiveExpanded.add(key);
  renderArchive();
  const links = document.querySelectorAll(`.archive-month[data-month="${key}"] .archive-link`);
  links[ARCHIVE_MONTH_LIMIT]?.focus();
});

const grid = document.getElementById('news-grid');
const search = document.getElementById('news-search');
const filters = [...document.querySelectorAll('[data-filter]')];
let activeFilter = 'all';
let showAllArticles = false;
const INITIAL_ARTICLE_COUNT = 6;
const moreButton = document.getElementById('news-more');

function renderArticles() {
  const q = search.value.trim().toLocaleLowerCase('ja');
  const matches = ARTICLES.map(localizedArticle)
    .sort((a, b) => (a.status === 'guide') - (b.status === 'guide') || b.date.localeCompare(a.date))
    .filter(article => {
      const categoryMatches = activeFilter === 'all' || activeFilter === article.category;
      const queryMatches = !q || [article.title, article.excerpt, article.label, article.intro].some(text => text.toLocaleLowerCase('ja').includes(q));
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
      <div class="news-art" data-art="${article.artStyle}"><span class="art-symbol">${article.art}</span><span class="art-corner">${article.status === 'guide' ? 'BASICS' : 'NEWS / 2026'}</span></div>
      <div class="news-body"><div class="card-topline"><span class="category-chip">${article.label}</span>${statusChip(article)}<span class="card-date">${formatDate(article.date)}</span></div>
      <h3>${article.title}</h3><p>${article.excerpt}</p><p class="card-source">${sourceSummary(article)}</p>
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
document.addEventListener('click', event => {
  const link = event.target.closest('[data-go-filter]');
  if (!link) return;
  search.value = '';
  setFilter(link.dataset.goFilter);
});

const articleDialog = document.getElementById('article-dialog');
const routeDialog = document.getElementById('route-dialog');
let openArticleId = null;
let openRouteType = null;
function openArticle(id) {
  const article = findArticle(id);
  if (!article) return;
  const en = isEnglish();
  const guide = article.status === 'guide';
  openArticleId = id;
  const points = article.points ? `<ul class="guide-points">${article.points.map(p => `<li>${p}</li>`).join('')}</ul>` : '';
  const sources = article.sourceList.map(s => `<li><a href="${escapeAttr(s.url)}" target="_blank" rel="noopener noreferrer">${s.name} <span aria-hidden="true">↗</span><span class="visually-hidden">${en ? EN_UI.externalLink : '（新しいタブで開きます）'}</span></a></li>`).join('');
  document.getElementById('dialog-content').innerHTML = `
    <span class="dialog-eyebrow">${article.label} / ${guide ? (en ? EN_UI.guideBrief : '基礎解説') : (en ? EN_UI.newsBrief : 'ニュース解説')}</span>
    <div class="dialog-meta">${statusChip(article)}<span>${formatDate(article.date)} · ${readingTime(article)}</span></div><h2 id="dialog-title">${article.title}</h2>
    <p>${article.intro}</p>${points}
    <h3>${guide ? (en ? EN_UI.guideImpact : 'はじめ方のヒント') : (en ? EN_UI.impactTitle : 'あなたへの影響')}</h3>
    <div class="impact-grid">
      <div class="impact-card"><span>${en ? EN_UI.impactPersonal : '個人への影響'}</span><p>${article.impactPersonal}</p><button type="button" class="text-button" data-route-info="personal">${en ? EN_UI.personalLink : '個人向けNICOの案内'} <span aria-hidden="true">↗</span></button></div>
      <div class="impact-card"><span>${en ? EN_UI.impactBusiness : '法人への影響'}</span><p>${article.impactBusiness}</p><button type="button" class="text-button" data-route-info="business">${en ? EN_UI.businessLink : '法人向けNICOの案内'} <span aria-hidden="true">↗</span></button></div>
    </div>
    <h3>${guide ? (en ? EN_UI.guideMore : 'もう一歩深く') : (en ? EN_UI.practicalExample : '経済の視点で読む')}</h3><p>${article.example}</p>
    <h3>${en ? EN_UI.caution : '読むときの注意点'}</h3><p>${article.caution}</p>
    <h3>${guide ? (en ? EN_UI.guideSources : '参考リンク') : (en ? EN_UI.sources : '出典')}</h3><ul class="source-list">${sources}</ul><p><small class="source-note">${en ? EN_UI.sourceNote : '外部サイトに移動します。日本経済新聞など一部は会員限定の記事です。'}</small></p>
    <div class="dialog-tip"><strong>${en ? EN_UI.nicoConnection : 'NICOとのつながり'}</strong><p>${en ? EN_UI.nicoBody : 'NICOは、こうした変化を個人や中小企業が生かせるよう、業務効率化ツールやパーソナルAIエージェントを開発中です。機能の公開・利用可否は確約するものではありません。'}</p></div>
    <p class="dialog-subtext">${guide ? (en ? EN_UI.guideNote : '本記事は、AIの基本を解説する編集部のオリジナル記事です（2026年11月時点）。') : (en ? EN_UI.articleNote : '本記事は、公開された報道・公式発表をもとに編集部が要約したものです。数値・日付は各出典の公表時点のものです。')}</p>`;
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
  renderRanking();
  renderArchive();
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
renderRanking();
renderArchive();
renderArticles();
document.documentElement.classList.remove('i18n-pending');
