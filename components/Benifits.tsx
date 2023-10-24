import React from "react";

type Props ={
  heading?:string;
  description?:string;
}

function Benifits({heading,description}:Props) {
  return (
    <div className="flex flex-col items-center space-y-5 px-4 w-[334px] h-[166px] relative bg-blue-400 bg-opacity-20 rounded-[5px] border border-white">
      <h1 className="text-center text-[#CD9145] text-sm font-semibold tracking-tight mt-4">
        {heading}
      </h1>
      <p className="text-center text-white text-[10px] font-normal">
      {description}
      </p>
    </div>
  );
}

export default Benifits;
