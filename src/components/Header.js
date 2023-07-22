import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        {" "}
        <h1>Fullstack Developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "HTML5",
            "Css3",
            "JavaScript",
            "MySQL",
            "MongoDB",
            "Node.js",
            "Express.js",
            "React.js",
            "Bootstrap",
            "Handlebars.js",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <a href="#" className="btn-main-offer">
          Contact me
        </a> */}
        <div className="learnmore">
          <p className="learnmoretext">Learn more about what I do</p>
          <span className="learnmorearrow">&#10597;</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
