"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "../lib/content";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

const Background = () => {
  const [openSection, setOpenSection] = useState(null);
  const { background } = siteContent;

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-bold">
            {background.subtitle}
          </h4>
          <SectionHeading className="text-4xl! md:text-5xl!">
            {background.title}
          </SectionHeading>
        </div>

        <div className="space-y-4">
          {background.items.map((item, index) => (
            <GlassCard
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full py-6 px-8 flex justify-between items-center text-left"
              >
                <span className="text-xl md:text-2xl text-white font-light tracking-wide font-serif">
                  {item.title}
                </span>
                <span
                  className={`text-2xl font-light cursor-pointer hover:text-cyan-400 transition-colors duration-300 ${openSection === index ? "text-cyan-400" : "text-gray-400"}`}
                >
                  {openSection === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openSection === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-300 font-light text-lg leading-relaxed border-t border-white/5 pt-4">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
