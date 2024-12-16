/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",
        blue: "hsl(248, 32%, 49%)",
        dark: "hsl(249, 10%, 26%)",
        grayish: "hsl(246, 25%, 77%)"
      },
      screens: {
        'sm': '450px',
        'md': '700px', 
        'lg': '1000px',
        'xl': '1280px', 
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}

