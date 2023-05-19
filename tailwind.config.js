/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "phone-sm": "320px",
        "lgl": "1440px",
      },
      colors: {
        "alice-blue": "#e9f1f7",
        "crayola-blue": "#3777FF",
        "madder": "#A31621",
        "rich-black": "#131b23",
        oxfort: "#011638",
      },
      backgroundSize: {
        "75%": "100%",
      },
    },
  },
  plugins: [],
};
