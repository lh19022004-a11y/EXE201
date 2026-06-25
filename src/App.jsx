import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar onStart={() => setIsRegisterOpen(true)} />
      <HeroSection onStart={() => setIsRegisterOpen(true)} />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PortfolioSection />
      <Testimonials />
      <CTASection onStart={() => setIsRegisterOpen(true)} />
      <Footer />

      {/* Global Registration Form Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-3 md:gap-4">
        {/* Zalo Button */}
        <a 
          href="https://zalo.me/0336321483" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-12 h-12 md:w-14 md:h-14 bg-[#0068ff] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer"
          aria-label="Chat Zalo"
        >
          {/* Tooltip */}
          <span className="absolute right-16 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
            Chat Zalo
          </span>
          <span className="font-extrabold text-sm tracking-wide">Zalo</span>
        </a>

        {/* Phone Button */}
        <a 
          href="tel:+84336321483" 
          className="group relative w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 animate-pulse-ring cursor-pointer"
          aria-label="Gọi điện thoại"
        >
          {/* Tooltip */}
          <span className="absolute right-16 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
            Gọi ngay: 0336 321 483
          </span>
          {/* Phone SVG Icon */}
          <svg 
            className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.5" 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
            />
          </svg>
        </a>
      </div>
    </main>
  );
}

export default App;
