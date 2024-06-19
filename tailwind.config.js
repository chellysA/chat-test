/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        primary: "#f0f2f5",
        secondary: "#dfe5e7",
        grey: "#54656f",
        greenLight: "#d9fdd3",
        green: "#06cf9c",
      },
    },
  },
  plugins: [],
};
