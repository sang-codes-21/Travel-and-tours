import { aboutdescription } from "../../data/about.js";
const GalleryCard = () => {
  return (
    <div className=" relative w-1/2 ">
      <img
        src={aboutdescription[0].img}
        alt="Statue"
        className=" md:h-[300px] ml-20 mt-40 "
      />
      <img
        src={aboutdescription[0].img2}
        alt="Temple"
        className="mt-10 md:absolute md:h-[370px] h-48 -top-32  right-14"
      />
    </div>
  );
};

export default GalleryCard;
