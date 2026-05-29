import React from 'react';
import solutionCardImg from '../assets/_MG_0093.jpg';

const SolutionSection = () => {

  return (
    <section id="solution" className="relative py-24 overflow-hidden min-h-[600px] flex items-center" style={{ backgroundImage: `url(${solutionCardImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                src={solutionCardImg}
                alt="Professional filming session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
