import React, {createContext, useState, useContext} from 'react';

import {lightTheme, darkTheme} from '../utils/theme/theme';
import {Theme} from '../Models/Theme';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
///very simple to use just import useTheme in file and just add blow line from theme colors can be accessed and from toggle we can switch mode
// const {theme,toggleTheme}=useTheme()
