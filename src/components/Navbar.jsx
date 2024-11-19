import React, { useRef, useState } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import logo2 from "../assets/logo.svg";
import "./NavFooter.css";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (searchRef.current) {
      searchRef.current.focus();
    }
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
          <CiSearch onClick={toggleSearch} />
          <CiBellOn />
        </div>
      </div>
      {isSearchOpen && (
        <div className={`search-container ${isSearchOpen ? "open" : ""}`}>
          <SearchBar ref={searchRef} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
