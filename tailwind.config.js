const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,md,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,md,mdx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/]
    }
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        comicneue: ['Comic Neue', 'sans-serif'],
        dancingscript: ['Dancing Script', 'cursive'],
        mono: ['Roboto Mono', 'monospace'],
        opendyslexic: ['Open Dyslexic', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      colors: {
        gray: {
          900: '#111'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem'
        }
      }
    }
  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        h1: {
          fontSize: theme('fontSize.4xl'),
          marginBottom: '2.1rem',
          lineHeight: '1.78'
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        h4: {
          fontSize: theme('fontSize.xl'),
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        h5: {
          fontSize: theme('fontSize.lg'),
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        h6: {
          fontSize: theme('fontSize.lg'),
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        p: {
          fontSize: theme('fontSize.xl'),
          marginBottom: '1.7rem',
          lineHeight: '1.7'
        },
        a: {textDecoration: 'underline'},
        ul: {marginBottom: '1.5rem'},
        ol: {marginBottom: '1.5rem'}
      })
    })
  ],
  future: {}
}
