"use client";
import React, { useEffect, useState } from "react";

function Faq() {
  const [faqs, setFaqs] = useState<any>([]);
  const [activeFaqId, setActiveFaqId] = useState(null);

  async function fetchData() {
    const res = await fetch(`http://localhost:1337/api/faqs`);
    const data = await res.json();
    setFaqs(data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="Fragenstellen" className="overflow-y-scroll mx-auto h-96 mt-24 max-w-[800px] pr-2">
      <div
        id="faqs"
        className="flex flex-col items-center  justify-center  space-y-2 text-white text-center"
      >
        {faqs &&
          faqs.map((faq: any) => (
            <div
              key={faq.id}
              className={` ${
                activeFaqId === faq.id
                  ? "bg-[#5174AE] bg-opacity-40 border-b-0 rounded-xl"
                  : "border-b-[1px]"
              }`}
              onClick={() => setActiveFaqId(faq.id)}
            >
              <div className="collapse collapse-plus max-w-4xl font-Marsden pl-3 ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-left text-xl font-bold pr-10">
                  {faq.attributes.Question}
                </div>
                <div className="collapse-content text-left text-[13px] font-medium pr-10">
                  <p>{faq.attributes.Answer}</p>
                </div>
              </div>
            </div>
          ))}
        {faqs &&
          faqs.map((faq: any) => (
            <div
              key={faq.id}
              className={` ${
                activeFaqId === faq.id
                  ? "bg-[#5174AE] bg-opacity-40 border-b-0 rounded-xl"
                  : "border-b-[1px]"
              }`}
              onClick={() => setActiveFaqId(faq.id)}
            >
              <div className="collapse collapse-plus max-w-4xl font-Marsden pl-3 ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-left text-xl font-bold pr-10">
                  {faq.attributes.Question}
                </div>
                <div className="collapse-content text-left text-[13px] font-medium pr-10">
                  <p>{faq.attributes.Answer}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Faq;
