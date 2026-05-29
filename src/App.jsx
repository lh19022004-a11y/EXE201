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
    </main>
  );
}

export default App;
