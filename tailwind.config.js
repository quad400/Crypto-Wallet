/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakatarBold: "Jakarta-bold",
        jakatarRegular: "Jakarta-regular",
        jakatarMedium: "Jakarta-medium",
        jakatarSemibold: "Jakarta-semibold"
      },
      colors: {
        primary: "#2D52EC",
        primaryLight: "#627EEA",
        secondaryGreen: "#4FBF67",
        secondaryRed: "#FF7A68",
        gray900: "#11101C",
        gray700: "#24242F",
        gray500: "#373747",
        gray100: "#9493AC"
      }
    },
  },
  plugins: [],
};
