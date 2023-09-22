import React from "react";
import Image from "next/image";
import Person1 from "@/public/Person-1.png";
function NewUserCard() {
  return (
    <div className="flex bg-white/10 flex-row space-x-3 mx-12 px-4 py-4 rounded-[20px] mt-[1300px]">
      <div>
        <Image width={63} height={65} src={Person1} alt="image" />
      </div>
      <div className="flex flex-col space-y-2 items-start justify-center text-white max-w-md">
        <h1 className="text-[10px] font-bold">Christian Krauter</h1>
        <p className="text-[8px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolor
          repudiandae laboriosam blanditiis officia porro expedita a odio
          necessitatibus eaque.
        </p>
        <div className="flex flex-row space-x-3">
          <span className="w-[30px] h-[9px] text-center text-white text-[8px] font-normal font-['Readex Pro'] capitalize">
            31. May
          </span>{" "}
          <span className="w-[77px] h-2 text-center text-white text-[8px] font-normal font-['Readex Pro'] capitalize">
            4 min reading time
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default NewUserCard;
