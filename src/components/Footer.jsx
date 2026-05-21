import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="text-white text-2xl font-bold mb-6">
              The <span className="text-primary">AlcheZ</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Sứ mệnh của chúng tôi là thổi bùng sức sống mới vào những di sản truyền thống Việt Nam thông qua nghệ thuật kể chuyện bằng hình ảnh hiện đại.
            </p>
            <div className="flex gap-4">
              {/* Simple Social Icons */}
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.012 3.823.06 1.062.049 1.788.213 2.457.472.692.268 1.284.628 1.873 1.217.59.59.95 1.18 1.218 1.872.26.67.423 1.395.472 2.457.048 1.039.06 1.393.06 3.823s-.012 2.784-.06 3.823c-.049 1.062-.213 1.788-.472 2.457-.268.692-.628 1.284-1.217 1.873-.59.59-1.18.95-1.872 1.218-.67.26-1.395.423-2.457.472-1.039.048-1.393.06-3.823.06s-2.784-.012-3.823-.06c-1.062-.049-1.788-.213-2.457-.472-.692-.268-1.284-.628-1.873-1.217-.59-.59-.95-1.18-1.218-1.872-.26-.67-.423-1.395-.472-2.457-.048-1.039-.06-1.393-.06-3.823s.012-2.784.06-3.823c.049-1.062.213-1.788.472-2.457.268-.692.628-1.284 1.217-1.873.59-.59 1.18-.95 1.872-1.218.67-.26 1.395-.423 2.457-.472 1.039-.048 1.393-.06 3.823-.06zm0 2.232c-2.405 0-2.69.014-3.64.058-.933.042-1.44.197-1.777.327-.447.174-.766.381-1.102.718-.337.336-.544.655-.718 1.101-.13.337-.285.844-.327 1.777-.044.95-.058 1.235-.058 3.64s.014 2.69.058 3.64c.042.933.197 1.44.327 1.777.174.447.381.766.718 1.102.336.337.655.544 1.101.718.337.13.844.285 1.777.327.95.044 1.235.058 3.64.058s2.69-.014 3.64-.058c.933-.042 1.44-.197 1.777-.327.447-.174.766-.381 1.102-.718.337-.336.544-.655.718-1.101.13-.337.285-.844.327-1.777.044-.95.058-1.235.058-3.64s-.014-2.69-.058-3.64c-.042-.933-.197-1.44-.327-1.777-.174-.447-.381-.766-.718-1.102-.336-.337-.655-.544-1.101-.718-.337-.13-.844-.285-1.777-.327-.95-.044-1.235-.058-3.64-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.532a3.397 3.397 0 110-6.794 3.397 3.397 0 010 6.794zm5.337-9.063a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-12">
            <h4 className="text-white font-bold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">Về chúng tôi</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Giải pháp</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Dự án di sản</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Báo giá</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Dịch vụ</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Video ngắn (TikTok/Reels)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Phim tài liệu làng nghề</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Xây dựng thương hiệu số</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cố vấn truyền thông</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Tòa nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP.HCM</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>contact@alchez.com</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+84 912 345 678</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 The AlcheZ. Bảo lưu mọi quyền.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
