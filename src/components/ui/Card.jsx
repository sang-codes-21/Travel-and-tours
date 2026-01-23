import Button from "./Button";

const Card = ({
  onClick,
  TourName,
  image,
  description,
  country,
  difficulty,
  person,
  duration,
  price,
}) => {
  return (
    <article className=" w-full p-4" onClick={onClick}>
      <div
        style={{ boxShadow: "-6px  6px 6px rgba(0,0,0,0.1)" }}
        className="border-2  bg-white shadow-lg rounded-2xl  w-full  flex flex-col md:flex-row p-4 gap-6"
      >
        <div className="md:w-[500px] h-full">
          <img
            src={image}
            alt="Card Image"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-3/5 h-full ">
          <h1 className="md:text-2xl">{TourName}</h1>
          <p className="mt-2 md:text-sm">{description}</p>
          <p className="mt-4 text-sm    font-semibold">Country : {country}</p>
          <p className="mt-2 text-sm    font-semibold">
            Difficulty : {difficulty}
          </p>
          <p className="mt-2 text-sm    font-semibold">Person : {person}</p>
        </div>
        <aside className="md:w-/5">
          <p className="md:text-lg font-semibold text-sm mt-4">
            Duration: {duration}
          </p>
          <p className="md:text-lg font-semibold text-sm ">Price : ${price}</p>
          <Button
            variant="primary"
            className="mt-6 text-lg px-4 py-2 whitespace-nowrap"
          >
            More Details
          </Button>
        </aside>
      </div>
    </article>
  );
};

export default Card;
