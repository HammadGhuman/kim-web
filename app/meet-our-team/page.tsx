import Image from "next/image";
import React from "react";

import Team1 from "@/public/team-1.jpg.png";
import Team2 from "@/public/team-2.jpg.png";
import Team3 from "@/public/team-3.jpg.png";
import ReadMoreButton from "@/components/ReadMoreButton";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
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

      <div className="flex flex-col mt-10">
        <Image className="" src={Team1} alt="team1" />
        <Image src={Team2} alt="team1" />
        <Image src={Team3} alt="team1" />
      </div>

      <div className="text-center text-white text-5xl font-semibold mt-10">
        Join Our <br />
        Team
      </div>

      <ReadMoreButton />

      <div className="mt-10 text-center text-white text-5xl font-semibold ">
        Partners
      </div>

      <div className="text-center mt-10 text-white text-5xl font-medium  leading-[72px]">
        Roadmap
      </div>

      <div className="flex flex-col space-y-3">
        <Roadmap
          date="2009"
          title="Die Entstehung des Leadership Modells"
          description="Ausgelöst durch die Finanzkrise erforschte Jörg Krauter die Frage: „Wie führt man wirksam in Krisen und extremen Situationen in einem volatilen, unsicheren, komplexen und mehrdeutigen Geschäftsumfeld?“. In seiner Promotion zum PhD, die er in 2018 abschloss, entwickelte er die Grundlage für das Leadership Modell, das wir heute in KI.m einsetzen."
        />
        <Roadmap
          date="März 2020"
          title="Corona Pandemie, die Theorie wird zu Praxis"
          description="Die Corona Pandemie wird als Extremereignis in unsere Geschichte eingehen. Diesen Umstand nutzte Jörg, um anhand einer empirischen Studie die Erkenntnisse seiner bisherigen Forschungsarbeit zu überprüfen und um aktuelle Trends, wie Digitalisierung und agiles Arbeiten zu erweitern.  "
        />
      </div>

    </div>
  );
}

export default page;
