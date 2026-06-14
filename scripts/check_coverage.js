#!/usr/bin/env node
// 检查每页 HTML 用到的 [data-i18n] key 是否在每种语言 JSON 都有值
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const I18N_DIR = path.join(ROOT, 'assets', 'i18n');
const LANGS = ['zh', 'en', 'es', 'pt', 'tr', 'ar', 'id', 'ru', 'fr', 'de', 'ja', 'ko', 'vi'];
const PAGES = ['index.html', 'about.html', 'products.html', 'trade.html', 'contact.html'];

function get(obj, key) {
  return key.split('.').reduce((a, p) => (a == null ? a : a[p]), obj);
}

// 收集所有页面用到的 key
const usedKeys = new Set();
const pagesKeys = {};
for (const p of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, p), 'utf8');
  const re = /data-i18n(?:-attr)?="([^"]+)"/g;
  const keys = new Set();
  let m;
  while ((m = re.exec(html)) !== null) {
    const val = m[1];
    // data-i18n-attr 格式是 "attr:key; attr:key"
    if (val.includes(':')) {
      val.split(';').forEach(pair => {
        const kv = pair.split(':');
        if (kv.length >= 2) keys.add(kv[1].trim());
      });
    } else {
      keys.add(val);
    }
  }
  pagesKeys[p] = [...keys];
  keys.forEach(k => usedKeys.add(k));
}
console.log(`📄 5 个页面共用到 ${usedKeys.size} 个不同的 i18n key`);

// 检查每种语言
let allOk = true;
for (const lang of LANGS) {
  const data = JSON.parse(fs.readFileSync(path.join(I18N_DIR, lang + '.json'), 'utf8'));
  const missing = [];
  for (const k of usedKeys) {
    if (get(data, k) === undefined) missing.push(k);
  }
  if (missing.length === 0) {
    console.log(`✅ ${lang.padEnd(3)}: ${usedKeys.size} key 全部覆盖`);
  } else {
    allOk = false;
    console.log(`❌ ${lang.padEnd(3)}: 缺 ${missing.length} 个 key → ${missing.join(', ')}`);
  }
}

// 反向：JSON 里有但页面没用的 key（多出来、没意义）
console.log('\n--- 多余 key (JSON 有但页面未用，仅作信息) ---');
for (const lang of LANGS) {
  const data = JSON.parse(fs.readFileSync(path.join(I18N_DIR, lang + '.json'), 'utf8'));
  const flattenKeys = (o, p = '') => {
    const out = [];
    for (const k of Object.keys(o)) {
      const key = p ? `${p}.${k}` : k;
      if (o[k] && typeof o[k] === 'object') out.push(...flattenKeys(o[k], key));
      else out.push(key);
    }
    return out;
  };
  const allKeys = flattenKeys(data);
  const unused = allKeys.filter(k => !usedKeys.has(k));
  console.log(`${lang.padEnd(3)}: ${unused.length} 个未用 key ${unused.length ? '→ ' + unused.slice(0, 5).join(', ') + (unused.length > 5 ? '...' : '') : ''}`);
}

process.exit(allOk ? 0 : 1);
