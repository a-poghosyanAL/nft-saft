require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
}