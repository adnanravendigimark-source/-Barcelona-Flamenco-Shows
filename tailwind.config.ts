import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: "#263D2A",
          50: "#f3f6f3",
          100: "#e4ece4",
          600: "#2d4932",
          700: "#263D2A",
          800: "#1e3021",
          900: "#17251a",
        },
        terracotta: {
          DEFAULT: "#C8643F",
          50: "#fdf6f3",
          100: "#faeae3",
          500: "#C8643F",
          600: "#b5532f",
          700: "#964123",
        },
        ivory: {
          DEFAULT: "#F8F3E9",
          50: "#fdfbf7",
          100: "#F8F3E9",
          200: "#f0e6d4",
        },
        gold: {
          DEFAULT: "#C79A52",
          300: "#e0be82",
          400: "#d3ab67",
          500: "#C79A52",
          600: "#b0843b",
        },
        sandstone: {
          DEFAULT: "#E5D6BE",
          100: "#f4eee3",
          200: "#E5D6BE",
          300: "#d4c1a3",
        },
        sage: {
          DEFAULT: "#DDE4D8",
          100: "#f0f4ee",
          200: "#DDE4D8",
          300: "#c4cfbd",
        },
        charcoal: {
          DEFAULT: "#29302A",
          500: "#3d473e",
          800: "#29302A",
          900: "#1d221e",
        },
        flamenco: {
          red: "rgb(var(--color-canal-primary) / <alpha-value>)",
          gold: "rgb(var(--color-canal-blue) / <alpha-value>)",
          rose: "rgb(var(--color-gold-400) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          crimson: "#C8643F",
          amber: "#C79A52",
          ruby: "#C8643F",
          charcoal: "#29302A",
          wine: "#263D2A",
          garnet: "#263D2A",
        },
        canal: {
          blue: "rgb(var(--color-canal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-canal-primary) / <alpha-value>)",
          orange: "rgb(var(--color-canal-primary) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          navy: "#29302A",
          azure: "#C79A52",
          royal: "#263D2A",
          sapphire: "#C8643F",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-serif)", "var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 15% 25%, rgba(38,61,42,0.15) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(200,100,63,0.15) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(248,243,233,0.85) 0, transparent 50%)",
        "flamenco-gradient":
          "linear-gradient(135deg, #263D2A 0%, #2d4932 50%, #C8643F 100%)",
        "flamenco-hover":
          "linear-gradient(135deg, #1e3021 0%, #263D2A 50%, #b5532f 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C79A52 0%, #e0be82 50%, #b0843b 100%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(38, 61, 42, 0.30)",
        "red-glow": "0 0 35px -5px rgba(200, 100, 63, 0.35)",
        "gold-glow": "0 0 35px -5px rgba(199, 154, 82, 0.35)",
        "btn-glow": "0 10px 25px -5px rgba(38, 61, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

