# Euroswarms — Institutional Site (design-system build)

Static, build-free version of the Euroswarms Institute site, exported from the
Claude Design system project. Every page is a single HTML file that loads React +
Babel from a CDN and renders shared chrome from `shared/`; design tokens live under
`_ds/`. There is no build step — open `index.html` or serve the directory statically.

## Structure

- `index.html`, `about.html`, `research.html`, `models.html`, `publications.html`,
  `volunteer.html`, `contact.html` — the seven pages.
- `shared/site-chrome.jsx` — nav, footer, sigil, page frame, shared components.
- `shared/site.css` — the "Concordat" theme (void / archive) and component classes.
- `shared/tweaks-panel.jsx` — the in-page tweaks panel scaffold.
- `_ds/…/tokens/*.css` — design tokens (fonts, colors, typography, layout, base).
- `assets/` — logo marks.

The home page (`index.html`) lists the Institute's current programmes — MetaModel,
Stable Cognition, The Lab, CR-CA, AEGIS, LUAF, ATOMIKA ZER0, KyberEngine, and the
OpenMind Division — plus the public model registry and bulletin.

> Note: this branch is a different architecture from `main` (a Vite/Tailwind app);
> it is committed as an orphan branch so the two do not share history.
