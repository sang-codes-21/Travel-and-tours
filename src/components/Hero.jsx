import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  const imgsrc = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThd6l1F0ijqPg1zKsop7hOi3HEVwpucwoSPQ&s",
      alt: "Hero Image 1",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrtNvbgxmck_D2jh2hpW2ErFrm8oeJmJaRw&s",
      alt: "Hero Image 2",
    },
    {
      src: "https://wunwun.com/wp-content/uploads/2024/10/travel-insurance-solo-travel-holidays-header.jpg",
      alt: "Hero Image 3",
    },
  ];

  return (
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
  );
};

export default Hero;
