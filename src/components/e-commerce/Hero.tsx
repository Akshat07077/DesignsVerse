'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Play,   
  ArrowUpRight,
  Calendar,
  Eye,
  Share2,
  Bookmark,
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react';

export default function EcommerceHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryRef = useRef(null);

  const slides = [
    '/api/placeholder/800/600?text=Premium+E-commerce+Showcase',
    '/api/placeholder/800/600?text=Mobile+Shopping+Experience',
    '/api/placeholder/800/600?text=Advanced+Product+Discovery',
    '/api/placeholder/800/600?text=Social+Commerce+Integration',
    '/api/placeholder/800/600?text=Seamless+Checkout+Process'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };
  

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.2, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as any,
        delay: Math.random() * 3,
      },
    },
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

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-10 lg:py-12">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/project/1.jpeg')`,
            opacity: 0.15,
          }}
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-red-400/20 via-pink-500/15 to-rose-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any, delay: 2 }}
          />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-400/20 via-blue-500/15 to-indigo-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as any, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Premium Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-red-400/40 via-pink-500/40 to-rose-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            initial="hidden"
            animate="animate"
          />
        ))}
      </div>

      {/* Premium Glow Effects */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-left space-y-8 relative">
          {/* Premium Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/90 backdrop-blur-2xl rounded-full border border-red-200/50 shadow-2xl shadow-red-500/10 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full relative z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-ping opacity-75" />
            </motion.div>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-pink-700 to-rose-700 tracking-wide relative z-10">
              E-commerce Transformation
            </span>
            <Sparkles className="w-4 h-4 text-red-500 relative z-10" />
          </motion.div>

          {/* Premium Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black mb-6 leading-[0.95] tracking-tight"
          >
            <span className="block text-gray-900 drop-shadow-sm">Elevating</span>
            <span className="block bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent relative">
              StyleHub
              <motion.span
                className="absolute -top-2 -right-8"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-8 h-8 text-pink-500" />
              </motion.span>
            </span>
            <span className="block text-3xl md:text-3xl xl:text-5xl text-gray-800 font-bold">
              To Digital Excellence
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl  text-gray-700 leading-relaxed max-w-lg font-medium">
              Transforming fashion retail into a seamless e-commerce powerhouse: <span className="font-bold text-red-600">4.2x revenue acceleration</span>, <span className="font-bold text-green-600">285% organic traffic uplift</span>, and engaging social commerce.
            </p>

            {/* Premium Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { value: '4.2x', label: 'Revenue Growth', colorClass: 'red', icon: TrendingUp },
                { value: '285%', label: 'Traffic Uplift', colorClass: 'green', icon: Zap },
              ].map((stat, i) => {
                const colorStyles = stat.colorClass === 'red' 
                  ? {
                      icon: 'text-red-600',
                      gradient: 'bg-gradient-to-r from-red-600 via-red-700 to-red-800',
                      glow: 'bg-gradient-to-br from-red-500/10 to-red-600/5'
                    }
                  : {
                      icon: 'text-green-600',
                      gradient: 'bg-gradient-to-r from-green-600 via-green-700 to-green-800',
                      glow: 'bg-gradient-to-br from-green-500/10 to-green-600/5'
                    };
                
                return (
                  <motion.div
                    key={i}
                    className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`absolute top-0 right-0 w-10 h-10 ${colorStyles.glow} rounded-full blur-2xl`} />
                    <div className="relative z-10">
                      <stat.icon className={`w-5 h-5 mb-1 ${colorStyles.icon}`} />
                      <div className={`text-4xl font-black ${colorStyles.gradient} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center gap-3 overflow-hidden shadow-2xl hover:shadow-red-500/30 transition-all duration-500 border border-red-500/30"
            >
              <span className="relative z-10">Explore Live Store</span>
              <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 via-pink-700 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative border-2 border-gray-300/50 px-10 py-5 rounded-2xl font-bold text-base flex items-center gap-3 bg-white/90 backdrop-blur-xl hover:bg-white text-gray-800 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-400"
            >
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          {/* Premium Glow Effect Behind Card */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-rose-500/20 rounded-3xl blur-2xl opacity-50"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <motion.div
            className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-gray-200/50 shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Premium Browser Header */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-2xl p-5 flex items-center justify-between border-b border-gray-200/50 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <motion.div 
                    className="w-3 h-3 bg-red-400 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-amber-400 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <span className="text-xs text-gray-700 font-bold tracking-wide">StyleHub Premium Demo</span>
                <motion.div
                  className="px-2 py-0.5 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full border border-red-200/50"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-[10px] font-bold text-red-600">LIVE</span>
                </motion.div>
              </div>
              <div className="text-xs text-gray-500 font-semibold">04:32</div>
            </div>

            {/* Premium Video Container */}
            <div className="aspect-video bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden mt-12 lg:mt-10">
              {/* Background Image with Opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `url('/images/project/1.jpeg')`,
                }}
              />
              
              {/* Overlay Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-400/10 via-pink-500/10 to-rose-500/10 flex items-center justify-center"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Premium Play Button */}
                <motion.div
                  className="relative w-28 h-28 bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center cursor-pointer border-2 border-gray-300/50 shadow-2xl group"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Play className="w-12 h-12 text-red-600 ml-1 relative z-10 group-hover:text-pink-600 transition-colors duration-300" fill="currentColor" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-red-500/30"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Premium Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Premium Content Section */}
            <div className="p-6 lg:p-8 bg-gradient-to-b from-white to-gray-50/50">
              <motion.h3 
                className="text-2xl font-black text-gray-900 mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                StyleHub Shopping Experience
              </motion.h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed font-medium">
                Discover the seamless fusion of fashion and technology in this premium e-commerce journey.
              </p>

              <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200/50">
                <div className="flex items-center gap-6">
                  <motion.div 
                    className="flex items-center gap-2 text-red-600 font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Eye className="w-5 h-5" />
                    <span className="font-bold">4.2K</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 text-gray-500 font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>1 week ago</span>
                  </motion.div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.15, rotate: 5 }} 
                    className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300/50"
                  >
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.15, rotate: -5 }} 
                    className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-300/50"
                  >
                    <Bookmark className="w-5 h-5 text-gray-700" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

