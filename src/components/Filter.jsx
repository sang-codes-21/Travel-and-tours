import React from "react";
import {
  Destinations,
  Activities,
  TripTypes,
  Difiiculties,
} from "../data/destination.js";
import Range from "./Range.jsx";
const Filter = () => {
  return (
    <div>
      <h1 className="font-bold ">Filter By</h1>
      <hr />
      <div>
        <h2 className="font-semibold mt-4">Destinations</h2>
        {Destinations.map((item, index) => (
          <label
            key={index}
            className="flex items-center  hover:cursor-pointer"
          >
            <input
              type="checkbox"
              className="mr-2 w-5 h-5 accent-black hover:shadow-lg hover:scale-110 transition-shadow duration-200"
            />
            {item}
          </label>
        ))}
      </div>
      <div className="mt-4">
        <Range />
      </div>
      <div className="mt-6">
        <h1>Activities</h1>
        {Activities.map((item) => (
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 h-5 w-5" />
            {item}
          </label>
        ))}
      </div>

      <div className="mt-4">
        <h1>Trip Types</h1>
        {TripTypes.map((items) => (
          <label className="flex items-center">
            <input type="checkbox" className=" mr-2 h-5 w-5" />
            {items}
          </label>
        ))}
      </div>
      <div className="mt-4">
        <h1>Difficulties</h1>
        {Difiiculties.map((items) => (
          <label className="flex items-center ">
            <input type="checkbox" className="mr-2 h-5 w-5"></input>
            {items}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
