import React from 'react';
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

function App() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PortfolioSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
