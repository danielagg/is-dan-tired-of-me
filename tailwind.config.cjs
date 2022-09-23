/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-bottom": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(0)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(3deg)" },
          "20%": { transform: "rotate(-2deg)" },
          "30%": { transform: "rotate(3deg)" },
          "40%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "slide-in-bottom": "slide-in-bottom 0.2s forwards",
        "slide-in-top": "slide-in-top 0.2s forwards",
        "waving-hand": "wave 2s linear infinite",
        gradient: "gradient 7s ease infinite",
      },
    },
  },
  plugins: [],
};
