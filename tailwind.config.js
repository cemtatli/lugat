/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        18: "4.5rem"
      },
      screens: {
        xs: "425px",
        xxs: "325px"
      },
      width: {
        50: "200px"
      }
    }
  },
  plugins: []
};
