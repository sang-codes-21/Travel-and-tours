import { aboutdescription } from "../../data/about.js";
import GalleryCard from "./GalleryCard.jsx";

const About = () => {
  return (
    <section className="flex flex-col">
      {aboutdescription.map((des, index) => (
        <article
          key={index}
          className={`flex flex-row  
        ${index === 1 ? "md:flex-row-reverse" : "flex-row  "}`}
        >
          <div className="w-1/2  mt-24 gap-4 flex flex-col">
            <h3> {des.subtitle}</h3>
            <h2 className="text-3xl font-semibold ">{des.title} </h2>
            <p>{des.description}</p>
          </div>
          <GalleryCard />
        </article>
      ))}
    </section>
  );
};
export default About;
