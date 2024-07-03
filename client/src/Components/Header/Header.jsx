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
            <a href="#Homecomponent" className="nav-link" activeClassName="active-link">
          <li className="nav-item">
              Home
          </li>
            </a>
            <a href="#AboutComponent" className="nav-link" activeClassName="active-link">
          <li className="nav-item">
              About
          </li>
            </a>
            <a href="#educationComponent" className="nav-link" activeClassName="active-link">
          <li className="nav-item">
              Education
          </li>
            </a>
            <a href="#SkillsComponent" className="nav-link" activeClassName="active-link">
          <li className="nav-item">
              Skills
          </li>
            </a>
            <a href="#ProjectComponent" className="nav-link" activeClassName="active-link">
          <li className="nav-item">
              Projects
          </li>
            </a>
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
