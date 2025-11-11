'use client';

import { motion } from 'framer-motion';
import { Award, Heart, ArrowRight } from 'lucide-react';

export default function EcommerceFinalCTA() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-white to-[#FFF5F5] text-black overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-red-200">
            <Award className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-medium">Ready to Transform Your E-commerce?</span>
            <Heart className="w-5 h-5 text-red-600" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Build Your{' '}
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Digital Store
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Let&apos;s create an e-commerce experience that not only sells products but builds 
            lasting brand relationships with your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-red-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-3xl overflow-hidden"
            >
              <span>Start Your Transformation</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 -skew-x-12" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group border-2 border-gray-800 px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              <span>View Portfolio</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


