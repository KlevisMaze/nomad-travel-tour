/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Sample tours data
const toursList = [
  {
    name: "Balkan Tour",
    location: "Albania, Kosova, North Macedonia",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
    description:
      "Explore Montenegro's stunning landscapes and historic landmarks with our guided tours.",
    details: [
      {
        day: 1,
        title: "Airport transfer. Durres city tour & Roman Amphitheatre",
        description:
          "Welcome to Albania. Meet and greet at Tirana airport and transfer to Durres (40 minutes). Start with the Amphitheater of Durrës, one of the largest Roman constructions in the region. Explore the pedestrian street Vollga and enjoy the view of the sea. Overnight in Durres.",
      },
      {
        day: 2,
        title: "Prizren city tour & Prishtina city tour",
        description:
          "After breakfast, drive to Prizren in Kosova, known for its charming old town, cultural heritage, and gastronomic delights. Then visit Prishtina's Imperial Mosque and iconic National Library. Overnight in Prishtina.",
      },
      {
        day: 3,
        title: "Skopje city tour",
        description:
          "Drive to Skopje, the capital of North Macedonia. Visit the Memorial Birthplace of Mother Teresa, the Old Bazaar, and other key sites. Overnight in Ohrid.",
      },
      {
        day: 4,
        title: "Ohrid city tour & Struga city tour",
        description:
          "Explore Ohrid's historical sites, including St. Clement of Ohrid square and the Ancient Theatre. Then visit Struga, a picturesque town by Lake Ohrid. Drive back to Albania and overnight in Tirana.",
      },
      {
        day: 5,
        title: "Apollonia Archaeological Park & Vlora",
        description:
          "Visit the ancient city of Apollonia and explore Vlora, a seaside city with historical significance. Overnight in Vlore.",
      },
      {
        day: 6,
        title: "Via Llogara National Park & Albanian Riviera",
        description:
          "Drive through the Llogara National Park with stunning views of the Ionian Sea. Visit Porto Palermo Castle and continue to Saranda. Overnight in Saranda.",
      },
      {
        day: 7,
        title: "Butrint & Ksamil Beach",
        description:
          "Discover the ancient city of Butrint, a UNESCO World Heritage Site, and enjoy leisure time at Ksamil Beach. Overnight in Saranda.",
      },
      {
        day: 8,
        title: "Blue Eye & Gjirokaster city tour",
        description:
          "Visit the Blue Eye, a mesmerizing natural spring, and explore Gjirokastra, a UNESCO World Heritage Site. Overnight in Gjirokastra.",
      },
      {
        day: 9,
        title: "Berat city tour",
        description:
          "Drive to Berat, known for its historical castle and Onufri Iconographic Museum. Continue to Tirana for an overnight stay.",
      },
      {
        day: 10,
        title: "Tirana & Kruja city tour",
        description:
          "Explore Tirana's main landmarks and visit Kruja, home of Albania's national hero Skanderbeg. Return to Tirana for an overnight stay.",
      },
      {
        day: 11,
        title: "Airport transfer",
        description: "Transfer to the airport. End of services.",
      },
    ],
  },
  {
    name: "Adriatic Coastline",
    location: "Bar / Ulcinj",
    rating: 4,
    imageUrl: "src/images/tour2.jpg",
    description:
      "Discover the beauty of the Adriatic Coastline with picturesque beaches and cultural treasures.",
  },
  {
    name: "Durmitor Adventure",
    location: "Žabljak",
    rating: 5,
    imageUrl: "src/images/tour3.jpg",
    description:
      "Embark on a thrilling adventure in the Durmitor National Park with breathtaking views.",
  },
];

const TourDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Do not copy the text

  useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();
    const disableCopy = (event) => event.preventDefault();

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableCopy);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
    };
  }, []);

  const tour = toursList.find((tour) => tour.name === decodeURIComponent(name));

  // Handle case when tour is not found
  if (!tour) {
    return <p>Tour not found!</p>;
  }

  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
        {/* Tour Details */}
        <img
          src={tour.imageUrl}
          alt={tour.name}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />
        <h1 className="text-3xl font-bold mt-4 text-center">{tour.name}</h1>
        <p className="text-lg text-gray-600 mt-2 text-center">
          {tour.location}
        </p>
        <p className="text-gray-700 mt-4 text-center">{tour.description}</p>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-500">⭐ {tour.rating}</span>
        </div>

        {/* Itinerary Section */}
        {tour.details && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Itinerary</h2>
            <ul className="space-y-6">
              {tour.details.map((detail) => (
                <li
                  key={detail.day}
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-semibold">
                    Day {detail.day}: {detail.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{detail.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Email, Back Arrow, and WhatsApp Buttons */}
        <div className="mt-8 flex items-center justify-between">
          <a
            href={`mailto:example@example.com?subject=Inquiry about ${tour.name}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Email
          </a>
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
            <span className="text-lg font-semibold group-hover:underline">
              Back to Tours
            </span>
          </button>
          <a
            href={`https://wa.me/1234567890?text=I'm%20interested%20in%20${encodeURIComponent(
              tour.name
            )}`}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
