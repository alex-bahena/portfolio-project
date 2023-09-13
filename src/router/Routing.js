import React from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import ContactForm from "../components/contact-component/ContactForm";
import Main from "../components/Main";

const Routing = () => {
  return (
    <HashRouter>
      {/*Main content */}
      <section className="content">
        <Routes>
          {/* Navigate will be used in order to be redirected to the main website */}
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/*"
            element={
              <div className="404-page">
                {" "}
                <h1 className="head">Error 404 - Page not found</h1>{" "}
              </div>
            }
          />
        </Routes>
      </section>

      {/* Footer */}
    </HashRouter>
  );
};

export default Routing;
