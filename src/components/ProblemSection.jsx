import React from 'react';

const ProblemCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-zinc-100">
    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
      {icon}
    </div>
    <h3 className="heading-3 text-zinc-900">{title}</h3>
    <p className="text-zinc-600 leading-relaxed">{description}</p>
  </div>
);

const ProblemSection = () => {
  const problems = [
    {
      title: "Nội dung nghèo nàn",
      description: "Hình ảnh và video về làng nghề thường mang tính truyền thống quá mức, thiếu tính sáng tạo và không bắt kịp xu hướng của người xem trẻ.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: "Thiếu kỹ năng số",
      description: "Nghệ nhân giỏi về tay nghề nhưng lại gặp khó khăn trong việc tiếp cận các nền tảng mạng xã hội và cách thức vận hành của thuật toán.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Gói marketing lớn",
      description: "Các làng nghề thường là hộ sản xuất nhỏ, không đủ ngân sách cho các chiến dịch quảng cáo rầm rộ hay thuê agency truyền thống đắt đỏ.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="problem" className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-2 max-w-3xl mx-auto">Những khó khăn của làng nghề truyền thống trong kỷ nguyên số</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <ProblemCard key={idx} {...prob} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
