import Image from "next/image";
import React from "react";
import Member1 from "@/public/Member1.png";

type Props = {
  img: any;
  name: string;
  position: string;
  index: number;
};

function TeamCard({ img, name, position,index }: Props) {
  return (
    <div className="flex flex-col items-center justify-center md:w-auto w-[350px] font-Marsden">
      <div className="relative">
        <Image
          alt="team-member"
          className="lg:w-[334px] lg:h-[334px] w-[180px] rounded-full"
          src={img}
        />
        {index === 0 && (
          <div className="bg-yellow-600 h-4 w-4 rounded-full absolute top-20 left-3" />
        )}
         {index === 1 && (
          <div className="bg-yellow-600 h-4 w-4 rounded-full absolute top-16 right-5" />
        )}
         {index === 2 && (
          <div className="bg-yellow-600 h-4 w-4 rounded-full absolute bottom-20 right-3" />
        )}
      </div>
      <div className="text-white text-2xl font-medium leading-[72px] tracking-tight">
        {name}
      </div>
      <div className="text-stone-300 text-xl font-medium -mt-3">{position}</div>
    </div>
  );
}

export default TeamCard;
