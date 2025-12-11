/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        elan: {
          black: "#0C0C0C",
          gray: "#1A1A1A",
          gold: "#C6A467",
          white: "#F8F8F8",
        }
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        xs: "475px",
      },
      boxShadow: {
        soft: "0 15px 40px -10px rgba(0,0,0,0.4)",
        glow: "0 0 30px rgba(198,164,103,0.15)",
      },
      animation: {
        "fade-in": "fadeIn 1.4s ease forwards",
        "fade-in-delay": "fadeIn 2s ease forwards",
        "fade-in-delay-2": "fadeIn 2.6s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        }
      },
    },
  },
  plugins: [],
};
