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
      quote: "Cô thấy video các con làm đẹp lắm. cô thì không rõ về mảng này nhiều cô thấy các con quay đủ các qui trình và chỉnh sửa rất đẹp. cô có cho các anh chị nhà cô sem và các anh chị cũng thấy đẹp. các anh chị cũng úp lên phây búc rồi con ạ.",
      author: "Nghệ nhân Nguyễn Văn An",
      role: "Làng gốm Bát Tràng",
      avatarColor: "bg-primary"
    },
    {
      quote: "cô cảm ơn mấy đứa nhé thi thoảng cô lại nhờ quay có những dịp nhà cô có khách đặt làm theo iêu cầu thì cô sẽ gọi mấy đứa đến quay nhé.",
      author: "Bà Trần Thị Lan",
      role: "Chủ xưởng Quạt Chàng Sơn",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Decorative background shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 rounded-full blur-3xl -z-10 rotate-12 pointer-events-none"></div>

          {reviews.map((review, idx) => (
            <TestimonialCard key={idx} {...review} className="w-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
