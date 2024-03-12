/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: { 'default': '1300px' },
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
      backgroundImage: {
        'hero-pattern': "url('/img/hero.png')",
        'footer-texture': "url('/img/footer-pattern.png')",
      }
    },
  },
  plugins: [],
}

