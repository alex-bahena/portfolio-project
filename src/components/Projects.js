import React, { useState } from "react";
// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="projects" onClick={() => setButtonPopup(true)}>
      <h1 className="py-5"> My projects</h1>
      <div className="container">
        <div className="row">
          <div className="cold-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Project1</h3>
              <p>project description</p>
            </div>
          </div>
          {/* - */}
          <div className="cold-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Procjet2</h3>
              <p>project description</p>
            </div>
          </div>
          {/* - */}
          <div className="cold-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>
              <h3>Project3</h3>
              <p>project description</p>
            </div>
          </div>
          {/* - */}
          <div className="cold-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Project 4</h3>
              <p>project description</p>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
