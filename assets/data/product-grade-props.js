/* ===== 秦帛产品中心 · 牌号物性增强数据 =====
 * 来源：公开 TDS 与物性库资料摘录整理。
 * 仅合并站内牌号不歧义的数据；图片仍需单独人工核验。
 */
(function () {
  var db = window.QB_PRODUCTS;
  if (!db || !db.gradeMeta) return;
  var extra = {
    "7340M": {
      props: [
        { k: "牌号 Grade", v: "7340M" },
        { k: "厂家 Producer", v: "台湾塑胶" },
        { k: "密度 Density", v: "0.934 g/cm³ (ASTM D1505)" },
        { k: "熔融指数 MI", v: "2.5 g/10 min (2.16 kg, ASTM D1238)" },
        { k: "屈服拉伸强度 Tensile Strength at Yield", v: "80 kg/cm² (ASTM D638)" },
        { k: "邵氏硬度 Shore A / Shore D", v: "96 / 45 (ASTM D2240)" },
        { k: "醋酸乙烯含量 VA Content", v: "14% (FPC method)" },
        { k: "熔点 Melting Point", v: "90°C (DSC)" },
        { k: "脆化温度 Brittleness Point", v: "<-70°C (ASTM D746)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "AC2500": {
      props: [
        { k: "牌号 Grade", v: "AC2500" },
        { k: "厂家 Producer", v: "台湾台化" },
        { k: "比重 Specific Gravity", v: "1.14 g/cm³ (ASTM D792 / ISO 1183)" },
        { k: "熔体质量流动速率 MFR", v: "7.5 g/10 min (240°C/5.0 kg, ASTM D1238 / ISO 1133)" },
        { k: "拉伸强度 Tensile Strength (23°C)", v: "52.0 MPa (ASTM D638 / ISO 527-2)" },
        { k: "弯曲模量 Flexural Modulus (23°C)", v: "2450 MPa (ASTM D790 / ISO 178)" },
        { k: "无缺口Izod冲击 Unnotched Izod Impact (23°C, 3.18 mm)", v: "570 J/m (ISO 180 / ASTM D256)" },
        { k: "热变形温度 HDT", v: "103°C (1.8 MPa, 未退火, 6.35 mm, ASTM D648 / ISO 75-2/A)" },
        { k: "Vicat软化温度", v: "132°C (ISO 306/A / ASTM D1525)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "DF740": {
      props: [
        { k: "牌号 Grade", v: "DF740" },
        { k: "厂家 Producer", v: "三井化学" },
        { k: "密度 Density", v: "0.870 g/cm³ (ASTM D1505)" },
        { k: "熔体质量流动速率 MFR", v: "3.6 g/10 min (190°C/2.16 kg) / 6.7 g/10 min (230°C/2.16 kg, ASTM D1238)" },
        { k: "拉伸断裂强度 Tensile Strength (Break)", v: ">8.00 MPa (ASTM D638)" },
        { k: "邵氏A硬度 Durometer Hardness (Shore A)", v: "73 (ASTM D2240)" },
        { k: "断裂伸长率 Elongation (Break)", v: ">1000% (ASTM D638)" },
        { k: "扭转刚性 Torsional Rigidity", v: "3.00 MPa (ASTM D1043)" },
        { k: "脆化温度 Brittleness Temperature", v: "<-70.0°C (ASTM D746)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "K4715": {
      props: [
        { k: "牌号 Grade", v: "K4715" },
        { k: "厂家 Producer", v: "台湾化纤" },
        { k: "密度 Density", v: "0.900 g/cm³ (ASTM D792)" },
        { k: "熔体质量流动速率 MFR", v: "18 g/10min (230°C/2.16 kg, ASTM D1238)" },
        { k: "拉伸强度 屈服 Tensile Strength Yield", v: "30.4 MPa (ASTM D638)" },
        { k: "弯曲模量 Flexural Modulus", v: "1130 MPa (ASTM D790A)" },
        { k: "悬臂梁无缺口冲击 Izod Unnotched Impact", v: "59 J/m (23°C, 3.18 mm, ASTM D256)" },
        { k: "热变形温度 HDT", v: "95.0°C (0.45 MPa, 未退火, 6.35 mm, ASTM D648)" },
        { k: "洛氏硬度 Rockwell Hardness", v: "R-Scale 95 (ASTM D785)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "2G66": {
      props: [
        { k: "牌号 Grade", v: "2G66" },
        { k: "厂家 Producer", v: "巴斯夫" },
        { k: "密度 Density", v: "998 kg/m³ (ISO 1183)" },
        { k: "熔体体积流动速率 MVR", v: "13 cm³/10min (200°C/5 kg, ISO 1133)" },
        { k: "拉伸模量 Tensile Modulus", v: "70 MPa (ISO 527)" },
        { k: "简支梁缺口冲击 Charpy Notched Impact", v: "2 kJ/m² (-30°C, ISO 179/1eA)" },
        { k: "维卡软化点 Vicat Softening Temperature", v: "39°C (50°C/h, 50 N, ISO 306)" },
        { k: "邵氏硬度 A Shore Hardness", v: "86 (15 s, ISO 868)" },
        { k: "吸水性 Water Absorption", v: "0.07 % (Sim. to ISO 62)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "F25-03": {
      props: [
        { k: "牌号 Grade", v: "F25-03" },
        { k: "厂家 Producer", v: "韩国工程" },
        { k: "密度 Density", v: "1.41 g/cm³ (ISO 1183 / GB/T 1033)" },
        { k: "熔体质量流动速率 MFR", v: "13 g/10min (ISO 1133 / GB/T 3682)" },
        { k: "拉伸模量 Tensile Modulus", v: "2750 MPa (ISO 527 / GB/T 1040)" },
        { k: "弯曲强度 Flexural Strength", v: "90 MPa (ISO 178 / GB/T 9341)" },
        { k: "简支梁缺口冲击 Charpy Notched Impact 23°C", v: "6.0 kJ/m² (ISO 179/1eA / GB/T 1043/1eA)" },
        { k: "热变形温度 HDT", v: "100°C (1.8 MPa, ISO 75 / GB/T 1634)" },
        { k: "阻燃等级 Flammability", v: "HB (UL 94)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "560K": {
      props: [
        { k: "牌号 Grade", v: "560K" },
        { k: "厂家 Producer", v: "镇江奇美" },
        { k: "密度 Density", v: "1.17 g/cm³ (23°C, ISO 1183)" },
        { k: "熔融指数 Melt Index", v: "12 cm³/10min (260°C/2.16 kg, ISO 1133)" },
        { k: "拉伸强度 屈服 Tensile Strength Yield", v: "54 MPa (50 mm/min, ISO 527)" },
        { k: "弯曲强度 Flexural Strength", v: "70 MPa (2 mm/min, ISO 178)" },
        { k: "Izod 缺口冲击 Izod Notched Impact", v: "50 kJ/m² (23°C, 3.2 mm, ISO 180)" },
        { k: "热变形温度 HDT", v: "94°C (4 mm, 1.82 MPa, 未退火, ISO 75)" },
        { k: "维卡软化点 Vicat Softening Temperature", v: "118°C (1 kg, 50°C/h, 未退火, ISO 306)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "K1011": {
      props: [
        { k: "牌号 Grade", v: "K1011" },
        { k: "厂家 Producer", v: "台湾化纤" },
        { k: "密度 Density", v: "0.90 g/cm³ (ISO 1183 / ASTM D792)" },
        { k: "熔体流动速率 MFR", v: "15 g/10min (230°C/2.16 kg, ISO 1133 / ASTM D1238)" },
        { k: "拉伸强度 Tensile Strength", v: "34 MPa (ISO 527 / ASTM D638)" },
        { k: "弯曲模量 Flexural Modulus", v: "1420 MPa (ISO 178 / ASTM D790)" },
        { k: "冲击强度 Izod Impact", v: "27 kJ/m² (ISO 180) / 27 J/m (ASTM D256)" },
        { k: "热变形温度 HDT", v: "110°C (0.45 MPa, ISO 75 / ASTM D648)" },
        { k: "洛氏硬度 Rockwell Hardness", v: "R-100 (ISO 2039-2 / ASTM D785)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "KR01": {
      props: [
        { k: "牌号 Grade", v: "KR01" },
        { k: "厂家 Producer", v: "菲利普" },
        { k: "密度 Density", v: "1.01 g/cm³ (ASTM D792)" },
        { k: "熔体流动速率 MFR", v: "8.0 g/10min (200°C/5.0 kg, ASTM D1238)" },
        { k: "拉伸强度 Tensile Strength", v: "33.4 MPa (Yield, ASTM D638)" },
        { k: "弯曲模量 Flexural Modulus", v: "1800 MPa (ASTM D790)" },
        { k: "热变形温度 HDT", v: "64.4°C (1.8 MPa, ASTM D648)" },
        { k: "维卡软化点 Vicat", v: "90.0°C (ASTM D1525)" },
        { k: "硬度 Durometer Hardness", v: "Shore D 69 (ASTM D2240)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "K300": {
      props: [
        { k: "牌号 Grade", v: "K300" },
        { k: "厂家 Producer", v: "韩国可隆" },
        { k: "密度 Density", v: "1.41 g/cm³ (ISO 1183 / ASTM D792)" },
        { k: "熔体流动速率 MFR/MI", v: "9.0 g/10min (190°C/2.16 kg, ISO 1133 / ASTM D1238)" },
        { k: "拉伸强度 Tensile Strength", v: "63–65 MPa (ISO 527 / ASTM D638)" },
        { k: "弯曲强度 Flexural Strength", v: "85–94 MPa" },
        { k: "缺口冲击 Notched Impact", v: "7.0 kJ/m² (ISO 179/1eA) / 0.667 J/cm (ASTM D256)" },
        { k: "热变形温度 HDT", v: "95°C (1.8 MPa, ISO 75) / 110°C (0.46 MPa, ASTM D648)" },
        { k: "洛氏硬度 Rockwell Hardness", v: "M 80–93" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "C2800": {
      props: [
        { k: "牌号 Grade", v: "C2800" },
        { k: "厂家 Producer", v: "沙伯基础" },
        { k: "密度 Density", v: "1.17 g/cm³ (ISO 1183)" },
        { k: "熔体体积流动速率 MVR", v: "15.0 cm³/10min (260°C/2.16 kg, ISO 1133)" },
        { k: "拉伸模量 Tensile Modulus", v: "2700 MPa (ISO 527-2/1)" },
        { k: "弯曲模量 Flexural Modulus", v: "2600 MPa (ISO 178)" },
        { k: "Charpy 缺口冲击 Charpy Notched Impact", v: "30 kJ/m² (23°C), 9 kJ/m² (-30°C) (ISO 179/1eA)" },
        { k: "热变形温度 HDT", v: "88°C (0.45 MPa), 78°C (1.8 MPa) (ISO 75)" },
        { k: "维卡软化点 Vicat", v: "92°C (B50), 95°C (B120) (ISO 306)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "A3K": {
      props: [
        { k: "牌号 Grade", v: "A3K" },
        { k: "厂家 Producer", v: "巴斯夫" },
        { k: "密度 Density", v: "1130 kg/m³ (ISO 1183)" },
        { k: "熔点 Melting temperature", v: "260°C (DSC, ISO 11357-1/-3)" },
        { k: "拉伸模量 Tensile modulus", v: "3000/1100 MPa 干态/湿态 (ISO 527-1/-2)" },
        { k: "夏比缺口冲击强度 Charpy notched impact", v: "5/20 kJ/m² 干态/湿态 (ISO 179/1eA, 23°C)" },
        { k: "热变形温度 HDT A", v: "75°C (1.8 MPa, ISO 75-1/-2)" },
        { k: "吸水率 Water absorption", v: "8–9% (23°C 饱和)" },
        { k: "粘度值 Viscosity number", v: "150 cm³/g (ISO 307/1157/1628)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "B4500": {
      props: [
        { k: "牌号 Grade", v: "B4500" },
        { k: "厂家 Producer", v: "巴斯夫" },
        { k: "密度 Density", v: "1300 kg/m³ (ISO 1183)" },
        { k: "熔体体积流动速率 MVR", v: "19 cm³/10min (250°C/2.16kg, ISO 1133)" },
        { k: "拉伸模量 Tensile modulus", v: "2500 MPa (ISO 527)" },
        { k: "夏比缺口冲击强度 Charpy notched impact", v: "5–6 kJ/m² (ISO 179/1eA, 23°C)" },
        { k: "热变形温度 HDT A", v: "65°C (1.8 MPa, ISO 75-1/-2)" },
        { k: "阻燃 Flammability", v: "HB (UL94, 1.5mm)" },
        { k: "粘度值 Viscosity number", v: "130 cm³/g (ISO 307/1157/1628)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "727": {
      display: "PA-727",
      props: [
        { k: "牌号 Grade", v: "PA-727" },
        { k: "厂家 Producer", v: "台湾奇美" },
        { k: "密度 Density", v: "1.05 g/cm³ (ISO 1183, 23℃)" },
        { k: "熔体流动速率 MFR", v: "19 ml/10min (ISO 1133, 220℃×10kg)" },
        { k: "拉伸强度 Tensile", v: "屈服 46 MPa / 断裂 34 MPa (ISO 527, 50mm/min)" },
        { k: "弯曲强度 Flexural", v: "71 MPa (ISO 178, 2mm/min)" },
        { k: "简支梁缺口冲击 Charpy Notched", v: "23℃ 25 kJ/m² / -30℃ 12 kJ/m² (ISO 179)" },
        { k: "热变形温度 HDT", v: "1.8 MPa 未退火 83℃ / 退火 100℃ (ISO 75/A)" },
        { k: "维卡软化点 Vicat", v: "1kg 105℃ / 5kg 98℃ (ISO 306)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "1300G": {
      props: [
        { k: "牌号 Grade", v: "1300G" },
        { k: "厂家 Producer", v: "旭化成" },
        { k: "密度 Density", v: "1.39 g/cm³ (ASTM D792 / ISO 1183, 干态)" },
        { k: "拉伸模量 Tensile Modulus", v: "10000 MPa 干态 / 8000 MPa 湿态 (ISO 527-2, 23℃)" },
        { k: "弯曲模量 Flexural Modulus", v: "9000 MPa 干态 / 6800 MPa 湿态 (ISO 178, 23℃)" },
        { k: "缺口冲击 Izod Notched", v: "130 J/m 干态 / 150 J/m 湿态 (ASTM D256)" },
        { k: "热变形温度 HDT", v: "1.8 MPa 未退火 250℃ (ASTM D648 / ISO 75-2/A)" },
        { k: "阻燃 Flammability", v: "HB, 0.75mm (UL 94)" },
        { k: "吸水率 Water Absorption", v: "饱和 1.7 % (23℃) (ISO 62)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "943A": {
      props: [
        { k: "牌号 Grade", v: "943A" },
        { k: "厂家 Producer", v: "沙伯基础" },
        { k: "密度 Density", v: "1.217 g/cm³ (ASTM D792)" },
        { k: "熔体流动速率 MFR", v: "10 g/10min (ASTM D1238, 300℃/1.2kg)" },
        { k: "拉伸屈服强度 Tensile Yield", v: "62 MPa (ASTM D638, Type I, 50mm/min)" },
        { k: "弯曲模量 Flexural Modulus", v: "2240 MPa (ASTM D790, 1.3mm/min, 50mm span)" },
        { k: "缺口冲击 Izod Notched", v: "640 J/m (ASTM D256, 23℃)" },
        { k: "热变形温度 HDT", v: "1.82 MPa 未退火 132℃ / 0.45 MPa 137℃ (ASTM D648, 6.4mm)" },
        { k: "维卡软化点 Vicat", v: "151℃ (ASTM D1525, Rate B/50)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "3020FL": {
      props: [
        { k: "牌号 Grade", v: "3020FL" },
        { k: "厂家 Producer", v: "埃克森美孚" },
        { k: "密度 Density", v: "0.874 g/cm³ (ExxonMobil Method, 23℃)" },
        { k: "熔融指数 Melt Index", v: "1.2 g/10min (ASTM D1238, 190℃/2.16kg)" },
        { k: "拉伸屈服强度 Tensile Yield", v: "5.2 MPa (ExxonMobil Method)" },
        { k: "弯曲模量 Flexural Modulus", v: "65 MPa (ExxonMobil Method, 1% Secant)" },
        { k: "维卡软化点 Vicat", v: "67℃ (ExxonMobil Method)" },
        { k: "硬度 Hardness", v: "邵氏 D 29 (ExxonMobil Method)" },
        { k: "熔体质量流动速率 MFR", v: "2.5 g/10min (ExxonMobil Method, 230℃/2.16kg)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "D-1000": {
      props: [
        { k: "牌号 Grade", v: "D-1000" },
        { k: "厂家 Producer", v: "镇江奇美" },
        { k: "密度 Density", v: "1.19 g/cm³ (ASTM D792)" },
        { k: "熔体流动速率 MFR", v: "4.0 g/10min (200℃, 5kg, ASTM D1238)" },
        { k: "拉伸强度 Tensile Strength", v: "42.7 MPa (ASTM D638)" },
        { k: "弯曲强度 Flexural Strength", v: "70.1 MPa (ASTM D790)" },
        { k: "缺口冲击 Izod Impact", v: "196 J/m (1/8\", 23℃, ASTM D256)" },
        { k: "热变形温度 HDT", v: "77 ℃ (1.82 MPa, ASTM D648)" },
        { k: "维卡软化点 Vicat", v: "94 ℃ (1kg, ASTM D1525)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "14G25": {
      props: [
        { k: "牌号 Grade", v: "14G25" },
        { k: "厂家 Producer", v: "旭化成" },
        { k: "密度 Density", v: "1.32 g/cm³ (ISO 1183)" },
        { k: "拉伸模量 Tensile Modulus", v: "8200 MPa (dry, ISO 527)" },
        { k: "弯曲模量 Flexural Modulus", v: "7800 MPa (dry, ISO 178)" },
        { k: "缺口冲击 Charpy Notched", v: "10 kJ/m² (dry, 23℃, ISO 179/1eA)" },
        { k: "热变形温度 HDT", v: "245 ℃ (1.80 MPa, ISO 75)" },
        { k: "阻燃 Flame Retardancy", v: "HB (UL94, 0.75 mm)" },
        { k: "吸水率 Water Absorption", v: "1.9% (ISO 62)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "2405": {
      props: [
        { k: "牌号 Grade", v: "2405" },
        { k: "厂家 Producer", v: "科思创" },
        { k: "密度 Density", v: "1.20 g/cm³ (ISO 1183-1)" },
        { k: "熔体体积速率 MVR", v: "19 cm³/10min (300℃, 1.2kg, ISO 1133-1)" },
        { k: "拉伸模量 Tensile Modulus", v: "2400 MPa (ISO 527)" },
        { k: "弯曲模量 Flexural Modulus", v: "2350 MPa (ISO 178)" },
        { k: "缺口冲击 Izod Notched", v: "65 kJ/m² (23℃, ISO 180/A)" },
        { k: "热变形温度 HDT", v: "124 ℃ (1.80 MPa, ISO 75)" },
        { k: "维卡软化点 Vicat", v: "145 ℃ (50N/50℃/h, ISO 306)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "8003": {
      props: [
        { k: "牌号 Grade", v: "8003" },
        { k: "厂家 Producer", v: "陶氏杜邦" },
        { k: "密度 Density", v: "0.885 g/cm³ (ASTM D792)" },
        { k: "熔体流动速率 MFR", v: "1.0 g/10min (190℃, 2.16kg, ASTM D1238)" },
        { k: "拉伸强度 Tensile Strength", v: "18.2 MPa (ASTM D638)" },
        { k: "维卡软化点 Vicat", v: "63 ℃ (ASTM D1525)" },
        { k: "邵氏硬度 Shore A", v: "84 (ASTM D2240)" },
        { k: "断裂伸长率 Elongation at Break", v: "640% (ASTM D638)" },
        { k: "邵氏硬度 Shore D", v: "31 (ASTM D2240)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "D-1200": {
      props: [
        { k: "牌号 Grade", v: "D-1200" },
        { k: "厂家 Producer", v: "镇江奇美" },
        { k: "密度 Density", v: "1.17 g/cm³，ISO 1183" },
        { k: "熔体流动速率 MFR", v: "220℃/10kg 47 cm³/10min；200℃/5kg 4.5 cm³/10min，ISO 1133" },
        { k: "拉伸强度 Tensile Strength", v: "38 MPa，ISO 527（50 mm/min）" },
        { k: "弯曲强度 Flexural Strength", v: "65 MPa，ISO 178（2 mm/min）" },
        { k: "Izod 冲击强度 Izod Impact", v: "19 kJ/m²，ISO 180（4mm/23℃）" },
        { k: "热变形温度 HDT", v: "85℃（1.8MPa 退火）/ 72℃（1.8MPa 未退火），ISO 75-2" },
        { k: "维卡软化点 Vicat Softening Temp", v: "92℃（10N，50℃/hr），ISO 306" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "C9021": {
      props: [
        { k: "牌号 Grade", v: "C9021" },
        { k: "厂家 Producer", v: "塞拉尼斯" },
        { k: "密度 Density", v: "1410 kg/m³ (ISO 1183)" },
        { k: "熔体体积流动速率 MVR", v: "8 cm³/10min，190 °C/2.16 kg (ISO 1133)" },
        { k: "拉伸模量 Tensile Modulus", v: "2850 MPa (ISO 527-2/1A)" },
        { k: "弯曲模量 Flexural Modulus", v: "2700 MPa (ISO 178)" },
        { k: "简支梁缺口冲击 Charpy Notched Impact", v: "6.5 kJ/m² (23 °C, ISO 179/1eA)" },
        { k: "热变形温度 HDT", v: "104 °C (1.8 MPa, ISO 75)" },
        { k: "维卡软化温度 Vicat", v: "150 °C (50 N, ISO 306)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "510": {
      props: [
        { k: "牌号 Grade", v: "510" },
        { k: "厂家 Producer", v: "台湾奇美" },
        { k: "比重 Specific Gravity", v: "1.16 g/cm³ (ASTM D792) / 1.17 g/cm³ (ISO 1183)" },
        { k: "熔体流动速率 MFR", v: "22 g/10min，260 °C/2.16 kg (ASTM D1238)" },
        { k: "拉伸屈服强度 Tensile Strength at Yield", v: "57 MPa (ISO 527-2/50)" },
        { k: "弯曲模量 Flexural Modulus", v: "2600 MPa (ISO 178)" },
        { k: "悬臂梁缺口冲击 Izod Notched Impact", v: "50 kJ/m² (ISO 180/1A)" },
        { k: "热变形温度 HDT", v: "76 °C 未退火 / 87 °C 退火 (1.8 MPa, ISO 75)" },
        { k: "阻燃 Flammability", v: "UL 94 V-0 @1.50 mm" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    },
    "7447": {
      props: [
        { k: "牌号 Grade", v: "7447" },
        { k: "厂家 Producer", v: "陶氏杜邦" },
        { k: "密度 Density", v: "0.865 g/cm³ (ASTM D792)" },
        { k: "熔融指数 Melt Index", v: "5 g/10min，190 °C/2.16 kg (ASTM D1238)" },
        { k: "拉伸强度 Ultimate Tensile Strength", v: "2.4 MPa (ASTM D638)" },
        { k: "弯曲模量 Flexural Modulus", v: "7.8 MPa (1% Secant, ASTM D790)" },
        { k: "硬度 Hardness", v: "Shore A 64 / Shore D 12 (ASTM D2240)" },
        { k: "门尼粘度 Mooney Viscosity", v: "7 (ML 1+4 @121 °C, ASTM D1646)" },
        { k: "断裂伸长率 Ultimate Tensile Elongation", v: "550 % (ASTM D638)" },
        { k: "资料口径", v: "公开 TDS / 物性库整理；正式以原厂 TDS、COA 与批次为准" }
      ]
    }
  };
  Object.keys(extra).forEach(function (grade) {
    db.gradeMeta[grade] = Object.assign({}, db.gradeMeta[grade] || {}, extra[grade]);
  });
})();
