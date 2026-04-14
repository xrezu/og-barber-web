/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Neutrals ──────────────────────────────────────────────
        'og-black':   '#0A0A0A',   // near-pure black for dark bg
        'charcoal':   '#131313',   // deep charcoal — main dark surface
        'surface':    '#1C1C1C',   // elevated cards in dark mode
        'dark-gray':  '#2A2A2A',   // borders / hover states dark
        'mid-gray':   '#888888',   // secondary text
        'light-gray': '#E2E2E2',   // borders in light mode
        'off-white':  '#F2F2F2',   // body text in dark mode
        'cream':      '#FAFAFA',   // warm near-white

        // ── Gold accent (black, white & gold palette) ────────────
        'copper':       '#C9A96E',   // alias → gold (backwards compat for classes)
        'copper-light': '#E8D5B0',   // alias → gold-light
        'copper-dark':  '#A88A4A',   // alias → gold-dark

        // ── Gold ─────────────────────────────────────────────────
        'gold':       '#C9A96E',
        'gold-light': '#E8D5B0',
        'gold-dark':  '#A88A4A',

        // ── WhatsApp ──────────────────────────────────────────────
        'wa':      '#25D366',
        'wa-dark': '#128C7E',
      },

      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },

      // Sharp corners — Modern Dark Premium uses minimal radius
      borderRadius: {
        'none': '0',
        'xs':   '2px',
        'sm':   '4px',
        DEFAULT: '4px',
        'md':   '6px',
        'lg':   '8px',
        'full': '9999px',
        'pill': '9999px',  // kept for WA float only
      },

      animation: {
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'fade-up':     'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-5px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // Dot pattern backgrounds
      backgroundImage: {
        'dots-dark':  'radial-gradient(circle, rgb(255 255 255 / 0.07) 1px, transparent 1px)',
        'dots-light': 'radial-gradient(circle, rgb(0 0 0 / 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '22px 22px',
      },
    },
  },
  plugins: [],
}
