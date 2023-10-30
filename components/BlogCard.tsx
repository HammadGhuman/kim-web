import React from "react";
import Image from "next/image";

import Blog1 from "@/public/Blog1.png";
import ReadMoreBlog from "@/public/ReadMoreBlog.svg";
function BlogCard() {
  return (
    <div className="flex md:flex-row flex-col md:mx-0 mx-10 rounded-[10px] shadow-md">
      <Image
        className="w-full lg:w-[516px] lg:h-[287px] rounded-l-[10px]"
        src={Blog1}
        alt={"Blog 1"}
      />
      <div className="lg:w-[516px]  md:h-[287px] bg-[#214777] pl-3 md:pl-12 pr-4 pt-8 rounded-t-none md:rounded-l-none rounded-b-[10px] md:rounded-r-[10px]">
        <h1 className=" text-white md:text-2xl text-xl font-bold font-Marsden leading-normal ">
          Leadership is reshaping itself – what are the trends?
        </h1>
        <div className=" text-stone-300 mt-3 text-base font-normal font-Marsden leading-relaxed">
          Multi-crisis scenarios, technological and social change and the ESG
          paradigm of a sustainable economy are...
        </div>
        <button className="flex items-center py-3 space-x-3 group text-white hover:text-[#b77828]">
          <div className="text-center  text-base font-normal font-Marsden capitalize group-hover:font-medium">
            Read More
          </div>
          <Image className="group-hover:rotate-45 duration-300 transition-transform" src={ReadMoreBlog} alt="read more" />
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
/* 

<div className="flex flex-col md:flex-row md:mt-18 md:scale-125">
  <Image className="md:aspect-video lg:w-[400px]" src={Blog1} alt={"Blog 1"} />
  <div className="flex flex-col w-[265px] md:w-[479px] px-4 md:px-8 bg-[#214777]">
    <div className="w-[209px] md:w-auto text-white text-base font-bold mt-10">
      Tomorrow&apos;s leadership development today
    </div>
    <div className="w-[194px] text-white text-[8px] pt-4 font-normal">
      The megatrends of connectivity and new work as well as technological
      trends act as drivers of the digital, social and...
    </div>
    <button className="flex items-center py-3 space-x-3">
      <div className="w-[53px] text-center text-white text-[10px] font-normal  capitalize">
        Read More
      </div>
      <Image src={ReadMoreBlog} alt="read more" />
    </button>
  </div>
</div>


*/
