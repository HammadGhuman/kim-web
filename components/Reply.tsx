import React from "react";

function Reply() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 mt-10 bg-white/10 px-10 py-10 mx-10 rounded-[20px]">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-white text-xl font-bold">Leave a reply</div>
        <div className="text-white text-xs font-medium font-['Marsden']">
          Your email address will not be published.
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-white text-base font-medium">Your Name *</div>
        <input
          type="text"
          className="w-[297px] h-[50px] bg-white/10 rounded-[20px] border-blue-400"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-white text-base font-medium">Your Email *</div>
        <input
          type="email"
          className="w-[297px] h-[50px] bg-white/10 rounded-[20px] border-blue-400"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-white text-base font-medium">Website</div>
        <input
          type="text"
          className="w-[297px] h-[50px] bg-white/10 rounded-[20px] border-blue-400"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-white text-base font-medium">Company</div>
        <input
          type="text"
          className="w-[297px] h-[50px] bg-white/10 rounded-[20px] border-blue-400"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-white text-base font-medium">Message</div>
        <input
          type="text"
          className="w-[297px] h-[152px] bg-white/10 rounded-[20px] border-blue-400"
        />
      </div>

      <div>
        <button className="w-[255px] h-[61px] bg-yellow-600 rounded-[10px]">
          <span className="text-white text-xl font-medium ">Send Message</span>
        </button>
      </div>
    </div>
  );
}

export default Reply;
