/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["Hermeneus One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
