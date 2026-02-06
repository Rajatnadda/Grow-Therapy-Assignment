"use client";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../lib/content";

export default function Guidance() {
  const { guidance } = siteContent;

  return (
    <section className="min-h-screen grid grid-cols-1 pt-20 md:grid-cols-2">
      <div className="h-[40vh] md:h-[88vh] relative group overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
        <Image
          src="/Images/download3.jpg"
          alt="Guidance and Support"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0f0c29] opacity-90 md:opacity-20"></div>
      </div>

      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 space-y-10 py-16 bg-[#0f0c29] md:bg-transparent relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl -z-10 hidden md:block"></div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-white">
            {guidance.title}{" "}
            <span className="text-gradient">{guidance.highlight}</span>.
          </h2>

          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            {guidance.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">
            I can help with:
          </p>
          <ul className="space-y-4 text-lg text-gray-200">
            {guidance.helpList.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6">
          <Link
            href="/Connect"
            className="group flex items-center gap-4 cursor-pointer text-white hover:text-cyan-400 transition-all duration-300"
          >
            <span className="text-sm tracking-[0.2em] font-bold uppercase border-b border-white/30 group-hover:border-cyan-400 pb-1">
              Work With Me
            </span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
