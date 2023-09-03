/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'ls': '820px',
      // => @media (min-width: 768px) { ... }

      'ls': '920px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1250px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      colors: {
        "primary": "#FDD672",
        "secondary":"#F9BD5A",
        "tertiary":"#FEFEFF"
      },
      textColor: {
        "primary": "#FDD672",
        "secondary":"#F9BD5A",
        "tertiary":"#FEFEFF",
        "textColor1":"#272829",
        "textColor2":"#61677A"
      },
      borderColor: {
        "primary": "#FDD672",
        "secondary":"#F9BD5A",
        "tertiary":"#FEFEFF",
        "textColor1":"#272829",
        "textColor2":"#61677A"
      },
    },
  },
  plugins: [],
}