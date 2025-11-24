import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Skill category gradient colors
    "from-blue-500",
    "to-cyan-500",
    "from-green-500",
    "to-emerald-500",
    "from-purple-500",
    "to-pink-500",
    "from-orange-500",
    "to-red-500",
    "from-yellow-500",
    "to-amber-500",
    // Skill badge colors
    "text-blue-500",
    "border-blue-500/30",
    "bg-blue-500/10",
    "hover:bg-blue-500/20",
    "text-green-500",
    "border-green-500/30",
    "bg-green-500/10",
    "hover:bg-green-500/20",
    "text-purple-500",
    "border-purple-500/30",
    "bg-purple-500/10",
    "hover:bg-purple-500/20",
    "text-orange-500",
    "border-orange-500/30",
    "bg-orange-500/10",
    "hover:bg-orange-500/20",
    "text-yellow-500",
    "border-yellow-500/30",
    "bg-yellow-500/10",
    "hover:bg-yellow-500/20",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

export default config
