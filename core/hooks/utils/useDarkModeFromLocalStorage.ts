import { useEffect, useState } from 'react';
import localStorageUtils from '../../utils/localStorage';

const DARK_MODE_CONFIG: Record<string, boolean> = {
  dark: true,
  normal: false,
};
const DEFAULT_DARK_MODE = false;
export const useDarkModeFromLocalStorage = () => {
  const [isDarkMode, setDarkMode] = useState(DEFAULT_DARK_MODE);

  useEffect(() => {
    const colorMode = localStorageUtils.getLocalStorageValue('colorMode');
    const isDarkModeStored = colorMode ? DARK_MODE_CONFIG[colorMode] : DEFAULT_DARK_MODE;

    if (isDarkModeStored !== isDarkMode) {
      setDarkMode(isDarkModeStored);
    }
  }, []);

  useEffect(() => {
    localStorageUtils.setLocalStorageKey('colorMode', isDarkMode ? 'dark' : 'normal');
  }, [isDarkMode]);

  return {
    isDarkMode,
    setDarkMode,
  };
};
