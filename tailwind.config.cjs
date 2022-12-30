/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src\\pages\\Chat.jsx','src\\pages\\SignIn.jsx','src\\pages\\Mentors.jsx','src\\pages\\Students.jsx','src\\pages\\Home.jsx','src\\pages\\Register.jsx'],

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

