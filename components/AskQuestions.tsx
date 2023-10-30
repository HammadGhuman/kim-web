import React from "react";
import Image from "next/image";
import Search from "@/public/Search.png";

function AskQuestions() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 font-Marsden">
      <div className="w-[225px] md:w-full text-center">
        <span className="text-white  text-[38px] md:text-[62px] font-medium leading-10">
          Ask{" "}
        </span>
        <span className="text-yellow-600 text-[38px] md:text-[62px]  font-medium leading-10">
          Questions
        </span>
      </div>
      <div className="w-[285px] md:w-[900px] md:text-2xl h-[87px] text-center text-white text-xl font-normal leading-normal mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        quis tortor vitae sapien mattis sagittis sed rhoncus ante.
      </div>
      <div className="relative mt-12">
        <Image className="absolute top-5 left-4" width={18} height={18} src={Search} alt="search" />
        <input
          className="w-[279px] md:w-[600px]  h-[59px] bg-opacity-40  bg-[#4869a4] rounded-[7px]  text-white  px-16"
          placeholder="Search here..."
        />
      </div>
    </div>
  );
}

export default AskQuestions;
