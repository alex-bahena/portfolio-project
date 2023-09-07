import React from "react";
import ReposManagement from "./githubRepos-component/ReposManagement";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper border-top">
      <div className="container overflow-hidden">
        <h1 className="portfolio-heading text-center py-5" id="recent-projects">
          My recent work
        </h1>
        <div className="row g-3 m-2">
          {/* - */}
          <ReposManagement
            limit={[
              { id: 521792436 },
              { id: 513358450 },
              { id: 492967623 },
              { id: 519930549 },
              { id: 519010772 },
              { id: 511682423 },
              { id: 502769004 },
              { id: 475742805 },
            ]}
          />
          {/* - */}
        </div>
      </div>

      <div className="see-more-wrapper   col-lg-12">
        <a
          class="see-morebtn btn btn-primary"
          href="https://github.com/AlejandroBahSan"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FontAwesomeIcon className="github-icon" icon={faGithub} size="1x" />
          See more on Github
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
