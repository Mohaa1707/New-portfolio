/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor :{
        'secondary': 'rgb(0 0 0)'
      }
    },
    fontFamily: {
    'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

