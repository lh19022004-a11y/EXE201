import React, { useEffect, useRef } from 'react';
import heroImg from '../assets/hero.png';
import ScrollReveal3D from './ScrollReveal3D';
import Tilt3D from './Tilt3D';

const HeroSection = ({ onStart }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section 
      className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay with Blur */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"></div>

      {/* Decorative 3D floating background elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float-slow hidden md:block"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/15 rounded-full blur-3xl animate-float-delayed hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <ScrollReveal3D direction="up" delay={150} duration={800}>
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-primary rounded-full shadow-lg shadow-primary/30">
                Dẫn dắt cảm xúc, Chạm tới truyền thống
              </div>
            </ScrollReveal3D>
            
            <ScrollReveal3D direction="up" delay={300} duration={950}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-md">
                Biến Điểm Chạm
                <br />
                thành <span className="text-primary italic relative inline-block after:absolute after:bottom-1 after:left-0 after:w-full after:h-1.5 after:bg-primary/30 after:-z-10">Ánh Sáng</span>
              </h1>
            </ScrollReveal3D>
            
            <ScrollReveal3D direction="up" delay={450} duration={950}>
              <p className="text-white/90 text-lg mb-10 max-w-lg leading-relaxed font-medium drop-shadow">
                Hãy để The AlcheZ giúp bạn nâng tầm những giá trị tưởng chừng quen thuộc, biến từng khoảnh khắc trong xưởng nghề thành những câu chuyện truyền cảm hứng và lan tỏa mạnh mẽ trên nền tảng số.
              </p>
            </ScrollReveal3D>
            
            <ScrollReveal3D direction="up" delay={600} duration={950}>
              <div className="flex flex-row gap-3 w-full sm:w-auto">
                <button onClick={onStart} className="btn-primary shadow-xl shadow-primary/25 cursor-pointer px-4 sm:px-8 text-sm sm:text-base flex-1 sm:flex-none text-center">
                  Bắt đầu ngay
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-1.5 font-semibold text-white hover:text-primary transition-all py-3 px-4 sm:px-8 text-sm sm:text-base group cursor-pointer flex-1 sm:flex-none"
                >
                  <span>Xem các dự án</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </ScrollReveal3D>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative hidden lg:block">
            <ScrollReveal3D direction="right" delay={400} duration={1100}>
              <Tilt3D maxRotation={7} scale={1.02} className="relative z-10 rounded-3xl shadow-2xl max-w-md mx-auto overflow-hidden">
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 hover:border-white/20 transition-colors">
                  <img 
                    src={heroImg} 
                    alt="Vietnamese Craft Culture" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl"></div>
                </div>
              </Tilt3D>
            </ScrollReveal3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
