import React from "react";
import Hero from "../components/Hero.jsx";
import Search from "../components/Search.jsx";
import About from "../components/About.jsx";
import HolidayType from "../components/HolidayType.jsx";
import BestDeals from "../components/BestDeals.jsx";
import CustomerReviews from "../components/CustomerReviews.jsx";
import TouristVisaAssistance from "../components/TouristVisaAssistance.jsx";
import FrequentlyAskedQue from "../components/FrequentlyAskedQue.jsx";
const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="absolute  top-[400px] md:top-[560px]  pointer-events-none left-0 w-full h-[400px]  z-10">
        <Search />
      </div>
      <About />
      <HolidayType />

      <BestDeals />
      <CustomerReviews />
      <TouristVisaAssistance />
      <FrequentlyAskedQue />
    </div>
  );
};

export default HomePage;
