import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading data from the backend...</p>
    </div>
  );
};

export default Loading;
