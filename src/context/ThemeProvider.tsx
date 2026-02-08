import { useEffect, useState, useCallback } from "react";
import { ThemeContext, type Theme } from "./theme-context";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const applyTheme = useCallback((t: Theme) => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const resolved = t === "system" ? (prefersDark ? "dark" : "light") : t;

    root.setAttribute("data-theme", resolved);
  }, []);

  useEffect(() => {
    // Apply theme immediately on mount
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    applyTheme(savedTheme);
  }, [applyTheme]);

  useEffect(() => {
    applyTheme(theme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => theme === "system" && applyTheme("system");

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme, applyTheme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
