import React from 'react';

const DasbietetContent = [
  {
    heading: 'KI im Gespräch',
    description:
      'KI.m versteht und spricht menschliche Sprache. Diese intuitive Kommunikationsschnittstelle ermöglicht es Führungskräften, ihr Mentoring flexibel und unabhängig von Zeit und Ort zu gestalten.',
  },

  {
    heading: 'Analyse und Optimierung',
    description:
      'KI.m versteht und spricht menschliche Sprache. Diese intuitive Kommunikationsschnittstelle ermöglicht es Führungskräften, ihr Mentoring flexibel und unabhängig von Zeit und Ort zu gestalten.',
  },

  {
    heading: 'Datenschutz',
    description:
      'Bei KI.m hat Datenschutz oberste Priorität. Dank Servern in Deutschland und einem stringenten Privacy-by-Design Ansatz sind die Daten der Führungskräfte sicher.',
  },

  {
    heading: 'Reflexion',
    description:
      'KI.m regt durch gezielte, auf die Führungssituation abgestimmte Fragen zur tiefgreifenden Reflexion an.',
  },

  {
    heading: 'Leadership Szenarien',
    description:
      'KI.m analysiert die Antworten und Erläuterungen der Führungskräfte und ordnet diese in ein wissenschaftlich fundiertes Führungsmodell ein.',
  },

  {
    heading: 'Zielen und Erkenntnisse',
    description:
      'KI.m unterstützt Führungskräfte dabei, realistische und motivierende Ziele zu setzen und die Erkenntnisse zu verinnerlichen, die sie zur gewünschten Führungskraft machen.',
  },
  {
    heading: 'KI.m individualisieren',
    description:
      'KI.m lässt sich an die Bedürfnisse der Führungskraft anpassen, einschließlich der Möglichkeit, Stimme und Charakter des KI-Mentors individuell einzustellen, um optimale Ergebnisse zu erzielen.',
  },
  {
    heading: 'Videokurse',
    description:
      'KI.m empfiehlt maßgeschneiderte Videokurse von Experten, um die Weiterentwicklung der Führungskräfte zu fördern.',
  },
];

function Dasbietet() {
  return (
    <div className='grid lg:grid-cols-2 gap-10'>
      {DasbietetContent.map((item) => (
        <div className='flex lg:h-[205px] lg:w-[505px] w-[350px] flex-col items-center justify-center rounded-lg bg-[#4969a1]/40'>
          <h1 className=" pt-10 font-['Marsden'] text-2xl font-semibold capitalize leading-normal text-white">
            {item.heading}
          </h1>
          <p className="mt-3 pb-8 text-center font-['Marsden'] text-base font-normal text-white lg:px-12 px-4">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Dasbietet;
