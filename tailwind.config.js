/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    fontFamily: {
      roboto: ['"Roboto"', 'sans-serif'],
      work: ['"Work Sans"', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'btn': '5px 5px 0px rgba(0,0,0,1)',
      },
      dropShadow: {
        'card': '0px 5px 10px rgba(0,0,0,1)',
      },
      backgroundImage: {
        'hero': "url('./public/img/hero.png)",
        'footer': "url('./public/footer-pattern.png')",
      },
      fontSize: {
        '10xl': '160px',
      },
    },
  },
  plugins: [],
}

