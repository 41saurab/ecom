// Importing products from the resources
import React from "react";
import { products } from "../../resources/product"; // Ensure the path is correct

const Card = ({ item }) => {
  return (
    <div className="card bg-base-100 w-64 shadow-xl relative rounded-lg transform transition-transform hover:scale-105">
      <div className="absolute top-2 right-2">
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          {/* Like Button Icon */}
          ❤️
        </button>
      </div>

      <figure>
        <img
          src={item.img} // Correctly set the src attribute for the image
          alt={item.name} // Add alt text for accessibility
          className="object-cover h-36 w-full rounded-t-lg" // You can customize the height if needed
        />
      </figure>

      <div className="card-body p-3">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">{item.price}</h2>{" "}
          {/* Use dynamic price */}
          {/* You can remove the badge if you don't have a 'new' property in your product objects */}
          {/* <div className="badge bg-dark text-light">{item.new ? "NEW" : ""}</div> */}
        </div>
        <p className="font-semibold text-lg">{item.name}</p>{" "}
        {/* Use dynamic name */}
        <p className="text-dark">{item.location}</p>{" "}
        {/* Use dynamic location */}
        <span className="text-sm text-gray-500 flex justify-end">
          {item.date} {/* Use dynamic date */}
        </span>
      </div>
    </div>
  );
};

const ItemList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
