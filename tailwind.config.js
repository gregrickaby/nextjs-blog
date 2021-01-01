const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/, /^(noUi-)/]
    }
  },
  darkMode: 'media',
  theme: {
    fontSize: {
      'root-em': '18px'
    }
  },
  plugins: [
    plugin(function ({addBase, config}) {
      addBase({
        html: {fontSize: config('theme.fontSize.root-em')}
      })
    })
  ]
}
