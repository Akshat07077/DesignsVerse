
'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Share2, 
  MessageCircle, 
  Eye, 
  Clock,
  Zap,
  Target,
  CheckCircle,
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Star
} from 'lucide-react';

const SocialMediaPage = ({ data, colors, domainSlug }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const IconComponent = ({ name, className, style = {} }) => {
    const LucideIcon = { 
      TrendingUp, Users, MessageCircle, Eye, Clock, Zap, Target, CheckCircle, 
      ArrowUp, Instagram, Facebook, Twitter, Linkedin, Youtube, Star 
    }[name] || TrendingUp;
    return <LucideIcon className={className} style={style} />;
  };

  const scrollToImage = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageElement = container.children[index];
      imageElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'center'
      });
      setActiveImage(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const imageWidth = container.children[0].offsetWidth + 24;
      const newIndex = Math.round(scrollLeft / imageWidth);
      setActiveImage(newIndex);
    }
  };

  // Default data fallback if not provided
  const socialStats = data?.stats || [
    {
      percentage: "87%",
      label: `${domainSlug} Engagement Rate`,
      description: "Higher than industry average",
      icon: 'MessageCircle',
      color: colors.gradient1,
      improvement: "+12%",
      delay: 100
    },
    {
      percentage: "2.3M",
      label: `${domainSlug} Total Reach`,
      description: "Monthly audience reach",
      icon: 'Users',
      color: colors.gradient2,
      improvement: "+45%",
      delay: 200
    },
    {
      percentage: "156%",
      label: `${domainSlug} Growth Rate`,
      description: "Follower growth YoY",
      icon: 'TrendingUp',
      color: colors.gradient3,
      improvement: "+67%",
      delay: 300
    }
  ];

  const platformStats = data?.platforms || [
    { name: "Instagram", icon: 'Instagram', color: "#E1306C", growth: "+89%", value: "1.2M" },
    { name: "Facebook", icon: 'Facebook', color: "#1877F2", growth: "+45%", value: "850K" },
    { name: "Twitter", icon: 'Twitter', color: "#1DA1F2", growth: "+67%", value: "450K" },
    { name: "LinkedIn", icon: 'Linkedin', color: "#0077B5", growth: "+112%", value: "320K" },
    { name: "YouTube", icon: 'Youtube', color: "#FF0000", growth: "+156%", value: "980K" }
  ];

  const scrollableImages = data?.campaigns || [
    {
      id: 1,
      src: "/api/placeholder/600/800",
      title: `${domainSlug} Campaign Success`,
      description: `${domainSlug} marketing campaign reaching 2M+ users`,
      platform: "Instagram",
      metrics: { engagement: "12.5%", reach: "2.3M", conversions: "15K" }
    },
    {
      id: 2,
      src: "/api/placeholder/600/800",
      title: `${domainSlug} Strategy`,
      description: `Targeted ${domainSlug} ad strategy with 45% lower CPA`,
      platform: "Facebook",
      metrics: { engagement: "8.7%", reach: "1.8M", conversions: "12K" }
    },
    {
      id: 3,
      src: "/api/placeholder/600/800",
      title: `${domainSlug} Engagement`,
      description: `Real-time ${domainSlug} engagement boosting brand presence`,
      platform: "Twitter",
      metrics: { engagement: "15.2%", reach: "890K", conversions: "8K" }
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white via-[${colors.background}] to-[#e8f5e8] py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Dynamic Colors */}
        <div className={`text-center mb-16 lg:mb-20 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className={`inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-[${colors.primary}]/20 shadow-lg mb-8`}>
            <div className={`w-2 h-2 rounded-full bg-[${colors.primary}] animate-pulse mr-3`}></div>
            <span className={`text-sm font-semibold bg-gradient-to-r from-[${colors.secondary}] to-[${colors.accent}] bg-clip-text text-transparent`}>
              ${domainSlug.toUpperCase()} SOCIAL MEDIA EXCELLENCE
            </span>
          </div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Mastering{' '}
            <span 
            className={`bg-gradient-to-r ${colors.gradient1} bg-clip-text text-transparent`}>
              Digital Presence
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transforming ${domainSlug} social media strategies into measurable business growth with data-driven approaches and creative excellence.
          </motion.p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          
          {/* Left Side - Statistics & Points with Dynamic Colors */}
          <motion.div 
            className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            
            {/* Dynamic Social Stats */}
            <div className="bg-white rounded-3xl shadow-2xl border p-8"
style={{ borderColor: `${colors.primary}1A` }}>
              <motion.h3 
                className={`text-2xl font-black text-gray-900 mb-6 flex items-center gap-3`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className={`w-2 h-8 bg-gradient-to-b from-[${colors.primary}] to-[${colors.secondary}] rounded-full`}></div>
                ${domainSlug} Social Performance
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialStats.map((stat, index) => {
                  const Icon = IconComponent({ name: stat.icon, className: "w-6 h-6 text-white" });
                  return (
                    <motion.div
                      key={index}
                      className={`group relative p-6 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[${colors.primary}]/10`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (index * 0.1), duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative rounded-2xl bg-white/60 backdrop-blur-sm p-6 border border-white/20">
                        <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {Icon}
                        </div>
                        <div className="text-3xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                          {stat.percentage}
                        </div>
                        <div className="text-lg font-semibold text-gray-900 mb-1">
                          {stat.label}
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          {stat.description}
                        </div>
                        <div 
  className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full"
  style={{
    backgroundColor: `${colors.primary}1A`,
    color: colors.primary,
  }}
>
                          <TrendingUp className="w-4 h-4" />
                          <span>{stat.improvement} Growth</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Platform Performance */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl border p-8"
style={{ borderColor: `${colors.primary}1A` }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h3 className={`text-2xl font-black text-gray-900 mb-6 flex items-center gap-3`}>
                <div className={`w-2 h-8 bg-gradient-to-b from-[${colors.primary}] to-[${colors.secondary}] rounded-full`}></div>
                Platform ${domainSlug} Performance
              </h3>
              
              <div className="space-y-4">
                {platformStats.map((platform, index) => {
                  const Icon = IconComponent({ 
                    name: platform.icon, 
                    className: "w-6 h-6", 
                    style: { color: platform.color } 
                  });
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:from-[${colors.primary}]/5 hover:to-[${colors.secondary}]/5 transition-all duration-300 group`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + (index * 0.1) }}
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md"
                          style={{ 
                            backgroundColor: `${platform.color}15`,
                            border: `1px solid ${platform.color}20`
                          }}
                        >
                          {Icon}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">{platform.name}</div>
                          <div className="text-sm text-gray-600">{platform.value} Followers</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-2 text-sm font-semibold text-[${colors.primary}]`}>
                          <TrendingUp className="w-4 h-4" />
                          {platform.growth}
                        </div>
                        <div className="text-xs text-gray-500">Growth</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Dynamic Strategy Points */}
            <motion.div
              className={`bg-gradient-to-br from-[${colors.primary}] to-[${colors.secondary}] rounded-3xl p-8 text-white`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <h3 className="text-2xl font-black mb-6">Our ${domainSlug} Winning Strategy</h3>
              <div className="space-y-4">
                {[
                  "Data-driven content optimization",
                  "Real-time engagement monitoring",
                  "Cross-platform consistency",
                  "Audience behavior analysis",
                  `${domainSlug}-focused campaign planning`,
                  "Continuous performance tracking"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + (index * 0.1) }}
                  >
                    <div className={`w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-white/95">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Scrollable Images with Dynamic Colors */}
          <motion.div 
            className={`sticky top-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{animationDelay: '300ms'}}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            
            {/* Main Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className={`flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-lg border border-[${colors.primary}]/10`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {scrollableImages.map((image, index) => {
                const platformData = platformStats.find(p => p.name === image.platform);
                const platformIcon = platformData ? IconComponent({ 
                  name: platformData.icon, 
                  className: "w-5 h-5", 
                  style: { color: platformData.color } 
                }) : null;
                
                return (
                  <div
                    key={image.id}
                    className={`flex-shrink-0 w-full max-w-md snap-center ${index === activeImage ? 'ring-4 ring-[var(--primary-color)]/20' : ''}`}
                  >
                    <motion.div 
                      className={`bg-white rounded-3xl shadow-2xl border border-[${colors.primary}]/10 overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 ${index === activeImage ? 'scale-105' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + (index * 0.2) }}
                    >
                      
                      {/* Image Container with Dynamic Colors */}
                      <div className={`relative aspect-[3/4] bg-gradient-to-br from-[${colors.primary}]/5 to-[${colors.secondary}]/5 overflow-hidden`}>
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        
                        {/* Dynamic Overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="absolute bottom-6 left-6 right-6">
                            <motion.div 
                              className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl`}
                              initial={{ y: 20 }}
                              whileHover={{ y: 0 }}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                {platformIcon && (
                                  <div 
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                                    style={{ 
                                      backgroundColor: platformData.color + '20',
                                      border: `1px solid ${platformData.color}30`
                                    }}
                                  >
                                    {platformIcon}
                                  </div>
                                )}
                                <div>
                                  <div className={`font-bold text-gray-900 text-sm`}>{image.platform}</div>
                                  <div className="text-xs text-gray-600">${domainSlug} Campaign Performance</div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                  <div className={`font-black text-[${colors.primary}] text-lg`}>{image.metrics.engagement}</div>
                                  <div className="text-xs text-gray-600">Engagement</div>
                                </div>
                                <div>
                                  <div className={`font-black text-[${colors.primary}] text-lg`}>{image.metrics.reach}</div>
                                  <div className="text-xs text-gray-600">Reach</div>
                                </div>
                                <div>
                                  <div className={`font-black text-[${colors.primary}] text-lg`}>{image.metrics.conversions}</div>
                                  <div className="text-xs text-gray-600">Conversions</div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content with Dynamic Colors */}
                      <div className={`p-6 bg-gradient-to-b from-white to-[${colors.primary}]/5`}>
                        <h3 className={`text-xl font-black text-gray-900 mb-2`}>{image.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {image.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Eye className="w-4 h-4" />
                            <span>High Performance</span>
                          </div>
                          <div className={`px-3 py-1 bg-[${colors.primary}]/10 rounded-full`}>
                            <span className={`text-sm font-semibold text-[${colors.primary}]`}>Case Study</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Scroll Indicators with Dynamic Colors */}
            <div className="flex justify-center gap-2 mt-6">
              {scrollableImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeImage 
                      ? `bg-[${colors.primary}] w-8 shadow-lg` 
                      : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Dynamic Scroll Hint */}
            <motion.div 
              className={`text-center mt-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[${colors.primary}]/20 shadow-lg`}>
                <div className={`w-2 h-2 rounded-full bg-[${colors.primary}] animate-pulse`}></div>
                <span className="text-sm font-medium text-gray-600">Scroll to explore more ${domainSlug} campaigns</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Dynamic CTA Section for Social Media */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div 
            className={`bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] rounded-3xl p-1.5 shadow-3xl mx-auto max-w-4xl`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl p-12 lg:p-16 relative overflow-hidden">
              <div className={`absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_30%,${colors.primary},transparent_50%)]`} />
              
              <motion.h2 
                className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 relative z-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                Ready to Transform Your ${domainSlug} Social Media?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1 }}
              >
                Join 10,000+ ${domainSlug} businesses that have seen 3x growth in social media engagement and ROI with our proven strategies.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
              >
                <motion.button 
                  className={`group px-10 py-4 bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] text-white rounded-2xl font-bold shadow-3xl hover:shadow-4xl flex items-center gap-3 text-lg transition-all duration-500`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5" />
                  <span>Start ${domainSlug} Campaign</span>
                </motion.button>
                
                <motion.a
                  href={`https://${domainSlug}social.com`}
                  className={`px-10 py-4 border-2 border-[${colors.secondary}] text-[${colors.primary}] rounded-2xl font-bold hover:bg-[${colors.primary}] hover:text-white transition-all duration-500 shadow-2xl hover:shadow-3xl text-lg`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View ${domainSlug} Case Studies
                </motion.a>
              </motion.div>

              {/* Dynamic Floating Elements */}
              <motion.div
                className={`absolute top-8 right-12 w-4 h-4 bg-[${colors.primary}] rounded-full opacity-20`}
                animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4 }}
              />
              <motion.div
                className={`absolute bottom-12 left-16 w-3 h-3 bg-[${colors.secondary}] rounded-full opacity-30`}
                animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, delay: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaPage;
