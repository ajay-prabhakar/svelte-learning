/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary: {
          100: '#E3E3D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Poppins']
      }
    }
  },
  plugins: [
    require('daisyui')
  ]
}
