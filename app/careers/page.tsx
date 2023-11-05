import CareersForm from '@/components/CareersForm';
import Reply from '@/components/Reply';
import React from 'react';

function page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex w-[900px] flex-col space-y-10 text-[22px] mt-24 text-white'>
        <h1>
          Sei Teil der KI.m Familie und gestalte die Zukunft der
          Führungskräfteentwicklung mit! Wir sind ein aufstrebendes Start-Up,
          das sich auf den Einsatz von Künstlicher Intelligenz zur Förderung und
          Entwicklung von Führungspersönlichkeiten spezialisiert hat.
        </h1>
        <h1>
          Bist du fasziniert von der Möglichkeit, die Entwicklung von
          Führungskräften zu revolutionieren und zeitgleich aktiv an der
          Betreuung und dem Mentoring durch KI zu arbeiten? Besitzt du die
          Leidenschaft, den nächsten großen Durchbruch in der
          Führungskräfteentwicklung zu erzielen? Dann gehörst du genau hierhin!
        </h1>
        <h1>
          Egal ob du ein Praktikum absolvieren möchtest, ein spannendes Thema
          für deine Bachelor- oder Masterarbeit suchst oder als Vollzeitkraft
          bei uns einsteigen möchtest - wir bieten zahlreiche Möglichkeiten, um
          deine Professionalität, Kreativität und Ambition in unser Team
          einzubringen.
        </h1>
        <h1>
          Wir glauben an Kollaboration, Mut, Innovation und das unermüdliche
          Streben nach Exzellenz. Bei uns ist jeder ein wichtiger Teil des
          Ganzen. Jeder bringt seine individuellen Stärken ein und lernt
          gleichzeitig, von den anderen zu lernen – denn bei KI.m ist
          persönliches Wachstum genauso wichtig wie professioneller Erfolg.
        </h1>
        <h1>
          Wenn du dich für KI und Führungskräfteentwicklung begeisterst, eine
          Arbeit suchst, die dich täglich herausfordert und du unsere
          Leidenschaft für das, was wir tun, teilst, dann bist du bei uns genau
          richtig. Bewirb dich jetzt und lass uns gemeinsam einen echten
          Unterschied in der Welt der Führungskräfteentwicklung machen. Komm zu
          KI.m und lass uns gemeinsam die Technologie von morgen gestalten!
        </h1>
      </div>
      <div className='mt-10'>
       
        <CareersForm />
      </div>
    </div>
  );
}

export default page;
