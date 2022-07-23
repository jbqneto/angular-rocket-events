/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F45'
        }
      }
    },
  },
  plugins: [],
}
