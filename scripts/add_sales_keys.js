#!/usr/bin/env node
// 给 13 语言 contact 区块插入销售部名片所需的 6 个 i18n key（保持原格式，仅插入）
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'assets', 'i18n');

const T = {
  zh: { salesEyebrow: '销售团队', salesTitle: '销售部', salesDesc: '直接联系我们的销售顾问，获取报价、货期与选型建议。', roleSales: '销售部', labelWechat: '微信', copyHint: '点击复制' },
  en: { salesEyebrow: 'Our Sales Team', salesTitle: 'Sales Department', salesDesc: 'Reach our sales consultants directly for quotes, lead times and material selection advice.', roleSales: 'Sales', labelWechat: 'WeChat', copyHint: 'Click to copy' },
  ja: { salesEyebrow: '営業チーム', salesTitle: '営業部', salesDesc: '営業担当者に直接ご連絡いただき、見積もり・納期・素材選定のご相談を承ります。', roleSales: '営業', labelWechat: 'WeChat', copyHint: 'クリックでコピー' },
  ko: { salesEyebrow: '영업팀', salesTitle: '영업부', salesDesc: '영업 상담사에게 직접 연락하여 견적, 납기 및 자재 선정 상담을 받으세요.', roleSales: '영업', labelWechat: 'WeChat', copyHint: '클릭하여 복사' },
  vi: { salesEyebrow: 'Đội ngũ kinh doanh', salesTitle: 'Phòng kinh doanh', salesDesc: 'Liên hệ trực tiếp với chuyên viên kinh doanh của chúng tôi để nhận báo giá, thời gian giao hàng và tư vấn chọn vật liệu.', roleSales: 'Kinh doanh', labelWechat: 'WeChat', copyHint: 'Nhấp để sao chép' },
  id: { salesEyebrow: 'Tim Penjualan', salesTitle: 'Departemen Penjualan', salesDesc: 'Hubungi langsung konsultan penjualan kami untuk penawaran harga, waktu pengiriman, dan saran pemilihan material.', roleSales: 'Penjualan', labelWechat: 'WeChat', copyHint: 'Klik untuk menyalin' },
  ru: { salesEyebrow: 'Отдел продаж', salesTitle: 'Отдел продаж', salesDesc: 'Свяжитесь напрямую с нашими менеджерами по продажам для получения цен, сроков поставки и помощи в подборе материалов.', roleSales: 'Продажи', labelWechat: 'WeChat', copyHint: 'Нажмите, чтобы скопировать' },
  fr: { salesEyebrow: 'Équipe commerciale', salesTitle: 'Service commercial', salesDesc: 'Contactez directement nos conseillers commerciaux pour obtenir des devis, des délais et des conseils sur le choix des matériaux.', roleSales: 'Commercial', labelWechat: 'WeChat', copyHint: 'Cliquer pour copier' },
  de: { salesEyebrow: 'Vertriebsteam', salesTitle: 'Vertrieb', salesDesc: 'Kontaktieren Sie unsere Vertriebsberater direkt für Angebote, Lieferzeiten und Materialberatung.', roleSales: 'Vertrieb', labelWechat: 'WeChat', copyHint: 'Zum Kopieren klicken' },
  es: { salesEyebrow: 'Equipo de ventas', salesTitle: 'Departamento de ventas', salesDesc: 'Contacte directamente con nuestros asesores de ventas para presupuestos, plazos de entrega y asesoramiento en la selección de materiales.', roleSales: 'Ventas', labelWechat: 'WeChat', copyHint: 'Clic para copiar' },
  pt: { salesEyebrow: 'Equipe de vendas', salesTitle: 'Departamento de vendas', salesDesc: 'Fale diretamente com nossos consultores de vendas para orçamentos, prazos de entrega e orientação na seleção de materiais.', roleSales: 'Vendas', labelWechat: 'WeChat', copyHint: 'Clique para copiar' },
  tr: { salesEyebrow: 'Satış Ekibi', salesTitle: 'Satış Departmanı', salesDesc: 'Fiyat teklifi, teslim süresi ve malzeme seçimi konusunda danışmanlık için satış danışmanlarımıza doğrudan ulaşın.', roleSales: 'Satış', labelWechat: 'WeChat', copyHint: 'Kopyalamak için tıklayın' },
  ar: { salesEyebrow: 'فريق المبيعات', salesTitle: 'قسم المبيعات', salesDesc: 'تواصل مباشرة مع مستشاري المبيعات لدينا للحصول على عروض الأسعار ومواعيد التسليم والمشورة في اختيار المواد.', roleSales: 'المبيعات', labelWechat: 'WeChat', copyHint: 'انقر للنسخ' },
};

const ORDER = ['salesEyebrow', 'salesTitle', 'salesDesc', 'roleSales', 'labelWechat', 'copyHint'];

let changed = 0;
for (const lang of Object.keys(T)) {
  const p = path.join(DIR, lang + '.json');
  let raw = fs.readFileSync(p, 'utf8');
  const data = JSON.parse(raw);

  // 已存在则跳过（幂等）
  if (data.contact && data.contact.salesTitle !== undefined) {
    console.log(`= ${lang}: 已有，跳过`);
    continue;
  }

  // 构造插入文本（contact 内 key 缩进 4 空格）
  const lines = ORDER.map(k => `    "${k}": ${JSON.stringify(T[lang][k])}`);
  const insert = lines.join(',\n') + ',\n';

  // 在 "contact": { 之后插入
  const re = /("contact"\s*:\s*\{\s*\n)/;
  if (!re.test(raw)) {
    console.log(`✗ ${lang}: 未找到 contact 块，跳过`);
    continue;
  }
  raw = raw.replace(re, `$1${insert}`);

  // 校验仍是合法 JSON 且 key 数 +6
  const before = Object.keys(data.contact).length;
  const after = JSON.parse(raw);
  const now = Object.keys(after.contact).length;
  if (now !== before + 6) {
    console.log(`✗ ${lang}: key 数异常 ${before}→${now}`);
    continue;
  }
  fs.writeFileSync(p, raw);
  console.log(`✓ ${lang}: contact +6 → ${now}`);
  changed++;
}
console.log(`\n完成，修改 ${changed} 个文件`);
