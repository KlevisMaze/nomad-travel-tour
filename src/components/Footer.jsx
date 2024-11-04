/* eslint-disable no-unused-vars */
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description in a Row */}
          <div className="flex items-center space-x-4 md:col-span-1">
            <img src="src/images/nomadlogo.png" alt="Logo" className="w-20" />
            <p className="text-sm">
              Providing exceptional travel and tour experiences to explore the
              world with ease and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="src/pages/Hotels.jsx" className="hover:underline">
                  Hotels
                </a>
              </li>
              <li>
                <a href="src/pages/Tours.jsx" className="hover:underline">
                  Tours
                </a>
              </li>
              <li>
                <a href="src/pages/Excursions.jsx" className="hover:underline">
                  Excursions
                </a>
              </li>
              <li>
                <a href="src/pages/Transport.jsx" className="hover:underline">
                  Transport
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@travelagency.com</p>
            <p className="text-sm">Phone: +355 123 4567</p>
            <p className="text-sm">Address: Albania, Tirana</p>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-center space-x-4">
              <a
                href="https://www.facebook.com/nomadtravel2019/"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/nomad.travel.tours/?hl=en"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-gray-400 text-center">
          © 2024 Travel Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
