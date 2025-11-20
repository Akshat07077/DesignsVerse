'use client';
import { useState, useEffect } from 'react';
import { SectionData } from '@/data/landingSections';

interface DynamicStickyBarProps {
  sectionData: SectionData;
}

export default function DynamicStickyBar({ sectionData }: DynamicStickyBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic messages based on slug
  const getStickyMessage = () => {
    const messages: Record<string, string> = {
      'gym-owners': '🏋️ Ready to 10X Your Gym Revenue? Book Your Free Strategy Session Now!',
      'astrologers': '✨ Ready to Attract Global Spiritual Clients? Book Your Free Astrology Growth Call!',
      'influencers': '💰 Ready to Monetize Your Influence? Book Your Free 6-Figure Creator Session!',
      'coaches': '📈 Ready to Scale Your Coaching Empire? Book Your Free Business Growth Call!',
      'consultants': '⚡ Ready to Automate Your Consulting? Book Your Free Systems Strategy Session!'
    };
    return messages[sectionData.slug] || 'Book Your Free Strategy Session Now!';
  };

  // Use the section's primary gradient for sticky bar
  const stickyBg = isScrolled 
    ? `bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10` 
    : `bg-gradient-to-r ${sectionData.colors.primaryGradient} shadow-lg`;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${stickyBg}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            {/* Dynamic accent color dot */}
            <div className={`w-3 h-3 ${getColorClass(sectionData.colors.accentColor, '500')} rounded-full animate-pulse`}></div>
            <p className="text-white font-semibold text-sm md:text-base max-w-2xl text-center">
              {getStickyMessage()}
            </p>
            <a
              href="#cta"
              className={`bg-white text-${sectionData.colors.accentColor}-600 px-6 py-2 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 transition-all duration-200 ml-4 shadow-lg hover:shadow-xl`}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Helper function to convert color name to Tailwind class
  function getColorClass(colorName: string, shade: string = '500'): string {
    const colorMap: Record<string, string> = {
      'red': `bg-red-${shade}`,
      'purple': `bg-purple-${shade}`,
      'pink': `bg-pink-${shade}`,
      'blue': `bg-blue-${shade}`,
      'emerald': `bg-emerald-${shade}`,
      'orange': `bg-orange-${shade}`,
      'cyan': `bg-cyan-${shade}`,
      'teal': `bg-teal-${shade}`,
      'indigo': `bg-indigo-${shade}`,
      'rose': `bg-rose-${shade}`
    };
    return colorMap[colorName] || `bg-gray-${shade}`;
  }
}
