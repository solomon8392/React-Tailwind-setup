/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Elevationbalck: "#1F2128",
        green: "#146B48",
        grey700: "#080705",
        grey400: "#5A5A58",
        white: "#FFFFFF",
        lightgreen: "#D0E1DA80"
      },

      fontFamily: {
        Figtree: ['Figtree', "sans-serif"],        
      },
    },
  },
  plugins: [],
}

