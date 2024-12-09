/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose50: "hsl(20, 50%, 98%)",
        rose100: "hsl(13, 31%, 94%)",
        rose300: "hsl(14, 25%, 72%)",
        rose400: "hsl(7, 20%, 60%)",
        rose500: "hsl(12, 20%, 44%)",
        rose900: "hsl(14, 65%, 9%)",
      },
      fontFamily: {
        redHatText: ['"Red Hat Text"', 'sans-serif'],
      },
      screens: {
        'sm': '450px',
        'md': '600px', 
        '2md': '700px', 
        'lg': '1024px',
        'xl': '1280px', 
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}

