/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg1': 'rgb(245,246,249)',
        'gray1': '#313140',
        'gray2': "#515164",
        'gray3': "#9c9cac",
        'secondary1': "#313140",
        'secondary2': "#515164",
        'secondary3': "#9c9cac",
      },
      fontSize: {
        'tiny': '12px',
        'base': '16px',
      },
    },
  },
  plugins: [],
}