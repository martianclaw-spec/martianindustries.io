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
        // Regolith tones. Used only for atmosphere: drifting dust, terrain
        // contours, and the horizon wash. Never for text or interactive state.
        dust: {
          DEFAULT: "#8a6b52",
          deep: "#3d2c22",
          pale: "#c9a888",
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
      keyframes: {
        // Slow left-to-right light pass across a panel, like a sensor sweep.
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        // Gentle breathing for live status indicators.
        breathe: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        // Vertical drift for the hero telemetry readout.
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sweep: "sweep 7s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        breathe: "breathe 3.2s ease-in-out infinite",
        "rise-in": "riseIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
