import React from "react";
import "./Experience.css";
import { ReactTyped } from "react-typed";
import { useInView } from "react-intersection-observer";
const Experience = () => {
  const { ref, inView } = useInView({
    /* Optinal adjustments */
    threshold: 0,
    delay: 0,
  });
  return (
    <div ref={ref} className="experience">
      <div className="d-flex justify-content-center my-5">
        {/* {inView && (
          <Typed
            className="typed-text typed-exp"
            strings={[]}
            typeSpeed={70}
            loop={false}
          />
        )} */}
        <ReactTyped
          className="typed-text typed-exp"
          startWhenVisible
          strings={["Dev Tools"]}
          typeSpeed={70}
        />
      </div>

      <div className="container experience-wrapper">
        <div className="knowledge">
          <div className="marker">
            <div className="timeline-content">
              <h3 className="dev-tools-skills-title">Languages</h3>
              <ul>
                <li key="html" id="html" className="mb-2 dev-tools">
                  HTML
                </li>
                <li key="css" id="css" className="mb-2 dev-tools">
                  CSS{" "}
                </li>
                <li key="sass" id="sass" className="mb-2 dev-tools">
                  Sass{" "}
                </li>
                <li key="javascript" id="javascript">
                  JavaScript{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* - */}

        <div className="knowledge">
          <div className="marker">
            <div className="timeline-content">
              <h3 className="dev-tools-skills-title">Frontend</h3>
              {/* <p>
              I like to translate ideas into functional and interactive
              applications.
            </p> */}
              <ul>
                <li key="react" id="react" className="mb-2 dev-tools">
                  React{" "}
                </li>
                <li key="bootstrap" id="bootstrap" className="mb-2 dev-tools">
                  Boostrap{" "}
                </li>
                <li key="handlebars" id="handlebars" className="mb-2 dev-tools">
                  Handlebars.js{" "}
                </li>
                <li key="tailwind" id="tailwind">
                  TailwindCSS{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* - */}
        <div className="knowledge">
          <div className="marker">
            <div className="timeline-content">
              <h3 className="dev-tools-skills-title">Backend</h3>
              {/* <p>Tools I use to develope and work behind the scenes</p> */}
              <ul>
                <li key="node" id="node" className="mb-2 dev-tools">
                  Node.js{" "}
                </li>
                <li key="aws" id="aws" className="mb-2 dev-tools">
                  AWS S3{" "}
                </li>
                <li key="express" id="express" className="mb-2 dev-tools">
                  Express{" "}
                </li>
                <li key="api" id="api" className="mb-2 dev-tools">
                  RESTful API{" "}
                </li>
              </ul>
              <h5 className="database-orms">Database and ORMs</h5>
              <ul>
                <li key="mysql" id="mysql" className="mb-2 dev-tools">
                  MySQL{" "}
                </li>
                <li key="mongodb" id="mongodb" className="mb-2 dev-tools">
                  MongoDB{" "}
                </li>
                <li key="sequelize" id="sequelize" className="mb-2 dev-tools">
                  Sequelize{" "}
                </li>
                <li key="mongoose" id="mongoose" className="mb-2 dev-tools">
                  Mongoose{" "}
                </li>
              </ul>
              <h5 className="database-orms">Testing Framework</h5>
              <ul>
                <li key="jest" id="jest">
                  Jest{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* - */}
        <div className="knowledge">
          <div className="marker">
            <div className="timeline-content">
              <h3 className="dev-tools-skills-title">Others</h3>
              {/* <p>Active learning is always important!</p> */}
              <ul>
                <li key="git" id="git" className="mb-2 dev-tools">
                  Git{" "}
                </li>
                <li key="github" id="github" className="mb-2 dev-tools">
                  Github{" "}
                </li>
                <li key="slack" id="slack" className="mb-2 dev-tools">
                  Slack{" "}
                </li>
                <li key="discord" id="discord" className="mb-2 dev-tools">
                  Discord{" "}
                </li>
                <li key="jira" id="jira">
                  Jira{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  );
};
export default Experience;
