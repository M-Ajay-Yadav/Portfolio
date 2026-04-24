import { useState } from "react";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Fade from "react-reveal/Fade";
import Layout from "./Components/Layout/Layout";


// testing 

// 👉 import ONE at a time (uncomment one only)
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// // import Layout from "./Components/Layout/Layout";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
// import Education from "./Pages/Education/Education";
// import Skills from "./Pages/Skills/Skills";
// import Projects from "./Pages/Projects/Projects";
// import ContactUs from "./Pages/ContactUs/ContactUs";



const App = () => {
  const [theme,setTheme] = useState(true);
  const toggleBackground = () => {
    setTheme(!theme);
  };
  
  return (

      <div className={`app ${theme?'light':'dark'}`}>
          <Layout theme={theme} setTheme={setTheme} toggleBackground={toggleBackground}/>
          <div className="testing">
            {/* <h1>Debug Mode</h1> */}

      {/* ✅ test ONE component at a time */}
      {/* <Header /> */}

      {/* Uncomment one-by-one */}
      {/* <Layout /> */}
      {/* <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <ContactUs />
<Footer /> */}
          </div>
      </div>



  );
};

export default App;
