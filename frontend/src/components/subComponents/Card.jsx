import React from "react";

const Card = () => {
  return (
    <div className="card bg-base-100 w-64 shadow-xl relative rounded-lg transform transition-transform hover:scale-105">
      <div className="absolute top-2 right-2">
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"></button>
      </div>

      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="object-cover h-36 w-full rounded-t-lg" />
      </figure>

      <div className="card-body p-3">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">RS. 6,000</h2>
          <div className="badge bg-dark text-light">NEW</div>
        </div>
        <p className="font-semibold text-lg">Comfy Sneakers</p>
        <p className="text-dark">123 Main St, Kathmandu</p>

        <span className="text-sm text-gray-500 flex justify-end">Oct 1, 2024</span>
      </div>
    </div>
  );
};

export default Card;
