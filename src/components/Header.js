import React from "react";
import "./Header.css";
import { ReactTyped } from "react-typed";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const textLine = ["Fullstack Developer", "Alex Bahena"];
  return (
    <div className="header-wrapper">
      <div className="main-info">
        {" "}
        <ReactTyped
          className="typed-text"
          strings={textLine}
          typeSpeed={100}
          backSpeed={70}
          loop={false}
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
