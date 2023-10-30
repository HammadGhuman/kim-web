"use client";
import React, { useState } from "react";
import Benefits from "@/components/Benifits";
import Image from "next/image";
import Arrow from "@/public/right-arrow.png";

function BenefitsCarousal() {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="w-auto py-16 px-4 relative flex flex-col items-center justify-center group">
      <div className="duration-500">
        <Benefits
          heading={benifits[currentIndex].heading}
          description={benifits[currentIndex].description}
        />
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center text-white mt-6 -ml-1.5">
          {benifits.map((benifit, index) => (
            <div key={index} onClick={() => goToSlide(index)}>
              <p
                className={`p-1 ${
                  index === currentIndex ? "bg-white/40" : "bg-white/10"
                } rounded-xl mx-2 cursor-pointer hover:bg-white/40`}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-5 mt-6 mr-2">
          {/* Left Arrow */}
          <div
            onClick={() => prevSlide()}
            className="border-[1px] border-white group-hover:block bg-white/10 hover:bg-white/40 px-4 py-4 rounded-md cursor-pointer text-white"
          >
            <Image src={Arrow} alt="arrow" className="-rotate-90" width={20} />
          </div>
          {/* Right Arrow */}
          <div
            onClick={() => nextSlide()}
            className="border-[1px] border-white group-hover:block bg-white/10 hover:bg-white/40 px-4 py-4 rounded-md  cursor-pointer text-white"
          >
            <Image src={Arrow} className="rotate-90" alt="arrow" width={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsCarousal;
