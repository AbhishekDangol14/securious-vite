module.exports = {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge:["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '30/2': '15%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
