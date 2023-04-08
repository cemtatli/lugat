/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
      },
      screens: {
        xs: "425px",
        xxs: "325px",
      },
      width: {
        50: "200px",
      },
      colors: {
        heather: {
          50: "#FBFCFD",
          100: "#F7F9FB",
          200: "#EBF1F4",
          300: "#DFE8EE",
          400: "#C7D6E1",
          500: "#AFC5D4",
          600: "#9EB1BF",
          700: "#69767F",
          800: "#4F595F",
          900: "#353B40",
        },
        "moody-blue": {
          50: "#F8F8FD",
          100: "#F0F1FB",
          200: "#DADCF4",
          300: "#C4C6ED",
          400: "#979CE0",
          500: "#6B71D2",
          600: "#6066BD",
          700: "#40447E",
          800: "#30335F",
          900: "#20223F",
        },
        shark: {
          50: "#F4F4F4",
          100: "#E8E9E9",
          200: "#C6C8C8",
          300: "#A3A6A7",
          400: "#5F6464",
          500: "#1A2122",
          600: "#171E1F",
          700: "#101414",
          800: "#0C0F0F",
          900: "#080A0A",
        },
      },
    },
  },
  plugins: [],
};
