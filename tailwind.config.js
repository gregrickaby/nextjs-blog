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
        mono: ['Roboto Mono', 'monospace'],
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      colors: {
        gray: {
          900: '#111'
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem'
      }
    },
    fontFamily: {
      comicneue: ['Comic Neue', 'sans-serif'],
      dancingscript: ['Dancing Script', 'cursive'],
      opendyslexic: ['Open Dyslexic', 'sans-serif']
    }
  },
  plugins: []
}
