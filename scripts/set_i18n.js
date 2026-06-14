#!/usr/bin/env node
/* 通用 i18n 写入器（贯彻"中文+其他全英文"策略）
 * 用法：require 后调用 setKeys({ "contact.addrTitle": {zh:"找到我们", en:"Find Us"}, ... })
 *   - zh.json   写中文
 *   - en.json + 其余 11 语言  写英文
 *   - 若某条提供了特定语言(如 ja:"...")则该语言用特定值
 * 保持 13 语言 key 一致(validate 通过)，运行时其他语言本就回退英文。
 */
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'assets', 'i18n');
const ALL = ['zh','en','ja','ko','vi','id','ru','fr','de','es','pt','tr','ar'];

function setIn(obj, dotted, val) {
  const parts = dotted.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (typeof cur[parts[i]] !== 'object' || cur[parts[i]] == null) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

function setKeys(map) {
  const dicts = {};
  ALL.forEach(l => { dicts[l] = JSON.parse(fs.readFileSync(path.join(DIR, l + '.json'), 'utf8')); });
  Object.keys(map).forEach(key => {
    const spec = map[key];
    const en = spec.en != null ? spec.en : spec.zh;
    ALL.forEach(l => {
      let v;
      if (l === 'zh') v = spec.zh != null ? spec.zh : en;
      else if (spec[l] != null) v = spec[l];
      else v = en;            // 其他语言默认英文
      setIn(dicts[l], key, v);
    });
  });
  ALL.forEach(l => {
    fs.writeFileSync(path.join(DIR, l + '.json'), JSON.stringify(dicts[l], null, 2) + '\n', 'utf8');
  });
  console.log('set_i18n: ' + Object.keys(map).length + ' keys × ' + ALL.length + ' langs written.');
}

module.exports = { setKeys, ALL };

// 允许直接 node scripts/set_i18n.js <json文件> 批量
if (require.main === module && process.argv[2]) {
  const map = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  setKeys(map);
}
