import React from "react";

const Footer = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  return (
    <footer className="footer-wrapper w-100 mt-auto   p-4">
      <div className="footer-content container text-center mb-5">
        {/* {location.pathname !== "/" && (
             onClick={() => navigate(-1)} 
        )} */}
        <button className="btn btn-dark mb-3">&larr; Go Back</button>
        <h4>
          Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "}
          by the Tech Thoughts team.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
