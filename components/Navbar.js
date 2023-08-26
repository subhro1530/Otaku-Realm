import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
            <a
              href="/"
              passHref
              className={router.pathname === "/" ? "active" : ""}
            >
              Home
            </a>
        </li>
        <li>
          <a href="/about" passHref>
            About
          </a>
        </li>
      </ul>
      <button className="history-button">History</button>
    </nav>
  );
};

export default Navbar;
