import Switch from '../../Shared/Switch';
import { useDarkMode } from 'core/providers/DarkModeProvider';

const Toolbar = () => {
  const { setDarkMode } = useDarkMode();
  return (
    <div className="toolbar">
      <Switch onToggle={setDarkMode} />
    </div>
  );
};

export default Toolbar;
