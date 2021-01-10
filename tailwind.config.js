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
      comic: ['ComicNeue', 'sans-serif'],
      dyslexic: ['OpenDyslexic', 'sans-serif']
    }
  },
  plugins: []
}
