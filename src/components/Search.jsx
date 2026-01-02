import React from "react";

const Search = () => {
  return (
    <div className="px-52">
      <div className="h-20 w-full bg-white px-10 flex  items-center rounded-full text-m font-semibold shadow-lg border">
        <div className="w-1/4 ">Destination</div>
        <div className="w-1/4">Tour Types</div>
        <div className="w-1/4">₨. 5500 - ₨. 395000</div>
        <div className="w-1/4 flex justify-center">
          <button className="bg-[#004463] text-white text-lg px-10 py-3 rounded-full hover:bg-[#006080]">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
