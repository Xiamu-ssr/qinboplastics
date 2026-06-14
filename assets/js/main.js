// 标记 JS 可用（配合 CSS 兑底：无 JS 时 reveal 内容不会隐藏）
document.documentElement.classList.add('js');

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

// ===== 销售部名片轮播 =====
(function () {
  const vp = document.getElementById('salesViewport');
  if (!vp) return;
  const prev = document.getElementById('salesPrev');
  const next = document.getElementById('salesNext');
  const card = vp.querySelector('.namecard');
  const step = () => (card ? card.getBoundingClientRect().width + 24 : 320);
  const rtl = () => document.documentElement.getAttribute('dir') === 'rtl';

  function updateArrows() {
    const maxScroll = vp.scrollWidth - vp.clientWidth - 2;
    const x = Math.abs(vp.scrollLeft);
    if (prev) prev.disabled = x <= 2;
    if (next) next.disabled = x >= maxScroll;
  }
  function scrollBy(dir) {
    // RTL 下 scrollLeft 为负，统一用方向乘法
    vp.scrollBy({ left: dir * step() * (rtl() ? -1 : 1), behavior: 'smooth' });
  }
  prev?.addEventListener('click', () => scrollBy(-1));
  next?.addEventListener('click', () => scrollBy(1));
  vp.addEventListener('scroll', () => requestAnimationFrame(updateArrows), { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();

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
  document.querySelectorAll('.nc-wechat').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-wechat') || '';
      const done = () => showToast('✓  ' + id);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(id).then(done).catch(() => fallbackCopy(id, done));
      } else {
        fallbackCopy(id, done);
      }
    });
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
