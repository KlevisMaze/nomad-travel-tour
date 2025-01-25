/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 p-6 shadow-lg transition-colors duration-300 bg-yellow-500 ${
        isScrolled ? "bg-yellow-500" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="src/images/nomadlogo.png"
              alt="Logo"
              className="h-12 mr-4"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-bold text-lg">
          {["Hotels", "Tours", "Excursions", "M.I.C.E"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`/${item.toLowerCase()}`}
                className="hover:text-orange-600"
              >
                {item}
              </a>
            </li>
          ))}
          {/* Dropdown */}
          <li className="relative">
            <a
              href="#"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="hover:text-orange-600"
            >
              Transport
            </a>
            {isDropdownOpen && (
              <ul
                className="absolute left-0 mt-2 bg-white text-orange-700 shadow-lg rounded-md"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {["Rental Car", "Transfer"].map((subItem, idx) => (
                  <li key={idx}>
                    <a
                      href={`/${subItem.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Contact Info */}
        <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-end text-gray-100 text-base md:text-lg lg:text-xl space-y-2 md:space-y-0 md:space-x-6">
          <a
            href="mailto:info@nomadtours.com"
            className="flex items-center hover:text-orange-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0L12 13.5 2.25 6.75"
              />
            </svg>
            <span className="text-sm md:text-base lg:text-lg">
              info@nomadtours.com
            </span>
          </a>

          <a
            href="tel:+355676090069"
            className="flex items-center hover:text-orange-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 11.25l4.5 2.25-4.5 2.25v-4.5z"
              />
            </svg>
            <span className="text-sm md:text-base lg:text-lg">
              +355 67 609 0069
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle mobile menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute left-0 top-full w-full bg-yellow-500 text-white flex flex-col space-y-2 py-4 text-center">
          {[
            "Hotels",
            "Tours",
            "Excursions",
            "M.I.C.E",
            "Rental Car",
            "Transfer",
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-bold hover:text-orange-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
