
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import logo2 from "../assets/logo.svg";
import "./NavFooter.css";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaBell, FaBars, FaSearch } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

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
        <HiBars3 />
      </button>
      <div className="rightLinks">
        <div className={`links ${isMenuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/movies">Movies</a>
          <a href="/watchlist">Watchlist</a>
          <a href="/subscriptions">Subscriptions</a>
        </div>
        <div className="icons">
          <CiSearch />
          <CiBellOn />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
