/*
  VITRINE TAJ — Bold Redesign
  ─────────────────────────────────────────────
  AESTHETIC: Dark Atelier / Luxury Print Campaign
  
  KEY DECISIONS:
  — Burnt orange used as FULL BACKGROUNDS, not just accents
  — Massive oversized type that bleeds off screen
  — Color blocking: near-black / orange / deep ink
  — Diagonal clip-path section cuts (no straight lines)
  — Huge numbers as structural design elements
  — Grid construction lines as texture
  — Typography-first: the words ARE the design
  
  PALETTE:
  — Ink black    #0a0907
  — Deep dusk    #141210
  — Orange       #c4512a  ← used as FULL BACKGROUNDS
  — Orange light #d4633b
  — Deep ink     #1a1a0f  ← olive-dark, not pure black
  — Cream        #f0e8d8
  — Blue         #7eb8c9  ← sparingly, high contrast
  — Gold         #c9953a
  — Off-white    #faf6ef
  ─────────────────────────────────────────────
*/

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Jost:wght@100;200;300;400;500&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; font-size:16px; }
img { display:block; width:100%; }
a { text-decoration:none; color:inherit; }
ul { list-style:none; }
button { font:inherit; border:none; background:none; cursor:none; }

:root {
  --ink:        #0a0907;
  --ink-deep:   #141210;
  --ink-olive:  #1a1a0f;
  --cream:      #f0e8d8;
  --off-white:  #faf6ef;
  --orange:     #c4512a;
  --orange-lt:  #d4633b;
  --orange-dim: rgba(196,81,42,0.12);
  --blue:       #7eb8c9;
  --blue-deep:  #4a8fa3;
  --gold:       #c9953a;
  --muted:      #7a7060;
  --muted-lt:   #9a8f80;

  --serif:  'Playfair Display', Georgia, serif;
  --sans:   'Jost', system-ui, sans-serif;
  --ease:   cubic-bezier(0.16, 1, 0.3, 1);
  --nav-h:  5rem;
}

body {
  background: var(--ink);
  color: var(--cream);
  font-family: var(--sans);
  font-weight: 300;
  overflow-x: hidden;
  cursor: none;
  -webkit-font-smoothing: antialiased;
}

/* grain texture */
body::after {
  content:''; position:fixed; inset:0; z-index:1; pointer-events:none;
  opacity:.03;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ── CURSOR ─────────────────────────────── */
.cur {
  width:10px; height:10px;
  background: var(--orange);
  border-radius:50%; position:fixed; pointer-events:none;
  z-index:9999; transform:translate(-50%,-50%);
  transition: width .3s var(--ease), height .3s var(--ease),
              background .2s, border-radius .3s;
  mix-blend-mode: screen;
}
.cur.expand {
  width:52px; height:52px;
  background: transparent;
  border:1px solid rgba(240,232,216,0.4);
  border-radius:50%;
}
.cur.blue-mode { background: var(--blue); }

/* ── NAV ────────────────────────────────── */
.nav {
  position:fixed; top:0; left:0; right:0; z-index:500;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 4rem; height:var(--nav-h);
  transition: background .4s, border-color .4s;
  border-bottom: 1px solid transparent;
}
.nav--bg {
  background:rgba(10,9,7,0.96);
  backdrop-filter:blur(16px);
  border-bottom-color:rgba(240,232,216,0.06);
}
/* Orange nav variant — used when sitting over orange sections */
.nav--orange { background:var(--orange-lt); border-bottom-color:rgba(240,232,216,0.2); }

.nav__logo {
  font-family:var(--serif); font-size:1rem;
  letter-spacing:.22em; text-transform:uppercase; font-weight:400;
}
.nav__logo em { font-style:italic; color:var(--blue); }

.nav__links { display:flex; gap:3rem; }
.nav__link {
  font-size:.5rem; letter-spacing:.28em; text-transform:uppercase;
  color:rgba(240,232,216,.5); transition:color .25s; position:relative;
}
.nav__link:hover, .nav__link.active { color:var(--cream); }
.nav__link.active::after {
  content:''; position:absolute; bottom:-.3rem; left:0; right:0;
  height:1px; background:var(--orange);
}

.nav__cta {
  font-size:.5rem; letter-spacing:.28em; text-transform:uppercase;
  padding:.6rem 1.6rem; background:var(--orange); color:var(--cream);
  transition:background .25s;
}
.nav__cta:hover { background:var(--orange-lt); }

.nav__burger { display:none; flex-direction:column; gap:5px; padding:.5rem; cursor:none; }
.nav__burger span { display:block; width:22px; height:1px; background:var(--cream); transition:.3s; }

.nav__drawer {
  display:none; position:fixed; inset:0; background:var(--ink-deep);
  z-index:499; flex-direction:column; align-items:center; justify-content:center;
  gap:2.5rem; opacity:0; pointer-events:none; transition:opacity .3s;
}
.nav__drawer.open { opacity:1; pointer-events:all; }
.nav__drawer a {
  font-family:var(--serif); font-size:2.5rem; color:var(--muted-lt);
  transition:color .3s;
}
.nav__drawer a:hover { color:var(--cream); }

/* ── TYPOGRAPHY SYSTEM ──────────────────── */

/* The signature element: MASSIVE display text */
.display-xl {
  font-family:var(--serif);
  font-size:clamp(5rem, 14vw, 18rem);
  font-weight:700; line-height:.85;
  letter-spacing:-.03em;
}
.display-xl em { font-style:italic; font-weight:400; }

.display-lg {
  font-family:var(--serif);
  font-size:clamp(3.5rem, 8vw, 11rem);
  font-weight:700; line-height:.88;
  letter-spacing:-.025em;
}
.display-lg em { font-style:italic; font-weight:400; color:var(--gold); }

.display-md {
  font-family:var(--serif);
  font-size:clamp(2.5rem, 5vw, 7rem);
  font-weight:400; line-height:.95;
  letter-spacing:-.02em;
}
.display-md em { font-style:italic; color:var(--gold); }

.eyebrow {
  font-size:.48rem; letter-spacing:.45em; text-transform:uppercase;
  color:var(--blue); display:block; margin-bottom:1.2rem;
}
.eyebrow--cream { color:rgba(240,232,216,.55); }
.eyebrow--orange { color:var(--orange); }

.body-text {
  font-size:.82rem; line-height:2.2; color:var(--muted-lt);
}
.body-text strong { color:var(--cream); font-weight:400; }
.body-text p + p { margin-top:1.5rem; }

/* ── BUTTONS ────────────────────────────── */
.btn {
  display:inline-block; font-family:var(--sans); font-weight:300;
  font-size:.5rem; letter-spacing:.3em; text-transform:uppercase;
  transition:all .3s var(--ease); cursor:none;
}
.btn--fill {
  padding:1.1rem 3rem; background:var(--orange); color:var(--cream);
  position:relative; overflow:hidden;
}
.btn--fill::after {
  content:''; position:absolute; inset:0;
  background:var(--blue-deep);
  transform:translateX(-101%); transition:transform .4s var(--ease);
}
.btn--fill:hover::after { transform:translateX(0); }
.btn--fill span { position:relative; z-index:1; }

.btn--outline {
  padding:1rem 2.5rem;
  border:1px solid rgba(240,232,216,.25);
  color:var(--cream-dim, #b8b0a0);
}
.btn--outline:hover { border-color:var(--cream); color:var(--cream); }

/* Inverted for use on orange backgrounds */
.btn--dark {
  padding:1.1rem 3rem; background:var(--ink); color:var(--cream);
  position:relative; overflow:hidden;
}
.btn--dark::after {
  content:''; position:absolute; inset:0;
  background:var(--ink-deep);
  transform:translateX(-101%); transition:transform .4s var(--ease);
}
.btn--dark:hover::after { transform:translateX(0); }
.btn--dark span { position:relative; z-index:1; }

.btn--text {
  color:rgba(240,232,216,.55); border-bottom:1px solid transparent; padding-bottom:2px;
}
.btn--text:hover { color:var(--cream); border-color:rgba(240,232,216,.4); }

/* ── DIAGONAL SECTION CUTS ──────────────── */
/* Applied to section tops/bottoms for non-straight edges */
.cut-top {
  clip-path: polygon(0 4%, 100% 0%, 100% 100%, 0% 100%);
  margin-top:-3vw; padding-top:calc(3rem + 3vw);
}
.cut-bottom {
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
  padding-bottom:calc(3rem + 3vw);
}
.cut-both {
  clip-path: polygon(0 4%, 100% 0%, 100% 96%, 0 100%);
  margin-top:-3vw; padding-top:calc(4rem + 3vw); padding-bottom:calc(4rem + 3vw);
}

/* ── COLOR BLOCK SECTIONS ───────────────── */
.block-orange {
  background:var(--orange);
  color:var(--cream);
}
.block-ink { background:var(--ink); }
.block-deep { background:var(--ink-deep); }
.block-olive { background:var(--ink-olive); }

/* ── CONSTRUCTION LINES ─────────────────── */
/* Subtle grid lines — like architectural drawings */
.grid-lines {
  position:absolute; inset:0; pointer-events:none;
  background-image:
    linear-gradient(rgba(240,232,216,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(240,232,216,.03) 1px, transparent 1px);
  background-size: 80px 80px;
}

/* ── REVEAL ─────────────────────────────── */
.reveal {
  opacity:0; transform:translateY(32px);
  transition:opacity .9s var(--ease), transform .9s var(--ease);
}
.reveal.visible { opacity:1; transform:none; }
.r1 { transition-delay:.1s; }
.r2 { transition-delay:.2s; }
.r3 { transition-delay:.3s; }
.r4 { transition-delay:.4s; }

/* ── ANIMATIONS ─────────────────────────── */
@keyframes riseIn {
  from { opacity:0; transform:translateY(30px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes floatShape {
  0%,100% { transform:translateY(0) rotate(var(--r,0deg)); }
  50%     { transform:translateY(-16px) rotate(calc(var(--r,0deg) + 6deg)); }
}
@keyframes spinSlow {
  from { transform:rotate(0deg); } to { transform:rotate(360deg); }
}
@keyframes orbit { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
@keyframes tickerRoll {
  from { transform:translateX(0); } to { transform:translateX(-50%); }
}
@keyframes slideRight {
  from { transform:translateX(-100%); } to { transform:translateX(0); }
}

/* ── FOOTER ─────────────────────────────── */
.footer {
  background:var(--ink);
  border-top:1px solid rgba(240,232,216,.07);
  padding:3rem 4rem;
  display:flex; align-items:center; justify-content:space-between;
  gap:2rem; flex-wrap:wrap;
  position:relative;
}
.footer::before {
  content:''; position:absolute; top:0; left:4rem; right:4rem; height:1px;
  background:linear-gradient(to right, transparent, var(--orange), transparent);
  opacity:.4;
}
.footer__logo {
  font-family:var(--serif); font-size:1rem;
  letter-spacing:.2em; text-transform:uppercase;
}
.footer__logo em { font-style:italic; color:var(--blue); }
.footer__links { display:flex; gap:2.5rem; }
.footer__links a {
  font-size:.48rem; letter-spacing:.22em; text-transform:uppercase;
  color:var(--muted); transition:color .25s;
}
.footer__links a:hover { color:var(--cream); }
.footer__copy { font-size:.48rem; letter-spacing:.1em; color:var(--muted); }

/* ── RESPONSIVE ─────────────────────────── */
@media(max-width:1024px) {
  .nav { padding:0 2rem; }
  .nav__links, .nav__cta { display:none; }
  .nav__burger { display:flex; }
  .nav__drawer { display:flex; }
  .footer { padding:2.5rem 2rem; }
}
@media(max-width:640px) {
  .footer { flex-direction:column; gap:1.5rem; text-align:center; }
  .cut-top, .cut-bottom, .cut-both { clip-path:none; margin-top:0; padding-top:3rem; padding-bottom:3rem; }
}
