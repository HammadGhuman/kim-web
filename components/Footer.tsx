import React from "react";
import Image from "next/image";

import Image1 from "@/public/image1.png";
import Image2 from "@/public/image2.png";
import Link from "next/link";
import Instagram from "@/public/Subtract.svg";
import Linkedin from "@/public/Frame.svg";
function Footer() {
  return (
    <div className="bg-[#264b78] py-16 mt-10">
      <div className="border-y-2 border-slate-500 py-5 mx-16">
        <div className="flex items-center space-x-4 justify-end">
          <div>
            <Image src={Instagram} alt="instagram" />
          </div>
          <div>
            <Image src={Linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="flex flex-wrap md:items-center justify-center md:flex-row md:space-y-0 space-y-4 py-4 flex-col md:space-x-16 ">
          <div className="flex flex-col justify-center -space-y-8">
            <h1 className="text-white text-xl font-semibold font-Marsden leading-[72px]">
              Home
            </h1>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Gesteigerte{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Wie läuft{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Meet Our team{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Unsere Blogs{" "}
            </Link>
          </div>

          {/* About */}
          <div className="flex flex-col justify-center -space-y-8">
            <h1 className="text-white text-xl font-semibold font-Marsden leading-[72px]">
              About
            </h1>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              KI.m für Unternehmen{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Unser Angebot{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              KI.m für Führungskräfte{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Technick{" "}
            </Link>
          </div>

          {/* Partners */}
          <div className="flex flex-col justify-center -space-y-8">
            <h1 className="text-white text-xl font-semibold font-Marsden leading-[72px]">
              Partners
            </h1>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Benifits{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Affiliate Program{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              How to Become a Partner{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Apply now as a Partner!{" "}
            </Link>
          </div>

          {/* Faqs And BLog */}
          <div className="flex flex-col  -space-y-8">
            <h1 className="text-white text-xl font-semibold font-Marsden leading-[72px]">
              FAQs And Blogs
            </h1>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Ask Question{" "}
            </Link>
            <Link
              href="#"
              className="text-white text-base  font-Marsden leading-[72px]"
            >
              Blog Details{" "}
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link
              href="/contact"
              className="text-orange-400 text-base font-medium font-['Marsden'] underline leading-7"
            >
              Impressum
            </Link>
            <Link
              href="/cookie-policy"
              className="text-orange-400 text-base font-medium font-['Marsden'] underline leading-7"
            >
              Cookies
            </Link>
            <Link
              href="/data-protection"
              className="text-orange-400 text-base font-medium font-['Marsden'] underline leading-7"
            >
              Data Privacy
            </Link>
            <Link
              href="/terms"
              className="text-orange-400 text-base font-medium font-['Marsden'] underline leading-7"
            >
              Term and Usage
            </Link>
          </div>

          <div className="flex flex-col space-y-5">
            <Image src={Image1} alt="img1" />
            <Image src={Image2} alt="img1" />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between mx-20 mt-3">
        <p className="text-white text-xs md:text-base font-normal font-Outfit leading-7">
          Copyright © 2023 Ki Mentor Technology GmbH. All rights reserved.
        </p>
        <p className="text-white text-xs md:text-base font-normal font-Outfit leading-7">
          designed and developed by: codematetechnologies.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
