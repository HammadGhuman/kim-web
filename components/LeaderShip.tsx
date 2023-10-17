import React from "react";
import Image from "next/image";

import LeaderShipMobile from "@/public/leadership mobile.png";
import LeaderShipDesktop from '@/public/leadershipweb.png';
function LeaderShip() {
  return (
    <div className="flex flex-col items-center justify-center mt-16 font-Marsden">
      <div className="text-center md:text-62px">
        <span className="text-white text-4xl font-medium  leading-[72px]">
          Leadership{" "}
        </span>
        <span className="text-yellow-600 text-4xl font-medium  leading-[72px]">
          Model
        </span>
      </div>
      <div className="w-[327px] h-[87px] md:h-[] md:text-2xl md:w-[1227px] md:font-medium text-center text-white text-xs font-normal leading-tight">
        Allows leaders to gain unique insights and enables them to build
        strongerand effective working relationships.
        <br className="md:hidden" /> Looks at more than 43 individual indicators
        that influence leadership
      </div>

      <div className="md:hidden">
        <Image
          className="mr-32"
          width={567}
          height={308}
          src={LeaderShipMobile}
          alt="leadership"
        />
      </div>
      <div className="hidden md:block">
        <Image
          className="mr-32"
          width={1200}
          height={755}
          src={LeaderShipDesktop}
          alt="leadership"
        />
      </div>
    </div>
  );
}

export default LeaderShip;
