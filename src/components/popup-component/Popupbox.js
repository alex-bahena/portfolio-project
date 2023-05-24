import React, { useEffect, useState } from "react";

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
            <h4>{repoId.name.replace(/[_-]/g, " ")}</h4>
            <h5>
              {"Built with: " +
                //Capitalized the first letter of the name of each tecnology applied on every project got from the Github API
                repoId.topics.map(capitalizedFirstLetter).join(", ")}
            </h5>
            <h6>{repoId.description}</h6>
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
