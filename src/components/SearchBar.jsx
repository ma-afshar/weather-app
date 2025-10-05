import React from "react";

const SearchBar = ({ city, setCity, fetchWeather, isNight }) => {
  return (
    <div className="flex mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className={`p-2 rounded-l border w-64 focus:outline-none ${
          isNight
            ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
            : "bg-white text-gray-900 border-gray-300 placeholder-gray-500"
        }`}
      />
      <button
        onClick={fetchWeather}
        className={`px-4 rounded-r transition ${
          isNight
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
