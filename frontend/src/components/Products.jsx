import React from "react";
import Card from "./subComponents/Card";

const Products = () => {
  return (
    <div className="shadow-lg rounded-md w-3/4 p-5 bg-light-gray grid grid-cols-4 gap-5 justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Products;
