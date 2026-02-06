"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 pt-34 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] -z-10 opacity-50"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="text-white space-y-8 text-center md:text-left order-2 md:order-1">
          <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
            Dr. Maya <br />
            <span className="text-gradient">Reynolds</span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-light text-gray-300">
              Licensed Clinical Psychologist
            </p>
            <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Providing compassionate, evidence-based care for anxiety, trauma,
              and personal growth in Santa Monica, CA.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => router.push("/Appointment")}
              className="bg-white text-[#223614]  hover:animate-bounce px-10 py-4 text-sm cursor-pointer font-bold tracking-widest uppercase hover:bg-cyan-400 hover:text-white transition-all duration-300 rounded-lg shadow-xl shadow-white/5"
            >
              Book a Consultation
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto aspect-[3/4] order-1 md:order-2 group">
          <div className="absolute -inset-1 rounded-t-[1000px] bg-linear-to-tr from-purple-500 to-cyan-500 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md lg:max-w-lg aspect-3/4"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl md:rounded-4xl transform rotate-3"></div>
            <div className="relative h-full w-full rounded-2xl md:rounded-4xl overflow-hidden border border-white/10 glass-card">
              <Image
                src="/Images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover cursor-pointer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e1208] via-transparent to-transparent opacity-60 cursor-pointer"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
