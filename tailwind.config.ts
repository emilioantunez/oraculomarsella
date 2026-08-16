import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#090713",
        ink: "#130f24",
        violet: "#4b1d79",
        amethyst: "#8c4fd8",
        gold: "#d7b56d",
        ember: "#e46f44",
        sea: "#58a6a6",
        bone: "#f5ead6"
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(215, 181, 109, 0.18)"
      },
      keyframes: {
        reveal: {
          "0%": { transform: "rotateY(90deg) translateY(8px)", opacity: "0" },
          "100%": { transform: "rotateY(0deg) translateY(0)", opacity: "1" }
        },
        shuffle: {
          "0%, 100%": { transform: "translateX(0) rotate(0)" },
          "30%": { transform: "translateX(0) rotate(-2deg)" },
          "70%": { transform: "translateX(0) rotate(2deg)" }
        }
      },
      animation: {
        reveal: "reveal 520ms ease both",
        shuffle: "shuffle 900ms ease-in-out infinite"
      }
    },
  },
  plugins: [],
} satisfies Config;
