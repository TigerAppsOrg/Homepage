/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "primary": "#3EE0BF",
                "on-primary": "#383838",
                "secondary": "#2B3E50",
                "on-secondary": "#FFFFFF"
            }
        }
    },
    plugins: []
};
