import Image from 'next/image';
import React from 'react';
import ReadMoreButton from './ReadMoreButton';
import Icons from '@/public/Mask group.png';
import Mob1 from '@/public/B.png';
import Mob2 from '@/public/C.png';
import Mob3 from '@/public/D.png';
import Mob4 from '@/public/E.png';

function AboutKimMobileCard2() {
  return (
    <div className='flex flex-col'>
      <div className='mt-20 flex flex-col md:flex-row'>
        <div className='flex md:space-x-0 space-x-3 pl-5'>
          <Image src={Icons} alt='icons' />
          <div className="-mt-1 flex md:h-[370px]  flex-col font-['Marsden'] md:text-2xl text-[12px] text-white">
            <h1 className='mt-5'>
              Situationsanalyse basierend auf Leadership-Modell
            </h1>
            <h1 className='mt-12'>
              Reflektion der Situation anhand gezielter Fragen
            </h1>
            <h1 className='mt-12'>
              Fundierte Ratschläge basierend auf dem Modell
            </h1>
            <h1 className='mt-14'>Möglichkeit zum selbstständigen Mentoring</h1>
            <h1 className='mt-14'>
              Individuelle Zielsetzung und Tracking der Zielerreichung
            </h1>
            <h1 className='mt-[45px] '>
              Terminerinnerung mit Motivation, diese wahrzunehmen
            </h1>
            <h1 className='mt-[55px]'>
              Viele weitere Funktionen, u.a. Bedarfsanalyse, Videokurse
            </h1>
          </div>
        </div>
        <Image className=' md:mt-0 mt-10 h-[554px] w-[375px]' src={Mob1} alt='mobile' />
      </div>

      <div className='mt-20 flex-col-reverse flex md:flex-row'>
        <Image
          className='md:mr-20 md:mt-0 mt-10 h-[554px] w-[375px] scale-x-[-1]'
          src={Mob2}
          alt='mobile'
        />
        <div className='flex items-center justify-center'>
          <div className='md:h-[327px] md:w-[626px] px-3 md:text-right'>
            <span className="font-['Marsden'] text-[32px] font-semibold leading-[56.32px] text-yellow-600">
              Mit KI.m die alltäglichen <br />
            </span>
            <span className="font-['Marsden'] text-2xl font-medium leading-[42.24px] text-white">
              Führungshindernisse besprechen. – Die Mentees durchlaufen einen
              strukturierten Mentoring Prozess und erhalten während eines
              „natürlichen“ Dialogs Raum für Reflexion, sowie individuelle
              Lösungsvorschläge.
            </span>
          </div>
        </div>
      </div>

      <div className='mt-20 flex flex-col md:flex-row'>
        <div className='flex items-center justify-center'>
          <div className='md:h-[327px] md:w-[693px] px-3'>
            <span className="font-['Marsden'] text-[28px] md:text-[32px] font-semibold leading-10 md:leading-[56.32px] text-yellow-600">
              Über das Lerntagebuch den eigenen Fortschritt festhalten und
              Insights in das eigene (Führungs-)Verhalten generieren. –<br />
            </span>
            <span className="font-['Marsden'] text-2xl font-semibold leading-[42.24px] text-white">
              Über das Lerntagebuch kontrollieren die Mentees ihre Ziele, können
              sich Learnings notieren, Mentorings planen und ihre Emotionen &
              Haltungen erforschen.
            </span>
          </div>
        </div>
        <Image className='md:mr-20  mt-10 md:mt-0 h-[554px] w-[375px] ' src={Mob3} alt='mobile' />
      </div>

      <div className='mt-20 flex flex-col-reverse md:flex-row'>
        <Image className='md:mr-20  md:mt-0 mt-10 h-[554px] w-[375px] ' src={Mob4} alt='mobile' />
        <div className='flex items-center justify-center'>
          <div className='md:h-[327px] md:w-[628px] md:text-right px-3'>
            <span className="font-['Marsden'] text-[32px] font-semibold leading-[56.32px] text-yellow-600">
              Videokurse von unseren Leadership-Experten bieten die Möglichkeit
              für vertiefende Weiterentwicklung in bestimmten Bereichen. –
            </span>
            <span className="font-['Marsden'] text-[28px] md:text-[32px] font-semibold leading-10 md:leading-[56.32px] text-white">
              {' '}
              <br />
            </span>
            <span className="font-['Marsden'] text-xl md:text-2xl font-medium leading-[42.24px] text-white">
              KI.m ist dazu in der Lage, dem Mentee passende Online Videokurse zu
              bestimmten Themenfeldern anzubieten. Diese können jederzeit über
              die KI.m App aufgerufen und durchgeführt werden.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutKimMobileCard2;
