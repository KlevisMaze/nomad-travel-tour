/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const hotels = [
  {
    name: "Splendid Conference & Spa Resort",
    location: "Budva / Bečići",
    rating: 4,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "Palmon Bay Spa",
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
    name: "Lazure Hotel and Marinas",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
  },
  {
    name: "Splendid Conference & Spa Resort",
    location: "Budva / Bečići",
    rating: 4,
    imageUrl: "src/images/hotel1.jpg",
  },
  {
    name: "Palmon Bay Spa",
    location: "Herceg Novi",
    rating: 4,
    imageUrl: "src/images/hotel2.jpg",
  },
  {
    name: "One&Only Portonovi",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/hotel3.jpg",
  },
  {
    name: "Lazure Hotel and Marinas",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/hotel4.jpg",
  },
  // Add more hotel objects as needed
];

const Hotels = ({ limit }) => {
  // If 'limit' prop is provided, show only that many hotels; otherwise, show all hotels.
  const displayedHotels = limit ? hotels.slice(0, limit) : hotels;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedHotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Hotel</p>
              <h3 className="text-lg font-semibold">{hotel.name}</h3>
              <p className="text-sm text-gray-400">{hotel.location}</p>
              <div className="flex items-center mt-2">
                <span className="text-gray-500">⭐ {hotel.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
