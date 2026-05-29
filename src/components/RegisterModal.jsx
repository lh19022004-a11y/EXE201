import React, { useState, useEffect } from 'react';

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    village: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Vui lòng nhập họ và tên';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9+-\s]{9,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      tempErrors.email = 'Email không hợp lệ';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "4f3f1a1b-8802-4b0b-8992-b8be1c00ce8c",
          "Họ và tên": formData.name,
          "Số điện thoại": formData.phone,
          "Email liên hệ": formData.email,
          "Làng nghề / Sản phẩm": formData.village || "Chưa cung cấp",
          "Lời nhắn tư vấn": formData.message || "Cần tư vấn dịch vụ truyền thông tổng thể",
          subject: `[Đăng Ký Tư Vấn] Làng nghề truyền thông - ${formData.name}`,
          from_name: "TheAlcheZ Landing Page"
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || "Gửi thông tin thất bại. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi kết nối mạng! Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-zinc-950/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 p-8 sm:p-10 text-white flex flex-col my-auto transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white rounded-full transition-all border border-white/10 hover:border-white/20 focus:outline-none cursor-pointer"
          onClick={onClose}
          aria-label="Close form"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                Đồng hành cùng di sản
              </span>
              <h3 className="text-3xl font-bold text-white tracking-tight">Đăng Ký Tư Vấn</h3>
              {/* Delicate traditional element decoration */}
              <div className="w-16 h-[2px] bg-primary/35 mx-auto mt-3 mb-3" />
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                Hãy để TheAlcheZ đồng hành đưa câu chuyện và thương hiệu làng nghề của bạn tỏa sáng
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="Nguyễn Văn A" 
                  className={`w-full bg-zinc-900/60 border ${errors.name ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-primary focus:ring-primary/20 focus:ring-4'} rounded-2xl px-5 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 text-sm`}
                />
                {errors.name && <span className="text-red-400 text-xs mt-0.5">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="0912 345 678" 
                  className={`w-full bg-zinc-900/60 border ${errors.phone ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-primary focus:ring-primary/20 focus:ring-4'} rounded-2xl px-5 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 text-sm`}
                />
                {errors.phone && <span className="text-red-400 text-xs mt-0.5">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">
                  Địa chỉ Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="example@gmail.com" 
                  className={`w-full bg-zinc-900/60 border ${errors.email ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-primary focus:ring-primary/20 focus:ring-4'} rounded-2xl px-5 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 text-sm`}
                />
                {errors.email && <span className="text-red-400 text-xs mt-0.5">{errors.email}</span>}
              </div>

              {/* Village */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">
                  Làng nghề / Sản phẩm (nếu có)
                </label>
                <input 
                  type="text" 
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="Làng cờ Từ Vân, Gốm Bát Tràng..." 
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-primary focus:ring-primary/20 focus:ring-4 rounded-2xl px-5 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 text-sm"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-wider">
                  Yêu cầu tư vấn / Lời nhắn
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="Tôi muốn quảng bá thương hiệu, làm video ngắn cho làng nghề..." 
                  rows="3"
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-primary focus:ring-primary/20 focus:ring-4 rounded-2xl px-5 py-3.5 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 mt-6 text-base font-bold bg-gradient-to-r from-primary to-[#C05D41] hover:brightness-105 text-white rounded-full shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Đang gửi thông tin...</span>
                  </>
                ) : (
                  <>
                    <span>Gửi thông tin đăng ký</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="text-center py-10 flex flex-col items-center justify-center">
            {/* Animated Success Checkmark */}
            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-8 border border-primary/30 shadow-lg animate-bounce">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white tracking-tight">Đăng Ký Thành Công!</h3>
            {/* Delicate divider line */}
            <div className="w-16 h-[2px] bg-primary/30 mx-auto mt-2 mb-4" />
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-sm mb-8 px-2 font-medium">
              Cảm ơn bạn! Thông tin đăng ký đã được gửi trực tiếp tới đội ngũ **TheAlcheZ** tại email <strong className="text-primary font-bold">theaichez@gmail.com</strong> trong nền. Chúng tôi sẽ sớm liên hệ lại với bạn qua thông tin đã cung cấp!
            </p>
            <button 
              onClick={onClose}
              className="w-full py-4 text-base font-bold bg-gradient-to-r from-primary to-[#C05D41] hover:brightness-105 text-white rounded-full shadow-lg shadow-primary/20 active:scale-[0.98] transition-all text-center cursor-pointer"
            >
              Hoàn tất
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
