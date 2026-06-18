// 标记 JS 可用（配合 CSS 兑底：无 JS 时 reveal 内容不会隐藏）
document.documentElement.classList.add('js');

// ===== 主题：明亮经典色 / 黑夜蓝色 =====
(function () {
  const KEY = 'qb-theme';
  const THEMES = {
    light: {
      logo: 'assets/img/logo-classic.png',
      icon: '<path d="M20.4 14.2A8.2 8.2 0 0 1 9.8 3.6a8.7 8.7 0 1 0 10.6 10.6Z"/>',
      label: '切换到黑夜模式',
      themeColor: '#ffffff'
    },
    dark: {
      logo: 'assets/img/logo-classic-blue.png',
      icon: '<path d="M12 3v2.2M12 18.8V21M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M3 12h2.2M18.8 12H21M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56"/><circle cx="12" cy="12" r="4.1"/>',
      label: '切换到明亮模式',
      themeColor: '#090a0d'
    }
  };
  let current = 'light';
  try {
    current = localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light';
  } catch (e) {}

  function ensureThemeColorMeta() {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    return meta;
  }

  function updateThemeButton(theme) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.setAttribute('aria-label', THEMES[theme].label);
    btn.setAttribute('title', THEMES[theme].label);
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + THEMES[theme].icon + '</svg>';
  }

  function updateLogo(theme) {
    const logo = THEMES[theme].logo;
    document.querySelectorAll('.brand-mark img, .bc-logo img').forEach(function (img) {
      img.setAttribute('src', logo);
    });
  }

  function applyTheme(theme, persist) {
    current = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', current);
    ensureThemeColorMeta().setAttribute('content', THEMES[current].themeColor);
    updateThemeButton(current);
    updateLogo(current);
    if (persist) {
      try { localStorage.setItem(KEY, current); } catch (e) {}
    }
  }

  function mountThemeButton() {
    const host = document.getElementById('langSwitch');
    if (!host || document.getElementById('themeToggle')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'themeToggle';
    btn.className = 'theme-toggle';
    btn.addEventListener('click', function () {
      applyTheme(current === 'dark' ? 'light' : 'dark', true);
    });
    host.parentNode.insertBefore(btn, host);
  }

  mountThemeButton();
  applyTheme(current, false);
})();

// ===== 导航：滚动变实底 =====
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== 移动端菜单 =====
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
toggle?.addEventListener('click', () => menu.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// ===== 滚动渐入 =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== 数字滚动动画 =====
const animateStat = (el) => {
  const target = +el.dataset.target;
  const dur = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const statIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateStat(e.target);
      statIO.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-num').forEach(el => statIO.observe(el));

// ===== 销售部名片 · 可复用轮播组件 =====
(function () {
  const phoneIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
  const wechatIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 4.2C5.4 4.2 2.4 6.7 2.4 9.8c0 1.8 1 3.3 2.5 4.4l-.6 2.1 2.4-1.2c.8.2 1.6.4 2.5.4h.4c-.2-.6-.3-1.1-.3-1.7 0-3.1 2.9-5.6 6.7-5.6h.4c-.8-2.3-3.5-4-6.8-4zm-2.3 4.5c-.5 0-.9-.4-.9-.8s.4-.8.9-.8.9.4.9.8-.4.8-.9.8zm4.5 0c-.5 0-.9-.4-.9-.8s.4-.8.9-.8.9.4.9.8-.4.8-.9.8zm4.9.8c-3.1 0-5.6 2-5.6 4.5s2.5 4.5 5.6 4.5c.7 0 1.4-.1 2-.3l2 1-.5-1.7c1.3-.9 2.1-2.2 2.1-3.6 0-2.4-2.5-4.4-5.6-4.4zm-1.9 3.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm3.7 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/></svg>';
  const cards = [
    { name: '莫先生', phone: '150 0099 3933', tel: '15000993933', wechat: 'QBXCL168' },
    { name: '易先生（178）', phone: '178 7244 1014', tel: '17872441014', wechat: '17872441014' },
    { name: '易先生（159）', phone: '159 7394 0558', tel: '15973940558', wechat: '15973940558' },
    { name: '钟先生', phone: '166 2154 8159', tel: '16621548159', wechat: 'bil618' },
    { name: '王先生', phone: '176 0897 5835', tel: '17608975835', wechat: 'My-Aurora1' }
  ];

  function cardHtml(c) {
    return '<article class="bcard">' +
      '<div class="bc-head"><span class="bc-logo"><img src="assets/img/logo-classic.png" alt="秦帛新材料" /></span><div class="bc-co"><strong>秦帛新材料</strong><em>QINBO NEW MATERIALS</em></div></div>' +
      '<div class="bc-body">' +
        '<div class="bc-name"><h3>' + c.name + '</h3><span class="bc-role" data-i18n="contact.roleSales">销售部</span></div>' +
        '<div class="bc-lines">' +
          '<a class="bc-line" href="tel:' + c.tel + '">' + phoneIcon + '<span>' + c.phone + '</span></a>' +
          '<button class="bc-line nc-wechat" type="button" data-wechat="' + c.wechat + '">' + wechatIcon + '<span>' + c.wechat + '</span></button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  document.querySelectorAll('[data-business-cards]').forEach(function (host) {
    if (!host.classList.contains('bcards-marquee')) host.classList.add('bcards-marquee');
    host.setAttribute('aria-label', host.getAttribute('aria-label') || '销售部名片');
    host.innerHTML = '<div class="bcards-track">' + cards.map(cardHtml).join('') + '</div>';
  });

  document.querySelectorAll('.bcards-track').forEach(function (track) {
    if (track.dataset.ready === '1') return;
    track.dataset.ready = '1';
    // 克隆一份卡片实现无缝循环（translateX -50% 回到原点）
    const originals = Array.prototype.slice.call(track.children);
    originals.forEach(function (c) { track.appendChild(c.cloneNode(true)); });
    // 速度按内容宽度自适应：约 60px/s
    const setDur = function () {
      const w = track.scrollWidth / 2; // 一组宽度
      const dur = Math.max(18, Math.round(w / 60));
      track.style.setProperty('--bc-dur', dur + 's');
    };
    setDur();
    window.addEventListener('resize', setDur);
  });

  // 微信号点击复制
  let toast;
  function showToast(msg) {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'nc-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 1800);
  }
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.nc-wechat');
    if (!btn) return;
    e.preventDefault();
    const id = btn.getAttribute('data-wechat') || '';
    const done = () => showToast('✓  ' + id);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(id).then(done).catch(() => fallbackCopy(id, done));
    } else {
      fallbackCopy(id, done);
    }
  });
  function fallbackCopy(text, cb) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); cb(); } catch (e) {}
    document.body.removeChild(ta);
  }
})();

// ===== 资质证照：页脚小字入口 + 灯箱查看 (所有页面自动注入) =====
(function () {
  var host = document.querySelector('.footer-bottom .container');
  if (!host) return;
  var CERTS = [
    { src: 'assets/img/certs/license-sh.jpg', i18n: 'cert.licenseSh', zh: '上海营业执照' },
    { src: 'assets/img/certs/license-hk.jpg', i18n: 'cert.licenseHk', zh: '海口营业执照' },
    { src: 'assets/img/certs/customs-sh.jpg', i18n: 'cert.customsSh', zh: '上海海关备案' },
    { src: 'assets/img/certs/customs-hk.jpg', i18n: 'cert.customsHk', zh: '海口海关证明' }
  ];
  // 小字行
  var line = document.createElement('span');
  line.className = 'footer-certs';
  var lbl = document.createElement('span');
  lbl.className = 'fc-label';
  lbl.setAttribute('data-i18n', 'footer.certs');
  lbl.textContent = '资质证照';
  line.appendChild(lbl);
  CERTS.forEach(function (c, i) {
    var a = document.createElement('a');
    a.href = c.src;
    a.className = 'fc-link';
    a.setAttribute('data-i18n', c.i18n);
    a.textContent = c.zh;
    a.addEventListener('click', function (e) { e.preventDefault(); openLb(i); });
    line.appendChild(a);
  });
  host.appendChild(line);

  // 灯箱
  var lb = document.createElement('div');
  lb.className = 'cert-lb';
  lb.innerHTML =
    '<button class="clb-close" aria-label="close">\u00d7</button>' +
    '<button class="clb-nav clb-prev" aria-label="prev">\u2039</button>' +
    '<figure class="clb-fig"><img alt="" /><figcaption></figcaption></figure>' +
    '<button class="clb-nav clb-next" aria-label="next">\u203a</button>';
  document.body.appendChild(lb);
  var img = lb.querySelector('img'), cap = lb.querySelector('figcaption');
  var idx = 0;
  function label(c) {
    try { var d = window.QB_DICT; } catch (e) {}
    return c.zh; // 灯箱标题用中文名(证照本身为中文)
  }
  function show() { var c = CERTS[idx]; img.src = c.src; cap.textContent = label(c); }
  function openLb(i) { idx = i; show(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
  function go(d) { idx = (idx + d + CERTS.length) % CERTS.length; show(); }
  lb.querySelector('.clb-close').addEventListener('click', close);
  lb.querySelector('.clb-prev').addEventListener('click', function (e) { e.stopPropagation(); go(-1); });
  lb.querySelector('.clb-next').addEventListener('click', function (e) { e.stopPropagation(); go(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
  });
})();
