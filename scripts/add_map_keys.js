#!/usr/bin/env node
// 给 13 语言 trade 区块插入业务版图地图所需的 11 个 i18n key
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'assets', 'i18n');

const T = {
  zh: { mapEyebrow:'业务版图', mapTitle:'从双基地走向全球的贸易网络', mapDesc:'以上海、海口为支点，国内分销覆盖核心制造区域，国际进出口链接日韩、东南亚、中东等海外货源。', mapLegBase:'双基地', mapLegDom:'国内分销', mapLegIntl:'国际进出口', mapLegWh:'仓储基地', mapStage1:'双基地 · 上海与海口', mapStage2:'国内分销 · 覆盖核心制造区域', mapStage3:'国际进出口 · 链接全球货源', mapStage4:'仓储基地 · 苏州 + 海南' },
  en: { mapEyebrow:'Business Footprint', mapTitle:'A trade network reaching from two bases to the world', mapDesc:'With Shanghai and Haikou as pivots, domestic distribution covers core manufacturing regions while import/export links overseas sources across Japan, Korea, Southeast Asia and the Middle East.', mapLegBase:'Dual Bases', mapLegDom:'Domestic Distribution', mapLegIntl:'Import & Export', mapLegWh:'Warehousing', mapStage1:'Dual bases · Shanghai & Haikou', mapStage2:'Domestic distribution · core manufacturing regions', mapStage3:'Import & export · linking global sources', mapStage4:'Warehousing · Suzhou + Hainan' },
  ja: { mapEyebrow:'事業マップ', mapTitle:'二つの拠点から世界へ広がる貿易ネットワーク', mapDesc:'上海と海口を拠点に、国内流通は主要製造地域をカバーし、輸出入は日本・韓国・東南アジア・中東などの海外供給源とつながります。', mapLegBase:'二大拠点', mapLegDom:'国内流通', mapLegIntl:'輸出入', mapLegWh:'倉庫拠点', mapStage1:'二大拠点 · 上海と海口', mapStage2:'国内流通 · 主要製造地域をカバー', mapStage3:'輸出入 · 世界の供給源とつながる', mapStage4:'倉庫拠点 · 蘇州 + 海南' },
  ko: { mapEyebrow:'사업 지도', mapTitle:'두 거점에서 전 세계로 뻗어가는 무역 네트워크', mapDesc:'상하이와 하이커우를 거점으로 국내 유통은 핵심 제조 지역을 아우르고, 수출입은 일본·한국·동남아·중동 등 해외 공급처와 연결됩니다.', mapLegBase:'양대 거점', mapLegDom:'국내 유통', mapLegIntl:'수출입', mapLegWh:'물류 거점', mapStage1:'양대 거점 · 상하이 & 하이커우', mapStage2:'국내 유통 · 핵심 제조 지역 포괄', mapStage3:'수출입 · 글로벌 공급처 연결', mapStage4:'물류 거점 · 쑤저우 + 하이난' },
  vi: { mapEyebrow:'Bản đồ kinh doanh', mapTitle:'Mạng lưới thương mại vươn ra toàn cầu từ hai cơ sở', mapDesc:'Lấy Thượng Hải và Hải Khẩu làm trụ cột, phân phối trong nước bao phủ các khu vực sản xuất trọng điểm, còn xuất nhập khẩu kết nối nguồn hàng từ Nhật Bản, Hàn Quốc, Đông Nam Á và Trung Đông.', mapLegBase:'Hai cơ sở', mapLegDom:'Phân phối nội địa', mapLegIntl:'Xuất nhập khẩu', mapLegWh:'Kho bãi', mapStage1:'Hai cơ sở · Thượng Hải & Hải Khẩu', mapStage2:'Phân phối nội địa · các vùng sản xuất trọng điểm', mapStage3:'Xuất nhập khẩu · kết nối nguồn hàng toàn cầu', mapStage4:'Kho bãi · Tô Châu + Hải Nam' },
  id: { mapEyebrow:'Peta Bisnis', mapTitle:'Jaringan perdagangan dari dua basis menuju dunia', mapDesc:'Dengan Shanghai dan Haikou sebagai poros, distribusi domestik mencakup wilayah manufaktur inti, sementara ekspor-impor menghubungkan sumber luar negeri di Jepang, Korea, Asia Tenggara, dan Timur Tengah.', mapLegBase:'Dua Basis', mapLegDom:'Distribusi Domestik', mapLegIntl:'Ekspor-Impor', mapLegWh:'Pergudangan', mapStage1:'Dua basis · Shanghai & Haikou', mapStage2:'Distribusi domestik · wilayah manufaktur inti', mapStage3:'Ekspor-impor · menghubungkan sumber global', mapStage4:'Pergudangan · Suzhou + Hainan' },
  ru: { mapEyebrow:'Карта бизнеса', mapTitle:'Торговая сеть, простирающаяся от двух баз по всему миру', mapDesc:'Опираясь на Шанхай и Хайкоу, внутренняя дистрибуция охватывает ключевые производственные регионы, а импорт-экспорт связывает зарубежные источники в Японии, Корее, Юго-Восточной Азии и на Ближнем Востоке.', mapLegBase:'Две базы', mapLegDom:'Внутренняя дистрибуция', mapLegIntl:'Импорт и экспорт', mapLegWh:'Склады', mapStage1:'Две базы · Шанхай и Хайкоу', mapStage2:'Внутренняя дистрибуция · ключевые регионы', mapStage3:'Импорт и экспорт · связь с мировыми источниками', mapStage4:'Склады · Сучжоу + Хайнань' },
  fr: { mapEyebrow:'Réseau commercial', mapTitle:'Un réseau commercial reliant deux bases au monde entier', mapDesc:'Avec Shanghai et Haikou comme pivots, la distribution nationale couvre les régions manufacturières clés tandis que l’import-export relie des sources étrangères au Japon, en Corée, en Asie du Sud-Est et au Moyen-Orient.', mapLegBase:'Deux bases', mapLegDom:'Distribution nationale', mapLegIntl:'Import-export', mapLegWh:'Entrepôts', mapStage1:'Deux bases · Shanghai et Haikou', mapStage2:'Distribution nationale · régions manufacturières clés', mapStage3:'Import-export · connexion aux sources mondiales', mapStage4:'Entrepôts · Suzhou + Hainan' },
  de: { mapEyebrow:'Geschäftskarte', mapTitle:'Ein Handelsnetz von zwei Standorten in die ganze Welt', mapDesc:'Mit Shanghai und Haikou als Drehkreuzen deckt der Inlandsvertrieb zentrale Fertigungsregionen ab, während Import/Export Bezugsquellen in Japan, Korea, Südostasien und dem Nahen Osten verbindet.', mapLegBase:'Zwei Standorte', mapLegDom:'Inlandsvertrieb', mapLegIntl:'Import & Export', mapLegWh:'Lagerstandorte', mapStage1:'Zwei Standorte · Shanghai & Haikou', mapStage2:'Inlandsvertrieb · zentrale Fertigungsregionen', mapStage3:'Import & Export · Anbindung globaler Quellen', mapStage4:'Lagerstandorte · Suzhou + Hainan' },
  es: { mapEyebrow:'Mapa de negocio', mapTitle:'Una red comercial que se extiende desde dos bases al mundo', mapDesc:'Con Shanghái y Haikou como ejes, la distribución nacional cubre las regiones manufactureras clave, mientras que la importación y exportación conecta fuentes en Japón, Corea, el Sudeste Asiático y Oriente Medio.', mapLegBase:'Dos bases', mapLegDom:'Distribución nacional', mapLegIntl:'Importación y exportación', mapLegWh:'Almacenamiento', mapStage1:'Dos bases · Shanghái y Haikou', mapStage2:'Distribución nacional · regiones manufactureras clave', mapStage3:'Importación y exportación · conectando fuentes globales', mapStage4:'Almacenamiento · Suzhou + Hainan' },
  pt: { mapEyebrow:'Mapa de negócios', mapTitle:'Uma rede comercial que vai de duas bases para o mundo', mapDesc:'Com Xangai e Haikou como pontos de apoio, a distribuição nacional cobre as principais regiões industriais, enquanto a importação e exportação conecta fontes no Japão, Coreia, Sudeste Asiático e Oriente Médio.', mapLegBase:'Duas bases', mapLegDom:'Distribuição nacional', mapLegIntl:'Importação e exportação', mapLegWh:'Armazenagem', mapStage1:'Duas bases · Xangai e Haikou', mapStage2:'Distribuição nacional · principais regiões industriais', mapStage3:'Importação e exportação · conectando fontes globais', mapStage4:'Armazenagem · Suzhou + Hainan' },
  tr: { mapEyebrow:'İş Haritası', mapTitle:'İki üsten dünyaya uzanan bir ticaret ağı', mapDesc:'Şanghay ve Haikou’yu eksen alarak yurt içi dağıtım temel üretim bölgelerini kapsar; ithalat-ihracat ise Japonya, Kore, Güneydoğu Asya ve Orta Doğu’daki tedarik kaynaklarını birbirine bağlar.', mapLegBase:'İki Üs', mapLegDom:'Yurt İçi Dağıtım', mapLegIntl:'İthalat-İhracat', mapLegWh:'Depolama', mapStage1:'İki üs · Şanghay ve Haikou', mapStage2:'Yurt içi dağıtım · temel üretim bölgeleri', mapStage3:'İthalat-ihracat · küresel kaynaklara bağlanma', mapStage4:'Depolama · Suzhou + Hainan' },
  ar: { mapEyebrow:'خريطة الأعمال', mapTitle:'شبكة تجارية تمتد من قاعدتين إلى العالم', mapDesc:'انطلاقًا من شنغهاي وهايكو كمحورين، يغطي التوزيع المحلي مناطق التصنيع الرئيسية، بينما يربط الاستيراد والتصدير مصادر خارجية في اليابان وكوريا وجنوب شرق آسيا والشرق الأوسط.', mapLegBase:'قاعدتان', mapLegDom:'التوزيع المحلي', mapLegIntl:'الاستيراد والتصدير', mapLegWh:'مراكز التخزين', mapStage1:'قاعدتان · شنغهاي وهايكو', mapStage2:'التوزيع المحلي · مناطق التصنيع الرئيسية', mapStage3:'الاستيراد والتصدير · ربط المصادر العالمية', mapStage4:'مراكز التخزين · سوتشو + هاينان' },
};

const ORDER = ['mapEyebrow','mapTitle','mapDesc','mapLegBase','mapLegDom','mapLegIntl','mapLegWh','mapStage1','mapStage2','mapStage3','mapStage4'];

let changed = 0;
for (const lang of Object.keys(T)) {
  const p = path.join(DIR, lang + '.json');
  let raw = fs.readFileSync(p, 'utf8');
  const data = JSON.parse(raw);
  if (!data.trade) { console.log(`✗ ${lang}: 无 trade 块`); continue; }
  if (data.trade.mapTitle !== undefined) { console.log(`= ${lang}: 已有, 跳过`); continue; }

  const lines = ORDER.map(k => `    "${k}": ${JSON.stringify(T[lang][k])}`);
  const insert = lines.join(',\n') + ',\n';
  const re = /("trade"\s*:\s*\{\s*\n)/;
  if (!re.test(raw)) { console.log(`✗ ${lang}: 未找到 trade 块`); continue; }
  raw = raw.replace(re, `$1${insert}`);

  const before = Object.keys(data.trade).length;
  const after = JSON.parse(raw); // 校验合法
  const now = Object.keys(after.trade).length;
  if (now !== before + 11) { console.log(`✗ ${lang}: key 数异常 ${before}→${now}`); continue; }
  fs.writeFileSync(p, raw);
  console.log(`✓ ${lang}: trade +11 → ${now}`);
  changed++;
}
console.log(`\n完成，修改 ${changed} 个文件`);
