import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Skills.css";

// const Skills = ({ skills, loading, error }) => {
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

const Skills = () => {

  const skills = [
    // Web Development 
    {
      category:"Frontend",skills:"HTML, CSS, JavaScript, React.js, Bootstrap"
    },
    {
      category:"Backend",skills:"Node.js, Express.js"
    },
    {
      category:"Database",skills:"MongoDB, MySQL"
    },
    {
      category:"Programming Languages",skills:" Python, Java"
    },

    // Data Analyst 
    {
      category:"Data Analysis", skills:"Excel,Power BI , Numpy, Pandas "
    },
    {
      category:"Data Visualization",skills:"Matplotlib, Seaborn, Power BI"
    },
    {
      category:"Data Handling",
      skills:"Data Cleaning, Data Transformation,ETL"
    },
    {
      category:"Statistics",
      skills:"Descriptive Statistics, Inferential Statistics, Hypothesis Testing"
    },


    {
      category:"Tools",skills:"Git, GitHub, Visual Studio Code"
    },
    {
      category:"Other",
      skills:"Power BI , MS Office"
    }
  ]

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
