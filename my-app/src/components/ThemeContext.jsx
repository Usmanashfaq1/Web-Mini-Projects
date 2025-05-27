import React, { createContext, useState, useContext } from 'react';

// Step 1: Create the context object
const ThemeContext = createContext();

// Step 2: Create the Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3 (optional): Create a custom hook for cleaner access
export function useTheme() {
  return useContext(ThemeContext);
}
