import React from "react";
import { useState } from "react";

const Header = () => {
  const [onTap, setOntap] = useState(false);

  function buttonPressed() {
    setOntap((prev) => !prev);
  }

  return (
    <div className="hero">
      <nav className="nav">
        <img src="/logo.svg" alt="website logo" />
        <ul className="links">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>
            <button className="link-btn">Contact</button>
          </li>
        </ul>

        <div className="hamburger">
          <img src="/icon-hamburger.svg" alt="hamburger icon" onClick={buttonPressed} />
          {onTap && (
            <ul className="hamburger-links">
              <div className="triangle"></div>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>
                <button className="hamburger-btn">Contact</button>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="copy">
        <h1> We are creatives</h1>
        <img src="/icon-arrow-down.svg" alt="arrow down icon" />
      </div>
    </div>
  );
};

export default Header;
