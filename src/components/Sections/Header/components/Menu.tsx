import React, { useState, useEffect } from "react";

import Button from "../../../SmallComponents/Button/Button";

import { MenuProps } from "../interfaces/interfaces";

import "./styles/Menu.css";

const Menu: React.FC<MenuProps> = ({ navbarOptions, isMenuOpen, handleButtonClick }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isMenuOpen) {
      timer = setTimeout(() => {
        setShowButton(true);
      }, 270);
    } else {
      setShowButton(false);
    }

    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  return (
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="textOptions">
        {navbarOptions.map((option) =>
          option.type === "text" ? (
            <span key={option.text} onClick={option.onClick}>
              {option.text}
              <svg width="24" height="24" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M5 12.1758L19 12.1758M19 12.1758L13 6.17578M19 12.1758L13 18.1758" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
            </span>
          ) : null
        )}
      </div>
      {showButton && <Button text="Let's talk" onClick={handleButtonClick} /> }
    </div>
  );
};

export default Menu;
