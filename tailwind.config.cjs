/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        k2d: ["K2D", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        silver: '#D9ECF2',
        skyBlue: '#01CEE1',
        prussianBlue: '#1F272F',
        green: '#41B670'
      }
    },
  },
  plugins: [],
}
