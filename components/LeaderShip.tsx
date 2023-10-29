import React from "react";
import Image from "next/image";

import LeaderShipMobile from "@/public/leadership mobile.png";
import LeaderShipDesktop from "@/public/leadershipweb.png";
import ReadMoreButton from "./ReadMoreButton";
function LeaderShip() {
  return (
    <div className="flex flex-col items-center justify-center md:mt-[130px] mt-24 font-Marsden">
      <div className="text-center md:text-62px">
        <span className="text-white text-4xl md:text-[62px] font-medium  leading-[72px]">
          KI.m Leadership Model
        </span>
      </div>
      <div className="w-[327px] md:mt-3 h-[87px] md:mb-6 md:text-2xl md:w-auto lg:w-[1227px] text-center text-white text-md font-medium leading-tight">
        Ermöglicht Führungskräften einzigartige Einblicke in ihr eigenes
        Führungsverhalten und in die Dynamiken in der Zusammenarbeit mit ihren
        Teammitgliedern zu gewinnen. Das Modell betrachtet mehr als 43 einzelne
        Indikatoren, die die Führung beeinflussen und den Rahmen für das
        Mentoring bilden.
      </div>

      <div className="md:hidden ">
        <Image
          className="mt-10"
          width={567}
          height={308}
          src={LeaderShipMobile}
          alt="leadership"
        />
      </div>
      <div className="hidden md:block">
        <Image
          width={1200}
          height={755}
          src={LeaderShipDesktop}
          alt="leadership"
        />
      </div>
      <div className="md:ml-16">
        <ReadMoreButton text="Mehr" />
      </div>
    </div>
  );
}

export default LeaderShip;
