/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'level-1': 96,
        'level-2': 64,
        'level-3': 48,
        'level-4': 36,
        'level-5': 24,
        'level-6': 18,
      },
      colors: {
        primary: '#3E3636',
        secondary: '#D72323',
        primaryLight: '#F5EDED',
        almostBlack: '#312D2D',
        almostGray: '#A8A8A8',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
