module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,md,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
      './data/**/**/*.{js,ts,jsx,tsx,md,mdx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/]
    }
  },
  darkMode: 'media',
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
