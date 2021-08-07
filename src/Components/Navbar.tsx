import React, { useState } from "react";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  const [query, setQuery] = useState("chicken");
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <div className="nav-container">
        <Link to="/" className="logo">
          <img className="img1" src={logo} alt="" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
        <li className="display-mobile">
            <SearchBar
              onChange={(event) => setQuery(event.target.value)}
              query={query}
            />
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li className="display-desktop">
            <SearchBar
              onChange={(event) => setQuery(event.target.value)}
              query={query}
            />
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// smooth={true} duration={2000}
