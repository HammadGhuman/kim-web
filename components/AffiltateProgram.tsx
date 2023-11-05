'use client';
import React, { useState } from 'react';
import Benefits from '@/components/Benifits';
import Image from 'next/image';
import Arrow from '@/public/right-arrow.png';
import Affiliate from './Affilate';

function AffiliateCarousal() {
  const benifits = [
    {
      heading: 'An wen richtet sich das Partnerprogramm?',
      description:
        'Das KI.m Partnerprogramm richtet sich an beratende Unternehmen und Freiberufler, aus dem Bereich Training, Beratung, Coaching und Mentoring für Führungskräfte. ',
    },
    {
      heading: 'Warum sollte ich KI.m vertreiben?',
      description: `Die KI Mentor Technology GmbH bietet ihren Partnern ein attraktives Provisionsmodell und bietet ihren Partnern dadurch die Möglichkeit mittels des Verkaufs der Zusatzleistung KI.m den Umsatz zu erhöhen und sich in eine vorteilhafte Wettbewerbsposition zu begeben. Gleichzeitig wird unterstützt die KI Mentor Technology GmbH ihre Partner bestmöglich und minimiert dadurch den Aufwand der Partner.`,
    },
    {
      heading: `Wie funktioniert das KI.m Partnerprogramm?`,
      description: `Jeder Partner der KI Mentor Technology GmbH erhält eine umfangreiche Unterstützung sowie einen Bestellcode bzw. einen eigenen Link für eine Landingpage. Von einem Partner akquirierte Kunden kaufen über die Webseite (bzw. Landingpage) der KI Mentor Technology GmbH und geben ihren Bestellcode ein. Dadurch wird ein Abschluss automatisch einem bestehenden Partner zugeordnet und nachfolgend Abgerechnet. Auch Verlängerungen oder weitere Abschlüsse von Bestandskunden werden dem Partner automatisch zugeordnet und dementsprechend abgerechnet. Der Partner erhält natürlich ein Reporting über die von Ihm erbrachte Leistung und die ihm zustehende Provision.`,
    },
    {
      heading:
        'NaMacht KI.m meine Leistungen überflüssig? Ersetzt KI.m Mentoring/Coaching?',
      description: `KI.m ist kein Ersatz für Trainer, Berater, Coachs oder Mentoren, sondern bietet Ergänzungen und Erweiterungen der eigenen Leistungen. Besser noch, mit KI.m hast du die Möglichkeit, deine Kunden an dich zu binden. Du kannst Zusatzleistungen verkaufen, deinen Umsatz erhöhen und dadurch neue Zielgruppen erschießen, welche du mit deinen Standardleistungen aus Budget- und anderen Gründen, nicht erreichen kannst. Mit KI.m bringst du dich also in eine vorteilhafte Wettbewerbsposition.`,
    },
    {
      heading: `Wie unterstützt die KI Mentor Technology GmbH ihre Vertriebspartner?`,
      description: `Die KI Mentor Technology GmbH unterstützt dich mit einem vorgefertigtem Vertriebs- und Kommunikationskonzept. Des Weiteren stellt die KI Mentor Technology GmbH ihren Partnern und Kunden umfangreiche Dokumentationen und Informationsmaterialien zur Verfügung. Mit ihrem Internetauftritt und ihren Kommunikationsmaßnahmen schafft die KI Mentor Technology außerdem bereits im Vorfeld der Kontaktaufnahme Awareness bei potenziellen Kunden. Darüber Hinaus unterstützt die KI Mentor Technology GmbH ihre Partner mit eigenen Qualifizierungs- und Unterstützungsmöglichkeiten sowie Networking im Partnermodell.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className='group relative flex w-auto flex-col items-center justify-center px-4 py-16'>
      <div className='duration-500'>
        <Affiliate
          heading={benifits[currentIndex].heading}
          description={benifits[currentIndex].description}
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='-ml-1.5 mt-6 flex items-center justify-center text-white'>
          {benifits.map((benifit, index) => (
            <div key={index} onClick={() => goToSlide(index)}>
              <p
                className={`p-1 ${
                  index === currentIndex ? 'bg-white/40' : 'bg-white/10'
                } mx-2 cursor-pointer rounded-xl hover:bg-white/40`}
              />
            </div>
          ))}
        </div>
        <div className='mr-2 mt-6 flex items-center space-x-5'>
          {/* Left Arrow */}
          <div
            onClick={() => prevSlide()}
            className='cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white hover:bg-white/40 group-hover:block'
          >
            <Image src={Arrow} alt='arrow' className='-rotate-90' width={20} />
          </div>
          {/* Right Arrow */}
          <div
            onClick={() => nextSlide()}
            className='cursor-pointer rounded-md border-[1px] border-white bg-white/10 px-4 py-4 text-white  hover:bg-white/40 group-hover:block'
          >
            <Image src={Arrow} className='rotate-90' alt='arrow' width={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliateCarousal;
