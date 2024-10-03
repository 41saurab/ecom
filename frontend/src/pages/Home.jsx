import React from "react";
import Login from "./Login";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-3 space-y-5">
      <Hero />
      <div className="flex justify-center gap-5">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
};

export default Home;
