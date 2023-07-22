import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

const Popupbox = ({ trigger, setTrigger, gitData, idClicked }) => {
  const [repoId, setRepoId] = useState([]);
  const capitalizedFirstLetter = (str) =>
    str[0].toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    trigger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");

    const idClickedInt = parseInt(idClicked);
    const gitDataArr = gitData.map((data) => data);
    console.log(gitDataArr);
    let projectId = gitDataArr.filter(
      (projects) => projects.id === idClickedInt
    );
    setRepoId(projectId[0]);
  }, [trigger]);

  return trigger ? (
    <div onClick={() => setTrigger(false)} className="popup">
      <div className="popup-inner">
        {repoId && (
          <>
            <img
              src={"/assets/projects-img/" + repoId.name + ".jpg"}
              alt="popup-img "
              className="popup-img"
            />
            <h4 className="popup-repoName">
              {repoId.name.replace(/[_-]/g, " ")}
            </h4>
            <h5>{repoId.description}</h5>
            <h6>
              {"Built with: " +
                //Capitalized the first letter of the name of each tecnology applied on every project got from the Github API
                repoId.topics.map(capitalizedFirstLetter).join(", ")}
            </h6>

            <div className="githubRepoLink">
              <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
              <a
                href={repoId.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Github repository
              </a>
            </div>
            {repoId.homepage !== repoId.html_url ? (
              <div className="deploymentlink">
                <FontAwesomeIcon
                  className="icon"
                  icon={faWindowMaximize}
                  size="2x"
                />
                <a
                  href={repoId.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Live project
                </a>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
        <button
          type="button"
          className="close-btn "
          aria-label="Close"
        ></button>
        {trigger.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popupbox;
