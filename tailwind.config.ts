module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                dosis: ['Dosis', 'sans-serif']
            }
        }
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
