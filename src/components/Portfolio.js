import "./Portfolio.css";
import React from "react";
import ReposManagement from "./githubRepos-component/ReposManagement";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    /* Optinal adjustments */
    threshold: 0,
    delay: 0,
  });
  return (
    <div ref={ref} className="portfolio-wrapper border-top">
      <div className="container overflow-hidden ">
        <div className="text-center py-5">
          {inView && (
            <Typed
              className="typed-text-projects"
              id="recent-projects"
              strings={["Explore my latest creations"]}
              typeSpeed={70}
              loop={false}
            />
          )}
        </div>
        <div className="row g-3 m-2">
          {/* - */}
          <ReposManagement
            limit={[
              { id: 521792436 },
              { id: 513358450 },
              { id: 492967623 },
              { id: 519010772 },
              { id: 511682423 },
              { id: 502769004 },
              { id: 494682651 },
            ]}
          />
          {/* - */}
        </div>
      </div>

      <div className="see-more-wrapper   col-lg-12">
        <a
          className="see-morebtn btn btn-primary"
          href={"https://github.com/alex-bahena"}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon className="github-icon" icon={faGithub} size="1x" />
          See more on GitHub
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
