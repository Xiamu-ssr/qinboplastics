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
