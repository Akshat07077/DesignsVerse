'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DynamicStickyBar from '@/components/business/DynamicStickyBar';
import DynamicHero from '@/components/business/DynamicHero';
import DynamicGrowth from '@/components/business/DynamicGrowth';
import DynamicSocialFuture from '@/components/business/DynamicSocialFuture';
import DynamicCTA from '@/components/business/DynamicCTA';
import { SectionData } from '@/data/landingSections';
import { buildColorClass, buildGradientClass, getColorHex } from '@/utils/colorUtils';

interface BusinessLandingClientProps {
  sectionData: SectionData;
}

export default function BusinessLandingClient({ sectionData }: BusinessLandingClientProps) {
  const [isLoadingExperience, setIsLoadingExperience] = useState(
    Boolean(sectionData.hero.backgroundImage)
  );
  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = `${sectionData.title} | Your Path to Success`;

    const link =
      (document.querySelector("link[rel*='icon']") as HTMLLinkElement | null) ||
      document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = `/favicon-${sectionData.colors.accentColor}.ico`;
    document.head.appendChild(link);

    return () => {
      document.title = 'Default Title';
    };
  }, [sectionData]);

  useEffect(() => {
    document.body.classList.add(`theme-${sectionData.colors.accentColor}`);
    return () => {
      document.body.classList.remove(`theme-${sectionData.colors.accentColor}`);
    };
  }, [sectionData.colors.accentColor]);

  useEffect(() => {
    if (!sectionData.hero.backgroundImage) {
      setIsLoadingExperience(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsLoadingExperience(false);
    }, 3500);

    return () => window.clearTimeout(timeout);
  }, [sectionData.hero.backgroundImage]);

  const primaryGradient = buildGradientClass(sectionData.colors.primaryGradient);
  const secondaryGradient = buildGradientClass(sectionData.colors.secondaryGradient);
  const accent400 = getColorHex(sectionData.colors.accentColor, '400');
  const accent500 = getColorHex(sectionData.colors.accentColor, '500');
  const accent600 = getColorHex(sectionData.colors.accentColor, '600');
  const accent700 = getColorHex(sectionData.colors.accentColor, '700');

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden antialiased ${buildColorClass(
        sectionData.colors.accentColor,
        'bg',
        '50',
        '5'
      )}`}
    >
      {isLoadingExperience ? (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-transparent to-black z-40 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className={`w-12 h-12 ${primaryGradient} rounded-full flex items-center justify-center mb-4 shadow-xl mx-auto`}>
              <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <p className="text-white/80 text-sm">Loading your personalized experience...</p>
          </div>
        </div>
      ) : null}

      <DynamicStickyBar sectionData={sectionData} />
      <DynamicHero sectionData={sectionData} onHeroReady={() => setIsLoadingExperience(false)} />
      <DynamicGrowth sectionData={sectionData} />
      <DynamicSocialFuture sectionData={sectionData} />
      <DynamicCTA sectionData={sectionData} />

      <footer
        className={`relative py-16 overflow-hidden ${buildColorClass(
          sectionData.colors.accentColor,
          'bg',
          '900',
          '95'
        )} border-t border-white/10`}
      >
        <div className="absolute inset-0">
          <div className={`absolute bottom-0 left-0 w-full h-1/2 ${primaryGradient} opacity-5 blur-xl`}></div>
          <div className={`absolute top-0 right-0 w-1/2 h-full ${secondaryGradient} opacity-30 blur-2xl transform rotate-[-5deg]`}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:text-left space-y-4"
            >
              <div
                className={`text-3xl font-bold ${sectionData.colors.secondaryGradient} bg-gradient-to-r bg-clip-text text-transparent mb-2`}
              >
                {sectionData.title}
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                {sectionData.description} Join thousands of successful professionals who've transformed their businesses with our proven
                strategies.
              </p>
              <div
                className={`inline-flex items-center space-x-2 text-sm ${buildColorClass(
                  sectionData.colors.accentColor,
                  'text',
                  '400'
                )} font-semibold`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Trusted by {sectionData.hero.stats[0]?.value || '500+'} professionals worldwide</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h5 className={`text-white font-semibold text-lg ${buildColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
                Quick Links
              </h5>
              <div className="space-y-2">
                {[
                  { href: `/${sectionData.slug}`, label: 'Home' },
                  { href: `/${sectionData.slug}#growth`, label: 'Success Stories' },
                  { href: `/${sectionData.slug}#social`, label: 'Community' },
                  { href: '/about', label: 'About Us' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h5 className={`text-white font-semibold text-lg ${buildColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
                Resources
              </h5>
              <div className="space-y-2">
                {[
                  { href: '/blog', label: 'Success Blog' },
                  { href: '/case-studies', label: 'Case Studies' },
                  { href: '/guides', label: 'Free Guides' },
                  { href: '/webinars', label: 'Webinars' }
                ].map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {resource.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 md:text-left"
            >
              <h5 className={`text-white font-semibold text-lg ${buildColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
                Get Started Today
              </h5>
              <p className="text-gray-400 text-sm mb-4">
                Ready to transform your {sectionData.title.toLowerCase()}? Book your free strategy session now and start your journey to
                success.
              </p>
              <a
                href={`/${sectionData.slug}#cta`}
                className={`inline-flex items-center space-x-3 ${primaryGradient} text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Book Free Session</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-12 mt-16 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                © 2025 {sectionData.title}. All rights reserved. | Building successful {sectionData.title.toLowerCase()} businesses worldwide.
              </div>

              <div className="flex space-x-6">
                {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((platform, index) => (
                  <motion.a
                    key={platform}
                    href={`https://${platform}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-gray-400 hover:text-white transition-colors p-2 rounded-full ${buildColorClass(
                      sectionData.colors.accentColor,
                      'hoverBg',
                      '500',
                      '20'
                    )}`}
                  >
                    <i className={`fab fa-${platform} text-lg`} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`fixed bottom-6 right-6 w-14 h-14 ${primaryGradient} rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 z-40`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --primary-gradient: ${sectionData.colors.primaryGradient};
          --secondary-gradient: ${sectionData.colors.secondaryGradient};
          --accent-color: ${sectionData.colors.accentColor};
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, ${accent400}, ${accent600});
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, ${accent500}, ${accent700});
        }
      `}</style>
    </div>
  );
}

