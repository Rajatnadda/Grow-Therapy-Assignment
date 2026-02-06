"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "../lib/content";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import MapFrame from "../components/ui/MapFrame";

export default function Page() {
  const { hero, bio, office } = siteContent;

  return (
    <section className="min-h-screen pt-24 md:pt-32 px-6 md:px-12 pb-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-32">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-2">
              {hero.name},{" "}
              <span className="text-gray-400 text-3xl md:text-5xl">
                {hero.title}
              </span>
            </h1>
            <p className="text-xl text-cyan-400 font-light tracking-widest uppercase">
              {hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-2xl"
          >
            {hero.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/Appointment">
              <Button>Book a Consultation</Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md lg:max-w-lg aspect-[3/4]"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl md:rounded-[2rem] transform rotate-3"></div>
          <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 glass-card">
            <Image
              src="/Images/Dr. Maya Reynolds.png"
              alt={hero.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0e1208] via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto space-y-24">
        <GlassCard className="p-10 md:p-14 rounded-3xl">
          <SectionHeading className="mb-8">{bio.focus.title}</SectionHeading>
          <div className="space-y-6 text-gray-300 leading-loose text-lg">
            {bio.focus.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </GlassCard>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <SectionHeading>{bio.approach.title}</SectionHeading>
            <div className="w-20 h-1 bg-cyan-500/50 rounded-full"></div>
            {bio.approach.content.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>

          <GlassCard className="p-8 rounded-2xl bg-[#223614]/40 flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-medium text-cyan-100 mb-2">
              Integrative Methods
            </h3>
            <ul className="space-y-3">
              {bio.approach.methods.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </section>

        <section className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="flex-1 space-y-6">
            <SectionHeading>{bio.burnout.title}</SectionHeading>
            {bio.burnout.content.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </section>

        <GlassCard className="p-10 rounded-3xl bg-linear-to-br from-white/5 to-transparent">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading>The Space</SectionHeading>
              <p className="text-gray-300 leading-relaxed text-lg">
                {office.description}
              </p>

              <div className="inline-block text-left bg-black/20 p-6 rounded-xl border border-white/5">
                <h4 className="text-cyan-400 text-sm uppercase tracking-widest mb-2 font-bold">
                  Location
                </h4>
                <p className="text-white text-lg">
                  {office.address.street}, {office.address.city},{" "}
                  {office.address.state} {office.address.zip}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {office.address.note}
                </p>
              </div>
            </div>

            <MapFrame src={office.mapEmbed} />
          </div>
        </GlassCard>

        <div className="text-center pt-10">
          <p className="text-xl text-white font-light italic mb-8">
            {bio.quote}
          </p>
          <Link href="/Connect">
            <Button
              variant="gradient"
              className="px-10 py-4 text-base rounded-xl"
            >
              Schedule Your Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
