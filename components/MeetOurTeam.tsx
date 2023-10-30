import React from "react";
import TeamCard from "./TeamCard";
import Team1 from "@/public/team-1.jpg.png";
import Team2 from "@/public/team-2.jpg.png";
import Team3 from "@/public/team-3.jpg.png";
import { it } from "node:test";
import Link from "next/link";
function MeetOurTeam() {
  const teamMembers = [
    {
      img: Team1,
      name: "Christian Krauter",
      position: "Gründer & Geschäftsführer",
    },
    {
      img: Team2,
      name: "Dr. Jörg Krauter",
      position: "Experte & Berater",
    },
    {
      img: Team3,
      name: "Celine Jensen",
      position: "Marketing Expertin",
    },
  ];
  return (
    <div id="TreffenSieunserTeam">
      <div className="text-center mt-10 mb-20 font-Marsden">
        <span className="text-white text-[38px] md:text-[62px] font-medium leading-[72px]">
          Lerne das KI.m{" "}
        </span>
        <span className="text-yellow-600 text-[38px] md:text-[62px] font-medium leading-[72px]">
          Team kennen
        </span>
      </div>

      <div className=" flex items-center justify-center">
        <div className="flex flex-col md:space-y-0 space-y-10 md:flex-row items-center md:justify-between md:space-x-24  lg:min-w-[900px]">
          {teamMembers.map((item, index) => (
            <TeamCard
              key={item.name}
              img={item.img}
              name={item.name}
              position={item.position}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-[65px]">
        <Link href="#">
          <button className="w-[225px] h-[61px]  bg-[#B77828] rounded-[10px]">
            <div className="text-white text-xl font-medium font-Marsden">
              Alle kennenlernen
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MeetOurTeam;
