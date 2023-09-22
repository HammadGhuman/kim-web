import React from "react";
import Card1 from "@/public/card-1.png";
import Image from "next/image";

function BlogDetailCard() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-20">
      <div className="w-[225px] text-center">
        <span className="text-white text-[38px] font-medium leading-10">
          Blog{" "}
        </span>
        <span className="text-yellow-600 text-[38px] font-medium leading-10">
          Details
        </span>
      </div>
      <div className="card w-96 bg-white/10 shadow-xl mt-10">
        <figure>
          <Image src={Card1} alt="image" className="w-[350px] h-100 mt-4" />
        </figure>
        <div className="mt-4 flex flex-row items-center justify-center pl-8 space-x-7 text-white font-light-text-sm -mb-5">
          <span>31 May</span>
          <span>65 Views</span>
          <span>0 Comments</span>
        </div>
        <div className="card-body flex flex-col items-center justify-center text-white text-center -mt-2">
          <h2 className="font-bold">
            Tomorrow&apos;s leadership development today
          </h2>
          <p className="leading-9 max-w-sm">
            The megatrends of connectivity and new work as well as technological
            trends act as drivers of the digital, social and...
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailCard;
