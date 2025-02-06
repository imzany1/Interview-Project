import React from "react";
import { CiAirportSign1 } from "react-icons/ci";
import FlightData from "./FlightData";
import indigo from "../assets/Indigo.png";


const Hero = () => {
  const flights = [
    {
      id: 1,
      airline: "Indigo",
      icon: {indigo},
      from: "Delhi",
      to: "Mumbai",
      fare: 2000,
    },
    {
      id: 1,
      airline: "Indigo",
      icon: {indigo},
      from: "Delhi",
      to: "Mumbai",
      fare: 2000,
    },
    {
      id: 1,
      airline: "Indigo",
      icon: {indigo},
      from: "Delhi",
      to: "Mumbai",
      fare: 2000,
    },
    {
      id: 1,
      airline: "Indigo",
      icon: {indigo},
      from: "Delhi",
      to: "Mumbai",
      fare: 2000,
    },
    {
      id: 1,
      airline: "Indigo",
      icon: {indigo},
      from: "Delhi",
      to: "Mumbai",
      fare: 2000,
    },
  ];

  return (
    <div className="hero bg-zinc-200 w-screen flex justify-center">
      <div className="w-[80vw]">
        <div className="container w-full mx-auto text-center py-2 h-fit mt-2 rounded-lg drop-shadow-md bg-white ">
          <p className=" font-semibold capitalize text-blue-800 tracking-tight">
            Home &#8594; Flights Booking &#8594;{" "}
            <span className="text-[#555]">Go first airlines</span>
          </p>
        </div>
        <div className="container w-full flex gap-2 mt-2">
          <div className="left w-[20%] flex flex-col justify-around gap-2">
            <div className="advert rounded-lg overflow-hidden pb-2 flex flex-col bg-white drop-shadow-md mt-2 uppercase">
              <img src="src/assets/Flight image.png" alt="" />
              <p className="text-xs px-2">tap to get 30% discount</p>
              <p className="text-xs pt-6 px-2">
                Valid till: Limited Offer Period
              </p>
              <button className="bg-orange-500 p-2 rounded-md self-center w-fit mt-2">
                View Details
              </button>
            </div>
            <div className="bg-white rounded-lg overflow-hidden drop-shadow-md py-2">
              <div className="flex px-2">
                <CiAirportSign1 className="text-5xl text-zinc-700" />
                <p>Go First Contact Information</p>
              </div>
              <div className="flex flex-col gap-2 px-2 pt-4">
                <p className="text-xs">Airline Email : Email@gmail.com</p>
                <p className="text-xs">Phone Number : 1234567890</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded-lg overflow-hidden drop-shadow-md p-2">
              <h1 className="font-semibold">Domestic Airlines</h1>
              <a href="#" className="text-blue-500">
                Indigo Airlines
              </a>
              <a href="#" className="text-blue-500">
                SpiceJet Airlines
              </a>
              <a href="#" className="text-blue-500">
                Air Asia
              </a>
              <a href="#" className="text-blue-500">
                Air India
              </a>
            </div>
          </div>
          <div className="right w-[80%] py-2">
            <div className="bg-white rounded-lg overflow-hidden drop-shadow-md py-2">
              <h1 className="text-2xl font-semibold px-3">Go First Flights</h1>
              <p className="px-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                minima autem ipsum ipsa id sunt expedita tempora! Ab dolor sit
                aliquid, amet laborum eum deleniti excepturi illo eveniet!
                Veniam, molestiae! Animi architecto iste ipsum, iure, obcaecati
                minima nostrum, fugiat expedita libero facere veniam maxime
                nisi. Voluptates dolorum ipsam ducimus minus eveniet, nam et
                corporis voluptatum rerum. Iusto quisquam voluptatem quidem?
              </p>
            </div>
            <div className="Flights">
              <h1 className="capitalize pt-3 px-4 font-semibold text-2xl">
                Go first airlines popular domestic flights
              </h1>
              <div className="flex w-full justify-between px-4 py-2">
                <p className="pl-16">Airline</p>
                <p>From</p>
                <p>To</p>
                <p>Cheapest Fare</p>
              </div>
              <div>
                {flights.map((flight) => (
                  <FlightData
                    key={flight.id}
                    icon={flight.icon}
                    airline={flight.airline}
                    from={flight.from}
                    to={flight.to}
                    fare={flight.fare}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
