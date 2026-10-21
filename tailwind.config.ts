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
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        flamenco: {
          red: "rgb(var(--color-canal-primary) / <alpha-value>)",
          gold: "rgb(var(--color-canal-blue) / <alpha-value>)",
          rose: "rgb(var(--color-gold-400) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          crimson: "#c9182b",
          amber: "#f59e0b",
          ruby: "#e11d48",
          charcoal: "#121216",
          wine: "#881337",
          garnet: "#991b1b",
        },
        // Mapping canal.* to flamenco brand CSS variables for runtime admin color customization
        canal: {
          blue: "rgb(var(--color-canal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-canal-primary) / <alpha-value>)",
          orange: "rgb(var(--color-canal-primary) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          navy: "#121216",
          azure: "#f59e0b",
          royal: "#c9182b",
          sapphire: "#991b1b",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-serif)", "var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 15% 25%, rgba(201,24,43,0.35) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(245,158,11,0.25) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(18,18,22,0.65) 0, transparent 50%)",
        "flamenco-gradient":
          "linear-gradient(135deg, #c9182b 0%, #e11d48 50%, #ea580c 100%)",
        "flamenco-hover":
          "linear-gradient(135deg, #b91c1c 0%, #be123c 50%, #c2410c 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(201, 24, 43, 0.40)",
        "red-glow": "0 0 35px -5px rgba(201, 24, 43, 0.45)",
        "gold-glow": "0 0 35px -5px rgba(245, 158, 11, 0.40)",
        "btn-glow": "0 10px 25px -5px rgba(201, 24, 43, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
