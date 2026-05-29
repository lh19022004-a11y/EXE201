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
      const response = await fetch("https://formsubmit.co/ajax/lh19022004@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Họ và tên": formData.name,
          "Số điện thoại": formData.phone,
          "Email liên hệ": formData.email,
          "Làng nghề / Sản phẩm": formData.village || "Chưa cung cấp",
          "Lời nhắn tư vấn": formData.message || "Cần tư vấn dịch vụ truyền thông tổng thể",
          "_subject": `[Đăng Ký Tư Vấn] Làng nghề truyền thông - ${formData.name}`,
          "_template": "table"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Gửi thông tin thất bại. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi kết nối. Vui lòng thử lại sau!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 p-8 sm:p-10 text-white flex flex-col my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/85 text-zinc-400 hover:text-white rounded-full transition-colors border border-white/10 focus:outline-none"
          onClick={onClose}
          aria-label="Close form"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
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
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-2xl px-5 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all text-sm`}
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
                  className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-2xl px-5 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all text-sm`}
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
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'} rounded-2xl px-5 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all text-sm`}
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
                  className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-primary rounded-2xl px-5 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all text-sm"
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
                  className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-primary rounded-2xl px-5 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-3.5 mt-4 text-base font-bold shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Đăng Ký Thành Công!</h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              Cảm ơn bạn! Thông tin đăng ký đã được gửi trực tiếp tới đội ngũ **TheAlcheZ** tại email <strong className="text-primary font-bold">theaichez@gmail.com</strong> trong nền. Chúng tôi sẽ sớm liên hệ lại với bạn qua thông tin đã cung cấp!
            </p>
            <button 
              onClick={onClose}
              className="btn-primary w-full py-3.5 text-base font-bold shadow-lg hover:shadow-primary/20 transition-all text-center"
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
