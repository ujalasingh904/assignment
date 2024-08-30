/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{

      }, 
      backgroundImage: {
        'dark-background': 'linear-gradient(to right, #bf2feb96, #6D28D9)',
        'white-background': 'linear-gradient(to right, #fbb6ce, #b794f4, #9f7aea)',
        'home-background': 'linear-gradient(to right, #fce4ec, #f3e5f5, #e8eaf6)',
        'black-background': 'linear-gradient(to right, #0000 ,#0000)',
        'rocket':'linear-gradient(to bottom, #ffffff, #f0659e)'
      },
    },
  },
  plugins: [],
}