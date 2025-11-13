// components/AboutPage.jsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Target, Zap, Award, CheckCircle, ArrowRight, Rocket, Globe, Cpu, Sparkles, Star, Shield, Clock, Infinity } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const features = [
    { icon: Cpu, text: "AI-Powered Solutions", description: "Advanced machine learning algorithms" },
    { icon: Clock, text: "24/7 Customer Support", description: "Round the clock assistance" },
    { icon: Shield, text: "Enterprise Grade Security", description: "Military-grade encryption" },
    { icon: TrendingUp, text: "Scalable Infrastructure", description: "Grow without limits" },
    { icon: Zap, text: "Real-time Analytics", description: "Instant insights and reports" },
    { icon: Infinity, text: "Custom Integration", description: "Seamless system integration" }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to innovate' },
    { year: '2020', title: 'First Major Client', description: 'Partnered with Fortune 500' },
    { year: '2022', title: 'Global Expansion', description: 'Opened offices in 3 continents' },
    { year: '2024', title: 'AI Revolution', description: 'Launched AI-powered suite' }
  ];

  const floatingElements = [
    { id: 1, top: '10%', left: '5%', delay: 0, size: 'w-6 h-6' },
    { id: 2, top: '20%', right: '8%', delay: 1, size: 'w-8 h-8' },
    { id: 3, bottom: '15%', left: '10%', delay: 2, size: 'w-5 h-5' },
    { id: 4, bottom: '25%', right: '6%', delay: 3, size: 'w-7 h-7' },
    { id: 5, top: '40%', left: '3%', delay: 1.5, size: 'w-4 h-4' },
    { id: 6, top: '60%', right: '4%', delay: 2.5, size: 'w-6 h-6' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f8ffe8] to-[#e8f5e8] py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#A2E535]/20 to-[#16A34A]/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-[#15803D]/15 to-[#A2E535]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating Animated Shapes */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} bg-gradient-to-br from-[#A2E535]/25 to-[#16A34A]/15 rounded-full backdrop-blur-sm border border-white/20`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              opacity: [0.4, 0.9, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              delay: element.delay,
                ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(162,229,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(162,229,53,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(162,229,53,0.8)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#A2E535]/30 shadow-2xl mb-12 hover:shadow-3xl transition-all duration-500 group"
            whileHover={{ scale: 1.03, y: -2 }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-3 h-3 rounded-full bg-gradient-to-r from-[#A2E535] to-[#16A34A] shadow-lg"
                animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 3,  }}
              />
              <span className="text-sm font-bold bg-gradient-to-r from-[#16A34A] to-[#15803D] bg-clip-text text-transparent tracking-wide">
                PIONEERING EXCELLENCE SINCE 2018
              </span>
            </motion.div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div 
                  key={star}
                  className="w-3 h-3 bg-gradient-to-br from-[#A2E535] to-[#16A34A] rounded-sm rotate-45 shadow-md"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 45 }}
                  transition={{ delay: 0.4 + star * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.3, rotate: 0 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Shaping The{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-[#A2E535] via-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
                Future
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#A2E535] to-[#16A34A] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.span>{' '}
            of Innovation
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            We are revolutionizing industries with cutting-edge technology, 
            delivering exceptional value and driving digital transformation worldwide.
          </motion.p>
        </motion.div>


        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          
          {/* Left Side - Enhanced Images with Milestones */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            
            {/* Main Image */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-3xl bg-white/20 backdrop-blur-md border border-white/30 group"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#A2E535]/10 to-[#16A34A]/10 relative overflow-hidden">
                <Image
                  src="/images/blog/blog-1.jpg"
                  alt="Our Innovation Center"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                />
                
                {/* Enhanced Animated Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/30"
                  whileHover={{ scale: 1.08, y: -3, rotate: 5 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-[#A2E535] to-[#16A34A] rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-lg font-black text-gray-900">Since 2018</div>
                      <div className="text-sm text-gray-600 font-medium">Industry Pioneers</div>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

       
          </motion.div>

          {/* Right Side - Enhanced Content */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            
            {/* Introduction */}
            <div className="space-y-8">
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                Redefining{' '}
                <motion.span 
                  className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Digital Excellence
                </motion.span>{' '}
                Worldwide
              </motion.h2>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  We are a global technology leader committed to pushing the boundaries of innovation. 
                  Our mission is to empower businesses with transformative solutions that drive growth, 
                  efficiency, and sustainable success in the digital age.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  With a team of world-class engineers, designers, and strategists, we combine 
                  cutting-edge technology with deep industry expertise to deliver exceptional 
                  value to our clients across 120+ countries.
                </p>
              </motion.div>
            </div>

         

            {/* Enhanced CTA Section */}
            <motion.div 
              className="pt-8 border-t border-gray-200/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <motion.a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white rounded-2xl font-bold shadow-3xl hover:shadow-4xl transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">Explore Our Platform</span>
                  <motion.div
                    whileHover={{ x: 5, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.div>
                </motion.a>
                
                <motion.div 
                  className="flex items-center gap-6 text-base text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#A2E535] shadow-lg"
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{ duration: 2,  }}
                    />
                    <span className="font-semibold">24/7 Live Support</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#16A34A] shadow-lg"
                      animate={{ scale: [1, 1.6, 1] }}
                      
                    />
                    <span className="font-semibold">Global Presence</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Final CTA */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] rounded-3xl p-1.5 shadow-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl p-12 lg:p-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_30%,#A2E535,transparent_50%)]" />
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 relative z-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 }}
              >
                Ready for Digital Transformation?
              </motion.h2>
              
              <motion.p 
                className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.7 }}
              >
                Join 50,000+ forward-thinking companies that trust us to power their success 
                with innovative technology solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
              >
                <motion.button 
                  className="group px-12 py-5 bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white rounded-2xl font-bold shadow-3xl hover:shadow-4xl flex items-center gap-4 text-lg transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Free Trial</span>
                  <motion.div
                    whileHover={{ x: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
                
                <motion.a
                  href="https://yourwebsite.com/contact"
                  className="px-12 py-5 border-3 border-[#16A34A] text-[#15803D] rounded-2xl font-bold hover:bg-[#16A34A] hover:text-white transition-all duration-500 shadow-2xl hover:shadow-3xl text-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.a>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 right-12 w-4 h-4 bg-[#A2E535] rounded-full opacity-20"
                animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4,  }}
              />
              <motion.div
                className="absolute bottom-12 left-16 w-3 h-3 bg-[#16A34A] rounded-full opacity-30"
                animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;