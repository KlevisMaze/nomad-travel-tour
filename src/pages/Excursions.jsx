/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Excursions.js
import React from "react";

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
    imageUrl: "src/images/excursion4.jpg",
  },
];

const Excursions = ({ limit }) => {
  const displayedExcursionList = limit
    ? excursionsList.slice(0, limit)
    : excursionsList;
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedExcursionList.map((excursion, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
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
        ))}
      </div>
    </div>
  );
};

export default Excursions;
