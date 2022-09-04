import React from "react";
import "./Header.css";

const Header = ({ handleToggleDarkmode }) => {
  return (
    <div className="header">
      <button
        onClick={() =>
          handleToggleDarkmode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
