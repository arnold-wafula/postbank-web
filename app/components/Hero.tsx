"use client";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f9f8f6] -mt-[60px] overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <pattern id="heritage-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,100 L100,0" stroke="#ab9450" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#heritage-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-[600px] px-6 md:px-12 py-10 md:py-0">
        
        {/* LEFT: Text */}
        <div className="flex-1 text-center md:text-left space-y-6 z-10 mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Tradition of Trust, <br /> Built for Tomorrow
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            For over a century, we’ve helped generations save, grow, and achieve their dreams — with services that evolve as you do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/open-account"
              className="bg-[#ab9450] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#bfa55c] transition-colors"
            >
              Open an Account
            </a>
            <a
              href="/our-history"
              className="border border-gray-800 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Our Legacy
            </a>
          </div>
        </div>

        {/* Accent Line (hidden on mobile) */}
        <div className="hidden md:block w-[2px] h-2/3 bg-[#ab9450] mx-12 rounded-full shadow-md"></div>

        {/* RIGHT: Image (on top for mobile) */}
        <div className="flex-1 h-[300px] sm:h-[400px] md:h-[600px] relative md:pt-12">
          <img
            src="/hero1.jpg"
            alt="Historic and modern bank imagery"
            className="w-full h-full object-cover rounded-xl shadow-xl md:translate-x-6"
          />
        </div>
      </div>
    </section>
  );
}