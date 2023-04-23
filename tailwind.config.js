/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    extend: {
      screens: {'mobile': '320px'},
    },
  },
  variants: {},
  plugins: []
}