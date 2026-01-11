import { useState } from "react";
import Slider from "./ui/Slider.jsx";
const Range = () => {
  const [number, setNumber] = useState(50);
  return (
    <div>
      <p className="font-semibold mb-4">Value: {number}</p>

      <Slider value={number} onChange={setNumber} min={0} max={100} />
    </div>
  );
};

export default Range;
