import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileMenuButton = () => {
  return (
    <div className="flex md:hidden">
      <button
        type="button"
        className="nav-burger-mobile"
        aria-label="toggle menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default MobileMenuButton;
