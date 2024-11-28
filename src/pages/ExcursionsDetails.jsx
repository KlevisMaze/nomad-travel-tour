/* eslint-disable no-unused-vars */
// ExcursionDetails.js
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const excursionsList = [
  {
    name: "Splendid Conference",
    location: "Budva / Bečići",
    rating: 4,
    imageUrl: "src/images/image5.jpg",
    description:
      "A luxurious hotel with a stunning view and top-notch services.",
  },
  {
    name: "Bay Spa",
    location: "Herceg Novi",
    rating: 4,
    imageUrl: "src/images/image5.jpg",
    description:
      "Relax and rejuvenate at the Bay Spa, your sanctuary by the sea.",
  },
  {
    name: "One&Only Portonovi",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
    description: "Experience exclusivity and unparalleled luxury at Portonovi.",
  },
  {
    name: "Lazure hotel and marinas",
    location: "Herceg Novi",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
    description: "A serene getaway with exquisite marina views and amenities.",
  },
];

const ExcursionDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const excursion = excursionsList.find(
    (excursion) => excursion.name === decodeURIComponent(name)
  );

  if (!excursion) {
    return <p>Excursion not found!</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition duration-300"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 transform group-hover:-translate-x-2 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="absolute -top-1 -left-1 w-10 h-10 bg-blue-100 rounded-full group-hover:scale-125 opacity-50 transition-transform duration-500"></div>
        </div>
        <span className="text-lg text-center font-semibold group-hover:underline">
          Back to Excursions
        </span>
      </button>

      {/* Excursion Details */}
      <img
        src={excursion.imageUrl}
        alt={excursion.name}
        className="w-full h-64 object-cover rounded-lg mt-4"
      />
      <h1 className="text-3xl font-bold mt-4">{excursion.name}</h1>
      <p className="text-lg text-gray-600 mt-2">{excursion.location}</p>
      <p className="text-gray-700 mt-4">{excursion.description}</p>
      <div className="flex items-center mt-4">
        <span className="text-gray-500">⭐ {excursion.rating}</span>
      </div>

      {/* Email and WhatsApp Buttons */}
      <div className="mt-8 flex justify-between">
        <a
          href={`mailto:example@example.com?subject=Inquiry about ${excursion.name}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Email
        </a>
        <a
          href={`https://wa.me/1234567890?text=I'm%20interested%20in%20${encodeURIComponent(
            excursion.name
          )}`}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ExcursionDetails;
