import Image from 'next/image';
import React from 'react';
import Mobile1 from '@/public/AboutKimPhone1.png';
import Mobile2 from '@/public/A.png';
import ReadMoreButton from './ReadMoreButton';
import Arrow from '@/public/arrow.svg';

function AboutKimMobileCard() {
  return (
    <div className='flex flex-col'>
      <div className='mt-20 flex flex-col md:flex-row'>
        <div className="w-screen   px-5 text-justify font-['Marsden'] text-2xl font-normal leading-10 tracking-tight text-white md:h-[370px] md:w-[586px] md:leading-[74px]">
          Im Rahmen einer ganzheitlichen Learning-Journey, durchläuft eine
          Führungskraft ein strukturiertes und systematisches
          Kompetenzentwicklungsprogramm, welches in unterschiedlichen Phasen
          Möglichkeiten für Lernen, Reflexion und Evaluation mit einbezieht.
        </div>
        <Image
          className=' mt-8 h-auto w-[329px] md:mt-0 md:h-[554px] md:w-[375px]'
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
          <div className="-ml-8 w-full text-center font-['Marsden'] text-2xl font-medium leading-10 text-yellow-600 md:-ml-20 md:text-4xl md:leading-[72px]">
            Der Zugang zur KI.m App enthält
          </div>
          <div className="px-4 font-['Marsden']  font-normal leading-[74px] tracking-tight text-white md:w-[623px] md:px-0">
            <li className='mt-5 text-lg md:text-2xl'>
              {' '}
              Individuelle Mentorings mit KI.m
            </li>
            <li className='mt-10 text-lg md:text-2xl'> Impulse von Experten</li>
            <li className='mt-10 text-lg md:text-2xl'>
              Video Kurse zu verschiedenen Leadership Themen
            </li>
            <li className='mt-10 text-lg md:text-2xl'>
              Analysen des eigenen (Führungs-) Verhaltens
            </li>
            <li className='mt-10 text-lg md:text-2xl'>Lerntagebuch</li>
            <li className='mb-10 mt-10 text-lg md:text-2xl'>
              Technischer Support
            </li>
          </div>
          <div className='flex flex-col space-y-3 px-3 md:flex-row md:place-items-end md:space-x-10 md:space-y-0 md:px-0'>
            <button
              className='flex h-[61px] w-[225px] select-none items-center justify-center rounded-[10px] bg-[#b77828] transition-all
     duration-200 hover:cursor-pointer hover:bg-yellow-700 focus:scale-90'
            >
              <span className='text-center mx-5 text-xl font-medium text-white'>Jetzt kaufen!</span>
              <div className='flex h-10 w-10 items-center justify-center rounded-md bg-white'>
                <Image src={Arrow} alt='arrow' />
              </div>
            </button>
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
