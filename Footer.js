import React from 'react';
import './Footer.css';

// Import your logo and social media icons
import logo from './Images/throttlersLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Throttlers. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
