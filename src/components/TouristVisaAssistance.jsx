import React from "react";

const TouristVisaAssistance = () => {
  const items = [
    {
      src: "https://placehold.co/200x100",
      description: "bento wide",
      size: "wide",
    },
    {
      src: "https://placehold.co/100x100",
      description: "bento small",
      size: "small",
    },
    {
      src: "https://placehold.co/100x300",
      description: "bento tall",
      size: "tall",
    },
    {
      src: "https://placehold.co/100x100",
      description: "bento small",
      size: "small",
    },

    {
      src: "https://placehold.co/300x300",
      description: "bento big",
      size: "big",
    },
    {
      src: "https://placehold.co/100x100",
      description: "bento small",
      size: "small",
    },
    {
      src: "https://placehold.co/200x100",
      description: "bento wide",
      size: "wide",
    },
  ];
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

export default TouristVisaAssistance;
