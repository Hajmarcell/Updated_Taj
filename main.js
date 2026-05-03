// VITRINE TAJ — Shared JS

document.addEventListener('DOMContentLoaded', () => {

  // ── CURSOR ──────────────────────────────────────────────
  const cur = document.querySelector('.cur');
  let mx = 0, my = 0;
  if (cur) {
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top  = my + 'px';
    });
    document.querySelectorAll('a, button, .card, .hoverable').forEach(el => {
      el.addEventListener('mouseenter', () => cur.classList.add('big'));
      el.addEventListener('mouseleave', () => cur.classList.remove('big'));
    });
    document.querySelectorAll('.btn--fill, .nav__cta').forEach(el => {
      el.addEventListener('mouseenter', () => cur.classList.add('orange'));
      el.addEventListener('mouseleave', () => cur.classList.remove('orange'));
    });
  }

  // ── NAV SCROLL ──────────────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const check = () => nav.classList.toggle('nav--filled', window.scrollY > 60);
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  // ── MOBILE MENU ─────────────────────────────────────────
  const burger = document.querySelector('.nav__burger');
  const drawer = document.querySelector('.nav__drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── ACTIVE NAV LINK ─────────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ── SCROLL REVEAL ───────────────────────────────────────
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

});
