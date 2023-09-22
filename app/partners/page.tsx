import PartnerBackground from "@/components/partnerBackground";
import React, { useEffect, useRef } from "react";
function AskQuestion() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[225px] text-center">
        <span className="text-white text-[32px] font-medium  leading-[38px]">
          KI.m For
        </span>
        <span className="text-yellow-600 text-[32px] font-medium  leading-[38px]">
          {" "}
          Partners
        </span>
      </div>

      <div className="w-[291px] mt-5 text-center text-white text-[15px] font-medium leading-relaxed">
        Here you can find out everything about the KI.m partner program.
      </div>

      <div className="mt-7">
        <PartnerBackground />
      </div>

      <div className="text-center mt-4">
        <span className="text-white text-4xl font-medium leading-[44px] tracking-wide">
          OUR <br />
        </span>
        <span className="text-yellow-600 text-4xl font-medium  leading-[44px] tracking-wide">
          PARTNERS
        </span>
      </div>

      <div className="text-center text-white text-4xl font-medium leading-[72px]">
        Benifits
      </div>


      <div>
        
      </div>
    </div>
  );
}

export default AskQuestion;
