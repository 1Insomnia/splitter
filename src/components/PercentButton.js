import React from "react";
import { FaPercent } from "react-icons/fa";

const PercentButton = ({ value, setPercent }) => {
  return (
    <button
      className="flex items-center justify-center bg-cyan-dark rounded-md overflow-hidden w-16 h-8"
      onClick={() => {
        setPercent(value);
      }}
      type="button"
    >
      <span className="text-cyan-light">{value * 100}</span>
      <FaPercent size={10} className="text-cyan-light ml-1" />
    </button>
  );
};

export default PercentButton;
