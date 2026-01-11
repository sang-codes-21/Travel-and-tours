import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  const imgsrc = [
    {
      src: "https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682907.jpg?semt=ais_hybrid&w=740&q=80",
      alt: "Hero Image 1",
    },
    {
      src: "https://www.onenationtravel.com/en/wp-content/uploads/2023/04/cappadocia22.jpg.webp",
      alt: "Hero Image 2",
    },
    {
      src: "https://wunwun.com/wp-content/uploads/2024/10/travel-insurance-solo-travel-holidays-header.jpg",
      alt: "Hero Image 3",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="h-[500px] md:h-[600px] md:h-[600px] w-full "
        pagination={{ clickable: true }}
      >
        {imgsrc.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className=" w-full h-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute gap-2 md:gap-4 md:ml-20 top-0 left-0 w-full h-full flex flex-col  z-10 text-white   px-10 text-sm md:text-2xl justify-center  ">
        <p>Global Rising Tours & Travel</p>
        <h1 className="text-2xl md:text-6xl md:w-[40%] font-bold">
          Your Gateway to the World’s Greatest Adventures
        </h1>
        <p className="md:w-[50%] text-lg">
          Explore the heart of the Himalayas with Nepal’s most trusted travel
          partner. Authentic experiences, curated just for you.
        </p>
      </div>
    </div>
  );
};

export default Hero;
