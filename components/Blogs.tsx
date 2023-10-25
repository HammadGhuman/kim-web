import React, { useState } from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: any;
};

function Blogs(props: Props) {
  return (
    <div className="flex flex-col w-72 rounded-lg p-3 bg-white/10 mt-5">
      <div className="flex items-center justify-center">
        <Image width={300} height={200} src={props.image} alt="card" />
      </div>

      <div className="flex items-center text-white space-x-5 mt-4 ml-4">
       
        <p className=" text-white text-[10px] font-normal font-Marsden capitalize leading-[22.82px] tracking-wide">
          7th March
          <br />
        </p>
      </div>
      <div className="ml-4 mt-2">
        <p className="text-white text-xs font-bold font-Marsden leading-normal">
          Leadership is reshaping itself – what are the trends?
        </p>
      </div>
      <div className="ml-4">
        <p className="text-white text-xs font-normal font-Marsden mt-4  leading-relaxed">
          Multi-crisis scenarios, technological and social change and the ESG
          paradigm of a sustainable economy are...
        </p>
      </div>
    </div>
  );
}

export default Blogs;
