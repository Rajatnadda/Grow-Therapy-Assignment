"use client";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../lib/content";
import Button from "./ui/Button";

export default function Life() {
  const { life } = siteContent;

  return (
    <section className="font-poppins relative overflow-hidden py-10 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center px-6 md:px-12">
        <div className="flex flex-col justify-center text-white space-y-8 order-2 md:order-1 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-tight">
              {life.title} <br />
              <span className="text-gradient">{life.highlight}</span>.
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            {life.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="font-medium text-white">{life.signature}</p>
          </div>

          <Link href="/Connect">
            <Button className="w-full">Start Your Journey</Button>
          </Link>
        </div>

        <div className="relative w-full aspect-[4/5] md:aspect-square order-1 md:order-2">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>

          <div className="relative h-full w-full rounded-3xl overflow-hidden glass-card border border-white/10 p-2">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="/Images/Life.jpg"
                alt="Dr. Maya Reynolds consulting"
                fill
                className="object-cover hover:scale-105 cursor-alias transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-tr from-purple-900/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
