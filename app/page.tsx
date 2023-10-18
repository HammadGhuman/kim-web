import AiDoesItBetter from "@/components/AiDoesItBetter";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Image from "next/image";
import Brain from "@/public/Brain.svg";
import LeaderShip from "@/components/LeaderShip";
import HowItWork from "@/components/HowItWork";
import MeetOurTeam from "@/components/MeetOurTeam";
import OurPartners from "@/components/OurPartners";
import BusinessSpecialist from "@/components/BusinessSpecialist";
import OurBlog from "@/components/OurBlog";
import Footer from "@/components/Footer";
export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <main>
      <Hero />
      <AiDoesItBetter />
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row mx-10 flex-wrap max-w-7xl md:gap-14 mt-10 md:space-y-0 items-center justify-center">
          {cards.map((item) => (
            <Card
              key={item}
              image={Brain}
              title="Lorem, ipsum."
              description="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repudiandae blanditiis recusandae dolore."
            />
          ))}
        </div>
      </div>
      <LeaderShip />
      <HowItWork />
      <MeetOurTeam />
      <OurPartners />
      {/* <BusinessSpecialist /> */}
      <OurBlog />
    </main>
  );
}
