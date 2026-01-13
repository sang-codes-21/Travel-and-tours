import React from "react";
import Button from "../ui/Button";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto  max-w-7xl flex flex-col  lg:flex-row gap-8 py-16 ">
        <div className="md:p-4 text-xl md:w-1/3">
          <img
            src="https://placehold.co/400x500"
            alt="About Global Rising Tours & Travel"
          />
        </div>
        <div className="text-lg p-10 md:w-2/3">
          <h1 className=" text-lg text-[#004463]">
            About Global Rising Tours & Travel
          </h1>
          <h1 className="py-4 text-3xl font-semibold ">
            Travel That Fits Your Pace, Your Passion, Your Path
          </h1>
          <p>
            Global Rising Tours And Travel is not just any travel agency; we are
            your partners in creating unforgettable journeys. Our company, based
            in the scenic Boudha, Kathmandu, Nepal, has been providing
            exceptional tour and transportation services since 2010. We
            specialize in flight ticketing, holiday packages, and visa
            consulting, both for domestic and international travel. At Global
            Rising Tours And Travel, we understand the importance of a
            well-planned and executed trip. That’s why we offer a wide range of
            services that… Trusted, Local Travel Experts Flexible, Hassle-Free
            Bookings Real-Time Itinerary Updates
          </p>
          <li>Trusted, Local Travel Experts</li>
          <li>Flexible, Hassle-Free Bookings</li>
          <li>Real-Time Itinerary Updates</li>
          <div className="py-4">
            <Button variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
