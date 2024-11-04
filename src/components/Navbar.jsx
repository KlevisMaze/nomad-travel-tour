/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-lg fixed w-full z-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="src/images/nomadlogo.png" alt="Logo" className="h-12 mr-5" />
        <span className="text-xl font-bold text-white">
          Nomad Travel & Tours
        </span>
      </div>

      {/* Links Section */}
      <div className="hidden md:flex space-x-6 text-white font-bold">
        <a href="/hotels" className="hover:text-blue-600">
          Hotels
        </a>
        <a href="/tours" className="hover:text-blue-600">
          Tours
        </a>
        <a href="/excursions" className="hover:text-blue-600">
          Excursions
        </a>
        <a href="/rent-a-car" className="hover:text-blue-600">
          Rent a Car
        </a>
        <a href="/transfers" className="hover:text-blue-600">
          Transfers
        </a>
      </div>

      {/* Contact Info */}
      <div className="hidden md:flex items-center space-x-4 text-gray-100 font-semibold">
        <span>Email: info@nomadtours.com</span>
        <span>Contact: +355 67 609 0069</span>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white font-bold">
        {/* Replace with a hamburger menu icon */}☰
      </button>
    </nav>
  );
};

export default Navbar;
