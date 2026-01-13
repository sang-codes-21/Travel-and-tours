import { act, useState } from "react";
import { imgsrc, holidayimgsrc } from "../../data/holidaysData.js";
import Button from "../ui/Button";
const HolidayType = () => {
  const [isActive, setIsActive] = useState(0);
  const [isHolidayActive, setIsHolidayActive] = useState(0);

  return (
    <div className="w-full h-full py-10 px-10 lg:px-40 text-lg">
      <h1 className="mb-6">HolidayType</h1>

      <div className="flex max-w-7xl mx-auto gap-8 flex-col items-center md:flex-row ">
        {imgsrc.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => setIsActive(index)}
            className={`group relative
              overflow-hidden rounded-xl shadow-lg cursor-pointer
              transition-[width] duration-200 ease-in-out
              ${
                isActive === index
                  ? "sm:h-[300px] md:h-[600px] w-[240px] md:w-[500px]"
                  : "h-[150px] w-[240px] md:h-[600px] w-[240px] md:w-[350px]"
              }
            `}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div
              className={` h-full w-full flex justify-center items-center absolute bottom-0 left-0 
                w-full opacity-0 bg-black/20 text-white text-2xl font-semibold
                  transition-all duration-500 ease-out

    group-hover:opacity-100

  
            ${
              isActive === index
                ? "opacity-100 translate-y-0 sm:h-[300px] md:h-[600px] w-[240px] md:w-[500px]"
                : "h-[150px] w-[240px] md:h-[600px] w-[240px] md:w-[350px]"
            } `}
            >
              <div
                className={`flex flex-col justify-center items-center 
      absolute 
     gap-3
      opacity-0 translate-y-full
      transition-all duration-500 ease-in-out
      group-hover:opacity-100 group-hover:translate-y-0
     ${
       isHolidayActive === index
         ? "opacity-100 translate-y-full md:w-[300px] h-[400px] md:h-[550px] rounded-3xl"
         : "md:w-[100px] h-[100px] md:h-[550px] rounded-full"
     } `}
              >
                <p>{img.data}</p>
                <Button
                  variant="primary"
                  className="text-base px-6 py-1 h-10 whitespace-nowrap"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" max-w-7xl mx-auto py-10 flex flex-col lg:flex-row justify-center items-center text-lg">
        <div className="w-auto ">
          Discover Weekly Travelling Hot Deals On Select Expedition Departures
          Curated destinations and tours that capture the true essence of
          location, ensuring you experience. Our attraction pass save you more.
          Explore More
        </div>
        <div className="  lg:w-3/4 flex  items-center">
          <div className="flex flex-col md:flex-row gap-4">
            {holidayimgsrc.map((img, index) => (
              <div
                key={index}
                className={`relative   overflow-hidden
                  transition-[width] duration-300 ease-in-out 
                ${
                  isHolidayActive === index
                    ? "md:w-[300px] h-[400px] md:h-[550px] rounded-3xl"
                    : "md:w-[100px] h-[100px] md:h-[550px] rounded-full"
                } `}
                onMouseEnter={() => setIsHolidayActive(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-3xl shadow-md"
                />
                <div
                  className={`flex flex-col absolute bg-black/50 opacity-0 transition-opacity duration-900 ease-in-out
                  group-hover:opacity-100 w-full h-full top-0 left-0 flex
                  justify-center items-start p-10 text-white ${
                    isHolidayActive === index ? "opacity-100" : "opacity-0"
                  } `}
                >
                  <p className="text-lg font-semibold">{img.location}</p>
                  <h2 className="text-2xl font-semibold">{img.location}</h2>

                  <div className="flex gap-6 ">
                    <p>Duration: {img.duration}</p>
                    <p>Difficulty: {img.difficulty}</p>
                  </div>

                  <p>Activity: {img.activity}</p>
                  <p>Price: {img.price}</p>
                  <Button
                    variant="secondary"
                    className="text-base px-6 py-1 h-10"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayType;
