import React, { useState, useEffect, useRef } from 'react';
import { FaExchangeAlt } from "react-icons/fa";

const Topbar = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [fromQuery, setFromQuery] = useState('Delhi');
  const [toQuery, setToQuery] = useState('Mumbai');
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const fromRef = useRef(null);
  const toRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY; // Add your Geoapify API key here

  useEffect(() => {
    // Click outside handler to close suggestion boxes
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setShowFromSuggestions(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setShowToSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchSuggestions = async (query, isFrom) => {
    if (query.length < 2) {
      isFrom ? setFromSuggestions([]) : setToSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
          query
        )}&type=city&format=json&apiKey=${API_KEY}`
      );
      const data = await response.json();
      
      const suggestions = data.results.map(result => ({
        name: result.city || result.name,
        country: result.country
      }));

      if (isFrom) {
        setFromSuggestions(suggestions);
        setShowFromSuggestions(true);
      } else {
        setToSuggestions(suggestions);
        setShowToSuggestions(true);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleFromChange = (e) => {
    setFromQuery(e.target.value);
    fetchSuggestions(e.target.value, true);
  };

  const handleToChange = (e) => {
    setToQuery(e.target.value);
    fetchSuggestions(e.target.value, false);
  };

  const handleSuggestionClick = (suggestion, isFrom) => {
    if (isFrom) {
      setFromQuery(`${suggestion.name}, ${suggestion.country}`);
      setShowFromSuggestions(false);
    } else {
      setToQuery(`${suggestion.name}, ${suggestion.country}`);
      setShowToSuggestions(false);
    }
  };

  return (
    <div className="bg-blue-600 p-2 w-full">
      <div className="max-w-[80%] mx-auto">
        <div className="flex gap-4 mb-6">
          <label className="flex items-center text-white">
            <input
              type="radio"
              name="tripType"
              value="oneWay"
              checked={tripType === 'oneWay'}
              onChange={(e) => setTripType(e.target.value)}
              className="mr-2"
            />
            ONE WAY TRIP
          </label>
          <label className="flex items-center text-white">
            <input
              type="radio"
              name="tripType"
              value="roundTrip"
              checked={tripType === 'roundTrip'}
              onChange={(e) => setTripType(e.target.value)}
              className="mr-2"
            />
            ROUND TRIP
          </label>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="w-48 relative" ref={fromRef}>
            <label className="block text-white text-sm mb-1">FROM</label>
            <input
              type="text"
              value={fromQuery}
              onChange={handleFromChange}
              className="w-full p-2 rounded bg-[#1958b7] text-white"
            />
            {showFromSuggestions && fromSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                {fromSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    onClick={() => handleSuggestionClick(suggestion, true)}
                  >
                    {suggestion.name}, {suggestion.country}
                  </div>
                ))}
              </div>
            )}
          </div>
          <FaExchangeAlt className="text-white text-2xl mt-8" />
          <div className="w-48 relative" ref={toRef}>
            <label className="block text-white text-sm mb-1">TO</label>
            <input
              type="text"
              value={toQuery}
              onChange={handleToChange}
              className="w-full p-2 rounded bg-[#1958b7] text-white"
            />
            {showToSuggestions && toSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                {toSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    onClick={() => handleSuggestionClick(suggestion, false)}
                  >
                    {suggestion.name}, {suggestion.country}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-48">
            <label className="block text-white text-sm mb-1">DEPARTURE DATE</label>
            <div className="relative">
              <input
                type="date"
                defaultValue="28 Jan '25"
                className="w-full p-2 rounded pr-8 bg-[#1958b7] text-white"
              />
              <span className="absolute right-2 top-2 text-gray-500">📅</span>
            </div>
          </div>
          <div className="w-48">
            <label className="block text-white text-sm mb-1">RETURN DATE</label>
            <div className="relative">
              <input
                type="Date"
                defaultValue="Travel Dates"
                className="w-full p-2 rounded bg-[#4f87db] opacity-90 text-white pr-8"
                disabled
              />
              <span className="absolute right-2 top-2 text-white">📅</span>
            </div>
          </div>
          <div className="w-48">
            <label className="block text-white text-sm mb-1">PASSENGER & CLASS</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="1 Traveller(s), Economy"
                className="w-full p-2 rounded pr-8 bg-[#1958b7] text-white"
              />
              <span className="absolute right-2 top-2 text-gray-500">👥</span>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-4 py-2 h-fit mt-5 rounded font-medium text-sm text-nowrap">
            UPDATE SEARCH
          </button>
        </div>

        <p className='text-xs mb-1 text-[#b2d7fc] font-bold'>Fare Types</p>
        <div className="discounts flex gap-6 mb-6">
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2" />
            Student
          </label>
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2" />
            Senior Citizen
          </label>
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2" />
            Armed Forces
          </label>
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2" />
            Doctors & Nurses
          </label>
        </div>
      </div>
    </div>
  );
};

export default Topbar;