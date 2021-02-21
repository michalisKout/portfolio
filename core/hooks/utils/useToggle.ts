import React, { useCallback } from "react";

const useToggle = (
  externalHandler?: (toggle: boolean) => void,
  initStatus = false
) => {
  const [isToggled, setToggle] = React.useState(initStatus);

  const toggleHandler = useCallback(() => {
    setToggle(!isToggled);
    if (externalHandler) {
      externalHandler(!isToggled);
    }
  }, [isToggled]);

  return { isToggled, toggleHandler };
};

export default useToggle;
