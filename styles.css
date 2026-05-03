/*
  VITRINE TAJ — Moooi-Inspired Redesign
  ─────────────────────────────────────────────────────────────
  DESIGN LANGUAGE (from Moooi):
  — Full-bleed photography as the primary design element
  — Editorial card grid: one hero + asymmetric smaller cards
  — Minimal UI chrome — text floats, space breathes
  — Tiny uppercase category labels + large serif display text
  — Almost no borders, decorations, or containers
  — Navigation: wordmark left, sparse links right

  VITRINE TAJ PALETTE (kept from v3):
  — Charcoal #0a0907   the stage
  — Burnt orange #c4512a  warmth, craft, CTAs
  — Slate blue #7eb8c9   glass, sky, precision
  — Antique gold #c9953a  bridges warm & cool
  — Warm cream #f0e8d8   artisanal feel
  ─────────────────────────────────────────────────────────────
*/

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; font-size:16px; }
img { display:block; width:100%; object-fit:cover; }
a { text-decoration:none; color:inherit; }
ul { list-style:none; }
button { font:inherit; border:none; background:none; cursor:none; }

:root {
  --black:      #0a0907;
  --night:      #0e0c0a;
  --dusk:       #161310;
  --dusk-mid:   #1e1a15;
  --cream:      #f0e8d8;
  --cream-dim:  #b8b0a0;
  --orange:     #c4512a;
  --blue:       #7eb8c9;
  --blue-deep:  #4a8fa3;
  --gold:       #c9953a;
  --muted:      #7a7060;
  --muted-lt:   #9a8f80;

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Jost', system-ui, sans-serif;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --nav-h: 5.5rem;
}

body {
  background: var(--black);
  color: var(--cream);
  font-family: var(--font-sans);
  font-weight: 300;
  overflow-x: hidden;
  cursor: none;
  -webkit-font-smoothing: antialiased;
}

/* ── CURSOR ───────────────────────────────────── */
.cur {
  width: 8px; height: 8px;
  background: var(--cream);
  border-radius: 50%;
  position: fixed; pointer-events: none;
  z-index: 9999;
  transform: translate(-50%,-50%);
  transition: width .25s var(--ease-out), height .25s var(--ease-out), background .2s;
}
.cur.big {
  width: 44px; height: 44px;
  background: transparent;
  border: 1px solid rgba(240,232,216,0.5);
}
.cur.orange { background: var(--orange); }

/* ── NAVIGATION ───────────────────────────────── */
/* Moooi: ultra-minimal, transparent over content */
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 500;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 3.5rem;
  height: var(--nav-h);
  transition: background .4s, backdrop-filter .4s;
}
.nav--filled {
  background: rgba(10,9,7,0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(240,232,216,0.05);
}

.nav__logo {
  font-family: var(--font-serif);
  font-size: 1.1rem; font-weight: 400;
  letter-spacing: .18em; text-transform: uppercase;
  color: var(--cream);
}
.nav__logo em { font-style: italic; color: var(--blue); }

/* Moooi-style: very sparse nav links, small caps */
.nav__links {
  display: flex; align-items: center; gap: 2.8rem;
}
.nav__link {
  font-size: .52rem; letter-spacing: .25em; text-transform: uppercase;
  color: rgba(240,232,216,0.55);
  transition: color .25s;
  position: relative;
}
.nav__link:hover,
.nav__link.active { color: var(--cream); }
.nav__link.active::after {
  content: ''; position: absolute; bottom: -.25rem; left: 0; right: 0;
  height: 1px; background: var(--orange);
}

.nav__cta {
  font-size: .52rem; letter-spacing: .25em; text-transform: uppercase;
  color: var(--cream);
  padding: .55rem 1.4rem;
  border: 1px solid rgba(240,232,216,0.25);
  transition: all .25s;
}
.nav__cta:hover { border-color: var(--orange); color: var(--orange); }

/* mobile */
.nav__burger {
  display: none; flex-direction: column; gap: 5px;
  padding: .5rem; cursor: none;
}
.nav__burger span { display:block; width:20px; height:1px; background:var(--cream); transition:.3s; }

.nav__drawer {
  display: none; position: fixed; inset: 0;
  background: var(--black); z-index: 499;
  flex-direction: column; align-items: center; justify-content: center;
  gap: 2.5rem; opacity: 0; pointer-events: none; transition: opacity .3s;
}
.nav__drawer.open { opacity: 1; pointer-events: all; }
.nav__drawer a {
  font-family: var(--font-serif); font-size: 2rem; font-weight: 400;
  color: var(--cream-dim); transition: color .3s;
}
.nav__drawer a:hover { color: var(--cream); }

/* ── SHARED COMPONENTS ────────────────────────── */

/* Category label — Moooi style: tiny, sparse, uppercase */
.label {
  font-size: .48rem; letter-spacing: .35em; text-transform: uppercase;
  color: var(--blue);
  display: inline-flex; align-items: center; gap: .6rem;
}
.label--orange { color: var(--orange); }
.label--muted { color: var(--muted-lt); }

/* Display heading */
.heading-xl {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 6vw, 7rem);
  font-weight: 400; line-height: 1.0;
}
.heading-xl em { font-style: italic; color: var(--gold); }

.heading-lg {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.5vw, 4rem);
  font-weight: 400; line-height: 1.05;
}
.heading-lg em { font-style: italic; color: var(--gold); }

.heading-md {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  font-weight: 400; line-height: 1.1;
}

/* Body copy */
.body-copy {
  font-size: .82rem; line-height: 2.1;
  color: var(--muted-lt);
}
.body-copy strong { color: var(--cream); font-weight: 400; }
.body-copy p + p { margin-top: 1.4rem; }

/* Buttons */
.btn {
  display: inline-block;
  font-family: var(--font-sans); font-weight: 300;
  font-size: .52rem; letter-spacing: .28em; text-transform: uppercase;
  transition: all .3s;
}
.btn--fill {
  padding: .95rem 2.5rem;
  background: var(--orange); color: var(--cream);
  position: relative; overflow: hidden;
}
.btn--fill::after {
  content: ''; position: absolute; inset: 0;
  background: var(--blue-deep);
  transform: translateX(-101%); transition: transform .35s var(--ease-out);
}
.btn--fill:hover::after { transform: translateX(0); }
.btn--fill span { position: relative; z-index: 1; }

.btn--outline {
  padding: .9rem 2.2rem;
  border: 1px solid rgba(240,232,216,0.2);
  color: var(--cream-dim);
}
.btn--outline:hover { border-color: var(--cream); color: var(--cream); }

.btn--text {
  color: var(--muted-lt);
  border-bottom: 1px solid transparent; padding-bottom: 1px;
}
.btn--text:hover { color: var(--blue); border-color: var(--blue); }

/* ── EDITORIAL CARD (Moooi-inspired) ──────────── */
/* Cards are almost entirely image — text overlays or sits below */
.card {
  position: relative; overflow: hidden;
  display: block;
  transition: opacity .4s;
}
.card:hover .card__img img { transform: scale(1.04); }
.card__img { overflow: hidden; width: 100%; height: 100%; }
.card__img img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .8s var(--ease-out);
}

/* Gradient overlay — sits at bottom of image */
.card__overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 2.5rem 2rem 2rem;
  background: linear-gradient(to top, rgba(10,9,7,.85) 0%, rgba(10,9,7,.3) 60%, transparent 100%);
}
.card__label {
  font-size: .45rem; letter-spacing: .35em; text-transform: uppercase;
  color: rgba(240,232,216,.6); margin-bottom: .6rem; display: block;
}
.card__title {
  font-family: var(--font-serif); font-weight: 400;
  line-height: 1.1; color: var(--cream);
}
.card__sub {
  font-size: .6rem; letter-spacing: .08em;
  color: rgba(240,232,216,.55); margin-top: .5rem; display: block;
}

/* Hover arrow */
.card__arrow {
  position: absolute; bottom: 1.8rem; right: 2rem;
  width: 2.5rem; height: 2.5rem;
  border: 1px solid rgba(240,232,216,.3); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: .9rem; color: var(--cream);
  opacity: 0; transform: translateY(6px);
  transition: opacity .3s, transform .3s;
}
.card:hover .card__arrow { opacity: 1; transform: translateY(0); }

/* ── PAGE HERO (inner pages) ──────────────────── */
/* Moooi: full-bleed image, text over it */
.page-hero {
  position: relative; height: 75vh; min-height: 500px;
  display: flex; align-items: flex-end;
  overflow: hidden;
}
.page-hero__bg {
  position: absolute; inset: 0;
}
.page-hero__bg img {
  width: 100%; height: 100%; object-fit: cover;
}
.page-hero__grad {
  position: absolute; inset: 0;
  background: linear-gradient(
    to top,
    rgba(10,9,7,1) 0%,
    rgba(10,9,7,.55) 40%,
    rgba(10,9,7,.15) 100%
  );
}
.page-hero__content {
  position: relative; z-index: 2;
  padding: 4rem 5rem;
  max-width: 800px;
}
.page-hero__label {
  font-size: .48rem; letter-spacing: .35em; text-transform: uppercase;
  color: var(--blue); display: block; margin-bottom: 1.2rem;
  opacity: 0; animation: riseIn .8s .3s forwards;
}
.page-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(2.8rem, 5vw, 6.5rem);
  font-weight: 400; line-height: 1.0;
  opacity: 0; animation: riseIn .9s .5s forwards;
}
.page-hero__title em { font-style: italic; color: var(--gold); }
.page-hero__sub {
  margin-top: 1.5rem;
  font-size: .8rem; line-height: 2; color: var(--muted-lt);
  max-width: 520px;
  opacity: 0; animation: riseIn .9s .7s forwards;
}
.page-hero__sub strong { color: var(--cream); font-weight: 400; }

/* ── SECTION ──────────────────────────────────── */
.section { padding: 6rem 5rem; }
.section--dark { background: var(--dusk); }
.section--darker { background: var(--night); }
.section--orange { background: var(--orange); }

.section__header { margin-bottom: 4rem; }
.section__header .label { margin-bottom: 1rem; }

/* ── FOOTER ───────────────────────────────────── */
/* Moooi: very spare, just a thin strip */
.footer {
  border-top: 1px solid rgba(240,232,216,0.07);
  padding: 3rem 5rem;
  display: flex; align-items: center; justify-content: space-between;
  gap: 2rem; flex-wrap: wrap;
}
.footer__logo {
  font-family: var(--font-serif); font-size: 1rem;
  letter-spacing: .18em; text-transform: uppercase;
}
.footer__logo em { font-style: italic; color: var(--blue); }
.footer__links {
  display: flex; gap: 2rem;
}
.footer__links a {
  font-size: .5rem; letter-spacing: .2em; text-transform: uppercase;
  color: var(--muted); transition: color .25s;
}
.footer__links a:hover { color: var(--cream); }
.footer__copy {
  font-size: .5rem; letter-spacing: .1em; color: var(--muted);
}

/* ── REVEAL ───────────────────────────────────── */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity .9s var(--ease-out), transform .9s var(--ease-out);
}
.reveal.visible { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: .1s; }
.reveal-delay-2 { transition-delay: .2s; }
.reveal-delay-3 { transition-delay: .3s; }
.reveal-delay-4 { transition-delay: .4s; }

/* ── ANIMATIONS ───────────────────────────────── */
@keyframes riseIn {
  from { opacity:0; transform:translateY(24px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes floatShape {
  0%,100% { transform:translateY(0) rotate(var(--r,0deg)); }
  50%     { transform:translateY(-14px) rotate(calc(var(--r,0deg) + 6deg)); }
}
@keyframes spinSlow {
  from { transform:rotate(0deg); } to { transform:rotate(360deg); }
}
@keyframes orbit {
  from { transform:rotate(0deg); } to { transform:rotate(360deg); }
}
@keyframes lightPulse {
  from { opacity:.6; } to { opacity:1; }
}
@keyframes tickerRoll {
  from { transform:translateX(0); } to { transform:translateX(-50%); }
}
@keyframes fadeIn {
  from { opacity:0; } to { opacity:1; }
}

/* ── RESPONSIVE ───────────────────────────────── */
@media(max-width:1024px) {
  .nav { padding:0 2.5rem; }
  .nav__links, .nav__cta { display:none; }
  .nav__burger { display:flex; }
  .nav__drawer { display:flex; }
  .section { padding:5rem 2.5rem; }
  .page-hero__content { padding:3rem 2.5rem; }
  .footer { padding:2.5rem 2.5rem; }
}
@media(max-width:640px) {
  .footer { flex-direction:column; gap:1.5rem; text-align:center; }
}
