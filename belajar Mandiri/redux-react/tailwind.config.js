/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'rubik': ['Rubik', 'sans'],
        'roboto':['Roboto','sans']
      },
      backgroundImage:{
        'radial-gradient':'radial-gradient(circle, rgba(14,7,126,1) 5%, rgba(100,9,212,1) 45%)'
      }
    },
  },
  plugins: [],
}