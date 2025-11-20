'use client';
import { motion } from 'framer-motion';
import { SectionData } from '@/data/landingSections';
import { buildGradientClass } from '@/utils/colorUtils';
import { 
  FaMapMarkedAlt, FaGlobe, FaUsers, FaBrain, FaGraduationCap, FaMobileAlt, 
   FaVideo, FaRobot, FaCertificate, FaMountain, FaChartLine, FaHandshake,
  FaDatabase, FaLightbulb, FaGem, FaNetworkWired
} from 'react-icons/fa';

interface DynamicSocialFutureProps {
  sectionData: SectionData;
}

const IconMap: Record<string, React.ElementType> = {
  map: FaMapMarkedAlt,
  globe: FaGlobe,
  network: FaNetworkWired,
  brain: FaBrain,
  graduation: FaGraduationCap,
  phone: FaMobileAlt,
  live: FaVideo,
  ai: FaRobot,
  certificate: FaCertificate,
  automation: FaDatabase,
  analytics: FaChartLine,
  handshake: FaHandshake,
  idea: FaLightbulb,
  premium: FaGem
};

export default function DynamicSocialFuture({ sectionData }: DynamicSocialFutureProps) {
  const primaryGradient = buildGradientClass(sectionData.colors.primaryGradient);
  const secondaryGradient = buildGradientClass(sectionData.colors.secondaryGradient);
  const getColorClass = (colorName: string, type: 'bg' | 'text' | 'border' = 'bg', shade: string = '500', opacity?: string) => {
    const baseColor = colorName === 'yellow' ? 'amber' : colorName;
    const colorMap: Record<string, Record<'bg' | 'text' | 'border', string>> = {
      green: {
        bg: opacity ? `bg-green-${shade}/${opacity}` : `bg-green-${shade}`,
        text: `text-green-${shade}`,
        border: `border-green-${shade}`
      },
      blue: {
        bg: opacity ? `bg-blue-${shade}/${opacity}` : `bg-blue-${shade}`,
        text: `text-blue-${shade}`,
        border: `border-blue-${shade}`
      },
      purple: {
        bg: opacity ? `bg-purple-${shade}/${opacity}` : `bg-purple-${shade}`,
        text: `text-purple-${shade}`,
        border: `border-purple-${shade}`
      },
      pink: {
        bg: opacity ? `bg-pink-${shade}/${opacity}` : `bg-pink-${shade}`,
        text: `text-pink-${shade}`,
        border: `border-pink-${shade}`
      },
      red: {
        bg: opacity ? `bg-red-${shade}/${opacity}` : `bg-red-${shade}`,
        text: `text-red-${shade}`,
        border: `border-red-${shade}`
      },
      cyan: {
        bg: opacity ? `bg-cyan-${shade}/${opacity}` : `bg-cyan-${shade}`,
        text: `text-cyan-${shade}`,
        border: `border-cyan-${shade}`
      },
      orange: {
        bg: opacity ? `bg-orange-${shade}/${opacity}` : `bg-orange-${shade}`,
        text: `text-orange-${shade}`,
        border: `border-orange-${shade}`
      },
      yellow: {
        bg: opacity ? `bg-amber-${shade}/${opacity}` : `bg-amber-${shade}`,
        text: `text-amber-${shade}`,
        border: `border-amber-${shade}`
      },
      indigo: {
        bg: opacity ? `bg-indigo-${shade}/${opacity}` : `bg-indigo-${shade}`,
        text: `text-indigo-${shade}`,
        border: `border-indigo-${shade}`
      },
      rose: {
        bg: opacity ? `bg-rose-${shade}/${opacity}` : `bg-rose-${shade}`,
        text: `text-rose-${shade}`,
        border: `border-rose-${shade}`
      },
      emerald: {
        bg: opacity ? `bg-emerald-${shade}/${opacity}` : `bg-emerald-${shade}`,
        text: `text-emerald-${shade}`,
        border: `border-emerald-${shade}`
      },
      teal: {
        bg: opacity ? `bg-teal-${shade}/${opacity}` : `bg-teal-${shade}`,
        text: `text-teal-${shade}`,
        border: `border-teal-${shade}`
      }
    };
    
    if (colorName === sectionData.colors.accentColor) {
      const accentShade = shade === '100' ? '200' : shade;
      return colorMap[sectionData.colors.accentColor]?.[type]?.replace(new RegExp(`-${shade}`, 'g'), `-${accentShade}`) || colorMap.green[type];
    }
    
    return colorMap[colorName]?.[type] || colorMap.green[type];
  };

  const getPlanColorClasses = (planColor: string) => ({
    container: `bg-white/5 ${getColorClass(planColor, 'border', '300', '20')} border border-white/10`,
    icon: getColorClass(planColor, 'bg', '500', '20'),
    iconFill: getColorClass(planColor, 'text', '400'),
    title: getColorClass(planColor, 'text', '100'),
    description: getColorClass(planColor, 'text', '300')
  });

  return (
    <section id="social" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 opacity-2">
        <div className={`absolute top-0 left-0 w-full h-1/2 ${primaryGradient} transform rotate-[-2deg] opacity-10 blur-xl`}></div>
        <div className={`absolute bottom-0 right-0 w-3/4 h-1/2 ${secondaryGradient} transform rotate-[3deg] opacity-5 blur-2xl`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Dynamic Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
            <div className={`w-2 h-2 ${getColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full animate-ping`}></div>
            <span className={`text-sm font-semibold uppercase tracking-wider ${getColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
              Community & Vision
            </span>
            <div className={`w-2 h-2 ${getColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full animate-ping`} style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block text-gray-300">Social Proof &</span>
            <span className={`block ${sectionData.colors.secondaryGradient} bg-gradient-to-r bg-clip-text text-transparent`}>
              Future Vision
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {sectionData.socialFuture.description} Your transformation story could inspire 
            thousands more to join our movement!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Enhanced Social Media Growth with Theme Colors */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Dynamic header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className={`w-10 h-10 ${primaryGradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-3xl font-bold text-white ${primaryGradient} bg-clip-text text-transparent`}>
                  Community Growth
                </h3>
                <p className={`text-gray-400 text-sm mt-1 ${getColorClass(sectionData.colors.accentColor, 'text', '400')}`}>
                  Real impact across platforms
                </p>
              </div>
            </motion.div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our social media presence reflects the authentic impact we're making. From inspirational 
              stories to expert insights, our community shares daily transformations that inspire 
              thousands to take action.
            </p>

            {/* Dynamic Social Stats Cards */}
            <div className="space-y-4">
              {sectionData.socialFuture.socialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`group relative p-6 rounded-2xl overflow-hidden ${getColorClass(stat.statColor, 'bg', '500', '10')} border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300`}
                >
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 ${getColorClass(stat.statColor, 'bg', '500', '5')} transform rotate-1 opacity-50 blur-sm`}></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-2">
                      <h4 className={`text-sm font-semibold uppercase tracking-wider ${getColorClass(stat.statColor, 'text', '400')} opacity-80`}>
                        {stat.platform}
                      </h4>
                      <div className={`text-3xl lg:text-4xl font-bold text-white ${sectionData.colors.secondaryGradient} bg-clip-text`}>
                        {stat.followers}
                      </div>
                    </div>
                    
                    <div className={`w-16 h-16 ${getColorClass(stat.statColor, 'bg', '500', '20')} rounded-2xl flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform`}>
                      <svg className={`w-6 h-6 ${getColorClass(stat.statColor, 'text', '400')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Dynamic progress bar */}
                  <div className="mt-6 bg-white/10 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-2 ${getColorClass(stat.statColor, 'bg', '500')} transition-all duration-700 ease-out`}
                      style={{ width: `${60 + (index * 15)}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <span className={`text-sm ${getColorClass(stat.statColor, 'text', '400')} font-semibold`}>
                      {stat.growth}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Monthly</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Testimonial with Theme Colors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 via-black/20 to-black/40 border border-white/10 backdrop-blur-xl`}
            >
              {/* Theme accent border */}
              <div className={`absolute inset-0 ${getColorClass(sectionData.colors.accentColor, 'border', '500', '20')} rounded-3xl pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  {/* Dynamic quote icon */}
                  <div className={`relative w-16 h-16 ${primaryGradient} rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 mt-1 -ml-2`}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full opacity-80 border-2 border-white/20`}></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="italic text-gray-100 text-lg leading-relaxed mb-6">
                      "{sectionData.socialFuture.testimonial.quote}"
                    </div>
                    <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                      <div className={`w-12 h-12 ${primaryGradient} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-white truncate">{sectionData.socialFuture.testimonial.author}</div>
                        <div className={`text-sm ${getColorClass(sectionData.colors.accentColor, 'text', '400')} truncate`}>
                          {sectionData.socialFuture.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Future Plans with Dynamic Color System */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Dynamic header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className={`w-10 h-10 ${secondaryGradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7zM3 21l7-7m0 0l7 7m-7-7v7" />
                </svg>
              </div>
              <div>
                <h3 className={`text-3xl font-bold text-white ${secondaryGradient} bg-clip-text text-transparent`}>
                  Our Future
                </h3>
                <p className={`text-gray-400 text-sm mt-1 ${getColorClass(sectionData.colors.accentColor, 'text', '400')}`}>
                  Building a lasting movement
                </p>
              </div>
            </motion.div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We're creating more than just a platform—we're building a movement that will 
              transform {sectionData.title.toLowerCase()} worldwide. Join us on this journey.
            </p>

            {/* Dynamic Future Plans Cards */}
            <div className="space-y-4">
              {sectionData.socialFuture.futurePlans.map((plan, index) => {
                const IconComponent = IconMap[plan.icon] || FaGlobe;
                const colors = getPlanColorClasses(plan.planColor);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    className={`${colors.container} group relative p-6 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Dynamic gradient overlay */}
                    <div className={`absolute inset-0 ${getColorClass(plan.planColor, 'bg', '500', '5')} transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                    <div className={`absolute inset-0 ${getColorClass(plan.planColor, 'bg', '500', '20')} -z-10`}></div>
                    
                    <div className="relative z-10 flex items-start space-x-4">
                      {/* Dynamic icon with theme color */}
                      <div className={`${colors.icon} p-3 rounded-xl border border-white/20 flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <IconComponent className={`${colors.iconFill} w-6 h-6`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`${colors.title} text-xl font-bold mb-2 leading-tight`}>
                          {plan.title}
                        </h4>
                        <p className={`${colors.description} text-gray-300 leading-relaxed text-sm`}>
                          {plan.description}
                        </p>
                        
                        {/* Dynamic progress indicator */}
                        <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-white/10">
                          <div className={`w-2 h-2 ${getColorClass(plan.planColor, 'bg', '400')} rounded-full animate-pulse`}></div>
                          <span className={`text-xs font-medium ${getColorClass(plan.planColor, 'text', '400')}`}>
                            Launching Q{index + 2} 2026
                          </span>
                          <div className="flex-1 h-1 bg-white/10 rounded-full ml-4">
                            <div 
                              className={`h-1 ${getColorClass(plan.planColor, 'bg', '400')} rounded-full transition-all duration-700`}
                              style={{ width: `${40 + (index * 20)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover accent */}
                    <div className={`absolute top-4 right-4 w-8 h-8 ${getColorClass(plan.planColor, 'bg', '400')} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 5h.01M19 12h.01M12 19h.01" />
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dynamic CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <div className={`inline-flex items-center space-x-3 ${primaryGradient} text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border border-white/20 backdrop-blur-sm hover:scale-105`}>
                <span>Join Our Movement Today</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className={`text-sm text-gray-400 mt-4 ${getColorClass(sectionData.colors.accentColor, 'text', '400')}`}>
                Be part of the future of {sectionData.title.toLowerCase()}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Dynamic section bottom gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 h-32"
        >
          <div className={`absolute inset-0 ${primaryGradient} opacity-5 blur-3xl transform -translate-y-1/2`}></div>
        </motion.div>
      </div>
    </section>
  );
}
