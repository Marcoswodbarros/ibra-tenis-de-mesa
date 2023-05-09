/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./circuito.html", "./regulamento.html", "./parceiros.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: 'Barlow Condensed',
        roboto: 'Roboto',
      },

      height: {
        '10h': '10vh',
        '40h': '40vh',
        '60h': '60vh',
        '70h': '70vh',
        '82h': '82vh',
      },
    },
  },
  plugins: [],
}

