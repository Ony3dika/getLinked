/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#150e28",
        sub: "#903aff",
        alt: "#d434fe",
        pink: "#e223a7",
      },
    },
  },
  plugins: [],
};

