import { createContext } from "react";

const theme = localStorage.getItem("theme") || "light";

export const ThemeContext = createContext({
  theme: theme,
  changeTheme: () => {},
});
