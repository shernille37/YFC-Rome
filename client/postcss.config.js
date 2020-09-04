const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
  theme: {
    fontFamily: {
      exo: ['"Exo 2"'],
    },
  },
};
