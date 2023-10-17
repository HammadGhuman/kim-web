import React from "react";
import Image from "next/image";

import Blog1 from "@/public/Blog1.png";
import ReadMoreBlog from "@/public/ReadMoreBlog.svg";
function BlogCard() {
  return (
    <div className="flex flex-col md:flex-row md:mt-20 scale-125">
      <Image src={Blog1} alt={"Blog 1"} />
      <div className="flex flex-col w-[265px] md:w-[479px] px-4 md:px-8 bg-[#214777]">
        <div className="w-[65px] text-center text-white text-[10px] font-normal pt-5 capitalize leading-[22.82px] tracking-wide">
          1 Comment
        </div>
        <div className="w-[209px] md:w-[479px] text-white text-base font-bold ">
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
  );
}

export default BlogCard;
