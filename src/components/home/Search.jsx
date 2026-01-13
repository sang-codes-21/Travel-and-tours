import React from "react";
import Button from "../ui/Button";

const Search = () => {
  return (
    <div className="px-6 md:px-40 ">
      <div
        className="h-full w-full bg-white  md:px-10 p-4 flex flex-col md:flex-row  md:items-center 
       rounded-xl md:rounded-full text-m font-semibold shadow-lg border gap-4 "
      >
        <div className="md:w-1/4  ">
          <label>
            <select name="destination" className="w-full py-2 px-2">
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
            <select name="difficulty" className="w-full py-2 px-2">
              <option value=" ">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
            </select>
          </label>
        </div>
        <div className="md:w-1/4">
          <label>
            <select value="range" className="w-full py-2 px-2">
              <option value="" >₨. 5500 - ₨. 395000</option>
              <option value="low"> ₨. 5500 - ₨. 100000</option>
              <option value="medium"> ₨. 100000 - ₨. 250000</option>
              <option value="high"> ₨. 250000 - ₨. 395000</option>
            </select>
          </label>
        </div>
        <div className="md:w-1/4 flex md:justify-center">
          <Button variant="primary">
            SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
