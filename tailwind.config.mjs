/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                // Pixar Vibrant Rainbow Palette
                "pixar-red": "#FF6B6B",
                "pixar-orange": "#FFA94D",
                "pixar-yellow": "#FFE066",
                "pixar-green": "#51CF66",
                "pixar-blue": "#339AF0",
                "pixar-purple": "#9775FA",
                "pixar-pink": "#F783AC",

                // Base colors
                "white": "#FFFFFF",
                "light": "#F8F9FA",
                "light-mid": "#E9ECEF",
                "gray": "#868E96",
                "gray-dark": "#495057",
                "charcoal": "#212529",

                // Primary accent (fun blue)
                "primary": "#339AF0",
                "primary-dark": "#1C7ED6",

                // Legacy/compatibility
                "coral": "#FF6B6B",
                "warm-gray": "#868E96",
                "muted": "#ADB5BD"
            },
            boxShadow: {
                // Playful colored shadows
                "pop": "0 4px 14px rgba(0, 0, 0, 0.1)",
                "pop-lg": "0 8px 25px rgba(0, 0, 0, 0.12)",
                "pop-hover": "0 12px 35px rgba(0, 0, 0, 0.15)",
                // Rainbow shadow options
                "red": "0 8px 25px rgba(255, 107, 107, 0.35)",
                "orange": "0 8px 25px rgba(255, 169, 77, 0.35)",
                "yellow": "0 8px 25px rgba(255, 224, 102, 0.35)",
                "green": "0 8px 25px rgba(81, 207, 102, 0.35)",
                "blue": "0 8px 25px rgba(51, 154, 240, 0.35)",
                "purple": "0 8px 25px rgba(151, 117, 250, 0.35)",
                "pink": "0 8px 25px rgba(247, 131, 172, 0.35)"
            },
            borderRadius: {
                "fun": "1rem",
                "fun-lg": "1.5rem"
            },
            fontFamily: {
                display: ["Nunito", "system-ui", "sans-serif"],
                body: ["Nunito", "system-ui", "sans-serif"]
            },
            animation: {
                "bounce-soft": "bounce-soft 0.5s ease-out",
                "pop-in": "pop-in 0.3s ease-out"
            },
            keyframes: {
                "bounce-soft": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" }
                },
                "pop-in": {
                    "0%": { transform: "scale(0.95)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" }
                }
            }
        }
    },
    plugins: []
};
