import Button from "../ui/Button";
import { useState } from "react";
const Search = () => {
  const [formData, setFormData] = useState({
    destination: "",
    difficulty: "",
    priceRange: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className=" ">
      <form
        className="h-full max-w-7xl mx-auto bg-white  md:px-10 p-4 flex flex-col md:flex-row  md:items-center 
       rounded-xl md:rounded-full text-m font-semibold shadow-lg border gap-4 "
      >
        <div className="md:w-1/4  ">
          <label>
            <select
              name="destination"
              className="w-full py-2 px-2"
              value={formData.destination}
              onChange={handleChange}
            >
              <option value=" ">Select Destination</option>
              <option value="paris">Paris</option>
              <option value="newyork">New York</option>
              <option value="tokyo">Tokyo</option>
              <option value="sydney">Sydney</option>
            </select>
          </label>
        </div>
        <div className="md:w-1/4">
          <label>
            <select
              name="difficulty"
              className="w-full py-2 px-2"
              value={formData.difficulty}
              onChange={handleChange}
            >
              <option value=" ">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
            </select>
          </label>
        </div>
        <div className="md:w-1/4">
          <label>
            <select
              name="priceRange"
              className="w-full py-2 px-2"
              value={formData.priceRange}
              onChange={handleChange}
            >
              <option value="">₨. 5500 - ₨. 395000</option>
              <option value="low"> ₨. 5500 - ₨. 100000</option>
              <option value="medium"> ₨. 100000 - ₨. 250000</option>
              <option value="high"> ₨. 250000 - ₨. 395000</option>
            </select>
          </label>
        </div>
        <div className="md:w-1/4 flex md:justify-center">
          <Button variant="primary">SEARCH</Button>
        </div>
      </form>
    </section>
  );
};

export default Search;
