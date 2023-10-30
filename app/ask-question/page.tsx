"use client";
import Faq from "@/components/Faq";
import React, { useState } from "react";
import AskQuestions from "@/components/AskQuestions";
import BlogsCard from "@/components/BlogsCard";
function AskQuestion() {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <main>
      <AskQuestions />
      <Faq />

      <div id="BlogsundDetails" className="flex flex-col items-center justify-center mt-24">
        <div className="w-[225px] md:w-auto text-center">
          <span className="text-white md:text-[62px] text-[38px] font-medium leading-10">
            Blogs &{" "}
          </span>
          <span className="text-[#ae7226] md:text-[62px] text-[38px] font-medium leading-10">
            Articles
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <div
            className={`cursor-pointer ml-10 select-none my-10  text-white text-xl font-semibold font-Marsden ${
              activeTab === 1
                ? "border-b-4 border-[#B77828] opacity-100"
                : "opacity-50"
            }`}
            onClick={() => handleClick(1)}
          >
            All Post
          </div>
          <div
            className={`cursor-pointer ml-10 select-none my-10  text-white text-xl font-semibold font-Marsden ${
              activeTab === 2
                ? "border-b-4 border-[#B77828] opacity-100"
                : "opacity-50"
            }`}
            onClick={() => handleClick(2)}
          >
            Leadership
          </div>
          <div
            className={`cursor-pointer ml-10 select-none my-10  text-white text-xl font-semibold font-Marsden ${
              activeTab === 3
                ? "border-b-4 border-[#B77828] opacity-100"
                : "opacity-50"
            }`}
            onClick={() => handleClick(3)}
          >
            Leadership and Development
          </div>
          <div
            className={`cursor-pointer ml-10 select-none my-10  text-white text-xl font-semibold font-Marsden ${
              activeTab === 4
                ? "border-b-4 border-[#B77828] opacity-100"
                : "opacity-50"
            }`}
            onClick={() => handleClick(4)}
          >
            More
          </div>
        </div>
        <div>
          {activeTab === 1 && <BlogsCard query="[$ne]=a" />}
          {activeTab === 2 && <BlogsCard query="[$eq]=Leadership" />}
          {activeTab === 3 && (
            <BlogsCard query="[$eq]=Leadership and Development" />
          )}
          {activeTab === 4 && <BlogsCard query="[$eq]=Development" />}
        </div>
      </div>
    </main>
  );
}

export default AskQuestion;
