"use client";
import { useState } from "react";
import { siteContent } from "../lib/content";
import GlassCard from "../components/ui/GlassCard";
import MapFrame from "../components/ui/MapFrame";
import Toast from "../components/Toast";

export default function Page() {
  const { office } = siteContent;
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    e.target.reset();
  };

  return (
    <section className="min-h-screen pt-32 px-6 md:px-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 mb-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-6xl md:text-8xl font-medium text-white tracking-tight">
              Let’s <span className="text-gradient">Connect</span>
            </h1>

            <div className="space-y-3 text-lg text-gray-300">
              <p>Starting therapy is courageous.</p>
              <p>
                Get in touch for questions, or to book a free 15-minute
                consultation.
              </p>
            </div>
          </div>

          <GlassCard className="p-2 max-w-sm shrink-0 rounded-2xl">
            <div className="relative aspect-3/4 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-tr from-purple-500/20 to-cyan-500/20 mix-blend-overlay"></div>
              <img
                src="/Images/connect.jpg"
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
          </GlassCard>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <GlassCard className="p-10 md:p-12 rounded-2xl bg-[#223614]/80 text-white shadow-2xl space-y-8">
            <div className="space-y-2 text-center mb-8">
              <h3 className="text-3xl font-medium text-white">
                Send a Message
              </h3>
              <p className="text-gray-300">
                Enter your details below to reach out directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-gray-300 ml-1">
                    Subject
                  </label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-400 transition-all [&>option]:text-black">
                    <option>General Inquiry</option>
                    <option>Scheduling</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-gray-300 ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-400 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#223614] font-bold tracking-widest uppercase rounded-lg p-4 hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </div>

      <GlassCard className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center rounded-3xl p-8 md:p-16 bg-white/5">
        <div className="space-y-12">
          <div>
            <h2 className="text-5xl font-medium text-white mb-6">My Office</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {office.address.street}
              <br />
              {office.address.city}, {office.address.state} {office.address.zip}
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-medium text-white mb-4">Hours</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {office.hours.days}
              <br />
              {office.hours.time}
            </p>
          </div>
        </div>

        <MapFrame src={office.mapEmbed} />
      </GlassCard>

      {showToast && (
        <Toast
          message="Message sent successfully! We'll get back to you soon."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
}
