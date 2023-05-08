/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryfont: ["product-sans", "sans-serif"],
      },
      colors:{
        primarycolor:"blue",
      }
    },
  },
  plugins: [],
  prefix: "naxatw-",
};
