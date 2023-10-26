import React from "react";
import TeamCard from "./TeamCard";
import Team1 from "@/public/team-1.jpg.png";
import Team2 from "@/public/team-2.jpg.png";
import Team3 from "@/public/team-3.jpg.png";
import { it } from "node:test";
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
    <div>
      <div className="text-center">
        <span className="text-white text-[38px] font-medium leading-[72px]">
          MEET OUR{" "}
        </span>
        <span className="text-yellow-600 text-[38px] font-medium leading-[72px]">
          TEAM
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between  md:max-w-[900px]">
        {teamMembers.map((item) => (
          <TeamCard
            key={item.name}
            img={item.img}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="w-[225px] h-[61px] bg-yellow-600 rounded-[10px]">
          <div className="text-white text-xl font-medium font-Marsden">
            Alle kennenlernen
          </div>
        </button>
      </div>
    </div>
  );
}

export default MeetOurTeam;
