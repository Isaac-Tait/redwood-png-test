const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const heroPatterns = require('tailwindcss-hero-patterns/src/patterns')

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'fall-colors': "url('../public/images/fall-colors.jpg')",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,
    },
    heroPatterns: {
      topography: heroPatterns.topography,
    },
    heroPatternsShades: ['200', '400'],
    heroPatternsColors: ['green', 'yellow'],
    extend: {
      fontFamily: {
        sans: ['Avenir', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
