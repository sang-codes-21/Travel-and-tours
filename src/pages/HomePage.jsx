import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Search from "../components/Search.jsx";
import About from "../components/About.jsx";
import HolidayType from "../components/HolidayType.jsx";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <About />
      <HolidayType />
    </div>
  );
};

export default HomePage;
