/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', 'sans-serif'],
      work: ['"Work Sans"', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'btn': '5px 5px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}

