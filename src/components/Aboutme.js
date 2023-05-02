import React from "react";

const Aboutme = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="image-wrap">
            <img
              className="aboutme-img"
              src={"/assets/aboutme.png"}
              alt="author..."
            />{" "}
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
            Hello there, my name is Alejandro Bahena: Trained as a Mechatronic
            Engineer with over 5 years of experience in the automation field,
            I'm now switching gears to venture into the world of technology hand
            in hand with the ITEMS bootcamp. For as long as I can remember,
            technology is something that has always been a passion of mine. As a
            self-taught programmer, so much of my learning in this field has
            been through experimentation with different concepts. Challenges are
            my mental daily workout to help improve my expertise and helping
            others out at the same time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
