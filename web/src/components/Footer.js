"use strict";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>Made with ♥️ by Luis Arias</span>
      <span className="footer-sep">·</span>
      <span>© {year} All rights reserved</span>
    </footer>
  );
};
