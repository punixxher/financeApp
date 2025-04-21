/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00D084',
                    light: '#00D084', // lighter variation
                    dark: '#00A56B',  // darker variation
                },
                dark: "#1A1A1A",
                light: "#F7F7F7",
                indigo: {
                    600: '#b4ffe8',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },

    plugins: [],
}
