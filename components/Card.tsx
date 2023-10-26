import React from "react";
import CardBg from "@/public/CardBackground.png";
import Image from "next/image";
import Arrow from "@/public/ReadMore.svg";

type Props = {
  title: string;
  description: string;
  image: any;
};

function Card(props: Props) {
  return (
    <div className="flex items-center justify-center md:mt-0 mt-10">
      <div className="relative">
        <Image src={CardBg} alt="image" className="opacity-20 sca" />
        <div className="absolute text-white scale-90 top-3 left-14">
          <h1 className="font-bold">{props.title}</h1>
          <p className="text-sm mt-4 pr-4">{props.description}</p>
        </div>
        <div className="w-14 h-14 flex items-center justify-center opacity-25 bg-[#649FCD] rounded-full absolute -left-2 top-2 border-[#09b9ff] border-4"></div>
        <Image
          className="z-20  opacity-100 absolute top-[1.40rem] left-2"
          src={props.image}
          alt="brain"
        />
      </div>
    </div>
  );
}

export default Card;
