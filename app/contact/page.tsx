import React from "react";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[201px] text-center">
        <span className="text-white text-[32px] font-semibold font-['Marsden'] leading-10">
          Impressum &{" "}
        </span>
        <span className="text-orange-400 text-[32px] font-semibold font-['Marsden'] leading-10">
          Kontakt
          <br />
        </span>
      </div>

      <div className="mt-10 w-[243px] text-center text-orange-400 text-2xl font-semibold font-['Marsden'] leading-[59.04px]">
        Unternehmen
        <br />
      </div>

      <div className="mt-10 w-[202px] text-center text-white text-2xl font-medium font-['Marsden']">
        KI Mentor Technology GmbH Amtsgericht Mannheim HRB 744712
        Geschäftsführer: Christian Krauter
      </div>

      <div className=" mt-10 w-[243px] text-center text-orange-400 text-2xl font-semibold font-['Marsden'] leading-[59.04px]">
        Adresse
        <br />
      </div>

      <div className="w-[203px]  text-center text-white text-2xl font-medium font-['Marsden']">
        Wachtelstraße 4 75245 Neulingen
      </div>

      <div className="mt-10 w-[243px] text-center text-orange-400 text-2xl font-semibold font-['Marsden'] leading-[59.04px]">
        Telefon
        <br />
      </div>
      <div className="w-[203px] text-center text-white text-2xl font-medium font-['Marsden']">
        +49 176 60415870
      </div>

      <div className="mt-10 w-[201px] text-center">
        <span className="text-white text-[32px] font-semibold font-['Marsden'] leading-[42px]">
          Kontakt{" "}
        </span>
        <span className="text-orange-400 text-[32px] font-semibold font-['Marsden'] leading-[42px]">
          aufnehmen
        </span>
      </div>

      <form className="mt-16 flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="w-[109px] text-white text-2xl font-medium font-['Marsden']">
            Vorname*
          </div>

          <input className="w-[329px] h-[72px] bg-opacity-50 mix-blend-soft-light bg-white rounded-[20px] px-10 text-white" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="w-[109px] text-white text-2xl font-medium font-['Marsden']">
            Vorname*
          </div>

          <input className="w-[329px] h-[72px] bg-opacity-50 mix-blend-soft-light bg-white rounded-[20px] px-10 text-white" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="w-[109px] text-white text-2xl font-medium font-['Marsden']">
            Vorname*
          </div>

          <input className="w-[329px] h-[72px] bg-opacity-50 mix-blend-soft-light bg-white rounded-[20px] px-10 text-white" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="w-[109px] text-white text-2xl font-medium font-['Marsden']">
            Vorname*
          </div>

          <input className="w-[329px] h-[72px] bg-opacity-50 mix-blend-soft-light bg-white rounded-[20px] px-10 text-white" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="w-[109px] text-white text-2xl font-medium font-['Marsden']">
            Vorname*
          </div>

          <input className="w-[329px] h-[72px] bg-opacity-50 mix-blend-soft-light bg-white rounded-[20px] px-10 text-white" />
        </div>

        <button className="w-[225px] h-[61px] bg-yellow-600 rounded-[10px] flex items-center justify-center">
          <div className="text-white text-xl font-medium font-['Marsden']">
            Absenden
          </div>
        </button>
      </form>
    </div>
  );
}

export default Page;
