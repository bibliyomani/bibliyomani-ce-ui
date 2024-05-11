/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        landing: '4fr 8fr',
      },
      screens: {
        ...defaultTheme.screens,
        xs: { max: '640px' },
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};
