/* ===== 秦帛新材料 离线多语言 i18n =====
 * 纯静态、无外部 API。翻译存于 assets/i18n/<lang>.json。
 * 语言优先级：localStorage > 浏览器语言 > 默认中文(zh)
 */
(function () {
  "use strict";

  // 支持的语言：code / 本地名称 / 文字方向 / 地区分组
  var LANGS = [
    { code: "zh", label: "简体中文",   dir: "ltr", group: "亚太 Asia-Pacific" },
    { code: "en", label: "English",    dir: "ltr", group: "全球 Global" },
    { code: "ja", label: "日本語",      dir: "ltr", group: "亚太 Asia-Pacific" },
    { code: "ko", label: "한국어",      dir: "ltr", group: "亚太 Asia-Pacific" },
    { code: "vi", label: "Tiếng Việt", dir: "ltr", group: "亚太 Asia-Pacific" },
    { code: "id", label: "Bahasa Indonesia", dir: "ltr", group: "亚太 Asia-Pacific" },
    { code: "ru", label: "Русский",    dir: "ltr", group: "欧洲 Europe" },
    { code: "fr", label: "Français",   dir: "ltr", group: "欧洲 Europe" },
    { code: "de", label: "Deutsch",    dir: "ltr", group: "欧洲 Europe" },
    { code: "es", label: "Español",    dir: "ltr", group: "欧洲 Europe" },
    { code: "pt", label: "Português",  dir: "ltr", group: "欧洲 Europe" },
    { code: "tr", label: "Türkçe",     dir: "ltr", group: "中东 Middle East" },
    { code: "ar", label: "العربية",    dir: "rtl", group: "中东 Middle East" }
  ];

  var STORAGE_KEY = "qinbo_lang";
  var DEFAULT_LANG = "zh";
  var BASE = "assets/i18n/";

  function codes() { return LANGS.map(function (l) { return l.code; }); }
  function meta(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i];
    return LANGS[0];
  }

  function detectLang() {
    // URL 参数 ?lang=xx 优先（便于 QA 与分享指定语言）
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q && codes().indexOf(q) !== -1) return q;
    } catch (e) {}
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && codes().indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var navs = (navigator.languages && navigator.languages.length)
      ? navigator.languages : [navigator.language || navigator.userLanguage || ""];
    for (var i = 0; i < navs.length; i++) {
      var l = (navs[i] || "").toLowerCase();
      if (l.indexOf("zh") === 0) return "zh";
      var two = l.split("-")[0];
      if (codes().indexOf(two) !== -1) return two;
    }
    return DEFAULT_LANG;
  }

  function get(dict, key) {
    // 支持点号路径
    var parts = key.split(".");
    var cur = dict;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function apply(dict, lang) {
    var m = meta(lang);
    window.QB_LANG = lang;            // 暴露当前语言供动态组件(产品卡片等)使用
    window.QB_DIR = m.dir;
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
    document.documentElement.setAttribute("dir", m.dir);

    // 文本内容（允许 HTML，本地可信）
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) {
      var v = get(dict, el.getAttribute("data-i18n"));
      if (typeof v === "string") el.innerHTML = v;
    });

    // 属性翻译：data-i18n-attr="placeholder:key; alt:key; content:key"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var kv = pair.split(":");
        if (kv.length < 2) return;
        var attr = kv[0].trim(), key = kv[1].trim();
        var v = get(dict, key);
        if (typeof v === "string") el.setAttribute(attr, v);
      });
    });

    // <title>
    var t = get(dict, "meta.title");
    if (typeof t === "string") document.title = t;

    // 切换器当前显示
    var cur = document.getElementById("langCurrent");
    if (cur) cur.textContent = m.label;
    document.querySelectorAll("[data-lang-opt]").forEach(function (o) {
      o.classList.toggle("active", o.getAttribute("data-lang-opt") === lang);
    });

    // 通知其它组件（如业务版图字幕）翻译已应用
    try { document.dispatchEvent(new CustomEvent("qb:i18n", { detail: { lang: lang } })); } catch (e) {}
  }

  function load(lang) {
    return fetch(BASE + lang + ".json", { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("404"); return r.json(); });
  }

  function setLang(lang) {
    if (codes().indexOf(lang) === -1) lang = DEFAULT_LANG;
    load(lang).then(function (dict) {
      apply(dict, lang);
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }).catch(function () {
      if (lang !== DEFAULT_LANG) setLang(DEFAULT_LANG);
    });
  }

  // ===== 构建语言切换器 =====
  function buildSwitcher() {
    var host = document.getElementById("langSwitch");
    if (!host) return;
    var current = detectLang();

    var btn = document.createElement("button");
    btn.className = "lang-btn";
    btn.type = "button";
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<span class="lang-globe" aria-hidden="true">🌐</span><span id="langCurrent">' +
      meta(current).label + '</span><span class="lang-caret" aria-hidden="true">▾</span>';

    var panel = document.createElement("div");
    panel.className = "lang-panel";

    // 按地区分组
    var groups = [];
    LANGS.forEach(function (l) {
      var g = groups.filter(function (x) { return x.name === l.group; })[0];
      if (!g) { g = { name: l.group, items: [] }; groups.push(g); }
      g.items.push(l);
    });

    groups.forEach(function (g) {
      var gl = document.createElement("p");
      gl.className = "lang-group";
      gl.textContent = g.name;
      panel.appendChild(gl);
      var grid = document.createElement("div");
      grid.className = "lang-opts-grid";
      g.items.forEach(function (l) {
        var a = document.createElement("button");
        a.type = "button";
        a.className = "lang-opt";
        a.setAttribute("data-lang-opt", l.code);
        a.textContent = l.label;
        a.addEventListener("click", function () {
          setLang(l.code);
          close();
        });
        grid.appendChild(a);
      });
      panel.appendChild(grid);
    });

    host.appendChild(btn);
    host.appendChild(panel);

    function open() { host.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    function close() { host.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      host.classList.contains("open") ? close() : open();
    });
    document.addEventListener("click", function (e) {
      if (!host.contains(e.target)) close();
    });

    return current;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var current = buildSwitcher();
    setLang(current || detectLang());
  });
})();
