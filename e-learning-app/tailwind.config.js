/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "#f5c000",
        },
        secondary: {
          DEFAULT: "#000",
        },
        danger: {
          DEFAULT: "#DB2828",
        },
      },
    },
  },
  plugins: [],
};
