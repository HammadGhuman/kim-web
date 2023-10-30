import React from "react";
import ReadMoreButton from "./ReadMoreButton";

function Reply2() {
  return (
    <div className="flex flex-col items-c space-y-5 md:space-x-0 mt-10 bg-blue-300/10 px-10 py-10 mx-10 md:mx-96 rounded-[20px]">
      <h1 className="text-white text-4xl font-bold font-['Marsden']">
        Leave a reply
      </h1>
      <h1 className="text-white text-base font-medium font-['Marsden'] -mt-3 ">
        Your email will not be published.
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {/* First Name */}
        <div className="grid grid-cols-1 gap-3">
          <h1 className="text-white text-2xl font-medium font-['Marsden']">
            Vorname *
          </h1>
          <input
            type="email"
            className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] w-[425px] rounded-[20px]"
          />
        </div>

        {/* Email */}
        <div className="grid grid-cols-1 gap-3">
          <h1 className="text-white text-2xl font-medium font-['Marsden']">
            E-Mail-Adresse *
          </h1>
          <input
            type="email"
            className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
          />
        </div>
        {/* Link to Website */}
        <div className="grid grid-cols-1 gap-3">
          <h1 className="text-white text-2xl font-medium font-['Marsden']">
            Website
          </h1>
          <input
            type="email"
            className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
          />
        </div>
        {/* Company Name */}
        <div className="grid grid-cols-1 gap-3 ">
          <h1 className="text-white text-2xl font-medium font-['Marsden']">
            Company Name
          </h1>
          <input
            type="email"
            className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
          />
        </div>
        {/* Message */}
        <div className="grid grid-cols-1 gap-3 col-span-2 row-span-2">
          <h1 className="text-white text-2xl font-medium font-['Marsden']">
            Message *
          </h1>
          <textarea
            className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
            cols={30}
            rows={10}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Reply2;
