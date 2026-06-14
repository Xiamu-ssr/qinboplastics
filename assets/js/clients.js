/* ===== 合作客户 · 三行弹幕滚动墙 =====
 * 行1 从左→右，行2 从右→左，行3 从左→右。
 * 每个客户以"名牌"chip 呈现，循环使用不同字体 / 字重 / 配色，模拟 logo 墙。
 * 数据：window.QB_CLIENTS（assets/data/clients.js）。
 */
(function () {
  var wall = document.getElementById('clientsWall');
  if (!wall || !window.QB_CLIENTS || !QB_CLIENTS.length) return;

  // 多字体（系统字体容错链）+ 字重/斜体 变体，保证视觉差异
  var FONTS = [
    "'Songti SC','SimSun',serif",
    "'STKaiti','KaiTi','楷体',cursive",
    "'PingFang SC','Microsoft YaHei',sans-serif",
    "'STZhongsong','SimSun',serif",
    "'Yuanti SC','YouYuan',sans-serif",
    "'Hiragino Sans GB','Microsoft YaHei',sans-serif",
    "'STXihei','Heiti SC',sans-serif",
    "'LiSu','隶书',serif"
  ];
  var STYLES = ['normal', 'italic'];
  var WEIGHTS = [600, 700, 800];
  var TINTS = ['#1c48a8', '#0e7c6b', '#b4451f', '#5a3aa0', '#2a6cb0', '#9a6a14', '#34507a'];

  function chip(item, i) {
    var name = typeof item === "string" ? item : item.name;
    var meta = typeof item === "string" ? "" : [item.province, item.industry].filter(Boolean).join(" · ");
    var el = document.createElement('span');
    el.className = 'client-chip';
    el.style.fontFamily = FONTS[i % FONTS.length];
    el.style.fontStyle = STYLES[(i >> 1) % STYLES.length];
    el.style.fontWeight = WEIGHTS[i % WEIGHTS.length];
    el.style.setProperty('--ct', TINTS[i % TINTS.length]);
    var dot = document.createElement('i');
    dot.className = 'client-dot';
    var t = document.createElement('span');
    t.textContent = name;
    el.appendChild(dot);
    el.appendChild(t);
    if (meta) {
      var small = document.createElement('small');
      small.textContent = meta;
      el.appendChild(small);
      el.setAttribute('title', name + ' · ' + meta);
    }
    return el;
  }

  // 均分到三行
  var rows = [[], [], []];
  QB_CLIENTS.forEach(function (n, i) { rows[i % 3].push(n); });

  rows.forEach(function (names, r) {
    var row = document.createElement('div');
    row.className = 'clients-row dir-' + (r % 2 === 0 ? 'ltr' : 'rtl');
    var track = document.createElement('div');
    track.className = 'clients-track';
    var gi = r; // 字体起始偏移，使三行错开
    names.forEach(function (n, i) { track.appendChild(chip(n, gi + i * 3)); });
    // 克隆一份实现无缝循环
    Array.prototype.slice.call(track.children).forEach(function (c) { track.appendChild(c.cloneNode(true)); });
    // 时长按宽度自适应
    requestAnimationFrame(function () {
      var w = track.scrollWidth / 2;
      var dur = Math.max(26, Math.round(w / 55));
      track.style.setProperty('--cl-dur', dur + 's');
    });
    row.appendChild(track);
    wall.appendChild(row);
  });
})();
