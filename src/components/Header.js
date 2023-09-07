import React from "react";
import Typed from "react-typed";
import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        {" "}
        <h1>Fullstack Developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "HTML",
            "CSS",
            "Sass",
            "React.js",
            "Bootstrap",
            "Handlebars.js",
            "JavaScript",
            "MySQL",
            "MongoDB",
            "Node.js",
            "Express.js",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="learnmore">
          <p className="learnmoretext">Learn more about what I do</p>
          <HashLink className="learnmorearrow" to="#recent-projects">
            <FontAwesomeIcon className="icon" icon={faArrowDown} />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
