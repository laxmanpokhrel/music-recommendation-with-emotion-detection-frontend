/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryfont: ["product-sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  prefix: "naxatw-",
};
