/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing images for tours
import image5 from "../images/image5.jpg";

// Tours list
const initialToursList = [
  {
    name: "Balkan Tour",
    location: "Albania, Kosova, North Macedonia",
    rating: 5,
    imageUrl: "/images/tours/apolonia1.jpg",
    days: "11 days",
  },
  {
    name: "Best of Albania in four days",
    location: "Tirana, Kruja, Belsh, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: "/images/tours/berati1.jpg",
    days: "4 days",
  },
  {
    name: "Classical Highlights of Albania in seven days",
    location:
      "Bunk Art 1, Kruja, Shkodra, Durres, Berat, Apollonia, Zvernec, Vlora, Gjirokastra, Bunk Art 2",
    rating: 5,
    imageUrl: "/images/tours/durres1.jpg",
    days: "7 days",
  },
  {
    name: "Highlights of Albania in five days",
    location: "Tirana, Durres, Belsh, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: "/images/tours/gjirokastra1.jpg",
    days: "5 days",
  },
  {
    name: "History highlights of Albania and culture in six days",
    location: "Tirana, Kruja, Shkodra, Durres, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: "/images/tours/saranda2.jpg",
    days: "6 days",
  },
  {
    name: "Treasures of Albania in eight days",
    location: "Tirana, Kruja, Shkodra, Durres, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: "/images/tours/vlora3.jpg",
    days: "8 days",
  },
];

const Tours = () => {
  const [tours, setTours] = useState(initialToursList);

  // Sort tours by days (ascending order)
  const sortToursByDaysAsc = () => {
    const sortedTours = [...tours].sort(
      (a, b) => parseInt(a.days) - parseInt(b.days)
    );
    setTours(sortedTours);
  };

  // Sort tours by days (descending order)
  const sortToursByDaysDesc = () => {
    const sortedTours = [...tours].sort(
      (a, b) => parseInt(b.days) - parseInt(a.days)
    );
    setTours(sortedTours);
  };

  return (
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

      {/* Sort Buttons Section */}
      <div className="container mx-auto p-6 mt-4 flex justify-between">
        <button
          onClick={sortToursByDaysAsc}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition"
        >
          Sort by Days (Small to Large)
        </button>
        <button
          onClick={sortToursByDaysDesc}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-700 transition"
        >
          Sort by Days (Large to Small)
        </button>
      </div>

      {/* Tours List Section */}
      <div className="container mx-auto p-6 mt-8">
        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
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
};

export default Tours;
