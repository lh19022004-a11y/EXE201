import React from 'react';
import solutionImg from '../assets/solution.png';

const SolutionSection = () => {

  return (
    <section id="solution" className="relative py-24 overflow-hidden min-h-[600px] flex items-center" style={{ backgroundImage: `url(${solutionImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
              Những giá trị <span className="text-primary italic">TheAlcheZ</span> mang đến cho bạn
            </h2>
            <div className="space-y-6">
              <p className="text-white/90 text-xl leading-relaxed font-medium">
                The AlcheZ giúp các làng nghề truyền thống biến những hoạt động sản xuất quen thuộc thành các video ngắn hấp dẫn, từ đó thu hút khách hàng, tăng doanh số và xây dựng thương hiệu trên nền tảng số.
              </p>
              <p className="text-white/80 text-lg leading-relaxed italic">
                Chúng tôi không chỉ tạo nội dung, mà còn giúp khách hàng tiếp cận chuyển đổi số một cách đơn giản, tiết kiệm và vẫn giữ được giá trị văn hóa truyền thống.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative hidden lg:block">
            <div className="relative rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img
                src={solutionImg}
                alt="Professional filming session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
            </div>
            {/* Play button overlay decorator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse cursor-pointer">
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
