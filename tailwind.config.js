/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // European Research Institution palette - Official institutional colors
        bg: {
          DEFAULT: '#f5f7fa',      // Clean white/light background
          alt: '#e8f0f8',          // Light European blue for sections
          section: '#f0f5fa',      // Very light blue for section backgrounds
        },
        fg: {
          DEFAULT: '#1a1a1a',
          light: '#4a5568',
        },
        muted: {
          DEFAULT: '#4a5568',
          light: '#6b7280',
        },
        accent: {
          DEFAULT: '#003399',       // Official European blue
          light: '#0056b3',
          dark: '#002266',
        },
        'european-blue': {
          DEFAULT: '#003399',       // Official EU blue
          light: '#e8f0f8',         // Light European blue for backgrounds
          lighter: '#f0f5fa',       // Very light European blue
          dark: '#002266',          // Darker blue for emphasis
          darker: '#001a4d',        // Darkest blue
        },
        border: {
          DEFAULT: '#b8d4e8',       // Blue-tinted borders
          dark: '#9bb8d0',         // Darker blue borders
          light: '#d1e0ed',        // Light borders
        },
        official: {
          DEFAULT: '#003399',       // Official institutional blue
          badge: '#f4c430',         // Official badge color (gold/yellow)
        },
      },
      fontFamily: {
        // Serif for headings (European academic/institutional style)
        serif: ['Crimson Text', 'Georgia', 'Times New Roman', 'serif'],
        // Sans-serif for body (clean, professional, institutional)
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        main: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '1400px',       // Wider for institutional feel
        narrow: '800px',         // Narrow content width
        wide: '1600px',          // Wide content width
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'institutional': '0 2px 8px rgba(0, 51, 153, 0.1)',
        'card': '0 4px 12px rgba(0, 51, 153, 0.15)',
      },
    },
  },
  plugins: [],
}
