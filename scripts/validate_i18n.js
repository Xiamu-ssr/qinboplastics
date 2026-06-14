#!/usr/bin/env node
// 全 13 语言统一校验
const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '..', 'assets', 'i18n');
const SOURCE = 'en.json'; // 以英文源为基准（zh 是参考）
const LANGS = ['zh', 'en', 'es', 'pt', 'tr', 'ar', 'id', 'ru', 'fr', 'de', 'ja', 'ko', 'vi'];

const MATERIAL_CODES = ['PP', 'PE', 'PVC', 'PS', 'ABS', 'PA', 'PC', 'POM', 'PBT', 'PMMA'];
const SYMBOLS = ['·', '©', '→', '↓', '%'];

function loadJson(name) {
  const p = path.join(I18N_DIR, name);
  const raw = fs.readFileSync(p, 'utf8');
  return { raw, data: JSON.parse(raw) };
}

function flattenKeys(obj, prefix = '') {
  const out = [];
  for (const k of Object.keys(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      out.push(...flattenKeys(obj[k], key));
    } else {
      out.push({ key, value: obj[k] });
    }
  }
  return out;
}

function countTags(s) {
  if (typeof s !== 'string') return { br: 0, strong: 0, span: 0, small: 0 };
  return {
    br: (s.match(/<br\s*\/?>/gi) || []).length,
    strong: (s.match(/<strong>/gi) || []).length,
    span: (s.match(/<span>/gi) || []).length,
    small: (s.match(/<small>/gi) || []).length,
  };
}

// 加载源
const src = loadJson(SOURCE);
const srcFlat = flattenKeys(src.data);
const srcKeys = new Set(srcFlat.map(k => k.key));
const srcTagMap = new Map(srcFlat.map(k => [k.key, countTags(k.value)]));

console.log(`源 ${SOURCE}: ${srcKeys.size} 个 key\n`);

const results = [];
let allOk = true;

for (const lang of LANGS) {
  const { raw, data } = loadJson(lang + '.json');
  const flat = flattenKeys(data);
  const keys = new Set(flat.map(k => k.key));

  const missing = [...srcKeys].filter(k => !keys.has(k));
  const extra = [...keys].filter(k => !srcKeys.has(k));
  // 仅在源也有值时才把空值算作问题（zh 的「家」是中文独有量词，其余语言故意留空）
  const empty = flat
    .filter(k => (k.value === '' || k.value == null))
    .filter(k => {
      const srcVal = srcFlat.find(s => s.key === k.key);
      return srcVal && srcVal.value !== '' && srcVal.value != null;
    })
    .map(k => k.key);

  // 校验 HTML 标签数一致
  const tagMismatches = [];
  for (const { key, value } of flat) {
    const srcT = srcTagMap.get(key);
    const myT = countTags(value);
    if (srcT && (srcT.br !== myT.br || srcT.strong !== myT.strong ||
                 srcT.span !== myT.span || srcT.small !== myT.small)) {
      tagMismatches.push({ key, src: srcT, got: myT });
    }
  }

  // 校验料号保留
  const codeIssues = [];
  for (const code of MATERIAL_CODES) {
    // 只检查源里有这个 code 的 key
    for (const { key, value } of srcFlat) {
      if (typeof value === 'string' && value.includes(code)) {
        const mine = flat.find(k => k.key === key);
        if (mine && typeof mine.value === 'string' && !mine.value.includes(code)) {
          codeIssues.push({ key, code });
        }
      }
    }
  }

  const ok = missing.length === 0 && extra.length === 0 && empty.length === 0 &&
             tagMismatches.length === 0 && codeIssues.length === 0 &&
             keys.size === srcKeys.size;

  results.push({ lang, ok, keyCount: keys.size, missing, extra, empty, tagMismatches, codeIssues });

  console.log(`${ok ? '✅' : '❌'} ${lang.padEnd(3)} (${keys.size} keys, ${raw.length} bytes)`);
  if (!ok) {
    allOk = false;
    if (missing.length) console.log(`     缺 key (${missing.length}): ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '...' : ''}`);
    if (extra.length) console.log(`     多 key (${extra.length}): ${extra.slice(0, 5).join(', ')}${extra.length > 5 ? '...' : ''}`);
    if (empty.length) console.log(`     空值 (${empty.length}): ${empty.slice(0, 5).join(', ')}`);
    if (tagMismatches.length) console.log(`     标签不一致: ${tagMismatches.length} 处`);
    if (codeIssues.length) console.log(`     料号丢失: ${codeIssues.length} 处`);
  }
}

console.log('\n' + (allOk ? '🎉 全部通过' : '⚠️  存在问题，请检查'));
process.exit(allOk ? 0 : 1);
