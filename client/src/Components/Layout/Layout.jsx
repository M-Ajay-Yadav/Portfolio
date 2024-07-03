import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Education from "../../Pages/Education/Education";

import Skills from "../../Pages/Skills/Skills";
import Projects from "../../Pages/Projects/Projects";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { MdFormatColorFill } from "react-icons/md";
import ContactUs from "../../Pages/ContactUs/ContactUs";


const Layout = ({ theme, toggleBackground,setTheme }) => {
  return (
    <div className="Layout-section">
      
      <div className="components">
        <Header theme={theme} setTheme={setTheme} toggleBackground={toggleBackground}/>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ContactUs  />
        <Footer  />
      </div>

      
    </div>
  );
};

export default Layout;
