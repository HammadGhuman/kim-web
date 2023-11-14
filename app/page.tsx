import AiDoesItBetter from '@/components/AiDoesItBetter';
import Card from '@/components/Card';
import Hero from '@/components/Hero';
import LeaderShip from '@/components/LeaderShip';
import HowItWork from '@/components/HowItWork';
import MeetOurTeam from '@/components/MeetOurTeam';
import OurPartners from '@/components/OurPartners';
import OurBlog from '@/components/OurBlog';
import { Fragment } from 'react';
import Brain from '@/public/Brain.svg';
import People from '@/public/Mentoring.svg';
import UpPeople from '@/public/upPeople.svg';
import Target from '@/public/target.svg';
import ReloadPeople from '@/public/reloadpeople.svg';
import divInfoBox from '@/public/ReadyTO.png';
import Image from 'next/image';
import GestureCard from '@/components/GestureCard';
import CookieButtonTop from '@/public/Close.svg';
import Link from 'next/link';
export default function Home() {
  const cards = [
    {
      id: 1,
      title: 'Ganzheitliche Learning Journey',
      description:
        'Führungskräfte durchlaufen ein systematisches Kompetenzentwicklungsprogramm, welches Möglichkeiten für Lernen, Reflexion und Evaluation bietet',
      img: Brain,
    },
    {
      id: 2,
      title: 'Mentoring on the job',
      description:
        'Die neue Form der Führungskräfteentwicklung, weg von Classroom Learning auf "Vorrat" hin zu einer täglichen Begleitung der Führungskräfte direkt am Arbeitsplatz',
      img: People,
    },

    {
      id: 4,
      title: 'Effektivere Führung',
      description:
        'Das Portfolio der vorhandenen Führungskräfte wird besser genutzt, da Führenden erlaubt wird, ihre Zeit effizienter für Führungsausgaben einzusetzen',
      img: UpPeople,
    },
    {
      id: 5,
      title: 'Wettbewerbsvorteile ',
      description:
        'Durch den Einsatz von KI.m können Führungsrisiken gesenkt und Kosten für eine teure Führungskräfteentwicklung eingespart werden',
      img: Target,
    },
    {
      id: 6,
      title: 'Change begleiten',
      description:
        'Die regelmäßige Nutzung von KI.m unterstützt die Fähigkeit und Bereitschaft, Veränderungsmaßnahmen anzunehmen',
      img: ReloadPeople,
    },
  ];
  return (
    <main>
      <Hero />
      <AiDoesItBetter />
      <div id='Wieläuft' className='flex items-center justify-center'>
        <div className='max-w-8xl mx-4 mt-10 flex flex-col flex-wrap items-center justify-center md:mx-10 md:flex-row md:gap-14 md:space-y-0'>
          {cards.map((item, index) => (
            <Fragment key={item.id}>
              {index === 2 && <GestureCard />}
              <Card
                key={item.id}
                image={item.img}
                title={item.title}
                description={item.description}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <LeaderShip />
      <HowItWork />
      <MeetOurTeam />
      <div className='mt-16'>
        <OurPartners />
      </div>
      {/* <BusinessSpecialist /> */}
      <OurBlog />
      <div className='relative mb-40 mt-20 flex items-center justify-center'>
        <div className='relative'>
          <Image src={divInfoBox} alt='div-info' className='-z-10' />
          <Link href="http://www.google.com" className='absolute bottom-7 cursor-pointer z-20 left-[41%] h-12 w-[220px]  bg-red-500 bg-opacity-0'></Link>
        </div>
      </div>
      <div>
        <div className=''>
          <button className='flex h-[54.19px] w-[252px] items-center justify-center rounded-r-xl bg-[#B77828] px-3'>
            <h1 className="mr-3 text-center font-['Marsden'] text-base font-medium leading-[72px] text-white">
              Cookie-Einstellungen
            </h1>
            <Image className='mt-1' src={CookieButtonTop} alt='close' />
          </button>
          <div className='flex h-[185px] justify-around border border-white border-opacity-30 bg-blue-400 bg-opacity-20 px-4'>
            <div>
              <h1 className="mt-10 font-['Marsden'] text-[32px] font-semibold leading-7 text-white">
                Cookies
              </h1>{' '}
              <p className="mt-3 w-[1207px] font-['Marsden'] text-[15px] font-normal leading-7 text-white">
                We’d like to collect data from your device while you use this
                website. This helps give you the best experience, keeps your
                account secure and supports personalised marketing on our
                website and social media. Choose ‘Accept all’ to agree we can
                collect your data in this way, or for more options choose
                ‘Preferences’. Find out more: cookie policy
              </p>
            </div>
            <div className='flex flex-col items-center justify-between py-10'>
              <div className='flex h-[47px] w-[171px] items-center justify-center rounded-[5px] border border-white'>
                {' '}
                <h1 className="font-['Marsden'] text-xl font-medium text-white">
                  Preferences
                </h1>
              </div>
              <div className='flex h-[47px] w-[171px] items-center justify-center rounded-[5px] bg-yellow-600'>
                <h1 className="font-['Marsden'] text-xl font-medium text-white">
                  Accept All
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
