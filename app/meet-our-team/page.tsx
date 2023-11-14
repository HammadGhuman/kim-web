'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Team1 from '@/public/Team1.webp';
import Team2 from '@/public/Team2.webp';
import Team3 from '@/public/Team3.webp';
import Team4 from '@/public/Team4.webp';

import Team1Land from '@/public/Team1Land.webp';
import Team2Land from '@/public/Team2Land.webp';
import Team3Land from '@/public/Team3Land.webp';
import Team4Land from '@/public/Team4Land.webp';

import Partner1 from '@/public/logo 1.png';
import Partner2 from '@/public/logo 2.png';
import Partner3 from '@/public/Logo 3.png';
import Partner4 from '@/public/Logo 4.png';
import Partner5 from '@/public/Logo 5.png';
import Partner6 from '@/public/logo 6.png';
import Partner7 from '@/public/Partner7.png';

import Partner1Land from '@/public/Quids_groupphoto_all_groß.webp';
import Partner2Land from '@/public/SecondPartnerLand.jpg';
import Partner3Land from '@/public/ThirdPartnerLand.webp';
import Partner4Land from '@/public/FourthPartnerLand.webp';
import Partner5Land from '@/public/FifthPartnerLand.webp';
import Partner6Land from '@/public/SixthPartnerLand.webp';
import Partner7Land from '@/public/SeventhPartnerLand.webp';

import ContactForm from '@/public/icons8-form-100.png';
import Carousel from 'react-simply-carousel';
import ReadMoreButton from '@/components/ReadMoreButton';
import Roadmap from '@/components/Roadmap';
import Arrow from '@/public/right-arrow.png';
import Link from 'next/link';
function Page() {
  const [sidebarData, setSidebarData] = useState<any>({});
  const [activeSlide, setActiveSlide] = useState(0);

  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (sidebarData.img) {
      setCurrentImage(sidebarData.img);
    }
  }, [sidebarData]);

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
    <div className='drawer drawer-end'>
      <input id='my-drawer-1' type='checkbox' className='drawer-toggle' />

      <div className='drawer-content mx-0 flex flex-col items-center justify-center px-0 font-Marsden'>
        <div className='mt-[104px] w-[225px] text-center text-[38px] font-medium leading-10 text-white md:w-full  md:text-[62px]'>
          Lerne unser <br className='md:hidden' />
          <span className='text-[#B77828]'>Team kennen</span>
        </div>

        <div className='flex w-full items-center justify-center '>
          {/* <div className='grid'> */}
          <div className='drawer-button mt-20 flex flex-col flex-wrap items-center justify-start md:flex-row'>
            <label
              htmlFor='my-drawer-1'
              onClick={() =>
                setSidebarData({
                  img: Team1Land,
                  name: 'Christian Krauter',
                  position: '  Gründer & Geschäftsführer',
                  description: [
                    `Christian Krauter ist unser Produkt-Experte. Christian schloss im Januar 2022 seinen Bachelor der Betriebswirtschaftslehre an der Hochschule Pforzheim ab. Er entwickelte im Zuge seiner Bachelorarbeit ein technisches Konzept, sowie ein Geschäftsmodell, um die Idee eines KI-Mentors Wirklichkeit werden zu lassen. Seine Leidenschaft für die Entwicklung hochqualitativer und innovativer digitaler Produkte zeigte Christian bereits in seiner Zeit als Praktikant und Werkstudent in einem FinTech Startup, wo er bei einer von ihm mit konzipierten Plattform mit dem ibexa Award "Best customer Project of the year" ausgezeichnet wurde.`,

                    `Christian ist für die Konzeption, das Design der Software zuständig und begleitet gemeinsam mit unseren Partnern die technische Umsetzung der Software. Dabei verbindet er die neusten Erkenntnisse der Führungskräfteentwicklung mit innovativen Technologien.`,
                    `________________________________________________________`,

                    `Was wäre der Titel Deiner Autobiografie?`,
                    `Christian Krauter - vom Sofa auf den Schreibtischstuhl`,

                    `Welches Objekt auf Deinem Schreibtisch ist essenziell zum Arbeiten für Dich?`,
                    `Mein zweiter Bildschirm`,

                    `Welcher Schritt in deiner Morgenroutine ist die Grundlage für einen erfolgreichen Tag?`,
                    `Ein großes Nutella-Brot bevor der Computer angeht`,

                    `Wer oder Was ist Deine größte Motivation?`,
                    `Meine Freunde und Familie`,

                    `Wenn Du ein Tier wärst, welches Tier wäre das, und warum?`,
                    `Eine Ameise, weil ich immer etwas zu tun haben muss
                    `,
                  ],
                })
              }
            >
              <div className='group relative'>
                <Image
                  className='cursor-pointer transition-opacity duration-300 group-hover:opacity-50 md:h-[524px] md:w-[488px]'
                  src={Team1}
                  alt='team1'
                />
                <div className='absolute bottom-10 ml-10 mt-4 flex w-full select-none flex-col items-start text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <h1 className='font-Marsden text-2xl font-medium tracking-tight  text-white'>
                    Christian Krauter
                  </h1>
                  <h1 className='font-Marsden text-2xl font-medium text-yellow-600 '>
                    Gründer & Geschäftsführer
                  </h1>
                </div>
              </div>
            </label>

            <label
              htmlFor='my-drawer-1'
              onClick={() =>
                setSidebarData({
                  img: Team2Land,
                  name: 'Dr. Jörg Krauter',
                  position: '  Experte & Berater',
                  description: [
                    `Jörg Krauter ist unser Leadership-Experte. Jörg ist seit 2001 Unternehmer und Gründer einer Unternehmensberatung, welche sich auf Leadership und Change-Management und Kollaboration spezialisiert hat. Seine Leidenschaft und Expertise im Bereich des Leadership führten dazu, dass Jörg einen Ph.D. Abschluss der University of Gloucestershire, UK, im Advanced Postgraduate Program of Business Administration erworben hat. Des Weiteren war er mehrere Jahre Lehrbeauftragter für Führungspsychologie an der Hochschule Fresenius und hatte eine Professur für Betriebswirtschaftslehre und Organisationsführung an der FOM – Hochschule für Angewandte Wissenschaften Wirtschaft und Management inne.`,

                    `Jörg hat das Leadership-Modell entwickelt, welches von KI.m genutzt wird und berät uns, damit die verwendeten Methoden und Konzepte den aktuellsten wissenschaftlichen und praktischen Standards entsprechen.`,

                    ` _______________________________________________________________`,

                    `Auf was möchtest Du in Deinem Leben nicht (einen Tag) verzichten müssen?`,
                    `Familie, Freunde, Freiheit`,

                    `Was ist für Dich persönlich Erfolg?`,
                    `Ziele zu erreichen, auch wenn es dauert`,

                    `Wenn Dein Leben verfilmt werden würde, wie würde der Film heißen?`,
                    `Mountain View`,

                    `Was auf Deinem Schreibtisch ist essenziell zum Arbeiten für Dich?`,
                    `Computer, Familienfotos`,

                    `Was ist das spannendste Gebäude, in dem Du jemals warst?`,
                    `Golden Gate Bridge, San Francisco, USA
                  `,
                  ],
                })
              }
            >
              <div className='group relative'>
                <Image
                  className='cursor-pointer transition-opacity duration-300 group-hover:opacity-50 md:h-[524px] md:w-[488px]'
                  src={Team2}
                  alt='team1'
                />
                <div className='absolute bottom-10 ml-10 mt-4 flex w-full select-none flex-col items-start text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <h1 className='font-Marsden text-2xl font-medium tracking-tight  text-white'>
                    Dr. Jörg Krauter
                  </h1>
                  <h1 className='font-Marsden text-2xl font-medium text-yellow-600 '>
                    Experte & Berater
                  </h1>
                </div>
              </div>
            </label>

            <label
              htmlFor='my-drawer-1'
              onClick={() =>
                setSidebarData({
                  img: Team3Land,
                  name: 'Celine Jensen',
                  position: 'Marketing Expertin',
                  description: [
                    `Celine Jensen ist unser kreativer Kopf hinter dem Marketing. Nach erfolgreichem Abschluss ihres Bachelors in der Betriebswirtschaftslehre mit Schwerpunkt Marketingkommunikation und Werbung an der Hochschule Pforzheim, schließt Sie nun im
                    Kommenden Februar ihr Masterstudium im Bereich International Marketing and Communication ab.`,

                    `Bei KI.m unterstützt sie uns in allen marketing-relevanten Themen, verwaltet unsere Social Media Kanäle, hält Euch über den Fortschritt von KI.m auf dem Laufenden und versorgt Euch mit relevanten Inhalten und News`,

                    `_____________________________________________________`,

                    `Bist Du eher ein Morgen- oder Abendmensch?`,
                    `Ganz klar Abendmensch`,

                    `Ohne was kannst Du nicht arbeiten?`,
                    `Entspanntes Frühstück und Kaffee`,

                    `Wie sieht Dein kreativer Prozess aus?`,
                    `Zuerst muss ein Moodboard gemacht werden - danach sieht man weiter`,

                    `Was steht schon lange auf Deiner Bucket List?`,
                    `Eine Reise nach Island`,

                    `Auf welcher Webseite verbringst Du online am meisten Zeit?`,
                    `Pexels
                  
                  `,
                  ],
                })
              }
            >
              <div className='group relative'>
                <Image
                  className='cursor-pointer transition-opacity duration-300 group-hover:opacity-50 md:h-[524px] md:w-[488px]'
                  src={Team3}
                  alt='team1'
                />
                <div className='absolute bottom-10 ml-10 mt-4 flex w-full select-none flex-col items-start text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <h1 className='font-Marsden text-2xl font-medium tracking-tight  text-white'>
                    Celine Jensen
                  </h1>
                  <h1 className='font-Marsden text-2xl font-medium text-yellow-600 '>
                    Marketing Expertin
                  </h1>
                </div>
              </div>
            </label>

            <label
              htmlFor='my-drawer-1'
              onClick={() =>
                setSidebarData({
                  img: Team4Land,
                  name: 'Eric Heisch',
                  position: 'Sales Manager',
                  description: [
                    `Eric Heisch ist unser Sales-Experte. Eric begann sein Studium in Frankreich und setzte es dann in Deutschland fort. Innerhalb seines BWL-Studiums wählte er die Schwerpunkte Finanzen, Logistik, Marketing und Vertrieb. Aktuell schreibt er seine Bachelorarbeit an der Hochschule für Technik in Stuttgart, in der es um die Anwendung von Künstlicher Intelligenz in Unternehmen geht. Er kann zudem schon auf eine mehrjährige Sales-Erfahrung in der Branche der Informationsdienste zurückblicken.`,
                    `Eric ist in seiner Position aktuell für den Vertriebsprozess von KI.m verantwortlich. Dies umfasst die Akquise neuer Kunden, die Betreuung bestehender Kunden sowie die Beantwortung sämtlicher Fragen und Anliegen. 
                  `,
                    `Wo ist dein Lieblingsort, um abzuschalten und neue Ideen zu sammeln?`,
                    `Am liebsten am Strand`,

                    `Wenn du den Rest deines Lebens nur noch ein Gericht essen könntest, welches wäre das?`,
                    `Pulposalat`,

                    `Was ist dein Geheimrezept für eine gute Work-Life-Balance?`,
                    `Hobbys nachgehen; Screenfreie Zeit einplanen & Interessen/Fähigkeiten entwickeln, die das berufliche und private Leben verbinden`,

                    `Welcher war der beste Rat, den du je bekommen hast?`,
                    `Bleibe immer neugierig und offen für ständiges Lernen.`,

                    `Welches Lied motiviert dich, wenn du mal einen Energie-Boost brauchst?`,
                    `Ain´t No Mountain High Enough-Marvin Gaye & Tammi Terrell`,
                  ],
                })
              }
            >
              <div className='group relative mx-[50px] md:mx-0'>
                <Image
                  className='cursor-pointer transition-opacity duration-300 group-hover:opacity-50 md:h-[525px] md:w-[488px]'
                  src={Team4}
                  alt='team4'
                />
                <div className='absolute bottom-10 ml-10 mt-4 flex w-full select-none flex-col items-start text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <h1 className='font-Marsden text-2xl font-medium tracking-tight  text-white'>
                    Eric Heisch
                  </h1>
                  <h1 className='font-Marsden text-2xl font-medium text-yellow-600 '>
                    Sales Manager
                  </h1>
                </div>
              </div>
            </label>

            <div className='hidden items-center justify-center md:col-span-1 md:flex'>
              <div className=' w-[488px] flex-col items-center justify-center md:flex '>
                <div className='mt-10 text-center text-4xl font-semibold text-white'>
                  Werde Teil <br /> des Teams
                </div>
                <div className='mt-10'>
                  <Image width={74} height={74} src={ContactForm} alt='form' />
                </div>

                <div className='mt-10 hidden md:block'>
                  <Link href='/careers'>
                    <ReadMoreButton text='Hier bewerben' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10 text-center text-4xl font-semibold text-white md:hidden'>
          Werde Teil <br /> des Teams
        </div>

        <div className='md:hidden'>
          <Link href='/careers'>
            <ReadMoreButton text='Hier bewerben' />
          </Link>
        </div>

        <div className="mt-[138px] text-center font-['Marsden'] text-[62px] font-medium leading-[72px] text-white">
          KI.m <span className='text-yellow-600'>Partner</span>
        </div>

        <div className='mt-20 grid grid-cols-1 place-items-center md:grid-cols-3'>
          <label
            htmlFor='my-drawer-1'
            onClick={() =>
              setSidebarData({
                img: Partner1Land,
                name: `Quids`,
                href: 'https://www.quids.tech/',
                description: [
                  `Quids ist ein End-to-End-Team von Computeringenieuren, welche entschlossen sind Vordenkern im Bereich der KI/ML Technologie zu werden.`,
                  `Das Team hatte bereits die Gelegenheit, mit mehreren Startups zusammenzuarbeiten - unter anderem mit einem im Silicon Valley. Dadurch haben sie bereits mehrfach die Entwicklung eines erfolgreichen Produkts von der ersten POC-Version bis hin zur Produkteinführung begleitet.`,
                  `Jetzt hilft Quids uns dabei, unsere Vision mittels ihrer Expertise in der Entwicklung proprietärer KI/ML-Lösungen sowie durch einen iterativen Ansatz und die Übernahme von Best Practices der Branche, umzusetzen.`,
                ],
              })
            }
          >
            <Image
              width={200}
              className='rounded hover:cursor-pointer md:mx-10'
              src={Partner1}
              alt='partner1'
            />
          </label>
          <label
            htmlFor='my-drawer-1'
            onClick={() =>
              setSidebarData({
                img: Partner2Land,
                name: 'Kathrin Hornke',
                href: `https://www.mediation-hornke.de/`,
                description: [
                  `Kathrin Hornke ist zertifizierte Mediatorin und NLP-Coach mit langjähriger Berufserfahrung im Bereich Beschaffung, Rechnungsprüfung in Industrie- und Handelsunternehmen mit Führungsverantwortung und Handlungsvollmacht.`,

                  `Ihre langjährige Berufserfahrung als Führungskraft gekoppelt an die Weiterbildung zur Mediatorin und NLP Personal Coach 2.0 befähigen sie, Mitarbeiter zu schulen und Konflikte zu erkennen, sichtbar zu machen und aufzulösen.`,
                ],
              })
            }
          >
            <Image
              width={200}
              className='rounded hover:cursor-pointer md:mx-10'
              src={Partner2}
              alt='Partner2'
            />
          </label>
          <label
            htmlFor='my-drawer-1'
            onClick={() =>
              setSidebarData({
                img: Partner3Land,
                name: 'Tngo Zwermann',
                href: `https://ingozwermann.com/`,
                description: [
                  `Ingo Zwermann ist Coach und Consultant mit globaler und langjähriger Führungserfahrung als HR Executive in den Branchen Automobil, Glas/Chemie und Bau/Energie/Dienstleistung.Des Weiteren ist er Dozent für Leadership an der Fresenius University of applied science.`,
                ],
              })
            }
          >
            <Image
              width={200}
              className='rounded hover:cursor-pointer md:mx-10'
              src={Partner3}
              alt='partner3'
            />
          </label>
          <label
            htmlFor='my-drawer-1'
            onClick={() =>
              setSidebarData({
                img: Partner4Land,
                name: 'Dr. Axel Gomeringer',
                href: `https://www.draxelgomeringer.de/`,
                description: [
                  `Dr.-Ing. Axel Gomeringer ist Coach und Consultant für technische Führungskräfte mit langjähriger Erfahrung in der Führung von F&E- und Innovationsteams im Maschinenbau, der Automatisierungstechnik, der Elektronikindustrie und im Hochschulbereich.`,

                  `Sein Fokus liegt auf der Begleitung von technischen Führungskräften, technischen Teams und Organisationen hin zu mehr Wirksamkeit, durch die Erschließung der persönlichen Wachstumspotenziale. Leadership, Karriereentwicklung und Überwindung persönlicher Krisen sind die Schwerpunkte seiner Arbeit.`,
                ],
              })
            }
          >
            <Image
              width={200}
              className='rounded hover:cursor-pointer md:mx-10'
              src={Partner4}
              alt='partner4'
            />
          </label>
          <label
            htmlFor='my-drawer-1'
            onClick={() =>
              setSidebarData({
                img: Partner5Land,
                name: 'Britta Eremit',
                href: `https://www.bechangecompany.com/en/home/`,
                description: [
                  `Britta Eremit ist Change-Management Consultant, Coach und Executive Trainer mit internationaler und langjähriger Erfahrung in den Branchen Banken, Asset Management und Real Estate.`,

                  `Des Weiteren liegt ihre Expertise und Leidenschaft in der Begleitung von Projekten im Change- und Transformationsmanagement, der Implementierung von Unternehmenskulturen, die von Wertschätzung und werteorientierter Arbeitsethik geprägt sind sowie der stärkenorientierten Entwicklung von Individuen, Teams und Führungskräften.`,
                ],
              })
            }
          >
            <Image
              width={200}
              className='scale-[0.70] rounded hover:cursor-pointer md:mx-10'
              src={Partner5}
              alt='partner1'
            />
          </label>
          <label
            htmlFor='my-drawer-1'
            onClick={() =>
              setSidebarData({
                img: Partner6Land,
                name: 'Andrea Kunze',
                href: `https://andreakunze.de/coaching/`,
                description: [
                  `Andrea Kunze ist zertifizierter systemischer Coach und Mitglied im Deutschen Bundesverband Coaching (DBVC). Sie hat langjährige Führungserfahrung als HR Executive und ist Expertin für Mitarbeiterbindung in mittelständischen Unternehmen. `,

                  `Ihre Expertise und Leidenschaft liegt darin die Menschen und Unternehmen dabei zu unterstützen, ihre ungenutzte Potentiale frei zu legen und dadurch ihre persönliche Entwicklung auf das nächste Level zu heben.`,
                ],
              })
            }
          >
            <Image
              width={200}
              className='rounded hover:cursor-pointer md:mx-10'
              src={Partner6}
              alt='partner1'
            />
          </label>

          <label
            htmlFor='my-drawer-1'
            className=' mt-10 scale-150 md:col-span-3'
            onClick={() =>
              setSidebarData({
                img: Partner7Land,
                name: 'Teamera',
                href: `https://teamera.me/`,
                description: [
                  `Teamera ermöglicht erfahrungsbasiertes Lernen für remote zusammenarbeitende Teams. Ihre Produkte bieten game-based Personalentwicklung und Evaluation. Spezialisiert auf die Entwicklung von webbasierten Serious Games und deren Anwendung in Workshops setzen sie auf die Kombination von spielerischen Elementen und einem hohen didaktischen Anspruch. Durch die Begeisterung im Lernprozess werden Kompetenzen effektiv gesteigert.
                  `,
                ],
              })
            }
          >
            <Image
              width={200}
              className='scale-[0.70] rounded hover:cursor-pointer md:mx-10'
              src={Partner7}
              alt='partner1'
            />
          </label>
        </div>
        <div
          id='roadmap'
          className='mb-10 mt-20 text-center font-Marsden text-5xl font-medium leading-[72px] text-white  md:text-[62px]'
        >
          Roadmap
        </div>

        <div className='relative mb-20'>
          <div className='absolute z-10 mt-96 h-[770px] w-[1000px] bg-blue-400 bg-opacity-50 blur-[1200px]' />
          <div className='flex flex-col items-center justify-center'></div>
          <div>
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
                    <Image
                      src={Arrow}
                      className='rotate-90'
                      alt='arrow'
                      width={20}
                    />
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
        </div>
      </div>

      <div className='drawer-side z-50'>
        <label
          htmlFor='my-drawer-1'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <div className='min-h-full w-[718px] bg-white'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              placeholder='blur'
              blurDataURL='/blur.png'
              src={currentImage}
              alt='partner1 side'
            />

            <div className='mt-10 flex flex-col items-center justify-center space-y-5 px-4'>
              {sidebarData.href ? (
                <Link href={sidebarData.href}>
                  <h1 className='text-center font-Marsden text-4xl font-bold leading-[27px] text-black'>
                    {sidebarData.name}
                  </h1>
                </Link>
              ) : (
                <h1 className='text-center font-Marsden text-4xl font-bold leading-[27px] text-black'>
                  {sidebarData.name}
                </h1>
              )}
              <h1 className="w-auto text-center font-['Marsden'] text-2xl font-medium leading-[37.50px] text-yellow-600">
                {sidebarData.position}
              </h1>
              <div className='pb-10'>
                {sidebarData.description?.map((date: any) => (
                  <h1 className=" text-center font-['Marsden'] text-base font-light leading-[27px] text-black">
                    {date.endsWith('?') ? (
                      <span className='font-semibold'>{date}</span>
                    ) : (
                      <span>{date}</span>
                    )}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
