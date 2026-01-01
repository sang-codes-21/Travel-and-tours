import { useState } from "react";

const HolidayType = () => {
  const [isActive, setIsActive] = useState(0);

  const imgsrc = [
    { src: "https://placehold.co/400x500", alt: "Holiday Type 1" },
    { src: "https://placehold.co/400x500", alt: "Holiday Type 2" },
    { src: "https://placehold.co/400x500", alt: "Holiday Type 3" },
  ];

  return (
    <div className="w-full py-10 px-40 text-lg">
      <h1 className="mb-6">HolidayType</h1>

      <div className="flex gap-8">
        {imgsrc.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => setIsActive(index)}
            className={`
              overflow-hidden rounded-xl shadow-lg cursor-pointer
              transition-[width] duration-500 ease-in-out
              ${isActive === index ? "w-[500px]" : "w-[300px]"}
            `}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolidayType;
