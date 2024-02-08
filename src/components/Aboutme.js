import React from "react";
import "./Aboutme.css";
import { useInView } from "react-intersection-observer";

const Aboutme = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="aboutme-wrapper" id="about-me">
      {inView && (
        <div
          className={`aboutme-container container py-5 ${
            inView ? "fadeIn" : ""
          }`}
        >
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="image-wrap">
                <img
                  className="aboutme-img"
                  src={"assets/new-ilustrations/Portfolio Avatar.svg"}
                  alt="author..."
                />{" "}
              </div>
            </div>
            <div className="about-me col-lg-6 col-xm-12">
              <h1 className="about-heading">Hi,there! Nice to meet you.</h1>
              <p className="aboutme-description">
                With over{" "}
                <span className="engineering-experience">
                  5 years of experience{" "}
                </span>{" "}
                as a Mechatronic Engineer under my belt, I've switched gears
                into more coding. As a self-taught programmer and a graduate of
                the{" "}
                <span className="programmer-education">
                  ITESM coding bootcamp
                </span>
                , so much of my learning in this field has been through a
                balance of curiosity and experimentation with different
                concepts. I like a good challenge but more than that, I love to
                help teams build great products. I also love helping build
                things right the first time. I invite you to be nosey here and
                explore my past projects below.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutme;
