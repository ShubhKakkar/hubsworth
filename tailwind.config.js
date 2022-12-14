/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Playfair Display"],
        serif: ["Open Sans"],
      },
      colors: {
        primary: "#f8f9fa",
        secondary: "#fff"
      }
    },
  },
  plugins: [],
};
