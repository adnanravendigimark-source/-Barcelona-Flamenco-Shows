"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-3">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div
            key={f.question}
            className={`overflow-hidden rounded-2xl border bg-white shadow-xs transition-all duration-200 ${
              open ? "border-[#C8643F]/50 shadow-md" : "border-[#E5D6BE]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full cursor-pointer list-none items-center justify-between gap-3 p-6 text-left font-serif font-bold text-[#263D2A]"
            >
              <span className="text-base">{f.question}</span>
              <span
                className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                  open
                    ? "rotate-45 bg-[#C8643F] text-white"
                    : "bg-[#F8F3E9] text-[#263D2A]"
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <div
                className="rich-content mt-0 border-t border-[#E5D6BE]/60 px-6 pb-6 pt-4 text-sm leading-relaxed text-[#29302A]/85"
                dangerouslySetInnerHTML={{ __html: f.answer }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
