import AboutBackground from '@/components/AboutBackground';
import AboutKim2 from '@/components/AboutKim2';
import AboutKim3 from '@/components/AboutKim3';
import AboutKimCard from '@/components/AboutKimCard';
import AboutKimCarousal from '@/components/AboutKimCarousal';
import AboutKimMobileCard from '@/components/AboutKimMobileCard';
import AboutLeadershipModalContent from '@/components/AboutLeadershipModalContent';
import Dasbietet from '@/components/Dasbietet';
import KommtCarousal from '@/components/KommtCarousal';
import LeaderShipDial from '@/components/LeaderShipDial';
import ReadMoreButton from '@/components/ReadMoreButton';
import Technology from '@/components/Technology';
import VortieleKimCard from '@/components/VortieleKimCard';
import Tech1 from '@/public/text 1.png';
import Tech2 from '@/public/Tech2.png';
import Tech3 from '@/public/Tech3.png';
import Tech4 from '@/public/Tech4.png';
import Tech5 from '@/public/Tech5.png';
import Blur from '@/public/blur.png';
import Arrow from '@/public/arrow.svg';

import Image from 'next/image';
import React from 'react';
import AboutKimMobileCard2 from '@/components/AboutKimMobileCard2';
import KommtCardMob from '@/components/KommtCardMob';
import AboutKimCardMob from '@/components/AboutKimCardMob';
const VertileKimContent = [
  {
    text: 'Effektivere Führung',
    subText:
      'Mit dem Einsatz des Mentoring on the job kann das Portfolio der vorhandenen Führungskräfte besser ausgenutzt werden, da es eine höhere Führungsspanne ermöglicht. Dies wird dadurch erreicht, dass es Führenden erlaubt, ihre Zeit wirksamer und gezielter für Führungsaufgaben einzusetzen.',
  },
  {
    text: 'Mentoring on the job',
    subText:
      'Mit dem modernen Ansatz des Mentoring on the job, gehen Unternehmen neue Wege der Führungskräfteentwicklung. Weg von Classroom Learning auf "Vorrat" hin zu einer täglichen Begleitung der Führungskräfte bei der Bewältigung ihrer Aufgaben direkt am Arbeitsplatz.',
  },
  {
    text: 'Gesteigerte Mitarbeiterbindung',
    subText:
      'Mit einem zunehmenden Mangel an qualifizierten Mitarbeitern, besonders im Führungs- und Fachkräftebereich, wird ein Mitarbeiterentwicklungsprogramm zum entscheidenden Erfolgsfaktor für die Mitarbeiterbindung. Dabei müssen budgetschonende Formate zum Einsatz kommen, die es jedem Mitarbeiter und jeder Führungskraft ermöglichen, an diesen teilzunehmen.',
  },
  {
    text: 'Wettbewerbsvorteile',
    subText:
      'Durch den Einsatz von KI.m können Führungsrisiken gesenkt und Kosten für eine teure Führungskräfteentwicklung eingespart werden.',
  },
  {
    text: 'Fördern von Chancengleichheit',
    subText:
      'Durch flächendeckenden Einsatz von KI.m lernen Führungskräfte einen wertschätzenden, bewussten und respektvollen Umgang mit Verschiedenheit und Individualität.',
  },
  {
    text: 'Change begleiten',
    subText:
      'Die regelmäßige Nutzung von KI.m zur Bewältigung täglicher Führungsherausforderungen unterstützt die Fähigkeit und Bereitschaft Veränderungsmaßnahmen anzunehmen, da über das Mentoring konkrete Lösungen angeboten werden können.',
  },
];

const VertileKimContent2 = [
  {
    text: 'Besser führen',
    subText:
      'KI.m bietet eine intensive und zuverlässige Partnerschaft, die es ermöglicht, besser führen zu können.',
  },

  {
    text: 'Neutral & Objektiv',
    subText:
      'KI.m ist in jeglicher Situation ein objektiver Berater und stigmatisiert oder diskriminiert nicht.',
  },

  {
    text: 'Jederzeit & an jedem Ort',
    subText:
      'Egal wann, egal wo. KI.m hat immer ein offenes Ohr für die Mentees.',
  },

  {
    text: 'Vertrauen',
    subText:
      'Alle Daten sind bei KI.m sicher! KI.m löscht Konversationen, nachdem diese beendet wurden und teilt keine Informationen mit Dritten',
  },
];

const leaderShipContent = [
  {
    step: '01',
    description:
      'Unser Führungsmodell basiert auf dem Complexity Leadership Ansatz, einem ganzheitlichen Ansatz zur Untersuchung der Komplexität und Dynamik von Führung. Es ist das Ergebnis einer umfangreichen wissenschaftlichen Bewertung, die acht Hauptstudien und hunderte von zusätzlichen Studien, einschließlich Meta-Analysen, umfasst.',
  },
  {
    step: '02',
    description:
      'Das Modell betrachtet mehr als 43 einzelne Indikatoren, die die Führung beeinflussen. Dazu gehören Persönlichkeit, psychologisches Kapital, grundlegende Bedürfnisse, Selbstwirksamkeit, Bereitschaft zur Zusammenarbeit, Macht, Teamarbeit, Stress, Kultur, Rolle und verschiedene Führungsstile. Auch die Leistung und die Arbeitsumgebung und deren gegenseitige Beeinflussung werden berücksichtigt.',
  },
  {
    step: '03',
    description:
      'All diese Elemente bilden den Rahmen für das Mentoring, eine offene und konstruktive Kommunikation zwischen Führungskräften und KI.m. Mit unserem Modell können Führungskräfte einzigartige Einblicke in ihr eigenes Führungsverhalten und in die Dynamiken in der Zusammenarbeit mit ihren Teammitgliedern gewinnen. Es ermöglicht ihnen, stärkere, belastbarere und effektivere Arbeitsbeziehungen aufzubauen und zu managen - besonders in anspruchsvollen Kontexten wie Krisen und Veränderungen.',
  },
];

const techContent = [
  {
    text: ' "Speech to Text" und "Text to Speech" Technologien sorgen für eine interaktive, natürliche Konversationsumgebung.',
    img: Tech1,
  },
  {
    text: ' Die "Intenterkennung" gewährleistet eine genaue Interpretation von Nutzeranfragen.',
    img: Tech2,
  },

  {
    text: 'Das KI-Modell "BERT" ermöglicht eine präzise Klassifizierung von Nutzeranfragen basierend auf unseren wissenschaftlichen Leadership-Modellen.',
    img: Tech3,
  },

  {
    text: 'Mit "GPT" generiert KI.m authentische, menschenähnliche Textnachrichten.',
    img: Tech4,
  },

  {
    text: ' Unsere "Sentiment & Tone Analyse" erfasst effektiv Nutzergefühle und -einstellungen.',
    img: Tech5,
  },
];

function page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Heading Section */}
      <div className='mt-10 text-center md:mt-24'>
        <span className="font-['Marsden'] text-[32px] font-medium leading-10 text-white md:text-[62px] md:leading-[72px]">
          KI.m für{' '}
        </span>
        <span className="font-['Marsden'] text-[32px] font-medium leading-10 text-yellow-600 md:text-[62px] md:leading-[72px]">
          Unternehmen
        </span>
      </div>
      <div className="mt-2 w-auto text-center font-['Marsden'] text-sm font-medium text-white md:w-[758px] md:text-[26px]">
        Hier erfährst Du wie KI.m Unternehmen hilft, den Unternehmenserfolg zu
        steigern.
      </div>
      {/* Video Section */}
      <div className='mt-7'>
        <AboutBackground />
      </div>
      {/* Card With the about kim description */}
      <AboutKimCard />
      {/* Heading VOrtile Kim */}
      <div className='mt-24 text-center'>
        <span className="font-['Marsden'] text-4xl font-semibold leading-[72px] text-white">
          Vorteile{' '}
        </span>
        <span className="font-['Marsden'] text-4xl font-semibold leading-[72px] text-yellow-600">
          KI.m
        </span>
      </div>
      <div className='relative overflow-hidden'>
        {/* <div className='absolute h-[950px] w-[1440px] bg-blue-400 bg-opacity-40 blur-[1085px]' /> */}
        <div className='relative'>
          {VertileKimContent.map(({ text, subText }) => (
            <VortieleKimCard key={text} subText={subText} heading={text} />
          ))}
        </div>
      </div>
      {/* Kommt Card Section */}
      <div className="mt-24 text-center font-['Marsden'] text-[32px] font-medium leading-[72px] text-white">
        Kommt Ihnen das bekannt vor?
      </div>
      <div className='hidden md:block'>
        <KommtCarousal />
      </div>
      <KommtCardMob />

      {/* Yellow Card Section */}
      <div className='mt-10 flex flex-col items-center justify-center rounded-[5px] bg-[#CD9246] px-3 py-8 md:mt-0 md:h-[216px] md:w-[1068px] md:px-0 md:py-0'>
        <div className="text-center font-['Marsden'] text-[32px] font-medium leading-10 text-white md:leading-[72px]">
          Unser Eigenes Sprachmodell
        </div>
        <div className="mt-4 text-center font-['Marsden'] text-xl font-normal leading-10 tracking-tight text-white md:mt-0 md:w-[1027px] md:leading-[49px]">
          Um einen bestmöglichen Schutz ihrer Daten zu garantieren, haben wir
          unser eigenes KI.m Sprachmodell entwickelt, welches ab Februar 2024
          für Sie verfügbar sein wird!
        </div>
      </div>
      {/* Unsere AngeBOt */}
      <div className='mt-24 text-center'>
        <span className="font-['Marsden'] text-4xl font-medium leading-[72px] text-white">
          Unser
        </span>
        <span className="font-['Marsden'] text-4xl font-medium leading-[72px] text-[#CD9246]">
          {' '}
          Angebot
        </span>
      </div>
      <AboutKimMobileCard />
      <div className='mb-10 mt-24 text-center'>
        <span className="font-['Marsden'] text-[32px] font-medium leading-10 text-white md:text-[62px] md:leading-[72px]">
          KI.m für{' '}
        </span>
        <span className="font-['Marsden'] text-[32px] font-medium leading-10 text-yellow-600 md:text-[62px] md:leading-[72px]">
          Führungskräfte
        </span>
      </div>
      <div className=''>
        <AboutKim3 />
      </div>
      {/* Führungskräfte  */}
      <div className="mt-24 text-center font-['Marsden'] text-[32px] font-semibold leading-10 text-white md:text-[40px] md:leading-[72px]">
        Führungskräfte wie Sie haben es nicht leicht:
      </div>
      <div className='hidden md:block'>
        <AboutKimCarousal />
      </div>

      <div className='mt-10 md:hidden'>
        <AboutKimCardMob />
      </div>

      {/*  Vorteile kIM 2*/}

      <div className='mt-24 text-center'>
        <span className="font-['Marsden'] text-4xl font-semibold leading-[72px] text-white">
          Vorteile{' '}
        </span>
        <span className="font-['Marsden'] text-4xl font-semibold leading-[72px] text-yellow-600">
          KI.m
        </span>
      </div>

      <div className='relative'>
        <div className=' mt-10'>
          {VertileKimContent2.map(({ text, subText }) => (
            <VortieleKimCard key={text} subText={subText} heading={text} />
          ))}
        </div>
      </div>

      <div className='mb-10 mt-24'>
        <span className="font-['Marsden'] text-[32px] font-semibold leading-[72px] text-white">
          Das bietet KI.m:
        </span>
      </div>
      <Dasbietet />
      <div className='mt-10'>
        <button className='flex scale-150 items-center justify-center  space-x-3 rounded-lg bg-[#B77828] px-1 py-1 text-white'>
          <span className='pl-3 text-center'>Jetzt kaufen!</span>
          <div className='flex h-8 w-8 items-center justify-center rounded-md bg-white'>
            <Image src={Arrow} alt='arrow' />
          </div>
        </button>{' '}
      </div>
      {/* LeaderSHip Model */}
      <div id='leadership-model' className='mt-24 md:w-[530px]'>
        <span className="font-['Marsden'] text-[32px] font-semibold leading-10 text-white md:text-[62px] md:leading-[72px]">
          Leadership{' '}
        </span>
        <span className="font-['Marsden'] text-[32px] font-semibold leading-10 text-yellow-600 md:text-[62px] md:leading-[72px]">
          Model
        </span>
      </div>

      <div>
        {leaderShipContent.map((item) => (
          <AboutLeadershipModalContent
            key={item.step}
            step={item.step}
            description={item.description}
          />
        ))}
      </div>
      <LeaderShipDial />
      <div className="mt-10 text-center font-['Marsden'] text-4xl font-semibold leading-10 text-white md:mt-0 md:w-[861px] md:leading-[72px]">
        Publications related to our leadership mode
      </div>
      <div className="mt-4 px-3 text-center font-['Marsden'] text-2xl font-normal leading-10 text-white md:h-[99px] md:w-[429px] md:px-0 md:leading-[47.17px]">
        Hier werden wir verschiedene PDFs hinterlegen
      </div>

      <div className='mb-10 mt-10 flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-16 md:space-y-0'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className="text-center font-['Marsden'] text-[32px] font-semibold leading-[62.89px] text-white underline">
            1. PHD arbeit
          </div>
          <button
            className='flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#b77828]
     transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
          >
            <h1 className="font-['Marsden'] text-xl font-medium text-white">
              Download
            </h1>
          </button>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className="text-center font-['Marsden'] text-[32px] font-semibold leading-[62.89px] text-white underline">
            2. Studie{' '}
          </div>
          <button
            className='flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#b77828]
     transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
          >
            <h1 className="font-['Marsden'] text-xl font-medium text-white">
              Download
            </h1>
          </button>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className="text-center font-['Marsden'] text-[32px] font-semibold leading-[62.89px] text-white underline">
            3. Studie{' '}
          </div>
          <button
            className='flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#b77828]
     transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
          >
            <h1 className="font-['Marsden'] text-xl font-medium text-white">
              Download
            </h1>
          </button>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className="text-center font-['Marsden'] text-[32px] font-semibold leading-[62.89px] text-white underline">
            4. Buch Titel{' '}
          </div>
          <button
            className='flex h-[61px] w-[225px] items-center justify-center rounded-[10px] bg-[#b77828]
     transition-all duration-200 hover:bg-yellow-700 focus:scale-90'
          >
            <h1 className="font-['Marsden'] text-xl font-medium text-white">
              Download
            </h1>
          </button>
        </div>
      </div>

      <div className="mb-24 mt-10 text-center font-['Marsden'] text-[62px] font-medium leading-[72px] text-yellow-600">
        Technick
      </div>

      <AboutKim2 />
      <div className="mt-20 px-4 text-center font-['Marsden'] text-xl font-normal text-white md:w-[1133px]  md:text-2xl">
        Als innovatives KI-Startup präsentieren wir stolz KI.m - unsere speziell
        für iOS und Android entwickelte Smartphone-App. KI.m nutzt
        fortschrittlichste KI-Technologien, um Führungskräften ein
        maßgeschneidertes Mentoring-Erlebnis zu ermöglichen.
      </div>

      <div className="mt-12 px-4 text-center font-['Marsden'] text-[32px] font-semibold leading-[49px] text-white md:w-[849px] md:px-0">
        {' '}
        State of the Art Technologien in Nutzerhand: Unser Technologieportfolio
        bietet nur das Beste für unsere Nutzer, darunter:
      </div>
      {techContent.map((item) => (
        <Technology key={item.text} img={item.img} text={item.text} />
      ))}
      <h1 className="mt-24 h-[38px] w-[121px] text-center font-['Marsden'] text-[32px] font-semibold text-white">
        Produkt
      </h1>
      <p className="mt-3 text-center font-['Marsden'] text-2xl font-medium leading-[42.24px] text-white md:h-[167px] md:w-[689px]">
        KI.m basiert auf einem wissenschaftlich fundiertem Leadership-Modell und
        bietet eine Vielzahl von Funktionen
      </p>
      <AboutKimMobileCard2 />
    </div>
  );
}

export default page;
