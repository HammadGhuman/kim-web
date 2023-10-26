import React from "react";
import MobileCard from "./MobileCard";
const num = [1, 2, 3, 4];

function HowItWork() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 relative">
      <div className="text-center">
        <span className="text-white text-[40px] md:text-[62px] font-medium leading-[72px]">
          Wie läuft das {"  "}
        </span>
        <span className="text-yellow-600 text-[40px] md:text-[62px] font-medium leading-[72px]">
          Mentoring ab?
        </span>
      </div>

      {num.map((item, index) => (
        <MobileCard odd={index % 2 === 0} key={item} />
      ))}

      <div className="absolute hidden md:block">
        <div className="w-[1479px] h-[0px] -rotate-90 border border-blue-900 relative flex">
          <div className="w-[15px] h-[15px] bg-yellow-600 rounded-full ml-44 -mt-2" />
          <div className="w-[15px] h-[15px] bg-yellow-600 rounded-full ml-[30rem] -mt-2" />
          <div className="w-[15px] h-[15px] bg-yellow-600 rounded-full ml-[28rem] -mt-2" />
          <div className="w-[15px] h-[15px] bg-yellow-600 rounded-full ml-80 -mt-2" />
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
