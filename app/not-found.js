"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLayout } from "./components/LayoutContext";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const { setHideLayout } = useLayout();

  useEffect(() => {
    setHideLayout(true);
    setMounted(true);

    return () => {
      setHideLayout(false);
    };
  }, [setHideLayout]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative mb-8">
          <h1
            className={`text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-none transition-all duration-1000 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            404
          </h1>
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 -z-10" />
        </div>

        <div
          className={`space-y-4 mb-8 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into
            the digital void.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/"
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <span className="relative z-10">Go Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-purple-500/50 rounded-full text-white font-medium hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:border-purple-500"
          >
            Go Back
          </button>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div
            className={`absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl transition-all duration-[3000ms] ${
              mounted ? "animate-float" : ""
            }`}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl transition-all duration-[4000ms] ${
              mounted ? "animate-float-delayed" : ""
            }`}
          />
          <div
            className={`absolute top-1/2 right-1/3 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl transition-all duration-[5000ms] ${
              mounted ? "animate-float" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
