/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        'rafi': ['"Libre Baskerville"', 'serif'],
        'mati': ['"Abril Fatface"', 'cursive'],
        'sohrab': ['"Lobster"', 'cursive'],
        'favorite': ['"Questrial"', 'serif']
      },
    },
  },
  plugins: [],
}

