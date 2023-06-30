/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        3: "12px",
        "dot5": "px"
      },
      screens: {
        lg: "992px",
      },
      colors: {
        bg1: "rgb(245,246,249)",
        bgInfo: "#E6F7F8",
        gray1: "#313140",
        gray2: "#515164",
        gray3: "#9c9cac",
        gray5: "#e5e8ed",
        gray6: "rgb(245,246,249)",
        secondary1: "#313140",
        secondary2: "#515164",
        secondary3: "#9c9cac",
        warning: "#ffc400",
        info: '#00b3bd',
        success: 'rgb(13,226,152)',
        link: '#59779a',
        red1: '#d3382f',
        red2: '#ff4438',
      },
      fontSize: {
        tiny: "12px",
        base: "16px",
      },
      fontWeight: {
        link: 500
      },
      zIndex: {
        100: 100
      },
      borderColor: {
        gray3: "#9c9cac",
      },
      width: {
        50: '200px'
      }
    },
  },
  plugins: [],
};
