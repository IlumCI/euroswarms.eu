# Euroswarms R&D Division Website

Institutional-style static website for Euroswarms R&D Division, built with **React**, **Vite**, and **Tailwind CSS**. The site showcases research in agentic reasoning architectures, causal inference frameworks, and constraint-driven AI systems.

## Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **React Router DOM** - Declarative routing for React
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend build tool
- **MathJax** - Mathematical expression rendering
- **Prism.js** - Syntax highlighting for code blocks

## Project Structure

```
euroswarms.eu/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── full-nobg.png      # Full logo with transparent background
│   │       ├── Full.png          # Full Euroswarms logo
│   │       └── symbolOnly.png    # Symbol-only logo
│   ├── evaluation_data/          # Empirical evaluation data (JSON)
│   │   ├── extraction_evaluation_results.json
│   │   ├── quality_score_evaluation.json
│   │   ├── ablation_study_results.json
│   │   └── modeling_assumptions_results.json
│   └── 404.html                   # Custom 404 page for GitHub Pages
├── src/
│   ├── components/
│   │   ├── AlgorithmFlowchart.jsx    # Algorithm flowchart visualization
│   │   ├── BaseLayout.jsx             # Base layout wrapper
│   │   ├── Breadcrumbs.jsx            # Breadcrumb navigation
│   │   ├── CausalGraph.jsx            # Causal graph visualization (SVG)
│   │   ├── CodeBlock.jsx              # Syntax-highlighted code blocks
│   │   ├── ErrorBoundary.jsx          # React error boundary component
│   │   ├── GitHubLink.jsx             # GitHub repository link component
│   │   ├── MathRenderer.jsx            # MathJax-based math expression renderer
│   │   └── Navigation.jsx            # Main navigation component
│   ├── pages/
│   │   ├── About.jsx                  # About page (mission, vision, research philosophy)
│   │   ├── Contact.jsx                # Contact page
│   │   ├── Docs.jsx                    # Documentation index
│   │   ├── Home.jsx                    # Homepage
│   │   ├── Projects.jsx                # Projects index
│   │   ├── Publications.jsx           # Publications listing
│   │   ├── Research.jsx                # Technical research paper (CR-CA)
│   │   ├── crca/                       # CR-CA framework pages
│   │   │   ├── Overview.jsx            # CR-CA overview
│   │   │   ├── Installation.jsx        # Installation guide
│   │   │   ├── Documentation.jsx        # API documentation
│   │   │   ├── Examples.jsx            # Code examples and tutorials
│   │   │   ├── UseCases.jsx            # Real-world use cases
│   │   │   ├── CRCA-SD.jsx             # CRCA-SD (Socioeconomic Dynamics)
│   │   │   ├── CRCA-CG.jsx             # CRCA-CG (Corporate Governance)
│   │   │   └── CRCA-Q.jsx              # CRCA-Q (Quantitative Trading)
│   │   └── projects/                   # Project detail pages
│   │       ├── Crca.jsx                # CR-CA project page
│   │       └── Lucre.jsx                # Project LUCRE page
│   ├── utils/
│   │   └── empiricalData.js            # Utility for loading evaluation data
│   ├── App.jsx                         # Main React app with routing
│   ├── main.jsx                        # Application entry point
│   └── style.css                       # Tailwind CSS styles
├── index.html                          # HTML entry point
├── vite.config.js                      # Vite configuration
├── tailwind.config.js                  # Tailwind CSS configuration
└── package.json                        # Dependencies
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

The site will be available at `http://localhost:4321/euroswarms.eu/`

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
- **Academic**: Research paper presentation with mathematical notation support

## Features

### Core Features

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for smooth navigation
- **Tailwind CSS**: Utility-first styling with custom European color palette
- **Responsive Design**: Mobile-first approach with breakpoints
- **Error Boundaries**: Graceful error handling with fallback UI

### Research & Documentation Features

- **MathJax Integration**: Dynamic rendering of LaTeX mathematical expressions
- **Syntax Highlighting**: Code blocks with Prism.js
- **Causal Graph Visualization**: SVG-based causal graph rendering
- **Algorithm Flowcharts**: Visual representation of algorithms
- **Empirical Data Integration**: Dynamic loading and display of evaluation results
- **Error Handling**: Comprehensive error boundaries and fallback mechanisms

### Pages

- **Home**: Landing page with project overview
- **About**: Mission, vision, and research philosophy
- **Research**: Technical research paper on CR-CA with full mathematical notation
- **Projects**: Overview of research projects (CR-CA, LUCRE)
- **CR-CA Pages**: Comprehensive documentation, examples, and specialized branches
- **Publications**: Research publications listing
- **Documentation**: Documentation index
- **Contact**: Contact information

## Key Components

### MathRenderer
Renders LaTeX mathematical expressions using MathJax. Handles dynamic loading and error recovery.

### CausalGraph
Visualizes causal graphs using SVG. Supports node and edge rendering with customizable styling.

### CodeBlock
Syntax-highlighted code blocks with language detection and copy functionality.

### ErrorBoundary
React error boundary that catches JavaScript errors and displays a fallback UI.

### AlgorithmFlowchart
Visual representation of algorithms with step-by-step flow.

## Deployment

The site builds to static HTML/CSS/JS. Deploy to:

- **GitHub Pages**: Configured with GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Netlify**: Auto-detects Vite
- **Vercel**: Auto-detects Vite
- **NGINX**: Serve `dist/` directory

### GitHub Pages Configuration

- Base URL: `/euroswarms.eu/`
- Custom 404 page for SPA routing
- Automatic deployment on push to `institutional-redesign` branch

## Data Files

Empirical evaluation data is stored in `public/evaluation_data/` as JSON files:
- `extraction_evaluation_results.json` - Variable extraction performance metrics
- `quality_score_evaluation.json` - Quality score sensitivity analysis
- `ablation_study_results.json` - Ablation study results
- `modeling_assumptions_results.json` - Modeling assumptions analysis

These files are generated by test scripts and loaded dynamically by the Research page.

## Notes

- Assets in `public/` are served at the root (`/euroswarms.eu/assets/...`)
- Navigation uses React Router for client-side routing
- All pages use the `BaseLayout` for consistent structure
- European blue theme (#003399) throughout with yellow accents
- MathRenderer expressions must be wrapped in string literals `{'...'}` to prevent JSX interpretation errors
- BASE_URL fallback: `import.meta.env.BASE_URL || '/euroswarms.eu/'`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- MathJax requires JavaScript enabled
- SVG support required for causal graph visualization
