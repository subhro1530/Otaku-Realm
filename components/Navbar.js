import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHistory = () => {
    setHistoryOpen(!historyOpen);

    // Retrieve search history from local storage
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  };

  const handleSearch = (term) => {
    // Store search term in local storage
    const updatedHistory = [...searchHistory, term];
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
  };

    useEffect(() => {
      const storedHistory = localStorage.getItem("searchHistory");
      if (storedHistory) {
        setSearchHistory(JSON.parse(storedHistory));
      }
    }, []);


  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fa-solid fa-bars ${menuOpen ? "open" : ""}`}></i>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="/"
            passHref
            className={`nav-link ${router.pathname === "/" ? "active" : ""}`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            passHref
            className={`nav-link ${
              router.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </a>
        </li>
        <li>
          <button className="history-button" onClick={toggleHistory}>
            History
          </button>
        </li>
      </ul>
      {/* History Sidebar */}
      <div className={`history-sidebar ${historyOpen ? "open" : ""}`}>
        <div className="history-sidebar-content">
          <h2>Search History</h2>
          <ul>
            {searchHistory.map((item, index) => (
              <li key={index}>
                <i className="fas fa-search"></i> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="history-sidebar-close" onClick={toggleHistory}>
          &#10005;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
