import { useState, createContext, useContext, useEffect, ReactNode } from "react";

type ThemeType = "light" | "dark";

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeType>("light");

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};