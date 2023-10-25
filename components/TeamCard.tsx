import Image from "next/image";
import React from "react";
import Member1 from "@/public/Member1.png";

type Props = {
  img: any;
  name: string;
  position: string;
};

function TeamCard({ img, name, position }: Props) {
  return (
    <div className="flex flex-col items-center justify-center md:w-auto w-[350px]">
      <Image alt="team-member" className="w-[181px] h-[183px] rounded-full" src={img} />
      <div className="text-white text-2xl font-medium  leading-[72px] tracking-tight">
        {name}
      </div>
      <div className="text-stone-300 text-2xl font-medium  leading-[72px]">
        {position}
      </div>
    </div>
  );
}

export default TeamCard;
