"use client";
import Image from "next/image";
import React, { useRef } from "react";

import Partner1 from "@/public/logo 1.png";
import Partner2 from "@/public/logo 2.png";
import Partner3 from "@/public/Logo 3.png";
import Partner4 from "@/public/Logo 4.png";
import Partner5 from "@/public/Logo 5.png";
import Partner6 from "@/public/logo 6.png";

function OurPartners() {
  return (
    <div className="mt-16">
      <div className="text-center md:hidden">
        <span className="text-white text-4xl font-medium  leading-[44px] tracking-wide">
          Unsere{" "}
        </span>
        <span className="text-yellow-600 text-4xl font-medium  leading-[44px] tracking-wide">
          Partner
        </span>
      </div>
      <div className="flex md:bg-[#263A64] relative  md:flex-row md:space-y-0 md:justify-between md:pr-10 flex-col space-y-10 mt-10 items-center justify-between">
        <div className="hidden md:block min-w-[450px] md:pl-10 absolute z-10 bg-[#263a64] h-[200px]">
          <div className="flex h-full items-center justify-center">
            <span className="text-[#CD9145] text-4xl font-medium font-['Marsden'] leading-[44px] tracking-wide">
              Unsere
            </span>
            <span className="text-white text-4xl font-medium font-['Marsden'] leading-[44px] tracking-wide">
              {" "}
              Partner
            </span>
          </div>
        </div>
        <div id="logos" className="py-4 ">
          <div id="logo-slide" className=" whitespace-nowrap">
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner1}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner2}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner3}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner4}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner5}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner6}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner1}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner2}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner3}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner4}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner5}
              alt="partner1"
            />
            <Image
              className="w-44 inline-block mx-10 "
              src={Partner6}
              alt="partner1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
