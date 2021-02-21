import Switch from "../../Shared/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "core/providers/DarkModeProvider";

const Toolbar = () => {
  const { setDarkMode } = useDarkMode();
  return (
    <div className="toolbar">
      <div className="relative">
        <span className="search--container">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input type="text" className="search--input" placeholder="Search" />
      </div>
      <Switch onToggle={setDarkMode} />
    </div>
  );
};

export default Toolbar;
