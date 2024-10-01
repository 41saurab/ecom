/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "black-color": "#101820",
      "white-color": "#F8F8FF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
