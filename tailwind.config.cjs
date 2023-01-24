/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/*.{html,jsx}',
    'dist/*.{html,jsx}',
    'index.html',
  ],

  theme: {
    colors: {
      'yellow': '#E9D758',
      'black' : '#071013',
      'green' :'#4DA167',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  
}

