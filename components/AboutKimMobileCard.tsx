import Image from 'next/image';
import React from 'react';
import Mobile1 from '@/public/AboutKimPhone1.png';
import Mobile2 from '@/public/A.png';
import ReadMoreButton from './ReadMoreButton';
function AboutKimMobileCard() {
  return (
    <div className='flex flex-col'>
      <div className='mt-20 flex flex-row'>
        <div className="h-[370px] w-[586px] text-justify font-['Marsden'] text-2xl font-normal leading-[74px] tracking-tight text-white">
          Im Rahmen einer ganzheitlichen Learning-Journey, durchläuft eine
          Führungskraft ein strukturiertes und systematisches
          Kompetenzentwicklungsprogramm, welches in unterschiedlichen Phasen
          Möglichkeiten für Lernen, Reflexion und Evaluation mit einbezieht.
        </div>
        <Image
          className='ml-24 h-[554px] w-[375px]'
          src={Mobile1}
          alt='mobile'
        />
      </div>

      <div className='mt-20 flex flex-row'>
        <Image className='h-[554px] w-[375px] mr-20' src={Mobile2} alt='mobile' />
        <div>
          <div className="text-center font-['Marsden'] text-4xl font-medium leading-[72px] text-yellow-600 -ml-20">
            Der Zugang zur KI.m App enthält:
          </div>
          <div className="w-[623px] font-['Marsden'] text-2xl font-normal leading-[74px] tracking-tight text-white">
            <ul></ul>
            <li> Individuelle Mentorings mit KI.m</li>
            <li> Impulse von Experten</li>
            <li>Video Kurse zu verschiedenen Leadership Themen</li>
            <li>Analysen des eigenen (Führungs-) Verhaltens</li>
            <li>Lerntagebuch</li>
            <li>Technischer Support</li>
          </div>
          <div className='flex place-items-end space-x-10'>
            <ReadMoreButton text='Sales kontaktieren' />
            <ReadMoreButton text='Sales kontaktieren' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutKimMobileCard;
