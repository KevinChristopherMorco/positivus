/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        heightClick: "heightClick 2s ease-in-out",
      },
      keyframes: {
        heightClick: {
          "0%": { maxHeight: "20px" },
          "100%": { maxHeight: "500px" },
        },
      },
    },
  },
  plugins: [],
};
