import AiDoesItBetter from "@/components/AiDoesItBetter";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import LeaderShip from "@/components/LeaderShip";
import HowItWork from "@/components/HowItWork";
import MeetOurTeam from "@/components/MeetOurTeam";
import OurPartners from "@/components/OurPartners";
import OurBlog from "@/components/OurBlog";

import Brain from "@/public/Brain.svg";
import People from "@/public/Mentoring.svg";
import Gesture from "@/public/Gesture.png";
import UpPeople from "@/public/upPeople.svg";
import Target from "@/public/target.svg";
import ReloadPeople from "@/public/reloadpeople.svg";
import divInfoBox from "@/public/div.info-box 1.png";
import Image from "next/image";
export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Ganzheitliche Learning Journey",
      description:
        "Führungskräfte durchlaufen ein systematisches Kompetenzentwicklungsprogramm, welches Möglichkeiten für Lernen, Reflexion und Evaluation bietet",
      img: Brain,
    },
    {
      id: 2,
      title: "Mentoring on the job",
      description:
        'Die neue Form der Führungskräfteentwicklung, weg von Classroom Learning auf "Vorrat" hin zu einer täglichen Begleitung der Führungskräfte direkt am Arbeitsplatz',
      img: People,
    },
    {
      id: 3,
      title: "Gesteigerte Mitarbeiterbindung",
      description:
        "Weiterbildungen sind ein wichtiger Teil der Mitarbeiterbindung. Unser budgetfreundliches Format ermöglicht es allen Führungskräften an diesen teilzunehmen",
      img: Gesture,
    },
    {
      id: 4,
      title: "Effektivere Führung",
      description:
        "Das Portfolio der vorhandenen Führungskräfte wird besser genutzt, da Führenden erlaubt wird, ihre Zeit effizienter für Führungsausgaben einzusetzen",
      img: UpPeople,
    },
    {
      id: 5,
      title: "Wettbewerbsvorteile ",
      description:
        "Durch den Einsatz von KI.m können Führungsrisiken gesenkt und Kosten für eine teure Führungskräfteentwicklung eingespart werden",
      img: Target,
    },
    {
      id: 6,
      title: "Change begleiten",
      description:
        "Die regelmäßige Nutzung von KI.m unterstützt die Fähigkeit und Bereitschaft, Veränderungsmaßnahmen anzunehmen",
      img: ReloadPeople,
    },
  ];
  return (
    <main>
      <Hero />
      <AiDoesItBetter />
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row mx-10 flex-wrap max-w-8xl md:gap-14 mt-10 md:space-y-0 items-center justify-center">
          {cards.map((item) => (
            <Card
              key={item.id}
              image={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <LeaderShip />
      {/* <HowItWork /> */}
      <MeetOurTeam />
      <OurPartners />
      {/* <BusinessSpecialist /> */}
      <OurBlog />
      <div className="mt-20 flex items-center justify-center">
        <Image src={divInfoBox} alt="div-info" />
      </div>
    </main>
  );
}
