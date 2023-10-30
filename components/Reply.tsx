import React from "react";
import ReadMoreButton from "./ReadMoreButton";

function Reply() {
  return (
    <form
      action="https://formsubmit.co/Christian.Krauter@ki-mentor.com"
      method="POST"
      className="flex flex-col"
    >
      <div
        id="BewerbenSiesichjetztalsPartner"
        className="flex flex-col items-c space-y-5 md:space-x-0 mt-10 bg-[#4969a1]/40 px-10 py-10 mx-10 md:mx-96 rounded-[20px]"
      >
        <h1 className="text-white text-4xl font-bold font-['Marsden']">
          Contact
        </h1>
        <div className="grid grid-cols-2 gap-10">
          {/* First Name */}
          <div className="grid grid-cols-1 gap-3">
            <h1 className="text-white text-2xl font-medium font-['Marsden']">
              Vorname *
            </h1>
            <input
              type="text"
              name="vorname"
              className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] md:w-[425px] rounded-[20px]"
            />
          </div>
          {/* Last Name */}
          <div className="grid grid-cols-1 gap-3">
            <h1 className="text-white text-2xl font-medium font-['Marsden']">
              Nachname *
            </h1>
            <input
              type="text"
              name="nachname"
              className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] md:w-[425px] rounded-[20px]"
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 gap-3 col-span-2">
            <h1 className="text-white text-2xl font-medium font-['Marsden']">
              E-Mail-Adresse *
            </h1>
            <input
              type="email"
              name="email"
              className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
            />
          </div>

          <div className="text-white text-[32px] font-medium font-['Marsden'] col-span-2">
            Company Details (optional)
          </div>
          {/* Company Name */}
          <div className="grid grid-cols-1 gap-3 ">
            <h1 className="text-white text-2xl font-medium font-['Marsden']">
              Company Name
            </h1>
            <input
              type="text"
              name="company_name"
              className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
            />
          </div>

          {/* Legal Form */}
          <div className="grid grid-cols-1 gap-3">
            <h1 className="text-white text-2xl font-medium font-['Marsden']">
              Legal Form
            </h1>
            <select
              name="legalfrom"
              className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px] appearance-none"
            >
              <option className="bg-blue-400 text-white" value="option1">
                Option 1
              </option>
              <option className="bg-blue-400 text-white" value="option2">
                Option 2
              </option>
              <option className="bg-blue-400 text-white" value="option3">
                Option 3
              </option>
            </select>
          </div>

          {/* Description of Company */}

          <div className="grid grid-cols-1 gap-3 col-span-2">
            <h1 className="text-white text-2xl font-medium font-['Marsden']">
              Description of Company
            </h1>
            <input
              type="text"
              name="companydescription"
              className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
            />
          </div>

          {/* Link to Website */}
          <div className="grid grid-cols-1 gap-3 col-span-2">
            <h1 className="text-white text-2xl font-medium font-['Marsden']">
              Link to Website
            </h1>
            <input
              type="text"
              name="websitelink"
              className="px-3 text-white text-xl bg-blue-400 bg-opacity-10 h-[72px] rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-[225px] md:mx-96 h-[61px] mt-10 flex items-center justify-center bg-[#B77828] rounded-[10px]"
      >
        <div className="text-white text-center text-xl font-medium">
          {"Send Message"}
        </div>
      </button>
    </form>
  );
}

export default Reply;
