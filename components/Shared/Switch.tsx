import React, { FC } from "react";
import useToggle from "core/hooks/utils/useToggle";

interface Props {
  onToggle?: (isToggled: boolean) => void;
}

const Switch: FC<Props> = ({ onToggle }) => {
  const { isToggled, toggleHandler } = useToggle(onToggle);

  return (
    <div className="switch" data-testid="switch-button" onClick={toggleHandler}>
      <input type="checkbox" checked={isToggled} readOnly />
      <span className="slider" />
    </div>
  );
};

export default Switch;
