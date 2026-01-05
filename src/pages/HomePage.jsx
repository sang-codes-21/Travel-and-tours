import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Search from "../components/Search.jsx";
import About from "../components/About.jsx";
import HolidayType from "../components/HolidayType.jsx";
import BestDeals from "../components/BestDeals.jsx";
import CustomerReviews from "../components/CustomerReviews.jsx";
import TouristVisaAssistance from "../components/TouristVisaAssistance.jsx";
const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="absolute  top-[400px] md:top-[640px]  pointer-events-none left-0 w-full h-full  z-10">
        <Search />
      </div>
      <About />
      <HolidayType />

      <BestDeals />
      <CustomerReviews />
      <TouristVisaAssistance />
    </div>
  );
};

export default HomePage;
