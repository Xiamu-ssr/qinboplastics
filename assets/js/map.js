/* ===== 秦帛供应版图 · 官网沙盘 =====
 * 依赖：
 *  - assets/js/map-data.js: 亚洲国家/地区轮廓
 *  - assets/data/clients.js: QB_MAP_DOMESTIC_REGIONS / QB_REGION_CENTERS / QB_SOURCE_REGIONS
 */
(function () {
  "use strict";
  var data = window.QB_MAP_DATA;
  var provinceData = window.QB_CHINA_PROVINCES;
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

  var bases = [
    { zh: "上海", en: "Shanghai", lon: 121.47, lat: 31.23, lx: 12, ly: -10 },
    { zh: "海口", en: "Haikou", lon: 110.32, lat: 20.04, lx: -12, ly: 16, anchor: "end" }
  ];
  var warehouses = [
    { zh: "上海金山仓", en: "Jinshan", lon: 121.34, lat: 30.74 },
    { zh: "上海宝山仓", en: "Baoshan", lon: 121.49, lat: 31.40 },
    { zh: "上海保税仓", en: "Bonded", lon: 121.60, lat: 31.33 },
    { zh: "宁波保税仓", en: "Ningbo Bonded", lon: 121.85, lat: 29.88 },
    { zh: "宁波中储仓", en: "Ningbo", lon: 121.55, lat: 29.87 },
    { zh: "苏州中储仓", en: "Suzhou", lon: 120.62, lat: 31.32 },
    { zh: "常州中储仓", en: "Changzhou", lon: 119.95, lat: 31.78 },
    { zh: "海口仓储节点", en: "Haikou", lon: 110.32, lat: 20.04 }
  ];

  function domesticRegions() {
    var centers = window.QB_REGION_CENTERS || {};
    var bucket = {};
    var regions = window.QB_MAP_DOMESTIC_REGIONS || [];
    if (!regions.length) {
      regions = (window.QB_CLIENTS || []).map(function (c) {
        return { zh: c.province, en: c.province, samples: [] };
      });
    }
    regions.forEach(function (r) {
      if (!r.zh || !centers[r.zh]) return;
      if (!bucket[r.zh]) {
        bucket[r.zh] = {
          zh: r.zh,
          en: r.en || r.zh,
          lon: centers[r.zh].lon,
          lat: centers[r.zh].lat,
          samples: r.samples || []
        };
      } else if (r.samples && r.samples.length) {
        bucket[r.zh].samples = bucket[r.zh].samples.concat(r.samples);
      }
    });
    return Object.keys(bucket).map(function (k) { return bucket[k]; }).sort(function (a, b) { return a.zh.localeCompare(b.zh, "zh-Hans-CN"); });
  }
  var domestic = domesticRegions();
  var sources = window.QB_SOURCE_REGIONS || [];

  var svg = el("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "xMidYMid meet", class: "qbmap-svg" });
  var defs = el("defs", {});
  defs.innerHTML =
    '<radialGradient id="qbGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ff5a4d" stop-opacity=".55"/><stop offset="100%" stop-color="#ff5a4d" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="qbGlowBlue" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#5ad1e6" stop-opacity=".45"/><stop offset="100%" stop-color="#5ad1e6" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="qbGlowGreen" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#35d08b" stop-opacity=".45"/><stop offset="100%" stop-color="#35d08b" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="qbGlowGold" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffcf5a" stop-opacity=".5"/><stop offset="100%" stop-color="#ffcf5a" stop-opacity="0"/></radialGradient>';
  svg.appendChild(defs);

  var gLand = el("g", { class: "qbmap-land" });
  var countryEl = {};
  data.countries.forEach(function (c) {
    var p = el("path", { d: c.d, class: "qbc", "data-iso": c.id });
    gLand.appendChild(p);
    countryEl[c.id] = p;
  });
  svg.appendChild(gLand);

  var gProv = el("g", { class: "qbmap-provinces" });
  var provinceEl = {};
  ((provinceData && provinceData.provinces) || []).forEach(function (p) {
    var short = p.name;
    var path = el("path", { d: p.d, class: "qbmap-prov", "data-province": short });
    gProv.appendChild(path);
    provinceEl[short] = path;
  });
  svg.appendChild(gProv);

  var gArcs = el("g", { class: "qbmap-arcs" });
  var gNodes = el("g", { class: "qbmap-nodes" });
  svg.appendChild(gArcs);
  svg.appendChild(gNodes);
  root.innerHTML = "";
  root.appendChild(svg);

  var tip = document.createElement("div");
  tip.className = "qbmap-tip";
  root.appendChild(tip);
  function showTip(html, evt) {
    tip.innerHTML = html;
    tip.classList.add("show");
    moveTip(evt);
  }
  function moveTip(evt) {
    var box = root.getBoundingClientRect();
    var x = evt.clientX - box.left + 14;
    var y = evt.clientY - box.top + 14;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }
  function hideTip() { tip.classList.remove("show"); }
  function tipHtml(title, sub, samples) {
    return '<strong>' + esc(title) + '</strong><span>' + esc(sub || "") + '</span>' +
      (samples && samples.length ? '<p>' + samples.map(esc).join(" / ") + '</p>' : '');
  }
  function lightCountry(iso, cls) {
    var p = countryEl[iso];
    if (p) p.classList.add(cls || "lit");
  }
  function markProvince(name) {
    var p = provinceEl[name];
    if (p) p.classList.add("is-dom");
    return p;
  }
  function showProvince(name) {
    var p = provinceEl[name];
    if (p) p.classList.add("on");
  }

  function arcPath(p0, p1) {
    var dx = p1[0] - p0[0], dy = p1[1] - p0[1];
    var dist = Math.sqrt(dx * dx + dy * dy);
    var mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2;
    var lift = Math.min(dist * 0.28, 150);
    return "M" + p0[0] + " " + p0[1] + " Q" + mx + " " + (my - lift) + " " + p1[0] + " " + p1[1];
  }
  var arcEls = [];
  function baseFor(node) {
    return node.lon < 113 && node.lat < 28 ? bases[1] : bases[0];
  }
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
    var am = el("animateMotion", { dur: "2.4s", repeatCount: "indefinite", path: d, begin: "indefinite", rotate: "auto" });
    dot.appendChild(am);
    dot.style.opacity = 0;
    gArcs.appendChild(dot);
    arcEls.push({ path: path, len: len, dot: dot, am: am, type: cls });
    return arcEls.length - 1;
  }

  var domArcIdx = domestic.map(function (r) { return buildArc(baseFor(r), r, "dom"); });
  var srcArcIdx = sources.map(function (s) { return buildArc(baseFor(s), s, "intl"); });

  function addNode(node, cls, label, sub, tipSub, samples) {
    var p = project(node.lon, node.lat);
    var g = el("g", { class: "qbmap-node " + cls, transform: "translate(" + p[0] + "," + p[1] + ")" });
    if (cls === "base") g.appendChild(el("circle", { r: 26, fill: "url(#qbGlow)", class: "qbmap-halo" }));
    if (cls === "dom") g.appendChild(el("circle", { r: 18, fill: "url(#qbGlowBlue)", class: "qbmap-halo" }));
    if (cls === "wh") g.appendChild(el("circle", { r: 20, fill: "url(#qbGlowGreen)", class: "qbmap-halo" }));
    if (cls === "intl") g.appendChild(el("circle", { r: 20, fill: "url(#qbGlowGold)", class: "qbmap-halo" }));
    var rad = cls === "base" ? 5.5 : cls === "dom" ? 5.2 : cls === "wh" ? 4.2 : 4.5;
    g.appendChild(el("circle", { r: rad, class: "qbmap-pt" }));
    if (label) {
      var anchor = node.anchor || "start";
      var lx = node.lx != null ? node.lx : 10;
      var ly = node.ly != null ? node.ly : 4;
      var t = el("text", { x: lx, y: ly, "text-anchor": anchor, class: "qbmap-lbl" });
      var t1 = el("tspan", { x: lx, class: "qbmap-lbl-main" }); t1.textContent = label;
      t.appendChild(t1);
      if (sub) { var t2 = el("tspan", { x: lx, dy: "1.15em", class: "qbmap-lbl-sub" }); t2.textContent = sub; t.appendChild(t2); }
      g.appendChild(t);
    }
    g.addEventListener("mouseenter", function (evt) { showTip(tipHtml(label || node.zh, tipSub || sub, samples), evt); });
    g.addEventListener("mousemove", moveTip);
    g.addEventListener("mouseleave", hideTip);
    gNodes.appendChild(g);
    return g;
  }

  var baseEls = bases.map(function (b) {
    return addNode(b, "base", b.zh, b.en, "运营基地", []);
  });
  var domEls = domestic.map(function (r) {
    markProvince(r.zh);
    return addNode(r, "dom", r.zh, "", "国内合作客户覆盖省份", r.samples || []);
  });
  var srcEls = sources.map(function (s) {
    if (s.iso) lightCountry(s.iso, "lit-src");
    return addNode(s, "intl", s.name, s.en, "境外合作客户与原厂品牌区域", s.samples);
  });
  var whEls = warehouses.map(function (w) {
    return addNode(w, "wh", null, null, w.zh, []);
  });

  var caption = root.parentNode.querySelector("[data-qbmap-caption]");
  var stageEls = root.parentNode.querySelectorAll("[data-qbmap-stage]");
  var fallback = [
    "双基地 · 上海与海口",
    "仓储节点 · 华东与海口协同配送",
    "国内合作客户 · 点亮合作省份",
    "境外合作客户 · 对接主流原厂品牌"
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
  function setFilter(kind) {
    root.setAttribute("data-filter", kind || "all");
  }
  root.parentNode.querySelectorAll("[data-qbmap-filter]").forEach(function (btn) {
    btn.addEventListener("mouseenter", function () { setFilter(btn.getAttribute("data-qbmap-filter")); });
    btn.addEventListener("focus", function () { setFilter(btn.getAttribute("data-qbmap-filter")); });
    btn.addEventListener("mouseleave", function () { setFilter("all"); });
    btn.addEventListener("blur", function () { setFilter("all"); });
  });

  var played = false;
  function play() {
    if (played) return; played = true;
    root.classList.add("qbmap-on");
    lightCountry("CN", "lit-home");
    setCaption(0);
    setTimeout(function () { baseEls.forEach(function (g) { g.classList.add("on"); }); }, 250);

    setTimeout(function () {
      setCaption(1);
      whEls.forEach(function (g) { g.classList.add("on"); });
    }, 1300);

    setTimeout(function () {
      setCaption(2);
      domestic.forEach(function (r) { showProvince(r.zh); });
      domEls.forEach(function (g) { g.classList.add("on"); });
      domArcIdx.forEach(function (idx, k) { drawArc(idx, k * 85); });
    }, 2300);

    setTimeout(function () {
      setCaption(3);
      sources.forEach(function (s, k) {
        setTimeout(function () {
          if (s.iso) lightCountry(s.iso, "lit");
          if (srcEls[k]) srcEls[k].classList.add("on");
          drawArc(srcArcIdx[k], 0);
        }, k * 180);
      });
    }, 4600);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { play(); io.disconnect(); } });
  }, { threshold: 0.25 });
  io.observe(root);

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    io.disconnect(); played = true;
    root.classList.add("qbmap-on");
    lightCountry("CN", "lit-home");
    sources.forEach(function (s, k) { if (s.iso) lightCountry(s.iso, "lit"); if (srcEls[k]) srcEls[k].classList.add("on"); });
    domestic.forEach(function (r) { showProvince(r.zh); });
    baseEls.concat(domEls).concat(whEls).forEach(function (g) { g.classList.add("on"); });
    arcEls.forEach(function (a) { a.path.style.strokeDashoffset = 0; });
    setCaption(3);
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
})();
