/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      spaceCadet: '#171738',
      federalBlue: '#2E1760',
      zaffre: '#3423A6',
      glaucous: '#7180B9',
      honeyDew: '#DFF3E4',
      purple: '#6919FF',
      green: '#00FFA3',
      white: '#FFFFFF',
      gray: '#8C97B5',
      greenLight: '#122B39',
      neutrals: {
        900: '#060918',
        800: '#161A2C',
        700: '#23263B',
        600: '#2E364F',
        500: '#4D5775',
        400: '#6F7A9B',
        300: '#96A1C0',
        200: '#C7D0E5',
        100: '#F0F2FE',
        50: '#FFFEF9',
      },
    },
  },
  plugins: [],
}

