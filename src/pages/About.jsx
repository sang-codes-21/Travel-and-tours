import Featurecard from "../components/about/Featurecard.jsx";
import { Teampic } from "../components/about/Teampic.jsx";
import GalleryCard from "../components/about/GalleryCard.jsx";
import Description from "../components/about/Description.jsx";
const About = () => {
  return (
    <main className="h-full w-full flex flex-col relative">
      <header className="p-6 py-24 text-4xl font-semibold justify-center flex bg-gray-200">
        About page
      </header>

      <section className="max-w-6xl mx-auto p-4 flex text-center flex-col items-center gap-4 text-lg md:text-2xl ">
        <h3>WELCOME TO GLOBAL TOURS & TRAVEL</h3>
        <h1 className="text-4xl font-semibold">
          Your Gateway to Unforgettable Luxury Escapes
        </h1>
        <p>
          Global Rising Tours And Travel is not just any travel agency; we are
          your partners in creating unforgettable journeys. Our company, based
          in the scenic Boudha, Kathmandu, Nepal, has been providing exceptional
          tour and transportation services since 2010. We specialize in flight
          ticketing, holiday packages, and visa consulting, both for domestic
          and international travel.
        </p>
      </section>
      <div className="md:absolute   top-[12%] left-1/2 transform -translate-x-1/2">
        <Teampic />
      </div>

      <section className="w-full md:pt-[25%] mt-80 bg-gray-800 ">
        <Featurecard />
      </section>
      <section className="max-w-7xl mx-auto md:mt-28 flex  flex-col md:flex-row  items-center gap-4 text-xl  mb-8">
        <Description />
      </section>
    </main>
  );
};

export default About;
