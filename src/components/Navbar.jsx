/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-around p-4 shadow-lg fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-yellow-500" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="src/images/nomadlogo.png" alt="Logo" className="h-12 mr-5" />
        <span className="text-3xl font-bold text-white">
          Nomad Travel & Tours
        </span>
      </div>

      {/* Links Section */}
      <div className="hidden md:flex space-x-6 text-white font-bold text-lg">
        <a href="/hotels" className="text-3xl font-bold hover:text-orange-600">
          Hotels
        </a>
        <a href="/tours" className="text-3xl font-bold hover:text-orange-600">
          Tours
        </a>
        <a
          href="/excursions"
          className="text-3xl font-bold hover:text-orange-600"
        >
          Excursions
        </a>
        <a href="/Mice" className="text-3xl font-bold hover:text-orange-600">
          M.I.C.E
        </a>
        <nav className="relative ">
          <div className="group inline-block ">
            <a href="#" className="text-3xl font-bold hover:text-orange-600">
              Transport
            </a>
            <div className="absolute hidden group-hover:block shadow-lg w-full z-auto transition-colors duration-1000 rounded-md mt-2">
              <a
                href="/rental-car"
                className="block px-4 py-2 text-2xl font-bold text-orange-700 hover:bg-gray-100 whitespace-nowrap"
              >
                Rental Car
              </a>
              <a
                href="/transfer"
                className="block px-4 py-2 text-2xl font-bold text-orange-700 hover:bg-gray-100"
              >
                Transfer
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Contact Info */}
      <div className="hidden md:flex flex-col items-center text-gray-100 font-semibold text-xl space-y-2">
        <span>Email: info@nomadtours.com</span>
        <span>Contact: +355 67 609 0069</span>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white font-bold text-lg">☰</button>
    </nav>
  );
};

export default Navbar;
