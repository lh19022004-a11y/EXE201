import React from 'react';
import ctaBg from '../assets/pottery.png';

const CTASection = ({ onStart }) => {
  return (
    <section id="contact" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto relative group overflow-hidden rounded-[48px] bg-secondary" style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Background Overlay with Gradient */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-secondary/80 opacity-90"></div>
        
        {/* Content */}
        <div className="relative z-10 py-20 px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Hãy để chúng tôi kể câu chuyện của bạn
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed italic">
            Mỗi nghệ nhân là một nhà thông thái, mỗi sản phẩm là một kiệt tác. Đừng để những giá trị đó bị mai một trong bóng tối.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={onStart} className="bg-white text-primary font-bold py-4 px-10 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              Liên hệ tư vấn ngay
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-300">
              Xem bảng giá chi tiết
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTASection;
