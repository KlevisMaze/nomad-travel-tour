/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// Importing images for tours
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

// Tours list
const toursList = [
  {
    name: "Balkan Tour",
    location: "Albania, Kosova, North Macedonia",
    rating: 5,
    imageUrl: image1,
    days: "11 days",
  },
  {
    name: "Best of Albania in four days",
    location: "Tirana, Kruja, Belsh, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: image2,
    days: "4 days",
  },
  {
    name: "Classical Highlights of Albania in seven days",
    location:
      "Bunk Art 1, Kruja, Shkodra, Durres, Berat, Apollonia, Zvernec, Vlora, Gjirokastra, Bunk Art 2",
    rating: 5,
    imageUrl: image4,
    days: "7 days",
  },
  {
    name: "Highlights of Albania in five days",
    location: "Tirana, Durres, Belsh, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: image3,
    days: "5 days",
  },
  {
    name: "History highlights of Albania and culture in six days",
    location: "Tirana, Kruja, Shkodra, Durres, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: image3,
    days: "6 days",
  },
  {
    name: "Treasures of Albania in eight days",
    location: "Tirana, Kruja, Shkodra, Durres, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: image3,
    days: "8 days",
  },
];

const Tours = () => (
  <div>
    {/* Hero Section */}
    <div className="relative">
      <img
        src={image5}
        alt="Explore Our Tours"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Explore Our Tours</h1>
      </div>
    </div>

    {/* Tours List Section */}
    <div className="container mx-auto p-6 mt-8">
      {/* First Row with 3 Tours */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {toursList.slice(0, 3).map((tour, index) => (
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

      {/* Second Row with 2 Tours */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {toursList.slice(3).map((tour, index) => (
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
