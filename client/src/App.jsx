import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fade from "react-reveal/Fade";

import Layout from "./Components/Layout/Layout";


const App = () => {
  const [theme,setTheme] = useState(true);
  const toggleBackground = () => {
    setTheme(!theme);
  };
  
  return (
    <Fade>
      <div className={`app ${theme?'light':'dark'}`}>
          <Layout theme={theme} setTheme={setTheme} toggleBackground={toggleBackground}/>
      </div>
    </Fade>
  );
};

export default App;
