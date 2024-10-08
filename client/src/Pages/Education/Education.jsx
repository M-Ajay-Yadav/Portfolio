import React, { useState, useEffect } from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import Loading from "../Loading/Loading";

const Education = ({ education, loading, error }) => {
  // const [education, setEducation] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  if (loading) {
    return (
      <div className="loading-container">
        <Loading color="#3498db" size={50} />
        <p>Loading data from the backend...</p>
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="education-container" id="educationComponent">
      <h1 className="education-title">Education</h1>
      <VerticalTimeline>
        {education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{ color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={edu.year}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
            icon={<MdSchool />}
            position={index % 2 === 0 ? "left" : "right"}
          >
            <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {edu.institution}
            </h4>
            <p>{edu.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
