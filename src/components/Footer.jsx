/* eslint-disable no-unused-vars */
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description in a Row */}
          <div className="flex flex-col items-center text-center space-y-4 md:col-span-1">
            <img src="src/images/nomadlogo.png" alt="Logo" className="w-20" />
            <p className="text-sm">
              Providing exceptional travel and tour experiences to explore the
              world with ease and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-m">
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
          <div className="text-center space-y-4">
            <h3 className="font-bold mb-4">Contact Us</h3>

            <div className="flex items-center justify-center space-x-2 text-sm">
              <FaEnvelope className="text-orange-500" />
              <span>info@travelagency.com</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm">
              <FaPhoneAlt className="text-orange-500" />
              <span>+355 123 4567</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Address: Albania, Tirana</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <FaGlobe className="text-orange-500" />
              <span>www.nomadtraveltours.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/nomadtravel2019/"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/nomad.travel.tours/?hl=en"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-gray-400 text-center">
          © 2024{" "}
          <span className="text-orange-500">Nomad Travel & Tours Agency</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
