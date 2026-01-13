import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { imgsrc } from "../../data/heroData.js";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="w-full h-full relative">
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
      <div className="absolute gap-2 md:gap-4 md:ml-20 top-0 left-0 max-w-7xl h-full flex flex-col  z-10 text-white   px-10 text-sm md:text-2xl justify-center  ">
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
