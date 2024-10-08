import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" border-b shadow-md ">
      <div className=" px-4 py-3 flex justify-between items-center">
        <div className=" flex items-center">
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 ">
              <FaBars />
            </button>
            <Link to={"/"} className="text-xl md:text-2xl font-bold text-blue-600 me-6">
              Logo
            </Link>
          </div>

          <div className={`absolute left-0 right-0 top-16  md:static md:flex md:items-center md:space-x-2 ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <select className="border border-dark rounded-full px-4 py-2 w-full md:w-72">
                <option className="bg-dark text-light">--Select Location--</option>
                <option className="bg-dark text-light">New York</option>
                <option className="bg-dark text-light">Los Angeles</option>
                <option className="bg-dark text-light">San Francisco</option>
                <option className="bg-dark text-light">Chicago</option>
              </select>

              <div className="flex items-center justify-center">
                <div className="relative w-full md:w-[400px] lg:w-[600px]">
                  <input type="text" placeholder="Search for product..." className="w-[60%]  rounded-full border border-dark px-4 py-2 pr-10" />
                </div>
                <FaSearch className="absolute left-[47%] top-6 text-gray-500 cursor-pointer " />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to={"/login"} className="bg-dark text-light px-4 py-2 rounded-md hover:bg-dark w-[80px] font-semibold">
            Login
          </Link>
          <button className="border border-dark text-dark hover:bg-dark hover:text-light transition-all ease-in-out duration-300 delay-100 px-4 py-2 rounded-md w-[80px] font-semibold">Sell</button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex justify-center space-x-4 py-3">
          <Link to={"/login"} className="bg-dark text-light px-4 py-2 rounded-md hover:bg-black w-[80px]">
            Login
          </Link>
          <button className="border border-dark text-dark hover:bg-dark hover:text-light transition ease-in-out delay-150 px-4 py-2 rounded-md w-[80px]">Sell</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
