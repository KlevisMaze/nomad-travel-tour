/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Review = ({ review }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
      <div className="flex items-center mb-4">
        <img
          src={review.profilePicture}
          alt={`${review.name}'s profile`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{review.name}</h3>
          <div className="flex">
            {Array(review.rating)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700">{review.text}</p>
    </div>
  );
};

// Define PropTypes for the Review component
Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
