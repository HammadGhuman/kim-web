import React from "react";
import BlogCard from "./BlogCard";
import ReadMoreButton from "./ReadMoreButton";

function OurBlog() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="text-center">
        <span className="text-white text-4xl font-medium leading-[44px] tracking-wide">
          OUR <br />
        </span>
        <span className="text-yellow-600 text-4xl font-medium leading-[44px] tracking-wide">
          BLOGS
        </span>
      </div>
      <div className="mt-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <ReadMoreButton />
    </div>
  );
}

export default OurBlog;
