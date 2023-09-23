import React from "react";

function Benifits() {
  return (
    <div className="flex flex-col items-center space-y-5 px-4 w-[334px] h-[166px] relative bg-blue-400 bg-opacity-20 rounded-[5px] border border-white">
      <h1 className="text-center text-[#CD9145] text-sm font-semibold tracking-tight mt-4">
        Neue Zielgruppen & Umsatzquellen
        <br />
        erschließen
      </h1>
      <p className="text-center text-white text-[10px] font-normal">
        Mit KI.m kann ich Kunden an mich binden, Zusatzleistungen verkaufen, den
        Umsatz erhöhen und neue Zielgruppen erschließen, welche ich mit meinen
        Standardleistungen aus Budget- oder anderen Gründen nicht erreiche.
      </p>
    </div>
  );
}

export default Benifits;
