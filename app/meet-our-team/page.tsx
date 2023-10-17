import Image from "next/image";
import React from "react";

import Team1 from "@/public/team-1.jpg.png";
import Team2 from "@/public/team-2.jpg.png";
import Team3 from "@/public/team-3.jpg.png";

import Partner1 from "@/public/logo 1.png";
import Partner2 from "@/public/logo 2.png";
import Partner3 from "@/public/Logo 3.png";
import Partner4 from "@/public/Logo 4.png";
import Partner5 from "@/public/Logo 5.png";
import Partner6 from "@/public/logo 6.png";

import ReadMoreButton from "@/components/ReadMoreButton";
import Roadmap from "@/components/Roadmap";
function page() {
  return (
    <div className="flex flex-col items-center justify-center px-0 mx-0 font-Marsden">
      <div className="w-[225px] md:w-full text-center text-white text-[38px] md:text-[62px] font-medium  leading-10">
        Meet Our
        <br className="md:hidden" />
        <span className="text-[#B77828]"> Team</span>
      </div>

      <div className="w-[291px] md:w-full mt-10 text-center text-white text-sm font-normal md:text-lg md:leading-[27px]  leading-[25px]">
        Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
        liqueenean sollicituin, lorem quis bibendum auct.
      </div>

      <div className="flex flex-col md:flex-row flex-wrap  mt-10">
        <Image className="md:w-[488px] md:h-[524px]" src={Team1} alt="team1" />
        <Image className="md:w-[488px] md:h-[524px]" src={Team2} alt="team1" />
        <Image className="md:w-[488px] md:h-[524px]" src={Team3} alt="team1" />
        <Image className="md:w-[488px] md:h-[524px]" src={Team1} alt="team1" />
        <Image className="md:w-[488px] md:h-[524px]" src={Team2} alt="team1" />
        <div className="hidden flex-col w-[488px] h-[524px] md:flex items-center justify-between">
          <div className="text-center text-white text-5xl font-semibold mt-10">
            Join Our <br />
            Team
          </div>
          <ReadMoreButton />
        </div>
      </div>

      <div className="md:hidden text-center text-white text-5xl font-semibold mt-10">
        Join Our <br />
        Team
      </div>

      <div className="md:hidden">
        <ReadMoreButton />
      </div>

      <div className="mt-10 text-center text-white text-5xl font-semibold ">
        Partners
      </div>
      <div className="flex items-center flex-col space-y-5 mt-10 mx-80">
        <div className="flex items-center space-x-16">
          <Image
            width={200}
            className="rounded"
            src={Partner1}
            alt="partner1"
          />
          <Image
            width={200}
            className="rounded"
            src={Partner2}
            alt="partner2"
          />
          <Image
            width={200}
            className="rounded"
            src={Partner3}
            alt="partner3"
          />
        </div>
        <div className="flex items-center space-x-16">
          <Image
            width={200}
            className="rounded"
            src={Partner4}
            alt="partner4"
          />
          <Image
            width={200}
            className="rounded"
            src={Partner5}
            alt="partner5"
          />
          <Image
            width={200}
            className="rounded"
            src={Partner6}
            alt="partner6"
          />
        </div>
      </div>
      <div className="text-center mt-10 text-white text-5xl font-medium font-Marsden md:text-[62px]  leading-[72px]">
        Roadmap
      </div>
      <p className="w-[700px] mt-4 mb-5 font-Montserrat text-white text-lg font-normal leading-7 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore iusto,
        nostrum molestiae odit earum eveniet dolores ut assumenda. Quaerat,
        libero.
      </p>

      <div className="flex flex-col  space-y-3">
        <Roadmap
          date="2009"
          title="Die Entstehung des Leadership Modells"
          description="Ausgelöst durch die Finanzkrise erforschte Jörg Krauter die Frage: „Wie führt man wirksam in Krisen und extremen Situationen in einem volatilen, unsicheren, komplexen und mehrdeutigen Geschäftsumfeld?“. In seiner Promotion zum PhD, die er in 2018 abschloss, entwickelte er die Grundlage für das Leadership Modell, das wir heute in KI.m einsetzen."
        />
        <div className="w-[1232px] hidden md:block h-1.5 border-t border-stone-300 relative">
          <div className="w-6 h-[5px] border-t-2 border-white absolute left-10 top-[-1.2px]" />
          <div className="w-6 h-[5px] border-t-2 border-white absolute right-10 top-[-1.2px]" />
        </div>

        <div className="md:self-end w-[700px]">
          <Roadmap
            date="März 2020"
            title="Corona Pandemie, die Theorie wird zu Praxis"
            description="Die Corona Pandemie wird als Extremereignis in unsere Geschichte eingehen. Diesen Umstand nutzte Jörg, um anhand einer empirischen Studie die Erkenntnisse seiner bisherigen Forschungsarbeit zu überprüfen und um aktuelle Trends, wie Digitalisierung und agiles Arbeiten zu erweitern.  "
          />
        </div>
      </div>
    </div>
  );
}

export default page;
