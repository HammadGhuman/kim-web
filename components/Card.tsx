import React from "react";
import CardBg from "@/public/Vector.svg";
import Image from "next/image";
import Arrow from "@/public/ReadMore.svg";

type Props = {
  title: string;
  description: string;
  image: any;
};

function Card(props: Props) {
  return (
    <div className="flex items-center justify-center md:mt-0 mt-10 overflow-x-hidden">
      <div className="relative">
        <Image src={CardBg} alt="image" className="opacity-20" />
        <div className="absolute text-white scale-100 top-8 left-20">
          <h1 className="font-medium">{props.title}</h1>
          <p className="md:w-[313px] md:pr-0 pr-2 text-white text-sm md:text-sm  font-Marsden leading-relaxed mt-5">
            {props.description}
          </p>
        </div>
        <div className="w-14 h-14 scale-90 md:scale-100 flex items-center justify-center opacity-25 bg-[#649FCD] rounded-full absolute left-0  top-2  border-[#09b9ff] border-4"></div>
        <div className="">
          <Image
            className="z-20  opacity-100 absolute top-[1.40rem] left-4"
            src={props.image}
            width={25}
            height={26}
            alt="brain"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
