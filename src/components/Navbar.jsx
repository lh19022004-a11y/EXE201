import React, { useState, useEffect } from 'react';

const Navbar = ({ onStart }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về Chúng Tôi', href: '#about' },
    { name: 'Dịch Vụ', href: '#services' },
    { name: 'Sản Phẩm', href: '#portfolio' },
    { name: 'Liên Hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
              The <span className="text-primary">AlcheZ</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-zinc-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button onClick={onStart} className="btn-primary py-2 px-6 text-sm">
              Bắt đầu ngay
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className={isScrolled ? 'text-zinc-700' : 'text-white'}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
