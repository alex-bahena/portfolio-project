import React from "react";
// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React popup box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //projects
  const openPopupboxProject = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={"/assets/projects-img/Books-search-engine.jpg"}
          alt="project..."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit
        </p>
        <b>GitHub: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/AlejandroBahSan/portfolio-project")
          }
        >
          https://github.com/AlejandroBahSan/portfolio-project
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: "Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxProject}>
            <img
              className="portfolio-image"
              src={"/assets/projects-img/Books-search-engine.jpg"}
              alt="project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={"/assets/projects-img/Books-search-engine.jpg"}
              alt="project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={"/assets/projects-img/Books-search-engine.jpg"}
              alt="project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={"/assets/projects-img/Books-search-engine.jpg"}
              alt="project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        {/* _ */}
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
