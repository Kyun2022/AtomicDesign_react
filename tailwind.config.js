/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // カスタムの列設定
        'auto-fit-minmax-300': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: []
};
