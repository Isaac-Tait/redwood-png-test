const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'fall-colors': "url('../public/images/fall-colors.jpg')",
    },
    extend: {
      fontFamily: {
        sans: ['Avenir', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
