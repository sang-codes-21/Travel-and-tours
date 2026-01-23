import { features } from "../../data/feature.js";

const Featurecard = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  ">
      {features.map((feature, map) => (
        <div
          className=" border text-lg bg-white p-2 max-w-[400px] aspect-square "
          key={map}
        >
          <h2 className="font-semibold text-4xl my-4">{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Featurecard;
