/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        john: "url('./src/components/images/Poster.png')",
      },
    },
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    keyframes: {
      show: {
        from: { transform: "translateY(-10px)" },
        to: { transform: "translateY(0px)" },
      },
    },
    animation: {
      show: "show .3s ease",
    },
    screens: {
      small: "718px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
