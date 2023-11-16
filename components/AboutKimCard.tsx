import React from 'react';

function AboutKimCard() {
  return (
    <div className='flex md:w-[1068px] flex-col items-center rounded-[5px] border  border-white bg-blue-400 bg-opacity-20 mt-24'>
      <div className=" mt-8 md:w-[967px] text-center font-Marsden leading-[50px] text-xl md:px-0 px-3  md:text-2xl font-medium text-white">
        Um erfolgreich zu sein, müssen Unternehmen: über Leistungsfähige
        Führungskräfte verfügen; ihren Mitarbeitern genug Raum für Entwicklung
        bieten, um für eine hohe Mitarbeiterzufriedenheit & -Bindung zu sorgen;
        Talente entwickeln & binden; und die Diversität fördern.
      </div>
      <div className=" pb-8 mt-10 md:w-[967px] text-center font-Marsden leading-[50px] text-xl md:px-0 px-3  md:text-2xl font-medium text-white">
        KI.m hilft Unternehmen dabei erfolgreich zu sein, indem KI.m genau diese
        Aspekte unterstützt! KI.m ist KI-basiertes Mentoring für Führungskräfte.
        Dabei führt KI.m auf Grundlage einer Conversational AI über eine App auf
        dem Smartphone einen natürlichen Dialog mit Führungskräften und nutzt
        unterschiedliche State-of-the-Art Algorithmen, sowie ein
        wissenschaftlich fundiertes Führungsmodell für das Mentoring.
      </div>
    </div>
  );
}

export default AboutKimCard;
