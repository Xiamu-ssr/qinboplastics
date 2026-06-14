/* ===== 秦帛 · 合作客户与地区覆盖 =====
 * 数据来源：秦帛提供的客户与供应链资料。
 * 展示口径：
 *  - QB_CLIENTS 只放更适合作为客户背书的生产商、工厂、终端品牌或集团型客户；
 *  - 明显塑化贸易商、经营部、进出口公司不进入客户墙；
 *  - QB_MAP_DOMESTIC_REGIONS 为历史合作记录汇总后的省份覆盖，只按省份聚合，不暴露全量客户名；
 *  - 沙盘悬浮仅展示代表性客户名，避免官网呈现成内部交易清单。
 */
window.QB_CLIENTS = [
  { name: "合肥杰事杰新材料股份有限公司", province: "安徽", industry: "高分子复合材料" },
  { name: "株洲时代新材料科技股份有限公司", province: "湖南", industry: "轨交与新材料" },
  { name: "明冠新材料股份有限公司", province: "江西", industry: "新能源材料" },
  { name: "中广核高新核材集团有限公司", province: "江苏", industry: "高分子材料" },
  { name: "上海大赛璐塑料工业有限公司", province: "上海", industry: "改性树脂" },
  { name: "广州日写精密塑料有限公司", province: "广东", industry: "精密塑料制品" },
  { name: "拜尔斯道夫日化有限公司", province: "湖北", industry: "日化消费品" },
  { name: "国药集团化学试剂（北京）有限公司", province: "北京", industry: "化学试剂" },
  { name: "宁波欧普电器有限公司", province: "浙江", industry: "小家电制造" },
  { name: "绍兴佳华高分子材料股份有限公司", province: "浙江", industry: "高分子材料" },
  { name: "修正环球施乐普医药（潍坊）有限公司", province: "山东", industry: "医药制造" },
  { name: "贵州航天工业物资有限公司", province: "贵州", industry: "航天工业供应链" },
  { name: "天津澳普林特塑胶有限公司", province: "天津", industry: "塑胶制品" },
  { name: "河北今有顺电缆辅料有限公司", province: "河北", industry: "电缆辅料" },
  { name: "河北科佳橡胶制品有限公司", province: "河北", industry: "橡胶制品" },
  { name: "烟台三洋塑料有限公司", province: "山东", industry: "塑料制品" },
  { name: "安徽高德韦尔精密部件有限公司", province: "安徽", industry: "精密部件" },
  { name: "芜湖斯若泰汽车配件有限公司", province: "安徽", industry: "汽车配件" },
  { name: "江阴中凌电器制造有限公司", province: "江苏", industry: "电器制造" },
  { name: "常州凯迪电器有限公司", province: "江苏", industry: "电器制造" },
  { name: "南京普鲁卡姆电器有限公司", province: "江苏", industry: "电器制造" },
  { name: "浙江德洋胶粘制品有限公司", province: "浙江", industry: "胶粘制品" },
  { name: "浙江摩尔电器有限公司", province: "浙江", industry: "电器制造" },
  { name: "东莞市衡力光电有限公司", province: "广东", industry: "光电制造" },
  { name: "南通新概念彩印有限公司", province: "江苏", industry: "包装印刷" },
  { name: "厦门当盛新材料有限公司", province: "福建", industry: "新材料" },
  { name: "新乡市豫吉塑业有限公司", province: "河南", industry: "塑料制品" },
  { name: "十堰飞纳科科技有限公司", province: "湖北", industry: "科技制造" }
];

window.QB_MAP_DOMESTIC_REGIONS = [
  { zh: "上海", en: "Shanghai", samples: ["上海大赛璐塑料工业有限公司"] },
  { zh: "江苏", en: "Jiangsu", samples: ["中广核高新核材集团有限公司", "南京普鲁卡姆电器有限公司", "江阴中凌电器制造有限公司"] },
  { zh: "浙江", en: "Zhejiang", samples: ["宁波欧普电器有限公司", "绍兴佳华高分子材料股份有限公司", "浙江德洋胶粘制品有限公司"] },
  { zh: "安徽", en: "Anhui", samples: ["合肥杰事杰新材料股份有限公司", "安徽高德韦尔精密部件有限公司"] },
  { zh: "山东", en: "Shandong", samples: ["修正环球施乐普医药（潍坊）有限公司", "烟台三洋塑料有限公司"] },
  { zh: "广东", en: "Guangdong", samples: ["广州日写精密塑料有限公司", "东莞市衡力光电有限公司"] },
  { zh: "天津", en: "Tianjin", samples: ["天津澳普林特塑胶有限公司"] },
  { zh: "河北", en: "Hebei", samples: ["河北今有顺电缆辅料有限公司", "河北科佳橡胶制品有限公司"] },
  { zh: "江西", en: "Jiangxi", samples: ["明冠新材料股份有限公司"] },
  { zh: "福建", en: "Fujian", samples: ["厦门当盛新材料有限公司"] },
  { zh: "湖南", en: "Hunan", samples: ["株洲时代新材料科技股份有限公司"] },
  { zh: "湖北", en: "Hubei", samples: ["拜尔斯道夫日化有限公司", "十堰飞纳科科技有限公司"] },
  { zh: "贵州", en: "Guizhou", samples: ["贵州航天工业物资有限公司"] },
  { zh: "北京", en: "Beijing", samples: ["国药集团化学试剂（北京）有限公司"] },
  { zh: "河南", en: "Henan", samples: ["新乡市豫吉塑业有限公司"] },
  { zh: "四川", en: "Sichuan", samples: [] },
  { zh: "宁夏", en: "Ningxia", samples: [] }
];

window.QB_REGION_CENTERS = {
  "上海": { lon: 121.47, lat: 31.23 },
  "浙江": { lon: 120.15, lat: 30.27 },
  "江苏": { lon: 118.78, lat: 32.04 },
  "安徽": { lon: 117.28, lat: 31.86 },
  "广东": { lon: 113.27, lat: 23.13 },
  "天津": { lon: 117.20, lat: 39.12 },
  "河北": { lon: 114.50, lat: 38.04 },
  "山东": { lon: 117.00, lat: 36.65 },
  "江西": { lon: 115.86, lat: 28.68 },
  "福建": { lon: 118.10, lat: 24.48 },
  "湖南": { lon: 113.13, lat: 27.83 },
  "湖北": { lon: 114.30, lat: 30.59 },
  "贵州": { lon: 106.63, lat: 26.65 },
  "北京": { lon: 116.40, lat: 39.90 },
  "河南": { lon: 113.62, lat: 34.75 },
  "四川": { lon: 104.07, lat: 30.67 },
  "宁夏": { lon: 106.27, lat: 38.47 }
};

window.QB_SOURCE_REGIONS = [
  { name: "韩国", en: "Korea", iso: "KR", lon: 127.0, lat: 36.5, samples: ["SK", "LG化学", "韩国工程", "晓星"] },
  { name: "日本", en: "Japan", iso: "JP", lon: 138.5, lat: 36.2, samples: ["东丽", "宝理", "旭化成", "宇部"] },
  { name: "台湾", en: "Taiwan", iso: "CN-TW", lon: 121.0, lat: 23.7, samples: ["奇美", "台塑", "台化", "李长荣"] },
  { name: "新加坡", en: "Singapore", iso: "SG", lon: 103.82, lat: 1.35, samples: ["电气化学", "区域货源"] },
  { name: "泰国", en: "Thailand", iso: "TH", lon: 101.0, lat: 15.5, samples: ["宇部"] },
  { name: "卡塔尔", en: "Qatar", iso: "QA", lon: 51.2, lat: 25.3, samples: ["中东聚烯烃"] }
];
