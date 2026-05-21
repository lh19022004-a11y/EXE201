import React from 'react';
import pottery from '../assets/pottery.png';
import weaving from '../assets/weaving.png';
import bamboo from '../assets/bamboo.png';
import wood from '../assets/wood.png';

const PortfolioItem = ({ image, title, category }) => (
  <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
      <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        {category}
      </span>
      <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
        {title}
      </h3>
      <button className="mt-4 text-white text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
        <span>Xem chi tiết</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const PortfolioSection = () => {
  const projects = [
    { title: "Gốm Bát Tràng", category: "Nghệ thuật Đất nung", image: pottery },
    { title: "Lụa Hà Đông", category: "Dệt lụa truyền thống", image: weaving },
    { title: "Mây Tre Đan", category: "Thủ công mỹ nghệ", image: bamboo },
    { title: "Trạm Khắc Gỗ", category: "Kiến trúc cổ", image: wood },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading-2 mb-4">Những <span className="text-secondary italic">Di Sản Viral</span></h2>
            <p className="text-zinc-600 text-lg">
              Khám phá những chiến dịch truyền thông đã giúp các làng nghề Việt Nam thu hút hàng triệu lượt xem và sự quan tâm từ cộng đồng quốc tế.
            </p>
          </div>
          <button className="btn-outline whitespace-nowrap">
            Xem tất cả dự án
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <PortfolioItem key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
