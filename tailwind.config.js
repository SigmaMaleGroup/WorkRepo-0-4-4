/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        proto: ['Proto Grotesk', 'sans-serif'],
        suisse: ['SuisseIntl-Regular', 'sans-serif']
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      boxShadow: {
        'mp': '0px 12px 16px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
}

