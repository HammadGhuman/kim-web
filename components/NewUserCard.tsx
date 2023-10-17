import React from "react";
import Image from "next/image";
import Person1 from "@/public/UserImage.png";
function NewUserCard() {
  return (
    <div className="flex bg-white/10 flex-row space-x-3 mx-12 px-4 py-4 rounded-[20px] mt-10 md:mx-[28rem] font-Marsden">
      <div>
        <Image className="w-[63px] h-[65px] md:w-[164px] md:h-[171px]" src={Person1} alt="image" />
      </div>
      <div className="flex flex-col space-y-2 items-start justify-center text-white max-w-md">
        <h1 className="text-[10px] font-bold md:text-2xl">Christian Krauter</h1>
        <p className="text-[8px] md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor
          repudiandae laboriosam blanditiis officia porro expedita a odio
          necessitatibus eaque.
        </p>
        <div className="flex flex-row space-x-3 ">
          <span className="w-[30px] h-[9px]  md:w-auto md:h-auto text-center text-white text-[8px] md:text-base font-normal font-['Readex Pro'] capitalize">
            31. May
          </span>{" "}
          <span className="w-[77px] h-2  md:w-auto md:h-auto text-center text-white text-[8px] md:text-base font-normal font-['Readex Pro'] capitalize">
            4 min reading time
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default NewUserCard;
