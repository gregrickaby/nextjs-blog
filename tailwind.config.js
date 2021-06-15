const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,md,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
      './__pages/**/*.{js,ts,jsx,tsx,md,mdx}',
      './__posts/**/*.{js,ts,jsx,tsx,md,mdx}',
      './__books/**/*.{js,ts,jsx,tsx,md,mdx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/]
    }
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Suez One', 'serif']
      },
      colors: {
        gray: {
          200: '#d9d9d9',
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
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.5xl'),
          fontWeight: 'bold',
          letterSpacing: '0.1rem',
          lineHeight: '1',
          marginBottom: '2.1rem'
        },
        h2: {
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.4xl'),
          fontWeight: 'bold',
          letterSpacing: '0.1rem',
          lineHeight: '1.2',
          marginBottom: '2rem',
          marginTop: '0.5rem'
        },
        h3: {
          fontSize: theme('fontSize.3xl'),
          fontFamily: theme('fontFamily.serif'),
          letterSpacing: '0.07rem',
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        h4: {
          fontSize: theme('fontSize.xl'),
          fontFamily: theme('fontFamily.serif'),
          letterSpacing: '0.09rem',
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        h5: {
          fontSize: theme('fontSize.lg'),
          fontFamily: theme('fontFamily.serif'),
          letterSpacing: '0.09rem',
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        h6: {
          fontSize: theme('fontSize.lg'),
          fontFamily: theme('fontFamily.serif'),
          letterSpacing: '0.09rem',
          marginBottom: '2rem',
          marginTop: '0.5rem',
          fontWeight: 'bold'
        },
        p: {
          fontSize: theme('fontSize.xl'),
          marginBottom: '1.7rem',
          lineHeight: '1.6'
        },
        a: {textDecoration: 'underline'},
        ul: {marginBottom: '1.5rem'},
        ol: {marginBottom: '1.5rem'}
      })
    })
  ],
  future: {}
}
