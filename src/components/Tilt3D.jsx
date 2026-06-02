import React, { useState, useRef } from 'react';

const Tilt3D = ({ 
  children, 
  maxRotation = 10, 
  scale = 1.03, 
  className = '' 
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Calculate rotation
    const rotateY = normalizedX * maxRotation;
    const rotateX = -normalizedY * maxRotation; // Negative so mouse up tilts forward
    
    setCoords({ 
      x: rotateY, 
      y: rotateX, 
      glareX: (x / rect.width) * 100, 
      glareY: (y / rect.height) * 100 
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const currentStyle = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale(${scale})` 
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: isHovered ? 'transform 0.05s linear' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={currentStyle}
      className={`preserve-3d ${className}`}
    >
      {children}
      {/* Dynamic Glare Overlay */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none rounded-inherit z-30"
          style={{
            background: `radial-gradient(circle at ${coords.glareX}% ${coords.glareY}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </div>
  );
};

export default Tilt3D;
