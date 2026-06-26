#!/usr/bin/env node
/*
 * build_seo_pages.js
 * 用途：从 assets/data/products.js 自动生成 N 个长尾 SEO 着陆页
 * 生成：
 *   - 4 大类：  /products/category-{commodity|engineering|special|modified}.{html, en-html}
 *   - 18 材料族：/products/material-{pp|pe|abs|...}.{html, en-html}
 *   - 6 牌号：  /products/grade-{R370Y|...}.{html, en-html}
 * 输出位置：_site/products/  (在 deploy workflow 的 Prepare 之后、Upload 之前跑)
 * 副作用：重写 _site/sitemap.xml 把新 URL 全部并入
 */
const fs = require('fs');
const path = require('path');

// 跑在仓库根
const ROOT = path.join(__dirname, '..');
const SITE = path.join(ROOT, '_site');
const PROD_JS = path.join(ROOT, 'assets/data/products.js');

// 1) 加载 window.QB_PRODUCTS
const data = fs.readFileSync(PROD_JS, 'utf8');
const sandbox = { window: {} };
const fn = new Function('window', data + '; if(typeof window.QB_PRODUCTS!=="undefined"){return window.QB_PRODUCTS;}');
const QB = fn(sandbox.window);
if (!QB || !QB.cats) { console.error('QB_PRODUCTS not loadable'); process.exit(1); }

// 2) 找所有材料（cats 下钻一层；用 cats[].id 做 category key）
// 实际结构：QB_PRODUCTS = { cats: 4 大类, materials: [ {id, abbr, cat, zh, en, ...} ] }
const materials = QB.materials || QB.items || [];
if (!materials.length) {
  // 兜底：直接从源文件 grep 解析
  console.error('materials not in data, trying fallback parse');
  process.exit(1);
}

// 3) 常用长尾词组（中文 + 英文）
const ZH_TAIL = {
  category: (c) => `${c.zh}供应商 · ${c.zh}厂家 · 上海/海口现货`,
  material: (m) => `${m.zh || m.abbr}供应商 · ${m.zh || m.abbr}厂家 · ${m.abbr} 牌号现货`,
  grade:    (g) => `${g.id} 报价 · ${g.id} 物性表 · ${g.abbr || ''} 现货`,
};
const EN_TAIL = {
  category: (c) => `${c.en} supplier · ${c.en} manufacturer · in-stock grades`,
  material: (m) => `${m.en || m.abbr} supplier · ${m.en || m.abbr} manufacturer · ${m.abbr} resin grades`,
  grade:    (g) => `${g.id} datasheet · ${g.id} price · ${g.abbr || ''} in stock`,
};

const BRAND_BASE = '上海秦帛新材料有限公司';
const DOMAIN = 'https://www.qinboplastics.com';

function ensureDir(d) { fs.mkdirSync(d, { recursive: true }); }

function renderPage(kind, key, lang, payload) {
  const { title, description, h1, body, alternates, schema, breadcrumb } = payload;
  // 自动算 canonical：取 alternates 中匹配的 hreflang
  const selfAlt = alternates.find(a => a.hreflang === (lang === 'en' ? 'en' : 'zh-CN'));
  const canonical = selfAlt ? selfAlt.href : alternates[0].href;
  const isEn = lang === 'en';
  const htmlLang = isEn ? 'en' : 'zh-CN';
  const ogLocale = isEn ? 'en_US' : 'zh_CN';
  const alternatesHtml = alternates.map(a =>
    `    <link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('\n');
  const breadcrumbHtml = breadcrumb.map(b =>
    b.href ? `<a href="${b.href}">${b.label}</a> / ` : `<span>${b.label}</span>`).join('');

  return `<!DOCTYPE html>
<html lang="${htmlLang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
${isEn ? '<base href="/" />\n<script>window.QB_LANG_HINT="en";</script>' : ''}
<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="robots" content="index, follow" />
<meta http-equiv="content-language" content="${htmlLang}" />
<link rel="canonical" href="${canonical}" />
${alternatesHtml}
<meta property="og:type" content="article" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:locale" content="${ogLocale}" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="og:site_name" content="秦帛新材料 QINBO NEW MATERIALS" />
<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>
<link rel="stylesheet" href="/assets/css/style.css?v=20260617-theme" />
</head>
<body class="inner">
<header class="site-header" id="siteHeader">
  <div class="container nav-inner">
    <a href="${isEn ? '/en/' : 'index.html'}" class="brand"><span class="brand-mark"><img src="/assets/img/logo-classic.png" alt="秦帛新材料 QB" /></span><span class="brand-text"><strong>秦帛新材料</strong><em>QINBO NEW MATERIALS</em></span></a>
    <nav class="nav-menu">
      <a href="${isEn ? '/en/' : 'index.html'}">首页</a>
      <a href="${isEn ? '/en/products.html' : 'products.html'}" class="active">产品中心</a>
      <a href="${isEn ? '/en/trade.html' : 'trade.html'}">国内外贸易</a>
      <a href="${isEn ? '/en/about.html' : 'about.html'}">关于秦帛</a>
      <a href="${isEn ? '/en/contact.html' : 'contact.html'}">联系我们</a>
    </nav>
  </div>
</header>
<section class="page-banner">
  <div class="container">
    <div class="breadcrumb">${breadcrumbHtml}</div>
    <h1>${h1}</h1>
  </div>
</section>
<section class="section">
  <div class="container">
${body}
  </div>
</section>
<footer class="site-footer">
  <div class="container">
    <p><strong>${BRAND_BASE}</strong> · QINBO NEW MATERIALS · 运营主体：上海秦帛新材料有限公司</p>
    <p>${isEn ? 'Legal entity: Shanghai Qinbo New Materials Co., Ltd.' : '总部位于上海市奉贤区，海口设有分支机构。'}</p>
  </div>
</footer>
</body>
</html>
`;
}

// 4) 收集所有要生成的 page spec
const pages = [];

// 4a) 大类
for (const c of QB.cats) {
  const slug = `category-${c.id}`;
  const related = materials.filter(m => m.cat === c.id);
  // 中文
  pages.push({
    file: `products/${slug}.html`,
    title: `${c.zh}供应商 · ${c.zh}厂家 · 现货牌号 | 秦帛新材料`,
    description: `秦帛新材料（${BRAND_BASE}）专注${c.zh}现货牌号，覆盖${related.slice(0, 8).map(m => m.abbr).join('、')}等主流${c.zh}，提供 ${c.zh} 报价、选型建议、进口分销与本地仓储直发。`,
    h1: `${c.zh}供应商 · ${c.zh}厂家 · 现货牌号`,
    body: `
<h2>秦帛新材料的 ${c.zh} 现货供应</h2>
<p>${BRAND_BASE}（QINBO NEW MATERIALS）专注 ${c.zh} 领域，覆盖 ${related.map(m => `${m.zh || m.abbr}（${m.abbr}）`).join('、')} 等主流材料族。贸易方式涵盖一般贸易、进口分销与转口贸易，华东多仓直发，可提供 ${c.zh} 选型、报价、货期与原厂 TDS / COA 配套服务。</p>
<h3>${c.zh} 涵盖的材料族</h3>
<ul>${related.map(m => `<li><a href="material-${m.id}.html">${m.zh || m.abbr}（${m.abbr}）</a> · ${m.abbr} 现货牌号与物性表</li>`).join('\n')}</ul>
<p>返回 <a href="/products.html">产品中心</a> 查看所有 ${c.zh} 现货牌号。</p>
`,
    alternates: [
      { hreflang: 'zh-CN', href: `${DOMAIN}/products/${slug}.html` },
      { hreflang: 'en',    href: `${DOMAIN}/en/products/${slug}.html` },
    ],
    breadcrumb: [
      { label: '首页', href: '../index.html' },
      { label: '产品中心', href: '../products.html' },
      { label: c.zh }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': `${c.zh}供应商 · ${c.zh}厂家`,
      'inLanguage': 'zh-CN',
      'about': { '@type': 'Thing', 'name': c.zh },
      'provider': { '@type': 'Organization', 'name': '秦帛新材料', 'legalName': BRAND_BASE, 'url': DOMAIN }
    },
  });
  // 英文
  pages.push({
    file: `en/products/${slug}.html`,
    title: `${c.en} Supplier & Manufacturer | Qinbo New Materials`,
    description: `Qinbo New Materials (Shanghai Qinbo New Materials Co., Ltd.) supplies ${c.en.toLowerCase()} — ${related.slice(0, 8).map(m => m.abbr).join(', ')} — with in-stock grades, technical datasheets, and warehouse-direct delivery in China and overseas.`,
    h1: `${c.en} Supplier · ${c.en} Manufacturer`,
    body: `
<h2>${c.en} Supply by Qinbo New Materials</h2>
<p>${BRAND_BASE} (QINBO NEW MATERIALS) supplies ${c.en.toLowerCase()}: ${related.map(m => `${m.en || m.abbr} (${m.abbr})`).join(', ')}. Import, distribution and warehouse-direct delivery across China and select overseas markets. ${c.en} grade search, technical datasheet and COA on request.</p>
<h3>Material families in ${c.en}</h3>
<ul>${related.map(m => `<li><a href="material-${m.id}.html">${m.en || m.abbr} (${m.abbr})</a> · in-stock ${m.abbr} grades and reference properties</li>`).join('\n')}</ul>
<p>Browse all <a href="/products.html">${c.en} in-stock grades</a> in the product center.</p>
`,
    alternates: [
      { hreflang: 'zh-CN', href: `${DOMAIN}/products/${slug}.html` },
      { hreflang: 'en',    href: `${DOMAIN}/en/products/${slug}.html` },
    ],
    breadcrumb: [
      { label: 'Home', href: '../index.html' },
      { label: 'Products', href: '../products.html' },
      { label: c.en }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': `${c.en} Supplier · ${c.en} Manufacturer`,
      'inLanguage': 'en',
      'about': { '@type': 'Thing', 'name': c.en },
      'provider': { '@type': 'Organization', 'name': 'Qinbo New Materials', 'legalName': BRAND_BASE, 'url': `${DOMAIN}/en/` }
    },
  });
}

// 4b) 材料族
for (const m of materials) {
  const slug = `material-${m.id}`;
  // 找该材料下的品牌/牌号
  const grades = m.brands ? m.brands.flatMap(b => b.g) : [];
  const brands = (m.brands || []).map(b => b.n);

  // 中文
  pages.push({
    file: `products/${slug}.html`,
    title: `${m.zh || m.abbr}供应商 · ${m.abbr} 牌号现货 | 秦帛新材料`,
    description: `${m.zh || m.abbr}（${m.abbr}）供应商，秦帛新材料现货供应${brands.slice(0, 6).join('、')}等品牌 ${m.abbr} 牌号${grades.slice(0, 6).join('、')}，提供 ${m.abbr} 报价、选型、物性表与原厂 TDS / COA。`,
    h1: `${m.zh || m.abbr}（${m.abbr}）供应商 · ${m.abbr} 现货牌号`,
    body: `
<h2>${m.zh || m.abbr}（${m.abbr}） 现货供应</h2>
<p>${BRAND_BASE} 主营 ${m.zh || m.abbr}（${m.abbr}），${m.descZh || ''} 现货分销至国内主要制造业集群，并支持出口至欧美、日韩、中东。</p>
<h3>${m.abbr} 经销品牌</h3>
<ul>${brands.slice(0, 12).map(b => `<li>${b}</li>`).join('\n')}</ul>
<h3>${m.abbr} 现货牌号（部分）</h3>
<ul>${grades.slice(0, 12).map(g => `<li><a href="grade-${g}.html">${g}</a> · ${m.abbr} 报价 / 物性表</li>`).join('\n')}</ul>
<h3>${m.abbr} 应用领域</h3>
<ul>${(m.apps || []).map(a => `<li>${a}</li>`).join('\n')}</ul>
<p>返回 <a href="/products.html">产品中心</a> 查看完整 ${m.abbr} 现货牌号列表。</p>
`,
    alternates: [
      { hreflang: 'zh-CN', href: `${DOMAIN}/products/${slug}.html` },
      { hreflang: 'en',    href: `${DOMAIN}/en/products/${slug}.html` },
    ],
    breadcrumb: [
      { label: '首页', href: '../index.html' },
      { label: '产品中心', href: '../products.html' },
      { label: m.zh || m.abbr }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': `${m.zh || m.abbr}（${m.abbr}）供应商`,
      'inLanguage': 'zh-CN',
      'about': { '@type': 'Thing', 'name': `${m.zh || m.abbr}`, 'alternateName': m.abbr },
      'provider': { '@type': 'Organization', 'name': '秦帛新材料', 'legalName': BRAND_BASE, 'url': DOMAIN }
    },
  });
  // 英文
  pages.push({
    file: `en/products/${slug}.html`,
    title: `${m.en || m.abbr} Supplier · ${m.abbr} Resin Grades | Qinbo New Materials`,
    description: `${m.en || m.abbr} (${m.abbr}) supplier. Qinbo New Materials stocks ${m.abbr} grades from ${brands.slice(0, 6).join(', ')}, including ${grades.slice(0, 6).join(', ')}. Datasheet, COA and warehouse-direct delivery available.`,
    h1: `${m.en || m.abbr} (${m.abbr}) Supplier · In-Stock ${m.abbr} Grades`,
    body: `
<h2>${m.en || m.abbr} (${m.abbr}) Supply</h2>
<p>${BRAND_BASE} supplies ${m.en || m.abbr} (${m.abbr}). ${m.descEn || ''} Distribution across China with export to Europe, North America, Japan/Korea and the Middle East.</p>
<h3>${m.abbr} Brands Distributed</h3>
<ul>${brands.slice(0, 12).map(b => `<li>${b}</li>`).join('\n')}</ul>
<h3>${m.abbr} In-Stock Grades (sample)</h3>
<ul>${grades.slice(0, 12).map(g => `<li><a href="grade-${g}.html">${g}</a> · ${m.abbr} datasheet / price</li>`).join('\n')}</ul>
<h3>${m.abbr} Applications</h3>
<ul>${(m.apps || []).map(a => `<li>${a}</li>`).join('\n')}</ul>
<p>Browse the full <a href="/products.html">${m.abbr} grade list</a>.</p>
`,
    alternates: [
      { hreflang: 'zh-CN', href: `${DOMAIN}/products/${slug}.html` },
      { hreflang: 'en',    href: `${DOMAIN}/en/products/${slug}.html` },
    ],
    breadcrumb: [
      { label: 'Home', href: '../index.html' },
      { label: 'Products', href: '../products.html' },
      { label: m.en || m.abbr }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': `${m.en || m.abbr} (${m.abbr}) Supplier`,
      'inLanguage': 'en',
      'about': { '@type': 'Thing', 'name': m.en || m.abbr, 'alternateName': m.abbr },
      'provider': { '@type': 'Organization', 'name': 'Qinbo New Materials', 'legalName': BRAND_BASE, 'url': `${DOMAIN}/en/` }
    },
  });
}

// 4c) 牌号：从 materials[].brands[].g 抽全部 grade（去重，排除占位词）
const PLACEHOLDER = new Set(['全新料','多牌号','按需配方','TPU','TPV','PA12','PA46','PA6T','PA9T','PPA']);
const allGrades = [];
const gradeToMaterial = {};
for (const m of materials) {
  for (const b of (m.brands || [])) {
    for (const g of b.g) {
      if (PLACEHOLDER.has(g)) continue;
      if (!allGrades.includes(g)) allGrades.push(g);
      gradeToMaterial[g] = m;
    }
  }
}
for (const gid of allGrades) {
  const slug = `grade-${gid}`;
  const meta = (QB.gradeMeta || {})[gid] || {};
  const m = gradeToMaterial[gid];
  const abbr = m ? m.abbr : (meta.features || [])[0] || '';
  const brand = meta.features && meta.features[1] ? meta.features[1] : '';
  const desc = meta.descZh || `${abbr} ${gid} 现货，秦帛新材料（上海秦帛新材料有限公司）原厂直供，附原厂 TDS / COA 与物性表。`;
  const enDesc = meta.descEn || `${abbr} ${gid} in stock. Qinbo New Materials supplies original ${abbr} ${gid} with TDS / COA.`;

  // 中文
  pages.push({
    file: `products/${slug}.html`,
    title: `${gid} 报价 · ${gid} 物性表 · ${abbr} 现货 | 秦帛新材料`,
    description: `${gid}（${abbr}）现货供应，秦帛新材料提供 ${gid} 报价、${gid} 物性表、${gid} 选型与原厂 TDS / COA。${desc.slice(0, 60)}`,
    h1: `${gid}（${abbr}）报价 / 物性表 / 现货供应`,
    body: `
<h2>${gid} 现货牌号信息</h2>
<p>${desc}</p>
<h3>${gid} 关键物性</h3>
<table>
${(meta.props || []).slice(0, 12).map(p => `<tr><th>${p.k}</th><td>${p.v}</td></tr>`).join('\n')}
</table>
<p>返回 <a href="/products.html">产品中心</a> 查看更多 ${abbr} 牌号；或前往 <a href="/contact.html">联系销售部</a> 获取 ${gid} 报价与货期。</p>
`,
    alternates: [
      { hreflang: 'zh-CN', href: `${DOMAIN}/products/${slug}.html` },
      { hreflang: 'en',    href: `${DOMAIN}/en/products/${slug}.html` },
    ],
    breadcrumb: [
      { label: '首页', href: '../index.html' },
      { label: '产品中心', href: '../products.html' },
      { label: abbr, href: `material-${m ? m.id : 'pp'}.html` },
      { label: gid }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': `${gid} ${abbr}`,
      'description': desc,
      'category': abbr,
      'brand': { '@type': 'Brand', 'name': (meta.features || [])[1] || abbr },
      'manufacturer': { '@type': 'Organization', 'name': '秦帛新材料', 'legalName': BRAND_BASE, 'url': DOMAIN }
    },
  });
  // 英文
  pages.push({
    file: `en/products/${slug}.html`,
    title: `${gid} Datasheet · ${gid} Price · ${abbr} In Stock | Qinbo New Materials`,
    description: `${gid} (${abbr}) in-stock grade. Qinbo New Materials provides ${gid} datasheet, price, selection support and original TDS / COA. ${enDesc.slice(0, 60)}`,
    h1: `${gid} (${abbr}) Datasheet / Price / In-Stock Supply`,
    body: `
<h2>${gid} Grade Information</h2>
<p>${enDesc}</p>
<h3>${gid} Key Properties</h3>
<table>
${(meta.props || []).slice(0, 12).map(p => `<tr><th>${p.k}</th><td>${p.v}</td></tr>`).join('\n')}
</table>
<p>Browse <a href="/products.html">more ${abbr} grades</a>, or <a href="/contact.html">contact our sales team</a> for ${gid} price and lead time.</p>
`,
    alternates: [
      { hreflang: 'zh-CN', href: `${DOMAIN}/products/${slug}.html` },
      { hreflang: 'en',    href: `${DOMAIN}/en/products/${slug}.html` },
    ],
    breadcrumb: [
      { label: 'Home', href: '../index.html' },
      { label: 'Products', href: '../products.html' },
      { label: abbr, href: `material-${m ? m.id : 'pp'}.html` },
      { label: gid }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': `${gid} ${abbr}`,
      'description': enDesc,
      'category': abbr,
      'brand': { '@type': 'Brand', 'name': (meta.features || [])[1] || abbr },
      'manufacturer': { '@type': 'Organization', 'name': 'Qinbo New Materials', 'legalName': BRAND_BASE, 'url': `${DOMAIN}/en/` }
    },
  });
}

// 5) 写文件
const outDir = path.join(SITE, 'products');
ensureDir(outDir);
ensureDir(path.join(SITE, 'en/products'));

let written = 0;
for (const p of pages) {
  const filePath = path.join(SITE, p.file);
  ensureDir(path.dirname(filePath));
  const html = renderPage(
    p.file.includes('category') ? 'category' : p.file.includes('material') ? 'material' : 'grade',
    p.file,
    p.file.startsWith('en/') ? 'en' : 'zh',
    p
  );
  fs.writeFileSync(filePath, html, 'utf8');
  written++;
}
console.log(`[build_seo_pages] 写入 ${written} 个 SEO 页 → ${outDir}`);

// 6) 合并 sitemap
const sitemapPath = path.join(SITE, 'sitemap.xml');
let sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
// 把新 URL 加进 sitemap
for (const p of pages) {
  const url = `${DOMAIN}/${p.file}`;
  const enUrl = url.endsWith('.html') && !url.includes('/en/') ? url : null;
  if (sitemap.includes(url)) continue;
  const block = `  <url>
    <loc>${url}</loc>
    <lastmod>2026-06-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  sitemap = sitemap.replace('</urlset>', block + '</urlset>');
}
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`[build_seo_pages] sitemap.xml 已合并 ${pages.length} 条新 URL`);
