import React from 'react';
import aboutImg from '../assets/about.png';
import ScrollReveal3D from './ScrollReveal3D';
import Tilt3D from './Tilt3D';

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-white overflow-hidden">
      <div className="lg:flex lg:items-center lg:gap-16">
        {/* Left Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <ScrollReveal3D direction="left" delay={100} duration={900}>
            <Tilt3D maxRotation={6} scale={1.01} className="relative group rounded-2xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={aboutImg} 
                alt="Vietnamese Traditional Craft Detail" 
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover border border-zinc-100"
              />
            </Tilt3D>
          </ScrollReveal3D>
        </div>
        
        {/* Right Content */}
        <div className="lg:w-1/2">
          <ScrollReveal3D direction="right" delay={150} duration={900}>
            <h2 className="heading-2 text-zinc-900">
              Đánh thức giá trị truyền thống trong <span className="text-primary italic">thời đại số</span>
            </h2>
          </ScrollReveal3D>
          
          <ScrollReveal3D direction="right" delay={300} duration={900} className="space-y-6 text-zinc-600 leading-relaxed text-lg">
            <p>
              Việt Nam tự hào với hàng nghìn làng nghề truyền thống lâu đời. Tuy nhiên, trong dòng chảy của thời đại số, những giá trị này đang dần bị lãng quên hoặc chưa được truyền tải đúng cách tới công chúng.
            </p>
            <p>
              Tại <span className="font-bold text-secondary">The AlcheZ</span>, chúng tôi tin rằng mỗi sản phẩm thủ công đều mang trong mình một linh hồn và một câu chuyện riêng. Sứ mệnh của chúng tôi là "giải mã" và "biến đổi" những chất liệu thô sơ đó thành những nội dung số hấp dẫn, giúp bản sắc văn hóa Việt lan tỏa mạnh mẽ hơn bao giờ hết.
            </p>
            <div className="pt-4 border-l-4 border-primary pl-6 italic text-zinc-500 bg-background/30 rounded-r-xl py-2">
              "Chúng tôi không chỉ quay phim, chúng tôi kể câu chuyện về sự tận tâm và di sản."
            </div>
          </ScrollReveal3D>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
