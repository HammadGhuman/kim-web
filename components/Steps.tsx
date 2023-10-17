import React from "react";
import Check1 from "@/public/check 1.png";
import Image from "next/image";

type Props = {
  step: string;
  instruction: string;
};
function Steps(props: Props) {
  return (
    <>
      <div className="border-white border-2 p-5 rounded-full">
        <Image width={75} height={75} src={Check1} alt="step1" />
      </div>
      <div className="text-center text-orange-400 text-5xl font-extrabold mt-10">
        {props.step}
      </div>
      <div className="w-[302px] text-center text-white text-[26px] font-medium ">
        {props.instruction}
        <br />
      </div>
    </>
  );
}

export default Steps;
