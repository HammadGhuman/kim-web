import React from "react";
import Image from "next/image";

import Logo from "@/public/MobileLogo.png";
import Hamburger from "@/public/Hamburger.svg";
import Arrow from "@/public/arrow.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-5 py-10">
      <div>
        <Image src={Hamburger} alt="hamburger" />
      </div>
      <div className="ml-10">
        <Image src={Logo} alt="hamburger" />
      </div>
      <div>
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
