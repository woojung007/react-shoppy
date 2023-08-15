/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'hotpink',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.png')`,
      },
    },
  },
  plugins: [],
};
