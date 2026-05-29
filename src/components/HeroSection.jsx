import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import heroImg from '../assets/hero.png';

const HeroSection = ({ onStart }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.log("Autoplay was prevented on this device, using fallback image:", err);
      });
    }
  }, []);

  return (
    <section 
      className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay with Blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-primary rounded-full">
              Dẫn dắt cảm xúc, Chạm tới truyền thống
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Biến Điểm Chạm
              <br />
              thành <span className="text-primary italic">Ánh Sáng</span>
            </h1>
            <p className="text-white/90 text-lg mb-10 max-w-lg leading-relaxed font-medium">
              Hãy để The AlcheZ giúp bạn nâng tầm những giá trị tưởng chừng quen thuộc, biến từng khoảnh khắc trong xưởng nghề thành những câu chuyện truyền cảm hứng và lan tỏa mạnh mẽ trên nền tảng số.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onStart} className="btn-primary">
                Bắt đầu ngay
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 font-semibold text-white hover:text-primary transition-colors py-3 px-8"
              >
                <span>Xem các dự án</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 max-w-md mx-auto border-4 border-white/10">
              <img 
                src={heroImg} 
                alt="Vietnamese Craft Culture" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
