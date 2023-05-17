import React from "react";

const Popupbox = ({ trigger, setTrigger, list, clickHandler }) => {
  console.log(clickHandler);
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <img
          src={"/assets/projects-img/" + list.name + ".jpg"}
          alt="popup-img "
          className="popup-img"
        />
        {list.name
          ? //Removes the hypens and undercores from the name of each project obtained from the Github API
            list.name.replace(/[_-]/g, " ")
          : list.name}
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>
        {trigger.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popupbox;
