'use client';

import { motion } from 'framer-motion';
import { Target, Palette, Code, Zap, BarChart3, Rocket, ArrowRight } from 'lucide-react';

export default function EcommerceApproach() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const approachSteps = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Deep market research, competitor analysis, and custom roadmap for e-commerce success.',
      color: 'from-blue-500 via-blue-600 to-cyan-600',
      details: ['User persona development', 'SEO strategy planning', 'Conversion funnel optimization']
    },
    {
      icon: Palette,
      title: 'Premium Design',
      description: 'Modern UI/UX crafted with clean aesthetics for product showcase and seamless mobile experience.',
      color: 'from-purple-500 via-pink-500 to-rose-500',
      details: ['Mobile-first responsive design', 'Clean visual hierarchy', 'Micro-interactions & animations']
    },
    {
      icon: Code,
      title: 'Advanced Development',
      description: 'Next.js 14, TypeScript, and modern e-commerce architecture for scalable, secure platform.',
      color: 'from-emerald-500 via-green-600 to-teal-600',
      details: ['Server-side rendering optimization', 'API-first architecture', 'Security implementation']
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Lightning-fast loading, advanced SEO, and progressive web app features for maximum reach.',
      color: 'from-yellow-400 via-amber-500 to-orange-500',
      details: ['Core Web Vitals optimization', 'Schema markup implementation', 'Image optimization pipeline']
    },
    {
      icon: BarChart3,
      title: 'Social Integration',
      description: 'Social commerce, user-generated content, and social proof integration driving viral growth.',
      color: 'from-indigo-500 via-violet-500 to-purple-600',
      details: ['Social commerce APIs', 'UGC integration', 'Influencer campaign tools']
    },
    {
      icon: Rocket,
      title: 'Launch & Scale',
      description: 'Comprehensive testing, A/B testing, and continuous optimization for sustained growth.',
      color: 'from-red-500 via-rose-500 to-pink-500',
      details: ['Cross-browser testing', 'Performance monitoring', 'Analytics dashboard setup']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#FFF5F5] to-[#FFF0F0] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-red-400/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #dc2626 1px, transparent 0),
                          linear-gradient(-45deg, #dc2626 1px, transparent 0)`,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-red-400/30 to-pink-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-red-200/50 shadow-2xl mb-12"
          >
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
              animate={{ scale: [1, 1.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent tracking-wide">
              STRATEGIC FRAMEWORK
            </span>
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
              animate={{ scale: [1, 1.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our{' '}
            <motion.span
              className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Strategic
            </motion.span>
            <br />
            <motion.span
              className="text-5xl md:text-6xl lg:text-7xl text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Approach
            </motion.span>
          </motion.h2>

          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "200px" }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-48 h-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto">
              <motion.div
                className="absolute inset-0 bg-white/40 rounded-full"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-200/50 overflow-hidden h-full">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${step.color.split('-')[1]}-500/3 to-${step.color.split('-')[3]}-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  whileHover={{ scale: 1.05 }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ padding: '2px' }}
                >
                  <div className="w-full h-full bg-white rounded-[22px]" />
                </motion.div>

                <div className="relative z-10 h-full flex flex-col">
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <motion.div
                      className={`relative w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon size={32} className="text-white" />
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        whileHover={{ transition: { duration: 0.7 } }}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>

                  <div className="flex-1 space-y-6">
                    <motion.h3
                      className="text-2xl font-black text-gray-900 group-hover:text-gray-950 transition-colors duration-300 leading-tight"
                      whileHover={{ x: 5 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-lg"
                      whileHover={{ x: 3 }}
                    >
                      {step.description}
                    </motion.p>

                    <motion.div
                      className="space-y-3 pt-4 border-t border-gray-200/50 group-hover:border-gray-300/50 transition-colors duration-300"
                    >
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-center gap-4 group/item"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <motion.div
                            className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="w-3 h-3 rounded-full bg-white" />
                          </motion.div>
                          
                          <span className="text-gray-500 group-hover/item:text-gray-700 transition-colors duration-300 text-sm font-medium">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div
                    className={`w-full h-1 bg-gradient-to-r ${step.color} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative overflow-hidden`}
                    whileHover={{ height: 3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/40"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                </div>

                {index < approachSteps.length - 1 && (
                  <motion.div
                    className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 1 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-2xl"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-700 font-semibold">
              Ready to implement this strategy for your business?
            </span>
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


