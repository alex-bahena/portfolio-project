// Import necessary dependencies
import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ContactForm from "../components/contact-component/ContactForm";
import Main from "../components/Main";
import NotFound from "./NotFound"; // Import custom NotFound component

const Routing = () => {
  return (
    <BrowserRouter>
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Route for handling 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default Routing;
