// ReposManagement.js
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ReposManagement.css";
import Popupbox from "../popup-component/Popupbox";
import { githubReposAPI } from "../../utils/githubReposAPI";
import Carousel from "./Carousel";

const ReposManagement = ({ limit }) => {
  // State to manage the popup visibility
  const [buttonPopup, setButtonPopup] = useState(false);
  // State to store Github API data
  const [gitData, setGitData] = useState([]);
  // State to store the clicked project's id
  const [clickHandler, setClickHandler] = useState(null);

  // Fetch Github API data on component mount
  useEffect(() => {
    githubReposAPI()
      .then((data) => setGitData(data))
      .catch((err) => console.log(err));
  }, []);

  // Handle the "Read more" button click
  const handleClick = (projectId) => {
    setButtonPopup(true);
    setClickHandler(projectId);
  };

  // Render individual project cards
  const renderProjectCard = (project) => (
    <Card key={project.id}>
      <Card.Img
        className="project-card-img"
        variant="top"
        src={"assets/new-ilustrations/projects-img/" + project.id + ".png"}
      />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>

        <Button
          className={project.id}
          id="discover-more"
          variant="outline-light"
          size="sm" // Small-sized button
          onClick={() => handleClick(project.id)}
        >
          Discover More
        </Button>
      </Card.Body>
    </Card>
  );

  // Grid layout for projects
  return (
    <div className="projects-container">
      <Carousel>
        {gitData
          .filter((project) =>
            limit.some((limitProject) => limitProject.id === project.id)
          )
          .map((project) => renderProjectCard(project))}
      </Carousel>
      <Popupbox
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        gitData={gitData}
        idClicked={clickHandler}
      />
    </div>
  );
};

export default ReposManagement;
