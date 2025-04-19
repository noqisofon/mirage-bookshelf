/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts,md}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Zen Old Mincho', 'serif'],
                mincho: ['Zen Old Mincho', 'serif'],
                gothic: ['Noto Sans JP', 'sans-serif']
            }
        },
        colors: {
            zinc: {
                50: '#fafafa',
                100: '#f4f4f5',
                200: '#e4e4e7',
                300: '#d4d4d8',
                400: '#a1a1aa',
                500: '#71717a',
                600: '#52525b',
                700: '#3f3f46',
                800: '#27272a',
                900: '#18181b',
                950: '#09090b'
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
