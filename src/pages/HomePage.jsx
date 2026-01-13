import React from "react";
import Hero from "../components/home/Hero.jsx";
import Search from "../components/home/Search.jsx";
import About from "../components/home/About.jsx";
import HolidaysType from "../components/home/HolidaysType.jsx";
import BestDeals from "../components/home/BestDeals.jsx";
import CustomerReviews from "../components/home/CustomerReviews.jsx";
import VisaAssistance from "../components/home/VisaAssistance.jsx";
import FAQ from "../components/home/FAQ.jsx";
const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="absolute  top-[400px] md:top-[560px]   left-0 w-full h-[400px]  z-10">
        <Search />
      </div>
      <About />
      <HolidaysType />

      <BestDeals />
      <CustomerReviews />
      <VisaAssistance />
      <FAQ />
    </div>
  );
};

export default HomePage;
