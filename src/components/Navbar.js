import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLogo from "./logo-component/NavLogo";
const Navbar = () => {
  return (
    <nav className="navbar-custom navbar navbar-expand-lg navbar-light">
      <div className="header container">
        <a className="navbar-brand" href={() => false}>
          <img className="logo" src={"/assets/abslogo.png"} alt="logo..." />
          <NavLogo />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href={() => false}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={() => false}>
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={() => false}>
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={() => false}>
                experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={() => false}>
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
