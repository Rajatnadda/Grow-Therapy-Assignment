"use client";
import { useState } from "react";
import Image from "next/image";
import { siteContent } from "../lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-10 md:pt-0 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="sticky top-24">
          <div className="absolute top-10 left-10 w-full h-full bg-cyan-500/10 rounded-t-full blur-2xl -z-10 transform translate-x-4 translate-y-4"></div>

          <div className="relative rounded-3xl border-full overflow-hidden border border-white/10 w-full max-w-[460px] aspect-[2/3] mx-auto md:mx-0">
            <Image
              src="/Images/faq1.jpg"
              alt="Dr. Maya Reynolds FAQ"
              fill
              className="object-cover opacity-90 border-white/10 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0f0c29] via-transparent to-transparent opacity-40"></div>
          </div>
        </div>

        <div className="pt-12 md:pt-20">
          <div className="mb-16 space-y-4">
            <h4 className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-bold">
              Common Questions
            </h4>
            <h1 className="text-white text-5xl md:text-6xl font-serif font-medium tracking-tight">
              FAQ
            </h1>
          </div>

          <div className="border-b border-white/20">
            {siteContent.faqs.map((item, index) => (
              <div key={index} className="border-t border-white/20">
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="w-full flex items-start gap-6 py-8 text-left group"
                >
                  <span
                    className={`text-3xl cursor-pointer font-light opacity-80 shrink-0 mt-[-4px] w-8 transition-colors duration-300 ${open === index ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-400"}`}
                  >
                    {open === index ? "—" : "+"}
                  </span>
                  <span
                    className={`text-2xl md:text-3xl font-serif font-medium tracking-tight transition-colors duration-300 ${open === index ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                  >
                    {item.question}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                    open === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-14 pb-8">
                    <p className="text-lg text-gray-300 font-light leading-relaxed max-w-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
