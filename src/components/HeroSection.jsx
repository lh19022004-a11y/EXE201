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
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* Fallback Background Image (Displays instantly while video loads or if video is blocked on mobile) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Background Video Player */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={heroImg}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        // Thay đường dẫn bên dưới bằng đường link Vercel Blob bạn vừa copy ở Bước 1
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
      />

      {/* Subtle overlay to enhance text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      {/* Hero Content Container */}
      <div className="relative z-10 flex-1 flex flex-col w-full justify-between">
        {/* We place Navbar inside or outside based on layout */}
        <div className="w-full" />

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 flex-1 flex items-center w-full">
          <div className="lg:flex lg:items-center lg:gap-12 w-full">
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

            {/* Right Image / Decorator */}
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
      </div>
    </section>
  );
};

export default HeroSection;
