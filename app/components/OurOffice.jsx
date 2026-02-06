"use client";
import { motion } from "framer-motion";

export default function OurOffice() {
  return (
    <section className="py-10 md:pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight">
              A Calm Space for <span className="text-cyan-400">Healing</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                My office in Santa Monica is designed to be a sanctuary away
                from the noise of the city. Creating a safe, comfortable
                physical environment is a crucial part of the therapeutic
                process.
              </p>
              <p>
                Located just blocks from the ocean, the space features natural
                light, private waiting areas, and soundproofing to ensure your
                complete privacy and comfort during our sessions.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Location
                </h3>
                <p>
                  123 4th Street, Suite 45
                  <br />
                  Santa Monica, CA 90401
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <span className="px-4 py-2 border border-white/20 rounded-full text-sm text-gray-300">
                In-Person
              </span>
              <span className="px-4 py-2 border border-white/20 rounded-full text-sm text-gray-300">
                Hybrid
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 relative">
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl -z-10 rounded-full" />

            <div className="space-y-4 pt-12">
              <div className="h-54 rounded-2xl overflow-hidden glass-card border border-white/10">
                <img
                  src="/Images/office1.jpeg"
                  className="w-full h-full object-cover cursor-grab  hover:scale-110 transition-transform duration-700"
                  alt="Waiting Area"
                />
              </div>
              <div className="h-54 rounded-2xl overflow-hidden glass-card border border-white/10">
                <img
                  src="/Images/office2.jpeg"
                  className="w-full h-full object-cover cursor-grab hover:scale-110 transition-transform duration-700"
                  alt="Office Detail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
