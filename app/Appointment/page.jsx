"use client";

import React, { useState } from "react";
import Toast from "../components/Toast";

export default function AppointmentPage() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowToast(true);

    e.target.reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-24">
      <div className="w-full max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
              Book an <span className="text-gradient">Appointment</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Take the first step towards your well-being. Schedule a
              consultation directly with us. Our secure, HIPAA-compliant booking
              system ensures your privacy.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider text-gray-300 ml-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-wider text-gray-300 ml-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(555) 123-4567"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-gray-300 ml-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="jane@example.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-xs uppercase tracking-wider text-gray-300 ml-1"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 [&::-webkit-calendar-picker-indicator]:invert"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="time"
                  className="block text-xs uppercase tracking-wider text-gray-300 ml-1"
                >
                  Preferred Time
                </label>
                <select
                  id="time"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 appearance-none"
                >
                  <option value="" className="bg-gray-900 text-gray-500">
                    Select a time range
                  </option>
                  <option value="morning" className="bg-gray-900">
                    Morning (9AM - 12PM)
                  </option>
                  <option value="afternoon" className="bg-gray-900">
                    Afternoon (12PM - 4PM)
                  </option>
                  <option value="evening" className="bg-gray-900">
                    Evening (4PM - 7PM)
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider text-gray-300 ml-1"
              >
                Reason for Visit (Optional)
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Briefly describe what you'd like to discuss..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white font-medium tracking-widest uppercase rounded-xl p-5 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <Toast
          message="Appointment request submitted successfully! We'll contact you soon."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
