import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F0",
        ink: "#1B1812",
        "ink-soft": "#5B554A",
        dusk: "#131019",
        bone: "#F3EFE6",
        "bone-soft": "#A79F8F",
        accent: {
          DEFAULT: "#5B4B95",
          soft: "#8574B8",
          dark: "#8F7FCB",
        },
        amber: {
          DEFAULT: "#C98A3E",
          soft: "#E0A458",
          dark: "#E7B876",
        },
        line: {
          DEFAULT: "rgba(27, 24, 18, 0.12)",
          dark: "rgba(243, 239, 230, 0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.25rem, 5.5vw + 1rem, 4.75rem)",
        "fluid-h2": "clamp(1.75rem, 3vw + 1rem, 2.75rem)",
        "fluid-h3": "clamp(1.25rem, 1.5vw + 1rem, 1.75rem)",
        "fluid-body": "clamp(1rem, 0.4vw + 0.9rem, 1.125rem)",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
