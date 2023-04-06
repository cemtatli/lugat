import React, { useState, useEffect, createContext } from "react";

const LIGHT_THEME_CLASS = "light";
const DARK_THEME_CLASS = "dark";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
  }
  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(initialTheme || getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? LIGHT_THEME_CLASS : DARK_THEME_CLASS);
    root.classList.add(theme === "light" ? LIGHT_THEME_CLASS : DARK_THEME_CLASS);
    localStorage.setItem("color-theme", theme);
    window.dispatchEvent(new Event("color-theme-changed"));
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
