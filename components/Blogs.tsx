import React, { useState } from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: any;
};

function Blogs(props: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <div className="card w-96 bg-white/10 shadow-xl mt-10">
        <figure>
          <Image
            src={props.image}
            alt="image"
            className="w-[350px] h-100 mt-4"
          />
        </figure>
        <div className="mt-4 flex flex-row items-start pl-8 space-x-5 text-white font-light-text-sm -mb-5">
          <span>0 Comments</span>
          <span>31 May</span>
        </div>
        <div className="card-body flex flex-col items-start justify-center text-white text-left -mt-2">
          <h2 className="font-bold">{props.title}</h2>
          <p className="leading-9 max-w-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
