#!/usr/bin/env node
// 用 Chrome headless 给 13 语言首页截图，肉眼/脚本双重验证
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = path.join(__dirname, '..', 'screenshots');
const BASE = 'http://127.0.0.1:8765';
const LANGS = ['zh', 'en', 'ja', 'ko', 'vi', 'id', 'ru', 'fr', 'de', 'es', 'pt', 'tr', 'ar'];

// 清空旧图
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const results = [];
for (const lang of LANGS) {
  const url = `${BASE}/?lang=${lang}`;
  const out = path.join(OUT, `${lang}.png`);
  // 不使用 --virtual-time-budget（上次反馈有兼容问题），改用固定 sleep
  const r = spawnSync(CHROME, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1440,2400',
    `--screenshot=${out}`,
    '--default-background-color=00000000',
    '--run-all-compositor-stages-before-draw',
    url,
  ], { encoding: 'utf8', timeout: 30000 });

  if (fs.existsSync(out)) {
    const size = fs.statSync(out).size;
    results.push({ lang, ok: true, size, out });
    console.log(`✅ ${lang.padEnd(3)} → ${path.basename(out)} (${(size/1024).toFixed(1)} KB)`);
  } else {
    results.push({ lang, ok: false });
    console.log(`❌ ${lang.padEnd(3)} 截图失败`);
    if (r.stderr) console.log('   stderr:', r.stderr.split('\n').slice(0, 5).join(' | '));
  }
}

const ok = results.filter(r => r.ok).length;
console.log(`\n${ok}/${results.length} 截图完成 → ${OUT}`);
process.exit(ok === results.length ? 0 : 1);
