/* ===== 秦帛产品中心 · 关键物性增强 =====
 * 按公开资料与原厂 TDS 摘录整理，供内部维护与前台关键参数展示。
 */
(function () {
  var db = window.QB_PRODUCTS;
  if (!db || !db.gradeMeta) return;
  var extra = {
  "110": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "110"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.20 g/cm³"
      },
      {
        "k": "MFR",
        "v": "10 g/10min (300°C/1.2kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "65 MPa (yield)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2.40 GPa"
      },
      {
        "k": "IZOD 缺口冲击",
        "v": "80 kJ/m²"
      },
      {
        "k": "HDT 1.8MPa",
        "v": "128 °C (annealed)"
      },
      {
        "k": "Vicat",
        "v": "145 °C"
      },
      {
        "k": "阻燃等级",
        "v": "V-2 (UL94, 2.54mm)"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/polymer_Chi-Mei-Wonderlite-PC-110-Polycarbonate.php"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "260": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "260"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.951 g/cm³"
      },
      {
        "k": "熔融指数 MFR",
        "v": "6.0 g/10min (190°C/2.16kg)"
      },
      {
        "k": "醋酸乙烯含量 VA Content",
        "v": "28 wt%"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/pdf/DuPont-Elvax-260-Ethylene-Vinyl-Acetate-Copolymer-Resin.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "345": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "345"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.10 g/cm3"
      },
      {
        "k": "MFR (300°C/1.2kg)",
        "v": "13 g/10min"
      },
      {
        "k": "MVR (260°C)",
        "v": "19 cm3/10min"
      },
      {
        "k": "拉伸屈服强度 Tensile Strength",
        "v": "45 MPa"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "80 %"
      },
      {
        "k": "硬度 Hardness",
        "v": "Rockwell M 110"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/polymer_Chi-Mei-Wonderloy-PC-345-PCABS-Alloy.php"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "460": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "460"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.941 g/cm³"
      },
      {
        "k": "醋酸乙烯含量 VA Content",
        "v": "18 wt%"
      },
      {
        "k": "熔融指数 Melt Index",
        "v": "2.5 g/10min (190°C/2.16kg)"
      },
      {
        "k": "硬度 Shore A",
        "v": "91"
      },
      {
        "k": "用途",
        "v": "低密封起始温度，食品/消费品/工业包装"
      },
      {
        "k": "资料来源",
        "v": "https://www.ulprospector.com/plastics/en/datasheet/11751/elvax-460"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "707": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "707"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.06 g/cm³"
      },
      {
        "k": "熔融指数 MFR (200°C/5kg)",
        "v": "1.7 g/10min"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "490 kg/cm² (~48 MPa)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "29000 kg/cm² (~2840 MPa)"
      },
      {
        "k": "IZOD 冲击强度",
        "v": "14 kg·cm/cm (Notched, 6mm)"
      },
      {
        "k": "硬度 Hardness",
        "v": "R Scale 116"
      },
      {
        "k": "Vicat 软化点",
        "v": "105 °C"
      },
      {
        "k": "资料来源",
        "v": "https://ec.chimei.com.tw/filestorage/files/entity/5d6356764785af0b04476026"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "709": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "709"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.03 g/cm³"
      },
      {
        "k": "熔融指数 MFR (200°C/5kg)",
        "v": "0.5 g/10min"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "40 MPa (Yield)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "23000 kg/cm² (~2250 MPa)"
      },
      {
        "k": "IZOD 冲击强度",
        "v": "37 kg·cm/cm (Notched, 6mm)"
      },
      {
        "k": "硬度 Hardness",
        "v": "R Scale 102"
      },
      {
        "k": "Vicat 软化点",
        "v": "105 °C"
      },
      {
        "k": "资料来源",
        "v": "https://ec.chimei.com.tw/apis/filestorage/files/entity/5d6356764785af0b0447602d"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "764": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "764"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.16 g/cm³"
      },
      {
        "k": "熔融指数 MFR",
        "v": "2.8 g/10min (200°C, 5kg)"
      },
      {
        "k": "拉伸屈服强度 Tensile Yield",
        "v": "39.0 MPa"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "1.5mm V-0, 5VB"
      },
      {
        "k": "资料来源",
        "v": "https://ec.chimei.com.tw/filestorage/files/entity/5c3830f92c461e135af14cc3"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "765": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "765"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.19 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "5.0 g/10min (200°C/5.0kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "39.0 MPa (Yield)"
      },
      {
        "k": "洛氏硬度 Hardness",
        "v": "R 100"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "V-0 (1.5mm)"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/polymer_Chi-Mei-Polylac-PA-765-ABS-Flame-Retardant.php"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "2407": {
    "producer": "科思创",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "2407"
      },
      {
        "k": "厂家 Producer",
        "v": "科思创"
      },
      {
        "k": "密度 Density",
        "v": "1.20 g/cm³"
      },
      {
        "k": "熔体体积流动速率 MVR",
        "v": "19 cm³/10min (300°C/1.2kg)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2400 MPa"
      },
      {
        "k": "拉伸屈服强度 Tensile Stress Yield",
        "v": "66.0 MPa"
      },
      {
        "k": "简支梁缺口冲击强度 Charpy Notched Impact",
        "v": "65 kJ/m²"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "HB"
      },
      {
        "k": "资料来源",
        "v": "https://www.teameliteonline.com/wp-content/uploads/2020/01/document-10.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "2805": {
    "producer": "科思创",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "2805"
      },
      {
        "k": "厂家 Producer",
        "v": "科思创"
      },
      {
        "k": "密度 Density",
        "v": "1.20 g/cm³ (ISO 1183-1)"
      },
      {
        "k": "熔体体积流动速率 MVR",
        "v": "9.0 cm³/10min (300°C/1.2 kg, ISO 1133)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "125°C (1.80 MPa, ISO 75-1,-2)"
      },
      {
        "k": "资料来源",
        "v": "https://sukeplastics.com/products/covestro-makrolon-2805"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "2807": {
    "producer": "科思创",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "2807"
      },
      {
        "k": "厂家 Producer",
        "v": "科思创"
      },
      {
        "k": "密度 Density",
        "v": "1200 kg/m³"
      },
      {
        "k": "熔体体积流率 MVR",
        "v": "9.0 cm³/10min (300°C/1.2kg)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2400 MPa"
      },
      {
        "k": "弯曲强度 Flexural Strength",
        "v": "98 MPa"
      },
      {
        "k": "断裂应变 Elongation at Break",
        "v": ">50%"
      },
      {
        "k": "特性",
        "v": "UV稳定，易脱模，中等粘度"
      },
      {
        "k": "资料来源",
        "v": "https://www.campusplastics.com/campus/pt/datasheet/Makrolon%C2%AE+2807/Covestro+Deutschland+AG/22/b1700647"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "3000": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "3000"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "密度 Density",
        "v": "0.873 g/cm³"
      },
      {
        "k": "熔融指数 MFR (190°C/2.16kg)",
        "v": "3.7 g/10min"
      },
      {
        "k": "产品形态",
        "v": "自由流动颗粒"
      },
      {
        "k": "特性",
        "v": "适度弹性体性能，易加工，与多种烃基聚合物相容"
      },
      {
        "k": "资料来源",
        "v": "https://www.chemategroup.com/zh-TW/vistamaxx-3000"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "5910": {
    "producer": "奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "5910"
      },
      {
        "k": "厂家 Producer",
        "v": "奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.01 g/cm³"
      },
      {
        "k": "熔融指数 MFR",
        "v": "10.5 g/10 min (5.00 kg)"
      },
      {
        "k": "光线透光率",
        "v": "90%"
      },
      {
        "k": "弯曲模量",
        "v": "16000 kg/cm²"
      },
      {
        "k": "弯曲强度",
        "v": "360 kg/cm²"
      },
      {
        "k": "拉伸强度",
        "v": "290 kg/cm²"
      },
      {
        "k": "资料来源",
        "v": "https://matweb.com/search/DataSheet.aspx?MatGUID=0d1d664b4ac74ccdb587c6a6f80c5810"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "6202": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "6202"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "密度 Density",
        "v": "0.862 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "9.1 g/10 min (ASTM D1238, 190°C/2.16 kg)"
      },
      {
        "k": "邵氏硬度 Hardness Shore A",
        "v": "66"
      },
      {
        "k": "拉伸应力 Tensile Stress @100%",
        "v": "1.9 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "12.3 MPa"
      },
      {
        "k": "维卡软化点 Vicat Softening",
        "v": "47.1 °C"
      },
      {
        "k": "资料来源",
        "v": "https://www.exxonmobilchemical.com/en/chemicals/webapi/dps/v1/datasheets/150000000366/0/en"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "6331": {
    "producer": "李长荣",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "6331"
      },
      {
        "k": "厂家 Producer",
        "v": "李长荣"
      },
      {
        "k": "密度 Density",
        "v": "0.904 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "11 g/10min (230°C/2.16kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "370 kg/cm²"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "18800 kg/cm²"
      },
      {
        "k": "热变形温度 HDT",
        "v": "103°C (4.6 kg/cm²)"
      },
      {
        "k": "洛氏硬度 Rockwell Hardness",
        "v": "R 101"
      },
      {
        "k": "资料来源",
        "v": "https://www.lcycic.com/uploads/HOMO_6331_11_TDS_20240331_e37de9c682.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "6502": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "6502"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "密度 Density",
        "v": "0.865 g/cm³"
      },
      {
        "k": "熔融指数 Melt Index",
        "v": "21 g/10min (190°C/2.16kg)"
      },
      {
        "k": "熔体质量流动速率 MFR",
        "v": "45 g/10min (230°C/2.16kg)"
      },
      {
        "k": "资料来源",
        "v": "https://www.exxonmobilchemical.com/en/chemicals/webapi/dps/v1/datasheets/150000000368/0/en"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "6600": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "6600"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.20 g/cm³"
      },
      {
        "k": "熔体体积流动速率 MVR",
        "v": "10 cm³/10min (300°C/1.2kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "60 MPa (yield) / 70 MPa (break)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2300 MPa"
      },
      {
        "k": "缺口冲击强度 Izod Notched",
        "v": "70 kJ/m² (23°C)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "125 °C (1.8 MPa, unannealed)"
      },
      {
        "k": "维卡软化温度 Vicat",
        "v": "150 °C"
      },
      {
        "k": "阻燃等级 UL94",
        "v": "V-0 @ 1.1 mm"
      },
      {
        "k": "资料来源",
        "v": "https://www.cy-plas.com/zixun/5653.html"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "6710": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "6710"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.20 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "10 g/10min (300°C/1.2 kg)"
      },
      {
        "k": "抗张强度 Tensile Strength",
        "v": "61.8 MPa (屈服)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2160 MPa"
      },
      {
        "k": "悬臂梁缺口冲击强度 Izod Impact",
        "v": "830 J/m (23°C, 0.125 mm)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "125 °C (1.8 MPa, 未退火)"
      },
      {
        "k": "阻燃等级 UL 94",
        "v": "V-0 (3.00 mm)"
      },
      {
        "k": "透射率 Transmittance",
        "v": ">87.0 % (2000 μm)"
      },
      {
        "k": "资料来源",
        "v": "https://www.cn-plas.com/faq/6035.html"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "7467": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "7467"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.862 g/cm³"
      },
      {
        "k": "熔体指数 Melt Index",
        "v": "1.2 g/10min (190°C/2.16kg)"
      },
      {
        "k": "门尼粘度 Mooney Viscosity",
        "v": "19 MU (ML 1+4 @ 121°C)"
      },
      {
        "k": "邵氏硬度 Shore A/D",
        "v": "52 / 12"
      },
      {
        "k": "玻璃化转变温度 Tg",
        "v": "-58°C"
      },
      {
        "k": "DSC熔融峰",
        "v": "34°C"
      },
      {
        "k": "资料来源",
        "v": "https://plastore.it/cgi2018/file818/2395_poe%20engage%207467.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "8100": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "8100"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.87 g/cm³"
      },
      {
        "k": "熔指 MFR (190°C/2.16kg)",
        "v": "1.0 g/10min"
      },
      {
        "k": "拉伸断裂强度 Tensile Strength at Break",
        "v": "9.76 MPa"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "810 %"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "14.3 MPa"
      },
      {
        "k": "资料来源",
        "v": "https://plastics.com/manufacturers/dow/engage/engage-8100-thermoplastic-elastomer"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "8402": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "8402"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.902 g/cm³"
      },
      {
        "k": "Melt Index",
        "v": "30 g/10min (190°C/2.16kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "11.3 MPa"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "6.70 MPa (100% secant)"
      },
      {
        "k": "断裂伸长率",
        "v": "910%"
      },
      {
        "k": "Shore A",
        "v": "88"
      },
      {
        "k": "Vicat",
        "v": "72.2 °C"
      },
      {
        "k": "熔融温度",
        "v": "96.0 °C"
      },
      {
        "k": "资料来源",
        "v": "http://www.dg-hehong.com/up_files/PDF/8402.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "8440": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "8440"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.897 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "1.6 g/10min (190°C/2.16 kg, ASTM D1238)"
      },
      {
        "k": "硬度 Hardness",
        "v": "Shore A 92 / Shore D 41"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "24.5 MPa (ultimate) / 5.9 MPa (yield)"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "760%"
      },
      {
        "k": "熔点 Melting Point",
        "v": "94°C (DSC)"
      },
      {
        "k": "维卡软化点 Vicat Softening",
        "v": "76°C (ASTM D1525)"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/pdf/Dow-Engage-8440-Polyolefin-Elastomer.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "8450": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "8450"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.902 g/cm³ (ASTM D792)"
      },
      {
        "k": "熔融指数 Melt Index",
        "v": "3.0 g/10min @190°C/2.16kg (ASTM D1238)"
      },
      {
        "k": "邵氏硬度 Shore A/D",
        "v": "94 / 44 (ASTM D2240)"
      },
      {
        "k": "拉伸强度",
        "v": "24.8 MPa (ASTM D638)"
      },
      {
        "k": "断裂伸长率",
        "v": "730% (ASTM D638)"
      },
      {
        "k": "维卡软化点 Vicat",
        "v": "82°C (ASTM D1525)"
      },
      {
        "k": "资料来源",
        "v": "https://apm.matweb.com/search/datasheet.aspx?matguid=b0f74627ea1844068231d1f3ede42b0c&n=1"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "8880": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "8880"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "密度 Density",
        "v": "0.879 g/cm³"
      },
      {
        "k": "乙烯含量 Ethylene Content",
        "v": "6 wt%"
      },
      {
        "k": "邵氏硬度 Shore C Hardness",
        "v": "53"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "~1200%"
      },
      {
        "k": "玻璃化转变温度 Tg",
        "v": "-22 °C"
      },
      {
        "k": "粘度 Viscosity",
        "v": "1200 CP"
      },
      {
        "k": "资料来源",
        "v": "https://www.exxonmobilchemical.com/en/chemicals/webapi/dps/v1/datasheets/150000100375/0/en"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "9061": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "9061"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "密度 Density",
        "v": "0.863 g/cm³"
      },
      {
        "k": "熔融指数 MFR",
        "v": "0.55 g/10min"
      },
      {
        "k": "硬度 Shore A",
        "v": "60"
      },
      {
        "k": "拉伸强度 Tensile Strength at Break",
        "v": "2.69 MPa"
      },
      {
        "k": "类型",
        "v": "乙烯-丁烯共聚物，茂金属催化"
      },
      {
        "k": "资料来源",
        "v": "https://www.chemategroup.com/exact-9061"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3X2G7": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3X2G7"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.45 g/cm³"
      },
      {
        "k": "热变形温度 HDT B (0.45 MPa)",
        "v": "250 °C"
      },
      {
        "k": "增强 Reinforcement",
        "v": "35% 玻璃纤维"
      },
      {
        "k": "阻燃 Flame Retardant",
        "v": "红磷阻燃"
      },
      {
        "k": "资料来源",
        "v": "https://www.materialdatacenter.com/ms/en/Ultramid%20A/BASF/Ultramid%C2%AE+A3X2G7/e642eee1/371"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "FR530": {
    "producer": "现货",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "FR530"
      },
      {
        "k": "厂家 Producer",
        "v": "现货"
      },
      {
        "k": "密度 Density",
        "v": "1.68 g/cm³"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "11300 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "10500 MPa"
      },
      {
        "k": "热变形温度 HDT (1.8 MPa)",
        "v": "220 °C"
      },
      {
        "k": "热变形温度 HDT (0.45 MPa)",
        "v": "243 °C"
      },
      {
        "k": "阻燃等级 Flame Retardant",
        "v": "UL94 V-0 (0.35 mm)"
      },
      {
        "k": "资料来源",
        "v": "https://www.phmolds.com/wp-content/uploads/2016/09/PET-DuPont-Rynite-FR530-Black.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "B3EG3": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "B3EG3"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.23 g/cm³"
      },
      {
        "k": "玻纤含量 Glass Fiber",
        "v": "15%"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "120 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "4700 MPa"
      },
      {
        "k": "冲击强度 Charpy Notched",
        "v": "9 kJ/m²"
      },
      {
        "k": "热变形温度 HDT (1.8MPa)",
        "v": "210 °C"
      },
      {
        "k": "资料来源",
        "v": "https://download.basf.com/p1/8a8081c57fd4b609017fd657af286bc2/en/ULTRAMID%25C2%25AE_B3EG3"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "B3EG6": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "B3EG6"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1360 kg/m³ (1.36 g/cm³)"
      },
      {
        "k": "熔体体积速率 MVR (275°C/5kg)",
        "v": "50 cm³/10min"
      },
      {
        "k": "熔点 Melting Point",
        "v": "220 °C"
      },
      {
        "k": "热变形温度 HDT (1.8MPa)",
        "v": "210 °C"
      },
      {
        "k": "热变形温度 HDT (0.45MPa)",
        "v": "220 °C"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "HB (UL 94, 1.6mm)"
      },
      {
        "k": "玻纤含量",
        "v": "30% GF"
      },
      {
        "k": "资料来源",
        "v": "https://juyuans.com/wp-content/uploads/2025/05/BASF-PA6-B3EG6_TDS.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "M270": {
    "producer": "云天化",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "M270"
      },
      {
        "k": "厂家 Producer",
        "v": "云天化"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³"
      },
      {
        "k": "熔体质量流动速率 MFR (190°C/2.16kg)",
        "v": "27 g/10min (云天化); 26 g/10min (Celcon)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "62 MPa"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2700 MPa"
      },
      {
        "k": "热变形温度 HDT (1.8MPa)",
        "v": "98 °C"
      },
      {
        "k": "断裂伸长率",
        "v": "25%"
      },
      {
        "k": "资料来源",
        "v": "https://www.granulat.com.pl/media/pdf/0b7a9436bd0ef40b69560da4d99bee32.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "3980FL": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "3980FL"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "密度 Density",
        "v": "0.879 g/cm³ (ExxonMobil Method)"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "3.6 g/10min (190°C/2.16 kg, ASTM D1238)"
      },
      {
        "k": "维卡软化温度 Vicat Softening",
        "v": "约77°C (171°F, ExxonMobil Method)"
      },
      {
        "k": "拉伸屈服强度 Tensile Strength at Yield",
        "v": "约7.6 MPa (1100 psi, ExxonMobil Method)"
      },
      {
        "k": "资料来源",
        "v": "https://www.exxonmobilchemical.com/en/chemicals/webapi/dps/v1/datasheets/150000000363/0/en"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "M270-44": {
    "producer": "宝理",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "M270-44"
      },
      {
        "k": "厂家 Producer",
        "v": "宝理"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³ (ISO 1183)"
      },
      {
        "k": "吸水率 Water Absorption",
        "v": "0.5% (23°C, 24h, 1mmt, ISO 62)"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "约27 g/10min (190°C/2.16 kg, ISO 1133)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2800 MPa (ISO 527)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2550 MPa (ISO 178)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "100°C (1.8 MPa, ISO 75-1/-2)"
      },
      {
        "k": "资料来源",
        "v": "https://www.cy-plas.com/polyplastics/1017.html"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "B3WG6": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "B3WG6"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.36 g/cm³"
      },
      {
        "k": "MVR (275°C/5kg)",
        "v": "30 cm³/10min"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "9500 MPa (dry) / 6200 MPa (cond)"
      },
      {
        "k": "断裂应力 Stress at break",
        "v": "185 MPa (dry) / 115 MPa (cond)"
      },
      {
        "k": "断裂应变 Strain at break",
        "v": "3.5% (dry) / 8% (cond)"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "HB (1.6mm)"
      },
      {
        "k": "资料来源",
        "v": "https://www.picoplast.nl/uploads/6f72ea2fa55a1fbd5f9d43ba541dc911Ultramid%20B3WG6%20-%20MDS%20-%20EN.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "M90": {
    "producer": "塞拉尼斯",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "M90"
      },
      {
        "k": "厂家 Producer",
        "v": "塞拉尼斯"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2760 MPa"
      },
      {
        "k": "拉伸屈服强度 Tensile Stress (Yield)",
        "v": "65.0 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2550 MPa"
      },
      {
        "k": "Charpy 缺口冲击 (23°C)",
        "v": "6.0 kJ/m²"
      },
      {
        "k": "HDT (0.45 MPa)",
        "v": "158 °C"
      },
      {
        "k": "HDT (1.8 MPa)",
        "v": "101 °C"
      },
      {
        "k": "熔点 Melting Temperature",
        "v": "166 °C"
      },
      {
        "k": "资料来源",
        "v": "https://plastics.tridentplastics.com/Asset/TDS_Celcon%C2%AE%20M90.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "757K": {
    "producer": "镇江奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "757K"
      },
      {
        "k": "厂家 Producer",
        "v": "镇江奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.05 g/cm³"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "44 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2300 MPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "98°C (1.82 MPa)"
      },
      {
        "k": "缺口冲击强度 Notched Izod",
        "v": "22 kJ/m²"
      },
      {
        "k": "资料来源",
        "v": "https://www.cy-plas.com/zixun/5686.html"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "6102FL": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "6102FL"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "材料类型",
        "v": "丙烯基弹性体 PBE"
      },
      {
        "k": "应用",
        "v": "吹膜、流延膜、复合改性"
      },
      {
        "k": "关键特性",
        "v": "良好熔体强度、弹性、自粘性"
      },
      {
        "k": "合规性",
        "v": "RoHS合规"
      },
      {
        "k": "资料来源",
        "v": "https://www.exxonmobilchemical.com/en/chemicals/webapi/dps/v1/datasheets/150000000365/0/en"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "6202FL": {
    "producer": "埃克森美孚",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "6202FL"
      },
      {
        "k": "厂家 Producer",
        "v": "埃克森美孚"
      },
      {
        "k": "密度 Density",
        "v": "0.862 g/cm³"
      },
      {
        "k": "熔指 Melt Index",
        "v": "典型茂金属 POE 范围（ExxonMobil 方法）"
      },
      {
        "k": "特性",
        "v": "丙烯基弹性体，高弹性、增韧、薄膜/挤出/注塑适用"
      },
      {
        "k": "应用",
        "v": "薄膜、挤出涂布、增韧改性"
      },
      {
        "k": "资料来源",
        "v": "https://exxonmobilchemical.ulprospector.com/default.aspx?I=61702&E=244685"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "4300G4": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "4300G4"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.45 g/cm³"
      },
      {
        "k": "玻纤含量 Glass Fiber",
        "v": "20%"
      },
      {
        "k": "吸水率 Water Absorption",
        "v": "0.20% (24h)"
      },
      {
        "k": "饱和吸水率 Water Absorption Saturation",
        "v": "0.40%"
      },
      {
        "k": "资料来源",
        "v": "https://www.matweb.com/search/DataSheet.aspx?MatGUID=2cdd83774e30447ab64410a1d84eabf4"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "4300G6": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "4300G6"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.53 g/cm³"
      },
      {
        "k": "玻纤含量 Glass Fiber",
        "v": "30%"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "9800 MPa"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "136 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "8800 MPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "207°C (HDT A)"
      },
      {
        "k": "资料来源",
        "v": "https://www.matweb.com/search/datasheettext.aspx?matguid=81e052f22f9d4dd59719f8cc4ccb5718"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "777B": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "777B"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.03 g/cm³"
      },
      {
        "k": "MFR (220°C/10kg)",
        "v": "6.7 g/10min"
      },
      {
        "k": "拉伸屈服强度 Tensile Strength",
        "v": "44 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2.2 GPa"
      },
      {
        "k": "Izod 缺口冲击 (23°C)",
        "v": "21 kJ/m²"
      },
      {
        "k": "Vicat 软化点 (50°C/h, 5kg)",
        "v": "114 °C"
      },
      {
        "k": "阻燃等级 Flame Retardant",
        "v": "HB"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/polymer_Chi-Mei-Polylac-PA-777B-ABS-High-Heat.php"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "4406G4": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "4406G4"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.55 g/cm³"
      },
      {
        "k": "MVR (250°C/2.16kg)",
        "v": "11 cc/10min"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "8200 MPa"
      },
      {
        "k": "拉伸断裂应力 Tensile Stress at Break",
        "v": "125 MPa"
      },
      {
        "k": "Charpy 缺口冲击 (23°C)",
        "v": "9 kJ/m²"
      },
      {
        "k": "HDT A",
        "v": "200 °C"
      },
      {
        "k": "阻燃等级 Flame Retardant",
        "v": "UL94 V-0 (0.4mm)"
      },
      {
        "k": "资料来源",
        "v": "https://cycoloy.cn/upload/portal/20210717/1f48a286fc45dda45e80baccb70441fa.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "K4515": {
    "producer": "台湾化纤",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "K4515"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾化纤"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "18 g/10min (230°C/2.16kg)"
      },
      {
        "k": "密度 Density",
        "v": "0.90 g/cm³"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "29 MPa (at Yield)"
      },
      {
        "k": "特性",
        "v": "高透明、抗静电、耐化学性、符合USP Class VI"
      },
      {
        "k": "用途",
        "v": "高透明容器、透明家庭用品、医疗器材"
      },
      {
        "k": "资料来源",
        "v": "https://en.fcfc-plastics.com/uploadfiles/216/ftp/datasheet/PP/ds_k4515_en.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "D-2400": {
    "producer": "镇江奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "D-2400"
      },
      {
        "k": "厂家 Producer",
        "v": "镇江奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.06 g/cm³"
      },
      {
        "k": "MFR/MI",
        "v": "5.5 g/10min (220°C/10kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "445 kgf/cm²"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "27000 kgf/cm²"
      },
      {
        "k": "IZOD 缺口冲击",
        "v": "12 kg-cm/cm"
      },
      {
        "k": "Vicat",
        "v": "124 °C"
      },
      {
        "k": "阻燃等级",
        "v": "HB (UL94)"
      },
      {
        "k": "资料来源",
        "v": "https://ec.chimei.com.cn/filestorage/files/entity/5c38317a39f893a196e94c18"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "K8003": {
    "producer": "台湾化纤",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "K8003"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾化纤"
      },
      {
        "k": "密度 Density",
        "v": "0.90 g/cm³"
      },
      {
        "k": "MFR/MI",
        "v": "3.0 g/10min (230°C/2.16kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "260 kgf/cm² (yield)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "11000 kgf/cm²"
      },
      {
        "k": "IZOD 缺口冲击",
        "v": "N.B. (23°C) / 9.5 kg-cm/cm (-20°C)"
      },
      {
        "k": "HDT",
        "v": "110 °C (4.6kg/cm², unannealed)"
      },
      {
        "k": "阻燃等级",
        "v": "HB (UL94, 1/16\")"
      },
      {
        "k": "硬度",
        "v": "R-Scale 80"
      },
      {
        "k": "资料来源",
        "v": "https://www.sunta.hk/uploads/pdf/9332710221532688250.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "110U": {
    "producer": "台湾奇美",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "110U"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾奇美"
      },
      {
        "k": "密度 Density",
        "v": "1.20 g/cm³"
      },
      {
        "k": "熔体体积速率 MVR",
        "v": "10 cm³/10min (300°C/1.2 kg, ISO 1133)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "65 MPa (yield, 50 mm/min)"
      },
      {
        "k": "冲击强度 Izod Impact",
        "v": "约 75 kJ/m² (23°C, 常见参考值)"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/pdf/Chi-Mei-Wonderlite-PC-110U-Polycarbonate-UV-Stabilized.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "K8009": {
    "producer": "台湾化纤",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "K8009"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾化纤"
      },
      {
        "k": "密度 Density",
        "v": "0.90 g/cm³ (Specific Gravity 0.9)"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "9 g/10min (230°C/2.16 kg, ASTM D1238)"
      },
      {
        "k": "拉伸强度 Tensile Strength at Yield",
        "v": "22 MPa (230 kgf/cm²)"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": ">200%"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "1078 MPa (11000 kgf/cm²)"
      },
      {
        "k": "冲击强度 Izod Impact",
        "v": "392 J/m (40 kgf·cm/cm) @ 23°C; 73 J/m (7.4 kgf·cm/cm) @ -20°C"
      },
      {
        "k": "热变形温度 HDT",
        "v": "110°C (unannealed, 4.6 kg/cm², ASTM D648)"
      },
      {
        "k": "硬度 Hardness",
        "v": "Rockwell R 80"
      },
      {
        "k": "资料来源",
        "v": "https://en.fcfc-plastics.com/uploadfiles/216/ftp/datasheet/PP/ds_k8009_en.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "18J3": {
    "producer": "燕山石化",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "18J3"
      },
      {
        "k": "厂家 Producer",
        "v": "燕山石化"
      },
      {
        "k": "密度 Density",
        "v": "0.939 g/cm³"
      },
      {
        "k": "熔体质量流动速率 MFR",
        "v": "2.8 g/10min (GB/T 3682-2000)"
      },
      {
        "k": "VA含量",
        "v": "18.0% (SH/T 1591-1994)"
      },
      {
        "k": "资料来源",
        "v": "http://bypc.sinopec.com/bypc/pro_service/main_pro/plasthetics/18J3.shtml"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "K8025": {
    "producer": "台湾化纤",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "K8025"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾化纤"
      },
      {
        "k": "密度 Density",
        "v": "0.90 g/cm³ (ASTM D-792)"
      },
      {
        "k": "熔体流动指数 MFI",
        "v": "28 g/10min (230°C/2.16kg, ASTM D-1238)"
      },
      {
        "k": "拉伸屈服强度",
        "v": "230 kgf/cm² (22 MPa, ASTM D-638)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "11000 kgf/cm² (1078 MPa, ASTM D-790)"
      },
      {
        "k": "Izod冲击强度",
        "v": "12.5 kgf·cm/cm (123 J/m, 23°C, ASTM D-256)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "110°C (4.6kg/cm², 未退火, ASTM D-648)"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "HB (UL-94, 1.5mm)"
      },
      {
        "k": "资料来源",
        "v": "https://en.fcfc-plastics.com/uploadfiles/216/ftp/datasheet/PP/ds_k8025_en.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "K8050": {
    "producer": "台湾化纤",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "K8050"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾化纤"
      },
      {
        "k": "密度 Density",
        "v": "0.90 g/cm³"
      },
      {
        "k": "熔融指数 MFI",
        "v": "50 g/10min (230°C/2.16kg, ASTM D-1238)"
      },
      {
        "k": "拉伸屈服强度 Tensile Strength at Yield",
        "v": "23.5 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "1180 MPa"
      },
      {
        "k": "IZOD缺口冲击强度 Notched Izod Impact",
        "v": "7.0 kJ/m² (23°C)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "100 °C (0.45MPa)"
      },
      {
        "k": "资料来源",
        "v": "https://en.fcfc-plastics.com/uploadfiles/216/ftp/datasheet/PP/ds_k8050_en.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "40W": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "40W"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.965 g/cm³"
      },
      {
        "k": "熔融指数 Melt Index",
        "v": "0.70 g/10min (190°C/2.16kg)"
      },
      {
        "k": "VA含量 VA Content",
        "v": "40%"
      },
      {
        "k": "熔点 Melting Point",
        "v": "47 °C"
      },
      {
        "k": "资料来源",
        "v": "https://www.lookpolymers.com/polymer_DuPont-Elvax-40W-Ethylene-Vinyl-Acetate-Copolymer-Resin.php"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "R701": {
    "producer": "韩国晓星",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "R701"
      },
      {
        "k": "厂家 Producer",
        "v": "韩国晓星"
      },
      {
        "k": "密度 Density",
        "v": "0.90 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "18 g/10min"
      },
      {
        "k": "拉伸屈服强度 Tensile Strength at Yield",
        "v": "30 MPa (300 kg/cm²)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "1078 MPa (11000 kg/cm²)"
      },
      {
        "k": "悬臂梁冲击强度 Izod Impact",
        "v": "6 kg·cm/cm (23°C, Notched)"
      },
      {
        "k": "资料来源",
        "v": "https://stavianchem.com/sites/default/files/product-specs/R701.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "500R": {
    "producer": "沙伯基础",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "500R"
      },
      {
        "k": "厂家 Producer",
        "v": "沙伯基础"
      },
      {
        "k": "密度 Density",
        "v": "1.27 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "8 g/10min (300°C/1.2kg)"
      },
      {
        "k": "阻燃等级 Flame Retardance",
        "v": "UL94 V0 / 5VA"
      },
      {
        "k": "特点",
        "v": "10%玻纤填充，高模量+优异冲击+阻燃，含内脱模"
      },
      {
        "k": "UL等级",
        "v": "UL746C f2 rated"
      },
      {
        "k": "资料来源",
        "v": "https://www.ulprospector.com/plastics/en/datasheet/17633/lexan-fr-resin-500r---americas"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "7470M": {
    "producer": "台湾塑胶",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "7470M"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾塑胶"
      },
      {
        "k": "密度 Density",
        "v": "0.948 g/cm³"
      },
      {
        "k": "熔融指数 MFR",
        "v": "7.5 g/10min (2.16kg)"
      },
      {
        "k": "VA含量",
        "v": "26 wt%"
      },
      {
        "k": "熔点 Melting Point",
        "v": "76 °C"
      },
      {
        "k": "硬度 Shore A",
        "v": "82"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "30 kg/cm² (yield) / 140 kg/cm² (break)"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "800%"
      },
      {
        "k": "软化点 Softening Point",
        "v": "48 °C"
      },
      {
        "k": "资料来源",
        "v": "https://juyuans.com/eva-7470m-plastic-material-properties-uses-and-datasheet"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "940A": {
    "producer": "沙伯基础",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "940A"
      },
      {
        "k": "厂家 Producer",
        "v": "沙伯基础"
      },
      {
        "k": "密度 Density",
        "v": "1.21 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "10 g/10min (300°C/1.2kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "~65 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2240 MPa"
      },
      {
        "k": "IZOD 缺口冲击",
        "v": "640 J/m (23°C)"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "UL94 V-0"
      },
      {
        "k": "资料来源",
        "v": "https://www.matweb.com/search/datasheettext.aspx?matguid=b70013fc804f425c85c37d7d79ea7a9d"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "945A": {
    "producer": "沙伯基础",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "945A"
      },
      {
        "k": "厂家 Producer",
        "v": "沙伯基础"
      },
      {
        "k": "MVR",
        "v": "10 cm³/10 min (300°C/1.2 kg)"
      },
      {
        "k": "阻燃等级",
        "v": "UL94 V0 @ 3.0 mm"
      },
      {
        "k": "拉伸强度",
        "v": "67.0 MPa"
      },
      {
        "k": "线性模塑收缩率",
        "v": "0.0060-0.0080 cm/cm"
      },
      {
        "k": "特性",
        "v": "非卤化阻燃，透明级，中流动"
      },
      {
        "k": "资料来源",
        "v": "https://www.ulprospector.com/plastics/en/datasheet/77696/lexan-fr-resin-945a---asia"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "IR2200CB": {
    "producer": "台湾出光",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "IR2200CB"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾出光"
      },
      {
        "k": "密度 Density",
        "v": "1.20 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "11 g/10min (ISO 1133)"
      },
      {
        "k": "吸水率 Water Absorption",
        "v": "0.23% (50%RH, 24h)"
      },
      {
        "k": "拉伸强度(屈服) Tensile Stress at Yield",
        "v": "65 MPa"
      },
      {
        "k": "弯曲强度 Flexural Strength",
        "v": "90 MPa"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "HB (UL 94)"
      },
      {
        "k": "资料来源",
        "v": "https://en.fcfc-plastics.com/uploadfiles/216/ftp/datasheet/FIPC/IR-grade/ds_ir2200_en.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "IR2200WW": {
    "producer": "台湾出光",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "IR2200WW"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾出光"
      },
      {
        "k": "密度 Density",
        "v": "1.2 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "11 g/10min (300°C/1.2kg)"
      },
      {
        "k": "拉伸屈服强度 Tensile Strength",
        "v": "65 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2.3 GPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "125°C (1.8MPa)"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "UL94 V-2 (0.36~2.9mm), HB (3.0~6.0mm)"
      },
      {
        "k": "资料来源",
        "v": "https://en.fcfc-plastics.com/uploadfiles/216/ftp/datasheet/FIPC/IR-grade/ds_ir2200_en.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "100P": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "100P"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "1.42 g/cm³"
      },
      {
        "k": "MFR (190°C/2.16 kg)",
        "v": "2.6 g/10 min"
      },
      {
        "k": "MVR (190°C/2.16 kg)",
        "v": "2.20 cm³/10 min"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2900 MPa"
      },
      {
        "k": "屈服应力 Yield Stress",
        "v": "70 MPa"
      },
      {
        "k": "断裂应变 Strain at Break",
        "v": "65%"
      },
      {
        "k": "热变形温度 HDT Annealed (1.8 MPa)",
        "v": "110 °C"
      },
      {
        "k": "洛氏硬度 Rockwell Hardness",
        "v": "M 94 / R 120"
      },
      {
        "k": "资料来源",
        "v": "https://sushengpolymer.com/plasmain/Ptgud0_Delrin-100P-NC010"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "PA46": {
    "producer": "现货齐全",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "PA46"
      },
      {
        "k": "厂家 Producer",
        "v": "现货齐全"
      },
      {
        "k": "密度 Density",
        "v": "1.18 g/cm3"
      },
      {
        "k": "吸水率 Moisture Absorption",
        "v": "3.70 %"
      },
      {
        "k": "拉伸屈服强度 Tensile Strength Yield",
        "v": "100 MPa (dry)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "3300 MPa (dry)"
      },
      {
        "k": "熔点 Melting Point",
        "v": "295 °C"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "UL94 V-2 (0.8mm)"
      },
      {
        "k": "资料来源",
        "v": "https://matweb.com/search/datasheet.aspx?matguid=e1e8dfd13208408fa5f3921a645b8930"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "100ST": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "100ST"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "1.34 g/cm3"
      },
      {
        "k": "屈服应力 Yield Stress",
        "v": "41 MPa"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "1300 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "1250 MPa"
      },
      {
        "k": "缺口冲击 Charpy Notched (23°C)",
        "v": "90 kJ/m2"
      },
      {
        "k": "HDT (1.8 MPa)",
        "v": "64 °C"
      },
      {
        "k": "资料来源",
        "v": "https://plastore.it/cgi2018/file/1070_pom%20delrin%20100st.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "C27021": {
    "producer": "塞拉尼斯",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "C27021"
      },
      {
        "k": "厂家 Producer",
        "v": "塞拉尼斯"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³"
      },
      {
        "k": "熔体体积速率 MVR",
        "v": "24 cm³/10min"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2,900 MPa"
      },
      {
        "k": "屈服应力 Yield Stress",
        "v": "65 MPa"
      },
      {
        "k": "熔融温度 Melting Temp",
        "v": "166°C"
      },
      {
        "k": "热变形温度 HDT",
        "v": "100°C (1.8MPa)"
      },
      {
        "k": "资料来源",
        "v": "https://www.campusplastics.com/campus/en/datasheet/HOSTAFORM%C2%AE+C+27021/Celanese/163/b5554489"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "70G30HSRL": {
    "producer": "塞拉尼斯",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "70G30HSRL"
      },
      {
        "k": "厂家 Producer",
        "v": "塞拉尼斯"
      },
      {
        "k": "密度 Density",
        "v": "1.37 g/cm3"
      },
      {
        "k": "熔体质量流动速率 MFR",
        "v": "— g/10min (190°C/2.16kg, ISO 1133)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "— MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "— MPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "— °C (1.8 MPa)"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "HB (UL 94, 0.75mm)"
      },
      {
        "k": "资料来源",
        "v": "https://www.matweb.com/search/datasheettext.aspx?matguid=0cedb771ebc44090bf58d3698f04052a"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "AC3100": {
    "producer": "台湾台化",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "AC3100"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾台化"
      },
      {
        "k": "密度 Density",
        "v": "1.14 g/cm3"
      },
      {
        "k": "熔体质量流动速率 MFR",
        "v": "25 g/10min (240°C/5.0kg, ASTM D1238)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "63.8 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "— MPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "— °C"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "V-0 (UL 94, 自熄级)"
      },
      {
        "k": "资料来源",
        "v": "https://en.fcfc-plastics.com/uploadfiles/216/ftp/datasheet/PCABS/ds_ac3100_en.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "F20-03": {
    "producer": "韩国工程",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "F20-03"
      },
      {
        "k": "厂家 Producer",
        "v": "韩国工程"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm3"
      },
      {
        "k": "熔体质量流动速率 MFR",
        "v": "9.0 g/10min (190°C/2.16kg, ISO 1133)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "65 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2550 MPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "100 °C (1.8 MPa, ISO 75-2/A)"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "HB (UL 94)"
      },
      {
        "k": "资料来源",
        "v": "https://upmold.com/wp-content/uploads/data-sheet/POM-Kepital-F20-03.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "C2800": {
    "producer": "沙伯基础",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "C2800"
      },
      {
        "k": "厂家 Producer",
        "v": "沙伯基础"
      },
      {
        "k": "密度 Density",
        "v": "1.18 g/cm3"
      },
      {
        "k": "熔体质量流动速率 MFR",
        "v": "— g/10min (260°C/2.16kg)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "58 MPa"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "— MPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "— °C (1.82 MPa)"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "V-0 / 5VB (UL 94, 无卤阻燃)"
      },
      {
        "k": "资料来源",
        "v": "https://www.nexeoplastics.com/types/plastics-database-datasheet?id=13346&product=CYCOLOY%E2%84%A2+FR+Resin&grade=C2800+-+Americas"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "70G33L": {
    "producer": "塞拉尼斯",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "70G33L"
      },
      {
        "k": "厂家 Producer",
        "v": "塞拉尼斯"
      },
      {
        "k": "密度 Density",
        "v": "1.39 g/cm³"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "200 MPa (dry)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "9000 MPa"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "3.5% (dry) / 5% (cond)"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "HB (UL94)"
      },
      {
        "k": "资料来源",
        "v": "https://cn.hongrunplastics.com/public/uploads/images/20260425/Celanese%20PA66%20Zytel%2070G33L%20NC010-gb.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "F30-03": {
    "producer": "韩国工程",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "F30-03"
      },
      {
        "k": "厂家 Producer",
        "v": "韩国工程"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³"
      },
      {
        "k": "熔融指数 MFR",
        "v": "27 g/10min (190°C/2.16kg)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2850 MPa"
      },
      {
        "k": "屈服强度 Yield Strength",
        "v": "65 MPa"
      },
      {
        "k": "弯曲强度 Flexural Strength",
        "v": "91.7 MPa"
      },
      {
        "k": "冲击强度 Impact Strength",
        "v": "5.5 kJ/m² (Charpy notched)"
      },
      {
        "k": "资料来源",
        "v": "https://sunpolymersindia.com/wp-content/uploads/2023/07/KEPITAL-f30-03.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3EG10": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3EG10"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.53 g/cm³"
      },
      {
        "k": "熔点 Melting Point",
        "v": "260 °C"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "240 MPa"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "16.4 GPa"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "2.2%"
      },
      {
        "k": "玻纤含量 Glass Fiber",
        "v": "50%"
      },
      {
        "k": "资料来源",
        "v": "https://matweb.com/search/datasheet.aspx?MatGUID=4a6066b1f0c94a2db299838d425d0618"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "C6200": {
    "producer": "沙伯基础",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "C6200"
      },
      {
        "k": "厂家 Producer",
        "v": "沙伯基础"
      },
      {
        "k": "密度 Density",
        "v": "1.18 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "17 g/10min (260°C/5kg, ASTM D1238)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "90 °C (1.82 MPa, 3.2mm)"
      },
      {
        "k": "拉伸强度 Tensile Stress yield",
        "v": "55 MPa (ASTM D638)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "2.68 GPa"
      },
      {
        "k": "阻燃 Flame Retardant",
        "v": "非卤素阻燃 Non-chlorinated, non-brominated"
      },
      {
        "k": "资料来源",
        "v": "https://m.resinsplastics.com/photo/resinsplastics/document/43148/C6200.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3EG3": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3EG3"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.23 g/cm³ (ISO 1183)"
      },
      {
        "k": "熔体体积流动速率 MVR",
        "v": "70 cm³/10min (275°C/5 kg, ISO 1133)"
      },
      {
        "k": "熔融温度",
        "v": "260°C (ISO 11357)"
      },
      {
        "k": "饱和吸水率",
        "v": "6.7-7.3% (23°C)"
      },
      {
        "k": "阻燃等级 UL94",
        "v": "HB (1.5 mm)"
      },
      {
        "k": "成型收缩率",
        "v": "0.75%"
      },
      {
        "k": "资料来源",
        "v": "https://download.basf.com/p1/8a8081c57fd4b609017fd663e1eb3c88/en/ULTRAMID%3Csup%3E%C2%AE%3Csup%3E_A3EG3_Product_Data_Sheet_Europe_English.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "K500": {
    "producer": "韩国可隆",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "K500"
      },
      {
        "k": "厂家 Producer",
        "v": "韩国可隆"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³ (ISO 1183)"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "14 g/10min (190°C/2.16 kg)"
      },
      {
        "k": "拉伸强度",
        "v": "65 MPa"
      },
      {
        "k": "断裂伸长率",
        "v": "30%"
      },
      {
        "k": "弯曲模量",
        "v": "2800 MPa (23°C)"
      },
      {
        "k": "简支梁缺口冲击强度",
        "v": "6 kJ/m² (+23°C)"
      },
      {
        "k": "热变形温度 HDT/A",
        "v": "110°C (1.82 MPa)"
      },
      {
        "k": "资料来源",
        "v": "https://www.materialdatacenter.com/ms/en/tradenames/Kocetal/Kolon+Industries/Kocetal%C2%AE+K500/7afaac3f/1394"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3EG7": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3EG7"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³ (ISO 1183)"
      },
      {
        "k": "熔体体积流动速率 MVR",
        "v": "30 cm³/10min (275°C/5 kg, ISO 1133)"
      },
      {
        "k": "熔融温度 Melting Temp",
        "v": "260°C (ISO 11357)"
      },
      {
        "k": "吸湿性 Moisture Absorption",
        "v": "1.4–1.8% (23°C/50%RH, eq.)"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "UL94 HB (1.57 mm)"
      },
      {
        "k": "成型收缩率 Molding Shrinkage",
        "v": "平行 0.48% / 垂直 1.00% (ISO 294-4)"
      },
      {
        "k": "资料来源",
        "v": "https://download.basf.com/p1/8a8082587fd4b608017fd656f0863da4/en/ULTRAMID%253Csup%253E%25C2%25AE%253Csup%253E_A3EG7"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3WG5": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3WG5"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.32 g/cm³"
      },
      {
        "k": "吸水率 Water Absorption",
        "v": "5.7–6.3 % (saturation)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "6500 MPa"
      },
      {
        "k": "弯曲强度 Flexural Strength",
        "v": "200 MPa"
      },
      {
        "k": "热变形温度 HDT A (1.80 MPa)",
        "v": "245 °C"
      },
      {
        "k": "热变形温度 HDT B (0.45 MPa)",
        "v": "250 °C"
      },
      {
        "k": "资料来源",
        "v": "https://www.matweb.com/search/datasheet.aspx?MatGUID=44a8f10a2e3e46d1b77ffdf3228547d6"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "KT10000": {
    "producer": "陶氏杜邦",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "KT10000"
      },
      {
        "k": "厂家 Producer",
        "v": "陶氏杜邦"
      },
      {
        "k": "密度 Density",
        "v": "0.964 g/cm³"
      },
      {
        "k": "熔体质量流动速率 MFR",
        "v": "8 g/10min (190°C/2.16kg)"
      },
      {
        "k": "拉伸冲击强度 Tensile Impact Strength",
        "v": "36.6 ft·lb/in² (Compression Molded)"
      },
      {
        "k": "特性 Features",
        "v": "UV stabilised, narrow MWD, excellent stiffness"
      },
      {
        "k": "资料来源",
        "v": "https://www.b2bpolymers.com/TDS/DOW_KT10000UE.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "K900": {
    "producer": "韩国可隆",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "K900"
      },
      {
        "k": "厂家 Producer",
        "v": "韩国可隆"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³"
      },
      {
        "k": "熔体流动速率 MFR",
        "v": "42–45 g/10min (190°C/2.16kg)"
      },
      {
        "k": "特性 Description",
        "v": "Very low viscosity grade, standard acetal copolymer"
      },
      {
        "k": "成型收缩率 Mold Shrinkage",
        "v": "~2.0 % (flow direction)"
      },
      {
        "k": "资料来源",
        "v": "https://www.polymerio.com/tds-pds/pom-kolon-kocetal-k900--tds-pds"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3WG6": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3WG6"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.36 g/cm³"
      },
      {
        "k": "MVR",
        "v": "30 cm³/10min (275°C/5kg)"
      },
      {
        "k": "熔融温度 Melting Temp",
        "v": "260 °C"
      },
      {
        "k": "吸水率 Saturation",
        "v": "5.2-5.8 %"
      },
      {
        "k": "阻燃等级 Flammability",
        "v": "UL94 HB (1.6mm)"
      },
      {
        "k": "成型收缩率(平行)",
        "v": "0.38 %"
      },
      {
        "k": "资料来源",
        "v": "https://www.picoplast.nl/uploads/fe193976523cdff85960a837255ff8beUltramid%20A3WG6%20-%20MDS%20-%20EN.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "LH606": {
    "producer": "台湾聚合",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "LH606"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾聚合"
      },
      {
        "k": "密度 Density",
        "v": "0.962 g/cm³"
      },
      {
        "k": "熔融指数 MFR",
        "v": "6.0 g/10min"
      },
      {
        "k": "材料类型",
        "v": "HDPE"
      },
      {
        "k": "用途",
        "v": "注塑成型、细圆丝加工、保护膜"
      },
      {
        "k": "资料来源",
        "v": "https://www.usife.com/USIWebFiles/Product/HDPE-LH606.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3WG7": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3WG7"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³ (ISO 1183)"
      },
      {
        "k": "玻纤含量",
        "v": "35% GF"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "10500 MPa (dry)"
      },
      {
        "k": "拉伸强度 Tensile Strength",
        "v": "200 MPa (dry)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "9500 MPa"
      },
      {
        "k": "热变形温度 HDT",
        "v": "250 °C (1.8 MPa, dry)"
      },
      {
        "k": "资料来源",
        "v": "https://www.matweb.com/search/datasheettext.aspx?matguid=df000bcfffbc42658d4259a4ab9d9845"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "NA208": {
    "producer": "台湾聚合",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "NA208"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾聚合"
      },
      {
        "k": "密度 Density",
        "v": "0.923 g/cm³ (ASTM D1505)"
      },
      {
        "k": "熔融指数 MFR",
        "v": "26 g/10min (ASTM D1238)"
      },
      {
        "k": "降伏点抗张强度 Yield Tensile Strength",
        "v": "~7.5 MPa (inject sheet)"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "~300%"
      },
      {
        "k": "用途",
        "v": "粉体涂装、注塑成型"
      },
      {
        "k": "资料来源",
        "v": "https://www.usife.com/USIWebFiles/Product/LDPE-NA208.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "M25": {
    "producer": "塞拉尼斯",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "M25"
      },
      {
        "k": "厂家 Producer",
        "v": "塞拉尼斯"
      },
      {
        "k": "密度 Density",
        "v": "1.41 g/cm³ (ASTM D792)"
      },
      {
        "k": "熔融指数 MFR",
        "v": "2.5 g/10min (ASTM D1238)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "2460 MPa (ISO)"
      },
      {
        "k": "屈服应力 Yield Stress",
        "v": "62 MPa"
      },
      {
        "k": "屈服应变 Yield Strain",
        "v": "13%"
      },
      {
        "k": "特性",
        "v": "高分子量，高韧性，耐冲击，主要用于挤出"
      },
      {
        "k": "资料来源",
        "v": "https://plastics.tridentplastics.com/Asset/DataSheet%20-%20Celcon%20M25.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "A3X2G5": {
    "producer": "巴斯夫",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "A3X2G5"
      },
      {
        "k": "厂家 Producer",
        "v": "巴斯夫"
      },
      {
        "k": "密度 Density",
        "v": "1.34 g/cm³"
      },
      {
        "k": "MVR",
        "v": "30 cm³/10min (275°C/5kg)"
      },
      {
        "k": "拉伸模量 Tensile Modulus",
        "v": "8000 MPa (dry)"
      },
      {
        "k": "弯曲模量 Flexural Modulus",
        "v": "~7000-8000 MPa"
      },
      {
        "k": "阻燃等级 Flame Rating",
        "v": "UL94 V-0 (1.5mm), 5VA (3.0mm)"
      },
      {
        "k": "热变形温度 HDT",
        "v": "~250°C (1.82MPa)"
      },
      {
        "k": "资料来源",
        "v": "https://matweb.com/search/datasheet.aspx?MatGUID=9c00d0d6c5374ebd8bb38ca702e4741a"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  },
  "NA248": {
    "producer": "台湾聚合",
    "props": [
      {
        "k": "牌号 Grade",
        "v": "NA248"
      },
      {
        "k": "厂家 Producer",
        "v": "台湾聚合"
      },
      {
        "k": "密度 Density",
        "v": "0.914 g/cm³ (ASTM D-1505)"
      },
      {
        "k": "熔融指数 MFR",
        "v": "46 g/10min (ASTM D1238)"
      },
      {
        "k": "断裂伸长率 Elongation at Break",
        "v": "250% (ASTM D-638)"
      },
      {
        "k": "应用",
        "v": "注塑级，塑胶花/奶粉罐软盖"
      },
      {
        "k": "资料来源",
        "v": "https://www.usife.com/USIWebFiles/Product/LDPE-NA248.pdf"
      },
      {
        "k": "资料口径",
        "v": "公开资料整理；正式以原厂 TDS、COA 与批次为准"
      }
    ]
  }
};
  Object.keys(extra).forEach(function (grade) {
    db.gradeMeta[grade] = Object.assign({}, db.gradeMeta[grade] || {}, extra[grade]);
  });
})();
