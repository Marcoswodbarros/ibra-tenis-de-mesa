/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('C:/Users/Marcos/OneDrive/Documentos/Programação/Freela/1- Ibra/ibra-tenis-de-mesa/src/images/raquetes.jpg')"
      },  

      fontFamily: {
        barlow: 'Barlow Condensed',
        roboto: 'Roboto Condensed'
      },
    },
  },
  plugins: [],
}

