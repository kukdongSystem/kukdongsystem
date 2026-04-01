import { Language } from '@/contexts/LanguageContext';

type Translations = {
  [key: string]: Record<Language, string>;
};

export const dict: Translations = {
  navAbout: { ko: '회사소개', en: 'About Us', zh: '关于我们', ja: '会社案内', de: 'Über uns' },
  navServices: { ko: '기술분야', en: 'Tech Specs', zh: '技术领域', ja: '技術分野', de: 'Technik' },
  navPortfolio: { ko: '포트폴리오', en: 'Portfolio', zh: '成功案例', ja: 'ポートフォリオ', de: 'Portfolio' },
  navContact: { ko: '문의하기', en: 'Contact', zh: '联系我们', ja: 'お問い合わせ', de: 'Kontakt' },
  navConsult: { ko: '상담 신청', en: 'Request Consult', zh: '申请咨询', ja: 'ご相談', de: 'Beratung anfordern' },

  footerRights: { 
    ko: '© 2026 KUKDONG SYSTEM All Rights Reserved.', 
    en: '© 2026 KUKDONG SYSTEM All Rights Reserved.', 
    zh: '© 2026 KUKDONG SYSTEM 保留所有权利。', 
    ja: '© 2026 KUKDONG SYSTEM All Rights Reserved.', 
    de: '© 2026 KUKDONG SYSTEM Alle Rechte vorbehalten.' 
  },
  footerAdmin: { ko: 'Admin Login', en: 'Admin Login', zh: '管理员登录', ja: '管理者ログイン', de: 'Admin-Login' },
  footerAddress: { 
    ko: '경기도 안산시 단원구 산단로 326 안산유통상가 19동 104호', 
    en: '104, 19, Sandan-ro 326, Danwon-gu, Ansan-si, Gyeonggi-do',
    zh: '京畿道安山市檀园区产团路326 安山流通商街19栋104号',
    ja: '京畿道安山市檀園区産団路326 安山流通商店街19棟104号',
    de: '104, 19, Sandan-ro 326, Danwon-gu, Ansan-si, Gyeonggi-do'
  },

  heroSubtitle1: { ko: 'STANDARD OF AUTOMATION', en: 'STANDARD OF AUTOMATION', zh: '自动化的标准', ja: '自動化の基準', de: 'STANDARD DER AUTOMATISIERUNG' },
  heroSubtitle2: { ko: 'TECHNICAL EXCELLENCE', en: 'TECHNICAL EXCELLENCE', zh: '技术卓越', ja: '技術の卓越性', de: 'TECHNISCHE EXZELLENZ' },
  heroSubtitle3: { ko: 'RELIABILITY & SUPPORT', en: 'RELIABILITY & SUPPORT', zh: '可靠性与支持', ja: '信頼性とサポート', de: 'ZUVERLÄSSIGKEIT & SUPPORT' },

  heroTitle1: { 
    ko: '공장 자동화의\n새로운 표준', 
    en: 'The New Standard\nin Factory Automation',
    zh: '工厂自动化的\n新标准',
    ja: '工場自動化の\n新しい標準',
    de: 'Der neue Standard\nder Fabrikautomation'
  },
  heroTitle2: { 
    ko: '최고의 기술력,\n최적의 솔루션', 
    en: 'Top Technology,\nOptimal Solutions',
    zh: '顶尖技术，\n最佳解决方案',
    ja: '最高の技術力、\n最適なソリューション',
    de: 'Spitzentechnologie,\nOptimale Lösungen'
  },
  heroTitle3: { 
    ko: '24시간 멈추지 않는\n스마트 팩토리', 
    en: '24/7 Non-Stop\nSmart Factory',
    zh: '24小时不间断的\n智能工厂',
    ja: '24時間止まらない\nスマートファクトリー',
    de: '24/7 ununterbrochene\nSmart Factory'
  },

  heroDesc1: { 
    ko: '극동계전은 최첨단 PLC, HMI, SCADA 솔루션을 통해 고효율 자동 제어 시스템을 구축합니다.\n고객사의 생산 효율을 극대화하는 맞춤형 제어 솔루션을 제공합니다.', 
    en: 'KUKDONG SYSTEM builds high-efficiency automated control systems with cutting-edge PLC, HMI, and SCADA solutions.\nWe provide customized control solutions to maximize your production efficiency.',
    zh: '极东计电通过尖端的PLC、HMI、SCADA解决方案构建高效自动化控制系统。\n我们提供定制化控制方案，助您实现生产效率最大化。',
    ja: '極東計電は最先端のPLC、HMI、SCADAソリューションを通じて高効率な自動制御システムを構築します。\nお客様の生産効率を最大化するカスタマイズ制御ソリューションを提供します。',
    de: 'KUKDONG SYSTEM baut hocheffiziente automatische Steuerungssysteme mit modernsten PLC-, HMI- und SCADA-Lösungen.\nWir bieten maßgeschneiderte Lösungen zur Maximierung Ihrer Produktionseffizienz.'
  },
  heroDesc2: { 
    ko: '다양한 산업 현장의 니즈에 맞춘 정확하고 안정적인 자동제어 시스템.\n기반 시설부터 복잡한 공정까지 극동계전이 책임집니다.', 
    en: 'Accurate and stable automated control systems tailored to various industrial needs.\nFrom infrastructure to complex processes, KUKDONG SYSTEM has you covered.',
    zh: '精确且稳定的自动化控制系统，满足各类工业现场的需求。\n从基础设施到复杂工艺，极东计电为您保驾护航。',
    ja: '多様な産業現場のニーズに合わせた正確で安定した自動制御システム。\nインフラから複雑な工程まで極東計電が責任を持ちます。',
    de: 'Genaue und stabile automatische Steuerungssysteme, zugeschnitten auf industrielle Anforderungen.\nVon der Infrastruktur bis zu komplexen Prozessen sind Sie bei KUKDONG SYSTEM richtig.'
  },
  heroDesc3: { 
    ko: '실시간 모니터링 및 원격 제어로 공장의 다운타임을 최소화합니다.\n초연결 스마트 팩토리 시대를 극동계전과 함께 완성하세요.', 
    en: 'Minimize factory downtime with real-time monitoring and remote control.\nComplete the era of hyper-connected smart factories with KUKDONG SYSTEM.',
    zh: '通过实时监控和远程控制，将工厂停机时间降至最低。\n与极东计电共同迎接超连接的智能工厂时代。',
    ja: 'リアルタイムのモニタリングと遠隔制御で工場のダウンタイムを最小化します。\n超連結スマートファクトリー時代を極東計電と共に完成させてください。',
    de: 'Minimieren Sie die Ausfallzeiten in der Fabrik durch Echtzeitüberwachung und Fernsteuerung.\nWillkommen im Zeitalter der vernetzten Smart Factories mit KUKDONG SYSTEM.'
  },

  heroBtnPortfolio: { ko: '포트폴리오 보기', en: 'View Portfolio', zh: '查看成功案例', ja: 'ポートフォリオを見る', de: 'Portfolio ansehen' },
  heroBtnContact: { ko: '문의 상담', en: 'Contact Us', zh: '咨询我们', ja: 'お問い合わせ', de: 'Kontaktieren Sie uns' },

  aboutTitle1: { ko: 'KUKDONG SYSTEM', en: 'KUKDONG SYSTEM', zh: 'KUKDONG SYSTEM', ja: 'KUKDONG SYSTEM', de: 'KUKDONG SYSTEM' },
  aboutTitle2: { 
    ko: '극동계전은 안정적이고 혁신적인 자동화 파트너입니다', 
    en: 'KUKDONG SYSTEM is your stable and innovative automation partner',
    zh: '极东计电是您稳定创新的自动化合作伙伴',
    ja: '極東計電は安定して革新的な自動化パートナーです',
    de: 'KUKDONG SYSTEM ist Ihr stabiler und bewährter Automatisierungspartner'
  },
  aboutDesc1: { 
    ko: '15년 이상의 풍부한 산업 현장 경험과 노하우를 바탕으로, 단순한 기계 제어를 넘어 전체 공장의 운영 효율성을 높이는 지능형 통합 자동화 솔루션을 제공합니다.', 
    en: 'Based on over 15 years of rich industrial field experience and know-how, we provide an intelligent integrated automation solution that increases operational efficiency of the entire factory, going beyond simple machine control.',
    zh: '基于超过15年的丰富工业现场经验与诀窍，我们提供超越简单机器控制的智能集成自动化解决方案，以提升整个工厂的运营效率。',
    ja: '15年以上の豊富な産業現場の経験とノウハウに基づき、単なる機械制御を超えて工場全体の運営効率を高めるインテリジェントな統合自動化ソリューションを提供します。',
    de: 'Basierend auf über 15 Jahren Erfahrung in der Industrie bieten wir eine intelligente, integrierte Automatisierungslösung, die die Betriebseffizienz der gesamten Fabrik weit über die einfache Maschinensteuerung hinaus steigert.'
  },
  aboutDesc2: { 
    ko: 'PLC, HMI 프로그래밍부터 SCADA 통합 감시, 인버터 및 서보 제어, 그리고 제어반(Panel) 설계 및 제작까지 자동화에 필요한 모든 A to Z를 수행합니다. 고객의 환경을 분석하여 최적의 부품 선정과 완벽한 시스템을 구축하는 것이 우리의 목표입니다.', 
    en: 'From PLC and HMI programming to SCADA integrated monitoring, inverter and servo control, and control panel design and production, we handle everything A to Z in automation. Our goal is to analyze your environment to select the optimal components and build perfect systems.',
    zh: '从PLC、HMI编程到SCADA综合监控、变频器及伺服控制，再到控制柜设计制作，我们包揽自动化的所有环节。我们的目标是分析客户环境，量身定制最佳系统。',
    ja: 'PLC、HMIプログラミングからSCADA統合監視、インバータ・サーボ制御、さらに制御盤の設計と製作まで自動化のA to Zを全て遂行します。お客様の環境を分析し、最適なシステムを構築することが私たちの目標です。',
    de: 'Von der PLC- und HMI-Programmierung bis hin zur SCADA-Überwachung, Antriebstechnik sowie dem Design von Bedienfeldern übernehmen wir alles in der Automatisierung. Unser Ziel ist es, die optimalen Komponenten zu identifizieren und das perfekte System aufzubauen.'
  },

  aboutPoint1: { ko: '전문적인 엔지니어링', en: 'Professional Engineering', zh: '专业的工程技术', ja: '専門的なエンジニアリング', de: 'Professionelle Ingenieurskunst' },
  aboutPoint2: { ko: '맞춤형 솔루션 제공', en: 'Customized Solutions', zh: '定制化解决方案', ja: 'カスタマイズソリューション', de: 'Maßgeschneiderte Lösungen' },
  aboutPoint3: { ko: '철저한 사후 관리', en: 'Thorough Follow-up', zh: '周到的售后服务', ja: '徹底したアフターケア', de: 'Gründliche Nachbetreuung' },

  fieldsTitle: { ko: '주요 기술 분야', en: 'Core Tech Fields', zh: '核心技术领域', ja: '主要技術分野', de: 'Kernkompetenzen' },
  fieldsSubTitle: { ko: '다양한 산업 현장에서 검증된 최고의 자동 제어 기술력', en: 'Proven excellence in automated control systems across various industries', zh: '在各行各业经过验证的顶尖自动化控制技术实力', ja: '多様な産業現場で検証された最高の自動制御技術力', de: 'Bewährte Spitzenleistung in automatischen Steuerungssystemen in verschiedenen Branchen' },

  field1: { ko: 'PLC 프로그래밍', en: 'PLC Programming', zh: 'PLC编程', ja: 'PLCプログラミング', de: 'SPS-Programmierung' },
  field1Desc: { ko: 'LS, Mitsubishi, Omron, Siemens 등 다양한 제조사의 PLC 스펙에 맞춘 최적화된 로직 설계 및 코딩', en: 'Optimized logic design and coding tailored to various manufacturers like LS, Mitsubishi, Omron, Siemens', zh: '针对LS、三菱、欧姆龙、西门子等品牌的PLC进行优化的逻辑设计和编码', ja: 'LS、三菱、オムロン、シーメンス等多様なPLCにあわせた最適化ロジック設計', de: 'Optimale Logik und SPS-Entwicklung für Marken wie Siemens, Mitsubishi, LS etc.' },
  field2: { ko: 'HMI / 터치 패널 UI', en: 'HMI / Touch UI', zh: 'HMI / 触摸面板UI', ja: 'HMI/タッチパネルUI', de: 'HMI / Touch UI' },
  field2Desc: { ko: '조작이 직관적이고 현장 상황을 한눈에 파악할 수 있는 사용자 친화적 그래픽 인터페이스 화면 작화', en: 'User-friendly GUI design for intuitive operation and clear visibility of the factory floor', zh: '操作直观、一目了然的现场图形界面设计', ja: '操作が直感的で現場状況を一目で把握できるGUI設計', de: 'Benutzerfreundliches GUI-Design für eine intuitive Bedienung' },
  field3: { ko: 'SCADA 시스템 감시', en: 'SCADA Systems', zh: 'SCADA 监控系统', ja: 'SCADAシステム監視', de: 'SCADA-Systeme' },
  field3Desc: { ko: '공장 전체의 데이터를 실시간으로 수집, 모니터링하고 제어하는 상위 통합 관제 솔루션 구축', en: 'Real-time data collection, monitoring, and upper-level integrated control solutions for the whole plant', zh: '构建实时采集、监控并控制全厂数据的高级集成管制解决方案', ja: '工場全体のデータをリアルタイムに収集・自動監視する上位制御システムの構築', de: 'Datenerfassung und integrierte Steuerung des gesamten Werks' },
  field4: { ko: '인버터 & 서보 제어', en: 'Inverter & Servo', zh: '变频器与伺服控制', ja: 'インバータ＆サーボ制御', de: 'Frequenzumrichter & Servo' },
  field4Desc: { ko: '모터의 정밀한 속도, 토크, 위치 제어로 생산 정밀도를 높이고 에너지 효율을 개선하는 드라이브 제어', en: 'Precise drive control for speed, torque, and position, improving precision and energy efficiency', zh: '对电机进行精密的速度、扭矩及位置控制，提高生产精度', ja: 'モータの精密な速度、トルク、位置制御により生産精度を高める駆動制御', de: 'Präzise Antriebssteuerung zur Steigerung der Präzision und Energieeffizienz' },
  field5: { ko: '온도 및 공조 제어', en: 'HVAC Control', zh: '温度与HVAC控制', ja: '温度及び空調制御', de: 'Klima- und Temperaturregelung' },
  field5Desc: { ko: '클린룸, 항온항습기, 냉동창고 등 정밀한 온도 및 습도 유지를 위한 센서 동기화 PI/PID 제어', en: 'Sensor-synchronized PI/PID control for cleanrooms, specific humidity spaces, and more', zh: '针对洁净室等的恒温恒湿环境提供精准的PID同步控制', ja: 'クリーンルーム等の精密な温度・湿度維持のためのセンサー同期PID制御', de: 'Sensor-synchronisierte PID-Regelung für Reinräume und temperierte Lager' },
  field6: { ko: '제어반(Panel) 제작', en: 'Control Panels', zh: '控制柜制造', ja: '制御盤の製作', de: 'Schaltschrankbau' },
  field6Desc: { ko: '안전성, 발열, 노이즈를 고려한 체계적인 도면 설계 및 전기 판넬(MCC/PLC반) 조립 제작', en: 'Systematic drawing design and electrical panel assembly accounting for safety, heat, and noise', zh: '综合考虑安全、发热、噪音等因素的高标准电气控制柜（MCC/PLC盘）装配制造', ja: '安全性、発熱、ノイズを考慮した体系的な図面設計と電気パネル製作', de: 'Sorgfältige Konstruktion und Fertigung von Schaltschränken unter Einhaltung strenger Standards' },

  fieldFood: { ko: '식품기계 자동화', en: 'Food Processing', zh: '食品机械自动化', ja: '食品機械自動化', de: 'Lebensmittelverarbeitung' },
  fieldFoodDesc: { ko: 'HACCP 기준을 충족하는 위생적인 자동화 라인 및 식품 포장/충진 제어 솔루션.', en: 'Hygienic automated lines and packing control solutions meeting HACCP standards.', zh: '满足HACCP标准的卫生自动生产线和食品包装/填充控制解决方案。', ja: 'HACCP基準を満たす衛生的な自動化ラインおよび食品包装・充填制御ソリューション。', de: 'Hygienische automatische Anlagen und Verpackungslösungen gemäß HACCP-Standards.' },
  fieldTextile: { ko: '섬유기계 자동화', en: 'Textile Automation', zh: '纺织机械自动化', ja: '繊維機械自動化', de: 'Textilautomatisierung' },
  fieldTextileDesc: { ko: '연사기, 직기 등 섬유 생산 설비의 정밀 속도 제어 및 고품질 원단 생산 시스템.', en: 'Precision speed control for textile equipment such as twisters and looms, ensuring high fabric quality.', zh: '对捻线机、织机等纺织生产设备进行精确调速及高品质面料生产系统。', ja: '撚糸機、織機等、繊維生産設備の精密速度制御と高品質生地生産システム。', de: 'Präzise Drehzahlregelung für Textilmaschinen wie Zwirn- und Webmaschinen für höchste Stoffqualität.' },
  fieldLogistics: { ko: '스마트 물류 제어', en: 'Smart Logistics', zh: '智能物流控制', ja: 'スマート物流制御', de: 'Smarte Logistik' },
  fieldLogisticsDesc: { ko: '컨베이어 벨트 통합 제어 및 자동 분류 시스템으로 물류 효율을 극대화합니다.', en: 'Maximize logistics efficiency with integrated conveyor belt control and automated sorting systems.', zh: '通过输送带综合控制和自动分拣系统最大化物流效率。', ja: 'コンベアベルトの統合制御および自動仕分けシステムにより物流効率を最大化します。', de: 'Maximierung der Logistikeffizienz durch integrierte Förderbandsteuerung und automatische Sortiersysteme.' },

  portfolioTitle: { ko: '구축 사례 / 포트폴리오', en: 'Showcase & Portfolio', zh: '项目案例', ja: '構築事例 / ポートフォリオ', de: 'Projekte & Portfolio' },
  portfolioSubTitle: { ko: '기술력과 신뢰로 일궈낸 실적 리스트입니다.', en: 'A track record built on technology and trust.', zh: '以技术实力和信任共筑的业绩清单。', ja: '技術力と信頼で築き上げた実績リストです。', de: 'Eine auf Technologie und Vertrauen basierende Erfolgsbilanz.' },
  portfolioMore: { ko: '더 많은 포트폴리오 준비중...', en: 'More portfolios coming soon...', zh: '更多案例准备中...', ja: 'その他のポートフォリオは準備中...', de: 'Weitere Projekte folgen bald...' },

  demoTitle: { ko: '자동화 솔루션 시연 영상', en: 'Automation Solutions Demo', zh: '自动化解决方案演示', ja: '自動化ソリューションのデモ動画', de: 'Automation Lösungs-Demo' },
  demoSubTitle: { ko: '극동계전이 구축한 정밀 제어 시스템의 실제 가동 모습입니다.', en: 'Actual operation footage of the precision control systems built by KUKDONG SYSTEM.', zh: '极东计电构建的精密控制系统的实际运行画面。', ja: '極東計電が構築した精密制御システムの実際の稼働風景です。', de: 'Aktuelle Betriebsaufnahmen der von KUKDONG SYSTEM entwickelten Präzisionssteuerungssysteme.' },
  demoListTitle: { ko: '시연 영상 목록', en: 'Demo Videos List', zh: '演示视频列表', ja: 'デモ動画リスト', de: 'Liste der Demo-Videos' },
  demoNoVideo: { ko: '등록된 영상이 없습니다.', en: 'No registered videos.', zh: '没有相关视频。', ja: '登録された動画がありません。', de: 'Keine Videos registriert.' },
  demoBtn: { ko: '솔루션 상담받기', en: 'Get Solutions Consult', zh: '申请解决方案咨询', ja: 'ソリューション相談を受ける', de: 'Lösungsberatung erhalten' },

  contactTitle: { ko: '프로젝트 문의', en: 'Project Inquiry', zh: '项目咨询', ja: 'プロジェクトのお問い合わせ', de: 'Projektanfrage' },
  contactDesc: { 
    ko: '극동계전이 최적의 솔루션을 제안해 드립니다. 아래 정보를 확인하시고 언제든 편하게 문의해 주시기 바랍니다.', 
    en: 'KUKDONG SYSTEM will propose the optimal solution. Please check the information below and feel free to contact us.',
    zh: '极东计电为您提供最佳解决方案。请查看下方联系方式并随时联系我们。',
    ja: '極東計電が最適なソリューションをご提案します。以下の情報をご確認の上、お気軽にお問い合わせください。',
    de: 'KUKDONG SYSTEM unterbreitet Ihnen die optimale Lösung. Kontaktieren Sie uns jederzeit gerne.'
  },
  trustSubTitle: { ko: '고객이 신뢰하는 1%의 프리미엄 자동화 기술력', en: 'Premium Automation Engineering Trusted by 1%', zh: '顾客信赖的1%高级自动化技术力', ja: '顧客が信頼する1%のプレミアム自動化技術力', de: 'Premium-Automatisierungstechnik, auf die 1 % vertrauen' },
  contactWhyTitle: { ko: '왜 극동계전을 선택해야 할까요?', en: 'Why Choose KUKDONG SYSTEM?', zh: '为什么选择极东计电？', ja: 'なぜ極東計電を選ぶべきか？', de: 'Warum KUKDONG SYSTEM wählen?' },
  contactWhy1: { ko: '15년 이상의 현장 실무 경험', en: '15+ Years of Field Experience', zh: '15年以上的现场经验', ja: '15年以上の現場実務経験', de: '15+ Jahre Praxiserfahrung' },
  contactWhy2: { ko: '초기 설계부터 시운전까지 원스톱 서비스', en: 'One-Stop Service from Design to Commissioning', zh: '从初期设计到试运行的一站式服务', ja: '初期設計から試運転までのワンストップサービス', de: 'One-Stop-Service von der Planung bis zur Inbetriebnahme' },
  contactWhy3: { ko: '생산성을 150% 이상 향상시킨 래퍼런스 보유', en: 'Proven References Enhancing Productivity by 150%', zh: '拥有将生产力提升150%以上的成功案例', ja: '生産性を150%以上向上させた実績 보유', de: 'Referenzen zur Steigerung der Produktivität um über 150%' },
  contactWhy4: { ko: '문제 발생 전 예방하는 철저한 유지보수', en: 'Preventative Maintenance System', zh: '防患于未然的周全系统维护', ja: '問題発生前に対処する徹底した保守管理', de: 'Präventives Wartungssystem' },

  trust1Title: { ko: '15년 이상의 현장 실무 경험', en: '15+ Years Field Experience', zh: '15年以上的现场实际经验', ja: '15年以上の現場実務経験', de: '15+ Jahre Praxiserfahrung' },
  trust1Desc: { ko: '수백 개가 넘는 설비 구축 노하우와 숙련된 기술력을 보유하고 있습니다.', en: 'Possessing expertise and skilled engineering from building over hundreds of systems.', zh: '拥有数百个设备的构建诀窍及熟练的技术实力。', ja: '数百件以上の設備構築ノウハウと熟練した技術力を保有しています。', de: 'Wir verfügen über das Know-how und die technischen Fähigkeiten aus dem Bau von Hunderten von Anlagen.' },
  
  trust2Title: { ko: '24시간 긴급 대응 유지보수', en: '24/7 Emergency Maintenance', zh: '24小时紧急应对及维护', ja: '24時間緊急対応維持補修', de: '24/7 Notfallwartung' },
  trust2Desc: { ko: '고장 발생 시 즉각적인 기술 지원으로 공정 다운타임을 최소화합니다.', en: 'Minimizing process downtime through immediate tech support when failures occur.', zh: '发生故障时提供即时技术支持，将系统停机时间降至最低。', ja: '故障発生時に即座に技術支援を行い、工程ダウンタイムを最小化します。', de: 'Minimierung von Prozessausfällen durch sofortige technische Unterstützung im Fehlerfall.' },
  
  trust3Title: { ko: '합리적인 설계 및 시공 비용', en: 'Reasonable Cost Structuring', zh: '合理的设计与施工费用', ja: '合理的な設計・施工費用', de: 'Faire Gestaltungs- und Baukosten' },
  trust3Desc: { ko: '불필요한 비용을 줄이고 최적의 부품 선정으로 원가 절감을 실현합니다.', en: 'Achieving cost savings by reducing unnecessary expenses and selecting optimized parts.', zh: '减少不必要的支出，通过选择最佳部件实现成本节约。', ja: '不要な費用を削減し、最適な部品の選定によりコスト削減を実現します。', de: 'Kostenreduzierung durch Auswahl optimaler Teile und Vermeidung unnötiger Ausgaben.' },

  trust4Title: { ko: '최첨단 맞춤형 솔루션 제공', en: 'Cutting-edge Custom Solutions', zh: '提供尖端定制化解决方案', ja: '最先端カスタマイズソリューション提供', de: 'Moderne maßgeschneiderte Lösungen' },
  trust4Desc: { ko: '고객사의 산업 환경에 가장 적합한 1:1 맞춤형 통합 제어 시스템을 설계합니다.', en: 'Designing a 1:1 tailor-made integrated control system perfectly fitting the client environment.', zh: '设计最适合客户工业环境的1:1定制化集成控制系统。', ja: 'お客様の産業環境に最も適した1:1対応の統合制御システムを設計します。', de: 'Entwicklung eines maßgeschneiderten Steuerungssystems, exakt an Ihre Industrieumgebung angepasst.' },

  trust5Title: { ko: '글로벌 하드웨어 완벽 대응', en: 'Global HW Compatibility', zh: '全面兼容全球硬件', ja: 'グローバルハードウェア完全対応', de: 'Globale Hardware-Kompatibilität' },
  trust5Desc: { ko: 'LS, Mitsubishi, Siemens 등 국내외 주요 브랜드 PLC와의 자유로운 연동이 가능합니다.', en: 'Seamless integration with major domestic and international PLC brands such as LS, Mitsubishi, and Siemens.', zh: '可与LS、三菱、西门子等国内外主要品牌PLC无缝连接。', ja: 'LS、三菱、シーメンスなど国内外の主要PLCブランドと柔軟に連動可能です。', de: 'Nahtlose Integration mit wichtigen nationalen und internationalen PLC-Marken wie LS, Mitsubishi und Siemens.' },

  trust6Title: { ko: '스마트 팩토리 인프라 구축', en: 'Smart Factory Infrastructure', zh: '智能工厂基础设施构建', ja: 'スマートファクトリーインフラ構築', de: 'Infrastruktur für die Smart Factory' },
  trust6Desc: { ko: '실시간 모니터링 SCADA 및 데이터 체계화를 통해 지능형 공장을 실현해 드립니다.', en: 'Realizing intelligent factories through real-time SCADA monitoring and systemic data architecture.', zh: '通过实时监控SCADA与数据系统化，为您实现智能工厂。', ja: 'リアルタイム監視SCADAとデータ体系化を通じてインテリジェント工場を実現します。', de: 'Aufbau intelligenter Fabriken durch SCADA in Echtzeit und systematische Datenarchitektur.' },

  contactProjectConsultTitle: { ko: '프로젝트 상담', en: 'Project Consultation', zh: '项目咨询', ja: 'プロジェクト相談', de: 'Projektberatung' },
  contactTechConsult: { ko: '기술 상담 및 견적', en: 'Tech Consult & Quotes', zh: '技术咨询与报价', ja: '技術相談及びお見積り', de: 'Technische Beratung & Angebote' },
  contactDirectFax: { ko: '직통 팩스(FAX)', en: 'Direct FAX', zh: '直通传真(FAX)', ja: '直通FAX', de: 'Direktes FAX' },
  contactOfficialEmail: { ko: '대표 이메일', en: 'Official Email', zh: '代表邮箱', ja: '代表メール', de: 'Offizielle E-Mail' },
  contactLiveConsultBtn: { ko: '지금 실시간 상담하기', en: 'Get Live Consultation', zh: '现在进行实时咨询', ja: '今すぐリアルタイム相談する', de: 'Jetzt live beraten lassen' },
  contactDirectionsTitle: { ko: '오시는 길', en: 'Directions & Map', zh: '路线指南', ja: 'アクセス・地図', de: 'Wegbeschreibung & Karte' },

  mapAddress: {
    ko: '📍 경기도 안산시 산단로 326 안산유통상가 19동 104호 (극동계전)',
    en: '📍 Rm 104, Bldg 19, Ansan Distribution Center, 326 Sandan-ro, Danwon-gu, Ansan-si',
    zh: '📍 京畿道安山市檀园区产团路326 安山流通商街19栋104号 (极东计电)',
    ja: '📍 京畿道安山市檀園区産団路326 安山流通商店街19棟104号 (極東計電)',
    de: '📍 Rm 104, Bldg 19, Ansan Distribution Center, 326 Sandan-ro, Danwon-gu, Ansan-si'
  },
  mapNaver: { ko: '네이버 지도', en: 'Naver Map', zh: 'Naver 地图', ja: 'Naver マップ', de: 'Naver Karte' },
  mapKakao: { ko: '카카오 맵', en: 'Kakao Map', zh: 'Kakao 地图', ja: 'Kakao マップ', de: 'Kakao Karte' },
  mapGoogle: { ko: '구글 지도', en: 'Google Maps', zh: '谷歌地图', ja: 'Google マップ', de: 'Google Maps' },

  modalTechStack: { ko: '기술 스택 및 세부 사항', en: 'Tech Stack & Details', zh: '技术栈及详细信息', ja: '技術スタックおよび詳細', de: 'Tech-Stack & Details' },
  modalTech1: { ko: '자동 제어 알고리즘 설계 및 최적화', en: 'Automatic Control Algorithm Design & Optimization', zh: '自动控制算法设计与优化', ja: '自動制御アルゴリズムの設計と最適化', de: 'Design und Optimierung von Algorithmen zur automatischen Steuerung' },
  modalTech2: { ko: 'PLC/HMI 기반 실시간 모니터링 시스템', en: 'PLC/HMI-based Real-time Monitoring System', zh: '基于PLC/HMI的实时监控系统', ja: 'PLC/HMI基盤のリアルタイム監視システム', de: 'Echtzeit-Überwachungssystem auf PLC/HMI-Basis' },
  modalTech3: { ko: '대시보드 및 지능형 알람 솔루션', en: 'Dashboard and Intelligent Alarm Solutions', zh: '仪表板与智能报警解决方案', ja: 'ダッシュボードとインテリジェントなアラー厶ソリューション', de: 'Dashboard- und intelligente Alarmlösungen' },
  modalTech4: { ko: '시스템 통합 및 시운전 완료', en: 'System Integration and Commissioning Completed', zh: '系统集成及试运行完成', ja: 'システム統合および試運転完了', de: 'Systemintegration und Inbetriebnahme abgeschlossen' },
  modalCloseBtn: { ko: '프로젝트 닫기', en: 'Close Project', zh: '关闭项目', ja: 'プロジェクトを閉じる', de: 'Projekt schließen' },
  modalConsultBtn: { ko: '구축 상담하기', en: 'Consult Us', zh: '项目构建咨询', ja: '構築について相談する', de: 'Kontaktieren Sie uns' },
};

export function t(key: string, lang: Language) {
  return dict[key]?.[lang] || key;
}
