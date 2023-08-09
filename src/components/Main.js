import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particle from "./Particles";
import Aboutme from "./Aboutme";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Particle />
      <Navbar />
      <Header />
      <Aboutme />
      <Portfolio />
      <Experience />
      <Footer />
    </>
  );
};

export default Main;
