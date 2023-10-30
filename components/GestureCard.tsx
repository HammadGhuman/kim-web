import CardBg from "@/public/Vector.svg";
import Image from "next/image";
import CardOutline from "@/public/CardBackgroundOutline.png";
import Gesture from "@/public/Gesture.svg";

function GestureCard() {
  return (
    <div className="flex items-center justify-center md:mt-0 mt-10 overflow-x-hidden">
      <div className="relative">
        <div className="relative">
          <Image
            src={CardOutline}
            alt="outline"
            className="opacity-10 absolute"
          />
          <Image src={CardBg} alt="image" className="opacity-10 " />
        </div>
        <div className="absolute text-white scale-100 top-8 left-20">
          <h1 className="font-medium">Gesteigerte Mitarbeiterbindung</h1>
          <p className="md:w-[313px] md:pr-0 pr-2 text-white text-sm md:text-sm  font-Marsden leading-relaxed mt-5">
            {
              "Weiterbildungen sind ein wichtiger Teil der Mitarbeiterbindung. Unser budgetfreundliches Format ermöglicht es allen Führungskräften an diesen teilzunehmen"
            }
          </p>
        </div>
        <div className="w-14 h-14 scale-90 md:scale-100 flex items-center justify-center opacity-25 bg-[#649FCD] rounded-full absolute left-0  top-2  border-[#09b9ff] border-4"></div>
        <div className="">
          <Image
            className="z-20  opacity-100 absolute top-[1.40rem] left-3"
            src={Gesture}
            alt="brain"
          />
        </div>
      </div>
    </div>
  );
}

export default GestureCard;
