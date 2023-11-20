'use client';
import Roadmap from '@/components/Roadmap';
import React from 'react';
import Carousel from 'react-simply-carousel';
import Arrow from '@/public/right-arrow.png';
import Image from 'next/image';
function RoadmapCarousel() {
  const [sidebarData, setSidebarData] = React.useState<any>({});
  const [activeSlide, setActiveSlide] = React.useState(0);
  const roadmapContent = [
    [
      {
        date: `2009`,
        sub: `Die Entstehung des Leadership Modells`,
        main: `Ausgelöst durch die Finanzkrise erforschte Jörg Krauter die Frage: „Wie führt man wirksam in Krisen und extremen Situationen in einem volatilen, unsicheren, komplexen und mehrdeutigen Geschäftsumfeld?“. In seiner Promotion zum PhD, die er in 2018 abschloss, entwickelte er die Grundlage für das Leadership Modell, das wir heute in KI.m einsetzen.`,
      },
      {
        date: `März 2020

        `,
        sub: `Corona Pandemie, die Theorie wird zu Praxis

        `,
        main: `Die Corona Pandemie wird als Extremereignis in unsere Geschichte eingehen. Diesen Umstand nutzte Jörg, um anhand einer empirischen Studie die Erkenntnisse seiner bisherigen Forschungsarbeit zu überprüfen und um aktuelle Trends, wie Digitalisierung und agiles Arbeiten zu erweitern.  `,
      },
    ],
    [
      {
        date: `September 2020`,
        sub: `Die Idee von KI.m entstand`,
        main: `Die Corona Pandemie rückte die Notwendigkeit der Digitalisierung im Bereich des Leadership Development ins Licht der Aufmerksamkeit, Präsenztrainings konnten nicht mehr stattfinden. In der gemeinsamen Diskussion zwischen Christian und Jörg entstand die Vision eines KI basierten Mentors.`,
      },
      {
        date: `Juni 2021`,
        sub: `Beginn der Konzeption von KI.m`,
        main: `Diese Idee griff Christian Krauter in seiner Bachelorarbeit auf und entwickelte ein technisches Konzept, sowie ein passendes Geschäftsmodell. `,
      },
    ],
    [
      {
        date: `Januar 2022`,
        sub: `Beginn der Entwicklung des ersten Prototypen`,
        main: `Nach der ausgiebigen Konzeptionsphase wurde im Januar 2022 damit begonnen, den ersten Prototypen zu entwickeln, um die Idee von KI.m wirklichkeit werden zu lassen.`,
      },
      {
        date: `Juni 2022`,
        sub: `Fertigstellung des ersten Portotypen `,
        main: `Happy Birthday! Mit dem ersten Prototypen ist KI.m offiziell "geboren" und es war eine große Freude sie zu testen und mit ihr Mentorings durchzuführen. Natürlich hatte die noch sehr junge KI.m noch Schwierigkeiten und es wurden einige Verbesserungepotenziale aufgedeckt.`,
      },
    ],
    [
      {
        date: `Juli 2022

        `,
        sub: `Beginn der Entwicklungsphase für den zweiten Prototypen

        `,
        main: `Da KI.m noch sehr jung ist, muss sie weiter lernen und sich entwickeln. Deshalb wurde in einer zweiten Entwicklungsphase damit begonnen, KI.m weiter zu verbessern, damit sie den Ansprüchen ihrer zukünftigen Mentees gerecht werden kann. `,
      },
      {
        date: `Oktober 2022 `,
        sub: `Geplante Fertigstellung des zweiten Prototypen

        `,
        main: `Wenn alles wie geplant läuft, wird im Oktober der zweite Prototyp von KI.m fertiggestellt sein und KI.m bereits dazu in der Lage sein, begeisternde und hilfreiche Mentorings mit Führungskräften durchzuführen.`,
      },
    ],
    [
      {
        date: `Juni 2023

        `,
        sub: `KI.m tritt in den Markt ein



        `,
        main: `Voraussichtlich wird KI.m im Juni 2023 für ihre Mentees da sein um diese zu unterstützen. Bis dahin wird sie einen vollwertigen Mentor darstellen und ihnen als vertrauensvoller Partner mit Ratschlägen zur Seite stehen.

        `,
      },
    ],
  ];

  return (
    <div className=' w-screen'>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'none',
          },
        }}
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (
            <div className='mx-10 cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white  hover:bg-white/40 group-hover:block'>
              <Image src={Arrow} className='rotate-90' alt='arrow' width={20} />
            </div>
          ),
        }}
        backwardBtnProps={{
          children: (
            <div className='mx-10 cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white  hover:bg-white/40 group-hover:block'>
              <Image
                src={Arrow}
                className='-rotate-90'
                alt='arrow'
                width={20}
              />
            </div>
          ),
        }}
        itemsToShow={1}
        speed={400}
        centerMode
      >
        {roadmapContent.map((item, index) => (
          <div key={index} className='z- mt-16 flex  flex-col space-y-10'>
            <Roadmap
              date={item[0].date}
              title={item[0].sub}
              description={item[0].main}
            />
            <div className='relative hidden w-[1232px]  border-t border-stone-300 md:block '>
              <div className='absolute left-10 top-[-1.2px] h-[5px] w-6 border-t-2 border-white' />
              <div className='absolute right-10 top-[-1.2px] h-[5px] w-6 border-t-2 border-white' />
            </div>

            {item[1] && (
              <div className='md:w-[700px] md:self-end'>
                <Roadmap
                  date={item[1].date}
                  title={item[1].sub}
                  description={item[1].main}
                />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default RoadmapCarousel;
