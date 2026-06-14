// 截图验证：用 Chrome headless 拍若干页面/语言
const { execFileSync } = require('child_process');
const fs = require('fs');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = '/tmp/qbshots';
fs.mkdirSync(OUT, { recursive: true });
const shots = [
  ['index_zh', 'http://localhost:8765/index.html?lang=zh'],
  ['products_zh', 'http://localhost:8765/products.html?lang=zh'],
  ['about_zh', 'http://localhost:8765/about.html?lang=zh'],
  ['about_ar', 'http://localhost:8765/about.html?lang=ar'],
  ['trade_zh', 'http://localhost:8765/trade.html?lang=zh'],
  ['products_en', 'http://localhost:8765/products.html?lang=en']
];
shots.forEach(function (s) {
  const out = OUT + '/' + s[0] + '.png';
  try {
    execFileSync(CHROME, [
      '--headless', '--disable-gpu', '--hide-scrollbars',
      '--window-size=1366,4200',
      '--screenshot=' + out,
      '--virtual-time-budget=4500',
      '--default-background-color=ffffffff',
      s[1]
    ], { stdio: 'ignore', timeout: 60000 });
    console.log('shot ' + s[0] + ' -> ' + (fs.existsSync(out) ? (fs.statSync(out).size + 'B') : 'MISSING'));
  } catch (e) { console.log('FAIL ' + s[0] + ': ' + e.message); }
});
