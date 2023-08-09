import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="intro-footer text-center col-lg-10 col-md-12 col-sm-12 d-lg-flex flex-md-row flex-sm-column justify-content-center">
            <h2 className="lets-connect flex-lg-fill">Let's connect</h2>
            <p className="chat-invite flex-lg-fill">
              Interested in working together? We should queue up <br /> a time
              to chat. I’ll buy the coffee.
            </p>
            <Link to="/contact">
              <button type="button" className="footer-contact-btn">
                Say Hello
              </button>
            </Link>
            {/* <div className="footer-contact-btn flex-lg-fill ">
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="footer-position"></div>
          <div className="footer-logo text-center">
            <a className="navbar-brand" href={() => false}>
              <img className="logo" src={"/assets/abslogo.png"} alt="logo..." />
            </a>
            <p className="moto">
              Living, learning, & leveling up one day at a time.
            </p>
          </div>
        </div>

        <div className="col-lg-12 col-md-6 col-sm-6 ">
          <div className="social-field d-flex flex-row justify-content-center">
            <p className="github">
              <a
                href="https://github.com/AlejandroBahSan"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
              </a>
            </p>
            <p className="linkedIn social-link">
              {" "}
              <a
                href="https://www.linkedin.com/in/alejandrobahena/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedIn-link"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </p>
            <p className="twitter social-link ">
              {" "}
              <a
                href="https://www.linkedin.com/in/alejandrobahena/"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter-link"
              >
                <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
              </a>
            </p>
            <p className="gmail social-link ">
              {" "}
              <a
                href="mailto:alejandro.bahsan.dev@gmail.com"
                className="gmail-link"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </a>
            </p>
          </div>

          <p className="own-by">
            Handcrafted with love{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by Alejandro Bahena
          </p>
          <p className="made-with">
            Built with <FontAwesomeIcon icon={faBootstrap} size="2x" />
            <FontAwesomeIcon icon={faReact} size="2x" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
