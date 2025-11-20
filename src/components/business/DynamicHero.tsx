'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionData } from '@/data/landingSections';
import { buildColorClass, buildGradientClass } from '@/utils/colorUtils';

interface DynamicHeroProps {
  sectionData: SectionData;
  onHeroReady?: () => void;
}

export default function DynamicHero({ sectionData, onHeroReady }: DynamicHeroProps) {
  const primaryGradient = buildGradientClass(sectionData.colors.primaryGradient);
  const primaryGradientBr = buildGradientClass(sectionData.colors.primaryGradient, 'br');
  const secondaryGradientBr = buildGradientClass(sectionData.colors.secondaryGradient, 'br');
  const backgroundGradient = buildGradientClass(sectionData.colors.backgroundGradient, 'br');

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${backgroundGradient}`}>
      {/* Dynamic Background Image */}
      {sectionData.hero.backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={sectionData.hero.backgroundImage}
            alt={`${sectionData.title} Hero Background`}
            fill
            className="object-cover opacity-20"
            priority
            onLoadingComplete={() => onHeroReady?.()}
            onError={() => onHeroReady?.()}
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70`}></div>
        </div>
      )}

      {/* Dynamic overlay gradient based on theme */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/50`}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center h-full py-20">
          {/* Left - Dynamic Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                dangerouslySetInnerHTML={{ __html: sectionData.hero.title.replace(/\n/g, '<br>') }}
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 font-light max-w-lg"
              >
                {sectionData.hero.subtitle}
              </motion.p>
            </div>

            {/* Dynamic CTAs with theme colors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className={`group relative bg-gradient-to-r ${sectionData.colors.primaryGradient} text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-white/20`}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {sectionData.hero.ctaPrimary}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                {/* Gradient overlay animation */}
                <div className={`absolute inset-0 bg-gradient-to-r ${sectionData.colors.darkAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </a>
              
              <a
                href="#growth"
                className={`border-2 border-white/50 text-white/90 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>{sectionData.hero.ctaSecondary}</span>
              </a>
            </motion.div>

            {/* Dynamic Stats with theme colors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
            >
              {sectionData.hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  className="text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${sectionData.colors.secondaryGradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
                  {/* Animated underline */}
                  <div className={`h-0.5 w-0 md:w-12 mx-auto mt-2 bg-gradient-to-r ${sectionData.colors.secondaryGradient} rounded-full group-hover:w-full transition-all duration-300`}></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Dynamic feature highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-6 pt-8"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className={`w-2 h-2 ${buildColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full`}></div>
                <span>Proven System</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className={`w-2 h-2 ${buildColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full`}></div>
                <span>Expert Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className={`w-2 h-2 ${buildColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full`}></div>
                <span>Fast Results</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Enhanced Video Card with Theme Colors */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl p-2 border border-white/10 shadow-2xl overflow-hidden">
              {/* Dynamic gradient video container */}
              <div className={`relative w-full h-96 md:h-[500px] ${primaryGradientBr} bg-opacity-20 rounded-2xl overflow-hidden border border-white/20`}>
                
                {/* Video placeholder with dynamic styling */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-full max-w-md mx-auto">
                    {sectionData.hero.videoPlaceholder ? (
                      <div className="relative">
                        <Image
                          src={sectionData.hero.videoPlaceholder}
                          alt={`${sectionData.title} Success Story`}
                          width={450}
                          height={350}
                          className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                        />
                        {/* Dynamic play button with theme color */}
                        <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center group">
                          <div className={`w-20 h-20 ${primaryGradient} rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-2 border-white/20`}>
                            <svg className="w-8 h-8 ml-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`w-full h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed ${buildColorClass(sectionData.colors.accentColor, 'border', '400')} border-opacity-30`}>
                        <div className={`w-16 h-16 ${primaryGradient} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className={`${buildColorClass(sectionData.colors.accentColor, 'text', '300')} text-xl font-semibold mb-2`}>Success Story Video</h4>
                        <p className="text-gray-400 text-sm">Watch real transformations</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Dynamic badges and controls with theme colors */}
                <div className={`absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20`}>
                  3:24 • Success Story
                </div>
                
                {/* Progress bar with theme color */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className={`bg-white/10 h-1 rounded-full overflow-hidden`}>
                    <div className={`h-1 bg-gradient-to-r ${sectionData.colors.primaryGradient} rounded-full`} style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-white/80">
                    <span>1:45</span>
                    <span>/ 3:24</span>
                  </div>
                </div>

                {/* Volume indicator */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs border border-white/20">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.77L5.697 11.5a2.5 2.5 0 010-3l2.686-4.23zM12.5 5a1 1 0 011-1h2.586a1 1 0 01.707 1.707L14.207 8H17a1 1 0 01.707 1.293l-2.414 4.414a1 1 0 01-1.414.293H12.5a1 1 0 01-1-1V5z" clipRule="evenodd" />
                  </svg>
                  80%
                </div>

                {/* Theme accent corner decoration */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 ${primaryGradientBr} opacity-10 rounded-full blur-xl`}></div>
              </div>
            </div>

            {/* Dynamic stats below video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {['Qualitys ye m', 'Impact', 'Results'].map((item, index) => (
                <div key={index} className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className={`${buildColorClass(sectionData.colors.accentColor, 'text', '400')} text-sm font-semibold mb-1`}>{item}</div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className={`bg-gradient-to-r ${sectionData.colors.primaryGradient} h-2 rounded-full`} style={{ width: `${85 + (index * 5)}%` }}></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating theme elements */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/4 right-10 w-32 h-32 ${primaryGradientBr} opacity-20 rounded-full blur-xl`}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className={`absolute bottom-1/4 left-10 w-20 h-20 ${secondaryGradientBr} opacity-15 rounded-full blur-lg`}
      />
    </section>
  );
}
