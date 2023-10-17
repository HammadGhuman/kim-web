import React from "react";
import TeamCard from "./TeamCard";

function MeetOurTeam() {
  const teamMembers = [1, 2, 3];
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
      <div className="md:flex md:items-center md:justify-between mx-32">
        {teamMembers.map((item) => (
          <TeamCard key={item} />
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
