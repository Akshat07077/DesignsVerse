// components/AboutPage.jsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Target, Zap, Award, CheckCircle, ArrowRight, Rocket, Globe, Cpu, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const growthStats = [
    { 
      percentage: "89%", 
      label: "Client Satisfaction", 
      description: "Happy customers worldwide",
      icon: Users,
      color: "from-[#A2E535] to-[#16A34A]",
      delay: 100
    },
    { 
      percentage: "156%", 
      label: "Revenue Growth", 
      description: "Year over year increase",
      icon: TrendingUp,
      color: "from-[#16A34A] to-[#15803D]",
      delay: 200
    },
    { 
      percentage: "2.5x", 
      label: "Efficiency Boost", 
      description: "Productivity improvement",
      icon: Zap,
      color: "from-[#A2E535] to-[#15803D]",
      delay: 300
    },
    { 
      percentage: "47%", 
      label: "Market Reach", 
      description: "Global market coverage",
      icon: Target,
      color: "from-[#16A34A] to-[#A2E535]",
      delay: 400
    }
  ];

  const features = [
    "AI-Powered Solutions",
    "24/7 Customer Support",
    "Enterprise Grade Security",
    "Scalable Infrastructure",
    "Real-time Analytics",
    "Custom Integration"
  ];

  const floatingElements = [
    { id: 1, top: '10%', left: '5%', delay: 0 },
    { id: 2, top: '20%', right: '8%', delay: 1 },
    { id: 3, bottom: '15%', left: '10%', delay: 2 },
    { id: 4, bottom: '25%', right: '6%', delay: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f8ffe8] to-[#e8f5e8] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#A2E535]/15 to-[#16A34A]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-[#15803D]/10 to-[#A2E535]/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Animated Shapes */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-4 h-4 bg-gradient-to-br from-[#A2E535]/20 to-[#16A34A]/10 rounded-full backdrop-blur-sm"
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(162,229,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(162,229,53,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-[#A2E535]/30 shadow-lg mb-8 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A2E535] to-[#16A34A]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
                ABOUT OUR JOURNEY
              </span>
            </div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div 
                  key={star}
                  className="w-3 h-3 bg-[#A2E535] rounded-sm rotate-45"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 45 }}
                  transition={{ delay: 0.3 + star * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Building The Future of{' '}
            <motion.span 
              className="bg-gradient-to-r from-[#A2E535] via-[#16A34A] to-[#15803D] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Innovation
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We are revolutionizing the industry with cutting-edge technology and 
            unparalleled commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
          
          {/* Left Side - Enhanced Two Images */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            
            {/* Main Image */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-md border border-white/30"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#A2E535]/10 to-[#16A34A]/10 relative overflow-hidden">
                <Image
                  src="/images/blog/blog-1.jpg"
                  alt="Our Innovation Center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority={false}
                />
                
                {/* Animated Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-[#A2E535] to-[#16A34A] rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Since 2018</div>
                      <div className="text-xs text-gray-600">Pioneering Excellence</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Second Image */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-md border border-white/30"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#16A34A]/10 to-[#15803D]/10 relative overflow-hidden">
                <Image
                  src="/api/placeholder/600/450"
                  alt="Our Team Collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                
                {/* Animated Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-[#16A34A] to-[#15803D] rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">50+ Team</div>
                      <div className="text-xs text-gray-600">Expert Professionals</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            
            {/* Introduction */}
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Transforming Industries Through{' '}
                <motion.span 
                  className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Digital Excellence
                </motion.span>
              </motion.h2>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with a vision to redefine technological boundaries, we have consistently 
                  delivered innovative solutions that drive real business growth and transformation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of experts combines deep industry knowledge with cutting-edge technology 
                  to create products that not only meet but exceed expectations.
                </p>
              </motion.div>
            </div>

            {/* Enhanced Growth Statistics */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="w-2 h-8 bg-gradient-to-b from-[#A2E535] to-[#16A34A] rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Our Growth Journey</h3>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                {growthStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm shadow-lg hover:shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="relative p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <motion.div 
                          className="text-2xl font-black text-gray-900 mb-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          {stat.percentage}
                        </motion.div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stat.description}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Features List */}
            <div className="space-y-4">
              <motion.h4 
                className="text-xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                What Sets Us Apart
              </motion.h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 group p-3 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-br from-[#A2E535] to-[#16A34A] rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <motion.div 
              className="pt-6 border-t border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white rounded-2xl font-bold shadow-2xl hover:shadow-3xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Our Website</span>
                  <motion.div
                    whileHover={{ x: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </motion.a>
                
                <motion.div 
                  className="flex items-center gap-4 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-[#A2E535]"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>Live Support 24/7</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-[#16A34A]"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    <span>Trusted Worldwide</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Additional Info Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[#A2E535]/20 p-8 lg:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To empower businesses with innovative technology solutions that drive growth and create lasting impact.",
                gradient: "from-[#A2E535] to-[#16A34A]"
              },
              {
                icon: Users,
                title: "Our Vision",
                description: "A world where technology seamlessly enhances human potential and business capabilities.",
                gradient: "from-[#16A34A] to-[#15803D]"
              },
              {
                icon: Zap,
                title: "Our Promise",
                description: "Continuous innovation, exceptional quality, and unwavering commitment to our clients' success.",
                gradient: "from-[#15803D] to-[#A2E535]"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center lg:text-left group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] rounded-3xl p-1 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12">
              <motion.h2 
                className="text-3xl lg:text-4xl font-black text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 }}
              >
                Ready to Transform Your Business?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
              >
                Join thousands of successful companies that have already experienced the power of our solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 }}
              >
                <motion.button 
                  className="group px-8 py-4 bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white rounded-2xl font-bold shadow-2xl hover:shadow-3xl flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Free Trial</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
                <motion.a
                  href="https://yourwebsite.com/contact"
                  className="px-8 py-4 border-2 border-[#16A34A] text-[#15803D] rounded-2xl font-bold hover:bg-[#16A34A] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;