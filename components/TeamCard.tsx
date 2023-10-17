import Image from "next/image";
import React from "react";
import Member1 from "@/public/Member1.png";
function TeamCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        alt="team-member"
        width={181}
        height={183}
        className="w-[181px] h-[183px]"
        src={Member1}
      />
      <div className="text-white text-2xl font-medium  leading-[72px] tracking-tight">
        Christian Krauter
      </div>
      <div className="text-stone-300 text-2xl font-medium  leading-[72px]">
        Gründer & Geschäftsführer
      </div>
    </div>
  );
}

export default TeamCard;
