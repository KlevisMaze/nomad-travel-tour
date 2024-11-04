/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Tours.js
import React from "react";

const toursList = [
  {
    name: "Theth-Valbone",
    location: "Theth",
    rating: 5,
    imageUrl: "src/images/image1.jpg",
    days: "4 days",
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
  {
    name: "Theth-Valbone",
    location: "Theth",
    rating: 5,
    imageUrl: "src/images/image1.jpg",
    days: "4 days",
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

const Tours = ({ limit }) => {
  const displayedTourList = limit ? toursList.slice(0, limit) : toursList;
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedTourList.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
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
        ))}
      </div>
    </div>
  );
};

export default Tours;
