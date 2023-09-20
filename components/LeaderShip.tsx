import React from "react";
import Image from "next/image";

import LeaderShipMobile from "@/public/leadership mobile.png";
function LeaderShip() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="text-center">
        <span className="text-white text-4xl font-medium  leading-[72px]">
          Leadership{" "}
        </span>
        <span className="text-yellow-600 text-4xl font-medium  leading-[72px]">
          Model
        </span>
      </div>
      <div className="w-[327px] h-[87px] text-center text-white text-xs font-normal leading-tight">
        Allows leaders to gain unique insights and enables them to build
        strongerand effective working relationships.
        <br />
        Looks at more than 43 individual indicators that influence leadership
      </div>

      <Image className="mr-32" width={567} height={308} src={LeaderShipMobile} alt="leadership" />
    </div>
  );
}

export default LeaderShip;
