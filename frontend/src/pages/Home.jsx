import React from "react";
import Login from "./Login";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-3 space-y-5">
      <Hero />
      <Sidebar />
    </div>
  );
};

export default Home;
