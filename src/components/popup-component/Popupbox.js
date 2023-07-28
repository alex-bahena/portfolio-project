import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize, faXmark } from "@fortawesome/free-solid-svg-icons";

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
    <div className="popup">
      <div className="popup-inner">
        {repoId && (
          <>
            <img
              src={"/assets/projects-img/" + repoId.name + ".jpg"}
              alt="popup-img "
              className="popup-img"
            />
            <h1 className="popup-repoName">
              {repoId.name.replace(/[_-]/g, " ")}
            </h1>
            <p className="popup-repoDescription">{repoId.description}</p>
            <p className="popup-repoBuiltWith">
              {"Built with: " +
                //Capitalized the first letter of the name of each tecnology applied on every project got from the Github API
                repoId.topics.map(capitalizedFirstLetter).join(", ")}
            </p>

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
