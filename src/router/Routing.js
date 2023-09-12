import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ContactForm from "../components/contact-component/ContactForm";
import Main from "../components/Main";

const Routing = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
              <div className="page">
                {" "}
                <h1 className="head">Error 404 - Page not found</h1>{" "}
              </div>
            }
          />
        </Routes>
      </section>

      {/* Footer */}
    </BrowserRouter>
  );
};

export default Routing;
