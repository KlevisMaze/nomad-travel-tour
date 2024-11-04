/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

const RequestTourModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState("");
  const [persons, setPersons] = useState("");
  const [destination, setDestination] = useState("");

  const handleRequestTour = () => {
    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Tour requested!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl mb-4">Request a Tour</h3>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Days of Tour"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Number of Persons"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          onClick={handleRequestTour}
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Submit
        </button>
        <button onClick={onClose} className="mt-2 text-red-500 text-center">
          Cancel
        </button>
      </div>
    </div>
  );
};

// Define prop types
RequestTourModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RequestTourModal;
