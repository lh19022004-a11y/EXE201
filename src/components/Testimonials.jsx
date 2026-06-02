import React from 'react';

const TestimonialCard = ({ quote, author, role, avatarColor, className = '' }) => (
  <div className={`bg-white p-10 rounded-[32px] shadow-lg border border-zinc-100 relative group ${className}`}>
    <div className="absolute top-8 right-10 text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">
      &ldquo;
    </div>
    <p className="text-zinc-700 text-lg italic leading-relaxed mb-8 relative z-10">
      {quote}
    </p>
    <div className="flex items-center gap-4">
      <div className={`w-14 h-14 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-xl`}>
        {author.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-zinc-900">{author}</h4>
        <p className="text-sm text-zinc-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const reviews = [
    {
      quote: "Từ khi hợp tác với The AlcheZ, doanh số bán gốm của chúng tôi tăng gấp 3 lần. Các bạn trẻ bắt đầu tìm đến xưởng để trải nghiệm thực tế nhiều hơn.",
      author: "Nghệ nhân Nguyễn Văn An",
      role: "Làng gốm Bát Tràng",
      avatarColor: "bg-primary"
    },
    {
      quote: "The AlcheZ không chỉ quay phim giỏi mà còn thấu hiểu tâm hồn của người thợ dệt. Những thước phim lụa Hà Đông thực sự chạm đến trái tim người xem.",
      author: "Bà Trần Thị Lan",
      role: "Chủ xưởng dệt Lụa Quê",
      avatarColor: "bg-secondary"
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-2">Tiếng Nói Từ Xưởng Nghề</h2>
          <p className="text-zinc-600 italic">Niềm tin và sự đồng hành của các nghệ nhân là động lực lớn nhất của chúng tôi.</p>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-6 -mx-4 px-4 scrollbar-none md:grid md:grid-cols-2 md:overflow-visible md:pb-0 md:mx-0 md:px-0 relative">
          {/* Decorative background shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 rounded-full blur-3xl -z-10 rotate-12 pointer-events-none"></div>
          
          {reviews.map((review, idx) => (
            <TestimonialCard key={idx} {...review} className="w-[85vw] sm:w-[450px] flex-shrink-0 snap-center md:w-auto md:flex-shrink md:snap-align-none" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
