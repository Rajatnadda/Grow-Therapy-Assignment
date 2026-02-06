import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0c29] text-gray-300 relative z-10 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
        <div className="sm:col-span-2 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white mb-2">
              Dr. Maya Reynolds<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">
              Licensed Clinical Psychologist
            </p>
          </div>

          <div className="space-y-1 sm:space-y-2 text-base sm:text-lg">
            <p>123 4th Street, Suite 45</p>
            <p>Santa Monica, CA 90401</p>
          </div>

          <div className="space-y-1 sm:space-y-2 text-base sm:text-lg pt-2">
            <a
              href="mailto:hello@drmaya.com"
              className="block hover:text-cyan-400 transition-colors"
            >
              hello@drmaya.com
            </a>
            <a
              href="tel:+15555555555"
              className="block hover:text-cyan-400 transition-colors"
            >
              (555) 555-5555
            </a>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-medium text-white font-serif">
            Hours
          </h3>
          <div className="space-y-1 sm:space-y-2 text-base sm:text-lg">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-medium text-white font-serif">
            Menu
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Bio"
                className="hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Connect"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/Appointment"
                className="hover:text-cyan-400 transition-colors"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#0a081f] py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Dr. Maya Reynolds. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <Link
              href="#"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Good Faith Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
