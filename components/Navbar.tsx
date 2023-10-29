"use client";
import React, { useState } from "react";
import Image from "next/image";

import Logo from "@/public/MobileLogo.png";
import Hamburger from "@/public/Hamburger.svg";
import Arrow from "@/public/arrow.svg";
import CLose from "@/public/icons8-close.svg";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between px-5 py-10 font-Marsden">
      <div
        className="md:hidden block hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={CLose}
          alt="close"
          className={`transition ease-in-out duration-300 ${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        />

        <Image
          src={Hamburger}
          alt="hamburger"
          className={`transition ease-in-out duration-300 ${
            isOpen ? "opacity-0 hidden" : "opacity-100 block"
          }`}
        />
      </div>
      <Link href="/" className="ml-10">
        <Image src={Logo} alt="Logo" />
      </Link>
      <ul
        className={`md:flex items-center justify-between md:space-x-16 md:ml-16 md:z-auto z-10 md:static absolute top-28 py-10 md:py-0 space-y-10 md:space-y-0  md:w-auto w-full md:h-auto bg-image bg-cover bg-no-repeat md:opacity-100 md:bg-none ${
          isOpen ? "opacity-100" : "opacity-0"
        } duration-300 transition-all ease-in-out`}
      >
        <li className="text-white hover:font-bold duration-300 transition-all hover:underline underline-offset-2">
          <Link href="/about-kim">Uber KI.m</Link>
        </li>
        <li className="text-white hover:font-bold duration-300 transition-all hover:underline underline-offset-2">
          <Link href="/partners">Partner werden</Link>
        </li>
        <li className="text-white hover:font-bold duration-300 transition-all hover:underline underline-offset-2">
          <Link href="/meet-our-team">Uber Uns</Link>
        </li>
        <li className="text-white hover:font-bold duration-300 transition-all hover:underline underline-offset-2">
          <Link href="/ask-question">Blog & FAQs</Link>
        </li>
      </ul>
      <div className="flex items-center justify-center space-x-5">
        <button className="flex items-center justify-center border-white border-2 space-x-3 hover:bg-[#B77828] hover:border-[#B77828] transition-colors duration-300 text-white px-1 py-1 rounded-lg">
          <span className="text-center text-lg px-7 text-white">Login</span>
        </button>
        <button className="flex items-center justify-center bg-[#B77828] space-x-3 text-white px-1 py-1 rounded-lg">
          <span className="text-center pl-3">Buy Now</span>
          <div className="bg-white w-8 h-8 flex items-center justify-center rounded-md">
            <Image src={Arrow} alt="arrow" />
          </div>
        </button>
      </div> 
    </div>
  );
}

export default Navbar;
