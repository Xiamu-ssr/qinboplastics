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
