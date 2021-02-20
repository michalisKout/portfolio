import React, { useCallback } from "react";
import { useDarkMode } from "core/providers/DarkModeProvider";

const useToggle = () => {
  const { setDarkMode } = useDarkMode();
  const [toggle, setToggle] = React.useState(false);

  const handleClick = useCallback(() => {
    setToggle(!toggle);
    setDarkMode(!toggle);
  }, [toggle]);

  return { toggle, handleClick };
};

export default useToggle;
