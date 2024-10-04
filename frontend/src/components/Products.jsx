import React, { useState } from "react";
import Card from "./subComponents/Card";

const Products = () => {
  // State to track selected option (either 'Latest' or 'Popular')
  const [selected, setSelected] = useState("Latest");

  return (
    <div>
      <div className="shadow-lg rounded-md p-5 bg-light-gray">
        <div className="flex gap-8 text-xl text-dark font-bold pb-3">
          {/* 'Latest' option */}
          <h1
            onClick={() => setSelected("Latest")}
            className={`cursor-pointer flex gap-2 justify-center items-center ${
              selected === "Latest" ? "border-b-4 border-dark" : ""
            }`}
          >
            Latest
            <img src="../images/latest.png" className="h-4 " />
          </h1>

          {/* 'Popular' option */}
          <h1
            onClick={() => setSelected("Popular")}
            className={`cursor-pointer flex gap-2 justify-center items-center ${
              selected === "Popular" ? "border-b-4 border-dark" : ""
            }`}
          >
            Popular
            <img src="../images/popular.png" className="h-5 " />
          </h1>
        </div>

        {/* Horizontal line below */}
        <hr className="p-3 border-[#acacac]" />

        {/* Conditionally render Card component or filter based on selected option */}
        <Card />
      </div>
    </div>
  );
};

export default Products;
