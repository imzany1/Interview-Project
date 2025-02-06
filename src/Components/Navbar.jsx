import React from "react";
import { FaSuitcase, FaUser } from "react-icons/fa";
import Airplane from "../assets/airplane.png";
import hotel from "../assets/hotel.png";
import train from "../assets/train.png";
import transport from "../assets/transport.png";
import bus from "../assets/bus.png";
import beach from "../assets/beach.png";
import currencyExchange from "../assets/currency-exchange.png";
import shield from "../assets/shield.png";


const Navbar = () => {
  return (
    <div className="Navbar flex flex-row justify-between items-center bg-gray-200 px-5 py-1">
      <div className="flex flex-row gap-4">
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={Airplane} alt="" />Flights
        </a>
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={hotel} alt="" />
          Hotels
        </a>
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={train} alt="" />
          Trains
        </a>
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={transport} alt="" />
          Cabs
        </a>
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={bus} alt="" />
          Bus
        </a>
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={beach} alt="" />
          Holiday
        </a>
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={currencyExchange} alt="" />
          Forex
        </a>
        <a className="flex flex-row gap-1 items-center" href="#">
          <img src={shield} alt="" />
          Insurance
        </a>
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-row items-start gap-1">
          <FaSuitcase size={25} />
          <a className="flex flex-col text-sm tracking-tight leading-2">
            <p className="text-xs text-gray-800">My trips</p>
            <p className="font-semibold">Manage Booking</p>
          </a>
        </div>
        <button className="Login flex flex-row items-center justify-center gap-1 px-2 py-1 rounded-lg border-2 border-blue-500 text-black text-sm">
          <FaUser size={20} />
          Login / Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
