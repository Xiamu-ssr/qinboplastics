#!/usr/bin/env node
/* 注入第三轮新增 i18n key：
 *  home.searchPh
 *  about.cult* / tenet* / partner* / agent*
 *  footer.certs
 *  cert.* (新顶层组)
 * 13 语言全覆盖。幂等：已存在的 key 会被覆盖为本表值。
 */
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'assets', 'i18n');

const T = {
  zh: {
    searchPh: '搜索产品名称、牌号或品牌，如 PA66 / 8150 / 奇美',
    cultEyebrow: '企业理念', cultTitle: '能力不分大小，心态决定一切',
    cultBiz: '<strong>经营理念</strong>以质量求生存，以信誉求发展',
    cultQuality: '<strong>质量方针</strong>以质求量、以质求效、以质求誉、以质求生',
    cultMgmt: '<strong>管理理念</strong>以人为本，诚信立业、科技兴司、团结务实',
    tenet1: '客户的发展是秦帛的工作', tenet2: '客户的满意是秦帛的宗旨',
    tenet3: '客户的肯定是秦帛的追求', tenet4: '客户的合作是秦帛的期待',
    partnerEyebrow: '合作品牌', partnerTitle: '原厂渠道 · 正品现货',
    partnerDesc: '与国内外主流树脂厂商建立长期合作，并拥有拜耳、住友、首诺等品牌授权代理资质。',
    agentBayer: '🏅 德国拜耳 授权代理', agentSumitomo: '🏅 日本住友 授权代理', agentAscend: '🏅 美国首诺 授权代理',
    certs: '资质证照',
    licenseSh: '上海营业执照', licenseHk: '海口营业执照', customsSh: '上海海关备案', customsHk: '海口海关证明'
  },
  en: {
    searchPh: 'Search by product, grade or brand — e.g. PA66 / 8150 / Chimei',
    cultEyebrow: 'Our Philosophy', cultTitle: 'Ability has no size; attitude decides everything',
    cultBiz: '<strong>Business Principle</strong>Survive through quality, grow through reputation',
    cultQuality: '<strong>Quality Policy</strong>Quality drives volume, efficiency, reputation and survival',
    cultMgmt: '<strong>Management Philosophy</strong>People first — integrity, technology, unity and pragmatism',
    tenet1: "Customers' growth is Qinbo's work", tenet2: "Customers' satisfaction is Qinbo's mission",
    tenet3: "Customers' recognition is Qinbo's pursuit", tenet4: "Customers' partnership is Qinbo's aspiration",
    partnerEyebrow: 'Partner Brands', partnerTitle: 'Factory channels · genuine stock',
    partnerDesc: 'Long-term partnerships with leading resin producers worldwide, plus authorized agency for brands such as Bayer, Sumitomo and Ascend.',
    agentBayer: '🏅 Bayer (Germany) · Authorized Agent', agentSumitomo: '🏅 Sumitomo (Japan) · Authorized Agent', agentAscend: '🏅 Ascend (USA) · Authorized Agent',
    certs: 'Credentials',
    licenseSh: 'Shanghai Business License', licenseHk: 'Haikou Business License', customsSh: 'Shanghai Customs Record', customsHk: 'Haikou Customs Certificate'
  },
  ja: {
    searchPh: '製品名・グレード・ブランドで検索（例：PA66 / 8150 / 奇美）',
    cultEyebrow: '企業理念', cultTitle: '能力に大小はなく、心構えがすべてを決める',
    cultBiz: '<strong>経営理念</strong>品質で生き残り、信用で発展する',
    cultQuality: '<strong>品質方針</strong>品質で量・効率・信頼・存続を追求する',
    cultMgmt: '<strong>管理理念</strong>人を基本とし、誠実・技術・団結・実務を貫く',
    tenet1: 'お客様の発展は秦帛の仕事', tenet2: 'お客様の満足は秦帛の使命',
    tenet3: 'お客様の評価は秦帛の追求', tenet4: 'お客様との協業は秦帛の願い',
    partnerEyebrow: '取引ブランド', partnerTitle: '正規ルート・正規品在庫',
    partnerDesc: '国内外の主要樹脂メーカーと長期的に協力し、バイエル・住友・アセンド等の正規代理資格を有します。',
    agentBayer: '🏅 ドイツ・バイエル 正規代理店', agentSumitomo: '🏅 日本・住友 正規代理店', agentAscend: '🏅 米国・アセンド 正規代理店',
    certs: '資格・許認可',
    licenseSh: '上海営業許可証', licenseHk: '海口営業許可証', customsSh: '上海税関登録', customsHk: '海口税関証明'
  },
  ko: {
    searchPh: '제품·그레이드·브랜드 검색 (예: PA66 / 8150 / Chimei)',
    cultEyebrow: '기업 이념', cultTitle: '능력에는 크고 작음이 없으며, 태도가 모든 것을 결정한다',
    cultBiz: '<strong>경영 이념</strong>품질로 생존하고 신용으로 발전한다',
    cultQuality: '<strong>품질 방침</strong>품질로 생산량·효율·명성·생존을 추구한다',
    cultMgmt: '<strong>관리 이념</strong>사람 중심 — 신의·기술·단결·실용',
    tenet1: '고객의 성장은 친보의 일', tenet2: '고객의 만족은 친보의 사명',
    tenet3: '고객의 인정은 친보의 추구', tenet4: '고객의 협력은 친보의 기대',
    partnerEyebrow: '협력 브랜드', partnerTitle: '정식 채널 · 정품 현물',
    partnerDesc: '국내외 주요 수지 제조사와 장기 협력하며 바이엘·스미토모·어센드 등 브랜드의 공식 대리 자격을 보유합니다.',
    agentBayer: '🏅 독일 바이엘 공식 대리점', agentSumitomo: '🏅 일본 스미토모 공식 대리점', agentAscend: '🏅 미국 어센드 공식 대리점',
    certs: '자격·인증',
    licenseSh: '상하이 사업자등록증', licenseHk: '하이커우 사업자등록증', customsSh: '상하이 세관 등록', customsHk: '하이커우 세관 증명'
  },
  vi: {
    searchPh: 'Tìm theo sản phẩm, mã hạt hoặc thương hiệu — vd: PA66 / 8150 / Chimei',
    cultEyebrow: 'Triết lý doanh nghiệp', cultTitle: 'Năng lực không phân lớn nhỏ, thái độ quyết định tất cả',
    cultBiz: '<strong>Triết lý kinh doanh</strong>Tồn tại bằng chất lượng, phát triển bằng uy tín',
    cultQuality: '<strong>Chính sách chất lượng</strong>Chất lượng tạo sản lượng, hiệu quả, uy tín và sự tồn tại',
    cultMgmt: '<strong>Triết lý quản lý</strong>Lấy con người làm gốc — chính trực, công nghệ, đoàn kết và thực tế',
    tenet1: 'Sự phát triển của khách hàng là công việc của Qinbo', tenet2: 'Sự hài lòng của khách hàng là tôn chỉ của Qinbo',
    tenet3: 'Sự ghi nhận của khách hàng là mục tiêu của Qinbo', tenet4: 'Sự hợp tác của khách hàng là kỳ vọng của Qinbo',
    partnerEyebrow: 'Thương hiệu hợp tác', partnerTitle: 'Kênh chính hãng · hàng thật có sẵn',
    partnerDesc: 'Hợp tác lâu dài với các nhà sản xuất nhựa hàng đầu trong và ngoài nước, đồng thời là đại lý ủy quyền của các thương hiệu như Bayer, Sumitomo và Ascend.',
    agentBayer: '🏅 Bayer (Đức) · Đại lý ủy quyền', agentSumitomo: '🏅 Sumitomo (Nhật Bản) · Đại lý ủy quyền', agentAscend: '🏅 Ascend (Hoa Kỳ) · Đại lý ủy quyền',
    certs: 'Chứng nhận',
    licenseSh: 'Giấy phép KD Thượng Hải', licenseHk: 'Giấy phép KD Hải Khẩu', customsSh: 'Đăng ký Hải quan Thượng Hải', customsHk: 'Chứng nhận Hải quan Hải Khẩu'
  },
  id: {
    searchPh: 'Cari produk, grade, atau merek — mis. PA66 / 8150 / Chimei',
    cultEyebrow: 'Filosofi Perusahaan', cultTitle: 'Kemampuan tak diukur besar kecil; sikap menentukan segalanya',
    cultBiz: '<strong>Prinsip Bisnis</strong>Bertahan dengan kualitas, berkembang dengan reputasi',
    cultQuality: '<strong>Kebijakan Mutu</strong>Mutu mendorong volume, efisiensi, reputasi, dan kelangsungan',
    cultMgmt: '<strong>Filosofi Manajemen</strong>Mengutamakan manusia — integritas, teknologi, kesatuan, dan kepraktisan',
    tenet1: 'Pertumbuhan pelanggan adalah pekerjaan Qinbo', tenet2: 'Kepuasan pelanggan adalah tujuan Qinbo',
    tenet3: 'Pengakuan pelanggan adalah upaya Qinbo', tenet4: 'Kerja sama pelanggan adalah harapan Qinbo',
    partnerEyebrow: 'Merek Mitra', partnerTitle: 'Kanal resmi pabrik · stok asli',
    partnerDesc: 'Kemitraan jangka panjang dengan produsen resin terkemuka di dalam dan luar negeri, serta keagenan resmi merek seperti Bayer, Sumitomo, dan Ascend.',
    agentBayer: '🏅 Bayer (Jerman) · Agen Resmi', agentSumitomo: '🏅 Sumitomo (Jepang) · Agen Resmi', agentAscend: '🏅 Ascend (AS) · Agen Resmi',
    certs: 'Sertifikat & Izin',
    licenseSh: 'Izin Usaha Shanghai', licenseHk: 'Izin Usaha Haikou', customsSh: 'Registrasi Bea Cukai Shanghai', customsHk: 'Sertifikat Bea Cukai Haikou'
  },
  ru: {
    searchPh: 'Поиск по продукту, марке или бренду — напр. PA66 / 8150 / Chimei',
    cultEyebrow: 'Философия компании', cultTitle: 'Способности не делятся на большие и малые — всё решает настрой',
    cultBiz: '<strong>Принцип бизнеса</strong>Выживать качеством, развиваться репутацией',
    cultQuality: '<strong>Политика качества</strong>Качество определяет объём, эффективность, репутацию и устойчивость',
    cultMgmt: '<strong>Философия управления</strong>Человек прежде всего — честность, технологии, единство и прагматизм',
    tenet1: 'Рост клиентов — работа Qinbo', tenet2: 'Удовлетворённость клиентов — цель Qinbo',
    tenet3: 'Признание клиентов — стремление Qinbo', tenet4: 'Сотрудничество с клиентами — надежда Qinbo',
    partnerEyebrow: 'Бренды-партнёры', partnerTitle: 'Заводские каналы · оригинальный сток',
    partnerDesc: 'Долгосрочное сотрудничество с ведущими мировыми производителями смол и официальное представительство брендов Bayer, Sumitomo и Ascend.',
    agentBayer: '🏅 Bayer (Германия) · Официальный агент', agentSumitomo: '🏅 Sumitomo (Япония) · Официальный агент', agentAscend: '🏅 Ascend (США) · Официальный агент',
    certs: 'Документы и лицензии',
    licenseSh: 'Лицензия (Шанхай)', licenseHk: 'Лицензия (Хайкоу)', customsSh: 'Таможенный учёт (Шанхай)', customsHk: 'Таможенный сертификат (Хайкоу)'
  },
  fr: {
    searchPh: 'Rechercher par produit, grade ou marque — ex. PA66 / 8150 / Chimei',
    cultEyebrow: 'Notre philosophie', cultTitle: "La capacité n'a pas de taille ; c'est l'état d'esprit qui décide",
    cultBiz: "<strong>Principe d'entreprise</strong>Survivre par la qualité, croître par la réputation",
    cultQuality: '<strong>Politique qualité</strong>La qualité génère volume, efficacité, réputation et pérennité',
    cultMgmt: "<strong>Philosophie de gestion</strong>L'humain d'abord — intégrité, technologie, unité et pragmatisme",
    tenet1: 'La croissance des clients est le travail de Qinbo', tenet2: 'La satisfaction des clients est la mission de Qinbo',
    tenet3: "La reconnaissance des clients est l'ambition de Qinbo", tenet4: "Le partenariat des clients est l'attente de Qinbo",
    partnerEyebrow: 'Marques partenaires', partnerTitle: "Circuits d'usine · stock authentique",
    partnerDesc: 'Partenariats durables avec les principaux producteurs de résine, et représentation agréée de marques telles que Bayer, Sumitomo et Ascend.',
    agentBayer: '🏅 Bayer (Allemagne) · Agent agréé', agentSumitomo: '🏅 Sumitomo (Japon) · Agent agréé', agentAscend: '🏅 Ascend (États-Unis) · Agent agréé',
    certs: 'Documents légaux',
    licenseSh: 'Licence commerciale (Shanghai)', licenseHk: 'Licence commerciale (Haikou)', customsSh: 'Enregistrement douanier (Shanghai)', customsHk: 'Certificat douanier (Haikou)'
  },
  de: {
    searchPh: 'Suche nach Produkt, Typ oder Marke – z. B. PA66 / 8150 / Chimei',
    cultEyebrow: 'Unternehmensphilosophie', cultTitle: 'Fähigkeit kennt keine Größe – die Einstellung entscheidet alles',
    cultBiz: '<strong>Geschäftsprinzip</strong>Durch Qualität bestehen, durch Ruf wachsen',
    cultQuality: '<strong>Qualitätspolitik</strong>Qualität schafft Menge, Effizienz, Ruf und Bestand',
    cultMgmt: '<strong>Managementphilosophie</strong>Der Mensch zuerst – Integrität, Technik, Einheit und Pragmatismus',
    tenet1: 'Das Wachstum der Kunden ist Qinbos Aufgabe', tenet2: 'Die Zufriedenheit der Kunden ist Qinbos Ziel',
    tenet3: 'Die Anerkennung der Kunden ist Qinbos Streben', tenet4: 'Die Zusammenarbeit der Kunden ist Qinbos Erwartung',
    partnerEyebrow: 'Partnermarken', partnerTitle: 'Werkskanäle · Originalware ab Lager',
    partnerDesc: 'Langfristige Partnerschaften mit führenden Harzherstellern sowie autorisierte Vertretung von Marken wie Bayer, Sumitomo und Ascend.',
    agentBayer: '🏅 Bayer (Deutschland) · Autorisierter Vertreter', agentSumitomo: '🏅 Sumitomo (Japan) · Autorisierter Vertreter', agentAscend: '🏅 Ascend (USA) · Autorisierter Vertreter',
    certs: 'Nachweise',
    licenseSh: 'Gewerbelizenz Shanghai', licenseHk: 'Gewerbelizenz Haikou', customsSh: 'Zollregistrierung Shanghai', customsHk: 'Zollzertifikat Haikou'
  },
  es: {
    searchPh: 'Busca por producto, grado o marca — p. ej. PA66 / 8150 / Chimei',
    cultEyebrow: 'Nuestra filosofía', cultTitle: 'La capacidad no tiene tamaño; la actitud lo decide todo',
    cultBiz: '<strong>Principio empresarial</strong>Sobrevivir con calidad, crecer con reputación',
    cultQuality: '<strong>Política de calidad</strong>La calidad impulsa volumen, eficiencia, reputación y permanencia',
    cultMgmt: '<strong>Filosofía de gestión</strong>Las personas primero: integridad, tecnología, unidad y pragmatismo',
    tenet1: 'El crecimiento de los clientes es el trabajo de Qinbo', tenet2: 'La satisfacción de los clientes es la misión de Qinbo',
    tenet3: 'El reconocimiento de los clientes es la meta de Qinbo', tenet4: 'La colaboración de los clientes es la expectativa de Qinbo',
    partnerEyebrow: 'Marcas asociadas', partnerTitle: 'Canales de fábrica · stock original',
    partnerDesc: 'Alianzas a largo plazo con los principales productores de resina y representación autorizada de marcas como Bayer, Sumitomo y Ascend.',
    agentBayer: '🏅 Bayer (Alemania) · Agente autorizado', agentSumitomo: '🏅 Sumitomo (Japón) · Agente autorizado', agentAscend: '🏅 Ascend (EE. UU.) · Agente autorizado',
    certs: 'Credenciales',
    licenseSh: 'Licencia comercial (Shanghái)', licenseHk: 'Licencia comercial (Haikou)', customsSh: 'Registro aduanero (Shanghái)', customsHk: 'Certificado aduanero (Haikou)'
  },
  pt: {
    searchPh: 'Busque por produto, grade ou marca — ex. PA66 / 8150 / Chimei',
    cultEyebrow: 'Nossa filosofia', cultTitle: 'A capacidade não tem tamanho; a atitude decide tudo',
    cultBiz: '<strong>Princípio de negócio</strong>Sobreviver pela qualidade, crescer pela reputação',
    cultQuality: '<strong>Política de qualidade</strong>A qualidade gera volume, eficiência, reputação e permanência',
    cultMgmt: '<strong>Filosofia de gestão</strong>Pessoas em primeiro lugar — integridade, tecnologia, união e pragmatismo',
    tenet1: 'O crescimento dos clientes é o trabalho da Qinbo', tenet2: 'A satisfação dos clientes é a missão da Qinbo',
    tenet3: 'O reconhecimento dos clientes é a busca da Qinbo', tenet4: 'A parceria dos clientes é a expectativa da Qinbo',
    partnerEyebrow: 'Marcas parceiras', partnerTitle: 'Canais de fábrica · estoque original',
    partnerDesc: 'Parcerias de longo prazo com os principais produtores de resina e representação autorizada de marcas como Bayer, Sumitomo e Ascend.',
    agentBayer: '🏅 Bayer (Alemanha) · Agente autorizado', agentSumitomo: '🏅 Sumitomo (Japão) · Agente autorizado', agentAscend: '🏅 Ascend (EUA) · Agente autorizado',
    certs: 'Credenciais',
    licenseSh: 'Licença comercial (Xangai)', licenseHk: 'Licença comercial (Haikou)', customsSh: 'Registro aduaneiro (Xangai)', customsHk: 'Certificado aduaneiro (Haikou)'
  },
  tr: {
    searchPh: 'Ürün, tip veya marka ara — örn. PA66 / 8150 / Chimei',
    cultEyebrow: 'Kurumsal Felsefe', cultTitle: 'Yeteneğin büyüğü küçüğü olmaz; her şeyi tutum belirler',
    cultBiz: '<strong>İş İlkesi</strong>Kaliteyle var ol, itibarla büyü',
    cultQuality: '<strong>Kalite Politikası</strong>Kalite; hacmi, verimi, itibarı ve kalıcılığı getirir',
    cultMgmt: '<strong>Yönetim Felsefesi</strong>Önce insan — dürüstlük, teknoloji, birlik ve gerçekçilik',
    tenet1: "Müşterilerin gelişimi Qinbo'nun işidir", tenet2: "Müşterilerin memnuniyeti Qinbo'nun ilkesidir",
    tenet3: "Müşterilerin takdiri Qinbo'nun hedefidir", tenet4: "Müşterilerin iş birliği Qinbo'nun beklentisidir",
    partnerEyebrow: 'İş Ortağı Markalar', partnerTitle: 'Fabrika kanalları · orijinal stok',
    partnerDesc: 'Önde gelen reçine üreticileriyle uzun vadeli iş birliği ve Bayer, Sumitomo, Ascend gibi markaların yetkili temsilciliği.',
    agentBayer: '🏅 Bayer (Almanya) · Yetkili Temsilci', agentSumitomo: '🏅 Sumitomo (Japonya) · Yetkili Temsilci', agentAscend: '🏅 Ascend (ABD) · Yetkili Temsilci',
    certs: 'Belgeler',
    licenseSh: 'İş Ruhsatı (Şanghay)', licenseHk: 'İş Ruhsatı (Haikou)', customsSh: 'Gümrük Kaydı (Şanghay)', customsHk: 'Gümrük Belgesi (Haikou)'
  },
  ar: {
    searchPh: 'ابحث بالمنتج أو الرتبة أو العلامة — مثل PA66 / 8150 / Chimei',
    cultEyebrow: 'فلسفة الشركة', cultTitle: 'القدرة لا تُقاس بحجمها، بل العقلية هي التي تحسم كل شيء',
    cultBiz: '<strong>مبدأ العمل</strong>البقاء بالجودة والنمو بالسمعة',
    cultQuality: '<strong>سياسة الجودة</strong>الجودة تحقق الكمية والكفاءة والسمعة والاستمرارية',
    cultMgmt: '<strong>فلسفة الإدارة</strong>الإنسان أولاً — النزاهة والتقنية والوحدة والواقعية',
    tenet1: 'نمو العملاء هو عمل Qinbo', tenet2: 'رضا العملاء هو غاية Qinbo',
    tenet3: 'تقدير العملاء هو سعي Qinbo', tenet4: 'تعاون العملاء هو أمل Qinbo',
    partnerEyebrow: 'العلامات الشريكة', partnerTitle: 'قنوات المصنع · مخزون أصلي',
    partnerDesc: 'شراكات طويلة الأمد مع كبار منتجي الراتنج محلياً ودولياً، ووكالة معتمدة لعلامات مثل باير وسوميتومو وأسيند.',
    agentBayer: '🏅 باير (ألمانيا) · وكيل معتمد', agentSumitomo: '🏅 سوميتومو (اليابان) · وكيل معتمد', agentAscend: '🏅 أسيند (الولايات المتحدة) · وكيل معتمد',
    certs: 'الوثائق والتراخيص',
    licenseSh: 'رخصة تجارية (شنغهاي)', licenseHk: 'رخصة تجارية (هايكو)', customsSh: 'تسجيل جمركي (شنغهاي)', customsHk: 'شهادة جمركية (هايكو)'
  }
};

let changed = 0;
Object.keys(T).forEach(function (lang) {
  const f = path.join(DIR, lang + '.json');
  const d = JSON.parse(fs.readFileSync(f, 'utf8'));
  const t = T[lang];
  d.home = d.home || {};
  d.home.searchPh = t.searchPh;
  d.about = d.about || {};
  ['cultEyebrow','cultTitle','cultBiz','cultQuality','cultMgmt','tenet1','tenet2','tenet3','tenet4',
   'partnerEyebrow','partnerTitle','partnerDesc','agentBayer','agentSumitomo','agentAscend'].forEach(function (k) {
    d.about[k] = t[k];
  });
  d.footer = d.footer || {};
  d.footer.certs = t.certs;
  d.cert = d.cert || {};
  d.cert.licenseSh = t.licenseSh;
  d.cert.licenseHk = t.licenseHk;
  d.cert.customsSh = t.customsSh;
  d.cert.customsHk = t.customsHk;
  fs.writeFileSync(f, JSON.stringify(d, null, 2) + '\n', 'utf8');
  changed++;
  console.log('  ✓ ' + lang + '.json');
});
console.log('Done: ' + changed + ' files updated.');
