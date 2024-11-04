/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown menu handlers
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

      {/* Links Section for Desktop */}
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
        <nav className="relative">
          <div
            className="inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-3xl font-bold hover:text-orange-600">
              Transport
            </a>
            <div
              className={`absolute ${
                isDropdownOpen ? "block" : "hidden"
              } shadow-lg w-full z-10 transition-opacity duration-500 rounded-md mt-2`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/rental-car"
                className="block px-4 py-2 text-2xl font-bold text-orange-700 hover:bg-gray-100 whitespace-nowrap"
              >
                Rental Car
              </a>
              <a
                href="/transfer"
                className="block px-4 py-2 text-2xl font-bold text-orange-700 hover:bg-gray-100 whitespace-nowrap"
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
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white font-bold text-lg"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-yellow-500 text-white text-center flex flex-col py-4 space-y-2 md:hidden">
          <a
            href="/hotels"
            className="text-2xl font-bold hover:text-orange-600"
          >
            Hotels
          </a>
          <a href="/tours" className="text-2xl font-bold hover:text-orange-600">
            Tours
          </a>
          <a
            href="/excursions"
            className="text-2xl font-bold hover:text-orange-600"
          >
            Excursions
          </a>
          <a href="/Mice" className="text-2xl font-bold hover:text-orange-600">
            M.I.C.E
          </a>
          <a
            href="/rental-car"
            className="text-2xl font-bold hover:text-orange-600"
          >
            Rental Car
          </a>
          <a
            href="/transfer"
            className="text-2xl font-bold hover:text-orange-600"
          >
            Transfer
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
