import React from "react";
import Login from "./Login";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import CategoryList from "../components/CategoryList";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <Hero />
      <CategoryList />
      {/* <div className="flex justify-center gap-5">
        <Sidebar />
        <Products />
      </div> */}
      <Products />
    </div>
  );
};

export default Home;
