import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">
      <img src="logo.png" alt="Company Logo" className="logo-image" />
      </div>
      <nav>
  <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
    <li>Product</li>
    <li>Solutions</li>
    <li>Pricing</li>
    <li>Developers</li>
  </ul>
</nav>
<div className="nav-right">
  <ul className="nav-links single-link">
    <li>FAQ</li>
  </ul>
  <button className="get-quote">Get Quote</button>
</div>
<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</div>
    </header>
  );
}

export default Header;
