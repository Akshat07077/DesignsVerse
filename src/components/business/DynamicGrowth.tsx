'use client';
import { motion } from 'framer-motion';
import { SectionData } from '@/data/landingSections';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { buildGradientClass } from '@/utils/colorUtils';

interface DynamicGrowthProps {
  sectionData: SectionData;
}

const SocialIconMap: Record<string, React.ElementType> = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

export default function DynamicGrowth({ sectionData }: DynamicGrowthProps) {
  const primaryGradient = buildGradientClass(sectionData.colors.primaryGradient);
  const darkAccentGradient = buildGradientClass(sectionData.colors.darkAccent);
  // Color utility function
  const getColorClass = (colorName: string, type: 'bg' | 'text' | 'border' = 'bg', shade: string = '500') => {
    const colorMap: Record<string, Record<'bg' | 'text' | 'border', string>> = {
      red: {
        bg: `bg-red-${shade}`,
        text: `text-red-${shade}`,
        border: `border-red-${shade}`
      },
      purple: {
        bg: `bg-purple-${shade}`,
        text: `text-purple-${shade}`,
        border: `border-purple-${shade}`
      },
      pink: {
        bg: `bg-pink-${shade}`,
        text: `text-pink-${shade}`,
        border: `border-pink-${shade}`
      },
      blue: {
        bg: `bg-blue-${shade}`,
        text: `text-blue-${shade}`,
        border: `border-blue-${shade}`
      },
      emerald: {
        bg: `bg-emerald-${shade}`,
        text: `text-emerald-${shade}`,
        border: `border-emerald-${shade}`
      },
      orange: {
        bg: `bg-orange-${shade}`,
        text: `text-orange-${shade}`,
        border: `border-orange-${shade}`
      },
      cyan: {
        bg: `bg-cyan-${shade}`,
        text: `text-cyan-${shade}`,
        border: `border-cyan-${shade}`
      },
      teal: {
        bg: `bg-teal-${shade}`,
        text: `text-teal-${shade}`,
        border: `border-teal-${shade}`
      },
      indigo: {
        bg: `bg-indigo-${shade}`,
        text: `text-indigo-${shade}`,
        border: `border-indigo-${shade}`
      },
      rose: {
        bg: `bg-rose-${shade}`,
        text: `text-rose-${shade}`,
        border: `border-rose-${shade}`
      }
    };
    return colorMap[colorName]?.[type] || `bg-gray-${shade}`;
  };

  return (
    <section id="growth" className={`py-20 relative overflow-hidden ${sectionData.colors.backgroundGradient}`}>
      {/* Dynamic section background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-0 left-0 w-full h-full ${primaryGradient} transform -skew-y-3 opacity-20`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Growth Content with Theme Colors */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Dynamic section header with gradient text */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-3 h-3 ${getColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full animate-pulse`}></div>
                <span className={`text-sm font-semibold uppercase tracking-wider ${getColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
                  Growth Journey
                </span>
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                <span className="block">{sectionData.growth.title.split(' ')[0]}</span>
                <span className={`block ${sectionData.colors.secondaryGradient} bg-clip-text text-transparent`}>
                  {sectionData.growth.title.split(' ').slice(1).join(' ')}
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg"
              >
                {sectionData.growth.description}
              </motion.p>
            </div>

            {/* Dynamic Timeline with Theme Colors */}
            <div className="space-y-6">
              {sectionData.growth.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Timeline connector */}
                  <div className={`absolute left-6 top-2 bottom-0 w-0.5 ${getColorClass(sectionData.colors.accentColor, 'bg', '300')} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300`}></div>
                  
                  <div className="flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className={`relative flex-shrink-0 w-6 h-6 mt-2 ${primaryGradient} rounded-full shadow-lg border-2 border-white/20 z-10`}>
                      <div className={`w-2 h-2 ${getColorClass(sectionData.colors.accentColor, 'bg', '100')} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping`}></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-bold text-white ${getColorClass(sectionData.colors.accentColor, 'border', '400')} border-l-4 pl-4 pr-4 py-1 rounded-r-full inline-block`}>
                          {item.year}
                        </h3>
                        <span className={`text-sm font-semibold ${getColorClass(sectionData.colors.accentColor, 'text', '400')} px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10`}>
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Hover highlight */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${sectionData.colors.primaryGradient} opacity-0 group-hover:opacity-5 rounded-2xl -mx-4 -my-2 blur-xl transition-opacity duration-300`}></div>
                </motion.div>
              ))}
            </div>

            {/* Dynamic CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <a
                href="#social"
                className={`group relative inline-flex items-center space-x-3 ${primaryGradient} text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{sectionData.growth.cta}</span>
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Hover overlay */}
                <div className={`absolute inset-0 ${darkAccentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Dynamic Social Media Dashboard with Theme Colors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Social Media Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`bg-black/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden`}>
                {/* Dynamic social media header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${primaryGradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h10a2 2 0 012 2v2M8 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold text-white ${sectionData.colors.accentColor} bg-clip-text`}>Social Growth</h3>
                      <p className={`text-sm text-gray-400 ${getColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
                        Real-time analytics
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 ${getColorClass(sectionData.colors.accentColor, 'text', '400')}`}>
                    Live
                  </div>
                </div>

                {/* Primary Social Media Platforms */}
                <div className="space-y-4">
                  {sectionData.growth.socialPlatforms.slice(0, 2).map((platform, index) => {
                    const IconComponent = SocialIconMap[platform.icon] || FaInstagram;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className={`group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-300`}
                      >
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 ${platform.platformColor} opacity-0 group-hover:opacity-5 blur-sm transition-opacity`}></div>
                        
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 ${platform.platformColor} rounded-xl flex items-center justify-center shadow-lg border border-white/20`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{platform.name}</h4>
                              <p className={`text-sm ${getColorClass(sectionData.colors.accentColor, 'text', '400')}`}>
                                Active community
                              </p>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className={`text-2xl font-bold text-white mb-1`}>
                              {platform.followers}
                            </div>
                            <div className={`text-sm font-medium ${getColorClass(sectionData.colors.accentColor, 'text', '400')} flex items-center justify-end space-x-1`}>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span>{platform.growth}</span>
                            </div>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-4 bg-white/10 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-2 ${platform.platformColor} transition-all duration-700`} 
                            style={{ 
                              width: parseInt(platform.growth.replace('+', '')) + 50 + '%',
                              minWidth: '60%'
                            }}
                          ></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Secondary metrics cards */}
                <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                  {[
                    { label: 'Engagement Rate', value: '12.4%', icon: '📊', color: 'green' },
                    { label: 'Reach Growth', value: '+34%', icon: '📈', color: sectionData.colors.accentColor },
                    { label: 'Conversion', value: '8.2%', icon: '🎯', color: 'yellow' }
                  ].map((metric, index) => (
                    <div key={index} className={`p-3 rounded-xl bg-white/5 border border-white/10 text-center ${getColorClass(metric.color === sectionData.colors.accentColor ? sectionData.colors.accentColor : metric.color, 'border', '300')}`}>
                      <div className={`text-2xl mb-1`}>{metric.icon}</div>
                      <div className={`text-sm font-semibold text-white mb-1`}>{metric.value}</div>
                      <div className={`text-xs text-gray-400`}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating growth indicators */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className={`absolute -top-6 -right-6 w-16 h-16 ${primaryGradient} rounded-full opacity-20 flex items-center justify-center shadow-lg`}
            >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                { value: '2.3K', label: 'New Followers', trend: '+24%', color: 'green' },
                { value: '$15K', label: 'Monthly Revenue', trend: '+41%', color: sectionData.colors.accentColor },
                { value: '89%', label: 'Engagement', trend: '+8%', color: 'blue' },
                { value: '1.2M', label: 'Total Reach', trend: '+33%', color: 'purple' }
              ].map((stat, index) => (
                <div key={index} className={`p-4 rounded-xl text-center ${getColorClass(stat.color, 'bg', '100')} border border-white/10 hover:border-white/20 transition-colors`}>
                  <div className={`text-2xl font-bold text-white mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-300 mb-2">{stat.label}</div>
                  <div className={`inline-flex items-center text-xs font-medium ${getColorClass(stat.color, 'text', '400')} space-x-1`}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{stat.trend}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Dynamic section bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 h-24"
        >
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full ${getColorClass(sectionData.colors.accentColor, 'bg', '50')} blur-3xl opacity-20`}></div>
        </motion.div>
      </div>
    </section>
  );
}
