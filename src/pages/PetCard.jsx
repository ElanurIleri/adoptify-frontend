import React from "react";

const PetCard = ({ name, type, age }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center transform hover:scale-105 hover:shadow-lg transition duration-300">
      {/* Pet Image Placeholder */}
      <div className="w-20 h-20 bg-gray-200  mx-auto mb-4 flex items-center justify-center">
        <span className="text-sm text-gray-500">Image</span>
      </div>

      {/* Pet Details */}
      <h2 className="text-xl font-semibold text-blue-500">{name}</h2>
      <p className="text-gray-700">Type: {type}</p>
      <p className="text-gray-700">Age: {age}</p>

      {/* Adopt Button */}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Adopt
      </button>
    </div>
  );
};

export default PetCard;
