import React from "react";
import ReviewCard from "./ReviewCard";
import ReadMoreButton from "./ReadMoreButton";

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
      <ReadMoreButton />
    </div>
  );
}

export default BusinessSpecialist;
