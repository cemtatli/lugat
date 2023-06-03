/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            50: "#f0f7ff",
            100: "#e0eefe",
            200: "#bbdefc",
            300: "#7fc3fa",
            400: "#3ba6f5",
            500: "#1083da",
            600: "#056cc4",
            700: "#05559f",
            800: "#094983",
            900: "#0d3e6d",
            950: "#092748"
          }
        }
      },
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
