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
        white: {
          DEFAULT: "#FFFFFF",
        },
        textDark: {
          DEFAULT: "#667085",
        },
        dark: {
          DEFAULT: "#eee",
        },
        "dark-2": {
          DEFAULT: "#515151",
        },
      },
      backgroundImage: {
        "detail-course": "url('/learning-path-detail-background.png')",
        "gradient-custom": "linear-gradient(to right, #ff3300, #ffcc00)",
        bannerEvaluate: 'url("/banner_evaluate.avif")',
        bannerLogin: 'url("/banner.evaluate3.avif")',
        bannerHome: 'url("/bannerelearning.webp")',
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
