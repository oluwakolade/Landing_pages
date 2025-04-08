import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
<div className={`landing ${!isOpen ? "container-center" : ""}`}>
{!isOpen ? (
        // desktop menu
        <nav className="nav">
          <img src="/logo-bookmark.svg" alt="bookmark logo" />

          <div className="mobile-nav" onClick={toggleMenu}>
            <img src="/icon-hamburger.svg" alt="hamburger icon" className="cursor-pointer" />
          </div>

          <ul className="nav-links">
            <li>
              <a href="/">FEATURES</a>
            </li>
            <li>
              <a href="/about">PRICING</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
            <li>
              <button className="btn-red">LOGIN</button>
            </li>
          </ul>
        </nav>
      ) : (

        // mobile menu
        <nav className="mobile-menu">
          <div className="mobile-menu-img">
            <img src="/logo-bookmark-white.svg" alt="bookmark logo" />

            <img
              src="/icon-close.svg"
              alt="close icon"
              className="h-4 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <ul className="mobile-menu-links">
            <li>
              <a href="/">FEATURES</a>
            </li>
            <li>
              <a href="/about">PRICING</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <button className="mobile-menu-btn">LOGIN</button>

          <div className="mobile-menu-icons">
            <img src="/icon-facebook.svg" alt="Facebook" />
            <img src="/icon-twitter.svg" alt="Twitter" />
          </div>
        </nav>
      )}

      <section className="hero">
        <div className="hero-left">
          <h1>A Simple Bookmark Manager </h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero-btn-div">
            <button className="btn"> Get it on Chrome</button>
            <button className="btn-white"> Get it on Firefox</button>
          </div>
        </div>
        <div className="hero-right">
          <img src="illustration-hero.svg" alt="tab illustration" />
          <div className="blue-bg"></div>
        </div>
      </section>
    </div>
  );
};

export default Header;
