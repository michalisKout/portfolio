import { createContext, FC, useContext } from 'react';
import { DarkModeContextType } from 'core/providers/types';
import { useDarkModeFromLocalStorage } from '../hooks/utils/useDarkModeFromLocalStorage';

const DEFAULT_CONTEXT = { isDarkMode: false, setDarkMode: () => void 0 };

const DarkModeContext = createContext<DarkModeContextType>(DEFAULT_CONTEXT);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('Please wrap your components with DarkMode Provider.');
  }

  return context;
};

const DarkModeProvider: FC = ({ children }) => {
  const darkMode = useDarkModeFromLocalStorage();

  return <DarkModeContext.Provider value={darkMode}>{children}</DarkModeContext.Provider>;
};

export default DarkModeProvider;
