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
  Bookmark
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
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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
        ease: 'easeInOut',
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#FFF5F5] to-[#FFF0F0] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-red-400/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-400/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-red-400/30 to-pink-500/30 rounded-full"
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

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-left space-y-8">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-red-200 shadow-lg"
          >
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-red-700 tracking-wide">E-commerce Transformation</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9] tracking-tight text-black"
          >
            Elevating{' '}
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              StyleHub
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-gray-800">To Digital Excellence</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-lg">
              Transforming fashion retail into a seamless e-commerce powerhouse: 4.2x revenue acceleration, 285% organic traffic uplift, and engaging social commerce.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '4.2x', label: 'Revenue Growth', color: 'red' },
                { value: '285%', label: 'Traffic Uplift', color: 'green' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className={`bg-white rounded-2xl p-6 border border-${stat.color}-200 shadow-lg hover:shadow-xl transition-all duration-500`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`text-3xl font-black bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-700 bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 overflow-hidden shadow-xl hover:shadow-red-500/25 transition-all duration-300 border border-red-500/20"
            >
              <span>Explore Live Store</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group border border-gray-300 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span>Book Consultation</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <motion.div
            className="relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl backdrop-blur-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-xl p-5 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                </div>
                <span className="text-xs text-gray-700 font-medium">StyleHub Demo</span>
              </div>
              <div className="text-xs text-gray-500">04:32</div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-400/5 to-pink-500/5 flex items-center justify-center"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="w-24 h-24 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all duration-500 border border-gray-300 shadow-2xl"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-10 h-10 text-red-600 ml-1" />
                </motion.div>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>

            <div className="p-8 bg-white">
              <motion.h3 className="text-2xl font-bold text-gray-900 mb-3">
                StyleHub Shopping Experience
              </motion.h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Discover the seamless fusion of fashion and technology in this premium e-commerce journey.
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-red-600">
                    <Eye className="w-4 h-4" />
                    <span>4.2K</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>1 week ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.button whileHover={{ scale: 1.1 }} className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200">
                    <Bookmark className="w-4 h-4 text-gray-600" />
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

