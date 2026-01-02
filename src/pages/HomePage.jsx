import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Search from "../components/Search.jsx";
import About from "../components/About.jsx";
import HolidayType from "../components/HolidayType.jsx";
const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="absolute top-[750px] pointer-events-none left-0 w-full h-[400px]  z-10">
        <Search />
      </div>

      <About />
      <HolidayType />
    </div>
  );
};

export default HomePage;
