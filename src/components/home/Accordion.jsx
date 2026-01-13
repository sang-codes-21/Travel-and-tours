import { useState } from "react";
import { toggleAccordion } from "../../data/toggleAccordion.js";
const Accordion = () => {
  const [isOpen, setisOpen] = useState(null);

  const handleToggle = (id) => {
    setisOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-6 md:px-28 h-[450px] py-10">
      <h1 className="text-3xl ">Frequently Asked Questions</h1>
      <div className="mt-4">
        {toggleAccordion.map((item, id) => (
          <>
            <div
              onClick={() => handleToggle(item.id)}
              className="border text-lg h-[52px] md:h-full  py-4 flex full px-4 items-center justify-between"
            >
              <p>{item.que}</p>
              <p>{isOpen === item.id ? "-" : "+"}</p>
            </div>
            <div
              className={`border 
              overflow-hidden transition-all duration-300 ease-in-out
                flex  py-2 px-4 items-center ${
                  isOpen === item.id
                    ? "mb-4 opacity-100"
                    : "mb-0 max-h-0 opacity-0"
                }`}
            >
              {item.ans}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
