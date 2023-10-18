"use client";
import React, { useEffect, useState } from "react";

function Faq() {
  const [faqs, setFaqs] = useState<any>([]);
  async function fetchData() {
    const res = await fetch(`http://localhost:1337/api/faqs`);
    const data = await res.json();
    setFaqs(data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-24  space-y-2 text-white text-center">
      {faqs && faqs.map((faq: any) => (
        <div
          key={faq.id}
          className="collapse collapse-plus max-w-4xl bg-[#2f6fa0]/40"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {faq.attributes.Question}
          </div>
          <div className="collapse-content">
            <p>
              {faq.attributes.Answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
