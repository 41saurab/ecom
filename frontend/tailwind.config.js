/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#101820",
        light: "#F8F8FF",
        "light-gray": "#F4F4F4",
      },
    },
  },

  plugins: [require("daisyui")],
};
