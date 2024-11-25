import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTelegramPlane, FaChevronRight } from 'react-icons/fa';
import'./Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className='up'>
          <a href="#about">About CineMagic <FaChevronRight /></a>
          <a href="#help">Help <FaChevronRight /></a>
          <a href="#contact">Contact Us <FaChevronRight /></a>
          <a href="#pro">CineMagic Pro <FaChevronRight /></a>
          <a href="#advertising">Advertising <FaChevronRight /></a>
        </div>
        <div className="down">
          <a href="#developer">CineMagic Developer <FaChevronRight /></a>
          <a href="#jobs">Jobs <FaChevronRight /></a>
          <a href="#privacy">Privacy Policy <FaChevronRight /></a>
        </div>
      </div>
      <div className="footer-social-icons">
        <a href="#facebook"><FaFacebookF /></a>
        <a href="#instagram"><FaInstagram /></a>
        <a href="#linkedin"><FaLinkedinIn /></a>
        <a href="#youtube"><FaYoutube /></a>
        <a href="#telegram"><FaTelegramPlane /></a>
      </div>
      <div className="footer-bottom">
        <p>©2024 CineMagic, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;