import React, { FC } from 'react';
import useToggle from 'core/hooks/utils/useToggle';
import SwitchUI from 'react-switch';
import Icons from '../assets';

interface Props {
  onToggle?: (isToggled: boolean) => void;
}

const Switch: FC<Props> = ({ onToggle }) => {
  const { isToggled, toggleHandler } = useToggle(onToggle);

  return (
    <div className="switch" data-testid="switch-button">
      <SwitchUI
        onColor={'#fbffca'}
        offColor={'#1f2937'}
        checked={isToggled}
        checkedIcon={<Icons.Moon />}
        uncheckedIcon={<Icons.Sun />}
        onChange={toggleHandler}
      />
    </div>
  );
};

export default Switch;
