import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [URLParam, setURLParam] = useState("");
  let URLValue = window.location.href;
  // const [hasTagChanged, setHashTagChanged] = useEffect("");
  // let hashTaghasChanged = window.location.hash;

  // {------------------------- NAVBAR LOGIC -------------------------}
  useEffect(() => {
    //URLArray returns the - from www.thing /main or /contact
    let URLArray = URLValue.split("/").slice(-1)[0];
    if (URLValue) {
      setURLParam(URLArray);
    } else {
      setURLParam("main");
      console.log("here");
    }
  }, [URLValue]);

  // {------------------------- HASHTAG LOGIC -------------------------}

  // useEffect(() => {
  //   if (URLValue.includes("#")) {
  //     return window.location.href.split("#")[0];
  //   }
  // }, [hashTaghasChanged]);

  return URLParam === "main" ? (
    <nav className="nav-main navbar-custom navbar navbar-expand-lg" id="header">
      <div className="header container">
        <Link className="navbar-brand" to="/main">
          <img className="logo" src={"/assets/abslogo.png"} alt="logo..." />
        </Link>
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about me
              </a>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-experience nav-link"
                smooth={true}
                to="#about-me"
              >
                Experience
              </HashLink>
            </li>
            <li className="nav-item">
              <Link
                type="button"
                className="nav-contact nav-link"
                to="/contact"
              >
                Say Hello
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="nav-main navbar-custom navbar navbar-expand-lg">
      <div className="header container">
        <a className="navbar-brand" href={() => false}>
          <img className="logo" src={"/assets/abslogo.png"} alt="logo..." />
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
            {/* <li className="nav-item">
              <HashLink className="nav-experience nav-link" to="#about-me">
                Experience
              </HashLink>
            </li> */}
            <li className="nav-item">
              <Link className="nav-home nav-link" to="/main">
                <FontAwesomeIcon icon={faHome} style={{ color: "#fff" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
