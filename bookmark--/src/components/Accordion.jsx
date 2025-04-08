import React, { useState } from "react";

const Accordion = ({ id, title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="acc-cont">
      <button
      key={id}
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full border-b border-b-blue-400 bg-white px-4 py-4"
      >
        <span className="text-blue-950">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <img src="/icon-arrow.svg" alt="arrow icon"  className={`transform w-2 origin-center transition duration-200 ease-out object-contain ${
            accordionOpen && "!rotate-180"
          }`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
