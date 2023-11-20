import Image from 'next/image';
import React from 'react';
import Mobile1 from '@/public/AboutKimPhone1.png';
import Mobile2 from '@/public/A.png';
import ReadMoreButton from './ReadMoreButton';
function AboutKimMobileCard() {
  return (
    <div className='flex flex-col'>
      <div className='mt-20 flex flex-col md:flex-row'>
        <div className="md:h-[370px]   w-screen md:w-[586px] px-5 text-justify font-['Marsden'] text-2xl font-normal leading-10 md:leading-[74px] tracking-tight text-white">
          Im Rahmen einer ganzheitlichen Learning-Journey, durchläuft eine
          Führungskraft ein strukturiertes und systematisches
          Kompetenzentwicklungsprogramm, welches in unterschiedlichen Phasen
          Möglichkeiten für Lernen, Reflexion und Evaluation mit einbezieht.
        </div>
        <Image
          className=' md:h-[554px] md:w-[375px] w-[329px] h-auto md:mt-0 mt-8'
          src={Mobile1}
          alt='mobile'
        />
      </div>

      <div className='mt-20 flex flex-col md:flex-row'>
        <Image
          className='mr-20 hidden h-[554px] w-[375px] md:block'
          src={Mobile2}
          alt='mobile'
        />
        <div>
          <div className="-ml-8 md:-ml-20 text-center font-['Marsden'] w-full text-2xl md:text-4xl font-medium leading-10 md:leading-[72px] text-yellow-600">
            Der Zugang zur KI.m App enthält
          </div>
          <div className="md:w-[623px] font-['Marsden']  px-4 md:px-0 font-normal leading-[74px] tracking-tight text-white">
            <li className='md:text-2xl text-lg mt-5'> Individuelle Mentorings mit KI.m</li>
            <li className='md:text-2xl text-lg mt-10'> Impulse von Experten</li>
            <li className='md:text-2xl text-lg mt-10'>Video Kurse zu verschiedenen Leadership Themen</li>
            <li className='md:text-2xl text-lg mt-10'>Analysen des eigenen (Führungs-) Verhaltens</li>
            <li className='md:text-2xl text-lg mt-10'>Lerntagebuch</li>
            <li className='md:text-2xl text-lg mt-10 mb-10'>Technischer Support</li>
          </div>
          <div className='flex flex-col md:flex-row space-y-3 px-3 md:place-items-end md:space-x-10 md:space-y-0 md:px-0'>
            <ReadMoreButton text='Sales kontaktieren' />
            <ReadMoreButton text='Sales kontaktieren' />
          </div>
          <Image
            className='mt-8 h-[554px] w-[375px] md:hidden'
            src={Mobile2}
            alt='mobile'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutKimMobileCard;
