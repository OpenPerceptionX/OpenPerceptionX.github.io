/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
    
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
    
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            colors: {
                "o-blue": "#00a0e8",
                "o-light-blue": "#53c2f0",
                "o-dark-blue": "#0c318f",
                "o-white": "#e9e9e9",
                "o-black": "#212121",
            },
            // fontFamily: {
            //     sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
            // },
        },
    },
    plugins: [
    ],
}
