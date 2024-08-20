/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
          dark: "#FF9C0196"
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
          300: "rgba(205,205,224,0.66)"
        },
      },
      fontFamily: {
        bebas: ["BebasNeue-Regular", "sans-serif"],
        mbold: ["Montserrat-Bold", "sans-serif"],
        mextrabold: ["Montserrat-ExtraBold", "sans-serif"],
        mlight: ["Montserrat-Light", "sans-serif"],
        mmedium: ["Montserrat-Medium", "sans-serif"],
        mregular: ["Montserrat-Regular", "sans-serif"],
        msemibold: ["Montserrat-SemiBold", "sans-serif"],
        mthin: ["Montserrat-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};