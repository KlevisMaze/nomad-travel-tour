/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import RequestTourModal from "./../components/RequestTourModal";
import Hotels from "./Hotels";
import Tours from "./Tours";
import Excursions from "./Excursions";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Review from "../components/Reviews";

const slides = [
  {
    image: "src/images/image5.jpg",
    title: "TRANSFER SERVICE",
    description: "Safe. Limitless. Insurances included.",
    buttonText: "Learn More",
  },
  {
    image: "src/images/image5.jpg",
    title: "EXPLORE TOURS",
    description: "Discover amazing tours tailored for you.",
    buttonText: "Request a Tour",
  },
  {
    image: "src/images/image5.jpg",
    title: "HOTEL BOOKING",
    description: "Find the best hotels at unbeatable prices.",
    buttonText: "Book Now",
  },
  {
    image: "src/images/image5.jpg",
    title: "OUR EXCURSION",
    description: "Experience unforgettable of our adventures.",
    buttonText: "Get Started",
  },
];

const reviews = [
  {
    name: "Alice Johnson",
    profilePicture: "https://example.com/alice.jpg",
    rating: 5,
    text: "Amazing experience! Highly recommend to everyone!",
  },
  {
    name: "John Doe",
    profilePicture: "https://example.com/john.jpg",
    rating: 4,
    text: "Great service, beautiful tours. Will come back again!",
  },
  {
    name: "Mary Smith",
    profilePicture: "https://example.com/mary.jpg",
    rating: 5,
    text: "An unforgettable trip. Friendly staff and well organized.",
  },
  {
    name: "Alice Johnson",
    profilePicture: "https://example.com/alice.jpg",
    rating: 5,
    text: "Amazing experience! Highly recommend to everyone!",
  },
  {
    name: "John Doe",
    profilePicture: "https://example.com/john.jpg",
    rating: 4,
    text: "Great service, beautiful tours. Will come back again!",
  },
  {
    name: "Mary Smith",
    profilePicture: "https://example.com/mary.jpg",
    rating: 5,
    text: "An unforgettable trip. Friendly staff and well organized.",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRequestTourModalOpen, setIsRequestTourModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, description, buttonText } = slides[currentIndex];

  const openRequestTourModal = () => {
    setIsRequestTourModalOpen(true);
  };

  const closeRequestTourModal = () => {
    setIsRequestTourModalOpen(false);
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Slideshow Section */}
      <section className="relative w-full h-[100vh] hover:shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-8">{description}</p>
            <button
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold transition duration-300"
              onClick={openRequestTourModal}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Guaranteed Departures */}
          <div className="flex-1 p-8 bg-white rounded-lg shadow-lg text-center md:text-left mb-8 md:mb-0 md:mr-4 transition duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:text-red-600 shadow-green">
            <h2 className="text-4xl font-bold text-green-600 text-center mb-4 uppercase transition duration-300 transform hover:scale-105">
              Guaranteed Departures
            </h2>
            {/* <button
              onClick={() => navigate("/guaranteed-departures")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View Details
            </button> */}
          </div>

          {/* Private Tours */}
          <div className="flex-1 p-8 bg-white rounded-lg shadow-lg text-center md:text-left mb-8 md:mb-0 md:mr-4 transition duration-300 transform hover:shadow-2xl hover:-translate-y-2 hover:text-blue-600 shadow-green">
            <h2 className="text-4xl font-bold text-green-600 text-center mb-4 uppercase transition duration-300 transform hover:scale-105">
              Private Tours
            </h2>
            {/* <button
              onClick={() => navigate("/private-tours")}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Explore Options
            </button> */}
          </div>
        </div>
        {/* Request Tour Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={openRequestTourModal}
            className="px-20 py-8 rounded-lg shadow-lg md:text-left md:mb-0 md:mr-4 hover:shadow-2xl hover:-translate-y-2 hover:text-white shadow-green bg-yellow-500 hover:bg-orange-400 text-4xl font-semibold text-white text-center mb-4 uppercase transition duration-300 transform hover:scale-105"
          >
            Request a Tour
          </button>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="mt-8 space-y-16 shadow-2xl">
        {/* Hotels Section */}
        <section
          id="hotels"
          className="w-[90%] mx-auto my-8 px-4 py-5 shadow-2xl"
        >
          <div className="flex justify-between px-2 py-2 items-center rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Top Hotels</h2>
            <button
              onClick={() => navigate("hotels")}
              className="text-3xl rounded-sm font-semibold text-red-500 hover:underline"
            >
              View All
            </button>
          </div>
          <Hotels limit={4} />
        </section>

        {/* Tours Section */}
        <section
          id="tours"
          className="w-[90%] mx-auto my-8 px-4 py-5 shadow-2xl"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold mb-4">Top Tours</h2>
            <button
              onClick={() => navigate("tours")}
              className="text-3xl rounded-sm font-semibold text-red-500 hover:underline"
            >
              View All
            </button>
          </div>
          <Tours limit={4} />
        </section>

        {/* Excursions Section */}
        <section id="excursions" className="container mx-auto my-8">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">Top Excursions</h2>
            <button
              onClick={() => navigate("/excursions")}
              className="text-3xl font-semibold text-red-500 hover:underline"
            >
              View All
            </button>
          </div>
          <Excursions limit={4} />
        </section>
        {/* Reviews Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
            <div className="relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
              >
                ◀
              </button>

              {/* Reviews Container */}
              <div className="overflow-hidden w-full max-w-3xl">
                <div
                  className="flex transition-transform duration-500"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                    width: `${(reviews.length / 3) * 100}%`,
                  }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="w-1/3 px-4">
                      <Review review={review} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
              >
                ▶
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Request Tour Modal
      {isRequestTourModalOpen && (
        <RequestTourModal onClose={closeRequestTourModal} />
      )} */}
      {/* Request Tour Modal */}
      <RequestTourModal
        isOpen={isRequestTourModalOpen} // Pass `isOpen` prop
        onClose={closeRequestTourModal} // Pass `onClose` function
      />
    </div>
  );
}

export default Home;
