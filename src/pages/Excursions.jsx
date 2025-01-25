/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Excursions.js
import React from "react";
import image5 from "../images/image5.jpg";
import { Link } from "react-router-dom";

const excursionsList = [
  {
    name: "Splendid Conference",
    location: "Budva / Bečići",
    rating: 4,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "Bay Spa",
    location: "Herceg Novi",
    rating: 4,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "One&Only Portonovi",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "Lazure hotel and marinas",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "Splendid Conference",
    location: "Budva / Bečići",
    rating: 4,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "Bay Spa",
    location: "Herceg Novi",
    rating: 4,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "One&Only Portonovi",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "Lazure hotel and marinas",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
  },
];

const Excursions = ({ limit }) => {
  const displayedExcursions = limit
    ? excursionsList.slice(0, limit)
    : excursionsList;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={image5}
          alt="Hero Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Excursions</h1>
        </div>
      </div>

      {/* Excursions List Section */}
      <div className="container mx-auto p-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {excursionsList.map((excursion, index) => (
            <Link
              to={`/excursions/${encodeURIComponent(excursion.name)}`}
              key={index}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={excursion.imageUrl}
                  alt={excursion.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">Excursion</p>
                  <h3 className="text-lg font-semibold">{excursion.name}</h3>
                  <p className="text-sm text-gray-400">{excursion.location}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-500">⭐ {excursion.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excursions;
