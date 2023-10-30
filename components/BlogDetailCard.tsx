import React from "react";
import Card1 from "@/public/BlogDesktop.png";
import Image from "next/image";
type Props = {
  img?: any;
};

function BlogDetailCard({ img }: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-20 md:space-y-10 md:mx-20">
      <div className="w-[225px] md:w-auto text-center my-10">
        <span className="text-white md:text-[62px] text-[38px] font-medium leading-10">
          Blog{" "}
        </span>
        <span className="text-yellow-600 md:text-[62px] text-[38px] font-medium leading-10">
          Details
        </span>
      </div>
      <div className="bg-white/10 md:bg-transparent rounded-lg w-96 md:w-full">
        <figure className="flex items-center justify-center">
          <Image
            width={1101}
            height={598}
            src={img}
            alt="image"
            className="w-[350px] md:w-[1101px] md:h-[598px] md:rounded-[48px] "
          />
        </figure>
        <div className="md:hidden">
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
              The megatrends of connectivity and new work as well as
              technological trends act as drivers of the digital, social and...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailCard;
