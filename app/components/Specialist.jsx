"use client";
import { siteContent } from "../lib/content";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

export default function Specialist() {
  return (
    <section className="py-10 md:py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <SectionHeading className="text-4xl! md:text-6xl!">
            Areas of <span className="text-gradient">Focus</span>
          </SectionHeading>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
            Specialized care tailored to your unique experiences and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.specialties.map((item, index) => (
            <GlassCard
              key={index}
              className="rounded-3xl p-8 flex flex-col justify-between group hover:bg-white/5 transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-medium text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <div className="w-12 h-0.5 bg-white/20 group-hover:bg-cyan-400/50 transition-colors"></div>

                <p className="text-gray-300 leading-relaxed min-h-[80px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 w-full aspect-square rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0c29] to-transparent z-10 opacity-60"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
