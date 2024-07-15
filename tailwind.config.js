/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue-glow': '0 0 200px 75px rgba(130, 199, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
