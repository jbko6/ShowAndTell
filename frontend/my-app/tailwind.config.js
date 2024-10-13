/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      gray: colors.gray,
      pink: colors.pink,
      blue: colors.blue,
      satGreen: '#649b50',
      satBlue: '#359dcf',
      satRed: '#ea5a60'
    },
    extend: {},
  },
  plugins: [],
}

