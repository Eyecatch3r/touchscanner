/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darkCard': '#1d1d1d',
      'darkTextSecondary': '#c5c5c5',
      'whiteCard': '#EBEBEB',
      'whiteTextSecondary': '#7a7a7a'
    }
  },
  plugins: [],
}
