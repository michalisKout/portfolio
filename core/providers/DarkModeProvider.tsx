import { createContext, FC, useContext, useState } from "react";
import { DarkModeContextType } from "core/providers/types";

const DEFAULT_CONTEXT = { isDarkMode: false, setDarkMode: () => void 0 };

const DarkModeContext = createContext<DarkModeContextType>(DEFAULT_CONTEXT);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("Please wrap your components with DarkMode Provider.");
  }

  return context;
};

const DarkModeProvider: FC = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
