import React from "react";

type Props = {
  text: string | "Read More";
};

function ReadMoreButton({ text }: Props) {
  return (
    <div className="w-[225px] h-[61px] flex items-center justify-center bg-[#B77828] rounded-[10px]">
      <div className="text-white text-center text-xl font-medium">{text}</div>
    </div>
  );
}

export default ReadMoreButton;
