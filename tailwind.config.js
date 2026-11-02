/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#245640",
        navy: "#172D3B",
        cream: "#F8F5ED",
        sage: "#DCE8DD",
        gold: "#D6AD59"
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        sans: ["DM Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
