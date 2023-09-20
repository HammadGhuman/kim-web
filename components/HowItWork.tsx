import React from "react";

function HowItWork() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-center">
        <span className="text-white text-[40px] font-medium leading-[72px]">
          HOW IT{" "}
        </span>
        <span className="text-yellow-600 text-[40px] font-medium leading-[72px]">
          WORKS
        </span>
      </div>{" "}
      <div className="mt-5 flex flex-col items-center justify-center -space-y-5">
        <div className="text-gray-400 text-[22px] font-medium  leading-[72px]">
          Step #1
        </div>
        <div className="text-white text-2xl font-medium  leading-[72px]">
          Rapportaufbau:
        </div>

       
      </div>

      <div className="w-[306px] h-[68px] text-white text-sm font-medium ">
          - Vertrauensaufbau
          <br />- Verbesserung des Mental Wellbeing
        </div>
    </div>
  );
}

export default HowItWork;
