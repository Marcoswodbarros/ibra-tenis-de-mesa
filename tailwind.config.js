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

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

