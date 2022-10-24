import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  
  const themeToggler = () =>{
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeContext.Provider value={{theme,themeToggler}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);