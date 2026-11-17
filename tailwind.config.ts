import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './views/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: 'var(--ink-950)',
          900: 'var(--ink-900)',
          800: 'var(--ink-800)',
          700: 'var(--ink-700)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          soft: 'var(--accent-soft)',
          2: 'rgb(var(--accent-2-rgb) / <alpha-value>)',
        },
        copy: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
        },
        hairline: 'var(--hairline)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      borderRadius: {
        panel: 'var(--radius-panel)',
      },
      maxWidth: {
        shell: 'var(--shell)',
      },
      letterSpacing: {
        display: '-0.045em',
      },
    },
  },
  plugins: [],
}

export default config
