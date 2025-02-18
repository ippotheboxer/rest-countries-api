import { useState, createContext, useContext, useEffect, ReactNode } from "react";

// Define Theme Context Type
interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Create context with correct type (or undefined initially)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme Provider Component
export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply theme changes
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
