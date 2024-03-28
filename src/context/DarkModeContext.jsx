import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((darkMode) => !darkMode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
