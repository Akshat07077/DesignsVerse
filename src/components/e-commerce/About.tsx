'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function EcommerceAbout() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

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

  const projectMetrics = [
    { value: '6', unit: 'Months', label: 'Project Timeline', color: 'from-emerald-500 to-green-500' },
    { value: '15', unit: '', label: 'Expert Team', color: 'from-blue-500 to-cyan-500' },
    { value: '$750K', unit: '', label: 'Revenue Growth', color: 'from-amber-400 to-orange-500' },
    { value: '98%', unit: '', label: 'Client NPS', color: 'from-purple-500 to-pink-500' },
    { value: '3.8x', unit: '', label: 'Social Growth', color: 'from-indigo-500 to-violet-500' },
    { value: '99.9%', unit: '', label: 'Uptime', color: 'from-red-500 to-rose-500' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#FFF5F5] to-[#FFF0F0] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-red-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-red-400/40 to-pink-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div 
            variants={slideInLeft} 
            className="space-y-10 relative"
          >
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-2xl border border-red-200/50 shadow-lg mb-8"
              >
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  BUSINESS TRANSFORMATION
                </span>
              </motion.div>

              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]">
                The{' '}
                <motion.span 
                  className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.8 }}
                >
                  Challenge
                </motion.span>
              </h2>
              
              <motion.div
                className="w-32 h-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8 relative overflow-hidden"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light"
            >
              StyleHub faced a digital crisis: outdated technology crippling growth, 
              mobile experience driving customers away, and social commerce leaving revenue untapped.
            </motion.p>

            <motion.div 
              variants={staggerChildren}
              className="space-y-6"
            >
              {[
                { 
                  icon: '📱', 
                  text: 'Mobile conversion rate: 1.3% (industry avg: 4.2%)',
                  severity: 'Critical',
                  color: 'red'
                },
                { 
                  icon: '⏱️', 
                  text: 'Page load time: 5.8s (threshold: <2s)',
                  severity: 'High',
                  color: 'orange'
                },
                { 
                  icon: '🔒', 
                  text: 'Limited social commerce integration',
                  severity: 'Medium',
                  color: 'amber'
                },
                { 
                  icon: '📊', 
                  text: 'Missing 65% of Gen Z audience',
                  severity: 'High',
                  color: 'purple'
                },
                { 
                  icon: '💳', 
                  text: 'Abandoned cart rate: 78%',
                  severity: 'Critical',
                  color: 'red'
                }
              ].map((issue, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r from-${issue.color}-500/5 to-${issue.color}-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    <div className="relative z-10 flex items-start gap-5">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br from-${issue.color}-100 to-${issue.color}-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-${issue.color}-200/50 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-2xl">{issue.icon}</span>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-semibold text-gray-900 group-hover:text-gray-950 transition-colors">
                            {issue.text}
                          </span>
                          <motion.span
                            className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-${issue.color}-500 whitespace-nowrap`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {issue.severity}
                          </motion.span>
                        </div>
                        
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r from-${issue.color}-500 to-${issue.color}-600`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${70 + index * 5}%` }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={scaleIn} 
            className="relative"
          >
            <motion.div
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200/50 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-12 relative z-10"
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Project Impact
                </motion.h3>
                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {projectMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="group relative text-center cursor-pointer"
                  >
                    <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <motion.div
                        className={`w-full h-1.5 bg-gradient-to-r ${metric.color} rounded-full mb-6 relative overflow-hidden`}
                        whileHover={{ height: 4 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/40"
                          animate={{ x: [-100, 100] }}
                          transition={{ 
                            duration: 2 + index * 0.5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        />
                      </motion.div>

                      <motion.div
                        className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {metric.value}
                        <span className="text-lg font-normal text-gray-500 ml-1">{metric.unit}</span>
                      </motion.div>

                      <div className="text-gray-600 text-sm font-medium mb-3">
                        {metric.label}
                      </div>

                      <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-gray-600 to-gray-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg"
                      whileHover={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 1 }}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-2xl blur-xl -z-10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-400/15 to-blue-400/15 rounded-2xl blur-xl -z-10"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


