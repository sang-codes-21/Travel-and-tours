import { useState } from "react";

const Accordion = () => {
  const toggleAccordion = [
    {
      id: 0,
      que: "Why should I visit Nepal?",
      ans: "Nepal offers a unique blend of adventure, culture, and natural beauty. From the majestic Himalayas to ancient temples and vibrant cities, Nepal has something for every type of traveler.",
    },
    {
      id: 1,
      que: "What is your cancellation policy?",
      ans: "Cancellation policies vary by tour. We offer partial or full refunds based on how early the cancellation is made. Please refer to the specific terms during booking.",
    },
    {
      id: 2,
      que: "Do you offer customizable tour packages?",
      ans: "Yes, we specialize in tailor-made itineraries based on your interests, schedule, and budget.",
    },
    {
      id: 3,
      que: "How do I book a tour with your company?",
      ans: "You can book online through our website, call our office, or email us. Our travel consultants will assist you with the itinerary, pricing, and payment.",
    },
  ];
  const [isOpen, setisOpen] = useState(null);

  const handleToggle = (id) => {
    setisOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-6 md:px-28">
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
