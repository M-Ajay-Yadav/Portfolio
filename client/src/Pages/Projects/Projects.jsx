import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";

// const Projects = ({ projects, loading, error }) => {
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

const Projects = () => {
const projectData =[
  {
    title: "Task Manager Application",
    description:
      "Full-stack MERN app with CRUD operations, strong validation, and REST API integration for efficient data handling.",
    link: "#"
  },
  {
    title: "Product Management System",
    description:
      "Inventory system with API-based architecture, real-time updates, and data visualization concepts using Power BI.",
    link: "#"
  },
  {
    title: "MERN Shield (Auth System)",
    description:
      "Secure authentication system using JWT with role-based access control and strong validation.",
    link: "#"
  },
  {
    title: "React Calculator",
    description:
      "Logic-based calculator using React Hooks with input validation and responsive UI.",
    link: "#"
  },
  {
    title: "Data Processing & Analysis",
    description:
      "Data cleaning, transformation, and validation using Python and Excel with basic statistical analysis.",
    link: "#"
  }
];

  return (
    <div className="projects-container" id="ProjectComponent">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            <h2 className="project-name">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link "
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
