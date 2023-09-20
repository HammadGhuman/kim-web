import Image from "next/image";
import React from "react";
import Phone1 from "@/public/Phone-1.png";
function MobileCard() {
  return (
    <div>
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

      <Image className="mt-7" src={Phone1} alt={"phone1"} />
    </div>
  );
}

export default MobileCard;
