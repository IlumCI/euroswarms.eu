/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // European Research Institution palette
        bg: {
          DEFAULT: '#e8f0f8',      // Light European blue background
          alt: '#d4e3f0',          // Slightly darker blue for sections
        },
        fg: {
          DEFAULT: '#1a1a1a',
        },
        muted: {
          DEFAULT: '#4a5568',
        },
        accent: {
          DEFAULT: '#003d82',       // Deep European blue
          light: '#0056b3',
        },
        'european-blue': {
          DEFAULT: '#003d82',       // Main European blue
          light: '#e8f0f8',         // Light European blue for backgrounds
          lighter: '#f0f5fa',       // Very light European blue
        },
        border: {
          DEFAULT: '#b8d4e8',       // Blue-tinted borders
          dark: '#9bb8d0',         // Darker blue borders
        },
      },
      fontFamily: {
        // Serif for headings (European academic style)
        serif: ['Crimson Text', 'Georgia', 'Times New Roman', 'serif'],
        // Sans-serif for body (clean, professional)
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        main: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '1200px',       // Slightly wider for institutional feel
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
