/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        screens: {
            'tablet': '1280px',
            // => @media (min-width: 640px) { ... }
    
            'laptop': '1280px',
            // => @media (min-width: 1024px) { ... }
    
            // 'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            spacing: {
                "128": "32rem",
                "high": "50rem",
                "widequater": "14rem",
                "wide": "60rem",
                "wider": "73rem",
                "landing": "88rem",
            },
            colors: {
                "o-blue": "#00a0e8",
                "o-light-blue": "#53c2f0",
                "o-dark-blue": "#0c318f",
                "o-white": "#e9e9e9",
                "o-black": "#212121",
                "o-gray": '#9ca3af',
                "o-hover": '#f9fafb',
                //
                "demo-c1": '#00a0e8',
                "demo-c2": '#d847f0',
                //
                "drama-white": "ffffff",
                "drama-black": "0d0d0d",
            },
            // fontFamily: {
            //     sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
            // },
        },
    },
    plugins: [
    ],
}
