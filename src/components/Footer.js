import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // function hashTagHasChanged() {
  //   return window.location.href.split("#")[0];
  // }
  // window.onhashchange = hashTagHasChanged;

  // console.log("HERE", window.location.href.split("#")[0]);

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="intro-footer text-center col-lg-10 col-md-12 justify-content-center">
            <h2 className="lets-connect flex-lg-fill">Hey, there!</h2>
            <p className="chat-invite flex-lg-fill">
              Interested in working together? We should queue up <br /> a time
              to chat.
            </p>
            <Link to="/contact">
              <button type="button" className="footer-contact-btn flex-lg-fill">
                Let's chat!
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="footer-position"></div>
          <div className="footer-logo text-center">
            <HashLink className="back-header" smooth={true} to="#header">
              <img
                className="footer-logo-img"
                src={"assets/new-ilustrations/b.png"}
                alt="logo..."
              />
            </HashLink>
            <p className="motto">
              Learning, & boosting up
              <br /> one day at a time.
            </p>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-6 ">
          <div className="social-field d-flex flex-row justify-content-center">
            <p className="github">
              <a
                href="https://github.com/alex-bahena"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              </a>
            </p>
            <p className="linkedIn social-link">
              {" "}
              <a
                href="https://www.linkedin.com/in/alex-bahena/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedIn-link"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </p>
            <p className="twitter social-link ">
              {" "}
              <a
                href="https://twitter.com/AlejandroBahSan"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter-link"
              >
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </a>
            </p>
            <p className="gmail social-link ">
              {" "}
              <a href="mailto:alex.bahena.ca@gmail.com" className="gmail-link">
                <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
              </a>
            </p>
          </div>
          <p className="handcrafted text-center">
            Handcrafted with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by <br />
            <span className="my-name">Alex Bahena</span>
          </p>

          <table className="made-with">
            <tbody>
              <tr>
                <td>An integration made with </td>
                <td className="boostrap-logo">
                  <FontAwesomeIcon icon={faBootstrap} size="2x" />
                </td>
                <td className="react-logo">
                  {" "}
                  <FontAwesomeIcon icon={faReact} size="2x" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
