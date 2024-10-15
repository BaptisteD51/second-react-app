/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./src/index.css",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors:{
                'custom-color':'#dd26eb' // adds a new color to the palette
            },
        },
        
    },
    plugins: [],
}

