import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          900: "#18181b",
        },
        gold: {
          400: "rgb(var(--color-gold-400) / <alpha-value>)",
          500: "#f59e0b",
          600: "#d97706",
        },
        flamenco: {
          red: "rgb(var(--color-canal-primary) / <alpha-value>)",
          gold: "rgb(var(--color-canal-blue) / <alpha-value>)",
          rose: "rgb(var(--color-gold-400) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          crimson: "#dc2626",
          amber: "#f59e0b",
          ruby: "#e11d48",
          charcoal: "#18181b",
          wine: "#881337",
        },
        // Mapping canal.* to flamenco brand CSS variables for runtime admin color customization
        canal: {
          blue: "rgb(var(--color-canal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-canal-primary) / <alpha-value>)",
          orange: "rgb(var(--color-canal-primary) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          navy: "#18181b",
          azure: "#f59e0b",
          royal: "#dc2626",
          sapphire: "#b91c1c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "Georgia", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 15% 25%, rgba(220,38,38,0.30) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(245,158,11,0.28) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(24,24,27,0.50) 0, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(220, 38, 38, 0.35)",
        "red-glow": "0 0 35px -5px rgba(220, 38, 38, 0.40)",
        "gold-glow": "0 0 35px -5px rgba(245, 158, 11, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
