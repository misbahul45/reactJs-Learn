/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gabarito': ['Gabarito', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'PlayfairDisplay': ['Playfair Display', 'serif'],
        'EduVICWA': ['Edu VIC WA NT Beginner', 'sans-serif'],
        'Gabarito': ['Gabarito', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        animateDown:{
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(5px)'
          },
          '60%': {
            transform: 'translateY(3px)'
          }
        }
      },
      animation: {
        'animateDown': 'animateDown 1s infinite'
      }
    },
  },
  plugins: [],
}