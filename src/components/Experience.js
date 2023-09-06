import React from "react";
import { Icon } from "@iconify/react";

const Experience = () => {
  return (
    <div className="experience border-top">
      <div className="d-flex justify-content-center my-5">
        {/* icons - https://iconify.design/ */}
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
              <li key="html" id="html" className="mb-2">
                HTML{" "}
                <Icon
                  icon="vscode-icons:file-type-html"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
              <li key="css" id="css" className="mb-2">
                CSS{" "}
                <Icon
                  icon="vscode-icons:file-type-css"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
              <li key="sass" id="sass" className="mb-2">
                Sass{" "}
                <Icon
                  icon="skill-icons:sass"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="javascript" id="javascript">
                Javascript{" "}
                <Icon
                  icon="skill-icons:javascript"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
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
              I like to translate ideas into functional and interactive
              applications.
            </p>
            <ul>
              <li key="react" id="react" className="mb-2">
                React{" "}
                <Icon
                  icon="skill-icons:react-light"
                  style={{
                    fontSize: "2.2rem",
                  }}
                />
              </li>
              <li key="bootstrap" id="bootstrap" className="mb-2">
                Boostrap{" "}
                <Icon
                  icon="skill-icons:bootstrap"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="handlebars" id="handlebars" className="mb-2">
                Handlebars.js{" "}
                <Icon
                  icon="devicon:handlebars"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
              <li key="tailwind" id="tailwind">
                TailwindCSS{" "}
                <Icon
                  icon="vscode-icons:file-type-tailwind"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
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
              <li key="node" id="node" className="mb-2">
                Node.js{" "}
                <Icon
                  icon="skill-icons:nodejs-light"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
              <li key="aws" id="aws" className="mb-2">
                AWS S3{" "}
                <Icon
                  icon="skill-icons:aws-light"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
              <li key="express" id="express" className="mb-2">
                Express{" "}
                <Icon
                  icon="skill-icons:expressjs-dark"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="api" id="api" className="mb-2">
                RESTful API{" "}
                <Icon
                  icon="icon-park-solid:api"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
            </ul>
            <h5 className="database-orms">Database and ORMs</h5>
            <ul>
              <li key="mysql" id="mysql" className="mb-2">
                MySQL{" "}
                <Icon
                  icon="devicon:mysql"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="mongodb" id="mongodb" className="mb-2">
                MongoDB{" "}
                <Icon
                  icon="devicon:mongodb"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
              <li key="sequelize" id="sequelize" className="mb-2">
                Sequelize{" "}
                <Icon
                  icon="devicon:sequelize"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
              <li key="mongoose" id="mongoose" className="mb-2">
                Mongoose{" "}
                <Icon
                  icon="devicon:mongoose"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
            </ul>
            <h5 className="database-orms">Testing Framework</h5>
            <ul>
              <li key="jest" id="jest">
                Jest{" "}
                <Icon
                  icon="vscode-icons:file-type-jest-snapshot"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </li>
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
              <li key="git" id="git" className="mb-2">
                Git{" "}
                <Icon
                  icon="devicon:git"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="github" id="github" className="mb-2">
                Github{" "}
                <Icon
                  icon="devicon:github"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="slack" id="slack" className="mb-2">
                Slack{" "}
                <Icon
                  icon="devicon:slack"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="discord" id="discord" className="mb-2">
                Discord{" "}
                <Icon
                  icon="skill-icons:discord"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
              </li>
              <li key="jira" id="jira">
                Jira{" "}
                <Icon
                  icon="logos:jira"
                  style={{
                    fontSize: "1.8rem",
                  }}
                />
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
