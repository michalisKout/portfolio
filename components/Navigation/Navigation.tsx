import Toolbar from "./components/Toolbar";
import NavItems from "../Shared/NavItems";
import MobileMenuButton from "./components/MobileMenuButton";
import PrimaryLink from "../Shared/PrimaryLink";

const Navigation = () => (
  <nav className="nav">
    <div className="nav--container">
      <div className="nav--right">
        <PrimaryLink />
      </div>
      <MobileMenuButton />
      <div className="nav--left">
        <NavItems />
        <Toolbar />
      </div>
    </div>
  </nav>
);

export default Navigation;
