import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">M Ajay Yadav</h2>
        <p className="footer-description">A passionate developer dedicated to creating beautiful and functional web applications.</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/m-ajay-yadav-8b35321a7" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/M-Ajay-Yadav?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://x.com/majay805" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
        </div>
        <div className="footer-contact">
          <p>Email: <a href="mailto:mangalarapuajayyadav@gmail.com">ajay@gmail.com</a></p>
          <p>Phone: <a href="tel:+919573069748">+91 9572306497468</a></p>
        </div>
        <p className="footer-credit">&copy; 2024 M Ajay Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
