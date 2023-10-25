import Image from "next/image";
import React from "react";
import Phone1 from "@/public/Phone-1.png";
import Phone2 from "@/public/Phone-2.png";
function MobileCard({ odd }: { odd: boolean }) {
  return (
    <div className="md:flex md:odd:flex-row-reverse items-center md:items-start justify-between">
      <div>
        <div className="mt-5 flex flex-col md:items-start md:justify-start items-center justify-center -space-y-5">
          <div className="text-gray-400 text-[22px] font-medium  leading-[72px]">
            Phase #1{" "}
          </div>
          <div className="text-white text-2xl md:text-[32px] font-medium  leading-[72px]">
            Rapportaufbau:{" "}
          </div>
        </div>
        <div className="w-[306px] md:w-[498px] md:h-[101px] h-[68px] md:leading-relaxed mx-auto font-Marsden text-white text-sm font-medium ">
          - Vertrauensaufbau
          <br />- Verbesserung des Mental Wellbeing mittels gezielter Übungen 1x
        </div>
      </div>
      {/* hide the bellow div if parent is even */}
      {/* display the below div if parent is odd */}
      {odd ? (
        <Image className="md:mt-0 mt-7" src={Phone1} alt={"phone2"} />
      ) : (
        <Image className="md:mt-0 mt-7" src={Phone2} alt={"phone1"} />
      )}
    </div>
  );
}

export default MobileCard;
