import React from "react";

const BestDeals = () => {
  const deals = [
    {
      src: "https://placehold.co/100x100",
      alt: "Deal 1",
      title: "Kathmandu to Pokhara",
      price: "₨. 6000",
    },
    {
      src: "https://placehold.co/100x100",
      alt: "Deal 2",
      title: "Kathmandu to India",
      price: "₨. 8000",
    },
    {
      src: "https://placehold.co/100x100",
      alt: "Deal 3",
      title: "Kathmandu to America",
      price: "₨. 15000",
    },
    {
      src: "https://placehold.co/100x100",
      alt: "Deal 4",
      title: "Kathmandu to Tokyo",
      price: "₨. 20000",
    },
  ];
  return (
    <div className="bg-blue-100 md:px-40 h-full p-10 mt-20">
      <h1 className="text-2xl text-center">
        BestDeals for International Flights
      </h1>
      <div className="w-full h-auto mt-10 grid md:grid-cols-2 gap-4 md:gap-8">
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
