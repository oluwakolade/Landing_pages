import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img src="./logo-d.svg" alt="logo" />

      <ul className="footer-links">
        <li>About</li>
        <li> Services</li>
        <li>Projects</li>
      </ul>

      <ul className="footer-icons">
        <li><img src="/icon-facebook.svg" alt="facebook icon" /></li>
        <li> <img src="/icon-instagram.svg" alt="instagram icon" /></li>
        <li><img src="/icon-twitter.svg" alt="twitter icon" /></li>
        <li><img src="/icon-pinterest.svg" alt="pintrest icon" /></li>

      </ul>
    </div>
  );
};

export default Footer;
