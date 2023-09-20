import React from "react";
import MobileCard from "./MobileCard";
const num = [1, 2, 3, 4];

function HowItWork() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-center">
        <span className="text-white text-[40px] font-medium leading-[72px]">
          HOW IT
        </span>
        <span className="text-yellow-600 text-[40px] font-medium leading-[72px]">
          WORKS
        </span>
      </div>

      {num.map((item) => (
        <MobileCard key={item} />
      ))}
    </div>
  );
}

export default HowItWork;
