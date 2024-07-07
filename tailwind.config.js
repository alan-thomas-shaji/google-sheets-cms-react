/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        regular: "#14172B",
        faded: "#737BAE",
      },
    },
  },
  plugins: [],
};

