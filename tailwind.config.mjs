/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                // Warm Organic Palette
                "cream": "#FDF8F3",
                "warm-white": "#FFFCF9",
                "peach": "#FFEEE4",
                "peach-dark": "#FFD9C7",
                "coral": "#FF8B7B",
                "coral-dark": "#E86F5D",
                "sage": "#9BB89B",
                "sage-dark": "#7A9A7A",
                "lavender": "#C4B5E0",
                "warm-blue": "#7EB5D6",
                "charcoal": "#2D2D2D",
                "warm-gray": "#6B6560",
                "muted": "#A8A29E",

                // Legacy support
                "tigerapps-orange": "#F59100"
            },
            boxShadow: {
                "soft": "0 4px 20px rgba(45, 45, 45, 0.06)",
                "soft-lg": "0 8px 30px rgba(45, 45, 45, 0.1)",
                "soft-hover": "0 12px 40px rgba(45, 45, 45, 0.12)",
                "warm": "0 4px 20px rgba(255, 139, 123, 0.15)",
                "warm-lg": "0 8px 30px rgba(255, 139, 123, 0.2)"
            },
            borderRadius: {
                "organic": "1.5rem",
                "organic-lg": "2rem"
            },
            fontFamily: {
                display: ["Fraunces", "Georgia", "serif"],
                body: ["Plus Jakarta Sans", "system-ui", "sans-serif"]
            }
        }
    },
    plugins: []
};
