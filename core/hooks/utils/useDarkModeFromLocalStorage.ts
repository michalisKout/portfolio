import { useEffect, useState } from 'react';
import localStorageUtils from '../../utils/localStorage';

const DARK_MODE_CONFIG = {
  dark: true,
  normal: false,
};

export const useDarkModeFromLocalStorage = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const colorMode = localStorageUtils.getLocalStorageValue('colorMode');
    const isDarkModeStored = DARK_MODE_CONFIG[colorMode];

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
