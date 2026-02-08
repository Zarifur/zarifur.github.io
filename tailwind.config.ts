/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "var(--bg-page)",
        surface: "var(--bg-surface)",
        surfaceMuted: "var(--bg-surface-muted)",

        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",

        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",

        border: "var(--border)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        accent: "var(--accent)",
      },
      backgroundColor: {
        page: "var(--bg-page)",
        surface: "var(--bg-surface)",
        surfaceMuted: "var(--bg-surface-muted)",
      },
      borderColor: {
        border: "var(--border)",
      },
    },
  },
  safelist: [
    "bg-page",
    "bg-surface",
    "bg-surfaceMuted",
    "text-primary",
    "text-secondary",
    "text-muted",
    "text-accent",
    "border-border",
  ],
  plugins: [],
};
