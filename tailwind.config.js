/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray1': '#313140',
        'gray2': "#515164",
        'gray3': "#9c9cac",
        'secondary1': "#313140",
        'secondary2': "#515164",
        'secondary3': "#9c9cac",
      },
      fontSize: {
        'tiny': '12px',
      },
    },
  },
  plugins: [],
}