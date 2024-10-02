import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 ">
            <FaBars />
          </button>
          <Link to={"/"} className="text-xl md:text-2xl font-bold text-blue-600 me-6">
            Logo
          </Link>

          <div className={`absolute left-0 right-0 top-16 shadow-md md:static md:flex md:items-center md:space-x-2 ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <select className="border border-black-color rounded-md px-4 py-2 w-full md:w-72">
                <option className="bg-black-color text-white-color">Select Location</option>
                <option className="bg-black-color text-white-color">New York</option>
                <option className="bg-black-color text-white-color">Los Angeles</option>
                <option className="bg-black-color text-white-color">San Francisco</option>
                <option className="bg-black-color text-white-color">Chicago</option>
              </select>

              <div className="relative w-full md:w-[400px] lg:w-[600px]">
                <input type="text" placeholder="Search for product ..." className="w-full border border-[#101820] rounded-md px-4 py-2 pr-10" />
                <FaSearch className="absolute right-3 top-3 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to={"/login"} className="bg-black-color text-white-color px-4 py-2 rounded-md hover:bg-blue-700 w-[80px] font-semibold">
            Login
          </Link>
          <button className="border border-black-color text-black-color hover:bg-black-color hover:text-white-color transition-all ease-in-out duration-300 delay-100 px-4 py-2 rounded-md hover:bg-blue-50 w-[80px] font-semibold">Sell</button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex justify-center space-x-4 py-3">
          <Link to={"/login"} className="bg-black-color text-white-color px-4 py-2 rounded-md hover:bg-blue-700 w-[80px]">
            Login
          </Link>
          <button className="border border-[#101820] text-black-color hover:bg-black-color hover:text-white-color transition ease-in-out delay-150 px-4 py-2 rounded-md hover:bg-blue-50 w-[80px]">Sell</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
