import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Typewriter from "typewriter-effect";
import img from "../../assets/img/image.jpg";
import file from "../../assets/documents/Resume.pdf";
import "./Home.css";

const Home = () => {
  return (
    <div className="HomeSection" id="Homecomponent">
      {/* Fixed position icon */}

      <div className="HomeContainer">
        <div className="image">
          <img src={img} alt="img" />
        </div>

        <div className="Homecontent">
          <h2>Hello, I'm </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "M.AJAY YADAV",
                  "MERN DEVELOPER",
                  "FRONTEND DEVELOPER",
                  "BACKEND DEVELOPER",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>
          Welcome to my portfolio! I am an MCA graduate specializing in web development, AI, and cloud computing.
          </p>
          <ul className="btns">
            {/* <li className="btn">Resume</li> */}
            <li className="btn">
              <a href={file} download={`M_Ajay_Yadav.pdf`}
               className="nav-link nav-item"
               activeClassName="active-link">
                Resume
              </a>
            </li>
            {/* <li className="btn">Hire me</li> */}
            <li className="btn">
              {" "}
              <a
                href="https://wa.me/+919573069748?text=I%20am%20interested%20in%20hiring%20you"
                target="_blank"
                 className="nav-link nav-item"
              activeClassName="active-link"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
