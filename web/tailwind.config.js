const { borderRadius } = require('tailwindcss/defaulttheme.js');

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          300:'#00c407',
          500:'#029607',
        }
      },
      borderRadius:{
        md:'4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
