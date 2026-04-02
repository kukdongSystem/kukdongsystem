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

  project1Title: { ko: '자동차 도장 라인 PLC 제어 시스템', en: 'Automotive Painting Line PLC Control System', zh: '汽车涂装线PLC控制系统', ja: '自動車塗装라인PLC制御システム', de: 'Automobil-Lackierlinie PLC-Steuerungssystem' },
  project1Desc: { ko: 'Mitsubishi FX5U 및 GT25 HMI를 이용한 완전 자동화 공정 구축', en: 'Built fully automated process using Mitsubishi FX5U and GT25 HMI', zh: '使用三菱FX5U和GT25 HMI构建的全自动化流程', ja: '三菱FX5UおよびGT25 HMIを使用した完全自動화 프로세스의 構築', de: 'Vollautomatisierter Prozess mit Mitsubishi FX5U und GT25 HMI' },
  project1Tag: { ko: '자동차/도장', en: 'Automotive/Painting', zh: '汽车/涂装', ja: '自動車/塗装', de: 'Automobil/Lackierung' },
  
  project2Title: { ko: '반도체 웨이퍼 이송 로봇 핸들링', en: 'Semiconductor Wafer Transfer Robot Handling', zh: '半导体晶圆传输机器人处理', ja: '半導体ウェーハ搬送ロボットハンドリング', de: 'Halbleiter-Wafer-Transfer-Robotik' },
  project2Desc: { ko: '6축 다관절 로봇 및 비전 시스템 통합 정밀 제어 솔루션', en: '6-axis articulated robot and vision system integrated precision control solution', zh: '六轴关节机器人与视觉系统集成精密控制解决方案', ja: '6軸多関節ロボットとビジョンシステムの統合精密制御ソリューション', de: 'Integrierte Präzisionssteuerung mit 6-Achsen-Knickarmroboter und Bildverarbeitung' },
  project2Tag: { ko: '반도체/로봇', en: 'Semiconductor/Robot', zh: '半导体/机器人', ja: '半導体/ロボット', de: 'Halbleiter/Robotik' },
  
  project3Title: { ko: '스마트 팩토리 SCADA 통합 관제', en: 'Smart Factory SCADA Integrated Control', zh: '智能工厂 SCADA 集成控制', ja: 'スマートファクトリー SCADA 統合監視', de: 'Smart Factory SCADA-Integrationssteuerung' },
  project3Desc: { ko: '공장 전체 가동 현황 실시간 모니터링 및 데이터 로깅 시스템', en: 'Real-time monitoring and data logging system for overall factory operation status', zh: '针对全厂运行状态的实时监控与数据记录系统', ja: '工場全体の稼働状況のリアルタイム監視とデータロギング', de: 'Echtzeit-Überwachung und Datenprotokollierung' },
  project3Tag: { ko: 'SCADA/스마트팩토리', en: 'SCADA/Smart Factory', zh: 'SCADA/智能工厂', ja: 'SCADA/スマートファクトリー', de: 'SCADA/Smart Factory' },

  // Textile Projects (New)
  project4Title: { ko: '원단 코팅기(Coating) 제어 시스템', en: 'Textile Coating Machine Control System', zh: '纺织涂层机控制系统', ja: '生地コーティング機制御システム', de: 'Beschichtungsmaschinen-Steuerung' },
  project4Desc: { ko: '미세 텐션 유지 및 약품 코팅 두께 정밀 제어로 품질 혁신.', en: 'Quality innovation through fine tension maintenance and coating thickness control.', zh: '精细张力维持与涂层厚度控制', ja: '微細テンション維持およびコーティング厚さの精密制御', de: 'Qualitätsinnovationen durch präzise Spannungsregelung.' },
  project4Tag: { ko: '섬유기계/코팅', en: 'Textile/Coating', zh: '纺织/涂层', ja: '繊維機械/コー팅', de: 'Textil/Beschichtung' },

  project5Title: { ko: '원단 리락싱(Relaxing)기 자동 제어', en: 'Textile Relaxing Machine Auto Control', zh: '纺织松弛机自动控制', ja: '生地リラクシング機自動制御', de: 'Textil-Relaxing-Maschinensteuerung' },
  project5Desc: { ko: '원단의 스트레스 제거를 위한 서보 동기화 및 속도 조절 시스템.', en: 'Servo synchronization and speed control for stress removal of fabrics.', zh: '用于取出面料应力的伺服同步系统', ja: '生地のストレス除去のためのサーボ同期および速度調節システム', de: 'Servosynchronisation für Textil-Entspannungsprozesse.' },
  project5Tag: { ko: '섬유기계/정밀제어', en: 'Textile/Precision', zh: '纺织/精密', ja: '繊維機械/精密制御', de: 'Textil/Präzision' },

  project6Title: { ko: '섬유 비터(Beater)기 제어 솔루션', en: 'Textile Beater Machine Control Solution', zh: '纺织打浆机控制解决方案', ja: '繊維ビーター機制御ソリューション', de: 'Textil-Beater-Steuerungslösung' },
  project6Desc: { ko: '강력한 기계적 비팅 공정 최적화 및 인버터 주파수 가변 제어.', en: 'Optimization of mechanical beating process and inverter frequency control.', zh: '机械打浆工艺优化与变频控制', ja: '強力な機械的ビーティング工程の最適化およびインバータ制御', de: 'Optimierung des mechanischen Schlagvorgangs.' },
  project6Tag: { ko: '섬유기계/인버터', en: 'Textile/Inverter', zh: '纺织/变频', ja: '繊維機械/인버터', de: 'Textil/Inverter' },

  project7Title: { ko: '텐터 필터청소기 자동화 전문', en: 'Tenter Filter Cleaner Automation', zh: '定型机过滤器清洗自动化', ja: 'テンターフィルター洗浄機自動化', de: 'Tenter-Filterreiniger-Automatisierung' },
  project7Desc: { ko: '고효율 필터 클리닝 및 사이클 자동화로 필터 수명 연장.', en: 'Extending filter life through high-efficiency cleaning cycles.', zh: '通过高效过滤器清洗延长使用寿命', ja: '高効率フィルタークリーニングおよびサイクル自動化', de: 'Verlängerung der Filterlebensdauer durch Automatisierung.' },
  project7Tag: { ko: '섬유기계/필터', en: 'Textile/Filter', zh: '纺织/过滤器', ja: '繊維機械/フィルター', de: 'Textil/Filter' },

  // Food Projects (New)
  project8Title: { ko: '소스 터널냉각기(Tunnel Cooler) 솔루션', en: 'Sauce Tunnel Cooler Solution', zh: '酱汁隧道冷却器解决方案', ja: 'ソーストンネル冷却機ソリューション', de: 'Saucentunnel-Kühlerlösung' },
  project8Desc: { ko: '품질 저하 없는 고속 냉각 공정을 위한 온도 모니터링 시스템.', en: 'Temperature monitoring for high-speed cooling without food quality loss.', zh: '用于不降低品质的高速冷却温控系统', ja: '品質低下のない高速冷却工程のための温度管理', de: 'Temperaturüberwachung für Hochgeschwindigkeitskühlung.' },
  project8Tag: { ko: '식품기계/냉각', en: 'Food/Cooling', zh: '食品/冷却', ja: '食品機械/冷却', de: 'Lebensmittel/Kühlung' },

  project9Title: { ko: '식품 2차 살균기(Sterilizer) 자동 제어', en: 'Secondary Sterilizer Auto Control', zh: '食品二次杀菌机自动控制', ja: '食品2차殺菌機自動制御', de: 'Sekundär-Sterilisator-Steuerung' },
  project9Desc: { ko: '고온 고압 살균 사이클 기록 및 자동 제어로 위생 확보.', en: 'Record high-temp high-pressure cycles for total hygiene control.', zh: '高温高压杀菌周期自动记录', ja: '高温高圧殺菌サイクルの記録および自動制御', de: 'Hygienische Steuerung von Sterilisationszyklen.' },
  project9Tag: { ko: '식품기계/살균', en: 'Food/Sterilizer', zh: '食品/杀菌', ja: '食品機械/殺菌', de: 'Lebensmittel/Sterilisator' },

  project10Title: { ko: '케첩 냉각기 및 컨베이어 통합 라인', en: 'Ketchup Cooler & Conveyor Integrated Line', zh: '番茄酱冷却器与输送带集成线', ja: 'ケチャップ冷却機およびコンベア統合라인', de: 'Ketchup-Kühler- & Förderlinie' },
  project10Desc: { ko: '생산 흐름에 최적화된 컨베이어 연동 제어 및 적재 자동화.', en: 'Integrated conveyor link control and automated loading.', zh: '生产流优化的输送带联动控制', ja: '生産フローに最適化されたコンベア連動制御', de: 'Integrierte Förderbandsteuerung für Ketchup-Produktion.' },
  project10Tag: { ko: '식품기계/물류', en: 'Food/Conveyor', zh: '食品/输送', ja: '食品機械/コンベア', de: 'Lebensmittel/Förderband' },

  project11Title: { ko: '식품 산업용 대형 믹서(Mixer) 제어', en: 'Industrial Food Mixer Control', zh: '工业食品混合器控制', ja: '食品産業用大型ミキサー制御', de: 'Industrielle Lebensmittelmixer-Steuerung' },
  project11Desc: { ko: '재료 배합에 따른 정밀 속도 제어 및 부하 방지 프로토콜.', en: 'Precise speed control and load protection for material mixing.', zh: '根据配料分配精密的调速控制', ja: '材料配合に合わせた精密速度制御', de: 'Präzise Drehzahlregelung für Mischprozesse.' },
  project11Tag: { ko: '식품기계/믹서', en: 'Food/Mixer', zh: '食品/混合', ja: '食品機械/ミキサー', de: 'Lebensmittel/Mixer' },

  footerRights: { ko: '© 1987-2026 KUKDONG SYSTEM All Rights Reserved.', en: '© 1987-2026 KUKDONG SYSTEM All Rights Reserved.', zh: '© 1987-2026 KUKDONG SYSTEM 保留所有权利。', ja: '© 1987-2026 KUKDONG SYSTEM All Rights Reserved.', de: '© 1987-2026 KUKDONG SYSTEM Alle Rechte vorbehalten' },
  footerAdmin: { ko: 'Admin Login', en: 'Admin Login', zh: '管理员登录', ja: '管理者ログイン', de: 'Admin-Login' },
  footerAddress: { ko: '대한민국 경기도 안산시 단원구 산단로 326 안산유통상가 19동 104호', en: 'Rm 104, Bldg 19, Ansan Distribution Center, 326 Sandan-ro, Danwon-gu, Ansan-si, Gyeonggi-do, Republic of Korea', zh: '大韩民国 京畿道 安山市 檀园区 产团路 326 안산流通商街 19栋 104号', ja: '大韓民国 京畿道 安山市 檀園区 産단路 326 安山流通商店街 19棟 104号', de: 'Rm 104, Bldg 19, Ansan Distribution Center, 326 Sandan-ro, Danwon-gu, Ansan-si, Gyeonggi-do, Südkorea' },
  
  heroSubtitle1: { ko: 'STANDARD OF AUTOMATION', en: 'STANDARD OF AUTOMATION', zh: '自动化的标准', ja: '自動化の基準', de: 'STANDARD DER AUTOMATISIERUNG' },
  heroSubtitle2: { ko: 'TECHNICAL EXCELLENCE', en: 'TECHNICAL EXCELLENCE', zh: '技术卓越', ja: '技術の卓越性', de: 'TECHNISCHE EXZELLENZ' },
  heroSubtitle3: { ko: 'RELIABILITY & SUPPORT', en: 'RELIABILITY & SUPPORT', zh: '可靠性与支持', ja: '信頼性とサポート', de: 'ZUVERLÄSSIGKEIT & SUPPORT' },
  heroSubtitle4: { ko: 'TEXTILE SPECIALIZATION', en: 'TEXTILE SPECIALIZATION', zh: '纺织机械专业化', ja: '繊維機械専門化', de: 'TEXTIL-SPEZIALISIERUNG' },
  heroSubtitle5: { ko: 'FOOD SAFETY AUTOMATION', en: 'FOOD SAFETY AUTOMATION', zh: '食品安全自动化', ja: '食品安全自動化', de: 'LEBENSMITTEL-AUTOMATISIERUNG' },
  
  heroTitle1: { ko: '공장 자동화의\n새로운 표준', en: 'The New Standard\nin Factory Automation', zh: '工厂自动化的\n新标准', ja: '工場自動化の\n新しい標準', de: 'Der neue Standard\nder Fabrikautomation' },
  heroTitle2: { ko: '최고의 기술력,\n최적의 솔루션', en: 'Top Technology,\nOptimal Solutions', zh: '顶尖技术，\n最佳解决方案', ja: '最高の技術力、\n最適なソリューション', de: 'Spitzentechnologie,\nOptimale Lösungen' },
  heroTitle3: { ko: '24시간 멈추지 않는\n스마트 팩토리', en: '24/7 Non-Stop\nSmart Factory', zh: '24小时不断的\n智能工厂', ja: '24時間止まらない\nスマートファクトリー', de: '24/7 ununterbrochene\nSmart Factory' },
  heroTitle4: { ko: '섬유 생산의 혁신,\n정밀 자동화 시스템', en: 'Textile Innovation,\nPrecision Systems', zh: '纺织生产创新,\n精密自动化系统', ja: '繊維生産の革新、\n精密自動化システム', de: 'Textilinnovation,\nPräzisionssysteme' },
  heroTitle5: { ko: '식품 공정의 신뢰,\n완벽한 자동화 구축', en: 'Reliable Food Process,\nPerfect Automation', zh: '食品加工信任,\n完美自动化构建', ja: '食品工程의 信頼、\n完璧な自動化構築', de: 'Lebensmittelprozess,\nPerfekte Automatisierung' },
  
  heroDesc1: { ko: '극동계전은 최첨단 PLC, HMI, SCADA 솔루션을 통해 고효율 자동 제어 시스템을 구축합니다.', en: 'KUKDONG SYSTEM builds high-efficiency automated control systems.', zh: '极东计电通过尖端的PLC解决方案构建高效自动化控制系统。', ja: '極東計電は最先端のPLCソリューションを通じて制御システムを構築します。', de: 'KUKDONG SYSTEM baut hocheffiziente automatische Steuerungssysteme.' },
  heroDesc2: { ko: '다양한 산업 현장의 니즈에 맞춘 정확하고 안정적인 자동제어 시스템.', en: 'Accurate and stable automated control systems tailored to various needs.', zh: '精确且稳定的自动化控制系统。', ja: '正確で安定した自動制御システム。', de: 'Genaue und stabile automatische Steuerungssysteme.' },
  heroDesc3: { ko: '실시간 모니터링 및 원격 제어로 공장의 다운타임을 최소화합니다.', en: 'Minimize factory downtime with real-time monitoring and remote control.', zh: '通过实时监控，将工厂停机时间降至最低。', ja: 'リアルタイム監視で工장의 다운타임을 最小限に。', de: 'Minimieren Sie Werk-Ausfallzeiten durch Echtzeit-Überwachung.' },
  heroDesc4: { ko: '원단 코팅기, 리락싱, 비터, 텐터 필터청소기 등 섬유 생산 전 공정에 최적화된 제어 솔루션을 제공합니다.', en: 'Optimized control for textile processes: coating, relaxing, beater, and filter cleaning.', zh: '针对涂层、松弛和过滤器清洁等纺织工艺优化的控制系统', ja: 'コーティング、リラクシング、ビーターなど繊維生産工程に最適な制御ソリューションを提供。', de: 'Optimierte Steuerungslösungen für Textilprozesse.' },
  heroDesc5: { ko: '소스 터널냉각기, 2차살균기, 케첩냉각기, 컨베어, 믹서 등 위생과 효율을 동시에 잡는 스마트 식품 라인을 구축합니다.', en: 'Building HACCP smart food lines: coolers, sterilizers, and mixers.', zh: '构建符合HACCP标准的智能食品生产线', ja: '冷却機、殺菌機、ミキサー等、衛生と効率を両立する食品ラインを構築。', de: 'HACCP-konforme intelligente Lebensmittellinien.' },
  
  heroBtnPortfolio: { ko: '포트폴리오 보기', en: 'View Portfolio', zh: '查看成功案例', ja: 'ポートフォリオを見る', de: 'Portfolio ansehen' },
  heroBtnContact: { ko: '문의 상담', en: 'Contact Us', zh: '咨询我们', ja: 'お問い合わせ', de: 'Kontaktieren Sie uns' },
  
  fieldsTitle: { ko: '주요 기술 분야', en: 'Core Tech Fields', zh: '核心技术领域', ja: '主要技術分野', de: 'Kernkompetenzen' },
  fieldsSubTitle: { ko: '다양한 산업 현장에서 검증된 최고의 자동 제어 기술력', en: 'Proven excellence in automated control systems across various industries', zh: '在各行各业经过验证的顶尖技术', ja: '検証された最高の自動制御技術力', de: 'Bewährte Spitzenleistung in Branchen' },
  
  field1: { ko: 'PLC 프로그래밍', en: 'PLC Programming', zh: 'PLC编程', ja: 'PLCプログラミング', de: 'SPS-Programmierung' },
  field1Desc: { ko: 'LS, Mitsubishi, Siemens 등 최적화된 로직 설계 및 코딩', en: 'Optimized logic design for Major PLC brands.', zh: '针对主流PLC品牌的逻辑设计。', ja: '主要ブランドPLCに最適化されたロジック設計。', de: 'SPS-Optimierung für Marken.' },
  field2: { ko: 'HMI / 터치 패널 UI', en: 'HMI / Touch UI', zh: 'HMI / 触摸面板UI', ja: 'HMI / タッチパネルUI', de: 'HMI / Touch UI' },
  field2Desc: { ko: '조작이 직관적이고 현장 상황을 한눈에 파악할 수 있는 그래픽 작화', en: 'User-friendly GUI design for clear factory visibility.', zh: '操作直观的现场图形界面设计。', ja: '操作が直感的なグラフィック作画。', de: 'User-friendly GUI-Design.' },
  field3: { ko: 'SCADA 시스템 감시', en: 'SCADA Systems', zh: 'SCADA 监控系统', ja: 'SCADA監視', de: 'SCADA-Systeme' },
  field3Desc: { ko: '공장 전체 데이터를 실시간으로 모니터링하는 통합 관제 솔루션', en: 'Upper-level integrated control solutions for the whole plant.', zh: '集成管制解决方案。', ja: '統合監視ソリューション。', de: 'Integrierte Steuerung des gesamten Werks.' },
  field4: { ko: '인버터 & 서보 제어', en: 'Inverter & Servo', zh: '变频器与伺服控制', ja: '인버터 ＆ 서보 제어', de: 'Frequenzumrichter & Servo' },
  field4Desc: { ko: '정밀한 속도 및 위치 제어로 생산 정밀도를 높임.', en: 'Precise drive control improving precision.', zh: '精密的速度及位置控制。', ja: '精密な速度および位置制御。', de: 'Präzise Antriebssteuerung.' },
  fieldFood: { ko: '식품기계 자동화', en: 'Food Processing', zh: '食品机械自动化', ja: '食品機械自動化', de: 'Lebensmittelverarbeitung' },
  fieldFoodDesc: { ko: '위생적인 자동화 라인 및 식품 포장 제어 솔루션.', en: 'Hygienic automated lines meeting standards.', zh: '满足卫生标准的自动化线。', ja: '衛生的な自動化ライン。', de: 'Hygienische automatische Anlagen.' },
  fieldTextile: { ko: '섬유기계 자동화', en: 'Textile Automation', zh: '纺织机械自动化', ja: '繊維機械自動化', de: 'Textilautomatisierung' },
  fieldTextileDesc: { ko: '섬유 생산 설비의 정격속도 제어 및 품질 유지 시스템.', en: 'Speed control for textile equipment.', zh: '纺织设备的工程控制。', ja: '繊維生産設備の速度制御。', de: 'Drehzahlregelung für Textilmaschinen.' },
  fieldLogistics: { ko: '스마트 물류 제어', en: 'Smart Logistics', zh: '智能物流控制', ja: 'スマート物流制御', de: 'Smarte Logistik' },
  fieldLogisticsDesc: { ko: '컨베이어 통합 제어 및 자동 분류 시스템 구축.', en: 'Automated sorting and conveyor systems.', zh: '输送带联动与自动化。', ja: 'コンベア統合制御構築。', de: 'Automatisierte Sortiersysteme.' },

  portfolioTitle: { ko: '포트폴리오', en: 'Portfolio', zh: '项目案例', ja: 'ポートフォリオ', de: 'Portfolio' },
  portfolioSubTitle: { ko: '기술력과 신뢰로 일궈낸 실적 리스트입니다.', en: 'A track record built on technology and trust.', zh: '以技术实力和信任取得의 业绩清单', ja: '実績リストです', de: 'Eine auf Technologie und Vertrauen basierende Erfolgsbilanz.' },
  
  demoTitle: { ko: '솔루션 시연 영상', en: 'Automation Solutions Demo', zh: '自动化解决方案演示', ja: 'ソリューション動画', de: 'Automation Lösungs-Demo' },
  demoSubTitle: { ko: '극동계전이 구축한 정밀 제어 시스템의 실제 가동 모습입니다.', en: 'Actual operation footage of the systems.', zh: '系统的实际运行画面。', ja: '実際の稼働の様子です. ', de: 'Betriebsaufnahmen.' },
  demoListTitle: { ko: '시연 영상 목록', en: 'Demo Videos List', zh: '演示视频列表', ja: 'デモ動画リスト', de: 'Liste der Demo-Videos' },
  demoNoVideo: { ko: '등록된 영상이 없습니다.', en: 'No registered videos.', zh: '没有相关视频', ja: '動画はありません。', de: 'Keine Videos registriert.' },
  
  contactTitle: { ko: '프로젝트 문의', en: 'Project Inquiry', zh: '项目咨询', ja: 'お問い合わせ', de: 'Projectanfrage' },
  contactDesc: { ko: '극동계전이 최적의 솔루션을 제안해 드립니다. 아래 정보를 확인하시고 언제든 편하게 문의해 주시기 바랍니다.', en: 'KUKDONG SYSTEM will propose the optimal solution.', zh: '极东计电为您提供最佳解决方案。', ja: '最適のソリューションを提案します。', de: 'KUKDONG SYSTEM unterbreitet Ihnen die optimale Lösung.' },
  
  trustSubTitle: { ko: 'SINCE 1987, 2대째 가업을 이어가는 1%의 프리미엄 자동화 기술력', en: 'SINCE 1987, 2nd Gen Family Business Trusted by 1% in Premium Automation', zh: '始于1987，传承两代的高级自动化技术品牌', ja: 'SINCE 1987、2代にわたって受け継がれる1%のプレミアム自動化技術', de: 'SEIT 1987, ein Familienunternehmen in 2. Generation für Premium-Automatisierung' },
  contactWhyTitle: { ko: '왜 극동계전을 선택해야 할까요?', en: 'Why Choose KUKDONG SYSTEM?', zh: '为什么选择极东计电？', ja: '왜 極東計電を選ぶのか？', de: 'Warum KUKDONG SYSTEM wählen?' },
  
  trust1Title: { ko: '15년 이상의 현장 실무 경험', en: '15+ Years Field Experience', zh: '15年以上的现场实际经验', ja: '15年以上の実務経験', de: '15+ Jahre Praxiserfahrung' },
  trust1Desc: { ko: '수백 개가 넘는 설비 구축 노하우와 숙련된 기술력을 보유하고 있습니다.', en: 'Possessing expertise from hundreds of systems.', zh: '拥有数百个设备的构建诀窍', ja: '数百の設備構築ノウハウ。', de: 'Wir verfügen über das Know-how.' },
  trust2Title: { ko: '24시간 긴급 대응 유지보수', en: '24/7 Emergency Maintenance', zh: '24小时紧急应对', ja: '24時間緊急対応', de: '24/7 Notfallwartung' },
  trust2Desc: { ko: '고장 발생 시 즉각적인 기술 지원으로 공정 다운타임을 최소화합니다.', en: 'Minimizing downtime through immediate support.', zh: '故障时提供即时支持', ja: '即時サポートでダウンタイム最小化。', de: 'Minimierung von Prozessausfällen.' },
  trust3Title: { ko: '합리적인 설계 및 시공 비용', en: 'Reasonable Cost Structuring', zh: '合理的设计与施工费用', ja: '合理的な設計・施工費用', de: 'Faire Gestaltungs- und Baukosten' },
  trust3Desc: { ko: '불필요한 비용을 줄이고 최적의 부품 선정으로 원가 절감을 실현합니다.', en: 'Cost savings by selecting optimized parts.', zh: '减少不必要的支出', ja: '最適部品選定でコスト削減。', de: 'Kostenreduzierung.' },
  trust4Title: { ko: '최첨단 맞춤형 솔루션 제공', en: 'Cutting-edge Custom Solutions', zh: '提供尖端定制方案', ja: '最先端カスタムソリューション', de: 'Maßgeschneiderte Lösungen' },
  trust4Desc: { ko: '산업 환경에 가장 적합한 1:1 맞춤형 통합 제어 시스템을 설계합니다.', en: 'Designing a 1:1 tailor-made integrated control system.', zh: '设计适合客户环境的系统', ja: '1:1の統合制御システム設計。', de: 'Maßgeschneiderte Steuerungssysteme.' },
  trustBadge: { ko: 'SINCE 1987 · 2대째 가업', en: 'SINCE 1987 · 2nd Gen', zh: '始于1987 · 接棒二代', ja: 'SINCE 1987 · 2代目', de: 'SEIT 1987 · 2. Generation' },

  contactProjectConsultTitle: { ko: '프로젝트 상담', en: 'Project Consultation', zh: '项目咨询', ja: 'プロジェクト相談', de: 'Projektberatung' },
  contactTechConsult: { ko: '기술 상담 및 견적', en: 'Tech Consult & Quotes', zh: '技术咨询与报价', ja: '技術相談および見積り', de: 'Angebote' },
  contactDirectFax: { ko: '직통 팩스(FAX)', en: 'Direct FAX', zh: '直通传真(FAX)', ja: '直通FAX', de: 'Direktes FAX' },
  contactOfficialEmail: { ko: '대표 이메일', en: 'Official Email', zh: '代表邮箱', ja: '代表メール', de: 'Offizielle E-Mail' },
  contactLiveConsultBtn: { ko: '지금 실시간 상담하기', en: 'Get Live Consultation', zh: '现在进行实时咨询', ja: '今すぐ相談する', de: 'Jetzt live beraten lassen' },
  companyPhone: { ko: '031) 492-0895', en: '+82 31-492-0895', zh: '+82 31-492-0895', ja: '+82 31-492-0895', de: '+82 31-492-0895' },
  companyFax: { ko: '031) 495-3686', en: '+82 31-495-3686', zh: '+82 31-495-3686', ja: '+82 31-495-3686', de: '+82 31-495-3686' },
  contactDirectionsTitle: { ko: '오시는 길', en: 'Directions & Map', zh: '路线指南', ja: 'アクセス', de: 'Wegbeschreibung' },
  mapAddress: { ko: '📍 대한민국 경기도 안산시 단원구 산단로 326 안산유통상가 19동 104호 (극동계전)', en: '📍 Rm 104, Bldg 19, Ansan Distribution Center, 326 Sandan-ro, Danwon-gu, Ansan-si, Gyeonggi-do, Republic of Korea', zh: '📍 大韩民国 京畿道 安山市 檀园区 产团路 326 안산流通商街 19栋 104号 (极东计电)', ja: '📍 大韓民国 京畿道 安山市 檀園区 産団路 326 安山流通商店街 19棟 104号 (極東計電)', de: '📍 Rm 104, Bldg 19, Ansan Distribution Center, 326 Sandan-ro, Danwon-gu, Ansan-si, Gyeonggi-do, Südkorea' },
  mapNaver: { ko: '네이버 지도', en: 'Naver Map', zh: 'Naver 地图', ja: 'NAVER地図', de: 'Naver Karte' },
  mapKakao: { ko: '카카오 맵', en: 'Kakao Map', zh: 'Kakao 地图', ja: 'Kakaoマップ', de: 'Kakao Karte' },
  mapGoogle: { ko: '구글 지도', en: 'Google Maps', zh: '谷歌地图', ja: 'Googleマップ', de: 'Google Maps' },

  modalTechStack: { ko: '기술 스택 및 세부 사항', en: 'Tech Stack & Details', zh: '技术栈及详细信息', ja: '技術スペック', de: 'Tech-Stack' },
  modalTech1: { ko: '자동 제어 알고리즘 설계 및 최적화', en: 'Automatic Control Algorithm Optimization', zh: '算法设计', ja: '制御AI最適化', de: 'Algorithmenfoptimierung' },
  modalTech2: { ko: 'PLC/HMI 기반 실시간 모니터링', en: 'PLC/HMI Real-time Monitoring', zh: '实时监控', ja: 'リアルタイム監視', de: 'Echtzeit-Überwachung' },
  modalTech3: { ko: '지능형 알람 솔루션', en: 'Intelligent Alarm Solution', zh: '报警解决方案', ja: 'インテリジェント警告', de: 'Alarmlösungen' },
  modalTech4: { ko: '시스템 통합 및 시운전 완료', en: 'System Integration Completed', zh: '系统集成', ja: 'システム統合完了', de: 'Systemintegration' },
  modalCloseBtn: { ko: '프로젝트 닫기', en: 'Close Project', zh: '关闭项目', ja: '閉じる', de: 'Schließen' },
  modalConsultBtn: { ko: '구축 상담하기', en: 'Consult Us', zh: '项目咨询', ja: '相談하는', de: 'Kontakt' },
  explore: { ko: '둘러보기', en: 'Explore', zh: '探索', ja: '探検', de: 'Erkunden' },
  nowPlaying: { ko: '현재 재생 중', en: 'Now Playing', zh: '正在播放', ja: '再生中', de: 'Wiedergabe' },
};

export function t(key: string, lang: Language) {
  return dict[key]?.[lang] || key;
}