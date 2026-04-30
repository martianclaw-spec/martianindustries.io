import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#08090b",
          raised: "#0d0f12",
          panel: "#11141a",
        },
        line: {
          DEFAULT: "#1c2029",
          strong: "#262b36",
        },
        ink: {
          DEFAULT: "#e6e8ee",
          muted: "#9aa1ad",
          dim: "#6b7280",
        },
        rust: {
          DEFAULT: "#c2552d",
          soft: "#d97a52",
          deep: "#8a3a1d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.03em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
    },
  },
  plugins: [],
};

export default config;
