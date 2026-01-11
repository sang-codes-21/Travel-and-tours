import React from "react";
import Range from "../components/Range.jsx";
import Card from "../components/ui/Card.jsx";
import { places } from "../data/adventure.js";
import Filter from "../components/Filter.jsx";
const Adventure = () => {
  return (
    <>
      <h1 className="text-4xl bg-gray-200 font-semibold p-8">Adventure</h1>
      <div className="max-w-7xl mx-auto  py-10 flex flex-col md:flex-row text-xl">
        <div className="mt-4 p-4  md:w-[25%] w-full">
          <Filter />
        </div>
        <div className=" w-full flex flex-col">
          {places.map((place, id) => (
            <div className=" p-2 " key={place.id}>
              <Card
                id={place.id}
                TourName={place.name}
                image={place.image}
                description={place.description}
                country={place.country}
                difficulty={place.difficulty}
                person={place.person}
                duration={place.duration}
                price={place.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Adventure;
