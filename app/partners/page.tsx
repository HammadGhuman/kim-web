import PartnerBackground from "@/components/partnerBackground";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import Benefits from "@/components/Benifits";

import Steps from "@/components/Steps";
import Reply from "@/components/Reply";

import Partner1 from '@/public/logo 1.png';
import Partner2 from '@/public/logo 2.png';
import Partner3 from '@/public/Logo 3.png';
import Partner4 from '@/public/Logo 4.png';
import Partner5 from '@/public/Logo 5.png';
import Partner6 from '@/public/logo 6.png';



function AskQuestion() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[225px] text-center">
        <span className="text-white text-[32px] font-medium  leading-[38px]">
          KI.m For
        </span>
        <span className="text-yellow-600 text-[32px] font-medium  leading-[38px]">
          {" "}
          Partners
        </span>
      </div>

      <div className="w-[291px] mt-5 text-center text-white text-[15px] font-medium leading-relaxed">
        Here you can find out everything about the KI.m partner program.
      </div>

      <div className="mt-7">
        <PartnerBackground />
      </div>

    <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 bg-[#263a64]">
    <div className="text-center md:mt-0 mt-4 mr-10">
        <span className="text-white text-4xl font-medium leading-[44px] tracking-wide">
          OUR <br />
        </span>
        <span className="text-yellow-600 text-4xl font-medium  leading-[44px] tracking-wide">
          PARTNERS
        </span>
      </div>

      <div className="mt-10 flex md:flex-row flex-col items-center justify-between space-y-10 md:space-y-0 w-full">
        <Image width={150} height={150} src={Partner1} alt="quids" />
        <Image width={150} height={150} src={Partner2} alt="quids" />
        <Image width={150} height={150} src={Partner3} alt="quids" />
        <Image width={150} height={150} src={Partner4} alt="quids" />
        <Image className="scale-75" width={150} height={150} src={Partner5} alt="quids" />
        <Image width={150} height={150} src={Partner6} alt="quids" />


      </div>
    </div>

      <div className="mt-10 mb-10 text-center text-white text-4xl font-medium leading-[72px]">
        Benifits
      </div>
      <div className="flex flex-col space-y-5">
        <Benefits />
        <Benefits />
        <Benefits />
        <Benefits />
      </div>

      <div className="w-[249.60px] text-center mt-10">
        <span className="text-white text-5xl font-medium  leading-[72px]">
          Affiliate{" "}
        </span>
        <span className="text-yellow-600 text-5xl font-medium  leading-[72px]">
          Program
        </span>
      </div>

      <div className="w-[285px] text-center text-white text-base font-normal leading-[27px]">
        Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
        liqueenean
        <br />
        sollicituin, lorem quis bibendum auct.
      </div>

      <div className="mt-10 flex flex-col space-y-5">
        <Benefits />
        <Benefits />
        <Benefits />
        <Benefits />
      </div>

      <div className="w-[291px] text-center mt-10">
        <span className="text-white text-5xl font-medium  leading-[72px]">
          How to Become a<br />
        </span>
        <span className="text-yellow-600 text-5xl font-medium  leading-[72px]">
          Partner
        </span>
      </div>

      <div className="w-[299px] text-center text-white text-lg font-normal mt-10 leading-[27px]">
        Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
        liqueenean
        <br />
        sollicituin, lorem quis bibendum auct.
      </div>
      <div className="flex flex-col space-y-10 items-center mt-10">
        <Steps step="01" instruction="Kontaktformular ausfüllen." />
        <Steps
          step="02"
          instruction="Wir prüfen Deine Daten.Wir kontaktieren und"
        />
        <Steps step="03" instruction="onboarden Dich." />
        <Steps step="04" instruction="Los geht's!" />
      </div>
      <Reply />
      <div></div>
    </div>
  );
}

export default AskQuestion;
