import React from 'react';
import Kommt from './Kommt';
import AboutKim2Card from './AboutKim2Card';

function AboutKimCardMob() {
  const benifits = [
    {
      heading: '01',
      description:
        'Jeden Tag jonglieren Sie mit umfangreichen Aufgaben, treffen schwierige Entscheidungen und managen unterschiedliche Mitarbeiterpersönlichkeiten. Manchmal fühlen Sie sich überfordert, oft allein gelassen mit den Herausforderungen. Eine effektive Lösung ist schwer zu finden.',
    },
    {
      heading: '02',
      description:
        'Schluss damit! Stellen Sie sich vor, Sie hätten einen jederzeit verfügbaren Mentor, der Ihnen hilft, Ihre Kompetenzen zu stärken, Mitarbeiter effizienter zu führen und strategisch zu handeln. Genau das ist KI.m! KI.m ist eine revolutionäre KI-basierte Mentoring App für Führungskräfte, die Ihnen immer zur Seite steht. Mit fortgeschrittenen Algorithmen und einem fundierten Führungsmodell bietet KI.m ein personalisiertes Programm, das auf Ihre individuellen Herausforderungen eingeht. Mit Reflexionen, Analysen und konkreten Empfehlungen wird KI.m Ihr verlässlicher Mentor, der Sie bei der Bewältigung Ihrer Führungsprobleme unterstützt.',
    },
    {
      heading: '03',
      description:
        'Machen Sie es sich leichter. Verwandeln Sie mit KI.m Ihre Führungsherausforderungen in eine Erfolgsstraße!',
    },
  ];
  return (
    <div className='flex flex-col space-y-6 md:hidden'>
      {benifits.map((item, index) => (
        <AboutKim2Card
          key={item.heading}
          heading={item.heading}
          index={index}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default AboutKimCardMob;
