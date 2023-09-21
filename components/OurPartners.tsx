import Image from "next/image";
import React from "react";

import Partner1 from "@/public/Partner1.png";

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
      <div className="flex flex-col space-y-10 mt-10 items-center justify-center">
        <Image width={200} className="rounded" src={Partner1} alt="partner1" />
        <Image width={200} className="rounded" src={Partner1} alt="partner2" />
        <Image width={200} className="rounded" src={Partner1} alt="partner3" />
        <Image width={200} className="rounded" src={Partner1} alt="partner4" />

      </div>
    </div>
  );
}

export default OurPartners;
