import React, { useState } from "react";
import { GiScorpion } from "react-icons/gi";
import { IconContext } from "react-icons";
import { MdFormatColorFill, MdMenu } from "react-icons/md";
import { GiEvilMoon } from "react-icons/gi";


import "./Header.css";

const Header = ({ theme, setTheme,toggleBackground }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleBackground = () => {
  //   setTheme(!theme);
  //   console.log("hello color changed");
  // };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="menu-icon" onClick={toggleMenu}>
          <IconContext.Provider value={{ color: "black", className: "menu-icon", size: 40 }}>
            <MdMenu />
          </IconContext.Provider>
        </div>
        <ul className={`nav-list ${menuOpen ? "nav-list-open" : ""}`}>
          <li className="nav-item">
            <a href="#Homecomponent" className="nav-link" activeClassName="active-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#AboutComponent" className="nav-link" activeClassName="active-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#educationComponent" className="nav-link" activeClassName="active-link">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#SkillsComponent" className="nav-link" activeClassName="active-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#ProjectComponent" className="nav-link" activeClassName="active-link">
              Projects
            </a>
          </li>
        </ul>
        <div className="iconbox" onClick={toggleBackground}>
          <IconContext.Provider value={{ color: "red", className: "logo-icon", size: 50 }}>
            {/* <MdFormatColorFill /> */}
            <GiEvilMoon />

          </IconContext.Provider>
        </div>
      </nav>
    </header>
  );
};

export default Header;
