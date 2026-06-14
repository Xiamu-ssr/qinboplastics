/* ===== 秦帛业务版图 · 沙盘动画 =====
 * 依赖 assets/js/map-data.js (国家轮廓 path) + #qbMap 容器
 * 纯 SVG，无外部依赖。进入视口后播放一次叙事动画：
 *   双基地(中国点亮·上海/海口) → 国内分销 → 海外国家逐个点亮 → 仓储基地
 */
(function () {
  "use strict";
  var data = window.QB_MAP_DATA;
  var root = document.getElementById("qbMap");
  if (!data || !root || !data.countries) return;

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

  // ---- 节点数据 ----
  var bases = [
    { zh: "上海", en: "Shanghai", lon: 121.47, lat: 31.23, lx: 12, ly: -10 },
    { zh: "海口", en: "Haikou", lon: 110.32, lat: 20.04, lx: -12, ly: 16, anchor: "end" }
  ];
  var warehouses = [
    { zh: "苏州中储仓", en: "Suzhou", lon: 120.62, lat: 31.32, lx: 11, ly: -8 },
    { zh: "常州中储仓", en: "Changzhou", lon: 119.95, lat: 31.78, lx: -11, ly: -10, anchor: "end" }
  ];
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
  // iso 用于"点亮整个国家"；新加坡(SG)太小无轮廓，仅标记点
  var intl = [
    { zh: "韩国", en: "Korea", iso: "KR", lon: 127.0, lat: 36.5, from: 0 },
    { zh: "日本", en: "Japan", iso: "JP", lon: 138.5, lat: 36.2, from: 0, label: 1 },
    { zh: "越南", en: "Vietnam", iso: "VN", lon: 106.0, lat: 16.0, from: 1 },
    { zh: "泰国", en: "Thailand", iso: "TH", lon: 101.0, lat: 15.5, from: 1 },
    { zh: "马来西亚", en: "Malaysia", iso: "MY", lon: 102.5, lat: 4.0, from: 1 },
    { zh: "新加坡", en: "Singapore", iso: "SG", lon: 103.82, lat: 1.35, from: 1, label: 1 },
    { zh: "印尼", en: "Indonesia", iso: "ID", lon: 113.0, lat: -2.0, from: 1 },
    { zh: "印度", en: "India", iso: "IN", lon: 79.0, lat: 22.0, from: 1, label: 1 },
    { zh: "阿联酋", en: "UAE", iso: "AE", lon: 54.3, lat: 24.0, from: 1, label: 1 }
  ];

  // ---- 构建 SVG ----
  var svg = el("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet", class: "qbmap-svg" });
  var defs = el("defs", {});
  defs.innerHTML =
    '<radialGradient id="qbGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ff5a4d" stop-opacity=".55"/><stop offset="100%" stop-color="#ff5a4d" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="qbGlowGold" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffcf5a" stop-opacity=".5"/><stop offset="100%" stop-color="#ffcf5a" stop-opacity="0"/></radialGradient>';
  svg.appendChild(defs);

  // 国家轮廓填充层
  var gLand = el("g", { class: "qbmap-land" });
  var countryEl = {};
  data.countries.forEach(function (c) {
    var p = el("path", { d: c.d, class: "qbc", "data-iso": c.id });
    gLand.appendChild(p);
    countryEl[c.id] = p;
  });
  svg.appendChild(gLand);

  var gArcs = el("g", { class: "qbmap-arcs" });
  var gNodes = el("g", { class: "qbmap-nodes" });
  svg.appendChild(gArcs);
  svg.appendChild(gNodes);
  root.appendChild(svg);

  function lightCountry(iso, cls) {
    var p = countryEl[iso];
    if (p) p.classList.add(cls || "lit");
  }

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
    if (cls === "base" || cls === "wh") g.appendChild(el("circle", { r: 7, class: "qbmap-ring" }));
    var rad = cls === "base" ? 5 : cls === "wh" ? 4.5 : cls === "intl" ? 3.6 : 3;
    g.appendChild(el("circle", { r: rad, class: "qbmap-pt" }));
    if (withLabel) {
      var anchor = node.anchor || "start";
      var lx = node.lx != null ? node.lx : 11;
      var ly = node.ly != null ? node.ly : 4;
      var t = el("text", { x: lx, y: ly, "text-anchor": anchor, class: "qbmap-lbl" });
      var t1 = el("tspan", { x: lx, class: "qbmap-lbl-main" }); t1.textContent = labelMain;
      t.appendChild(t1);
      if (labelSub) { var t2 = el("tspan", { x: lx, dy: "1.15em", class: "qbmap-lbl-sub" }); t2.textContent = labelSub; t.appendChild(t2); }
      g.appendChild(t);
    }
    gNodes.appendChild(g);
    return g;
  }
  var baseEls = bases.map(function (b) { return addNode(b, "base", true, b.zh, b.en); });
  domestic.forEach(function (c) { addNode(c, "dom", false); });
  var intlNodeEls = intl.map(function (c) { return addNode(c, "intl", !!c.label, c.zh, c.en); });
  var whEls = warehouses.map(function (w) { return addNode(w, "wh", true, w.zh, w.en); });

  // ---- 阶段叙事 ----
  var caption = root.parentNode.querySelector("[data-qbmap-caption]");
  var stageEls = root.parentNode.querySelectorAll("[data-qbmap-stage]");
  var fallback = [
    "双基地 · 上海与海口",
    "国内分销 · 覆盖核心制造区域",
    "国际进出口 · 点亮全球货源",
    "仓储基地 · 苏州 + 常州"
  ];
  var curStage = -1;
  function setCaption(i) {
    if (!caption) return;
    curStage = i;
    caption.textContent = (stageEls && stageEls[i] && stageEls[i].textContent.trim()) || fallback[i];
  }
  document.addEventListener("qb:i18n", function () { if (curStage >= 0) setCaption(curStage); });

  function drawArc(idx, delay) {
    var a = arcEls[idx];
    setTimeout(function () {
      a.path.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.4,.5,.2,1)";
      a.path.style.strokeDashoffset = 0;
      setTimeout(function () { a.dot.style.opacity = 1; try { a.am.beginElement(); } catch (e) {} }, 900);
    }, delay);
  }

  var played = false;
  function play() {
    if (played) return; played = true;
    root.classList.add("qbmap-on");

    // 阶段1：双基地 — 中国整体点亮 + 上海/海口
    setCaption(0);
    lightCountry("CN", "lit-home");
    setTimeout(function () { baseEls.forEach(function (g) { g.classList.add("on"); }); }, 250);

    // 阶段2：国内分销
    setTimeout(function () {
      setCaption(1);
      gNodes.querySelectorAll(".qbmap-node.dom").forEach(function (g) { g.classList.add("on"); });
      domArcIdx.forEach(function (idx, k) { drawArc(idx, k * 130); });
    }, 1500);

    // 阶段3：海外国家逐个点亮
    setTimeout(function () {
      setCaption(2);
      intl.forEach(function (c, k) {
        setTimeout(function () {
          if (c.iso) lightCountry(c.iso, "lit");
          if (intlNodeEls[k]) intlNodeEls[k].classList.add("on");
          drawArc(intlArcIdx[k], 0);
        }, k * 240);
      });
    }, 3500);

    // 阶段4：仓储基地
    setTimeout(function () {
      setCaption(3);
      whEls.forEach(function (g) { g.classList.add("on"); });
    }, 6600);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { play(); io.disconnect(); } });
  }, { threshold: 0.25 });
  io.observe(root);

  // 减少动效偏好：直接全显终态
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    io.disconnect(); played = true;
    root.classList.add("qbmap-on");
    lightCountry("CN", "lit-home");
    intl.forEach(function (c, k) { if (c.iso) lightCountry(c.iso, "lit"); if (intlNodeEls[k]) intlNodeEls[k].classList.add("on"); });
    baseEls.concat(whEls).forEach(function (g) { g.classList.add("on"); });
    gNodes.querySelectorAll(".qbmap-node.dom").forEach(function (g) { g.classList.add("on"); });
    arcEls.forEach(function (a) { a.path.style.strokeDashoffset = 0; });
    setCaption(3);
  }
})();
