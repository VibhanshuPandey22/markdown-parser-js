// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGray: "#121212",
        bgLightGray: "#181818",
        bgLighterGray: "#18191a",
        bgWhite: "#ECECEC",
        bgLightWhite: "#DFDFDF",
        bgLighterWhite: "#D5D5D5",
      },
    },
  },
  plugins: [],
};
