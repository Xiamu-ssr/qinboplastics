/* ===== 秦帛产品中心 · 数据模型 =====
 * 业务员料号表归类 → 4 大类。运行时由 assets/js/products.js 渲染 + 搜索。
 * 说明：
 *  - cat: commodity 通用 / engineering 工程 / special 特种工程 / modified 改性
 *  - hot: 热门料(优先配图与物性表)
 *  - props: 典型物性参考值(按料种家族, 实际以各牌号 TDS 为准)
 *  - 品牌/牌号严格依据业务员提供的现货表; 物性为行业典型值
 *  - desc/zh 中文; desc/en 英文(SEO 双语); 其余语言 UI 由 i18n 引擎处理
 */
window.QB_PRODUCTS = {
  cats: [
    { id: "commodity",   zh: "通用塑料",   en: "Commodity Plastics" },
    { id: "engineering", zh: "工程塑料",   en: "Engineering Plastics" },
    { id: "special",     zh: "特种工程塑料", en: "Special Engineering Plastics" },
    { id: "modified",    zh: "改性塑料",   en: "Modified Plastics" }
  ],
  materials: [
    /* ============ 通用塑料 ============ */
    {
      id: "pp", abbr: "PP", cat: "commodity", hot: true,
      zh: "聚丙烯", en: "Polypropylene",
      descZh: "通用大宗树脂，质轻、耐化学、易加工，广泛用于家电、汽车、日用与包装。",
      descEn: "High-volume commodity resin: lightweight, chemical-resistant and easy to process; widely used in appliances, automotive, housewares and packaging.",
      apps: ["家电外壳", "汽车内饰", "周转箱", "包装制品"],
      props: [
        { k: "密度 Density", v: "0.90–0.91 g/cm³" },
        { k: "熔融指数 MFR", v: "2–35 g/10min" },
        { k: "拉伸强度 Tensile", v: "30–38 MPa" },
        { k: "热变形温度 HDT", v: "55–110 ℃" }
      ],
      brands: [
        { n: "韩国SK", g: ["R370Y", "R520Y", "R380Y"] },
        { n: "韩国晓星", g: ["R200P", "R701", "J740"] },
        { n: "台湾化纤", g: ["K8009", "K8025", "K8003", "K8050", "K4515", "K4715", "K1011"] },
        { n: "燕山石化", g: ["K8303", "4220", "B8101"] },
        { n: "韩华道达尔", g: ["HJ730", "RJ580"] },
        { n: "李长荣", g: ["ST868M", "6331"] }
      ]
    },
    {
      id: "pe", abbr: "PE", cat: "commodity", hot: true,
      zh: "聚乙烯", en: "Polyethylene",
      descZh: "通用聚烯烃，韧性好、耐低温、电绝缘优，用于薄膜、管材、容器与电缆料。",
      descEn: "Versatile polyolefin with good toughness, low-temperature and electrical insulation performance; used for films, pipes, containers and cable compounds.",
      apps: ["薄膜", "管材", "中空容器", "电缆料"],
      props: [
        { k: "密度 Density", v: "0.918–0.965 g/cm³" },
        { k: "熔融指数 MFR", v: "0.3–20 g/10min" },
        { k: "拉伸强度 Tensile", v: "10–30 MPa" },
        { k: "维卡软化点 Vicat", v: "60–125 ℃" }
      ],
      brands: [
        { n: "独山子", g: ["8008H"] },
        { n: "台湾聚合", g: ["LH606", "NA248", "NA208"] },
        { n: "燕山石化", g: ["1C7A"] },
        { n: "陶氏杜邦", g: ["KT10000"] }
      ]
    },
    {
      id: "abs", abbr: "ABS", cat: "commodity", hot: true,
      zh: "ABS 树脂", en: "ABS Resin",
      descZh: "综合性能优异的通用工程树脂，刚韧平衡、表面光泽好、易电镀喷涂，家电外壳首选。",
      descEn: "Well-balanced general resin with rigidity, toughness, high surface gloss and good plating/painting; a top choice for appliance housings.",
      apps: ["家电外壳", "电子电器", "玩具", "汽车内饰"],
      props: [
        { k: "密度 Density", v: "1.04–1.06 g/cm³" },
        { k: "拉伸强度 Tensile", v: "40–50 MPa" },
        { k: "缺口冲击 Izod", v: "10–30 kJ/m²" },
        { k: "热变形温度 HDT", v: "85–100 ℃" }
      ],
      brands: [
        { n: "台湾奇美", g: ["757", "758", "707", "709", "763", "764", "765", "777D", "777B", "777E", "727", "747", "757F"] },
        { n: "镇江奇美", g: ["757K", "707K", "D-1000", "D-1200", "D-2400", "749SK", "757KF"] },
        { n: "LG惠州", g: ["312C"] }
      ]
    },
    {
      id: "eva", abbr: "EVA", cat: "commodity", hot: false,
      zh: "乙烯-醋酸乙烯共聚物", en: "EVA Copolymer",
      descZh: "柔软、富弹性、粘接性好，用于发泡鞋材、热熔胶、光伏膜与电缆。",
      descEn: "Soft, elastic copolymer with good adhesion; used in foamed footwear, hot-melt adhesives, PV encapsulant films and cables.",
      apps: ["发泡鞋材", "热熔胶", "光伏膜", "电缆"],
      props: [
        { k: "密度 Density", v: "0.93–0.95 g/cm³" },
        { k: "VA 含量 VA content", v: "5–28 %" },
        { k: "熔融指数 MFR", v: "1–400 g/10min" },
        { k: "维卡软化点 Vicat", v: "40–75 ℃" }
      ],
      brands: [
        { n: "北京有机", g: ["14-2"] },
        { n: "燕山石化", g: ["18J3"] },
        { n: "台湾塑胶", g: ["7350M", "7470M", "7340M"] },
        { n: "陶氏杜邦", g: ["40W", "260", "460", "250"] }
      ]
    },
    {
      id: "ksr", abbr: "K树脂", cat: "commodity", hot: false,
      zh: "K 胶 (苯乙烯-丁二烯)", en: "K-Resin (SBC)",
      descZh: "高透明苯乙烯-丁二烯嵌段共聚物，抗冲、易加工，用于透明包装、文具与日用。",
      descEn: "Highly transparent styrene-butadiene block copolymer; impact-resistant and easy to process, for clear packaging, stationery and housewares.",
      apps: ["透明包装", "文具", "日用品", "医疗器具"],
      props: [
        { k: "密度 Density", v: "1.01 g/cm³" },
        { k: "透光率 Transmittance", v: "≥ 88 %" },
        { k: "拉伸强度 Tensile", v: "20–28 MPa" },
        { k: "维卡软化点 Vicat", v: "70–85 ℃" }
      ],
      brands: [
        { n: "奇美", g: ["5903", "5910", "5925"] },
        { n: "巴斯夫", g: ["684D", "3G33", "2G66"] },
        { n: "菲利普", g: ["KR01", "KR03"] }
      ]
    },

    /* ============ 工程塑料 ============ */
    {
      id: "pa", abbr: "PA66/PA6", cat: "engineering", hot: true,
      zh: "尼龙 (聚酰胺)", en: "Nylon (Polyamide)",
      descZh: "高强度、耐磨、耐油的工程塑料，玻纤增强后刚性突出，广泛用于汽车与电子结构件。",
      descEn: "High-strength, wear- and oil-resistant engineering plastic; glass-fiber reinforced grades offer outstanding rigidity for automotive and electronic structural parts.",
      apps: ["汽车结构件", "电子电器", "齿轮轴承", "扎带连接器"],
      props: [
        { k: "密度 Density", v: "1.13–1.42 g/cm³ (含GF)" },
        { k: "拉伸强度 Tensile", v: "75–200 MPa (含GF)" },
        { k: "热变形温度 HDT", v: "180–250 ℃ (含GF)" },
        { k: "吸水率 Water abs.", v: "1.0–3.0 %" }
      ],
      brands: [
        { n: "巴斯夫", g: ["A3WG6", "A3EG6", "A3X2G5", "A3K", "A3EG3", "A3WG7", "A3EG7", "A3X2G7", "A3EG10", "A3WG5", "B3EG6", "B3EG3", "B3WG6", "B3S", "B3ZG3"] },
        { n: "塞拉尼斯", g: ["101L", "70G33L", "101F", "ST801", "FR50", "70G30HSRL"] },
        { n: "旭化成", g: ["1300S", "1300G", "FR370", "14G33", "1402S", "14G15", "14G25"] }
      ]
    },
    {
      id: "pom", abbr: "POM", cat: "engineering", hot: true,
      zh: "聚甲醛", en: "Polyoxymethylene (Acetal)",
      descZh: "高刚性、低摩擦、尺寸稳定的工程塑料，自润滑耐疲劳，精密齿轮与传动件首选。",
      descEn: "Rigid, low-friction, dimensionally stable engineering plastic; self-lubricating and fatigue-resistant, ideal for precision gears and motion parts.",
      apps: ["精密齿轮", "传动件", "扣具", "汽车油箱件"],
      props: [
        { k: "密度 Density", v: "1.41 g/cm³" },
        { k: "拉伸强度 Tensile", v: "60–70 MPa" },
        { k: "热变形温度 HDT", v: "90–160 ℃" },
        { k: "摩擦系数 Friction", v: "0.2–0.35" }
      ],
      brands: [
        { n: "宝理", g: ["M90-44", "M270-44", "M90-04", "M25-44", "M90-88"] },
        { n: "塞拉尼斯", g: ["C9021", "M90", "CE66", "KP20", "M25", "M270", "C13021", "C27021", "C9021TF"] },
        { n: "韩国工程", g: ["F20-03", "F20-02", "F30-03", "FG2025", "F10-02", "F25-03"] },
        { n: "韩国可隆", g: ["K300", "K700", "K500", "K900"] },
        { n: "陶氏杜邦", g: ["100P", "500P", "900P", "100ST", "500T", "100AF", "500AF"] },
        { n: "云天化", g: ["M90", "M270", "M25"] },
        { n: "神华/龙宇", g: ["MC90"] },
        { n: "开滦", g: ["K90"] }
      ]
    },
    {
      id: "pc", abbr: "PC", cat: "engineering", hot: true,
      zh: "聚碳酸酯", en: "Polycarbonate",
      descZh: "高透明、高抗冲的工程塑料，耐热尺寸稳定，用于光学、电子、车灯与安防器件。",
      descEn: "Transparent, high-impact engineering plastic with heat resistance and dimensional stability; used in optics, electronics, automotive lighting and safety parts.",
      apps: ["光学透镜", "车灯", "电子外壳", "防护器件"],
      props: [
        { k: "密度 Density", v: "1.20 g/cm³" },
        { k: "透光率 Transmittance", v: "≥ 88 %" },
        { k: "缺口冲击 Izod", v: "60–90 kJ/m²" },
        { k: "热变形温度 HDT", v: "125–140 ℃" }
      ],
      brands: [
        { n: "台湾奇美", g: ["110", "110U", "122", "122U", "6500", "6600", "6710"] },
        { n: "沙伯基础", g: ["945A", "943A", "940A", "500R"] },
        { n: "台湾出光", g: ["IR2200CB", "IR2200WW"] },
        { n: "科思创", g: ["2405", "2407", "2805", "2807"] }
      ]
    },
    {
      id: "pcabs", abbr: "PC/ABS", cat: "engineering", hot: true,
      zh: "PC/ABS 合金", en: "PC/ABS Alloy",
      descZh: "兼具 PC 耐热抗冲与 ABS 易加工的合金料，尺寸稳定、表面优，笔电与汽车内饰常用。",
      descEn: "Alloy combining PC heat/impact performance with ABS processability; dimensionally stable with fine surface, common in laptops and automotive interiors.",
      apps: ["笔电外壳", "汽车内饰", "电子电器", "通讯设备"],
      props: [
        { k: "密度 Density", v: "1.10–1.20 g/cm³" },
        { k: "拉伸强度 Tensile", v: "50–60 MPa" },
        { k: "缺口冲击 Izod", v: "40–60 kJ/m²" },
        { k: "热变形温度 HDT", v: "95–125 ℃" }
      ],
      brands: [
        { n: "台湾奇美", g: ["345", "385", "510", "545"] },
        { n: "台湾台化", g: ["AC2000", "AC2300", "AC2500", "AC3100", "AC3108"] },
        { n: "镇江奇美", g: ["330K", "330KZ", "345K", "365K", "385KZ", "540K", "550K", "560K"] },
        { n: "沙伯基础", g: ["C2800", "C6200", "C6600"] }
      ]
    },
    {
      id: "pbt", abbr: "PBT", cat: "engineering", hot: false,
      zh: "聚对苯二甲酸丁二酯", en: "Polybutylene Terephthalate",
      descZh: "耐热、电绝缘、尺寸稳定的工程塑料，玻纤增强后强度高，电子连接器与汽车件常用。",
      descEn: "Heat-resistant, electrically insulating and dimensionally stable engineering plastic; GF-reinforced grades are common in connectors and automotive parts.",
      apps: ["电子连接器", "汽车电气", "开关插座", "线圈骨架"],
      props: [
        { k: "密度 Density", v: "1.30–1.60 g/cm³ (含GF)" },
        { k: "拉伸强度 Tensile", v: "55–150 MPa (含GF)" },
        { k: "热变形温度 HDT", v: "150–215 ℃ (含GF)" },
        { k: "阻燃 Flammability", v: "可达 UL94 V-0" }
      ],
      brands: [
        { n: "巴斯夫", g: ["4520", "4300G6", "B4500", "4300G4", "4406G4", "B6550"] }
      ]
    },

    /* ============ 特种工程塑料 ============ */
    {
      id: "pps", abbr: "PPS", cat: "special", hot: true,
      zh: "聚苯硫醚", en: "Polyphenylene Sulfide",
      descZh: "耐高温、耐腐蚀、本质阻燃的特种工程塑料，长期使用温度高，用于汽车与电子精密件。",
      descEn: "High-temperature, corrosion-resistant and inherently flame-retardant special engineering plastic for automotive and precision electronic parts.",
      apps: ["汽车精密件", "电子封装", "泵阀部件", "耐高温结构件"],
      props: [
        { k: "长期使用温度 UL RTI", v: "200–240 ℃" },
        { k: "热变形温度 HDT", v: "≥ 260 ℃ (含GF)" },
        { k: "阻燃 Flammability", v: "UL94 V-0 (本质)" },
        { k: "拉伸强度 Tensile", v: "120–200 MPa (含GF)" }
      ],
      brands: [{ n: "现货齐全", g: ["多牌号"] }]
    },
    {
      id: "peek", abbr: "PEEK", cat: "special", hot: true,
      zh: "聚醚醚酮", en: "Polyether Ether Ketone",
      descZh: "顶级耐高温工程塑料，耐磨耐化学、机械强度高，用于航空、医疗与半导体领域。",
      descEn: "Top-tier high-temperature engineering plastic with wear, chemical resistance and high strength; used in aerospace, medical and semiconductor fields.",
      apps: ["航空部件", "医疗植入", "半导体夹具", "高温轴承"],
      props: [
        { k: "长期使用温度 UL RTI", v: "≈ 260 ℃" },
        { k: "玻璃化温度 Tg", v: "143 ℃" },
        { k: "熔点 Tm", v: "343 ℃" },
        { k: "拉伸强度 Tensile", v: "90–100 MPa" }
      ],
      brands: [{ n: "现货齐全", g: ["多牌号"] }]
    },
    {
      id: "pei", abbr: "PEI", cat: "special", hot: false,
      zh: "聚醚酰亚胺", en: "Polyetherimide",
      descZh: "高耐热、高强度、本质阻燃的非晶特种塑料，尺寸稳定，用于电子电气与航空件。",
      descEn: "High-heat, high-strength, inherently flame-retardant amorphous special plastic with dimensional stability for electronics and aerospace parts.",
      apps: ["电子电气", "航空内饰", "医疗器械", "耐高温件"],
      props: [
        { k: "玻璃化温度 Tg", v: "217 ℃" },
        { k: "热变形温度 HDT", v: "190–210 ℃" },
        { k: "阻燃 Flammability", v: "UL94 V-0 (本质)" },
        { k: "拉伸强度 Tensile", v: "105–160 MPa (含GF)" }
      ],
      brands: [{ n: "现货齐全", g: ["多牌号"] }]
    },
    {
      id: "lcp", abbr: "LCP", cat: "special", hot: false,
      zh: "液晶聚合物", en: "Liquid Crystal Polymer",
      descZh: "超高耐热、低翘曲、高流动的特种塑料，适合超薄精密件，5G 连接器与电子封装核心料。",
      descEn: "Ultra-high-heat, low-warpage, high-flow special plastic for ultra-thin precision parts; a core material for 5G connectors and electronic packaging.",
      apps: ["5G连接器", "精密电子", "薄壁件", "光模块"],
      props: [
        { k: "热变形温度 HDT", v: "220–290 ℃" },
        { k: "阻燃 Flammability", v: "UL94 V-0 (本质)" },
        { k: "拉伸强度 Tensile", v: "100–185 MPa" },
        { k: "成型流动 Flow", v: "极高 / 薄壁" }
      ],
      brands: [{ n: "现货齐全", g: ["多牌号"] }]
    },
    {
      id: "ppo", abbr: "PPO/PPE", cat: "special", hot: false,
      zh: "聚苯醚 (改性)", en: "Polyphenylene Oxide",
      descZh: "耐热、低吸水、尺寸稳定、阻燃易得的特种工程塑料，用于电子、汽车与水务部件。",
      descEn: "Heat-resistant, low-water-absorption, dimensionally stable special engineering plastic with easy flame retardancy; for electronics, automotive and water parts.",
      apps: ["电子电气", "汽车部件", "水泵水箱", "光伏接线盒"],
      props: [
        { k: "密度 Density", v: "1.06–1.10 g/cm³" },
        { k: "热变形温度 HDT", v: "100–175 ℃" },
        { k: "阻燃 Flammability", v: "可达 UL94 V-0" },
        { k: "吸水率 Water abs.", v: "≤ 0.2 %" }
      ],
      brands: [{ n: "现货齐全", g: ["多牌号"] }]
    },
    {
      id: "ptfe", abbr: "PTFE", cat: "special", hot: false,
      zh: "聚四氟乙烯", en: "Polytetrafluoroethylene",
      descZh: "极致耐化学、耐高低温、超低摩擦的氟塑料，电绝缘与不粘性能突出。",
      descEn: "Fluoropolymer with extreme chemical resistance, wide temperature range and ultra-low friction; outstanding insulation and non-stick performance.",
      apps: ["密封垫片", "耐腐蚀衬里", "电线绝缘", "不粘涂层"],
      props: [
        { k: "使用温度 Service", v: "-200 ~ 260 ℃" },
        { k: "摩擦系数 Friction", v: "0.05–0.10 (极低)" },
        { k: "介电强度 Dielectric", v: "很高" },
        { k: "化学惰性 Chemical", v: "近乎全惰性" }
      ],
      brands: [{ n: "现货齐全", g: ["多牌号"] }]
    },
    {
      id: "hipa", abbr: "PA12 / PA46 / PA6T / PA9T / PPA", cat: "special", hot: false,
      zh: "高性能尼龙", en: "High-Performance Polyamides",
      descZh: "耐高温、低吸水、高尺寸稳定的特种尼龙系列，适合 SMT 回流焊连接器与汽车高温件。",
      descEn: "High-temperature, low-water-absorption, dimensionally stable specialty nylons for SMT-reflow connectors and high-heat automotive parts.",
      apps: ["SMT连接器", "汽车高温件", "燃油系统", "精密结构件"],
      props: [
        { k: "熔点 Tm", v: "290–320 ℃ (PA6T/9T)" },
        { k: "热变形温度 HDT", v: "≥ 280 ℃ (含GF)" },
        { k: "吸水率 Water abs.", v: "低 (PA9T 最低)" },
        { k: "拉伸强度 Tensile", v: "100–230 MPa (含GF)" }
      ],
      brands: [{ n: "现货齐全", g: ["PA12", "PA46", "PA6T", "PA9T", "PPA"] }]
    },
    {
      id: "petfr", abbr: "PET (FR530)", cat: "special", hot: false,
      zh: "阻燃增强 PET", en: "Flame-Retardant PET",
      descZh: "玻纤增强 + 阻燃的 PET 工程料，刚性高、耐热、电气性能稳定，用于电子结构件。",
      descEn: "Glass-fiber reinforced, flame-retardant PET with high rigidity, heat resistance and stable electrical performance for electronic structural parts.",
      apps: ["电子结构件", "开关电器", "断路器", "线圈骨架"],
      props: [
        { k: "密度 Density", v: "1.55–1.70 g/cm³ (含GF)" },
        { k: "热变形温度 HDT", v: "≥ 225 ℃ (含GF)" },
        { k: "阻燃 Flammability", v: "UL94 V-0" },
        { k: "拉伸强度 Tensile", v: "130–170 MPa (含GF)" }
      ],
      brands: [{ n: "现货", g: ["FR530"] }]
    },

    /* ============ 改性塑料 (弹性体/增韧 + 定制) ============ */
    {
      id: "poe", abbr: "POE", cat: "modified", hot: true,
      zh: "聚烯烃弹性体", en: "Polyolefin Elastomer",
      descZh: "高韧性聚烯烃弹性体，是 PP/PA 等的优质增韧改性剂，也用于发泡、薄膜与电缆。",
      descEn: "High-toughness polyolefin elastomer; an excellent impact modifier for PP/PA and a base for foaming, films and cables.",
      apps: ["增韧改性剂", "发泡材料", "薄膜", "电线电缆"],
      props: [
        { k: "密度 Density", v: "0.857–0.885 g/cm³" },
        { k: "熔融指数 MFR", v: "0.5–30 g/10min" },
        { k: "邵氏硬度 Shore A", v: "55–90" },
        { k: "用途 Use", v: "增韧 / 弹性体" }
      ],
      brands: [
        { n: "埃克森美孚", g: ["6102", "6202", "6102FL", "6202FL", "3980FL", "3000", "9061", "6502", "506", "3020FL", "8880"] },
        { n: "陶氏杜邦", g: ["8150", "8200", "8100", "8003", "7467", "8999", "8480", "8402", "8180", "7447", "8440", "8450", "1881G"] },
        { n: "三井化学", g: ["DF740", "DF840", "DF640", "DF610", "DF810", "DF710", "DF605", "DF940"] }
      ]
    },
    {
      id: "tpvtpu", abbr: "TPV / TPU", cat: "modified", hot: false,
      zh: "热塑性弹性体", en: "Thermoplastic Elastomers (TPV/TPU)",
      descZh: "兼具橡胶弹性与塑料可加工性的弹性体：TPV 耐候耐老化，TPU 耐磨高弹，用于密封、软胶与包覆。",
      descEn: "Elastomers combining rubber elasticity with plastic processability: TPV for weathering/aging resistance, TPU for abrasion and high resilience; used in seals, soft-touch and over-molding.",
      apps: ["密封条", "软胶手柄", "二次包覆", "耐磨制品"],
      props: [
        { k: "邵氏硬度 Hardness", v: "Shore A 30 ~ Shore D 80" },
        { k: "回弹 Resilience", v: "高 (TPU)" },
        { k: "耐候 Weathering", v: "优 (TPV)" },
        { k: "加工 Process", v: "注塑 / 挤出 / 可回收" }
      ],
      brands: [{ n: "现货", g: ["TPV", "TPU"] }]
    },
    {
      id: "custom", abbr: "定制改性", cat: "modified", hot: true,
      zh: "定制化改性料", en: "Custom Modified Compounds",
      descZh: "按客户工况定制配方：玻纤增强、阻燃、增韧、耐候、导电抗静电、矿物填充等，并可指定全新料(原生料)基材。",
      descEn: "Formulations tailored to your application: GF reinforcement, flame retardancy, toughening, weathering, conductive/antistatic, mineral filling — with virgin-resin base on request.",
      apps: ["玻纤增强", "阻燃改性", "增韧改性", "导电/抗静电", "矿物填充", "全新料定制"],
      props: [
        { k: "基材 Base", v: "PP/PA/PC/ABS/PBT 等" },
        { k: "增强 Reinforce", v: "GF 10–50%" },
        { k: "阻燃 FR", v: "UL94 V-2 / V-0" },
        { k: "服务 Service", v: "打样 / 配方 / 全新料" }
      ],
      cases: [
        { zh: "全新料(原生料)定制", en: "Virgin-resin custom compound", descZh: "采用 100% 原生树脂基材定制，物性稳定一致，适合品质敏感与外观件。", descEn: "Custom compounds built on 100% virgin resin for consistent properties; ideal for quality-sensitive and cosmetic parts." },
        { zh: "玻纤增强 PA66", en: "GF-reinforced PA66", descZh: "PA66 + 30% 玻纤增强，刚性与耐热大幅提升，用于汽车结构支架。", descEn: "PA66 + 30% glass fiber for greatly improved rigidity and heat resistance in automotive brackets." },
        { zh: "阻燃 PP / ABS", en: "Flame-retardant PP / ABS", descZh: "可做无卤阻燃至 UL94 V-0，用于家电与电子外壳。", descEn: "Halogen-free flame retardancy up to UL94 V-0 for appliance and electronics housings." }
      ],
      brands: [{ n: "秦帛定制", g: ["按需配方", "全新料"] }]
    }
  ]
};
