// components/SocialMediaPage.jsx
'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  Users, 
  Share2, 
  MessageCircle, 
  Eye, 
  Clock,
  Star,
  Zap,
  Target,
  CheckCircle,
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const SocialMediaPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialStats = [
    {
      percentage: "87%",
      label: "Engagement Rate",
      description: "Higher than industry average",
      icon: MessageCircle,
      color: "from-red-500 to-pink-500",
      improvement: "+12%",
      delay: 100
    },
    {
      percentage: "2.3M",
      label: "Total Reach",
      description: "Monthly audience reach",
      icon: Users,
      color: "from-pink-500 to-red-500",
      improvement: "+45%",
      delay: 200
    },
    {
      percentage: "156%",
      label: "Growth Rate",
      description: "Follower growth YoY",
      icon: TrendingUp,
      color: "from-red-400 to-pink-600",
      improvement: "+67%",
      delay: 300
    },
    {
      percentage: "4.8/5",
      label: "Satisfaction Score",
      description: "Client satisfaction rating",
      icon: Star,
      color: "from-pink-500 to-red-400",
      improvement: "+0.8",
      delay: 400
    },
    {
      percentage: "24/7",
      label: "Response Time",
      description: "Average response time",
      icon: Clock,
      color: "from-red-600 to-pink-400",
      improvement: "-2hrs",
      delay: 500
    },
    {
      percentage: "3.2x",
      label: "ROI Multiplier",
      description: "Return on investment",
      icon: Zap,
      color: "from-red-500 to-pink-500",
      improvement: "+1.5x",
      delay: 600
    }
  ];

  const platformStats = [
    { name: "Instagram", icon: Instagram, color: "#E1306C", growth: "+89%", value: "1.2M" },
    { name: "Facebook", icon: Facebook, color: "#1877F2", growth: "+45%", value: "850K" },
    { name: "Twitter", icon: Twitter, color: "#1DA1F2", growth: "+67%", value: "450K" },
    { name: "LinkedIn", icon: Linkedin, color: "#0077B5", growth: "+112%", value: "320K" },
    { name: "YouTube", icon: Youtube, color: "#FF0000", growth: "+156%", value: "980K" }
  ];

  const scrollableImages = [
    {
      id: 1,
      src: "/api/placeholder/600/800",
      title: "Instagram Campaign",
      description: "Viral marketing campaign reaching 2M+ users",
      platform: "Instagram",
      metrics: { engagement: "12.5%", reach: "2.3M", conversions: "15K" }
    },
    {
      id: 2,
      src: "/api/placeholder/600/800",
      title: "Facebook Strategy",
      description: "Targeted ad strategy with 45% lower CPA",
      platform: "Facebook",
      metrics: { engagement: "8.7%", reach: "1.8M", conversions: "12K" }
    },
    {
      id: 3,
      src: "/api/placeholder/600/800",
      title: "Twitter Engagement",
      description: "Real-time engagement boosting brand presence",
      platform: "Twitter",
      metrics: { engagement: "15.2%", reach: "890K", conversions: "8K" }
    },
    {
      id: 4,
      src: "/api/placeholder/600/800",
      title: "LinkedIn B2B",
      description: "Professional network driving B2B leads",
      platform: "LinkedIn",
      metrics: { engagement: "6.8%", reach: "450K", conversions: "5K" }
    },
    {
      id: 5,
      src: "/api/placeholder/600/800",
      title: "YouTube Content",
      description: "Video content strategy with high retention",
      platform: "YouTube",
      metrics: { engagement: "23.1%", reach: "3.2M", conversions: "25K" }
    }
  ];

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
      const imageWidth = container.children[0].offsetWidth + 24; // width + gap
      const newIndex = Math.round(scrollLeft / imageWidth);
      setActiveImage(newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff5f5] to-[#fff0f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-red-500/20 shadow-lg mb-8">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-3"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              SOCIAL MEDIA EXCELLENCE
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Mastering{' '}
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming social media strategies into measurable business growth 
            with data-driven approaches and creative excellence.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
         
        {/* Left Side - Statistics & Points */}
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Platform Performance */}
          <div className="bg-white rounded-3xl shadow-2xl border border-red-500/10 p-8">
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
              Platform Performance
            </h3>
            
            <div className="space-y-4">
              {platformStats.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white hover:from-red-500/5 hover:to-pink-500/5 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${platform.color}15` }}
                      >
                        <IconComponent 
                          className="w-6 h-6" 
                          style={{ color: platform.color }} 
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{platform.name}</div>
                        <div className="text-sm text-gray-600">{platform.value} Followers</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm font-semibold text-red-500">
                        <TrendingUp className="w-4 h-4" />
                        {platform.growth}
                      </div>
                      <div className="text-xs text-gray-500">Growth</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>
              Performance Metrics
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socialStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-1 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                  <div className="relative p-6 rounded-xl bg-white backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/10">
                        <ArrowUp className="w-3 h-3 text-pink-500" />
                        <span className="text-sm font-bold text-red-600">
                          {stat.improvement}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-2xl font-black text-gray-900">
                        {stat.percentage}
                      </div>
                      <div className="font-bold text-gray-900">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-500">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>

        
        </div>

        {/* Right Side - Scrollable Images */}
        <div className={`sticky top-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '300ms'}}>
          
          {/* Main Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {scrollableImages.map((image, index) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-full max-w-md snap-center"
            >
            <div className="bg-white rounded-3xl shadow-2xl border border-red-500/10 overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-red-500/10 to-pink-500/10 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ 
                            backgroundColor: platformStats.find(p => p.name === image.platform)?.color + '20' 
                          }}
                        >
                          {/* Icon rendering logic - keeping platform-specific colors */}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{image.platform}</div>
                          <div className="text-sm text-gray-600">Campaign Performance</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="font-black text-red-500 text-lg">{image.metrics.engagement}</div>
                          <div className="text-xs text-gray-600">Engagement</div>
                        </div>
                        <div>
                          <div className="font-black text-red-500 text-lg">{image.metrics.reach}</div>
                          <div className="text-xs text-gray-600">Reach</div>
                        </div>
                        <div>
                          <div className="font-black text-red-500 text-lg">{image.metrics.conversions}</div>
                          <div className="text-xs text-gray-600">Conversions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {image.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>High Performance</span>
                  </div>
                  <div className="px-3 py-1 bg-red-500/10 rounded-full">
                    <span className="text-sm font-semibold text-red-600">Case Study</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollableImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeImage 
                    ? 'bg-red-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-red-500/20">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">Scroll to explore more campaigns</span>
            </div>
          </div>
        </div>
      </div>
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
