import React from "react";
import useToggle from "core/hooks/utils/useToggle";

const Switch = () => {
  const { toggle, handleClick } = useToggle();
  return (
    <div className="switch" onClick={handleClick}>
      <input type="checkbox" checked={toggle} readOnly />
      <span className="slider" />
    </div>
  );
};

export default Switch;
