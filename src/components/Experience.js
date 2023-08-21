import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faAws,
  faGitSquare,
  faGithub,
  faJira,
  faSlack,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  return (
    <div className="experience border-top">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>

      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Languages I speak</h3>
            <p>
              Always willing to participate in the design and creation of
              scalable software
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHtml5} /> HTML
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} /> CSS
              </li>
              <li>
                <FontAwesomeIcon icon={faSass} /> Sass
              </li>
              <li>
                <FontAwesomeIcon icon={faJs} /> Javascript
              </li>
            </ul>
          </div>
        </div>
        {/* - */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Frontend</h3>

            <p>
              I like to translate ideas into functional and appealing
              interactive applications.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faReact} /> React
              </li>
              <li>
                <FontAwesomeIcon icon={faBootstrap} /> Boostrap
              </li>
              <li>Handlebars.js</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Backend</h3>
            <p>Tools I use to develope and work behind the scenes</p>
            <ul>
              <li>
                Node.js <FontAwesomeIcon icon={faNodeJs} />
              </li>
              <li>
                AWS S3 <FontAwesomeIcon icon={faAws} />
              </li>
              <li>Express.js </li>
              <li>
                RESTful API <FontAwesomeIcon icon="fa-thin fa-webhook" />
              </li>
            </ul>
            {/* icons - http://fizzed.com/oss/font-mfizz */}
            <h5 className="database-orms">Database and ORMs</h5>
            <ul>
              <li>
                MySQL <i className="icon-mysql"></i>
              </li>
              <li>
                MongoDB <i className="icon-mongodb"></i>
              </li>
              <li>Sequelize</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Others</h3>
            <p>Active learning is always important!</p>
            <ul>
              <li>
                Git <FontAwesomeIcon icon={faGitSquare} />
              </li>
              <li>
                Github <FontAwesomeIcon icon={faGithub} />
              </li>
              <li>
                Slack <FontAwesomeIcon icon={faSlack} />
              </li>
              <li>
                Discord <FontAwesomeIcon icon={faDiscord} />
              </li>
              <li>
                Jira <FontAwesomeIcon icon={faJira} />
              </li>
            </ul>
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  );
};

export default Experience;
