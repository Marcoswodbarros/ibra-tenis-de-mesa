/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./circuito.html", "./regulamento.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: 'Barlow Condensed',
        roboto: 'Roboto',
      },

      height: {
        '10h': '10vh',
        '60h': '60vh',
        '81h': '81vh',
      },
    },
  },
  plugins: [],
}

