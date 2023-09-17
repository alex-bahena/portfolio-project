import React, { useEffect, useState } from "react";
import Popupbox from "../popup-component/Popupbox";
import { githubReposAPI } from "../../utils/githubReposAPI";

const ReposManagement = ({ limit }) => {
  //Overflow: The description of each project is shown by an overflow animation and a popup.
  const [buttonPopup, setButtonPopup] = useState(false);

  // ____________________________________________________________________________________

  // Capitalized the first letter of a word and prevents any other letter being capitalized.
  const capitalizedFirstLetter = (str) =>
    str[0].toUpperCase() + str.slice(1).toLowerCase();
  //__________________________________________________________________________________________

  // Github info repos API call
  const [gitData, setGitData] = useState([]);
  useEffect(() => {
    githubReposAPI()
      .then((data) => setGitData(data))
      .catch((err) => console.log(err));
  }, []);

  const [clickHandler, setClickHandler] = useState(1234);

  const handleClick = (state, e) => {
    setButtonPopup(state);

    return setClickHandler(e.target.id);
  };

  //Reference source https://bobbyhadz.com/blog/react-foreach.
  //Const render_api_data_JSX is equal to an empty array in order to push(render) the information obtained by the iteration(forEach) fuction.
  //The method filter and map, are used to populated with the results obtained after the forEach fuction on every element found in the iteration.
  //We return all the information, and add the new objects for each index created by the iteration to the empty array(render_api_data_JSX) with the push method.
  const render_api_data_JSX = [];
  const limitData = limit.map((element) => element.id);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      console.log(`Width: ${windowWidth}`);
    };
  });

  const isMobile =
    windowWidth < 1200
      ? "col-12 col-md-6 col-lg-6 portfolio-card"
      : "col-12 col-md-6 col-lg-4 portfolio-card";

  limitData.forEach((element) => {
    gitData
      .filter((projects) => projects.id === element)
      .map((projectList) => {
        return render_api_data_JSX.push(
          <React.Fragment key={projectList.id}>
            {/* - */}
            <div className={isMobile}>
              {projectList ? (
                <>
                  <img
                    src={
                      "assets/projects-img-preview/" + projectList.name + ".jpg"
                    }
                    alt=" project"
                    className="card-img-top"
                  />
                  {!buttonPopup && (
                    <>
                      <div className="portfolio-content">
                        <h5 className="card-title">
                          {projectList.name
                            ? //Removes the hypens and undercores from the name of each project obtained from the Github API
                              projectList.name.replace(/[_-]/g, " ")
                            : projectList.name}
                        </h5>
                        <p className="portfolio-description">
                          Built with:{" "}
                          {projectList.topics
                            ? //Capitalized the first letter of the name of each tecnology applied on every project obtained from the Github API
                              projectList.topics
                                .map(capitalizedFirstLetter)
                                .join(", ") + "."
                            : projectList.topics}
                          <button
                            className="read-more"
                            onClick={(e) => handleClick(true, e)}
                            id={projectList.id}
                          >
                            Read more
                          </button>
                        </p>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="portfolio-content">
                  <h5 className="card-title">Loading...</h5>
                </div>
              )}
              <Popupbox
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
                gitData={gitData}
                idClicked={clickHandler}
              >
                {" "}
              </Popupbox>
            </div>
            {/* - */}
          </React.Fragment>
        );
      });
  });
  //_________________________________________________________________________________________________
  return <>{render_api_data_JSX}</>;
};

export default ReposManagement;
