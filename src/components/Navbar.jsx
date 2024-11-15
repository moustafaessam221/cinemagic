import React, { useState } from "react";
import logo2 from "../assets/logo.svg";
import "./NavFooter.css";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo2} alt="logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`links ${isMenuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/myMovies">My Movies</a>
        <a href="/support">Support</a>
        <a href="/subscriptions">Subscriptions</a>
      </div>
      <div className="icons">
        <CiSearch />
        <FaBell />
      </div>
    </div>
  );
}

export default Navbar;
