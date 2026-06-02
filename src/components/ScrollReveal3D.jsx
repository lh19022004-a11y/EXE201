import React, { useState, useEffect, useRef } from 'react';

const ScrollReveal3D = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 800, // in ms
  className = '',
  triggerOnce = false
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px' // Kích hoạt sớm hơn một chút khi cuộn tới
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnce]);

  const getTransformBefore = () => {
    switch (direction) {
      case 'up':
        return 'perspective(1000px) rotateX(12deg) translateY(50px) scale(0.96)';
      case 'down':
        return 'perspective(1000px) rotateX(-12deg) translateY(-50px) scale(0.96)';
      case 'left':
        return 'perspective(1000px) rotateY(-12deg) translateX(50px) scale(0.96)';
      case 'right':
        return 'perspective(1000px) rotateY(12deg) translateX(-50px) scale(0.96)';
      case 'zoom':
        return 'perspective(1000px) rotateX(10deg) translateZ(-100px) scale(0.9)';
      default:
        return 'perspective(1000px) rotateX(12deg) translateY(50px) scale(0.96)';
    }
  };

  const currentStyle = {
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting 
      ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)' 
      : getTransformBefore(),
    transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: 'transform, opacity',
    transformStyle: 'preserve-3d'
  };

  return (
    <div
      ref={ref}
      style={currentStyle}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal3D;
