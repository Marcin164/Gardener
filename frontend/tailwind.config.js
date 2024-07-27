/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        badge: "0px 2px 10px 0px rgba(66, 68, 90, 1)",
      },
    },
  },
  plugins: [],
};
