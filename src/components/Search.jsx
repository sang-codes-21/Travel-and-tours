import React from "react";

const Search = () => {
  return (
    <div className="px-6 md:px-40">
      <div
        className="h-full w-full bg-white  md:px-10 p-4 flex flex-col md:flex-row  md:items-center 
       rounded-xl md:rounded-full text-m font-semibold shadow-lg border gap-4 "
      >
        <div className="md:w-1/4 ">Destination</div>
        <div className="md:w-1/4">Tour Types</div>
        <div className="md:w-1/4">₨. 5500 - ₨. 395000</div>
        <div className="md:w-1/4 flex md:justify-center">
          <button className="bg-[#004463] text-white text-base px-10 py-3 rounded-full hover:bg-[#006080]">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
