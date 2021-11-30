import React from "react";
import PercentButton from "./PercentButton";

const PercentButtonList = ({ percentValues, setPercent }) => {
  return (
    <div className="flex gap-2 my-8">
      {percentValues.map((pv, index) => (
        <PercentButton value={pv} setPercent={setPercent} key={index} />
      ))}
    </div>
  );
};

export default PercentButtonList;
