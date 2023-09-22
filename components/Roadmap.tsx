import React from "react";
type Props = {
    date:string;
    title:string;
    description:string;
}

function Roadmap(props:Props) {
  return (
    <div className="w-72 h-[308px]  px-4 pb-10 rounded-2xl border border-white">
      <div className="flex flex-col mt-16 -space-y-5">
        <div className="w-[49px] h-[45px] text-white text-[13px] font-normal  tracking-[3.20px]">
          {props.date}
        </div>
        <div className="w-[34px] h-[5px] border-t border-neutral-500" />
      </div>
      <div className="w-[242px] h-[23px] mt-6 text-white text-xs font-normal  leading-relaxed tracking-widest">
        {props.title}
      </div>
      <div className="mt-10 w-[260px] h-[131px] text-white text-[10px] font-normal  leading-[13.80px] tracking-wide">
       {props.description}
      </div>
    </div>
  );
}

export default Roadmap;
