import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Sidebar = () => {
  const categories = [
    "Furniture",
    "Electronics",
    "Mobile & Laptops",
    "Automobiles",
  ];

  return (
    <aside className=" shadow-lg rounded-md w-1/4 p-4 bg-light-gray">
      <h2 className="text-xl font-bold mb-4">Category</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-gray-300 pb-2 hover:bg-gray-200 cursor-pointer"
          >
            <span className="text-lg text-dark hover:text-blue-500">
              {category}
            </span>
            <FaArrowRight className="text-gray-500" />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
