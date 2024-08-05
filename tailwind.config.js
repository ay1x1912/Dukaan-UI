/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          my_color: '#4dcb7a',
          "white":{
          700:"#f2f2f2",
          800:"#e4e7eb"
          },
          "blue":{
            700:"#1174c2",
            800:"#0e4f82",
            900:"#1e2640"
      }
      },
  }
  },
  plugins: [],
}