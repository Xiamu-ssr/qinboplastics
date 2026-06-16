/* ===== 秦帛产品中心 · 牌号级渲染 + 搜索 =====
 * 依赖 assets/data/products.js (window.QB_PRODUCTS)
 * 数据层仍保持 料种 -> 品牌 -> 牌号，页面层展开为具体牌号产品。
 */
(function () {
  "use strict";
  var DB = window.QB_PRODUCTS;
  var grid = document.getElementById("prodGrid");
  if (!DB || !grid) return;

  var TXT = {
    zh: {
      all: "全部牌号", brands: "厂家", grades: "牌号", apps: "典型应用",
      props: "关键参考参数", same: "同料种可供牌号", empty: "未找到匹配的牌号，换个关键词试试（如 R370Y、8150、M90-44、奇美、阻燃）。",
      detail: "查看参数", quote: "询价", stock: "现货 / 可询", hot: "热门", family: "料种",
      allFamily: "全部料种",
      note: "参数为公开资料与原厂 TDS 参考摘录，不等同完整物性表；正式选型以原厂最新 TDS、COA 与批次为准。",
      searchPh: "搜索牌号 / 料种 / 厂家 / 应用，如 R370Y、8150、M90-44、奇美",
      count: "共 {total} 个牌号，当前第 {page} / {pages} 页",
      prev: "上一页",
      next: "下一页"
    },
    en: {
      all: "All Grades", brands: "Producer", grades: "Grade", apps: "Applications",
      props: "Key Reference Data", same: "Other grades in this family", empty: "No matching grade. Try R370Y, 8150, M90-44, Chimei or flame-retardant.",
      detail: "View data", quote: "Quote", stock: "In stock / inquiry", hot: "Hot", family: "Family",
      allFamily: "All Families",
      note: "Data is a short reference excerpt from public sources and OEM TDS, not a complete property table. Final selection follows the latest OEM TDS, COA and batch.",
      searchPh: "Search grade / material / producer / use, e.g. R370Y, 8150, M90-44, Chimei",
      count: "{total} grades · page {page} / {pages}",
      prev: "Previous",
      next: "Next"
    }
  };
  var CAT_CLS = { commodity: "c-comm", engineering: "c-eng", special: "c-spec", modified: "c-mod" };
  var FALLBACK_PHOTOS = {
    commodity: {
      image: "assets/img/photos/real/category-commodity.png",
      thumb: "assets/img/photos/thumbs/category-commodity-thumb.jpg"
    },
    engineering: {
      image: "assets/img/photos/real/category-engineering.png",
      thumb: "assets/img/photos/thumbs/category-engineering-thumb.jpg"
    },
    special: {
      image: "assets/img/photos/real/category-special.png",
      thumb: "assets/img/photos/thumbs/category-special-thumb.jpg"
    },
    modified: {
      image: "assets/img/photos/real/category-modified.png",
      thumb: "assets/img/photos/thumbs/category-modified-thumb.jpg"
    }
  };

  function L() { return window.QB_LANG === "zh" || !window.QB_LANG ? "zh" : "en"; }
  function t(k) { var l = L(); return (TXT[l] && TXT[l][k]) || TXT.en[k] || k; }
  function pick(o, base) {
    var l = L();
    if (base) return l === "zh" ? o[base + "Zh"] : (o[base + "En"] || o[base + "Zh"]);
    return l === "zh" ? o.zh : (o.en || o.zh);
  }
  function catName(id) {
    var c = DB.cats.filter(function (x) { return x.id === id; })[0];
    return c ? pick(c) : id;
  }
  function slug(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-|-$/g, "");
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function metaFor(grade, brand) {
    var raw = String(grade || "");
    var upper = raw.toUpperCase();
    var base = (DB.gradeMeta && (DB.gradeMeta[raw] || DB.gradeMeta[upper])) || {};
    if (!brand || !DB.brandGradeMeta) return base;
    var brandKey = String(brand || "") + "|" + raw;
    var brandUpperKey = String(brand || "") + "|" + upper;
    var branded = DB.brandGradeMeta[brandKey] || DB.brandGradeMeta[brandUpperKey];
    if (!branded) return base;
    var out = {};
    Object.keys(base).forEach(function (k) { out[k] = base[k]; });
    Object.keys(branded).forEach(function (k) { out[k] = branded[k]; });
    return out;
  }
  function imageFor(m, brand, grade) {
    var meta = metaFor(grade, brand);
    if (meta.image) return meta.image;
    return "";
  }
  function thumbFor(m, brand, grade) {
    var meta = metaFor(grade, brand);
    return meta.thumb || meta.image || "";
  }
  function fallbackFor(m) {
    return FALLBACK_PHOTOS[m.cat] || FALLBACK_PHOTOS.commodity;
  }
  var INTERNAL_PROP_RE = /^(资料来源|资料口径|来源|source|data basis|confidence|可信度)$/i;
  function publicProps(list) {
    return (list || []).filter(function (p) {
      return p && p.k && !INTERNAL_PROP_RE.test(String(p.k).trim());
    });
  }
  function gradeProps(item) {
    var meta = metaFor(item.grade, item.brand);
    return publicProps(meta.props || item.material.props || []);
  }
  function gradeLabel(item) {
    return metaFor(item.grade, item.brand).display || item.grade;
  }
  function materialLabel(item) {
    return metaFor(item.grade, item.brand).material || pick(item.material);
  }
  function abbrLabel(item) {
    return metaFor(item.grade, item.brand).abbr || item.material.abbr;
  }
  function gradeDesc(item) {
    var meta = metaFor(item.grade, item.brand);
    return pick(meta, "desc") || pick(item.material, "desc");
  }
  function gradeFeatures(item) {
    var meta = metaFor(item.grade, item.brand);
    var f = meta.features || [];
    if (!f.length) f = [item.material.abbr, item.brand].concat((item.material.apps || []).slice(0, 2));
    return f.slice(0, 4);
  }

  function buildItems() {
    var out = [];
    (DB.materials || []).forEach(function (m) {
      (m.brands || []).forEach(function (b) {
        (b.g || []).forEach(function (g) {
          if (!g || g === "多牌号" || g === "按需配方" || g === "全新料") return;
          var realImage = imageFor(m, b.n, g);
          var realThumb = thumbFor(m, b.n, g);
          var fallback = fallbackFor(m);
          out.push({
            id: m.id + "-" + slug(b.n) + "-" + slug(g),
            grade: g,
            brand: b.n,
            material: m,
            cat: m.cat,
            hot: !!m.hot || !!metaFor(g, b.n).features,
            image: realImage || fallback.image,
            thumb: realThumb || fallback.thumb,
            realImage: !!realImage,
            realThumb: !!realThumb
          });
        });
      });
    });
    return out;
  }
  var ITEMS = buildItems();
  var PAGE_SIZE = 24;
  var state = { cat: "all", mat: "all", q: "", page: 1 };

  try {
    var sp = new URLSearchParams(location.search);
    var qc = sp.get("cat"); if (qc) state.cat = qc;
    var qm = sp.get("mat") || sp.get("family"); if (qm) state.mat = qm;
    var qq = sp.get("q"); if (qq) state.q = qq;
  } catch (e) {}

  function matches(item, q) {
    if (!q) return true;
    q = q.toLowerCase().trim();
    var m = item.material;
    var hay = [item.grade, gradeLabel(item), item.brand, m.abbr, m.zh, m.en, m.descZh, m.descEn, catName(m.cat)];
    (m.apps || []).forEach(function (a) { hay.push(a); });
    gradeFeatures(item).forEach(function (f) { hay.push(f); });
    return hay.join(" \u0001 ").toLowerCase().indexOf(q) !== -1;
  }
  function sameFamily(item) {
    return ITEMS.filter(function (x) { return x.material.id === item.material.id && x.grade !== item.grade; }).slice(0, 18);
  }
  function materialChoices() {
    return (DB.materials || []).filter(function (m) { return state.cat === "all" || m.cat === state.cat; });
  }
  function ensureMaterialVisible() {
    if (state.mat === "all") return;
    var ok = materialChoices().some(function (m) { return m.id === state.mat; });
    if (!ok) state.mat = "all";
  }
  function resetPage() { state.page = 1; }

  function layoutClass(item, idx) {
    return "";
  }
  function cardPhoto(item, label) {
    if (item.thumb) {
      return '<span class="pc-photo ' + (item.realThumb ? "pc-photo-real" : "pc-photo-fallback") + '"><img src="' + esc(item.thumb) + '" alt="' + esc(label + " " + item.brand) + '" loading="lazy" decoding="async" />' +
        '<span class="pc-code">' + esc(label) + '</span>' +
        (item.hot ? '<span class="pc-hot">' + t("hot") + '</span>' : '') +
      '</span>';
    }
    return '<span class="pc-photo pc-photo-empty">' +
      '<span class="pc-mat">' + esc(abbrLabel(item)) + '</span>' +
      '<span class="pc-code">' + esc(label) + '</span>' +
      (item.hot ? '<span class="pc-hot">' + t("hot") + '</span>' : '') +
    '</span>';
  }
  function modalPhoto(item, label) {
    if (item.image) return '<div class="pm-grade-img ' + (item.realImage ? "pm-grade-real" : "pm-grade-fallback") + '"><img src="' + esc(item.image) + '" alt="' + esc(label + " " + item.brand) + '" /></div>';
    return '<div class="pm-grade-img pm-grade-empty"><span>' + esc(abbrLabel(item)) + '</span><strong>' + esc(label) + '</strong></div>';
  }

  function card(item, idx) {
    var m = item.material;
    var el = document.createElement("button");
    var label = gradeLabel(item);
    el.type = "button";
    el.className = ["prod-card", "grade-card", CAT_CLS[item.cat] || "", layoutClass(item, idx)].filter(Boolean).join(" ");
    el.setAttribute("data-id", item.id);
    var features = gradeFeatures(item).map(function (f) { return '<span>' + esc(f) + '</span>'; }).join("");
    el.innerHTML =
      cardPhoto(item, label) +
      '<span class="pc-body">' +
        '<span class="pc-cat">' + esc(catName(item.cat)) + ' / ' + esc(abbrLabel(item)) + '</span>' +
        '<span class="pc-name">' + esc(label) + '</span>' +
        '<span class="pc-maker">' + esc(item.brand) + ' · ' + esc(materialLabel(item)) + '</span>' +
        '<span class="pc-desc">' + esc(gradeDesc(item)) + '</span>' +
        '<span class="pc-tags">' + features + '</span>' +
        '<span class="pc-meta"><span>' + t("stock") + '</span><span class="pc-view">' + t("detail") + ' \u2192</span></span>' +
      '</span>';
    el.addEventListener("click", function () { openModal(item); });
    return el;
  }

  function pageWindow(page, pages) {
    var out = [];
    var start = Math.max(1, page - 2);
    var end = Math.min(pages, page + 2);
    if (start > 1) out.push(1);
    if (start > 2) out.push("gap-a");
    for (var i = start; i <= end; i++) out.push(i);
    if (end < pages - 1) out.push("gap-b");
    if (end < pages) out.push(pages);
    return out;
  }
  function renderPager(total, pages) {
    var pager = document.getElementById("prodPager");
    var count = document.getElementById("prodCount");
    if (count) {
      count.textContent = total ? t("count")
        .replace("{total}", total)
        .replace("{page}", state.page)
        .replace("{pages}", pages) : "";
    }
    if (!pager) return;
    pager.innerHTML = "";
    if (pages <= 1) { pager.hidden = true; return; }
    pager.hidden = false;
    function addBtn(label, page, cls, disabled) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = cls || "";
      b.textContent = label;
      if (disabled) b.disabled = true;
      if (!disabled) {
        b.addEventListener("click", function () {
          state.page = page;
          render();
          try { grid.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
        });
      }
      pager.appendChild(b);
    }
    addBtn(t("prev"), state.page - 1, "pager-nav", state.page <= 1);
    pageWindow(state.page, pages).forEach(function (p) {
      if (typeof p !== "number") {
        var gap = document.createElement("span");
        gap.className = "pager-gap";
        gap.textContent = "...";
        pager.appendChild(gap);
      } else {
        addBtn(String(p), p, "pager-num" + (p === state.page ? " active" : ""), false);
      }
    });
    addBtn(t("next"), state.page + 1, "pager-nav", state.page >= pages);
  }

  function render() {
    var list = ITEMS.filter(function (item) {
      return (state.cat === "all" || item.cat === state.cat) &&
        (state.mat === "all" || item.material.id === state.mat) &&
        matches(item, state.q);
    });
    var pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (state.page > pages) state.page = pages;
    if (state.page < 1) state.page = 1;
    var start = (state.page - 1) * PAGE_SIZE;
    var view = list.slice(start, start + PAGE_SIZE);
    grid.innerHTML = "";
    var frag = document.createDocumentFragment();
    view.forEach(function (item, idx) { frag.appendChild(card(item, start + idx)); });
    grid.appendChild(frag);
    var empty = document.getElementById("prodEmpty");
    if (empty) { empty.textContent = t("empty"); empty.style.display = list.length ? "none" : "block"; }
    renderPager(list.length, pages);
  }

  var modal = document.getElementById("prodModal");
  function openModal(item) {
    if (!modal) return;
    var m = item.material;
    var label = gradeLabel(item);
    var features = gradeFeatures(item).map(function (f) { return '<span>' + esc(f) + '</span>'; }).join("");
    var props = gradeProps(item);
    var html =
      '<div class="pm-grade-head">' +
        modalPhoto(item, label) +
        '<div class="pm-grade-title"><p class="pm-cat">' + esc(catName(item.cat)) + ' / ' + esc(abbrLabel(item)) + '</p>' +
          '<h3>' + esc(label) + '</h3><p>' + esc(item.brand) + ' · ' + esc(materialLabel(item)) + '</p></div>' +
      '</div>' +
      '<p class="pm-desc">' + esc(gradeDesc(item)) + '</p>' +
      '<div class="pm-sect"><h4>' + t("family") + '</h4><div class="pm-specs">' +
        '<span><b>' + esc(t("grades")) + '</b>' + esc(label) + '</span>' +
        '<span><b>' + esc(t("brands")) + '</b>' + esc(item.brand) + '</span>' +
        '<span><b>' + esc(t("family")) + '</b>' + esc(abbrLabel(item) + " · " + materialLabel(item)) + '</span>' +
        '<span><b>' + esc(t("stock")) + '</b>' + esc(t("quote")) + '</span>' +
      '</div></div>' +
      '<div class="pm-sect"><h4>' + t("apps") + '</h4><div class="pm-tags">' + features +
        (m.apps || []).slice(0, 5).map(function (a) { return '<span>' + esc(a) + '</span>'; }).join("") +
      '</div></div>';
    if (props && props.length) {
      html += '<div class="pm-sect"><h4>' + t("props") + '</h4><table class="pm-table"><tbody>' +
        props.map(function (p) { return '<tr><td>' + esc(p.k) + '</td><td>' + esc(p.v) + '</td></tr>'; }).join("") +
        '</tbody></table><p class="pm-note">' + t("note") + '</p></div>';
    }
    var family = sameFamily(item);
    if (family.length) {
      html += '<div class="pm-sect"><h4>' + t("same") + '</h4><div class="pm-grades">' +
        family.map(function (x) { return '<code>' + esc(gradeLabel(x)) + '</code>'; }).join("") + '</div></div>';
    }
    html += '<div class="pm-cta"><a href="contact.html" class="btn btn-primary">' +
      (L() === "zh" ? "联系销售部" : "Contact sales") + '</a></div>';

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
        ensureMaterialVisible();
        resetPage();
        host.querySelectorAll(".prod-tab").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        buildFamilyTabs();
        render();
      });
      host.appendChild(b);
    });
  }
  function buildFamilyTabs() {
    var host = document.getElementById("prodFamilyTabs");
    if (!host) return;
    ensureMaterialVisible();
    host.innerHTML = "";
    var tabs = [{ id: "all", name: t("allFamily") }].concat(materialChoices().map(function (m) { return { id: m.id, name: m.abbr }; }));
    tabs.forEach(function (tb) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "prod-family-tab" + (state.mat === tb.id ? " active" : "");
      b.textContent = tb.name;
      b.addEventListener("click", function () {
        state.mat = tb.id;
        resetPage();
        host.querySelectorAll(".prod-family-tab").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        render();
      });
      host.appendChild(b);
    });
  }

  var input = document.getElementById("prodSearch");
  if (input) {
    input.value = state.q;
    input.addEventListener("input", function () { state.q = input.value; resetPage(); render(); });
  }
  function refreshI18n() {
    buildTabs();
    buildFamilyTabs();
    if (input) input.setAttribute("placeholder", t("searchPh"));
    render();
  }

  document.addEventListener("qb:i18n", refreshI18n);
  buildTabs();
  buildFamilyTabs();
  render();
  if (input) input.setAttribute("placeholder", t("searchPh"));
  if (state.q && input) { try { input.focus(); } catch (e) {} }

  try {
    var openId = new URLSearchParams(location.search).get("open");
    if (openId) {
      var want = String(openId).toUpperCase();
      var hit = ITEMS.filter(function (item) {
        return item.id === openId ||
          String(item.grade).toUpperCase() === want ||
          String(gradeLabel(item)).toUpperCase() === want;
      })[0];
      if (hit) setTimeout(function () { openModal(hit); }, 60);
    }
  } catch (e) {}
})();
