import React from 'react';
import MobileCard from './MobileCard';
const num = [1, 2, 3, 4];
import Image from 'next/image';
import Group from '@/public/Group.svg';
import Link from 'next/link';
import Phone1 from '@/public/HomePhone1.png';
import Phone2 from '@/public/HomePhone2.png';
import Phone3 from '@/public/HomePhone3.png';
import Phone4 from '@/public/HomePhone4.png';

function HowItWork() {
  return (
    // <div className='relative mt-10 flex flex-col items-center justify-center'>
    //   <div className='text-center'>
    //     <span className='text-[40px] font-medium leading-[72px] text-white md:text-[62px]'>
    //       Wie läuft das {'  '}
    //     </span>
    //     <span className='text-[40px] font-medium leading-[72px] text-yellow-600 md:text-[62px]'>
    //       Mentoring ab?
    //     </span>
    //   </div>

    //   {num.map((item, index) => (
    //     <MobileCard odd={index % 2 === 0} key={item} />
    //   ))}

    //   <div className='absolute hidden md:block'>
    //     <div className='relative flex h-[0px] w-[1479px] -rotate-90 border border-blue-900'>
    //       <div className='-mt-2 ml-44 h-[15px] w-[15px] rounded-full bg-yellow-600' />
    //       <div className='-mt-2 ml-[30rem] h-[15px] w-[15px] rounded-full bg-yellow-600' />
    //       <div className='-mt-2 ml-[28rem] h-[15px] w-[15px] rounded-full bg-yellow-600' />
    //       <div className='-mt-2 ml-80 h-[15px] w-[15px] rounded-full bg-yellow-600' />
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className='md:hidden px-10'>
        <div className='text-center'>
          <span className="font-['Marsden'] text-[36px] font-medium leading-[72px] text-white">
            Wie läuft das{' '}
          </span>
          <span className="font-['Marsden'] text-[36px] font-medium leading-[72px] text-yellow-600">
            Mentoring ab?
          </span>
          <div className='mt-10 flex flex-col items-center justify-center'>
            <h1 className="font-['Marsden'] text-[22px] font-medium leading-10 text-gray-400">
              Step #1
            </h1>
            <div className="font-['Marsden'] text-2xl font-medium leading-10 text-white">
              Rapportaufbau:
            </div>
            <div className="mt-5 h-[68px] w-[306px] font-['Marsden'] text-sm font-medium text-white">
              <h1 className='text-start'>- Vertrauensaufbau</h1>
              <h1 className='text-start'>
                - Verbesserung des Mental Wellbeing
              </h1>
            </div>
            <Image src={Phone1} alt='phone1' />{' '}
          </div>

          <div className='mt-10 flex flex-col items-center justify-center'>
            <h1 className="font-['Marsden'] text-[22px] font-medium leading-10 text-gray-400">
              Step #2
            </h1>
            <div className="font-['Marsden'] text-2xl font-medium leading-10 text-white">
              Auftragsklärung:
            </div>
            <div className="mt-5 h-[68px] w-[306px] font-['Marsden'] text-sm font-medium text-white">
              <h1 className='text-start'>
                - Detallierte Beschreibung der Situation der Führungskraft
              </h1>
              <h1 className='text-start'>
                - Intelligente Rückfragen um alle möglichen Facetten zu
                berücksichtigen.
              </h1>
            </div>
            <Image className='mt-10' src={Phone2} alt='phone2' />{' '}
          </div>

          <div className='mt-10 flex flex-col items-center justify-center'>
            <h1 className="font-['Marsden'] text-[22px] font-medium leading-10 text-gray-400">
              Step #3
            </h1>
            <div className="font-['Marsden'] text-2xl font-medium leading-10 text-white">
              Mentoring:
            </div>
            <div className="mt-5 h-[68px] w-[306px] font-['Marsden'] text-sm font-medium text-white">
              <h1 className='text-start'>
                - Individuelle Reflexionsfragen um neue Perspektiven zu gewinnen
                und Lösungswege zu erarbeiten.
              </h1>
              <h1 className='text-start'>
                - Individuelle, detallierte Ratschläge/Handlungsempfehlungen
              </h1>
              <h1 className='text-center'>
                - Vorgefertigte Lerninhalte unserer Experten
              </h1>
            </div>
            <Image className='mt-20'  src={Phone3} alt='phone3' />{' '}
          </div>

          <div className='mt-10 flex flex-col items-center justify-center'>
            <h1 className="font-['Marsden'] text-[22px] font-medium leading-10 text-gray-400">
              Step #4
            </h1>
            <div className="font-['Marsden'] text-2xl font-medium leading-10 text-white">
              Debriefing:
            </div>
            <div className="mt-5 h-[68px] w-[306px] font-['Marsden'] text-sm font-medium text-white">
              <h1 className='text-start'>- Analyse der Mentoring-Session.</h1>
              <h1 className='text-start'>
                - Eintragen von Erkentnissen und Zielen in ein Lerntagebuch.
              </h1>
            </div>
            <Image className='mt-10' src={Phone4} alt='phone4' />{' '}
          </div>
        </div>
      </div>
      <div className='relative hidden items-center justify-center md:flex'>
        <Image src={Group} alt='group' />
        {/* <div className='   h-[150px] w-[250px] bg-red-500/0 hover:cursor-pointer' /> */}
        <Link
          href='/'
          className='absolute bottom-[7.3%] left-[36.5%] flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#b77828]
     transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
        >
          <h1 className="font-['Marsden'] text-xl font-medium text-white">
            Demo buchen
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default HowItWork;
