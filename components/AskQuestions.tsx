import React from "react";

function AskQuestions() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-[225px] text-center">
        <span className="text-white text-[38px] font-medium leading-10">
          Ask{" "}
        </span>
        <span className="text-yellow-600 text-[38px] font-medium leading-10">
          Questions
        </span>
      </div>
      <div className="w-[285px] h-[87px] text-center text-white text-xl font-normal leading-normal mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        quis tortor vitae sapien mattis sagittis sed rhoncus ante.
      </div>
      <div className="mt-24 w-[279px] h-[59px] opacity-40 mix-blend-soft-light bg-white rounded-[7px] border-2 border-violet-300" />
    </div>
  );
}

export default AskQuestions;
