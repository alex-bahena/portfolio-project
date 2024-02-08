import React, { useEffect, useState } from "react";
import "./Popupbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize, faXmark } from "@fortawesome/free-solid-svg-icons";

const Popupbox = ({ trigger, setTrigger, gitData, idClicked }) => {
  const [GithubRepoID, setGithubRepoID] = useState([]);
  const capitalizedFirstLetter = (str) =>
    str[0].toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    trigger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [trigger]);

  useEffect(() => {
    const idClickedInt = parseInt(idClicked);
    const gitDataArr = gitData.map((data) => data);
    let projectId = gitDataArr.filter(
      (projects) => projects.id === idClickedInt
    );
    setGithubRepoID(projectId[0]);
  }, [idClicked, gitData]);

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {GithubRepoID && (
          <>
            <img
              src={"assets/projects-img/" + GithubRepoID.name + ".jpg"}
              alt="popup-img "
              className="popup-img"
            />
            <h1 className="popup-repoName">
              {GithubRepoID.name.replace(/[_-]/g, " ")}
            </h1>
            <p className="popup-repoDescription">{GithubRepoID.description}</p>
            <p className="popup-repoBuiltWith">
              {"Crafted with: " +
                //Capitalized the first letter of each tecnologies applied in every project we get from the Github API
                GithubRepoID.topics.map(capitalizedFirstLetter).join(", ")}
            </p>

            <div className="githubRepoLink">
              <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
              <a
                href={GithubRepoID.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Github repository
              </a>
            </div>
            {GithubRepoID.homepage !== GithubRepoID.html_url ? (
              <div className="deploymentlink">
                <FontAwesomeIcon
                  className="icon"
                  icon={faWindowMaximize}
                  size="2x"
                />
                <a
                  href={GithubRepoID.homepage}
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
            <div onClick={() => setTrigger(false)} className="return-main">
              <FontAwesomeIcon className="icon" icon={faXmark} size="2x" />
            </div>
          </>
        )}
      </div>
      {trigger.children}
    </div>
  ) : (
    ""
  );
};

export default Popupbox;
