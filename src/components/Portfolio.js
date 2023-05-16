import React, { useState, useEffect } from "react";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React popup box
import Popupbox from "./popup-component/Popupbox";

const Portfolio = () => {
  //projects
  const [buttonPopup, setButtonPopup] = useState(false);
  console.log(setButtonPopup);

  useEffect(() => {
    buttonPopup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [buttonPopup]);

  return (
    <div className="portfolio-wrapper">
      <div className="container overflow-hidden">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="row g-3 m-2">
          {/* - */}
          <div className=" col-12 col-md-6 col-lg-4 portfolio-card">
            <img
              src={"/assets/projects-img/Books-search-engine.jpg"}
              alt=" project"
              className="card-img-top"
            />

            <div className="portfolio-content ">
              <h5 className="card-title">Project</h5>
              <p className="portfolio-description">
                Built with:{" "}
                <a className="read-more" onClick={() => setButtonPopup(true)}>
                  Read more
                </a>
              </p>
            </div>
          </div>
          {/* - */}
          {/* - */}
          <div className="col-12 col-md-6 col-lg-4 portfolio-card">
            <div className="card">
              <img
                src={"/assets/projects-img/Books-search-engine.jpg"}
                alt=" project"
                className="card-img-top"
              />

              <div
                className="portfolio-content "
                onClick={() => setButtonPopup(true)}
              >
                <h5 className="card-title">Project</h5>
                <p className="portfolio-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur quibusdam minus harum accusamus natus soluta eos
                  incidunt excepturi adipisci repellendus eligendi eum, id
                  aspernatur temporibus corporis fugiat, explicabo nisi
                  necessitatibus?
                </p>
              </div>
            </div>
          </div>
          {/* - */}
          {/* - */}
          <div className="col-12 col-md-6 col-lg-4 portfolio-card">
            <div className="card">
              <img
                src={"/assets/projects-img/Books-search-engine.jpg"}
                alt=" project"
                className="card-img-top"
              />

              <div
                className="portfolio-content "
                onClick={() => setButtonPopup(true)}
              >
                <h5 className="card-title">Project</h5>
                <p className="portfolio-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur quibusdam minus harum accusamus natus soluta eos
                  incidunt excepturi adipisci repellendus eligendi eum, id
                  aspernatur temporibus corporis fugiat, explicabo nisi
                  necessitatibus?
                </p>
              </div>
            </div>
          </div>
          {/* - */}
          {/* - */}
          <div className="col-12 col-md-6 col-lg-4 portfolio-card">
            <div className="card">
              <img
                src={"/assets/projects-img/Books-search-engine.jpg"}
                alt=" project"
                className="card-img-top"
              />

              <div
                className="portfolio-content "
                onClick={() => setButtonPopup(true)}
              >
                <h5 className="card-title">Project</h5>
                <p className="portfolio-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur quibusdam minus harum accusamus natus soluta eos
                  incidunt excepturi adipisci repellendus eligendi eum, id
                  aspernatur temporibus corporis fugiat, explicabo nisi
                  necessitatibus?
                </p>
              </div>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
      <Popupbox trigger={buttonPopup} setTrigger={setButtonPopup}>
        {" "}
        <h3>My Popup</h3>{" "}
      </Popupbox>
    </div>
  );
};

export default Portfolio;
