"use client";

import { useTheme } from "@/context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeSwitcher;
