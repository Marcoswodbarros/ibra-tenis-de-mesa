/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./circuito.html", "./regulamento.html", "./parceiros.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: 'Barlow Condensed',
        roboto: 'Roboto',
      },

      colors: {
        bodyBgColor: '#070A52',
      },

      height: {
        '10h': '10vh',
        '30h': '30vh',
        '40h': '40vh',
        '50h': '50vh',
        '60h': '60vh',
        '70h': '70vh',
        '78h': '78vh',
        '82h': '82vh',
        '90h': '90vh',
        '93%': '93%',
      },
    },
  },
  plugins: [],
}

