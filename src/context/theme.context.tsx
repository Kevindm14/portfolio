import { createContext, useContext, useState } from 'react';
import { IThemeProviderProps } from '../utils/interfaces/IThemeProviderProps';

// Define the initial state of the theme
const initialTheme = {
  darkMode: false,
  toggleDarkMode: () => {},
};

// Create the context
const ThemeContext = createContext(initialTheme);

// Create the provider component
export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle the dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Provide the state and functions to the children components
  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeProvider must be used within a ThemeProvider');
  }

  return context;
};
