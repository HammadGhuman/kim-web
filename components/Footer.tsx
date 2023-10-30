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
        <div className="flex justify-around">
          <div className="flex flex-wrap  justify-center md:flex-row md:space-y-0 space-y-4 py-4 flex-col md:space-x-16 ">
            <div className="flex flex-col justify-center -space-y-8 ">
              <h1 className="text-white text-xl font-semibold font-Marsden leading-[72px]">
                Heim
              </h1>
              <Link
                href="/#Gesteigerte"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Gesteigerte{" "}
              </Link>
              <Link
                href="/#Wieläuft"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Wie läuft{" "}
              </Link>
              <Link
                href="/#TreffenSieunserTeam"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Treffen Sie unser Team{" "}
              </Link>
              <Link
                href="/#UnsereBlogs"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Unsere Blogs{" "}
              </Link>
            </div>

            {/* About */}
            <div className="flex flex-col justify-center -space-y-8">
              <h1 className="text-white text-xl font-semibold font-Marsden leading-[72px]">
                Uber KI.M
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
                Partner Werden
              </h1>
              <Link
                href="/partners/#Vorteile"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Vorteile{" "}
              </Link>
              <Link
                href="/partners/#Partnerprogramm"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Partner programm{" "}
              </Link>
              <Link
                href="/partners/#SowerdenSiePartner"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                So werden Sie Partner{" "}
              </Link>
              <Link
                href="/partners/#BewerbenSiesichjetztalsPartner"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Bewerben Sie sich jetzt als Partner!{" "}
              </Link>
            </div>

            {/* Faqs And BLog */}
            <div className="flex flex-col  -space-y-8">
              <h1 className="text-white text-xl font-semibold font-Marsden leading-[72px]">
                FAQs Und Blogs
              </h1>
              <Link
                href="/ask-question/#Fragenstellen"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Fragen stellen{" "}
              </Link>
              <Link
                href="/ask-question/#BlogsundDetails"
                className="text-white text-base  font-Marsden leading-[72px]"
              >
                Blogs und Details{" "}
              </Link>
            </div>
          </div>

          {/* Impressum */}
          <div className="flex space-x-16">
            <div className="flex flex-col space-y-2 ">
              <Link
                href="/contact"
                className="text-orange-400 text-base mt-14 font-medium font-['Marsden'] underline leading-7"
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
              <Image src={Image1} className="mt-10" alt="img1" />
              <Image src={Image2} alt="img1" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between mx-20 mt-3">
        <p className="text-white text-xs md:text-base font-normal font-Outfit leading-7">
          Copyright © 2023 Ki Mentor Technology GmbH. All rights reserved.
        </p>
        <p className="text-white text-xs md:text-base font-normal font-Outfit leading-7">
          Designed and developed by:{" "}
          <Link href="www.codematetechnologies.com">
            {" "}
            codematetechnologies.com{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
