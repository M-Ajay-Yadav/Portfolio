import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Skills.css";

const Skills = ({ skills, loading, error }) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="skills-container" id="SkillsComponent">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {/* {skill.category}: */}
            {skill.skills}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
