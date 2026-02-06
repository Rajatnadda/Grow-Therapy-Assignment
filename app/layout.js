"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import RevealOnScroll from "./components/RevealOnScroll";
import { Poppins } from "next/font/google";
import { LayoutProvider, useLayout } from "./components/LayoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

function LayoutContent({ children }) {
  const { hideLayout } = useLayout();

  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#0f0c29]">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 opacity-50 blur-[80px]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 opacity-50 blur-[80px]" />
      </div>

      <ScrollToTop />

      {!hideLayout && <Navbar />}

      {children}

      {!hideLayout && (
        <RevealOnScroll width="100%" delay={0.2}>
          <Footer />
        </RevealOnScroll>
      )}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased relative selection:bg-purple-500/30 selection:text-white`}
      >
        <LayoutProvider>
          <LayoutContent>{children}</LayoutContent>
        </LayoutProvider>
      </body>
    </html>
  );
}
