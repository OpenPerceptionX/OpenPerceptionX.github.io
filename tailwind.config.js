/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                  "o-blue": "#00a0e8",
                  "o-light-blue": "#53c2f0",
                  "o-dark-blue": "#0c318f",
                  "o-white": "#e9e9e9",
                  "o-black": "#212121",
            }
        },
    },
    plugins: [
    ],
}
