import React, { useRef, useState } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import logo2 from "../assets/logo.svg";
import "./NavFooter.css";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

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
// get the url path
  const linkPath = useLocation().pathname;

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
          <Link to="/" className={linkPath === "/" ? "active" : ""}>Home</Link>
          <Link to="/movies" className={linkPath === "/movies" ? "active" : ""}>Movies</Link>
          <Link to="/movies" className={linkPath === "/subscriptions" ? "active" : ""}>Subscriptions</Link>
        </div>
        <div className="icons">
          <CiSearch onClick={toggleSearch} />
          <CiBellOn />
        </div>
      </div>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isSearchOpen ? 1 : 0, y: isSearchOpen ? 0 : -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`search-container ${isSearchOpen ? "open" : ""}`}
        >
          <SearchBar ref={searchRef} />
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
