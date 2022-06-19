/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      minHeight: {
        '2/3': '67%',
      },
      maxWidth: {
        '9/10': '90%',
      },
    },
  },
  plugins: [],
}
