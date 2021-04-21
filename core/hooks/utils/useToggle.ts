import React, { useCallback, useEffect } from 'react';
import localStorageUtils from '../../utils/localStorage';

const useToggle = (externalHandler?: (toggle: boolean) => void, initStatus = false) => {
  const [isToggled, setToggle] = React.useState(initStatus);

  useEffect(() => {
    const colorMode = localStorageUtils.getLocalStorageValue('colorMode');
    setToggle(colorMode === 'dark');
  }, []);

  const toggleHandler = useCallback(() => {
    setToggle(!isToggled);
    if (externalHandler) {
      externalHandler(!isToggled);
    }
  }, [isToggled]);

  return { isToggled, toggleHandler };
};

export default useToggle;
