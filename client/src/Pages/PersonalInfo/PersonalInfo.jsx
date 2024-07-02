import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './PersonalInfo.css'; // Import the CSS file

const PersonalInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(0); // State for active section
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/personalInfo');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle scroll event to change active section
  const handleScroll = () => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll('.section');
      let minDistance = Infinity;
      let minIndex = activeSection;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.getBoundingClientRect().top - window.innerHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = index;
        }
      });

      setActiveSection(minIndex);
    }
  };

  // Attach event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Only add/remove listener on mount/unmount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const age = new Date().getFullYear() - new Date(data.dateOfBirth).getFullYear();

  // Define sections data
  const sections = [
    { title: 'Personal Information', content: (
      <div>
        <h1 className="name">{data.name}</h1>
        <p className="info">Age: {age}</p>
        <p className="info">Email: {data.email}</p>
        <p className="info">Phone: {data.phone}</p>
        <p className="info">Address: {data.address}</p>
      </div>
    )},
    { title: 'Education', content: (
      <div>
        <ul>
          {Object.keys(data.education).map(key => (
            <li key={key}>{key}: {data.education[key]}</li>
          ))}
        </ul>
      </div>
    )},
    { title: 'Skills', content: (
      <div>
        <ul>
          {data.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    )},
    { title: 'Soft Skills', content: (
      <div>
        <ul>
          {data.softSkills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    )},
    { title: 'Languages', content: (
      <div>
        <ul>
          {data.languages.map(language => <li key={language}>{language}</li>)}
        </ul>
      </div>
    )},
    { title: 'About', content: (
      <div>
        <p>{data.about}</p>
      </div>
    )},
    { title: 'Projects', content: (
      <div>
        <ul className="projects">
          {data.projects.map((project, index) => (
            <li key={index} className="project-item">{project}</li>
          ))}
        </ul>
      </div>
    )}
  ];

  return (
    <div ref={containerRef} className="container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`section ${index % 2 === 0 ? 'even' : 'odd'} ${index === activeSection ? 'active' : (index < activeSection ? 'previous' : 'next')}`}
        >
          <h2>{section.title}</h2>
          {section.content}
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;
