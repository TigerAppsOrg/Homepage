/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "primary": "#3EE0BF",
                "primary-hover": "#4BD9B0",
                "on-primary": "#383838",
                "secondary": "#2B3E50",
                "secondary-hover": "#34495E",
                "on-secondary": "#FFFFFF",
                "tigerapps-orange": "#F59100"
            }
        }
    },
    plugins: []
};
