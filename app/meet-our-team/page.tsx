import Image from "next/image";
import React from "react";

import Team1 from "@/public/team-1.jpg.png";
import Team2 from "@/public/team-2.jpg.png";
import Team3 from "@/public/team-3.jpg.png";
function page() {
  return (
    <div className="flex flex-col items-center justify-center px-0 mx-0">
      <div className="w-[225px] text-center text-white text-[38px] font-medium  leading-10">
        Meet Our
        <br />
        Team
      </div>

      <div className="w-[291px] mt-10 text-center text-white text-sm font-normal  leading-[25px]">
        Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
        liqueenean
        <br />
        sollicituin, lorem quis bibendum auct.
      </div>

      <div className="flex flex-col">
        <Image className="" src={Team1} alt="team1" />
        <Image src={Team2} alt="team1" />
        <Image src={Team3} alt="team1" />
      </div>
    </div>
  );
}

export default page;
