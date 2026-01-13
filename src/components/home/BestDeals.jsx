import React from "react";
import { deals } from "../../data/deal.js";
const BestDeals = () => {
  return (
    <div className="bg-blue-100 md:px-40 h-full p-10 mt-20">
      <h1 className="text-2xl text-center">
        BestDeals for International Flights
      </h1>
      <div className=" max-w-7xl mx-auto mt-10 grid md:grid-cols-2 gap-4 md:gap-8">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="transition hover:scale-105 flex justify-between bg-white gap-2  p-4 md:px-10 items-center rounded-3xl shadow-lg"
          >
            <img
              src={deal.src}
              alt={deal.alt}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full"
            />
            <h2>{deal.title}</h2>
            <p>{deal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
