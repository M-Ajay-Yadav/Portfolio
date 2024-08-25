import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { MdFormatColorFill } from "react-icons/md";
import "./Footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className="footer-container theme">
      <div className="footer-content">
        <h2 className="footer-title">M Ajay Yadav</h2>
        <p className="footer-description">
          A passionate developer dedicated to creating beautiful and functional
          web applications.
        </p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/m-ajay-yadav-8b35321a7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link nav-item"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/M-Ajay-Yadav?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link nav-item"
          >
            <FaGithubSquare /> GitHub
          </a>
          <a
            href="https://x.com/majay805"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link nav-item"
          >
            <RiTwitterXLine />
            Twitter
          </a>
        </div>
        <div className="footer-contact">
          <p>
            Email:{" "}
            <a
              href="mailto:mangalarapuajayyadav@gmail.com"
              className="social-link"
            >
              ajayPortfolio@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+919573069748" className="social-link">
              +91 912345678
            </a>
          </p>
        </div>
        <p className="footer-credit">
          &copy; 2024 M Ajay Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
