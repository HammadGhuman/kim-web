import React from 'react';
import Kommt from './Kommt';

function KommtCardMob() {
  const benifits = [
    {
      heading: 'Kommt Ihnen das bekannt vor?',
      description:
        'Mit KI.m sind enge Budget kein Problem mehr. KI.m bietet ein skalierbares und dadurch kostengünstiges Kompetenzentwicklungsgsprogramm, welches gleichzeitig durch den Einsatz neuster Technologien und KI dazu in der Lage ist wirksam und individuell auf die Belange jedes Teilnehmers einzugehen.',
    },
    {
      heading:
        'Oft spiegeln externe Maßnahmen nicht zu unsere individuelle Führungskultur wieder',
      description:
        'Das von KI.m angewendete Leadership Model basiert auf Wirkfaktoren, die interkulturelle Gültigkeit haben und empirisch gesichert sind. Somit kann KI.m Führende aus unterschiedlichen Unternehmen, Branchen und mit verschiedenen Hintergründen wirksam begleiten. ABER KI.m kann auch individualisiert und auf die Führungskultur ihres Unternehmens angepasst werden. Kontaktieren sie hierzu unsere Sales Mitarbeiter. Button Sales!',
    },
    {
      heading:
        'Externe Maßnahmen sind im Hinblick auf den Datenschutz oftmals problematisch',
      description:
        'KI.m legt großen Wert auf Datenschutz, daher liegen unsere Server in Deutschland und wir verfolgen von Beginn an einen Privacy-by-Design Ansatz.',
    },
  ];
  return (
    <div className='md:hidden flex flex-col space-y-6'>
      {benifits.map((item) => (
        <Kommt
          key={item.heading}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default KommtCardMob;
