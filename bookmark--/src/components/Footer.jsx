import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img src="/logo-bookmark-white.svg" alt="bookmark logo" />
      <ul className="footer-links">
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

      <div className="footer-icons">
        <img src="/icon-facebook.svg" alt="facebook icon" />
        <img src="/icon-twitter.svg" alt="twitter icon" />
      </div>
    </div>
  );
};

export default Footer;
