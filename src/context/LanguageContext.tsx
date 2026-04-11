import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'nav.research': { en: 'Research', ja: '過去の研究一覧' },
  'nav.people': { en: 'People', ja: '研究室の人々' },
  'nav.publications': { en: 'Publications', ja: '論文・発表' },
  'nav.shub': { en: 'S-Hub', ja: 'S-Hub' },
  'nav.join': { en: 'Join us', ja: '研究室紹介' },
  'nav.contact': { en: 'Contact', ja: 'アクセス' },
  'footer.desc': { 
    en: 'Bridging the gap between massive information sources and human processing capabilities through intelligent interfaces.', 
    ja: '大規模化する情報源と人間の情報処理能力の間のギャップを解決し、情報をより高度に、便利に利用するためのインタフェースの研究を進めています。' 
  },
  'footer.nav': { en: 'Navigation', ja: 'ナビゲーション' },
  'footer.contact': { en: 'Contact', ja: '連絡先' },
  'footer.address.1': { en: 'Tokyo Metropolitan University', ja: '東京都立大学' },
  'footer.address.2': { en: '6-6 Asahigaoka, Hino,', ja: '〒191-0065 東京都日野市' },
  'footer.address.3': { en: 'Tokyo 191-0065, Japan', ja: '旭が丘6-6' },
  'footer.rights': { en: 'All rights reserved.', ja: '無断複写・転載を禁じます。' },
  'footer.privacy': { en: 'Privacy Policy', ja: 'プライバシーポリシー' },
  'footer.terms': { en: 'Terms of Use', ja: '利用規約' },
  'home.intro.title': {
    en: 'Bridging the gap between massive information sources and human processing capabilities.',
    ja: '大規模化する情報源と、人間の情報処理能力の間のギャップを解決する。'
  },
  'home.intro.desc': {
    en: 'As represented by the Web, large-scale and dynamic information sources have become available. Moreover, this information is very familiar, available to anyone, anytime, anywhere. It is only recently (about 20 years) that such information sources have appeared, but they have rapidly spread and grown in scale. They will continue to develop even more in the future. On the other hand, what about the humans who use them? Human information processing capabilities have not changed much since ancient times. In other words, the gap between the growing scale of information sources and human information processing capabilities is only getting wider. In order to resolve this gap and utilize information more advancedly and conveniently, we are conducting research from the perspective that the "mediator" = interface between information sources and humans is important.',
    ja: 'Webに代表されるように，大規模かつダイナミックな情報源が利用可能になっています． しかも，それらの情報は誰でも，いつでも，どこでも利用可能な，とても身近なものです． このような情報源が現れたのは，ほんの最近（20年程度）のことですが，あっというまに普及・大規模化しました． 今後もますます発展していくことでしょう． 一方，それらを利用する側の人間はどうでしょうか．人間の情報処理能力は，昔からそれほど大きくは変わっていないでしょう． つまり，大規模化する情報源と，人間の情報処理能力の間のギャップは大きくなるばかりです． このギャップを解決し，情報をより高度に，便利に利用するためには，情報源と人間の「仲介役」＝インタフェースが重要であるとの観点から，研究を進めています．'
  },
  'home.intro.btn': { en: 'Learn More', ja: '詳しく見る' },
  'home.study.title': { en: 'Study at TMU', ja: '東京都立大学で学ぶ' },
  'home.study.desc': {
    en: 'Join a world-class research environment where academic rigor meets industrial innovation at Tokyo Metropolitan University.',
    ja: '東京都立大学で、学術的な厳密さと産業界の革新が融合する世界クラスの研究環境に参加しませんか。'
  },
  'home.study.btn': { en: 'Explore Admissions', ja: '入学案内を見る' },
  'home.latest.title': { en: 'LATEST', ja: '最新情報' },
  'home.latest.subtitle': { en: 'Research & Updates', ja: '研究とアップデート' },
  'home.hero.subtitle': { en: 'Advancing Artificial Intelligence through Structural Precision.', ja: '構造的精度による人工知能の進化。' },
  'home.hero.scroll': { en: 'Scroll', ja: 'スクロール' },
  'home.news.1.title': { en: 'New Publication', ja: '新規論文' },
  'home.news.1.desc': { en: 'Structural mapping in neural architectures for sparse data representation.', ja: 'スパースデータ表現のためのニューラルアーキテクチャにおける構造マッピング。' },
  'home.news.2.title': { en: 'Recognition', ja: '表彰' },
  'home.news.2.desc': { en: 'Takama Lab receives the Excellence in AI Structure Award 2024.', ja: '高間研究室が2024年度AI構造優秀賞を受賞しました。' },
  'home.news.3.title': { en: 'Focus Project', ja: '注目プロジェクト' },
  'home.news.3.desc': { en: 'Optimizing multi-agent coordination through topological constraints.', ja: 'トポロジー制約を通じたマルチエージェント協調の最適化。' },
  'home.news.4.title': { en: 'Global Network', ja: 'グローバルネットワーク' },
  'home.news.4.desc': { en: 'Expanding our collaborative infrastructure to Europe and North America.', ja: 'ヨーロッパおよび北米への共同インフラストラクチャの拡大。' },
  'home.read_more': { en: 'Read More', ja: '続きを読む' },
  
  // Research Page
  'research.title': { en: 'RESEARCH', ja: '研究内容' },
  'research.subtitle': { en: 'Pioneering the intersection of algorithmic intelligence and visual discovery.', ja: 'アルゴリズム的知能と視覚的発見の交差点を切り拓く。' },
  'research.public.title': { en: 'Public Datasets\nSoftware\nDemonstrations\nDocs', ja: '公開データセット\nソフトウェア\nデモンストレーション\nドキュメント' },
  'research.public.desc': { en: 'Our laboratory commits to open science. We provide comprehensive access to our proprietary datasets, visualization toolkits, and technical documentation to foster global academic collaboration and industrial innovation. Explore our open-source contributions designed for high-performance computing environments.', ja: '当研究室はオープンサイエンスに取り組んでいます。学術的なコラボレーションと産業界の革新を促進するため、独自のデータセット、可視化ツールキット、技術ドキュメントへの包括的なアクセスを提供しています。' },
  'research.public.btn': { en: 'View Repository', ja: 'リポジトリを見る' },
  'research.areas.title': { en: 'Research Areas', ja: '研究分野' },
  'research.area.1.title': { en: 'Web Intelligence', ja: 'Webインテリジェンス' },
  'research.area.1.desc': { en: 'Investigating the structural evolution of hyperlinked environments and the semantic mapping of user behavior across decentralized networks. This project utilizes deep learning to predict information flow and optimize search relevance in real-time.', ja: 'ハイパーリンク環境の構造的進化と、分散ネットワーク全体でのユーザー行動の意味的マッピングを調査します。このプロジェクトでは、ディープラーニングを利用して情報の流れを予測し、検索の関連性をリアルタイムで最適化します。' },
  'research.area.2.title': { en: 'Information Visualization System', ja: '情報可視化システム' },
  'research.area.2.desc': { en: 'Architecting multi-dimensional visual frameworks for high-density geographic data. Our system enables intuitive navigation through petabytes of spatial-temporal information, reducing cognitive load for analysts in mission-critical environments.', ja: '高密度地理データのための多次元視覚フレームワークを構築します。私たちのシステムは、ペタバイト級の時空間情報を通じた直感的なナビゲーションを可能にし、ミッションクリティカルな環境におけるアナリストの認知的負荷を軽減します。' },
  'research.area.3.title': { en: 'Neural Interface Optimization', ja: 'ニューラルインターフェース最適化' },
  'research.area.3.desc': { en: 'Refining the latency between human cognitive input and digital execution through novel neural bridging protocols. This research aims to eliminate the friction in human-computer interaction for specialized creative workflows.', ja: '斬新なニューラルブリッジングプロトコルを通じて、人間の認知的入力とデジタル実行の間の遅延を改善します。この研究は、専門的なクリエイティブワークフローにおけるヒューマンコンピュータインタラクションの摩擦を排除することを目指しています。' },
  'research.areas.list.1': { en: 'Semantic Web', ja: 'セマンティックWeb' },
  'research.areas.list.2': { en: 'Data Mining', ja: 'データマイニング' },
  'research.areas.list.3': { en: 'Human Interface', ja: 'ヒューマンインターフェース' },
  'research.areas.list.4': { en: 'Information Retrieval', ja: '情報検索' },
  'research.areas.list.5': { en: 'Visual Analytics', ja: 'ビジュアルアナリティクス' },
  'research.areas.list.6': { en: 'Network Science', ja: 'ネットワークサイエンス' },
  'research.areas.join': { en: 'Join The Lab', ja: '研究室に参加する' },
  'research.areas.join.desc': { en: 'We are currently seeking Ph.D. candidates for the 2025 cohort. Apply before December.', ja: '現在、2025年度の博士課程候補者を募集しています。12月までにご応募ください。' },
  'research.areas.join.btn': { en: 'Admission Details', ja: '入学案内' },
  'research.learn_more': { en: 'Learn More', ja: '詳しく見る' },

  // People Page
  'people.title': { en: 'LAB MEMBERS', ja: 'メンバー' },
  'people.subtitle': { en: 'The Takama Laboratory brings together diverse minds focused on the intersection of human-computer interaction and intelligence informatics.', ja: '高間研究室には、ヒューマンコンピュータインタラクションと知能情報学の交差点に焦点を当てた多様な人材が集まっています。' },
  'people.director': { en: 'Director', ja: '指導教員' },
  'people.director.name': { en: 'Prof. Yasufumi Takama', ja: '高間 康史 教授' },
  'people.director.desc': { en: 'Specializing in Intelligence Informatics, User Interface, and Web Intelligence. Professor Takama leads the laboratory with a vision for seamless human-machine synergy.', ja: '知能情報学、ユーザインタフェース、Webインテリジェンスを専門としています。高間教授は、人間と機械のシームレスな相乗効果を目指して研究室を率いています。' },
  'people.staff': { en: 'Staff', ja: 'スタッフ' },
  'people.d3': { en: 'Doctor Course', ja: '博士後期課程' },
  'people.m2': { en: 'Master Course', ja: '博士前期課程' },
  'people.b4': { en: 'Undergraduate', ja: '学部生' },
  'people.researcher': { en: 'Research Students', ja: '研究生' },
  'people.alumni.title': { en: 'Alumni Archive', ja: '卒業生アーカイブ' },
  'people.alumni.desc': { en: 'Since 2020, over 50 graduates have moved on to significant roles in academia and leading tech organizations across the globe.', ja: '2020年以降、50名以上の卒業生が世界中の学術界や主要なテクノロジー企業で重要な役割を果たしています。' },

  // Publications Page
  'pub.title': { en: 'PUBLICATIONS', ja: '論文・発表' },
  'pub.subtitle': { en: 'A comprehensive record of scientific contributions, award-winning research, and international academic dialogues.', ja: '科学的貢献、受賞歴のある研究、および国際的な学術対話の包括的な記録。' },
  'pub.category': { en: 'Category', ja: 'カテゴリー' },
  'pub.featured': { en: 'Featured Recognition', ja: '注目の表彰' },
  'pub.featured.title': { en: 'Excellence in Computational Intelligence Award', ja: '計算知能優秀賞' },
  'pub.featured.desc': { en: 'Takama Laboratory has been recognized for pioneering work in human-computer interaction models, receiving the prestigious annual award for academic excellence and industrial impact.', ja: '高間研究室は、ヒューマンコンピュータインタラクションモデルにおける先駆的な研究が認められ、学術的卓越性と産業的影響に対する権威ある年次賞を受賞しました。' },
  'pub.award.placeholder': { en: 'Award Ceremony Placeholder', ja: '授賞式プレースホルダー' },
  'pub.awards': { en: 'AWARDS', ja: '受賞' },
  'pub.japanese': { en: 'JAPANESE PUBLICATIONS', ja: '国内論文' },
  'pub.journals': { en: 'JOURNAL PAPERS', ja: '学術論文' },
  'pub.conferences': { en: 'INTERNATIONAL CONFERENCES', ja: '国際会議' },
  'pub.books': { en: 'BOOKS', ja: '著書' },
  'pub.tech': { en: 'TECHNICAL REPORTS', ja: 'テクニカルレポート' },

  // SHub Page
  'shub.title': { en: 'S-Hub', ja: 'S-Hub' },
  'shub.subtitle': {  en: 'S-Hub is the internal academic hub powering Takama Laboratory\'s knowledge exchange. It centralizes research seminars, technical workshops, lecture schedules, and event communications to ensure seamless collaboration across the lab.', ja: '高間研究室の内部知識インフラストラクチャ。研究ゼミ、講義資料、共有技術リソースを一元化しています。' },
  'shub.nav': { en: 'Navigation', ja: 'ナビゲーション' },
  'shub.access': { en: 'Access Status', ja: 'アクセス状況' },
  'shub.access.desc': { en: 'Restricted to lab members. Please use institutional credentials.', ja: '研究室メンバー限定。機関の認証情報を使用してください。' },
  'shub.seminars': { en: 'SEMINARS', ja: 'ゼミ' },
  'shub.lectures': { en: 'LECTURES', ja: '講義' },
  'shub.status': { en: 'Access Status', ja: 'アクセス状況' },
  'shub.restricted': { en: 'Access to internal resources is restricted to current laboratory members.', ja: '内部リソースへのアクセスは、現在の研究室メンバーに制限されています。' },
  'shub.seminar.1.title': { en: 'Research seminar', ja: '研究ゼミ' },
  'shub.seminar.1.desc': { en: 'Weekly progress reports and deep dives into ongoing thesis work and upcoming conference submissions.', ja: '毎週の進捗報告と、進行中の論文作業および今後の会議への提出に関する詳細な議論。' },
  'shub.seminar.2.title': { en: 'Paper Reading', ja: '論文輪講' },
  'shub.seminar.2.desc': { en: 'Analysis of state-of-the-art publications from top-tier venues including NeurIPS, ICML, and SIGIR.', ja: 'NeurIPS、ICML、SIGIRなどのトップティアの会議からの最先端の出版物の分析。' },
  'shub.seminar.3.title': { en: 'Study group for Basics', ja: '基礎勉強会' },
  'shub.seminar.3.desc': { en: 'Foundational sessions for new lab members covering information retrieval and data mining theory.', ja: '情報検索とデータマイニング理論をカバーする、新しい研究室メンバー向けの基礎セッション。' },
  'shub.seminar.4.title': { en: 'Study group for Programming', ja: 'プログラミング勉強会' },
  'shub.seminar.4.desc': { en: 'Technical workshops on PyTorch, distributed computing, and large-scale data processing pipelines.', ja: 'PyTorch、分散コンピューティング、および大規模データ処理パイプラインに関する技術ワークショップ。' },
  'shub.lecture.1.title': { en: 'Machine Learning', ja: '機械学習' },
  'shub.lecture.1.desc': { en: 'A comprehensive introduction to statistical learning theory, supervised and unsupervised paradigms, and deep neural network architectures with a focus on reproducibility and rigorous evaluation.', ja: '統計的学習理論、教師ありおよび教師なしパラダイム、および再現性と厳密な評価に焦点を当てたディープニューラルネットワークアーキテクチャの包括的な紹介。' },
  'shub.lecture.2.title': { en: 'Web Intelligence', ja: 'Webインテリジェンス' },
  'shub.lecture.2.desc': { en: 'Exploration of the semantic web, large-scale graph analysis, and the mechanisms of modern search engines and recommendation systems in the era of generative AI.', ja: 'セマンティックWeb、大規模グラフ分析、および生成AI時代の現代の検索エンジンと推薦システムのメカニズムの探求。' },

  // Join Us Page
  'join.title': { en: 'JOIN US.', ja: '研究室に参加する' },
  'join.subtitle': { en: 'Shape the future of interaction design and human-centric systems. We are looking for researchers who push the boundaries of technology and philosophy.', ja: 'インタラクションデザインと人間中心システムの未来を形作る。テクノロジーと哲学の境界を押し広げる研究者を求めています。' },
  'join.opportunities': { en: 'Opportunities', ja: '機会' },
  'join.resources': { en: 'Resources', ja: 'リソース' },
  'join.programs': { en: 'Programs', ja: 'プログラム' },
  'join.scholarships': { en: 'Scholarships', ja: '奨学金' },
  'join.apply': { en: 'How to Apply', ja: '応募方法' },
  'join.positions': { en: 'Open Positions', ja: '募集中のポジション' },
  'join.internships': { en: 'Internships', ja: 'インターンシップ' },
  'join.activities': { en: 'Laboratory Activities', ja: '研究室の活動' },
  'join.environment': { en: 'Research Environment', ja: '研究環境' },
  'join.programs.desc': { en: 'We offer comprehensive research programs for Master\'s and Doctoral candidates, focusing on Web Intelligence, Information Visualization, and Neural Interfaces.', ja: 'Webインテリジェンス、情報可視化、ニューラルインターフェースに焦点を当てた、修士および博士課程候補者向けの包括的な研究プログラムを提供しています。' },
  'join.master.desc': { en: 'A 2-year intensive research program designed to build foundational skills in intelligence informatics.', ja: '知能情報学の基礎スキルを構築するために設計された2年間の集中的な研究プログラム。' },
  'join.doctor.desc': { en: 'A 3-year advanced research journey aimed at producing world-class academic contributions.', ja: '世界クラスの学術的貢献を生み出すことを目的とした3年間の高度な研究の旅。' },
  'join.scholarships.desc': { en: 'Financial support is available for outstanding candidates through university grants, government scholarships (MEXT), and industry partnerships.', ja: '優秀な候補者には、大学の助成金、政府奨学金（MEXT）、および業界とのパートナーシップを通じて財政的支援が提供されます。' },
  'join.funding.btn': { en: 'View Funding Options', ja: '資金提供のオプションを見る' },
  'join.apply.desc': { en: 'Joining the Takama Laboratory requires a rigorous mindset and a passion for multidisciplinary research. We accept applications for Master\'s and Doctoral candidates through the central university portal, but strongly encourage prospective students to contact us directly beforehand.', ja: '高間研究室への参加には、厳格な考え方と学際的な研究への情熱が必要です。大学の中央ポータルを通じて修士および博士課程候補者の応募を受け付けていますが、事前に直接お問い合わせいただくことを強くお勧めします。' },
  'join.step1': { en: 'Step 1: Initial Inquiry', ja: 'ステップ1：最初のお問い合わせ' },
  'join.step1.desc': { en: 'Send your CV and a 500-word research proposal outlining your interests in relation to our current research themes.', ja: '履歴書と、現在の研究テーマに関連する関心を概説した500語の研究提案書をお送りください。' },
  'join.pos1.title': { en: 'Postdoctoral Researcher in Visual Analytics', ja: 'ビジュアルアナリティクスのポスドク研究員' },
  'join.pos1.desc': { en: 'Looking for a highly motivated researcher with a strong background in D3.js and large-scale data visualization.', ja: 'D3.jsと大規模データ可視化の強力なバックグラウンドを持つ、意欲的な研究者を探しています。' },
  'join.apply_now': { en: 'Apply Now', ja: '今すぐ応募する' },
  'join.pos2.title': { en: 'Research Assistant (Part-time)', ja: 'リサーチアシスタント（パートタイム）' },
  'join.pos2.desc': { en: 'Seeking a master\'s student to assist with data collection and preliminary analysis for our Web Intelligence project.', ja: 'Webインテリジェンスプロジェクトのデータ収集と予備分析を支援する修士課程の学生を募集しています。' },
  'join.internships.desc': { en: 'We offer summer internships for highly motivated undergraduate students. Experience cutting-edge research and contribute to ongoing projects.', ja: '意欲的な学部生向けにサマーインターンシップを提供しています。最先端の研究を体験し、進行中のプロジェクトに貢献してください。' },
  'join.internships.btn': { en: 'Internship Details', ja: 'インターンシップの詳細' },
  'join.activities.desc': { en: 'Our laboratory operates on a rhythm of intense collaboration and individual deep work. Weekly seminars, rapid prototyping sessions, and peer-review workshops form the core of our academic life.', ja: '私たちの研究室は、集中的なコラボレーションと個人の深い作業のリズムで運営されています。毎週のゼミ、ラピッドプロトタイピングセッション、査読ワークショップが私たちの学術生活の中核を形成しています。' },
  'join.environment.desc': { en: 'Located at the intersection of technology and human behavior, our facilities provide state-of-the-art equipment for motion capture, eye-tracking, and high-fidelity sensory simulation.', ja: 'テクノロジーと人間の行動の交差点に位置する私たちの施設は、モーションキャプチャ、アイトラッキング、高忠実度の感覚シミュレーションのための最先端の機器を提供しています。' },
  'join.commitment.desc': { en: 'The Takama Laboratory is committed to an inclusive and diverse research environment. We believe that breakthroughs occur when varied perspectives collide. We offer full scholarship support for qualifying international candidates and provide a comprehensive onboarding program.', ja: '高間研究室は、包括的で多様な研究環境に取り組んでいます。多様な視点が衝突するときにブレークスルーが起こると信じています。資格のある留学生には全額奨学金サポートを提供し、包括的なオンボーディングプログラムを提供しています。' },
  'join.master': { en: 'Master\'s Program', ja: '修士課程' },
  'join.doctor': { en: 'Doctoral Program', ja: '博士課程' },
  'join.how_to_apply': { en: 'How to Apply', ja: '応募方法' },
  'join.open_positions': { en: 'Open Positions', ja: '募集中のポジション' },

  // Contact Page
  'contact.title': { en: 'CONTACT', ja: 'アクセス' },
  'contact.access': { en: 'ACCESS / POSTAL ADDRESS', ja: 'アクセス / 郵便宛先' },
  'contact.inquiries': { en: 'For visiting researchers and academic inquiries.', ja: '訪問研究者および学術的なお問い合わせについて。' },
  'contact.note': { en: 'Note on Operations', ja: '運営に関する注意事項' },
  'contact.note.desc': { en: 'Takama Laboratory currently operates under a hybrid model. Staff and researchers may be teleworking. Please confirm appointments at least 48 hours in advance.', ja: '高間研究室は現在ハイブリッドモデルで運営されています。スタッフや研究者はテレワークを行っている場合があります。アポイントメントは少なくとも48時間前までにご確認ください。' },
  'contact.location': { en: 'Location 01', ja: '所在地 01' },
  'contact.access_title': { en: 'ACCESS', ja: 'アクセス' },
  'contact.train': { en: 'By Train', ja: '電車でのアクセス' },
  'contact.train.desc': { en: '20-minute walk from Toyoda Station (JR Chuo Line). Or take a bus bound for "Hira-yama Kogyo Danchi Junkan" and get off at "Asahigaoka Chuo Koen".', ja: 'JR中央線「豊田駅」から徒歩20分。または「平山工業団地循環」行きのバスに乗り、「旭が丘中央公園」で下車。' },
  'contact.road': { en: 'By Road', ja: '車でのアクセス' },
  'contact.road.desc': { en: 'Enter via the Main Gate. Visitor parking is available with prior registration at the security desk.', ja: '正門からお入りください。事前の登録により、来客用駐車場をご利用いただけます。' },
  'contact.directions': { en: 'Get Directions', ja: '経路を取得' },
  'contact.mailing': { en: 'Mailing 02', ja: '郵送 02' },
  'contact.postal': { en: 'POSTAL ADDRESS', ja: '郵便宛先' },
  'contact.email': { en: 'Email', ja: 'メール' },
  'contact.hino': { en: 'HINO CAMPUS.', ja: '日野キャンパス' },
  'contact.tmu': { en: 'TOKYO METROPOLITAN UNIVERSITY', ja: '東京都立大学' },
  'contact.env': { en: 'Environment', ja: '環境' },
  'contact.context': { en: 'Context', ja: 'コンテキスト' },
  'contact.facility': { en: 'Facility', ja: '施設' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
