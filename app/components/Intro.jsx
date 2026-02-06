"use client";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../lib/content";

export default function Intro() {
  const { introComponent } = siteContent;

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 py-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-10 text-white relative z-10 w-full order-2 md:order-1">
          <div className="space-y-4">
            <h4 className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-bold">
              {introComponent.subtitle}
            </h4>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight"
              dangerouslySetInnerHTML={{ __html: introComponent.title }}
            />
          </div>

          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            {introComponent.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/Bio"
              className="group inline-flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
            >
              <span className="uppercase tracking-[0.2em] text-sm font-bold">
                Read My Full Bio
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl -z-10 rounded-full opacity-60" />

          <div className="relative w-[300px] md:w-[380px] h-[450px] md:h-[550px] mx-auto md:ml-auto">
            <div className="absolute inset-0 rounded-t-[200px] border border-white/10 overflow-hidden glass-card">
              <Image
                src="/Images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Portrait"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f0c29] via-transparent to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
