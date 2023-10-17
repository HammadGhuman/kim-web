import React from "react";

function BlogTitle() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-[225px] text-center">
        <span className="text-white text-[38px] font-medium leading-10">
          Blog &<br />
        </span>
        <span className="text-orange-400 text-[38px] font-medium leading-10">
          Articles
        </span>
      </div>
    </div>
  );
}

export default BlogTitle;
