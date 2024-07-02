import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="AboutComponent">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hello! I'm M.Ajay Yadav, a passionate developer with a love for creating beautiful and functional web applications. 
          With a strong foundation in both front-end and back-end technologies, I strive to deliver seamless user experiences 
          and efficient solutions. In my spare time, I enjoy learning new skills, exploring the outdoors, and contributing to 
          open-source projects. Let's connect and create something amazing together!
        </p>
        <div className="about-details">
          <div className="detail-item">
            <h3>Hyderabad</h3>
            <p>Domalguda Himayatnagar</p>
          </div>
          <div className="detail-item">
            <h3>Education</h3>
            <p>MCA  Computer Applications</p>
          </div>
          <div className="detail-item">
            <h3>Hobbies</h3>
            <p>Wrestling, Reading, Coding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
