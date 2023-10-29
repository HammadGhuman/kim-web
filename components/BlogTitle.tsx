import React from "react";

function BlogTitle() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-[225px] md:w-auto text-center">
        <span className="text-white md:text-[62px] text-[38px] font-medium leading-10">
          Blog & {" "}
        </span>
        <span className="text-orange-400 md:text-[62px] text-[38px] font-medium leading-10">
          Articles
        </span>
      </div>
    </div>
  );
}

export default BlogTitle;
