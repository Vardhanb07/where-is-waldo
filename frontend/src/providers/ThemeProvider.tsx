import { useState } from "react";
import type { ThemeProviderPropTypes } from "../utils/types";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeProvider({ children }: ThemeProviderPropTypes) {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);
  function changeTheme() {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }
  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
}
