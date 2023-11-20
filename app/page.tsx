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
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';
import CookieBanner2 from '@/components/CookieBanner2';
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
          <Link
            href='http://www.google.com'
            className='absolute bottom-7 left-[41%] z-20 h-12 w-[220px] cursor-pointer  bg-red-500 bg-opacity-0'
          ></Link>
        </div>
      </div>
      {/* <CookieBanner /> */}
      <CookieBanner2 />
    </main>
  );
}
