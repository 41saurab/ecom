import React from "react";
import { categories } from "../resources/categories"; // Ensure the path is correct

function CategoryList() {
  return (
    <div className="flex justify-start space-x-4 overflow-x-auto py-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center w-56 h-24 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Displaying the category image */}
          <img 
            src={category.img} 
            alt={category.name} 
            className="h-12 mb-2" // Set the height and margin for the image
          />
          <span className="font-semibold">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
