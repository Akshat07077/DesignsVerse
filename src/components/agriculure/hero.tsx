'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, Target, Zap, TrendingUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const growthOptions = [
    { value: '15%', label: 'Revenue Growth', icon: TrendingUp, gradient: 'from-[#A2E535] to-[#16A34A]' },
    { value: '45%', label: 'User Increase', icon: Target, gradient: 'from-[#16A34A] to-[#15803D]' },
    { value: '30%', label: 'Efficiency', icon: Zap, gradient: 'from-[#A2E535] to-[#15803D]' },
    { value: '25%', label: 'Market Share', icon: Sparkles, gradient: 'from-[#16A34A] to-[#15803D]' }
  ];

  const floatingShapes = [
    { id: 1, top: '10%', left: '5%', delay: 0, type: 'circle' },
    { id: 2, top: '20%', right: '10%', delay: 1, type: 'triangle' },
    { id: 3, bottom: '15%', left: '8%', delay: 2, type: 'square' },
    { id: 4, bottom: '25%', right: '5%', delay: 3, type: 'circle' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-[#f0f8e8] to-[#e0f0e0] py-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("/api/placeholder/1920/1080")',
        }}
      />
      
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 lg:w-80 h-64 lg:h-80 bg-gradient-to-r from-[#A2E535]/20 to-[#16A34A]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 lg:w-96 h-72 lg:h-96 bg-gradient-to-r from-[#15803D]/15 to-[#A2E535]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Animated Shapes */}
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute w-4 h-4 lg:w-6 lg:h-6 ${
              shape.type === 'circle' ? 'rounded-full' : 
              shape.type === 'triangle' ? 'rotate-45' : 'rounded-lg'
            } bg-gradient-to-br from-[#A2E535]/30 to-[#16A34A]/20 backdrop-blur-sm hidden lg:block`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(162,229,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(162,229,53,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

  
      <div className="max-w-7xl mx-auto relative z-10 w-full mt-8 lg:mt-0">
        <motion.div 
          className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8 w-full lg:order-1">
            {/* Premium Animated Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-4 py-2 lg:px-5 lg:py-2.5 rounded-2xl bg-white/70 backdrop-blur-md border border-[#A2E535]/30 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-[#A2E535] to-[#16A34A]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-semibold bg-gradient-to-r from-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
                  TRUSTED BY 500+ COMPANIES
                </span>
              </div>
              <div className="hidden sm:flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div 
                    key={star}
                    className="w-3 h-3 bg-[#A2E535] rounded-sm rotate-45"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + star * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Main Heading with Advanced Animation */}
            <div className="space-y-4 lg:space-y-6">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Transform{' '}
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-[#A2E535] via-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
                    Business
                  </span>
                  <motion.div 
                    className="absolute bottom-1 left-0 w-full h-2 bg-[#A2E535]/20 -rotate-1 rounded-lg"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.span>{' '}
                With AI Innovation
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light text-center lg:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Experience unprecedented growth with our AI-powered solutions. 
                Join industry leaders who transformed their digital landscape with cutting-edge technology.
              </motion.p>
            </div>

            {/* Growth Metrics - Desktop: Single Line, Mobile: 2x2 Grid */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-1.5 h-6 bg-gradient-to-b from-[#A2E535] to-[#16A34A] rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-900">Proven Results</h3>
              </motion.div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {growthOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative p-1 rounded-xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative p-3 lg:p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-white/20">
                        <motion.div 
                          className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                        </motion.div>
                        <div className="text-lg lg:text-xl font-black text-gray-900 group-hover:scale-105 transition-transform duration-300">
                          {option.value}
                        </div>
                        <div className="text-xs lg:text-sm font-medium text-gray-600 mt-1">
                          {option.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons - Desktop */}
            <motion.div 
              className="hidden lg:flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button 
                className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white rounded-xl font-bold shadow-2xl hover:shadow-3xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#16A34A] to-[#15803D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <span className="relative flex items-center gap-2 text-sm lg:text-base">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
              
              <motion.button 
                className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-[#16A34A] text-[#15803D] rounded-xl font-bold hover:bg-[#16A34A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Video */}
          <motion.div 
            className="relative w-full lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Video Card */}
            <motion.div 
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl mx-auto"
              whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -5 }}
            >
              <div className="aspect-[4/3] lg:aspect-video bg-black relative overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  poster="/api/placeholder/600/400"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play/Pause and Mute Controls */}
                <motion.div 
                  className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-opacity duration-300 z-20 flex items-center justify-center"
                >
                  <motion.button
                    onClick={togglePlay}
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#A2E535] to-[#16A34A] rounded-full flex items-center justify-center shadow-2xl opacity-0 hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      {isPlaying ? (
                        <motion.div
                          key="pause"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Pause className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="play"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <motion.button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 bg-black/40 rounded-full flex items-center justify-center hover:bg-black/60 transition-all duration-300 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Only - CTA Buttons */}
          <div className="lg:hidden w-full order-last space-y-6">
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button 
                className="group relative px-6 py-3 bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white rounded-xl font-bold shadow-2xl hover:shadow-3xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#16A34A] to-[#15803D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <span className="relative flex items-center gap-2 text-sm">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
              
              <motion.button 
                className="px-6 py-3 border-2 border-[#16A34A] text-[#15803D] rounded-xl font-bold hover:bg-[#16A34A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;