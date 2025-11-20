export const domainsData = {
    agriculture: {
      name: "Agriculture Excellence Platform",
      slug: "agriculture",
      colors: {
        primary: "#A2E535",
        secondary: "#16A34A", 
        accent: "#15803D",
        background: "#f0f8e8",
        gradient1: "from-[#A2E535] to-[#16A34A]",
        gradient2: "from-[#16A34A] to-[#15803D]",
        gradient3: "from-[#A2E535] to-[#15803D]",
        textPrimary: "#15803D",
        textSecondary: "#6B7280"
      },
      hero: {
        title: "Transform Your Agriculture Business",
        subtitle: "Driving innovation in agri-business with cutting-edge technology solutions",
        badgeText: "TRUSTED BY 500+ AGRI-COMPANIES",
        description: "Experience unprecedented growth with our agriculture-focused AI-powered solutions. Join industry leaders who transformed their digital landscape with cutting-edge technology.",
        growthOptions: [
          { value: '25%', label: 'Crop Yield', icon: 'TrendingUp', gradient: 'from-[#A2E535] to-[#16A34A]' },
          { value: '40%', label: 'Market Reach', icon: 'Target', gradient: 'from-[#16A34A] to-[#15803D]' },
          { value: '35%', label: 'Efficiency', icon: 'Zap', gradient: 'from-[#A2E535] to-[#15803D]' },
          { value: '60%', label: 'Sustainability', icon: 'Sparkles', gradient: 'from-[#16A34A] to-[#15803D]' }
        ],
        ctaButtons: [
          { text: 'Get Agri Solutions', variant: 'primary' },
          { text: 'Schedule Farm Demo', variant: 'secondary' }
        ],
        videoUrl: "/videos/agriculture-demo.mp4"
      },
      about: {
        intro: "We are revolutionizing agriculture with cutting-edge technology, delivering exceptional value and driving digital transformation in agri-business worldwide.",
        secondaryIntro: "With a team of world-class engineers, agronomists, and data scientists, we combine cutting-edge technology with deep agriculture industry expertise to deliver exceptional value to our clients across 120+ countries.",
        features: [
          { icon: 'Cpu', text: "AI-Powered Farming Solutions", description: "Advanced machine learning for crop prediction and soil analysis" },
          { icon: 'Clock', text: "24/7 Agri-Support", description: "Round the clock assistance for farming operations" },
          { icon: 'Shield', text: "Supply Chain Security", description: "End-to-end secure agriculture supply chain management" },
          { icon: 'TrendingUp', text: "Scalable Farm Infrastructure", description: "Grow your agricultural operations without limits" },
          { icon: 'Zap', text: "Real-time Crop Analytics", description: "Instant insights and farm performance reports" },
          { icon: 'Infinity', text: "IoT Integration", description: "Seamless smart farming system integration" }
        ],
        milestones: [
          { year: '2018', title: 'AgriTech Founded', description: 'Started with a vision to innovate agriculture' },
          { year: '2020', title: 'First Smart Farm', description: 'Implemented AI in 100+ farms' },
          { year: '2022', title: 'Global Agri Expansion', description: 'Expanded to 50+ countries' },
          { year: '2024', title: 'AI Farming Revolution', description: 'Launched precision agriculture suite' }
        ]
      },
      socialMedia: {
        stats: [
          { 
            percentage: "85%", 
            label: "Agri Engagement Rate", 
            description: "Higher than agriculture industry average", 
            icon: 'MessageCircle', 
            color: "from-[#A2E535] to-[#16A34A]", 
            improvement: "+12%",
            delay: 100 
          },
          { 
            percentage: "2.1M", 
            label: "Farm Reach", 
            description: "Monthly agricultural audience reach", 
            icon: 'Users', 
            color: "from-[#16A34A] to-[#15803D]", 
            improvement: "+45%",
            delay: 200 
          },
          { 
            percentage: "142%", 
            label: "Market Growth", 
            description: "Agriculture market growth YoY", 
            icon: 'TrendingUp', 
            color: "from-[#A2E535] to-[#15803D]", 
            improvement: "+67%",
            delay: 300 
          },
          { 
            percentage: "4.8/5", 
            label: "Farmer Satisfaction", 
            description: "Agriculture client satisfaction rating", 
            icon: 'Star', 
            color: "from-[#16A34A] to-[#A2E535]", 
            improvement: "+0.8",
            delay: 400 
          }
        ],
        platforms: [
          { name: "Instagram", icon: 'Instagram', color: "#E1306C", growth: "+78%", value: "1.2M" },
          { name: "Facebook", icon: 'Facebook', color: "#1877F2", growth: "+42%", value: "850K" },
          { name: "LinkedIn", icon: 'Linkedin', color: "#0077B5", growth: "+98%", value: "320K" },
          { name: "YouTube", icon: 'Youtube', color: "#FF0000", growth: "+134%", value: "680K" }
        ],
        campaigns: [
          {
            id: 1,
            src: "/api/placeholder/600/800",
            title: "Smart Farming Campaign",
            description: "AI-powered agriculture marketing reaching 2M+ farmers worldwide",
            platform: "Instagram",
            metrics: { engagement: "12.5%", reach: "2.3M", conversions: "15K" }
          },
          {
            id: 2,
            src: "/api/placeholder/600/800", 
            title: "Sustainable Farming Initiative",
            description: "Targeted agriculture sustainability campaign with 45% lower resource usage",
            platform: "Facebook",
            metrics: { engagement: "8.7%", reach: "1.8M", conversions: "12K" }
          },
          {
            id: 3,
            src: "/api/placeholder/600/800",
            title: "AgriTech Engagement",
            description: "Real-time agriculture technology engagement boosting farm adoption rates",
            platform: "LinkedIn",
            metrics: { engagement: "15.2%", reach: "890K", conversions: "8K" }
          }
        ]
      },
      businessTransformation: {
        areas: [
          {
            id: 'digital',
            title: 'Agriculture Digital Transformation',
            icon: 'Smartphone',
            description: 'Modernize your farming operations with cutting-edge digital agriculture solutions',
            color: 'from-[#A2E535] to-[#16A34A]',
            features: ['Smart Irrigation Systems', 'Crop Monitoring Drones', 'Farm Automation', 'Digital Marketplaces'],
            impact: '65% efficiency boost'
          },
          {
            id: 'process',
            title: 'Farming Process Optimization',
            icon: 'Zap',
            description: 'Streamline agricultural operations and eliminate farming bottlenecks',
            color: 'from-[#16A34A] to-[#15803D]',
            features: ['Harvest Optimization', 'Supply Chain Management', 'Quality Control Systems', 'Resource Management'],
            impact: '45% cost reduction'
          },
          {
            id: 'data',
            title: 'Agriculture Data & Analytics',
            icon: 'BarChart3',
            description: 'Leverage agricultural data for strategic farming decision making',
            color: 'from-[#A2E535] to-[#15803D]',
            features: ['Real-time Crop Analytics', 'Predictive Yield Insights', 'Farm Dashboard Reporting', 'Soil Data Visualization'],
            impact: '89% better decisions'
          },
          {
            id: 'customer',
            title: 'Agriculture Customer Experience',
            icon: 'Users',
            description: 'Transform agriculture customer interactions and farmer satisfaction',
            color: 'from-[#15803D] to-[#16A34A]',
            features: ['Farmer 360 View', 'Crop Recommendation Personalization', 'Agri-Support Automation', 'Market Feedback Systems'],
            impact: '72% satisfaction increase'
          }
        ]
      },
      footer: {
        services: [
          { name: 'Smart Farming Solutions', href: '/smart-farming' },
          { name: 'Crop Analytics Platform', href: '/crop-analytics' },
          { name: 'Agriculture Supply Chain', href: '/supply-chain' },
          { name: 'Farm Management System', href: '/farm-management' }
        ],
        bookingLink: 'https://calendly.com/agritech-consulting/15min-agriculture'
      }
    },
    
    // Influencer data (same structure)
    influencer: {
      name: "Influencer Growth Accelerator",
      slug: "influencer",
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent: "#45B7D1",
        background: "#FFF0F5",
        gradient1: "from-[#FF6B6B] to-[#4ECDC4]",
        gradient2: "from-[#4ECDC4] to-[#45B7D1]", 
        gradient3: "from-[#FF6B6B] to-[#45B7D1]",
        textPrimary: "#FF6B6B",
        textSecondary: "#6B7280"
      },
      hero: {
        title: "Amplify Your Digital Influence",
        subtitle: "Next-generation influencer marketing platform for maximum brand reach and engagement",
        badgeText: "WORKING WITH 1000+ TOP INFLUENCERS",
        description: "Scale your influence with our AI-driven content strategy, audience growth tools, and brand partnership optimization platform.",
        growthOptions: [
          { value: '150%', label: 'Engagement Growth', icon: 'TrendingUp', gradient: 'from-[#FF6B6B] to-[#4ECDC4]' },
          { value: '80%', label: 'Brand Partnerships', icon: 'Target', gradient: 'from-[#4ECDC4] to-[#45B7D1]' },
          { value: '200%', label: 'Audience Expansion', icon: 'Zap', gradient: 'from-[#FF6B6B] to-[#45B7D1]' },
          { value: '95%', label: 'Content ROI', icon: 'Sparkles', gradient: 'from-[#4ECDC4] to-[#45B7D1]' }
        ],
        ctaButtons: [
          { text: 'Start Influencer Growth', variant: 'primary' },
          { text: 'View Platform Demo', variant: 'secondary' }
        ],
        videoUrl: "/videos/influencer-platform-demo.mp4"
      },
      about: {
        intro: "Empowering influencers to reach their full digital potential through innovative content strategies and audience engagement tools.",
        secondaryIntro: "Our platform connects influencers with premium brands, optimizes content performance through AI analytics, and provides comprehensive growth tracking to maximize ROI and audience connection.",
        features: [
          { icon: 'Cpu', text: "AI Content Optimization", description: "Intelligent content suggestions and performance prediction algorithms" },
          { icon: 'Clock', text: "24/7 Creator Support", description: "Round-the-clock assistance for content creators and influencers" },
          { icon: 'Shield', text: "Brand Partnership Security", description: "Safe and transparent brand collaboration management" },
          { icon: 'TrendingUp', text: "Organic Audience Scaling", description: "Algorithm-friendly growth strategies for authentic audience building" },
          { icon: 'Zap', text: "Real-time Engagement Analytics", description: "Instant insights into content performance and audience behavior" },
          { icon: 'Infinity', text: "Multi-platform Integration", description: "Seamless integration across all social media platforms" }
        ]
      },
      socialMedia: {
        stats: [
          { 
            percentage: "92%", 
            label: "Content Engagement Rate", 
            description: "Above influencer industry benchmarks", 
            icon: 'MessageCircle', 
            color: "from-[#FF6B6B] to-[#4ECDC4]", 
            improvement: "+25%",
            delay: 100 
          },
          { 
            percentage: "5.2M", 
            label: "Monthly Impressions", 
            description: "Total content reach across platforms", 
            icon: 'Users', 
            color: "from-[#4ECDC4] to-[#45B7D1]", 
            improvement: "+68%",
            delay: 200 
          },
          { 
            percentage: "189%", 
            label: "Audience Growth", 
            description: "Month-over-month follower increase", 
            icon: 'TrendingUp', 
            color: "from-[#FF6B6B] to-[#45B7D1]", 
            improvement: "+42%",
            delay: 300 
          },
          { 
            percentage: "4.9/5", 
            label: "Brand Satisfaction", 
            description: "Influencer-brand collaboration rating", 
            icon: 'Star', 
            color: "from-[#4ECDC4] to-[#FF6B6B]", 
            improvement: "+0.7",
            delay: 400 
          }
        ],
        platforms: [
          { name: "Instagram", icon: 'Instagram', color: "#E1306C", growth: "+125%", value: "2.8M" },
          { name: "TikTok", icon: 'Youtube', color: "#FF0050", growth: "+210%", value: "1.9M" },
          { name: "YouTube", icon: 'Youtube', color: "#FF0000", growth: "+89%", value: "1.2M" },
          { name: "Twitter", icon: 'Twitter', color: "#1DA1F2", growth: "+67%", value: "890K" },
          { name: "LinkedIn", icon: 'Linkedin', color: "#0077B5", growth: "+145%", value: "450K" }
        ],
        campaigns: [
          {
            id: 1,
            src: "/api/placeholder/600/800",
            title: "Viral Influencer Campaign",
            description: "Multi-platform influencer strategy reaching 5M+ engaged users",
            platform: "Instagram",
            metrics: { engagement: "18.5%", reach: "5.2M", conversions: "28K" }
          },
          {
            id: 2,
            src: "/api/placeholder/600/800",
            title: "Brand Partnership Series",
            description: "Premium brand collaborations generating 3x engagement rates",
            platform: "TikTok", 
            metrics: { engagement: "24.7%", reach: "3.8M", conversions: "19K" }
          },
          {
            id: 3,
            src: "/api/placeholder/600/800",
            title: "Content Strategy Launch",
            description: "AI-optimized content calendar boosting organic growth by 189%",
            platform: "YouTube",
            metrics: { engagement: "15.2%", reach: "2.1M", conversions: "12K" }
          }
        ]
      },
      businessTransformation: {
        areas: [
          {
            id: 'digital',
            title: 'Influencer Digital Transformation',
            icon: 'Smartphone',
            description: 'Modernize your influencer operations with cutting-edge digital content solutions',
            color: 'from-[#FF6B6B] to-[#4ECDC4]',
            features: ['Content Management Systems', 'Analytics Dashboards', 'Brand Collaboration Tools', 'Audience Growth Platforms'],
            impact: '78% engagement boost'
          },
          {
            id: 'process',
            title: 'Content Creation Optimization',
            icon: 'Zap',
            description: 'Streamline your content workflow and collaboration processes',
            color: 'from-[#4ECDC4] to-[#45B7D1]',
            features: ['Content Calendar Automation', 'Collaboration Management', 'Performance Tracking', 'ROI Analysis'],
            impact: '52% production efficiency'
          },
          {
            id: 'data',
            title: 'Influencer Analytics & Insights',
            icon: 'BarChart3',
            description: 'Leverage comprehensive data for strategic influencer decisions',
            color: 'from-[#FF6B6B] to-[#45B7D1]',
            features: ['Real-time Performance Metrics', 'Audience Demographics', 'Content Analytics', 'Trend Forecasting'],
            impact: '92% better campaign decisions'
          },
          {
            id: 'customer',
            title: 'Brand Partnership Excellence',
            icon: 'Users',
            description: 'Transform your brand collaboration and partnership experience',
            color: 'from-[#45B7D1] to-[#4ECDC4]',
            features: ['Partnership Matching', 'Contract Automation', 'Performance Reporting', 'Relationship Management'],
            impact: '85% partnership satisfaction'
          }
        ]
      },
      footer: {
        services: [
          { name: 'Influencer Content Strategy', href: '/content-strategy' },
          { name: 'Brand Partnership Management', href: '/brand-partnerships' },
          { name: 'Audience Growth Solutions', href: '/audience-growth' },
          { name: 'Analytics & Reporting', href: '/analytics-reporting' }
        ],
        bookingLink: 'https://calendly.com/influencer-growth-platform/15min-strategy'
      }
    },
    
    // Gym data (same structure)
    gym: {
      name: "Fitness Business Accelerator",
      slug: "gym",
      colors: {
        primary: "#1E40AF",
        secondary: "#3B82F6",
        accent: "#60A5FA",
        background: "#EFF6FF",
        gradient1: "from-[#1E40AF] to-[#3B82F6]",
        gradient2: "from-[#3B82F6] to-[#60A5FA]",
        gradient3: "from-[#1E40AF] to-[#60A5FA]",
        textPrimary: "#1E40AF",
        textSecondary: "#6B7280"
      },
      hero: {
        title: "Scale Your Fitness Business Empire",
        subtitle: "Comprehensive digital solutions for gym owners, trainers, and fitness professionals",
        badgeText: "PARTNERED WITH 300+ FITNESS BUSINESSES",
        description: "Transform your fitness business operations with our specialized digital solutions designed specifically for gym owners, personal trainers, and fitness professionals.",
        growthOptions: [
          { value: '120%', label: 'Membership Growth', icon: 'TrendingUp', gradient: 'from-[#1E40AF] to-[#3B82F6]' },
          { value: '75%', label: 'Client Retention', icon: 'Target', gradient: 'from-[#3B82F6] to-[#60A5FA]' },
          { value: '55%', label: 'Revenue Increase', icon: 'Zap', gradient: 'from-[#1E40AF] to-[#60A5FA]' },
          { value: '90%', label: 'Online Bookings', icon: 'Sparkles', gradient: 'from-[#3B82F6] to-[#60A5FA]' }
        ],
        ctaButtons: [
          { text: 'Book Fitness Demo', variant: 'primary' },
          { text: 'Get Gym Pricing', variant: 'secondary' }
        ],
        videoUrl: "/videos/fitness-business-demo.mp4"
      },
      about: {
        intro: "Empowering fitness businesses to thrive in the digital age with comprehensive solutions for gym management, client engagement, and online growth.",
        secondaryIntro: "From membership management systems to online booking platforms and virtual training solutions, we provide complete digital transformation for fitness professionals and gym owners worldwide.",
        features: [
          { icon: 'Cpu', text: "AI Fitness Solutions", description: "AI-powered workout recommendations and client progress tracking" },
          { icon: 'Clock', text: "24/7 Gym Operations Support", description: "Round-the-clock technical assistance for fitness business operations" },
          { icon: 'Shield', text: "Secure Member Data Protection", description: "Military-grade security for client health and payment information" },
          { icon: 'TrendingUp', text: "Scalable Gym Management Solutions", description: "Grow your fitness business without technical limitations or complexity" },
          { icon: 'Zap', text: "Real-time Class & Booking Analytics", description: "Instant insights into membership trends and class performance" },
          { icon: 'Infinity', text: "Multi-location Gym Integration", description: "Seamless management across multiple fitness locations" }
        ]
      },
      socialMedia: {
        stats: [
          { 
            percentage: "88%", 
            label: "Member Engagement Rate", 
            description: "Higher fitness industry retention rates", 
            icon: 'MessageCircle', 
            color: "from-[#1E40AF] to-[#3B82F6]", 
            improvement: "+18%",
            delay: 100 
          },
          { 
            percentage: "1.8M", 
            label: "Social Media Reach", 
            description: "Monthly fitness audience engagement", 
            icon: 'Users', 
            color: "from-[#3B82F6] to-[#60A5FA]", 
            improvement: "+56%",
            delay: 200 
          },
          { 
            percentage: "134%", 
            label: "Business Revenue Growth", 
            description: "Year-over-year fitness business expansion", 
            icon: 'TrendingUp', 
            color: "from-[#1E40AF] to-[#60A5FA]", 
            improvement: "+34%",
            delay: 300 
          },
          { 
            percentage: "4.7/5", 
            label: "Client Satisfaction", 
            description: "Fitness service quality rating", 
            icon: 'Star', 
            color: "from-[#3B82F6] to-[#1E40AF]", 
            improvement: "+0.6",
            delay: 400 
          }
        ],
        platforms: [
          { name: "Instagram", icon: 'Instagram', color: "#E1306C", growth: "+98%", value: "1.5M" },
          { name: "Facebook", icon: 'Facebook', color: "#1877F2", growth: "+67%", value: "1.2M" },
          { name: "TikTok", icon: 'Youtube', color: "#FF0050", growth: "+145%", value: "980K" },
          { name: "YouTube", icon: 'Youtube', color: "#FF0000", growth: "+78%", value: "750K" }
        ],
        campaigns: [
          {
            id: 1,
            src: "/api/placeholder/600/800",
            title: "Fitness Challenge Campaign",
            description: "30-day fitness transformation reaching 1.8M fitness enthusiasts",
            platform: "Instagram",
            metrics: { engagement: "16.8%", reach: "1.8M", conversions: "8.5K" }
          },
          {
            id: 2,
            src: "/api/placeholder/600/800",
            title: "Gym Membership Drive",
            description: "Targeted local membership campaign with 72% conversion improvement",
            platform: "Facebook",
            metrics: { engagement: "12.3%", reach: "1.2M", conversions: "6.2K" }
          },
          {
            id: 3,
            src: "/api/placeholder/600/800",
            title: "Workout Content Series",
            description: "Video workout series generating 134% higher engagement rates",
            platform: "YouTube", 
            metrics: { engagement: "21.4%", reach: "950K", conversions: "4.8K" }
          }
        ]
      },
      businessTransformation: {
        areas: [
          {
            id: 'digital',
            title: 'Gym Digital Transformation',
            icon: 'Smartphone',
            description: 'Modernize your fitness operations with cutting-edge digital gym solutions',
            color: 'from-[#1E40AF] to-[#3B82F6]',
            features: ['Online Booking Systems', 'Member Management Apps', 'Virtual Class Platforms', 'Digital Marketing Tools'],
            impact: '68% operational efficiency'
          },
          {
            id: 'process',
            title: 'Fitness Process Optimization',
            icon: 'Zap',
            description: 'Streamline gym operations and member experience workflows',
            color: 'from-[#3B82F6] to-[#60A5FA]',
            features: ['Class Scheduling Automation', 'Member Check-in Systems', 'Payment Processing', 'Attendance Tracking'],
            impact: '48% administrative cost reduction'
          },
          {
            id: 'data',
            title: 'Fitness Analytics & Insights',
            icon: 'BarChart3',
            description: 'Leverage comprehensive gym data for strategic business decisions',
            color: 'from-[#1E40AF] to-[#60A5FA]',
            features: ['Membership Analytics', 'Class Performance Tracking', 'Revenue Reporting', 'Client Progress Monitoring'],
            impact: '87% better business decisions'
          },
          {
            id: 'customer',
            title: 'Member Experience Enhancement',
            icon: 'Users',
            description: 'Transform your gym member experience and retention rates',
            color: 'from-[#60A5FA] to-[#3B82F6]',
            features: ['Personalized Workout Plans', 'Progress Tracking Apps', 'Community Features', 'Feedback Systems'],
            impact: '76% member satisfaction increase'
          }
        ]
      },
      footer: {
        services: [
          { name: 'Gym Management Software', href: '/gym-management' },
          { name: 'Member Portal Solutions', href: '/member-portal' },
          { name: 'Online Booking System', href: '/online-booking' },
          { name: 'Fitness Marketing Tools', href: '/fitness-marketing' }
        ],
        bookingLink: 'https://calendly.com/fitness-business-solutions/15min-gym-consultation'
      }
    }
  };
  
  // Domain-specific icons mapping
  export const domainIcons = {
    agriculture: {
      Cpu: '🌾',
      Clock: '⏰',
      Shield: '🛡️',
      TrendingUp: '📈',
      Zap: '⚡',
      Infinity: '♾️',
      MessageCircle: '💬',
      Users: '👥',
      Star: '⭐',
      Smartphone: '📱',
      BarChart3: '📊'
    },
    influencer: {
      Cpu: '📱',
      Clock: '⏰',
      Shield: '🛡️',
      TrendingUp: '📈',
      Zap: '⚡',
      Infinity: '♾️',
      MessageCircle: '💬',
      Users: '👥',
      Star: '⭐',
      Smartphone: '📱',
      BarChart3: '📊'
    },
    gym: {
      Cpu: '🏋️',
      Clock: '⏰',
      Shield: '🛡️',
      TrendingUp: '📈',
      Zap: '⚡',
      Infinity: '♾️',
      MessageCircle: '💬',
      Users: '👥',
      Star: '⭐',
      Smartphone: '📱',
      BarChart3: '📊'
    }
  };
  
  // Export helper function for hex to RGB conversion
  export const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
  };
  