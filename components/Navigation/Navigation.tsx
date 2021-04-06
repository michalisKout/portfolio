import Toolbar from './components/Toolbar';
import NavItems from './components/NavItems';
import PrimaryLink from '../Shared/PrimaryLink';
import { useDarkModeClassName } from '../../core/hooks/utils/useDarkModeClassName';

const Navigation = () => {
  const darkModeClass = useDarkModeClassName();

  return (
    <div className={darkModeClass}>
      <nav className="nav">
        <div className="nav--container">
          <div className="nav--right">
            <PrimaryLink />
          </div>
          <div className="nav--left">
            <NavItems />
            <Toolbar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
