import React from "react";

const Hero = () => {
  const imgsrc = [
    {
      src: "https://placehold.co/1200x400",
      alt: "Hero Image 1",
    },
    {
      src: "https://placehold.co/1200x400",
      alt: "Hero Image 2",
    },
    {
      src: "https://placehold.co/1200x400",
      alt: "Hero Image 3",
    },
  ];
  return (
    <div className=" ">
      <div>
        {imgsrc.map((img, index) => {
          return (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-full h-[400px] object-cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
