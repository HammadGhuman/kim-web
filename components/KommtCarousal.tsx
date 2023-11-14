'use client';
import React, { useState } from 'react';
import Benefits from '@/components/Benifits';
import Image from 'next/image';
import Arrow from '@/public/right-arrow.png';
import Kommt from './Kommt';

function KommtCarousal() {
  const benifits = [
    {
      heading: 'Kommt Ihnen das bekannt vor?',
      description:
        'Mit KI.m sind enge Budget kein Problem mehr. KI.m bietet ein skalierbares und dadurch kostengünstiges Kompetenzentwicklungsgsprogramm, welches gleichzeitig durch den Einsatz neuster Technologien und KI dazu in der Lage ist wirksam und individuell auf die Belange jedes Teilnehmers einzugehen.',
    },
    {
      heading:
        'Oft spiegeln externe Maßnahmen nicht zu unsere individuelle Führungskultur wieder',
      description:
        'Das von KI.m angewendete Leadership Model basiert auf Wirkfaktoren, die interkulturelle Gültigkeit haben und empirisch gesichert sind. Somit kann KI.m Führende aus unterschiedlichen Unternehmen, Branchen und mit verschiedenen Hintergründen wirksam begleiten. ABER KI.m kann auch individualisiert und auf die Führungskultur ihres Unternehmens angepasst werden. Kontaktieren sie hierzu unsere Sales Mitarbeiter. Button Sales!',
    },
    {
      heading:
        'Externe Maßnahmen sind im Hinblick auf den Datenschutz oftmals problematisch',
      description:
        'KI.m legt großen Wert auf Datenschutz, daher liegen unsere Server in Deutschland und wir verfolgen von Beginn an einen Privacy-by-Design Ansatz.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 2 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === 2;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className='group relative flex w-auto flex-col items-center justify-center px-4 py-16'>
      <div className='duration-500'>
        <Kommt
          heading={benifits[currentIndex].heading}
          description={benifits[currentIndex].description}
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='-ml-1.5 mt-6 flex items-center justify-center text-white'>
          {benifits.map((benifit, index) => (
            <div key={index} onClick={() => goToSlide(index)}>
              <p
                className={`p-1 ${
                  index === currentIndex ? 'bg-white/40' : 'bg-white/10'
                } mx-2 cursor-pointer rounded-xl hover:bg-white/40`}
              />
            </div>
          ))}
        </div>
        <div className='mr-2 mt-6 flex items-center space-x-5'>
          {/* Left Arrow */}
          <div
            onClick={() => prevSlide()}
            className='cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white hover:bg-white/40 group-hover:block'
          >
            <Image src={Arrow} alt='arrow' className='-rotate-90' width={20} />
          </div>
          {/* Right Arrow */}
          <div
            onClick={() => nextSlide()}
            className='cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white  hover:bg-white/40 group-hover:block'
          >
            <Image src={Arrow} className='rotate-90' alt='arrow' width={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KommtCarousal;
