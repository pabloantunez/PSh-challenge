/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red-psh':'#FD0005',
        'purple-psh':'#350374'
      }
    },
  },
  plugins: [],
}