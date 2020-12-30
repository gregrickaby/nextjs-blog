module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/, /^(noUi-)/]
    }
  },
  darkMode: 'media',
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['EB Garamond', 'serif']
    }
  },
  plugins: []
}
