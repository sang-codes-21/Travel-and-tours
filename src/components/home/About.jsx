import Button from "../ui/Button";

const About = () => {
  return (
    <section className="bg-gray-100">
      <article className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 py-16">
        <div className="p-[4%] lg:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1598751337485-0d57b0c50b83?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="About Global Rising Tours & Travel"
            className="h-[450px] lg:w-full mx-auto h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="text-lg lg:pl-0 p-[4%] lg:w-2/3">
          <h1 className="text-lg text-[#004463]">
            About Global Rising Tours & Travel
          </h1>
          <h1 className="py-4 text-3xl font-semibold">
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
          <ul>
            <li>Trusted, Local Travel Experts</li>
            <li>Flexible, Hassle-Free Bookings</li>
            <li>Real-Time Itinerary Updates</li>
          </ul>
          <div className="py-4">
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
