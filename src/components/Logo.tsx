import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
  lightText?: boolean;
}

export function Logo({ className = "w-10 h-10", withText = true, lightText = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
      >
        <rect width="100" height="100" fill="transparent" />
        {/* Shield / Crest outline in gold */}
        <path d="M50 5 L10 25 L10 60 C10 80 40 90 50 95 C60 90 90 80 90 60 L90 25 Z" fill="#002B5B" stroke="#D4AF37" strokeWidth="4" strokeLinejoin="round" />
        
        {/* Pillar base & top */}
        <rect x="35" y="70" width="30" height="4" fill="#D4AF37" />
        <rect x="30" y="75" width="40" height="5" fill="#D4AF37" />
        <rect x="35" y="30" width="30" height="4" fill="#D4AF37" />
        <rect x="30" y="25" width="40" height="5" fill="#D4AF37" />
        
        {/* Pillar Columns / Trading Candles */}
        <rect x="40" y="35" width="6" height="35" fill="#D4AF37" />
        <rect x="54" y="35" width="6" height="35" fill="#D4AF37" />
        
        {/* Middle Trading Candle representing upward momentum */}
        {/* Wick */}
        <line x1="50" y1="15" x2="50" y2="35" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="45" x2="50" y2="85" stroke="#D4AF37" strokeWidth="2" />
        <rect x="47" y="35" width="6" height="25" fill="#D4AF37" />
      </svg>
      {withText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif font-bold text-2xl leading-none ${lightText ? 'text-[#F9F7F2]' : 'text-[#002B5B]'}`}>Aethelgard</span>
          <span className="text-[#D4AF37] tracking-[0.2em] font-sans font-bold text-[10px] uppercase mt-1">FX Academy</span>
        </div>
      )}
    </div>
  );
}
