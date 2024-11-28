/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import image5 from "../images/image5.jpg";
import { Link } from "react-router-dom";

const HotelList = [
  {
    name: "Splendid Conference & Spa Resort",
    location: "Budva / Bečići",
    rating: 4,
    imageUrl: "src/images/image1.jpg",
  },
  {
    name: "Palmon Bay Spa",
    location: "Herceg Novi",
    rating: 4,
    imageUrl: "src/images/image2.jpg",
  },
  {
    name: "One&Only Portonovi",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image3.jpg",
  },
  {
    name: "Lazure Hotel and Marinas",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image4.jpg",
  },
  // Add more hotels as needed
];

const Hotels = () => (
  <div>
    {/* Hero Section */}
    <div className="relative">
      <img src={image5} alt="Image" className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Explore Our Hotels</h1>
      </div>
    </div>

    {/* hotels List Section */}
    <div className="container mx-auto p-6 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {HotelList.map((hotel, index) => (
          <Link
            to={`/hotels/${encodeURIComponent(hotel.name)}`}
            key={index}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={hotel.imageUrl}
                alt={hotel.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">HOTEL</p>
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <p className="text-sm text-gray-400">{hotel.location}</p>
                <h2 className="text-sm text-gray-600">{hotel.days}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500">⭐ {hotel.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Hotels;
