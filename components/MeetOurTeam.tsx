import React from "react";
import TeamCard from "./TeamCard";

function MeetOurTeam() {
  const teamMembers = [1, 2, 3, 4];
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
      {teamMembers.map((item) => (
        <TeamCard key={item} />
      ))}
    </div>
  );
}

export default MeetOurTeam;
