import React from "react";
import { items } from "../../data/visaassistance.js";
const VisaAssistance = () => {
  return (
    <div className="h-auto w-full bg-gray-100 md:auto-rows-[300px] grid grid-cols-5 gap-1 md:gap-4 p-10 ">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${item.size === "small" ? "col-span-1 row-span-1" : ""} ${
            item.size === "wide" ? "col-span-2 row-span-1" : ""
          } ${item.size === "tall" ? "col-span-1 row-span-2" : ""} ${
            item.size === "big" ? "col-span-3 row-span-2" : ""
          } overflow-hidden rounded-lg  `}
        >
          <img
            src={item.src}
            alt={item.description}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default VisaAssistance;
