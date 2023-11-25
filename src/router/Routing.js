import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ContactForm from "../components/contact-component/ContactForm";
import Main from "../components/Main";

const Routing = () => {
  return (
    // Use BrowserRouter for cleaner URLs
    <BrowserRouter>
      {/* Main content */}
      <section className="content">
        {/* Define routes within a Routes component */}
        <Routes>
          {/* Use Navigate to redirect from the root path to "/main" */}
          <Route path="/" element={<Navigate to="/main" />} />
          {/* Render Main component when the path is "/main" */}
          <Route path="/main" element={<Main />} />
          {/* Render ContactForm component when the path is "/contact" */}
          <Route path="/contact" element={<ContactForm />} />
          {/* 
            Render a 404 page for any other paths not matched.
            This is a catch-all route.
          */}
          <Route
            path="/*"
            element={
              <div className="404-page">
                <h1 className="head">Error 404 - Page not found</h1>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default Routing;
