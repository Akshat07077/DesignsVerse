'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionData } from '@/data/landingSections';
import { FaShieldAlt, FaStar, FaPhone, FaBullseye, FaLock, FaChartLine, FaUsers, FaGem } from 'react-icons/fa';

interface DynamicCTAProps {
  sectionData: SectionData;
}

export default function DynamicCTA({ sectionData }: DynamicCTAProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getColorClass = (colorName: string, type: 'bg' | 'text' | 'border' = 'bg', shade: string = '500', opacity?: string) => {
    const baseColor = colorName === 'yellow' ? 'amber' : colorName;
    const colorMap: Record<string, Record<'bg' | 'text' | 'border', string>> = {
      red: {
        bg: opacity ? `bg-red-${shade}/${opacity}` : `bg-red-${shade}`,
        text: `text-red-${shade}`,
        border: `border-red-${shade}`
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
      blue: {
        bg: opacity ? `bg-blue-${shade}/${opacity}` : `bg-bluesfbe
        f
        -${shade}`,
        text: `text-blue-${shade}`,
        border: `border-blue-${shade}`
      },
      emerald: {
        bg: opacity ? `bg-emerald-${shade}/${opacity}` : `bg-emerald-${shade}`,
        text: `text-emerald-${shade}`,
        border: `border-emerald-${shade}`
      },
      orange: {
        bg: opacity ? `bg-orange-${shade}/${opacity}` : `bg-orange-${shade}`,
        text: `text-orange-${shade}`,
        border: `border-orange-${shade}`
      },
      cyan: {
        bg: opacity ? `bg-cyan-${shade}/${opacity}` : `bg-cyan-${shade}`,
        text: `text-cyan-${shade}`,
        border: `border-cyan-${shade}`
      },
      teal: {
        bg: opacity ? `bg-teal-${shade}/${opacity}` : `bg-teal-${shade}`,
        text: `text-teal-${shade}`,
        border: `border-teal-${shade}`
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
      yellow: {
        bg: opacity ? `bg-amber-${shade}/${opacity}` : `bg-amber-${shade}`,
        text: `text-amber-${shade}`,
        border: `border-amber-${shade}`
      }
    };
    return colorMap[colorName]?.[type] || colorMap.red[type];
  };

  const getTrustIconColor = (index: number) => {
    const colors = ['green', 'yellow', sectionData.colors.accentColor, 'blue', 'purple', 'emerald'];
    return colors[index % colors.length];
  };

  return (
    <section id="cta" className={`relative py-24 overflow-hidden ${sectionData.colors.primaryGradient.replace('from-', 'from-').replace('to-', ' to-')}`}>
      {/* Enhanced background pattern */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Dynamic floating elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className={`absolute top-20 right-20 w-32 h-32 ${sectionData.colors.secondaryGradient.replace('from-', 'bg-gradient-to-r ').replace('to-', ' to-')} opacity-20 rounded-full blur-xl`}
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0], 
            x: [0, -30, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className={`absolute bottom-20 left-16 w-40 h-40 ${sectionData.colors.primaryGradient.replace('from-', 'bg-gradient-to-r ').replace('to-', ' to-')} opacity-15 rounded-full blur-2xl`}
        />
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" opacity="0.05" />
                <circle cx="10" cy="10" r="0.5" fill="white" opacity="0.03" />
                <circle cx="30" cy="30" r="0.5" fill="white" opacity="0.03" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#cta-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-12"
        >
          {/* Dynamic Header Section */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Dynamic urgency banner */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-xl px-8 py-4 rounded-full border border-white/30 shadow-xl"
            >
              <div className={`w-3 h-3 ${getColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full animate-ping`}></div>
              <span className="text-white font-semibold text-lg">
                🚀 Limited Spots Available - Only 3 Left This Week!
              </span>
              <div className={`w-3 h-3 ${getColorClass(sectionData.colors.accentColor, 'bg', '400')} rounded-full animate-ping`} style={{ animationDelay: '0.3s' }}></div>
            </motion.div>

            {/* Main headline with dynamic gradient */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              dangerouslySetInnerHTML={{ 
                __html: sectionData.cta.title.replace(/\n/g, '<br>') 
              }}
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {sectionData.cta.description} No obligation—just real, actionable insights 
              from experts who specialize in {sectionData.title.toLowerCase()} success.
            </motion.p>

            {/* Dynamic benefits highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8"
            >
              {[
                { icon: '🎯', title: 'Personalized Strategy', desc: 'Custom roadmap for your business' },
                { icon: '⚡', title: 'Proven Framework', desc: 'Tested systems that deliver results' },
                { icon: '👥', title: 'Expert Guidance', desc: 'Direct access to industry specialists' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/30 transition-colors"
                >
                  <div className="text-2xl flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className={`text-white font-semibold text-lg mb-1 ${getColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
                      {benefit.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={`bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden`}>
              {/* Dynamic form decoration */}
              <div className={`absolute top-0 left-0 w-full h-1 ${sectionData.colors.secondaryGradient} shadow-lg`}></div>
              <div className={`absolute -bottom-2 -right-2 w-32 h-32 ${getColorClass(sectionData.colors.accentColor, 'bg', '400', '20')} rounded-full blur-xl opacity-50`}></div>
              
              <div className="relative z-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dynamic form header */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center mb-8"
                    >
                      <h3 className={`text-2xl font-bold text-white mb-2 ${getColorClass(sectionData.colors.accentColor, 'text', '300')}`}>
                        Book Your Free Strategy Session
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Takes just 2 minutes • 100% confidential • No credit card required
                      </p>
                    </motion.div>

                    {/* Dynamic form fields */}
                    <div className={`grid grid-cols-1 md:grid-cols-${Math.min(sectionData.cta.formFields.length, 4)} gap-4 mb-8`}>
                      {sectionData.cta.formFields.map((field, index) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                          <input
                            type={field.type as any}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className={`w-full px-5 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 ${
                              formData[field.name] ? 'bg-white/10 border-white/30' : 'bg-white/5 border-white/20'
                            } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:border-white/30'}`}
                            required
                          />
                          {/* Dynamic floating label effect */}
                          <div className={`absolute left-5 top-4 text-gray-400 transition-all duration-300 pointer-events-none ${
                            formData[field.name] ? '-top-6 text-xs font-semibold' : 'top-4'
                          } ${getColorClass(sectionData.colors.accentColor, 'text', '400', formData[field.name] ? undefined : '50')}`}>
                            {field.placeholder}
                          </div>
                          
                          {/* Input glow effect */}
                          {formData[field.name] && (
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${sectionData.colors.primaryGradient} opacity-0 animate-pulse-slow blur-xl`}></div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Dynamic submit button */}
                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`group relative w-full ${sectionData.colors.primaryGradient.replace('from-', 'bg-gradient-to-r from-').replace('to-', ' to-')} text-white font-bold py-5 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 ${
                        isSubmitting ? 'animate-pulse' : 'hover:scale-105'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-3">
                        {isSubmitting ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Securing Your Spot...</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span>{sectionData.cta.ctaButton}</span>
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </span>
                      
                      {/* Dynamic gradient overlay */}
                      {!isSubmitting && (
                        <div className={`absolute inset-0 ${sectionData.colors.darkAccent.replace('from-', 'bg-gradient-to-r from-').replace('to-', ' to-')} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0`}></div>
                      )}
                    </motion.button>

                    {/* Dynamic security indicators */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap justify-center items-center space-x-8 space-y-4 pt-8 text-sm"
                    >
                      {sectionData.cta.trustIndicators.map((indicator, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
                          viewport={{ once: true }}
                          className={`flex items-center space-x-2 text-white/90 ${getColorClass(getTrustIconColor(index), 'text', '400')} font-medium`}
                        >
                          <span className="text-lg">{indicator.split(' ')[0]}</span>
                          <span className="">{indicator.split(' ').slice(1).join(' ')}</span>
                        </motion.div>
                      ))}
                      
                      {/* Additional security badges */}
                      <div className="flex items-center space-x-4 ml-4">
                        <div className="flex items-center space-x-1 text-green-400 text-sm">
                          <FaShieldAlt className="w-4 h-4" />
                          <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <FaLock className="w-4 h-4" />
                          <span>Privacy Guaranteed</span>
                        </div>
                      </div>
                    </motion.div>
                  </form>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-8"
                  >
                    {/* Dynamic success animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                      className="relative mx-auto"
                    >
                      <div className={`w-24 h-24 ${getColorClass('green', 'bg', '400', '20')} rounded-full flex items-center justify-center mx-auto border-4 border-green-400/30 shadow-2xl backdrop-blur-sm`}>
                        <svg className={`w-12 h-12 text-green-400 animate-bounce`} fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" stroke="currentColor" />
                        </svg>
                      </div>
                      <div className={`absolute -top-2 -right-2 w-8 h-8 ${getColorClass('green', 'bg', '500')} rounded-full flex items-center justify-center shadow-lg`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-4">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-3xl font-bold text-white ${getColorClass('green', 'text', '300')}`}
                      >
                        🎉 Success! Your Session is Secured
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                      >
                        We've received your request and our {sectionData.title.toLowerCase()} specialists will 
                        contact you within the next 24 hours to schedule your personalized strategy session.
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                      >
                        <div className={`px-6 py-3 rounded-full font-semibold text-white ${getColorClass('green', 'bg', '600')} shadow-lg border border-green-400/30`}>
                          📅 Check Your Email for Confirmation
                        </div>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({});
                          }}
                          className={`px-8 py-3 rounded-full font-semibold border-2 border-white/50 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/80 transition-all duration-300`}
                        >
                          Book Another Session
                        </button>
                      </motion.div>
                    </div>
                    
                    {/* Dynamic success stats */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="grid md:grid-cols-4 gap-6 pt-8"
                    >
                      {[
                        { value: '98%', label: 'Success Rate', icon: '⭐' },
                        { value: '24h', label: 'Response Time', icon: '⚡' },
                        { value: '500+', label: 'Happy Clients', icon: '👥' },
                        { value: '100%', label: 'Satisfaction', icon: '✅' }
                      ].map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-2xl mb-1">{stat.icon}</div>
                          <div className="font-bold text-white text-lg">{stat.value}</div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Dynamic trust indicators footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="pt-16"
          >
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {[
                { icon: <FaShieldAlt className="w-8 h-8 mx-auto mb-2" />, title: 'Secure Platform', color: 'green' },
                { icon: <FaStar className="w-8 h-8 mx-auto mb-2" />, title: 'Top Rated', color: 'yellow' },
                { icon: <FaPhone className="w-8 h-8 mx-auto mb-2" />, title: '24/7 Support', color: 'blue' },
                { icon: <FaBullseye className="w-8 h-8 mx-auto mb-2" />, title: 'Results Focused', color: sectionData.colors.accentColor }
              ].map((trust, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl ${getColorClass(trust.color, 'bg', '500', '10')} border border-white/10 hover:border-white/20 transition-colors`}
                >
                  <div className={`${getColorClass(trust.color, 'text', '400')} mb-3`}>
                    {trust.icon}
                  </div>
                  <h4 className="font-semibold text-white">{trust.title}</h4>
                </motion.div>
              ))}
            </div>
            
            {/* Final urgency message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
              className={`text-center text-lg font-semibold text-white/90 mt-12 pt-8 border-t border-white/10 ${getColorClass(sectionData.colors.accentColor, 'text', '300')}`}
            >
              ⏰ Don't wait—your transformation starts with one call. Spots filling fast!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
