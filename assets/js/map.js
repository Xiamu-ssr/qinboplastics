/* ===== 秦帛业务版图 · 沙盘动画 =====
 * 依赖 assets/js/map-data.js (烘焙点阵) + #qbMap 容器
 * 纯 SVG + SMIL，无外部依赖。进入视口后播放一次叙事动画。
 */
(function () {
  "use strict";
  var data = window.QB_MAP_DATA;
  var root = document.getElementById("qbMap");
  if (!data || !root) return;

  var W = data.viewBox[0], H = data.viewBox[1], P = data.proj;
  var SVGNS = "http://www.w3.org/2000/svg";

  function project(lon, lat) {
    return [
      (lon - P.lonMin) / (P.lonMax - P.lonMin) * W,
      (P.latMax - lat) / (P.latMax - P.latMin) * H
    ];
  }
  function el(name, attrs) {
    var n = document.createElementNS(SVGNS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  // ---- 节点数据（经纬度真实；business reach 为示意，可按实际增删）----
  var bases = [
    { zh: "上海", en: "Shanghai", lon: 121.47, lat: 31.23, lx: 12, ly: -10 },
    { zh: "海口", en: "Haikou", lon: 110.32, lat: 20.04, lx: -12, ly: 16, anchor: "end" }
  ];
  var warehouses = [
    { zh: "苏州仓", en: "Suzhou", lon: 120.58, lat: 31.30, lx: -10, ly: -12, anchor: "end" },
    { zh: "海南仓", en: "Hainan", lon: 109.2, lat: 19.0, lx: -12, ly: 18, anchor: "end" }
  ];
  // from: 0=上海 1=海口
  var domestic = [
    { zh: "北京", lon: 116.40, lat: 39.90, from: 0 },
    { zh: "青岛", lon: 120.38, lat: 36.07, from: 0 },
    { zh: "宁波", lon: 121.55, lat: 29.87, from: 0 },
    { zh: "武汉", lon: 114.30, lat: 30.59, from: 0 },
    { zh: "成都", lon: 104.07, lat: 30.57, from: 0 },
    { zh: "厦门", lon: 118.09, lat: 24.48, from: 0 },
    { zh: "广州", lon: 113.26, lat: 23.13, from: 1 },
    { zh: "深圳", lon: 114.06, lat: 22.54, from: 1 }
  ];
  var intl = [
    { zh: "韩国", en: "Korea", lon: 129.08, lat: 35.18, from: 0 },
    { zh: "日本", en: "Japan", lon: 139.69, lat: 35.68, from: 0, label: 1 },
    { zh: "越南", en: "Vietnam", lon: 106.63, lat: 10.82, from: 1 },
    { zh: "泰国", en: "Thailand", lon: 100.50, lat: 13.76, from: 1 },
    { zh: "马来西亚", en: "Malaysia", lon: 101.69, lat: 3.14, from: 1 },
    { zh: "新加坡", en: "Singapore", lon: 103.82, lat: 1.35, from: 1, label: 1 },
    { zh: "印尼", en: "Indonesia", lon: 106.85, lat: -6.21, from: 1 },
    { zh: "印度", en: "India", lon: 72.88, lat: 19.08, from: 1, label: 1 },
    { zh: "阿联酋", en: "UAE", lon: 55.27, lat: 25.20, from: 1, label: 1 }
  ];

  // ---- 构建 SVG ----
  var svg = el("svg", {
    viewBox: "0 0 " + W + " " + H,
    preserveAspectRatio: "xMidYMid meet",
    class: "qbmap-svg"
  });

  var defs = el("defs", {});
  defs.innerHTML =
    '<radialGradient id="qbGlow" cx="50%" cy="50%" r="50%">' +
    '<stop offset="0%" stop-color="#ff5a4d" stop-opacity=".55"/>' +
    '<stop offset="100%" stop-color="#ff5a4d" stop-opacity="0"/>' +
    '</radialGradient>' +
    '<radialGradient id="qbGlowGold" cx="50%" cy="50%" r="50%">' +
    '<stop offset="0%" stop-color="#ffcf5a" stop-opacity=".5"/>' +
    '<stop offset="100%" stop-color="#ffcf5a" stop-opacity="0"/>' +
    '</radialGradient>';
  svg.appendChild(defs);

  // 背景点阵
  var gDots = el("g", { class: "qbmap-dots" });
  var dots = data.dots, frag = document.createDocumentFragment();
  for (var i = 0; i < dots.length; i++) {
    frag.appendChild(el("circle", { cx: dots[i][0], cy: dots[i][1], r: 1.5 }));
  }
  gDots.appendChild(frag);
  svg.appendChild(gDots);

  var gArcs = el("g", { class: "qbmap-arcs" });
  var gNodes = el("g", { class: "qbmap-nodes" });
  svg.appendChild(gArcs);
  svg.appendChild(gNodes);
  root.appendChild(svg);

  // ---- 弧线 ----
  function arcPath(p0, p1) {
    var dx = p1[0] - p0[0], dy = p1[1] - p0[1];
    var dist = Math.sqrt(dx * dx + dy * dy);
    var mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2;
    var lift = Math.min(dist * 0.28, 150);
    return "M" + p0[0] + " " + p0[1] + " Q" + mx + " " + (my - lift) + " " + p1[0] + " " + p1[1];
  }

  var arcEls = [];
  function buildArc(fromNode, to, cls) {
    var p0 = project(fromNode.lon, fromNode.lat);
    var p1 = project(to.lon, to.lat);
    var d = arcPath(p0, p1);
    var path = el("path", { d: d, class: "qbmap-arc " + cls });
    gArcs.appendChild(path);
    var len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    // 行进光点
    var dot = el("circle", { r: 3.2, class: "qbmap-travel " + cls });
    var am = el("animateMotion", { dur: "2.2s", repeatCount: "indefinite", path: d, begin: "indefinite", rotate: "auto" });
    dot.appendChild(am);
    dot.style.opacity = 0;
    gArcs.appendChild(dot);
    arcEls.push({ path: path, len: len, dot: dot, am: am });
    return arcEls.length - 1;
  }

  var domArcIdx = [], intlArcIdx = [];
  domestic.forEach(function (c) { domArcIdx.push(buildArc(bases[c.from], c, "dom")); });
  intl.forEach(function (c) { intlArcIdx.push(buildArc(bases[c.from], c, "intl")); });

  // ---- 节点 ----
  function addNode(node, cls, withLabel, labelMain, labelSub) {
    var p = project(node.lon, node.lat);
    var g = el("g", { class: "qbmap-node " + cls, transform: "translate(" + p[0] + "," + p[1] + ")" });
    if (cls === "base") g.appendChild(el("circle", { r: 26, fill: "url(#qbGlow)", class: "qbmap-halo" }));
    if (cls === "wh") g.appendChild(el("circle", { r: 22, fill: "url(#qbGlowGold)", class: "qbmap-halo" }));
    if (cls === "base" || cls === "wh") {
      var ring = el("circle", { r: 7, class: "qbmap-ring" });
      g.appendChild(ring);
    }
    var rad = cls === "base" ? 5 : cls === "wh" ? 4.5 : cls === "intl" ? 3.4 : 3;
    g.appendChild(el("circle", { r: rad, class: "qbmap-pt" }));
    if (withLabel) {
      var anchor = node.anchor || "start";
      var lx = node.lx != null ? node.lx : 12;
      var ly = node.ly != null ? node.ly : 4;
      var t = el("text", { x: lx, y: ly, "text-anchor": anchor, class: "qbmap-lbl" });
      var t1 = el("tspan", { x: lx, class: "qbmap-lbl-main" }); t1.textContent = labelMain;
      t.appendChild(t1);
      if (labelSub) {
        var t2 = el("tspan", { x: lx, dy: "1.15em", class: "qbmap-lbl-sub" }); t2.textContent = labelSub;
        t.appendChild(t2);
      }
      g.appendChild(t);
    }
    gNodes.appendChild(g);
    return g;
  }

  var baseEls = bases.map(function (b) { return addNode(b, "base", true, b.zh, b.en); });
  domestic.forEach(function (c) { addNode(c, "dom", false); });
  intl.forEach(function (c) { addNode(c, "intl", !!c.label, c.zh, c.en); });
  var whEls = warehouses.map(function (w) { return addNode(w, "wh", true, w.zh, w.en); });

  // ---- 阶段叙事 ----
  var caption = root.parentNode.querySelector("[data-qbmap-caption]");
  // 阶段字幕：优先读隐藏的 [data-qbmap-stage] 元素（由 i18n 翻译），否则回退默认
  var stageEls = root.parentNode.querySelectorAll("[data-qbmap-stage]");
  var fallback = [
    "双基地 · 上海与海口",
    "国内分销 · 覆盖核心制造区域",
    "国际进出口 · 链接全球货源",
    "仓储基地 · 苏州 + 海南"
  ];
  var curStage = -1;
  function setCaption(i) {
    if (!caption) return;
    curStage = i;
    var txt = (stageEls && stageEls[i] && stageEls[i].textContent.trim()) || fallback[i];
    caption.textContent = txt;
  }
  // i18n 应用/语言切换后，按当前阶段刷新字幕
  document.addEventListener("qb:i18n", function () { if (curStage >= 0) setCaption(curStage); });

  function drawArc(idx, delay) {
    var a = arcEls[idx];
    setTimeout(function () {
      a.path.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.4,.5,.2,1)";
      a.path.style.strokeDashoffset = 0;
      setTimeout(function () {
        a.dot.style.opacity = 1;
        try { a.am.beginElement(); } catch (e) {}
      }, 900);
    }, delay);
  }

  var played = false;
  function play() {
    if (played) return; played = true;
    root.classList.add("qbmap-on");

    // 阶段1：双基地
    setCaption(0);
    setTimeout(function () { baseEls.forEach(function (g) { g.classList.add("on"); }); }, 200);

    // 阶段2：国内
    setTimeout(function () {
      setCaption(1);
      gNodes.querySelectorAll(".qbmap-node.dom").forEach(function (g) { g.classList.add("on"); });
      domArcIdx.forEach(function (idx, k) { drawArc(idx, k * 130); });
    }, 1300);

    // 阶段3：国际
    setTimeout(function () {
      setCaption(2);
      gNodes.querySelectorAll(".qbmap-node.intl").forEach(function (g) { g.classList.add("on"); });
      intlArcIdx.forEach(function (idx, k) { drawArc(idx, k * 150); });
    }, 3300);

    // 阶段4：仓储
    setTimeout(function () {
      setCaption(3);
      whEls.forEach(function (g) { g.classList.add("on"); });
    }, 5600);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { play(); io.disconnect(); } });
  }, { threshold: 0.3 });
  io.observe(root);

  // 减少动效偏好：直接全显
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    io.disconnect();
    root.classList.add("qbmap-on");
    baseEls.concat(whEls).forEach(function (g) { g.classList.add("on"); });
    gNodes.querySelectorAll(".qbmap-node.dom,.qbmap-node.intl").forEach(function (g) { g.classList.add("on"); });
    arcEls.forEach(function (a) { a.path.style.strokeDashoffset = 0; });
    setCaption(3);
  }
})();
