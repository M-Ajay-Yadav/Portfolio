import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";

const Projects = ({ projects, loading, error }) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="projects-container" id="ProjectComponent">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
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
