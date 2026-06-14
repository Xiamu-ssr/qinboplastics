#!/usr/bin/env node
/* 补齐产品改版遗漏的 i18n key：home.hot/hqCustom + products.custom + case (13 语言) */
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'assets', 'i18n');

const T = {
  zh: { hot:'热门', hqCustom:'改性定制', customEyebrow:'改性定制', customTitle:'按工况定制配方，支持全新料',
    customDesc:'玻纤增强、阻燃、增韧、耐候、导电抗静电、矿物填充——以 PP/PA/PC/ABS/PBT 等为基材，可指定 100% 全新料(原生料)定制，打样与配方服务齐备。',
    customT1:'玻纤增强', customT2:'阻燃改性', customT3:'增韧改性', customT4:'导电/抗静电', customT5:'全新料定制', customBtn:'谈改性需求',
    case1t:'全新料(原生料)定制', case1d:'100% 原生树脂基材，物性稳定一致，适合品质敏感与外观件。',
    case2t:'玻纤增强 PA66', case2d:'PA66 + 30% 玻纤，刚性与耐热大幅提升，用于汽车结构支架。',
    case3t:'阻燃 PP / ABS', case3d:'可做无卤阻燃至 UL94 V-0，用于家电与电子外壳。' },
  en: { hot:'Hot', hqCustom:'Custom Compounds', customEyebrow:'Custom Compounds', customTitle:'Formulations tailored to your application — virgin resin available',
    customDesc:'Glass-fiber reinforcement, flame retardancy, toughening, weathering, conductive/anti-static and mineral filling — built on PP/PA/PC/ABS/PBT bases, with 100% virgin-resin options plus sampling and formulation support.',
    customT1:'Glass-fiber reinforced', customT2:'Flame-retardant', customT3:'Toughened', customT4:'Conductive / anti-static', customT5:'Virgin-resin custom', customBtn:'Discuss your compound',
    case1t:'Virgin-resin custom compound', case1d:'100% virgin-resin base for consistent properties; ideal for quality-sensitive and cosmetic parts.',
    case2t:'GF-reinforced PA66', case2d:'PA66 + 30% glass fiber: greatly improved stiffness and heat resistance for automotive structural brackets.',
    case3t:'Flame-retardant PP / ABS', case3d:'Halogen-free flame retardancy up to UL94 V-0, for appliance and electronics housings.' },
  ja: { hot:'人気', hqCustom:'改質カスタム', customEyebrow:'改質カスタム', customTitle:'用途に合わせた配合設計、バージン材対応',
    customDesc:'ガラス繊維強化・難燃・強靱化・耐候・導電/帯電防止・無機充填——PP/PA/PC/ABS/PBT 等を基材とし、100% バージン材指定が可能。試作・配合サービスも完備。',
    customT1:'ガラス繊維強化', customT2:'難燃化', customT3:'強靱化', customT4:'導電/帯電防止', customT5:'バージン材カスタム', customBtn:'改質のご相談',
    case1t:'バージン材カスタムコンパウンド', case1d:'100% バージン樹脂基材で物性が安定・均一。品質重視部品や外観部品に最適。',
    case2t:'ガラス繊維強化 PA66', case2d:'PA66＋ガラス繊維30%で剛性・耐熱性が大幅向上。自動車構造ブラケットに使用。',
    case3t:'難燃 PP / ABS', case3d:'ハロゲンフリー難燃で UL94 V-0 まで対応。家電・電子機器筐体に。' },
  ko: { hot:'인기', hqCustom:'개질 맞춤', customEyebrow:'개질 맞춤', customTitle:'사용 조건에 맞춘 배합 설계, 버진 수지 지원',
    customDesc:'유리섬유 강화·난연·강인화·내후·도전/대전방지·무기 충전 — PP/PA/PC/ABS/PBT 등을 기재로 하며 100% 버진 수지 지정 가능, 시작 및 배합 서비스 완비.',
    customT1:'유리섬유 강화', customT2:'난연 개질', customT3:'강인화', customT4:'도전/대전방지', customT5:'버진 수지 맞춤', customBtn:'개질 상담하기',
    case1t:'버진 수지 맞춤 컴파운드', case1d:'100% 버진 수지 기재로 물성이 안정적이고 균일 — 품질 민감 부품과 외관 부품에 적합.',
    case2t:'유리섬유 강화 PA66', case2d:'PA66 + 유리섬유 30%로 강성과 내열성 대폭 향상 — 자동차 구조 브래킷에 사용.',
    case3t:'난연 PP / ABS', case3d:'무할로겐 난연 UL94 V-0까지 가능 — 가전 및 전자제품 하우징에 사용.' },
  vi: { hot:'Nổi bật', hqCustom:'Cải tính theo yêu cầu', customEyebrow:'Cải tính theo yêu cầu', customTitle:'Công thức tùy theo điều kiện sử dụng — hỗ trợ nhựa nguyên sinh',
    customDesc:'Gia cường sợi thủy tinh, chống cháy, tăng dai, kháng thời tiết, dẫn điện/chống tĩnh điện và độn khoáng — trên nền PP/PA/PC/ABS/PBT, có thể chỉ định nhựa nguyên sinh 100%, kèm dịch vụ làm mẫu và xây dựng công thức.',
    customT1:'Gia cường sợi thủy tinh', customT2:'Chống cháy', customT3:'Tăng dai', customT4:'Dẫn điện/chống tĩnh điện', customT5:'Tùy chỉnh nhựa nguyên sinh', customBtn:'Trao đổi nhu cầu cải tính',
    case1t:'Compound tùy chỉnh nhựa nguyên sinh', case1d:'Nền nhựa nguyên sinh 100% cho tính chất ổn định, đồng nhất; lý tưởng cho chi tiết yêu cầu chất lượng và bề mặt.',
    case2t:'PA66 gia cường sợi thủy tinh', case2d:'PA66 + 30% sợi thủy tinh: độ cứng và khả năng chịu nhiệt tăng mạnh, dùng cho giá đỡ kết cấu ô tô.',
    case3t:'PP / ABS chống cháy', case3d:'Chống cháy không halogen đạt UL94 V-0, dùng cho vỏ thiết bị gia dụng và điện tử.' },
  id: { hot:'Populer', hqCustom:'Compound Kustom', customEyebrow:'Compound Kustom', customTitle:'Formula disesuaikan dengan aplikasi — tersedia resin virgin',
    customDesc:'Penguatan serat kaca, tahan api, peliatan, tahan cuaca, konduktif/anti-statis, dan pengisian mineral — berbasis PP/PA/PC/ABS/PBT, dengan opsi resin virgin 100% serta layanan sampling dan formulasi.',
    customT1:'Penguatan serat kaca', customT2:'Tahan api', customT3:'Diperkuat (toughened)', customT4:'Konduktif/anti-statis', customT5:'Kustom resin virgin', customBtn:'Diskusikan kebutuhan Anda',
    case1t:'Compound kustom resin virgin', case1d:'Basis resin virgin 100% untuk properti yang stabil dan konsisten; ideal untuk komponen sensitif mutu dan estetika.',
    case2t:'PA66 dengan serat kaca', case2d:'PA66 + 30% serat kaca: kekakuan dan ketahanan panas meningkat pesat untuk braket struktural otomotif.',
    case3t:'PP / ABS tahan api', case3d:'Tahan api bebas halogen hingga UL94 V-0, untuk casing peralatan rumah tangga dan elektronik.' },
  ru: { hot:'Популярное', hqCustom:'Модификация под заказ', customEyebrow:'Модификация под заказ', customTitle:'Рецептуры под ваши условия эксплуатации — доступна первичная смола',
    customDesc:'Армирование стекловолокном, огнестойкость, повышение ударопрочности, атмосферостойкость, электропроводность/антистатика и минеральное наполнение — на базе PP/PA/PC/ABS/PBT, с вариантами из 100% первичной смолы, услугами образцов и разработки рецептур.',
    customT1:'Стекловолокно', customT2:'Огнестойкость', customT3:'Ударопрочность', customT4:'Электропроводность/антистатика', customT5:'На первичной смоле', customBtn:'Обсудить задачу',
    case1t:'Компаунд на первичной смоле', case1d:'Основа из 100% первичной смолы — стабильные и однородные свойства; идеально для ответственных и видимых деталей.',
    case2t:'PA66, армированный стекловолокном', case2d:'PA66 + 30% стекловолокна: значительно выше жёсткость и теплостойкость — для автомобильных конструкционных кронштейнов.',
    case3t:'Огнестойкий PP / ABS', case3d:'Безгалогенная огнестойкость до UL94 V-0 — для корпусов бытовой техники и электроники.' },
  fr: { hot:'Populaire', hqCustom:'Compounds sur mesure', customEyebrow:'Compounds sur mesure', customTitle:'Formulations adaptées à votre application — résine vierge disponible',
    customDesc:'Renfort fibre de verre, ignifugation, renforcement, tenue aux intempéries, conductivité/antistatique et charge minérale — sur bases PP/PA/PC/ABS/PBT, avec options 100 % résine vierge, échantillonnage et formulation.',
    customT1:'Renfort fibre de verre', customT2:'Ignifugé', customT3:'Renforcé', customT4:'Conducteur/antistatique', customT5:'Sur résine vierge', customBtn:'Parler de votre besoin',
    case1t:'Compound sur mesure en résine vierge', case1d:'Base 100 % résine vierge pour des propriétés constantes ; idéale pour pièces sensibles à la qualité et esthétiques.',
    case2t:'PA66 renforcé fibre de verre', case2d:'PA66 + 30 % fibre de verre : rigidité et tenue thermique nettement accrues, pour supports structurels automobiles.',
    case3t:'PP / ABS ignifugé', case3d:'Ignifugation sans halogène jusqu\u2019à UL94 V-0, pour boîtiers d\u2019électroménager et d\u2019électronique.' },
  de: { hot:'Beliebt', hqCustom:'Maßgeschneiderte Compounds', customEyebrow:'Maßgeschneiderte Compounds', customTitle:'Rezepturen passend zu Ihrer Anwendung – Neuware verfügbar',
    customDesc:'Glasfaserverstärkung, Flammschutz, Schlagzähmodifizierung, Witterungsbeständigkeit, leitfähig/antistatisch und Mineralfüllung – auf Basis von PP/PA/PC/ABS/PBT, mit 100 % Neuware-Optionen sowie Muster- und Rezepturservice.',
    customT1:'Glasfaserverstärkt', customT2:'Flammgeschützt', customT3:'Schlagzäh', customT4:'Leitfähig/antistatisch', customT5:'Neuware-Sonderlösung', customBtn:'Anforderung besprechen',
    case1t:'Sonder-Compound aus Neuware', case1d:'Basis aus 100 % Neuware für gleichbleibende Eigenschaften; ideal für qualitätskritische und Sichtbauteile.',
    case2t:'Glasfaserverstärktes PA66', case2d:'PA66 + 30 % Glasfaser: deutlich höhere Steifigkeit und Wärmebeständigkeit für Strukturhalter im Automobil.',
    case3t:'Flammgeschütztes PP / ABS', case3d:'Halogenfreier Flammschutz bis UL94 V-0, für Gehäuse von Haushalts- und Elektronikgeräten.' },
  es: { hot:'Destacado', hqCustom:'Compuestos a medida', customEyebrow:'Compuestos a medida', customTitle:'Formulaciones a la medida de su aplicación — resina virgen disponible',
    customDesc:'Refuerzo con fibra de vidrio, retardancia a la llama, tenacidad, resistencia a la intemperie, conductividad/antiestático y carga mineral — sobre bases PP/PA/PC/ABS/PBT, con opciones de resina 100% virgen, muestreo y formulación.',
    customT1:'Reforzado con fibra de vidrio', customT2:'Retardante de llama', customT3:'Tenacidad', customT4:'Conductivo/antiestático', customT5:'Personalizado en resina virgen', customBtn:'Hablemos de su necesidad',
    case1t:'Compuesto a medida en resina virgen', case1d:'Base de resina 100% virgen para propiedades constantes; ideal para piezas sensibles a calidad y estéticas.',
    case2t:'PA66 reforzado con fibra de vidrio', case2d:'PA66 + 30% fibra de vidrio: rigidez y resistencia al calor muy superiores, para soportes estructurales de automoción.',
    case3t:'PP / ABS retardante de llama', case3d:'Retardancia a la llama sin halógenos hasta UL94 V-0, para carcasas de electrodomésticos y electrónica.' },
  pt: { hot:'Destaque', hqCustom:'Compostos sob medida', customEyebrow:'Compostos sob medida', customTitle:'Formulações sob medida para sua aplicação — resina virgem disponível',
    customDesc:'Reforço com fibra de vidro, retardância de chama, tenacidade, resistência a intempéries, condutividade/antiestático e carga mineral — em bases PP/PA/PC/ABS/PBT, com opções de resina 100% virgem, amostragem e formulação.',
    customT1:'Reforço fibra de vidro', customT2:'Retardante de chama', customT3:'Tenacificado', customT4:'Condutivo/antiestático', customT5:'Personalizado em resina virgem', customBtn:'Falar sobre sua necessidade',
    case1t:'Composto sob medida em resina virgem', case1d:'Base de resina 100% virgem para propriedades consistentes; ideal para peças sensíveis à qualidade e estéticas.',
    case2t:'PA66 reforçado com fibra de vidro', case2d:'PA66 + 30% fibra de vidro: rigidez e resistência ao calor muito superiores, para suportes estruturais automotivos.',
    case3t:'PP / ABS retardante de chama', case3d:'Retardância de chama sem halogênio até UL94 V-0, para carcaças de eletrodomésticos e eletrônicos.' },
  tr: { hot:'Popüler', hqCustom:'Özel Modifiye', customEyebrow:'Özel Modifiye', customTitle:'Uygulamanıza özel formülasyon — virgin reçine mevcut',
    customDesc:'Cam elyaf takviyesi, alev geciktirme, toklaştırma, hava koşullarına dayanım, iletken/antistatik ve mineral dolgu — PP/PA/PC/ABS/PBT bazlı, %100 virgin reçine seçenekleri ile numune ve formülasyon hizmeti.',
    customT1:'Cam elyaf takviyeli', customT2:'Alev geciktirici', customT3:'Toklaştırılmış', customT4:'İletken/antistatik', customT5:'Virgin reçine özel', customBtn:'İhtiyacınızı görüşün',
    case1t:'Virgin reçine özel compound', case1d:'Tutarlı özellikler için %100 virgin reçine bazı; kalite hassasiyeti olan ve görünür parçalar için ideal.',
    case2t:'Cam elyaf takviyeli PA66', case2d:'PA66 + %30 cam elyaf: rijitlik ve ısı dayanımı belirgin artar; otomotiv yapısal braketleri için.',
    case3t:'Alev geciktirici PP / ABS', case3d:'Halojensiz alev geciktirme UL94 V-0\u2019a kadar; beyaz eşya ve elektronik muhafazaları için.' },
  ar: { hot:'الأكثر طلباً', hqCustom:'تركيبات مُعدّلة حسب الطلب', customEyebrow:'تركيبات مُعدّلة حسب الطلب', customTitle:'تركيبات مُصمّمة حسب ظروف الاستخدام — مع توفّر الراتنج البكر',
    customDesc:'تقوية بألياف زجاجية، مقاومة لهب، زيادة المتانة، مقاومة عوامل الطقس، توصيل/مقاومة الكهرباء الساكنة، وحشو معدني — على أساس PP/PA/PC/ABS/PBT، مع خيارات راتنج بكر 100% وخدمات تجهيز العينات والتركيب.',
    customT1:'تقوية بألياف زجاجية', customT2:'مقاوم للهب', customT3:'مُحسّن المتانة', customT4:'موصّل/مضاد للكهرباء الساكنة', customT5:'تخصيص براتنج بكر', customBtn:'ناقش متطلبات التعديل',
    case1t:'تركيبة مخصّصة براتنج بكر', case1d:'أساس من راتنج بكر 100% لخصائص ثابتة ومتجانسة؛ مثالي للأجزاء الحساسة للجودة والمظهرية.',
    case2t:'PA66 مقوّى بألياف زجاجية', case2d:'PA66 + 30% ألياف زجاجية: تحسّن كبير في الصلابة ومقاومة الحرارة، يُستخدم في دعامات هيكل السيارات.',
    case3t:'PP / ABS مقاوم للهب', case3d:'مقاومة لهب خالية من الهالوجين حتى UL94 V-0، لأغلفة الأجهزة المنزلية والإلكترونيات.' }
};

const HOME = ['hot','hqCustom'];
const PROD = ['customEyebrow','customTitle','customDesc','customT1','customT2','customT3','customT4','customT5','customBtn','case1t','case1d','case2t','case2d','case3t','case3d'];

Object.keys(T).forEach(function (lang) {
  const f = path.join(DIR, lang + '.json');
  const d = JSON.parse(fs.readFileSync(f, 'utf8'));
  const t = T[lang];
  d.home = d.home || {};
  HOME.forEach(function (k) { d.home[k] = t[k]; });
  d.products = d.products || {};
  PROD.forEach(function (k) { d.products[k] = t[k]; });
  fs.writeFileSync(f, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log('  ✓ ' + lang + '.json');
});
console.log('Done.');
