'use client';
import React, { useState } from 'react';
import Benefits from '@/components/Benifits';
import Image from 'next/image';
import Arrow from '@/public/right-arrow.png';
import Kommt from './Kommt';
import AboutKimCard from './AboutKimCard';
import AboutKim2Card from './AboutKim2Card';

function AboutKimCarousal() {
  const benifits = [
    {
      heading: '01',
      description:
        'Jeden Tag jonglieren Sie mit umfangreichen Aufgaben, treffen schwierige Entscheidungen und managen unterschiedliche Mitarbeiterpersönlichkeiten. Manchmal fühlen Sie sich überfordert, oft allein gelassen mit den Herausforderungen. Eine effektive Lösung ist schwer zu finden.',
    },
    {
      heading:
        '02',
      description:
        'Schluss damit! Stellen Sie sich vor, Sie hätten einen jederzeit verfügbaren Mentor, der Ihnen hilft, Ihre Kompetenzen zu stärken, Mitarbeiter effizienter zu führen und strategisch zu handeln. Genau das ist KI.m! KI.m ist eine revolutionäre KI-basierte Mentoring App für Führungskräfte, die Ihnen immer zur Seite steht. Mit fortgeschrittenen Algorithmen und einem fundierten Führungsmodell bietet KI.m ein personalisiertes Programm, das auf Ihre individuellen Herausforderungen eingeht. Mit Reflexionen, Analysen und konkreten Empfehlungen wird KI.m Ihr verlässlicher Mentor, der Sie bei der Bewältigung Ihrer Führungsprobleme unterstützt.',
    },
    {
      heading:
        '03',
      description:
        'Machen Sie es sich leichter. Verwandeln Sie mit KI.m Ihre Führungsherausforderungen in eine Erfolgsstraße!',
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
        <AboutKim2Card
          index={currentIndex}
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

export default AboutKimCarousal;
