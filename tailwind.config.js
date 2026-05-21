/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A64D33', // Terracotta
        secondary: '#004D40', // Dark Teal
        accent: '#D97706', // Amber/Gold
        background: '#F9F7F2', // Cream
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
