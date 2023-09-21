import React from "react";
import Image from "next/image";

import CardBg from "@/public/Vector.png";
import Reviewer from "@/public/ReviewPerson1.png";
function ReviewCard() {
  return (
    <div className="relative">
      <div className="">
        <Image className="w-80 h-32" src={CardBg} alt="reviewBg" />
      </div>
      <div className="absolute top-7 right-5">
        <div className="w-[214px] text-white text-[10px] font-normal">
        &ldquo;As a content writer, I was initially skeptical about using
          <br />
          an AI tool. But after trying it out, I have to say that I&apos;m
          <br />
          blown away by the results.
        </div>
      </div>
      <div className="absolute left-3 top-7">
        <Image width={32} height={32} src={Reviewer} alt="reviewer" />
      </div>
    </div>
  );
}

export default ReviewCard;
