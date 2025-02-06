import React, { useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";

const Topbar = () => {
  const [tripType, setTripType] = useState('oneWay');

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
          <div className="w-48">
            <label className="block text-white text-sm mb-1">FROM</label>
            <input
              type="text"
              defaultValue="Delhi"
              className="w-full p-2 rounded bg-[#1958b7] text-white"
            />
          </div>
          <FaExchangeAlt className="text-white text-2xl mt-8" />
          <div className="w-48">
            <label className="block text-white text-sm mb-1">TO</label>
            <input
              type="text"
              defaultValue="Mumbai"
              className="w-full p-2 rounded bg-[#1958b7] text-white"
            />
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
                className="w-full p-2 rounded bg-[#4f87db] opacity-90 text-white pr-8 "
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