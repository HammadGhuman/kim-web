import PartnerBackground from "@/components/partnerBackground";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Check1 from "@/public/icons8-check-96.png";
import HandShake from "@/public/icons8-handshake-50.png";
import Contact from "@/public/contact-form.png";
import Benefits from "@/components/Benifits";

import Steps from "@/components/Steps";
import Reply from "@/components/Reply";

import Folder from "@/public/folder.png";

import BenefitsCarousal from "@/components/BenifitsCarosal";
import Benifits from "@/components/Benifits";
import ReadMoreButton from "@/components/ReadMoreButton";
import OurPartners from "@/components/OurPartners";

const benifits = [
  {
    heading: "Neue Zielgruppen & Umsatzquellen erschließen",
    description:
      "Mit KI.m kann ich Kunden an mich binden, Zusatzleistungen verkaufen, den Umsatz erhöhen und neue Zielgruppen erschließen, welche ich mit meinen Standardleistungen aus Budget- oder anderen Gründen nicht erreiche.",
  },
  {
    heading: "Fokus auf Kernkompetenzen",
    description:
      "Die Entwicklung einer eigenen digitalen Lösung ist teuer, zeitaufwändig und muss gepflegt werden. Mit KI.m habe ich eine state-of-the-art Dienstleistung sofort und immer in bester Qualität zur Verfügung.",
  },
  {
    heading: "Verlängerung der eigenen Werkbank",
    description:
      "KI.m ist als “verlängerte Werkbank“ gedacht, um ggf. eigene Leistungen weiter zu professionalisieren. Eigene Leistungen können mit KI.m kombiniert werden. Dadurch wird eine intensivere Begleitung des Kunden möglich.",
  },
  {
    heading: "Nachhaltige Ergänzung",
    description:
      "KI.m ist kein Ersatz für Trainer, Berater, Coachs oder Mentoren, sondern bietet Ergänzungen und Erweiterungen der eigenen Leistungen.",
  },
];

function AskQuestion() {
  return (
    <div className="flex flex-col items-center justify-center md:mt-20 font-Marsden">
      <div className="w-[225px] md:w-auto text-center">
        <span className="text-white md:text-6xl text-[32px] font-medium  leading-[38px]">
          KI.m For
        </span>
        <span className="text-yellow-600 md:text-6xl text-[32px] font-medium  leading-[38px]">
          {" "}
          Partners
        </span>
      </div>

      <div className="w-[291px] mt-5 text-center md:w-auto md:text-[32px] text-white text-[15px] leading-relaxed">
        Here you can find out everything about the KI.m partner program.
      </div>

      <div className="mt-7">
        <PartnerBackground />
      </div>
      <div className="-mt-10">
        <OurPartners />
      </div>

      <div
        id="Vorteile"
        className="mt-10 md:-mb-10 mb-10 text-center text-white text-4xl md:text-6xl font-medium leading-[72px] py-10"
      >
        Benifits
      </div>
      <div className="md:hidden flex flex-col space-y-5">
        {benifits.map((benifit) => (
          <Benifits
            heading={benifit.heading}
            description={benifit.description}
            key={benifit.heading}
          />
        ))}
      </div>
      <div className="hidden md:block">
        <BenefitsCarousal />
      </div>
      <div
        id="Partnerprogramm"
        className="w-[249.60px] md:w-auto text-center md:-mt-4 mt-10"
      >
        <span className="text-white text-6xl font-medium  leading-[72px]">
          Affiliate{" "}
        </span>
        <span className="text-yellow-600 text-6xl font-medium  leading-[72px]">
          Program
        </span>
      </div>

      <div className="w-[285px] md:w-auto text-center text-white text-base font-normal mb-4 leading-[27px]">
        Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
        liqueenean
        <br />
        sollicituin, lorem quis bibendum auct.
      </div>

      <div className="md:hidden flex flex-col space-y-5">
        {benifits.map((benifit) => (
          <Benifits
            heading={benifit.heading}
            description={benifit.description}
            key={benifit.heading}
          />
        ))}
      </div>
      <div className="hidden md:block -mt-10">
        <BenefitsCarousal />
      </div>

      <div
        id="SowerdenSiePartner"
        className="w-[291px] md:w-auto text-center md:mt-0 mt-10"
      >
        <span className="text-white text-6xl font-medium  leading-[72px]">
          How to Become a{" "}
        </span>
        <span className="text-yellow-600 text-6xl font-medium  leading-[72px]">
          {" "}
          Partner
        </span>
      </div>

      <div className="w-[299px] md:w-auto text-center text-white text-lg font-normal mt-3 leading-[27px]">
        Lorem Ipsum dolor sit amet sun progit droin qual de suis erestopius
        liqueenean
        <br />
        sollicituin, lorem quis bibendum auct.
      </div>
      <div className="md:hidden flex flex-col space-y-10 items-center mt-10">
        <Steps step="01" instruction="Kontaktformular ausfüllen." />
        <Steps
          step="02"
          instruction="Wir prüfen Deine Daten.Wir kontaktieren und"
        />
        <Steps step="03" instruction="onboarden Dich." />
        <Steps step="04" instruction="Los geht's!" />
      </div>

      {/* desktop steps */}

      <div className="hidden md:block w-[1195px] h-[159px] relative mt-10">
        <div className="w-[159px] h-[159px] left-10 top-0 absolute">
          <div className="w-[159px] h-[159px] left-0 top-0 absolute rounded-full border border-white" />
          <div className="w-16 h-16 left-[48px] top-[48px] absolute">
            <Image
              className="w-16 h-16 left-0 top-0 absolute"
              src={Contact}
              alt="check1"
            />
          </div>
        </div>
        <div className="w-[159px] h-[159px] left-[344px] top-0 absolute">
          <div className="w-[159px] h-[159px] left-10 top-0 absolute rounded-full border border-white" />
          <div className="w-16 h-16 left-[88px] top-[48px] absolute">
            <Image
              className="w-16 h-16 left-0 top-0 absolute"
              src={Folder}
              alt="check1"
            />
          </div>
        </div>
        <div className="w-[159px] h-[159px] left-[690px] top-0 absolute">
          <div className="w-[159px] h-[159px] left-10 top-0 absolute rounded-full border border-white" />
          <div className="w-16 h-16 left-[82px] top-[48px] absolute">
            <Image
              className="w-16 h-16 left-0 top-0 absolute"
              src={HandShake}
              alt="check1"
            />
          </div>
        </div>
        <div className="w-[159px] h-[159px] left-[1036px] top-0 absolute">
          <div className="w-[159px] h-[159px] -left-2 top-0 absolute rounded-full border border-white" />
          <div className="w-16 h-16 left-[38px] top-[48px] absolute">
            <Image
              className="w-16 h-16 left-0 top-0 absolute"
              src={Check1}
              alt="check1"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-[1346px] h-[173px] relative mt-4 ">
        <div className="w-[302px] left-[48px] top-[80px] absolute text-center text-white text-[26px] font-medium font-['Marsden']">
          Kontaktformular ausfüllen.
          <br />
        </div>
        <div className="w-[302px] left-[732px] top-[73px] absolute text-center text-white text-[26px] font-medium font-['Marsden']">
          onboarden Dich.
        </div>
        <div className="w-[170px] left-[1090px] top-[73px] absolute text-center text-white text-[26px] font-medium font-['Marsden']">
          Los geht&apos;s!
        </div>
        <div className="w-[310px] left-[386px] top-[80px] absolute text-center text-white text-[26px] font-medium font-['Marsden']">
          Wir prüfen Deine Daten.  Wir kontaktieren und
        </div>
        <div className="w-[143px] h-[0px] left-0 top-[29px] absolute border border-neutral-200"></div>
        <div className="w-[238px] h-[0px] left-[245px] top-[29px] absolute border border-neutral-200"></div>
        <div className="w-[238px] h-[0px] left-[591px] top-[29px] absolute border border-neutral-200"></div>
        <div className="w-[181px] h-[0px] left-[936px] top-[29px] absolute border border-neutral-200"></div>
        <div className="left-[167px] top-0 absolute text-center text-orange-400 text-5xl font-extrabold font-['Marsden']">
          01
        </div>
        <div className="left-[506px] top-0 absolute text-center text-orange-400 text-5xl font-extrabold font-['Marsden']">
          02
        </div>
        <div className="left-[852px] top-0 absolute text-center text-orange-400 text-5xl font-extrabold font-['Marsden']">
          03
        </div>
        <div className="left-[1142px] top-0 absolute text-center text-orange-400 text-5xl font-extrabold font-['Marsden']">
          04
        </div>
        <div className="w-[123px] h-[0px] left-[1223px] top-[29px] absolute border border-neutral-200"></div>
      </div>

      <Reply />
    </div>
  );
}

export default AskQuestion;
