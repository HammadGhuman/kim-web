import React from "react";
import BlogCard from "./BlogCard";
import ReadMoreButton from "./ReadMoreButton";

function OurBlog() {
  return (
    <div className="mt-28 flex flex-col items-center justify-center">
      <div className="text-center font-Marsden">
        <span className="text-white md:text-6xl text-4xl font-medium leading-[44px] tracking-wide">
          Unsere Blogs
        </span>
      </div>
      <div className="mt-10 md:mt-20 md:flex md:flex-col space-y-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="mt-20">
        <ReadMoreButton text="Mehr lesen" />
      </div>
    </div>
  );
}

export default OurBlog;
