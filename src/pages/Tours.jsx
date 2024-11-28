/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import image5 from "../images/image5.jpg";

const toursList = [
  {
    name: "Balkan Tour",
    location: "Albania, Kosova, North Macedonia",
    rating: 5,
    imageUrl: "src/images/image1.jpg",
    days: "11 days",
  },
  {
    name: "Mountain Adventure",
    location: "Korab",
    rating: 4,
    imageUrl: "src/images/image2.jpg",
    days: "4 days",
  },
  {
    name: "Beach Relaxation",
    location: "Gjipe",
    rating: 4,
    imageUrl: "src/images/image4.jpg",
    days: "4 days",
  },
  {
    name: "Koman Lake",
    location: "Lake Koman",
    rating: 5,
    imageUrl: "src/images/image3.jpg",
    days: "4 days",
  },
];

const Tours = () => (
  <div>
    {/* Hero Section */}
    <div className="relative">
      <img src={image5} alt="Image" className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Explore Our Tours</h1>
      </div>
    </div>

    {/* Tours List Section */}
    <div className="container mx-auto p-6 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toursList.map((tour, index) => (
          <Link
            to={`/tours/${encodeURIComponent(tour.name)}`}
            key={index}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={tour.imageUrl}
                alt={tour.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">Tour</p>
                <h3 className="text-lg font-semibold">{tour.name}</h3>
                <p className="text-sm text-gray-400">{tour.location}</p>
                <h2 className="text-sm text-gray-600">{tour.days}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500">⭐ {tour.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Tours;
