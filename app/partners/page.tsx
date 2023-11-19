import PartnerBackground from '@/components/partnerBackground';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Check1 from '@/public/icons8-check-96.png';
import HandShake from '@/public/icons8-handshake-50.png';
import Contact from '@/public/contact-form.png';

import Steps from '@/components/Steps';
import Reply from '@/components/Reply';

import Folder from '@/public/folder.png';

import BenefitsCarousal from '@/components/BenifitsCarosal';
import Benifits from '@/components/Benifits';
import OurPartners from '@/components/OurPartners';
import PartnerCard from '@/components/PartnerCard';
import OurPartners2 from '@/components/OurPartner2';

const benifits = [
  {
    heading: 'Neue Zielgruppen & Umsatzquellen erschließen',
    description:
      'Mit KI.m kann ich Kunden an mich binden, Zusatzleistungen verkaufen, den Umsatz erhöhen und neue Zielgruppen erschließen, welche ich mit meinen Standardleistungen aus Budget- oder anderen Gründen nicht erreiche.',
  },
  {
    heading: 'Fokus auf Kernkompetenzen',
    description:
      'Die Entwicklung einer eigenen digitalen Lösung ist teuer, zeitaufwändig und muss gepflegt werden. Mit KI.m habe ich eine state-of-the-art Dienstleistung sofort und immer in bester Qualität zur Verfügung.',
  },
  {
    heading: 'Verlängerung der eigenen Werkbank',
    description:
      'KI.m ist als “verlängerte Werkbank“ gedacht, um ggf. eigene Leistungen weiter zu professionalisieren. Eigene Leistungen können mit KI.m kombiniert werden. Dadurch wird eine intensivere Begleitung des Kunden möglich.',
  },
  {
    heading: 'Nachhaltige Ergänzung',
    description:
      'KI.m ist kein Ersatz für Trainer, Berater, Coachs oder Mentoren, sondern bietet Ergänzungen und Erweiterungen der eigenen Leistungen.',
  },
];

function AskQuestion() {
  return (
    <div className='flex flex-col items-center justify-center font-Marsden md:pt-20 '>
      <div className='mt-10 w-[225px] text-center md:mt-0 md:w-auto'>
        <span className='text-[32px] font-medium leading-[38px] text-white  md:text-6xl'>
          KI.m für
        </span>
        <span className='text-[32px] font-medium leading-[38px] text-yellow-600  md:text-6xl'>
          {' '}
          Partner
        </span>
      </div>

      <div className='pt-7'>
        <PartnerBackground />
      </div>
    <div className='-mt-10'>
    <OurPartners2 />
    </div>

      <PartnerCard />

      <div
        id='Vorteile'
        className='mb-10 mt-10 py-10 text-center text-4xl font-medium leading-[72px] text-white md:-mb-10 md:text-6xl'
      >
        Der <span className='text-yellow-600'> Nutzen</span>
      </div>
      <div className='flex flex-col space-y-5 md:hidden'>
        {benifits.map((benifit) => (
          <Benifits
            heading={benifit.heading}
            description={benifit.description}
            key={benifit.heading}
          />
        ))}
      </div>
      <div className='hidden md:block'>
        <BenefitsCarousal />
      </div>

      <div
        id='SowerdenSiePartner'
        className='mt-10 w-[291px] text-center md:mt-10 md:w-auto'
      >
        <span className='text-5xl font-medium leading-[72px] text-white  md:text-6xl'>
          Wie wird man
        </span>
        <span className='text-5xl font-medium leading-[72px] text-yellow-600  md:text-6xl'>
          {' '}
          Partner?
        </span>
      </div>

      <div className='mt-10 flex flex-col items-center space-y-10 md:hidden'>
        <Steps
          image={Contact}
          step='01'
          instruction='Kontaktformular ausfüllen.'
        />
        <Steps
          image={Folder}
          step='02'
          instruction='Wir prüfen Deine Daten.Wir kontaktieren und'
        />
        <Steps image={HandShake} step='03' instruction='onboarden Dich.' />
        <Steps image={Check1} step='04' instruction="Los geht's!" />
      </div>

      {/* desktop steps */}

      <div className='relative mt-10 hidden h-[159px] w-[1195px] md:block'>
        <div className='absolute left-10 top-0 h-[159px] w-[159px]'>
          <div className='absolute left-0 top-0 h-[159px] w-[159px] rounded-full border border-white' />
          <div className='absolute left-[48px] top-[48px] h-16 w-16'>
            <Image
              className='absolute left-0 top-0 h-16 w-16'
              src={Contact}
              alt='check1'
            />
          </div>
        </div>
        <div className='absolute left-[344px] top-0 h-[159px] w-[159px]'>
          <div className='absolute left-10 top-0 h-[159px] w-[159px] rounded-full border border-white' />
          <div className='absolute left-[88px] top-[48px] h-16 w-16'>
            <Image
              className='absolute left-0 top-0 h-16 w-16'
              src={Folder}
              alt='check1'
            />
          </div>
        </div>
        <div className='absolute left-[690px] top-0 h-[159px] w-[159px]'>
          <div className='absolute left-10 top-0 h-[159px] w-[159px] rounded-full border border-white' />
          <div className='absolute left-[82px] top-[48px] h-16 w-16'>
            <Image
              className='absolute left-0 top-0 h-16 w-16'
              src={HandShake}
              alt='check1'
            />
          </div>
        </div>
        <div className='absolute left-[1036px] top-0 h-[159px] w-[159px]'>
          <div className='absolute -left-2 top-0 h-[159px] w-[159px] rounded-full border border-white' />
          <div className='absolute left-[38px] top-[48px] h-16 w-16'>
            <Image
              className='absolute left-0 top-0 h-16 w-16'
              src={Check1}
              alt='check1'
            />
          </div>
        </div>
      </div>

      <div className='relative mt-4 hidden h-[173px] w-[1346px] md:block '>
        <div className="absolute left-[48px] top-[80px] w-[302px] text-center font-['Marsden'] text-[26px] font-medium text-white">
          Kontaktformular ausfüllen.
          <br />
        </div>
        <div className="absolute left-[732px] top-[73px] w-[302px] text-center font-['Marsden'] text-[26px] font-medium text-white">
          onboarden Dich.
        </div>
        <div className="absolute left-[1090px] top-[73px] w-[170px] text-center font-['Marsden'] text-[26px] font-medium text-white">
          Los geht&apos;s!
        </div>
        <div className="absolute left-[386px] top-[80px] w-[310px] text-center font-['Marsden'] text-[26px] font-medium text-white">
          Wir prüfen Deine Daten. Wir kontaktieren und
        </div>
        <div className='absolute left-0 top-[29px] h-[0px] w-[143px] border border-neutral-200'></div>
        <div className='absolute left-[245px] top-[29px] h-[0px] w-[238px] border border-neutral-200'></div>
        <div className='absolute left-[591px] top-[29px] h-[0px] w-[238px] border border-neutral-200'></div>
        <div className='absolute left-[936px] top-[29px] h-[0px] w-[181px] border border-neutral-200'></div>
        <div className="absolute left-[167px] top-0 text-center font-['Marsden'] text-5xl font-extrabold text-orange-400">
          01
        </div>
        <div className="absolute left-[506px] top-0 text-center font-['Marsden'] text-5xl font-extrabold text-orange-400">
          02
        </div>
        <div className="absolute left-[852px] top-0 text-center font-['Marsden'] text-5xl font-extrabold text-orange-400">
          03
        </div>
        <div className="absolute left-[1142px] top-0 text-center font-['Marsden'] text-5xl font-extrabold text-orange-400">
          04
        </div>
        <div className='absolute left-[1223px] top-[29px] h-[0px] w-[123px] border border-neutral-200'></div>
      </div>
      <div
        id='SowerdenSiePartner'
        className='mt-10 w-[291px] text-center md:mt-20 md:w-auto'
      >
        <span className='text-5xl font-medium leading-[72px] text-white  md:text-6xl'>
          Jetzt als Partner
        </span>
        <span className='text-5xl font-medium leading-[72px] text-yellow-600  md:text-6xl'>
          {' '}
          bewerben!
        </span>
      </div>
      <Reply />
    </div>
  );
}

export default AskQuestion;
