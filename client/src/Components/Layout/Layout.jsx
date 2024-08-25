import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Education from "../../Pages/Education/Education";

import Skills from "../../Pages/Skills/Skills";
import Projects from "../../Pages/Projects/Projects";

// import { FaLinkedin } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";
// import { MdFormatColorFill } from "react-icons/md";
import ContactUs from "../../Pages/ContactUs/ContactUs";

const Layout = ({ theme, toggleBackground, setTheme }) => {
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get("http://localhost:5000/education");
        console.log(response);
        setEducation(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        console.log("response from project", response);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5000/skills");
        console.log("response", response);
        setSkills(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);
  return (
    <div className="Layout-section">
      <div className="components">
        <Header
          theme={theme}
          setTheme={setTheme}
          toggleBackground={toggleBackground}
        />
        <Home />
        <About />
        <Education education={education} loading={loading} error={error} />
        <Skills skills={skills} loading={loading} error={error} />
        <Projects projects={projects} loading={loading} error={error} />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
