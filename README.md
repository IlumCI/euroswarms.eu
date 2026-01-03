# Euroswarms Research Website

Institutional-style static website for Euroswarms R&D Division, built with **Astro**, **TypeScript/TSX**, and **MDX**.

## Tech Stack

- **Astro** - Static site generator
- **TypeScript/TSX** - Type-safe component structure
- **MDX** - Markdown with JSX for content pages
- **React** - For interactive components (Navigation)

## Project Structure

```
website/
├── public/
│   └── assets/
│       ├── images/
│       │   ├── Full.png          # Full Euroswarms logo
│       │   └── symbolOnly.png    # Symbol-only logo
│       ├── style.css             # Main stylesheet
│       └── motion.css            # Animation utilities
├── src/
│   ├── components/
│   │   └── Navigation.tsx       # Navigation component (TSX)
│   ├── layouts/
│   │   └── BaseLayout.astro      # Base layout wrapper
│   └── pages/
│       ├── index.astro            # Homepage
│       ├── projects.astro         # Projects index
│       ├── projects/
│       │   ├── crca.mdx           # CR-CA project page (MDX)
│       │   └── lucre.mdx          # Project LUCRE page (MDX)
│       ├── publications.astro    # Publications listing
│       ├── docs.astro             # Documentation index
│       └── contact.astro          # Contact page
├── astro.config.mjs               # Astro configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies

```

## Development

### Setup

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Design Philosophy

- **Institutional**: European research organization aesthetic (CERN/ESA style)
- **Typography-first**: Clean, readable, grid-aligned
- **Sharp edges**: No rounded corners, subtle borders
- **Restrained**: Minimal color palette, whitespace-driven
- **Motion**: State changes only, not decorative

## Content Management

### Static Pages (`.astro`)
Use `.astro` files for pages that don't need markdown content:
- `index.astro` - Homepage
- `projects.astro` - Projects listing
- `publications.astro` - Publications
- `docs.astro` - Documentation index
- `contact.astro` - Contact page

### Content Pages (`.mdx`)
Use `.mdx` files for content-heavy pages that benefit from markdown:
- `projects/crca.mdx` - CR-CA project details
- `projects/lucre.mdx` - Project LUCRE details
- Future: Blog posts, detailed documentation

### Components (`.tsx`)
React components written in TypeScript:
- `Navigation.tsx` - Reusable navigation component

## Adding New Content

### New Project Page

1. Create a new `.mdx` file in `src/pages/projects/`:
```mdx
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout title="Project Name — Euroswarms Research">
  # Project Name
  
  Project description...
</BaseLayout>
```

2. Add a link in `src/pages/projects.astro`

### New Publication

Add to `src/pages/publications.astro` or create individual `.mdx` files.

## Deployment

The site builds to static HTML/CSS/JS. Deploy to:

- **GitHub Pages**: Works with `npm run build`
- **Netlify**: Auto-detects Astro
- **Vercel**: Auto-detects Astro
- **NGINX**: Serve `dist/` directory

## Notes

- Assets in `public/` are served at the root (`/assets/...`)
- Navigation component uses React for future interactivity
- All pages use the `BaseLayout` for consistent structure
- TypeScript provides type safety across components
