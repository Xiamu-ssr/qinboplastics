/* ===== 秦帛产品中心 · 渲染 + 搜索 =====
 * 依赖 assets/data/products.js (window.QB_PRODUCTS)
 * 容器: #prodTabs #prodSearch #prodGrid #prodEmpty #prodModal
 */
(function () {
  "use strict";
  var DB = window.QB_PRODUCTS;
  var grid = document.getElementById("prodGrid");
  if (!DB || !grid) return;

  // UI 文案（13 语言由 i18n 处理标题/占位；卡片内文走 zh/en 双语回退）
  var TXT = {
    zh: { all: "全部", brands: "品牌", grades: "牌号", apps: "典型应用", props: "典型物性参考", brandGrades: "品牌与现货牌号", cases: "定制案例", empty: "未找到匹配的产品，换个关键词试试（如 PA66、8150、奇美、阻燃）。", detail: "查看详情", customize: "改性定制", note: "物性为料种家族典型参考值，实际以各牌号 TDS 为准。", hot: "热门" },
    en: { all: "All", brands: "Brands", grades: "Grades", apps: "Applications", props: "Typical Properties (ref.)", brandGrades: "Brands & In-stock Grades", cases: "Custom Cases", empty: "No matching products. Try another keyword (e.g. PA66, 8150, Chimei, flame-retardant).", detail: "View details", customize: "Custom compound", note: "Properties are typical family-level references; exact values follow each grade's TDS.", hot: "Hot" }
  };
  function L() { return window.QB_LANG === "zh" || !window.QB_LANG ? "zh" : "en"; }
  function t(k) { var l = L(); return (TXT[l] && TXT[l][k]) || TXT.en[k] || k; }
  function pick(o, base) { // base: 'desc' -> descZh/descEn; '' -> zh/en
    var l = L();
    if (base) return l === "zh" ? o[base + "Zh"] : (o[base + "En"] || o[base + "Zh"]);
    return l === "zh" ? o.zh : (o.en || o.zh);
  }
  function catName(id) {
    var c = DB.cats.filter(function (x) { return x.id === id; })[0];
    return c ? pick(c) : id;
  }

  var state = { cat: "all", q: "" };

  // URL 预填 ?cat= ?q=
  try {
    var sp = new URLSearchParams(location.search);
    var qc = sp.get("cat"); if (qc) state.cat = qc;
    var qq = sp.get("q"); if (qq) state.q = qq;
  } catch (e) {}

  // ---- 搜索匹配 ----
  function matches(m, q) {
    if (!q) return true;
    q = q.toLowerCase().trim();
    var hay = [m.abbr, m.zh, m.en, m.descZh, m.descEn, catName(m.cat)];
    (m.apps || []).forEach(function (a) { hay.push(a); });
    (m.brands || []).forEach(function (b) { hay.push(b.n); (b.g || []).forEach(function (g) { hay.push(g); }); });
    return hay.join(" \u0001 ").toLowerCase().indexOf(q) !== -1;
  }
  function gradeCount(m) { var n = 0; (m.brands || []).forEach(function (b) { n += (b.g || []).length; }); return n; }
  function topGrades(m, n) {
    var out = [];
    (m.brands || []).forEach(function (b) { (b.g || []).forEach(function (g) { if (out.indexOf(g) === -1) out.push(g); }); });
    return out.slice(0, n);
  }

  // ---- 卡片 ----
  var CAT_CLS = { commodity: "c-comm", engineering: "c-eng", special: "c-spec", modified: "c-mod" };
  function card(m) {
    var el = document.createElement("button");
    el.type = "button";
    el.className = "prod-card " + (CAT_CLS[m.cat] || "");
    el.setAttribute("data-id", m.id);
    var badge = m.abbr.length > 7 ? m.abbr.split(/[\s\/]/)[0] : m.abbr;
    var gc = gradeCount(m);
    var preview = topGrades(m, 6);
    var chips = preview.map(function (g) { return '<code class="pc-g">' + esc(g) + '</code>'; }).join("");
    var more = gc > preview.length ? '<code class="pc-g pc-more">+' + (gc - preview.length) + '</code>' : '';
    el.innerHTML =
      '<span class="pc-tile"><span class="pc-abbr">' + esc(badge) + '</span>' +
        (m.hot ? '<span class="pc-hot">' + t("hot") + '</span>' : '') + '</span>' +
      '<span class="pc-body">' +
        '<span class="pc-cat">' + esc(catName(m.cat)) + '</span>' +
        '<span class="pc-name">' + esc(m.abbr) + ' · ' + esc(pick(m)) + '</span>' +
        '<span class="pc-desc">' + esc(pick(m, "desc")) + '</span>' +
        '<span class="pc-grades-prev">' + chips + more + '</span>' +
        '<span class="pc-meta"><span>' + (m.brands || []).length + ' ' + t("brands") +
          ' · ' + gc + ' ' + t("grades") + '</span><span class="pc-view">' + t("detail") + ' \u2192</span></span>' +
      '</span>';
    el.addEventListener("click", function () { openModal(m); });
    return el;
  }

  function render() {
    var list = DB.materials.filter(function (m) {
      return (state.cat === "all" || m.cat === state.cat) && matches(m, state.q);
    });
    grid.innerHTML = "";
    var frag = document.createDocumentFragment();
    list.forEach(function (m) { frag.appendChild(card(m)); });
    grid.appendChild(frag);
    var empty = document.getElementById("prodEmpty");
    if (empty) { empty.textContent = t("empty"); empty.style.display = list.length ? "none" : "block"; }
  }

  // ---- 详情弹窗 ----
  var modal = document.getElementById("prodModal");
  function openModal(m) {
    if (!modal) return;
    var html =
      '<div class="pm-head ' + (CAT_CLS[m.cat] || "") + '">' +
        '<span class="pm-abbr">' + esc(m.abbr.split(/[\s\/]/)[0]) + '</span>' +
        '<div><p class="pm-cat">' + esc(catName(m.cat)) + '</p>' +
        '<h3>' + esc(m.abbr) + ' · ' + esc(pick(m)) + '</h3></div>' +
      '</div>' +
      '<p class="pm-desc">' + esc(pick(m, "desc")) + '</p>';
    // 应用
    if (m.apps && m.apps.length) {
      html += '<div class="pm-sect"><h4>' + t("apps") + '</h4><div class="pm-tags">' +
        m.apps.map(function (a) { return '<span>' + esc(a) + '</span>'; }).join("") + '</div></div>';
    }
    // 物性表
    if (m.props && m.props.length) {
      html += '<div class="pm-sect"><h4>' + t("props") + '</h4><table class="pm-table"><tbody>' +
        m.props.map(function (p) { return '<tr><td>' + esc(p.k) + '</td><td>' + esc(p.v) + '</td></tr>'; }).join("") +
        '</tbody></table><p class="pm-note">' + t("note") + '</p></div>';
    }
    // 定制案例
    if (m.cases && m.cases.length) {
      html += '<div class="pm-sect"><h4>' + t("cases") + '</h4><div class="pm-cases">' +
        m.cases.map(function (c) {
          return '<div class="pm-case"><strong>' + esc(L() === "zh" ? c.zh : (c.en || c.zh)) + '</strong>' +
            '<p>' + esc(pick(c, "desc")) + '</p></div>';
        }).join("") + '</div></div>';
    }
    // 品牌与牌号
    if (m.brands && m.brands.length) {
      html += '<div class="pm-sect"><h4>' + t("brandGrades") + '</h4><div class="pm-brands">' +
        m.brands.map(function (b) {
          return '<div class="pm-brand"><span class="pm-bn">' + esc(b.n) + '</span><div class="pm-grades">' +
            (b.g || []).map(function (g) { return '<code>' + esc(g) + '</code>'; }).join("") + '</div></div>';
        }).join("") + '</div></div>';
    }
    html += '<div class="pm-cta"><a href="contact.html" class="btn btn-primary">' +
      (L() === "zh" ? "询价 / 索取 TDS" : "Request quote / TDS") + '</a></div>';

    modal.querySelector(".pm-inner").innerHTML = html;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() { if (modal) { modal.classList.remove("open"); document.body.style.overflow = ""; } }
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-pm-close]")) closeModal();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  }

  // ---- Tabs ----
  function buildTabs() {
    var host = document.getElementById("prodTabs");
    if (!host) return;
    host.innerHTML = "";
    var tabs = [{ id: "all", name: t("all") }].concat(DB.cats.map(function (c) { return { id: c.id, name: pick(c) }; }));
    tabs.forEach(function (tb) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "prod-tab" + (state.cat === tb.id ? " active" : "");
      b.textContent = tb.name;
      b.addEventListener("click", function () {
        state.cat = tb.id;
        host.querySelectorAll(".prod-tab").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        render();
      });
      host.appendChild(b);
    });
  }

  // ---- 搜索框 ----
  var input = document.getElementById("prodSearch");
  if (input) {
    input.value = state.q;
    input.addEventListener("input", function () { state.q = input.value; render(); });
  }

  function refreshI18n() { buildTabs(); if (input) input.setAttribute("placeholder", t("empty") ? (L() === "zh" ? "搜索 料种 / 牌号 / 品牌 / 应用，如 PA66、8150、奇美、阻燃" : "Search material / grade / brand / use, e.g. PA66, 8150, Chimei") : ""); render(); }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // 初次 + 语言切换后重渲染
  document.addEventListener("qb:i18n", refreshI18n);
  buildTabs(); render();
  if (input) input.setAttribute("placeholder", L() === "zh" ? "搜索 料种 / 牌号 / 品牌 / 应用，如 PA66、8150、奇美、阻燃" : "Search material / grade / brand / use, e.g. PA66, 8150, Chimei");

  // 若带 ?q= 进入，自动聚焦搜索框
  if (state.q && input) { try { input.focus(); } catch (e) {} }

  // 深链 ?open=<id> 直接打开详情(便于分享/QA)
  try {
    var openId = new URLSearchParams(location.search).get("open");
    if (openId) {
      var hit = DB.materials.filter(function (m) { return m.id === openId; })[0];
      if (hit) setTimeout(function () { openModal(hit); }, 60);
    }
  } catch (e) {}
})();
