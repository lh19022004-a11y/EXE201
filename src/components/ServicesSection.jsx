import React from 'react';

const ServiceCard = ({ title, price, features, isPopular, buttonText }) => (
  <div className={`relative p-8 rounded-3xl transition-all duration-300 ${isPopular ? 'bg-white shadow-2xl scale-105 z-10 border-2 border-primary' : 'bg-white/50 border border-zinc-200 hover:shadow-lg'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
        Phổ Biến Nhất
      </div>
    )}
    <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
    <div className="flex items-baseline mb-8">
      <span className="text-4xl font-bold text-zinc-900">{price}</span>
      <span className="text-zinc-500 ml-2">/ Gói</span>
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center text-zinc-600 gap-3">
          <svg className={`w-5 h-5 ${isPopular ? 'text-primary' : 'text-zinc-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${isPopular ? 'bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/20' : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'}`}>
      {buttonText}
    </button>
  </div>
);

const ServicesSection = () => {
  const packages = [
    {
      title: "Khởi Đầu",
      price: "500.000",
      features: [

        "Kịch bản cơ bản",
        "Biên tập chuyên nghiệp",
        "video hoàn chỉnh"
      ],
      isPopular: false,
      buttonText: "Đăng ký ngay"
    },
    {
      title: "Nghệ Nhân",
      price: "5.000.000",
      features: [
        "8-10 video hoàn chỉnh",
        "Cố vấn chiến lược",
        "Thiết bị cao cấp 4K",
        "Kịch bản chuyên sâu",
        "Biên tập chuyên nghiệp"
      ],
      isPopular: true,
      buttonText: "Chọn gói này"
    },
    {
      title: "Di Sản",
      price: "2.000.000",
      features: [
        "Kịch bản chi tiết",
        "Hậu Kì 10 video",
        "Tư Vấn quay chụp",
        "Biên tập chuyên nghiệp"
      ],
      isPopular: false,
      buttonText: "Liên hệ tư vấn"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Gói dịch vụ</p>
          <h2 className="heading-2">Đầu Tư Cho <span className="text-primary">Tương Lai</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto italic">
            Chúng tôi thiết kế các gói giải pháp linh hoạt, phù hợp với quy mô và mục tiêu phát triển của từng làng nghề.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <ServiceCard key={idx} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
