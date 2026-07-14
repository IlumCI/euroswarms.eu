# Euroswarms — Institutional Site (design-system build)

Static, build-free version of the Euroswarms Institute site, exported from the
Claude Design system project. Every page is a single HTML file that loads React +
Babel from a CDN and renders shared chrome from `shared/`; design tokens live under
`_ds/`. There is no build step — open `index.html` or serve the directory statically.

## Structure

- `index.html`, `about.html`, `research.html`, `models.html`, `publications.html`,
  `volunteer.html`, `contact.html` — the seven pages.
- `shared/site-chrome.jsx` — doc-control band, nav, footer, sigil, section rules.
- `shared/site.css` — the "Apparatus" theme (void / archive) and component classes.
- `shared/reactbits.jsx` — React Bits components, adapted (see below).
- `shared/tweaks-panel.jsx` — the in-page tweaks panel scaffold.
- `_ds/…/tokens/*.css` — design tokens (fonts, colors, typography, layout, base).
- `assets/` — logo marks.

The home page (`index.html`) lists the Institute's current programmes — MetaModel,
Stable Cognition, The Lab, CR-CA, AEGIS, LUAF, ATOMIKA ZER0, KyberEngine, and the
OpenMind Division — plus the public model registry and bulletin.

## Design — "Apparatus" (v3)

Institutional-technocratic register: the site carries itself like a controlled
programme and then releases everything unrestricted. Every page opens with a
document-control band stating its own reference and revision.

Rules enforced throughout `site.css`: **no gradients, no backdrop-filter, no
border-radius, no box-shadow.** Colour is a signal, never an ornament — signal
red (`--x-signal`) marks status, live links, active state, and the flagship
stripe only. EU flag gold (`--x-eu-gold`) is emblem-only — the twelve stars of
the sigil, nowhere else. Flagship rank is carried by an edge, never a fill. Display type is Archivo
(grotesque), data is JetBrains Mono. The v2 serif and gold accent were retired as
warm/ecclesiastical and off-register.

Two surfaces via `html[data-theme]`: `void` (operations) and `archive` (paper).
Both are authored — archive is a cold bone, not a tinted dark theme.

### React Bits

`shared/reactbits.jsx` adapts four components from [reactbits.dev]: `DecryptedText`,
`CountUp`, `SurveyGrid` (upstream "Squares"), and `Reveal` (upstream
"ScrollReveal", minus the blur). They are reimplemented against plain
hooks + rAF + IntersectionObserver rather than vendored: the upstream versions
assume a bundler and pull in GSAP or framer-motion, and this site has neither —
its CDN payload is three SRI-pinned scripts. None of the five need a motion library.

Motion is gated twice — `prefers-reduced-motion` and the site's `motion` tweak
(via `RBMotion` context). With motion off, every component renders its resolved
end state immediately; nothing is ever left blank or mid-scramble.

Two constraints worth knowing before editing:

- `.x-grid2` / `.x-grid3` draw their hairlines as the container background showing
  through 1px gaps. That only works when items fill every cell — a short final row
  renders the line colour as a solid slab. Use `.loose` when the count doesn't
  divide by the column count (e.g. the 7-panel Officina grid).
- Don't put `Reveal` on a panel inside a flush grid, for the same reason: it starts
  at `opacity: 0` and the grid background shows through. `Reveal` is for table rows.

> Note: this branch is a different architecture from `main` (a Vite/Tailwind app);
> it is committed as an orphan branch so the two do not share history.
