# Euroswarms Research Website

Institutional-style static website for Euroswarms R&D Division, built with **React**, **HTML**, **CSS**, and **Tailwind CSS**.

## Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **React Router** - Declarative routing for React
- **HTMX** - Dynamic HTML interactions
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend build tool

## Project Structure

```
website/
├── public/
│   └── assets/
│       └── images/
│           ├── full-nobg.png      # Full logo with transparent background
│           ├── Full.png          # Full Euroswarms logo
│           └── symbolOnly.png    # Symbol-only logo
├── src/
│   ├── components/
│   │   ├── BaseLayout.jsx        # Base layout wrapper
│   │   └── Navigation.jsx        # Navigation component
│   ├── pages/
│   │   ├── Home.jsx              # Homepage
│   │   ├── Projects.jsx          # Projects index
│   │   ├── projects/
│   │   │   ├── Crca.jsx          # CR-CA project page
│   │   │   └── Lucre.jsx         # Project LUCRE page
│   │   ├── Publications.jsx       # Publications listing
│   │   ├── Docs.jsx              # Documentation index
│   │   └── Contact.jsx            # Contact page
│   ├── App.jsx                   # Main React app
│   ├── main.jsx                  # Application entry point
│   └── style.css                 # Tailwind CSS styles
├── index.html                    # HTML entry point
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── package.json                  # Dependencies
```

## Development

### Setup

```bash
pnpm install
```

### Run Development Server

```bash
pnpm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
pnpm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
```

## Design Philosophy

- **Institutional**: European research organization aesthetic (CERN/ESA style)
- **European Blue**: Deep blue (#003399) matching European Union flag
- **Typography-first**: Serif headings (Crimson Text) with clean sans-serif body text
- **Responsive**: Dynamic sizing and layouts for all screen sizes
- **Accessible**: High contrast, semantic HTML structure

## Features

- **React 18**: Modern React with hooks and functional components
- **HTMX Integration**: Ready for dynamic content swapping
- **Tailwind CSS**: Utility-first styling with custom European color palette
- **React Router**: Client-side routing for smooth navigation
- **Responsive Design**: Mobile-first approach with breakpoints

## Deployment

The site builds to static HTML/CSS/JS. Deploy to:

- **GitHub Pages**: Configured with GitHub Actions workflow
- **Netlify**: Auto-detects Vite
- **Vercel**: Auto-detects Vite
- **NGINX**: Serve `dist/` directory

## Notes

- Assets in `public/` are served at the root (`/assets/...`)
- Navigation uses React Router for client-side routing
- All pages use the `BaseLayout` for consistent structure
- European blue theme throughout with yellow accents
