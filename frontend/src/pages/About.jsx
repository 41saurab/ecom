import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <AboutContent />
    </div>
  );
};

export default About;
