/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar

// Sample tours data (assuming images are in public folder)
const toursList = [
  {
    name: "Theth-Valbone",
    location: "Theth",
    rating: 5,
    imageUrl: "/images/image1.jpg",
    days: "4 days",
    description:
      "Experience the breathtaking beauty of Theth and Valbona valleys.",
  },
  {
    name: "Mountain Adventure",
    location: "Korab",
    rating: 4,
    imageUrl: "/images/image2.jpg",
    days: "4 days",
    description: "An adventurous trek to the highest peak in Albania.",
  },
  {
    name: "Beach Relaxation",
    location: "Gjipe",
    rating: 4,
    imageUrl: "/images/image4.jpg",
    days: "4 days",
    description: "Relax and unwind on the pristine beaches of Gjipe.",
  },
  {
    name: "Koman Lake",
    location: "Lake Koman",
    rating: 5,
    imageUrl: "/images/image3.jpg",
    days: "4 days",
    description:
      "Explore the serene waters of Koman Lake and its surroundings.",
  },
];

const TourDetails = () => {
  const { tourName } = useParams();
  const tour = toursList.find(
    (tour) => tour.name === decodeURIComponent(tourName)
  );

  if (!tour) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-red-500">Tour not found!</h2>
        <p className="text-gray-600 mt-2">Please check the URL or go back.</p>
      </div>
    );
  }

  // Generate stars dynamically based on rating
  const stars = Array.from({ length: tour.rating }, (_, i) => "⭐").join("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Tour Image */}
      <div>
        <img
          src={tour.imageUrl}
          alt={tour.name}
          className="w-full h-96 object-cover rounded-b-lg"
        />
      </div>

      {/* Tour Details Section */}
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{tour.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{tour.location}</p>
        <div className="flex items-center mt-2">
          <p className="text-yellow-500 text-lg">{stars}</p>
        </div>
        <p className="text-gray-800 mt-4">{tour.description}</p>
        <p className="text-gray-500 mt-2">Duration: {tour.days}</p>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 mt-12">
        <div className="text-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TourDetails;
