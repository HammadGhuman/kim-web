import React from "react";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[201px] md:w-auto text-center">
        <span className="text-white text-[32px] font-semibold font-Marsden leading-10">
          Impressum &{" "}
        </span>
        <span className="text-orange-400 text-[32px] font-semibold font-Marsden leading-10">
          Kontakt
          <br />
        </span>
      </div>

      <div className="mt-10 w-[243px] md:w-auto text-center text-orange-400 text-2xl font-semibold font-Marsden leading-[59.04px]">
        Unternehmen
        <br />
      </div>

      <div className="mt-10 w-[202px] md:w-auto text-center text-white text-2xl font-medium font-Marsden">
        KI Mentor Technology GmbH Amtsgericht Mannheim HRB 744712
        Geschäftsführer: Christian Krauter
      </div>

      <div className="md:w-auto mt-10 w-[243px] text-center text-orange-400 text-2xl font-semibold font-Marsden leading-[59.04px]">
        Adresse
        <br />
      </div>

      <div className="w-[203px] md:w-auto text-center text-white text-2xl font-medium font-Marsden">
        Wachtelstraße 4 75245 Neulingen
      </div>

      <div className="mt-10 w-[243px] text-center text-orange-400 text-2xl font-semibold font-Marsden leading-[59.04px]">
        Telefon
        <br />
      </div>
      <div className="w-[203px] md:w-auto text-center text-white text-2xl font-medium font-Marsden">
        +49 176 60415870
      </div>

      <div className="mt-10 w-[201px] md:w-auto text-center">
        <span className="text-white text-[32px] font-semibold font-Marsden leading-[42px]">
          Kontakt{" "}
        </span>
        <span className="text-orange-400 text-[32px] font-semibold font-Marsden leading-[42px]">
          aufnehmen
        </span>
      </div>

      <form className="mt-16 md:grid  md:grid-cols-2 gap-5 mx-5">
        
        <div className="flex flex-col text-white text-xl">
          <label htmlFor="vorname" className="mb-3">
            Vorname*
          </label>
          <input
            id="vorname"
            className="bg-white/10 outline-none px-3 py-5 rounded-lg w-[300px]"
            type="text"
          />
        </div>

        <div className="flex flex-col text-white text-xl">
          <label htmlFor="Nachname" className="mb-3">
            Nachname*
          </label>
          <input
            id="Nachname"
            className="bg-white/10 outline-none px-3 py-5 rounded-lg w-[300px]"
            type="text"
          />
        </div>

        <div className="flex flex-col text-white text-xl">
          <label htmlFor="Unternehmen" className="mb-3">
            Unternehmen*
          </label>
          <input
            id="Unternehmen"
            className="bg-white/10 outline-none px-3 py-5 rounded-lg w-[300px]"
            type="text"
          />
        </div>

        <div className="flex flex-col text-white text-xl">
          <label htmlFor="E-Mail-Adresse" className="mb-3">
            E-Mail-Adresse*
          </label>
          <input
            id="E-Mail-Adresse"
            className="bg-white/10 outline-none px-3 py-5 rounded-lg w-[300px]"
            type="text"
          />
        </div>

        <div className="flex flex-col text-white text-xl col-span-2 w-full">
          <label htmlFor="Nachricht schreiben" className="mb-3">
            Nachricht schreiben*
          </label>
          <textarea
            id="Nachricht schreiben"
            className=" bg-white/10 outline-none px-3 py-5 rounded-lg"
          />
        </div>

        <button className="w-[225px] h-[61px] bg-yellow-600 rounded-[10px] flex items-center justify-center mx-auto mt-4">
          <div className="text-white text-xl font-medium font-Marsden">
            Absenden
          </div>
        </button>
      </form>
    </div>
  );
}

export default Page;
