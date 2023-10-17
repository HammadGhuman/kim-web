import React from "react";
import Image from "next/image";

import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import Twitter from "@/public/twitter.svg";
import TikTok from "@/public/tiktok.svg";
import Youtube from "@/public/youtube.svg";

function Footer() {
  return (
    <div className="bg-[#264B78] mt-10">
      <h1 className="text-white py-10 px-6 text-lg font-normal leading-[20.88px]">
        Quick links
      </h1>
      <div className="flex flex-col space-y-6 px-6">
        <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
          Lorem
        </div>{" "}
        <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
          Lorem
        </div>{" "}
        <h1>
          <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
            Lorem
          </div>
        </h1>
      </div>

      <h1 className="text-white py-10 px-6 text-lg font-normal leading-[20.88px]">
        Info
      </h1>
      <div className="flex flex-col space-y-6 px-6">
        <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
          About
        </div>{" "}
        <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
          Contact Us
        </div>{" "}
        <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
          Lorem
        </div>
        <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
          Blog
        </div>
      </div>

      <h1 className="text-white py-10 px-6 text-lg font-normal leading-[20.88px]">
        Our Mission
      </h1>

      <div className="flex flex-col space-y-6 px-6">
        <div className="w-[330px] text-white text-sm font-normal leading-[21px] tracking-tight">
          Lorem
        </div>
      </div>

      <div className="mt-10 text-center text-white text-lg font-normal  leading-[20.88px]">
        Subscribe to our emails
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="w-[331px] h-12 px-4 py-3.5 border border-zinc-500 justify-between items-center inline-flex">
          <div className="text-white text-base font-normal font-['Assistant'] leading-[15px] tracking-wide">
            Email
          </div>
          <div className="w-5 h-5 relative" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 pb-10">
        <div className="w-[196px] h-6 relative">
          <Image
            src={Facebook}
            alt="footer-logo"
            className="w-5 h-5 left-0 top-[2px] absolute"
          />
          <Image
            src={Twitter}
            alt="footer-logo"
            className="w-5 h-5 left-[44px] top-[2px] absolute"
          />
          <Image
            src={TikTok}
            alt="footer-logo"
            className="w-5 h-5 left-[88px] top-[2px] absolute"
          />
          <Image
            src={Instagram}
            alt="footer-logo"
            className="w-5 h-5 left-[132px] top-[2px] absolute"
          />
          <Image
            src={Youtube}
            alt="footer-logo"
            className="w-5 h-5 left-[176px] top-[2px] absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
