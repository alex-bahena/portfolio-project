import React, { useEffect, useState } from "react";
import Popupbox from "../popup-component/Popupbox";

const ApiData = ({ limit }) => {
  //Overflow: The description of each project is shown by an overflow animation and a popup.
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    buttonPopup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [buttonPopup]);

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

  const [clickHandler, setClickHandler] = useState(12345);

  const handleClick = (state, e) => {
    setButtonPopup(state);
    setClickHandler(e.target.id);
    console.log(clickHandler);
    return e.target.id;
  };

  //Reference source https://bobbyhadz.com/blog/react-foreach.
  //Const render_api_data_JSX is equal to an empty array in order to push(render) the information obtained by the iteration(forEach) fuction.
  //The method filter and map, are used to populated with the results obtained after the forEach fuction on every element found in the iteration.
  //We return all the information, and add the new objects for each index created by the iteration to the empty array(render_api_data_JSX) with the push method.
  const render_api_data_JSX = [];
  const limitData = limit.map((el) => el.id);

  limitData.forEach((element) => {
    gitData
      .filter((x) => x.id === element)
      .map((list) => {
        return render_api_data_JSX.push(
          <>
            {/* - */}
            <div
              key={list.id}
              id={list.id}
              className="col-12 col-md-6 col-lg-4 portfolio-card"
            >
              {list ? (
                <>
                  <img
                    src={"/assets/projects-img/" + list.name + ".jpg"}
                    alt=" project"
                    className="card-img-top"
                  />
                  <div className="portfolio-content ">
                    <h5 className="card-title">
                      {list.name
                        ? //Removes the hypens and undercores from the name of each project obtained from the Github API
                          list.name.replace(/[_-]/g, " ")
                        : list.name}
                    </h5>
                    <br></br>
                    <p className="portfolio-description">
                      Built with:{" "}
                      {list.topics
                        ? //Capitalized the first letter of the name of each tecnology applied on every project obtained from the Github API
                          list.topics.map(capitalizedFirstLetter).join(", ")
                        : list.topics}
                      <br></br>
                      <a
                        className="read-more"
                        onClick={(e) => handleClick(true, e)}
                        id={list.id}
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </>
              ) : (
                <div className="portfolio-content ">
                  <h5 className="card-title">Loading...</h5>
                </div>
              )}
              <Popupbox
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
                list={list}
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
