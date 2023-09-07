import React, { useEffect, useState } from "react";
import Popupbox from "../popup-component/Popupbox";

const ApiData = ({ limit }) => {
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
    fetch("https://api.github.com/users/AlejandroBahSan/repos")
      .then((response) => response.json())
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

  limitData.forEach((element) => {
    gitData
      .filter((projects) => projects.id === element)
      .map((projectList) => {
        return render_api_data_JSX.push(
          <>
            {/* - */}
            <div
              key={projectList.id}
              id={projectList.id}
              className="col-12 col-md-6 col-lg-4 portfolio-card"
            >
              {projectList ? (
                <>
                  <img
                    src={"/assets/projects-img/" + projectList.name + ".jpg"}
                    alt=" project"
                    className="card-img-top"
                  />
                  {!buttonPopup && (
                    <>
                      <div className={"portfolio-content"}>
                        <h5 className="card-title">
                          {projectList.name
                            ? //Removes the hypens and undercores from the name of each project obtained from the Github API
                              projectList.name.replace(/[_-]/g, " ")
                            : projectList.name}
                        </h5>
                        <br></br>
                        <p className="portfolio-description">
                          Built with:{" "}
                          {projectList.topics
                            ? //Capitalized the first letter of the name of each tecnology applied on every project obtained from the Github API
                              projectList.topics
                                .map(capitalizedFirstLetter)
                                .join(", ")
                            : projectList.topics}
                          <br></br>
                          <a
                            className="read-more"
                            onClick={(e) => handleClick(true, e)}
                            id={projectList.id}
                          >
                            Read more
                          </a>
                        </p>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="portfolio-content ">
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
          </>
        );
      });
  });
  //_________________________________________________________________________________________________
  return <>{render_api_data_JSX}</>;
};

export default ApiData;
