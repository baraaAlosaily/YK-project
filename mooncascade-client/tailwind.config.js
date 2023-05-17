/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors:{
          primary_sky_blue: '#0bd5cf',
          primary_sky_blue_hover: '#04a098',
          primary_gray:"#1F5757",
          secondary_gray:"#808080",
          final_gray:"#545759",
          basic_white:"#FFFFFF",
          primary_white:"#F5F5F5",
          secondary_white:"#F5F5F7",
          primary_black:"#1F5757",
        },
        fontFamily:{
          primary_font: ['Public Sans', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
