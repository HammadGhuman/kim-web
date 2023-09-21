import React from "react";
import ReviewCard from "./ReviewCard";

function BusinessSpecialist() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="w-[271px] h-[67px] text-center">
        <span className="text-white text-4xl font-medium ">HEAR FROM OUR </span>
        <span className="text-yellow-600 text-4xl font-medium ">
          BUSINESS SPECIALIST
        </span>
      </div>
      <div className="flex space-y-10 mt-20 flex-col items-center justify-center">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="mt-10 w-[225px] h-[61px] flex items-center justify-center bg-yellow-600 rounded-[10px]">
        <div className="text-white text-center text-xl font-medium">
          Read More
        </div>
      </div>
    </div>
  );
}

export default BusinessSpecialist;
