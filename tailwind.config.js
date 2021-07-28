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
        sans: ['Heebo', 'sans-serif'],
        serif: ['Lora', 'serif']
      },
      colors: {
        gray: {
          200: '#d3d3d3',
          700: '#535353',
          800: '#242424',
          900: '#1c1b1b'
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
  plugins: [],
  future: {}
}
