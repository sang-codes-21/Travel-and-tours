import Card from "../components/ui/Card.jsx";
import { places } from "../data/adventure.js";
import Filter from "../components/Adventure/Filter.jsx";
import { useNavigate } from "react-router-dom";
const Adventure = () => {
  const navigate = useNavigate();
  return (
    <main>
      <header className="text-4xl bg-gray-200 font-semibold p-8">
        Adventure
      </header>
      <section className="max-w-7xl mx-auto  py-10 flex flex-col md:flex-row text-xl">
        <aside className="mt-4 p-4  md:w-[25%] w-full">
          <Filter />
        </aside>
        <div className=" w-full flex flex-col">
          {places.map((place, id) => (
            <div className=" p-2 " key={place.id}>
              <Card
                id={place.id}
                TourName={place.name}
                image={place.image}
                description={place.description}
                country={place.country}
                difficulty={place.difficulty}
                person={place.person}
                duration={place.duration}
                price={place.price}
                onClick={() =>
                  navigate(
                    `/tours/${place.name.toLowerCase().replace(/\s+/g, "-")}`,
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Adventure;
