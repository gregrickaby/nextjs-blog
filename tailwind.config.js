module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/]
    }
  },
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem'
      }
    }
  },
  plugins: []
}
