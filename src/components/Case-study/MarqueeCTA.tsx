'use client';
import React from 'react';
import { Phone } from 'lucide-react';
import { useDynamicColors } from '@/utils/useDynamicColors';

const DynamicMarqueeCTA = ({ pageData }) => {
  const colors = useDynamicColors(pageData.colors);
  const marqueeText = pageData.cta?.marquee || 'Book Your Consultation Now';

  return (
    <div 
      className={`sticky top-0 z-50 w-full bg-gradient-to-r ${colors.gradientPrimary} py-3 overflow-hidden shadow-lg`}
      style={{ 
        '--primary-from': pageData.colors.primaryFrom,
        '--primary-to': pageData.colors.primaryTo 
      } as React.CSSProperties}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of items */}
        {[...Array(10)].map((_, i) => (
          <div key={`first-${i}`} className="flex items-center gap-3 mx-8 flex-shrink-0">
            <Phone className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">{marqueeText}</span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div key={`second-${i}`} className="flex items-center gap-3 mx-8 flex-shrink-0">
            <Phone className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">{marqueeText}</span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default DynamicMarqueeCTA;
