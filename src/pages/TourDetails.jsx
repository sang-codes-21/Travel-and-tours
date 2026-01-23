import { useParams } from "react-router-dom";
import { places } from "../data/adventure.js";
import button from "../components/ui/Button.jsx";
import Button from "../components/ui/Button.jsx";
const TourDetails = () => {
  const { tourName } = useParams();
  const tour = places.find(
    (place) => place.name.toLowerCase().replace(/\s+/g, "-") === tourName,
  );
  return (
    <main>
      <div className="max-w-7xl mx-auto  overflow-hidden rounded-lg">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full object-cover mx-auto hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg "
        />
      </div>
      <article className="flex max-w-7xl mx-auto gap-10 py-10 px-4">
        <div className="flex flex-col gap-6 w-2/3">
          <header className="text-4xl font-semibold">{tour.name}</header>
          <p className="text-lg border-b-2 border-gray-300">Overview</p>
          <p>{tour.overview}</p>
        </div>
        <aside className="text-lg w-1/3 flex flex-col gap-4 items-center rounded-lg ">
          <section className="shadow-lg p-4 flex flex-col gap-4 rounded-lg">
            <p>From</p>
            <p className="text-3xl font-semibold   ">
              Rs.{tour.price}/
              <span className="text-gray-500 text-base ">Adult</span>
            </p>
            <hr />
            <Button variant="primary" className="w-full mt-4  py-3 text-lg">
              Check Availability
            </Button>
            <p>Check Availability Need help with booking? Send Us A Message</p>
          </section>
          <section className="w-full shadow-lg p-4 flex flex-col gap-4 rounded-lg">
            <h1>Archives</h1>
            <p>January 2026</p>
            <hr />
            <p>December 2025</p>
          </section>
          <section className="w-full shadow-lg p-4 flex flex-col gap-4 rounded-lg">
            <h1>Categories</h1>
            <p>Partnerships & Collaboration</p>
            <hr />
            <p>Tour Guide</p>
          </section>
        </aside>
      </article>
    </main>
  );
};

export default TourDetails;
