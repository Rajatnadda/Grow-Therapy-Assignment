"use client";
import { useRouter } from "next/navigation";

export default function ContactCTA() {
  const router = useRouter();

  return (
    <section className="py-32 text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 to-cyan-900/20 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        <h2 className="text-white text-5xl md:text-6xl font-serif font-medium tracking-tight leading-tight">
          Ready to start your <br />
          <span className="text-gradient">journey?</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
          Taking the first step is often the hardest, but you don't have to do
          it alone. Book a consultation to see if we're a good fit.
        </p>

        <div className="pt-4">
          <button
            onClick={() => router.push("/Appointment")}
            className="bg-white text-[#223614] cursor-pointer px-12 py-4 text-base font-bold tracking-widest uppercase hover:bg-cyan-400 hover:text-white transition-all duration-300 rounded-lg shadow-xl shadow-white/10 hover:shadow-cyan-400/20 hover:-translate-y-1"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
