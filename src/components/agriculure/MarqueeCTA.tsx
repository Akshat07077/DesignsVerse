'use client';
import React from 'react';
import { Phone } from 'lucide-react';

const MarqueeCTA = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#A2E535] to-[#16A34A] py-3 overflow-hidden shadow-lg">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of items */}
        {[...Array(10)].map((_, i) => (
          <div key={`first-${i}`} className="flex items-center gap-3 mx-8 flex-shrink-0">
            <Phone className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">Book Your Call Now</span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div key={`second-${i}`} className="flex items-center gap-3 mx-8 flex-shrink-0">
            <Phone className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">Book Your Call Now</span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCTA;

