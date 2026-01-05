'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import domainsData from '@/utils/lib/domainsData';
import { TrendingUp, Users, Zap, Sparkles,ArrowRight, Award } from 'lucide-react';

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter domains based on search
  const filteredDomains = domainsData.filter(domain =>
    domain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    domain.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const Card = ({ domain, index }) => (
    <motion.div
      key={domain.slug}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent"
      onMouseEnter={() => setHoveredCard(domain.slug)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Card Background */}
      <div className={`h-48 relative overflow-hidden ${domain.colors.gradient1} bg-gradient-to-br`}>
        <Image
          src={`/images/hero/1.png`}
          alt={domain.name}
          fill
          className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800"
        >
          {domain?.hero?.badgeText}
        </motion.div>

        {/* Card Content */}
        <div className="absolute bottom-4 left-4 right-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-xl font-bold mb-2 drop-shadow-lg"
          >
            {domain.name}
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-sm mb-4 line-clamp-2"
          >
            {domain?.hero?.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Stats Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>{domain?.hero?.growthOptions?.[0]?.value}% Growth</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span>500+ Users</span>
            </div>
          </div>
          
          {/* Status Indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-3 h-3 bg-green-500 rounded-full shadow-lg"
          />
        </div>

        {/* Growth Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {domain?.hero?.growthOptions?.slice(0, 2).map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
            >
              <div className={`p-1.5 rounded ${domain.colors.gradient1} bg-gradient-to-br flex-shrink-0`}>
                <div className="w-4 h-4 text-white" style={{clipPath: 'circle(50%)'}} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{stat.value}%</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between">
          <Link href={`/${domain.slug}`} className="group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-md"
            >
              Explore Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          {/* Icon */}
          <div className={`w-10 h-10 rounded-xl ${domain.colors.gradient1} bg-gradient-to-br flex items-center justify-center shadow-lg`}>
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Hover Overlay */}
        {hoveredCard === domain.slug && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-white w-full"
            >
              <h4 className="font-bold text-lg mb-2">Ready to Transform?</h4>
              <p className="text-sm opacity-90">Join industry leaders using cutting-edge {domain.slug} solutions</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DomainHub</span>
            </Link>
            
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search domains (Agriculture, Influencer, Gym...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Zap className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-16"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6"
          >
            Domain Excellence Platforms
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Discover cutting-edge digital solutions tailored for agriculture, influencers, fitness businesses, and more. 
            Transform your operations with AI-powered platforms designed for maximum growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/agriculture">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Agriculture Solutions
                <TrendingUp className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
            
            <Link href="/influencer">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-xl font-semibold text-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Influencer Growth
                <Sparkles className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              { value: '500+', label: 'Active Platforms', icon: Users },
              { value: '50K+', label: 'Business Users', icon: TrendingUp },
              { value: '98%', label: 'Success Rate', icon: Award },
              { value: '24/7', label: 'Support', icon: Zap }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Domains Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Platform Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our specialized platforms designed to transform your specific industry
            </p>
            {searchQuery && (
              <p className="text-sm text-gray-500 mt-2">
                Showing {filteredDomains.length} of {domainsData.length} domains
              </p>
            )}
          </motion.div>

          {filteredDomains.length > 0 ? (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDomains.map((domain, index) => (
                <Card key={domain.slug} domain={domain} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No domains found</h3>
              <p className="text-gray-500">Try searching for agriculture, influencer, gym, or clear the search</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of businesses that have scaled with our domain-specific platforms. 
              Start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agriculture">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
              </Link>
              <Link href="#contact">
                <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Domain Excellence Platforms. All rights reserved. | 
              Transforming businesses with innovative digital solutions.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
