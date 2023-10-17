import Image from "next/image";
import React from "react";

import Partner1 from "@/public/logo 1.png";
import Partner2 from "@/public/logo 2.png";
import Partner3 from "@/public/Logo 3.png";
import Partner4 from "@/public/Logo 4.png";
import Partner5 from "@/public/Logo 5.png";
import Partner6 from "@/public/logo 6.png";

function OurPartners() {
  return (
    <div className="mt-14">
      <div className="text-center">
        <span className="text-white text-4xl font-medium  leading-[44px] tracking-wide">
          OUR <br />
        </span>
        <span className="text-yellow-600 text-4xl font-medium  leading-[44px] tracking-wide">
          PARTNERS
        </span>
      </div>
      <div className="flex md:flex-row md:space-y-0 md:justify-between md:mx-10 flex-col space-y-10 mt-10 items-center justify-center">
        <Image width={200} className="rounded" src={Partner1} alt="partner1" />
        <Image width={200} className="rounded" src={Partner2} alt="partner2" />
        <Image width={200} className="rounded" src={Partner3} alt="partner3" />
        <Image width={200} className="rounded" src={Partner4} alt="partner4" />
        <Image width={200} className="rounded" src={Partner5} alt="partner5" />
        <Image width={200} className="rounded" src={Partner6} alt="partner6" />
      </div>
     
    </div>
  );
}

export default OurPartners;
