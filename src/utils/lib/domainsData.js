import { 
    Phone, Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, Target, Zap, TrendingUp, 
    Cpu, Clock, Shield, Infinity, ExternalLink, Award, CheckCircle, Rocket, Globe, 
    Users, Share2, MessageCircle, Eye, Instagram, Facebook, Twitter, Linkedin, Youtube, 
    Star, Smartphone, BarChart3, DollarSign
  } from 'lucide-react';
  
  // Base structure for all pages
  // Use icon names as strings instead of component functions for serialization
  const baseGrowthOptions = [
    { key: 'revenue', label: 'Revenue Growth', icon: 'TrendingUp' },
    { key: 'users', label: 'User Engagement', icon: 'Target' },
    { key: 'efficiency', label: 'Efficiency Gain', icon: 'Zap' },
    { key: 'market', label: 'Market Reach', icon: 'Sparkles' }
  ];
  
  const baseFeatures = [
    { key: 'ai', icon: 'Cpu', text: "AI-Powered Solutions" },
    { key: 'support', icon: 'Clock', text: "24/7 Support" },
    { key: 'security', icon: 'Shield', text: "Enterprise Security" },
    { key: 'scale', icon: 'TrendingUp', text: "Scalable Solutions" },
    { key: 'analytics', icon: 'Zap', text: "Real-time Analytics" },
    { key: 'integration', icon: 'Infinity', text: "Custom Integration" }
  ];
  
  const baseSocialPlatforms = [
    { name: "Instagram", icon: 'Instagram', growth: "+89%", value: "1.2M" },
    { name: "Facebook", icon: 'Facebook', growth: "+45%", value: "850K" },
    { name: "Twitter", icon: 'Twitter', growth: "+67%", value: "450K" },
    { name: "LinkedIn", icon: 'Linkedin', growth: "+112%", value: "320K" },
    { name: "YouTube", icon: 'Youtube', growth: "+156%", value: "980K" }
  ];
  
  const baseTransformationAreas = [
    {
      id: 'digital',
      title: 'Digital Transformation',
      icon: 'Smartphone',
      description: 'Modernize your operations with cutting-edge digital solutions',
      features: ['Cloud Migration', 'Automation Systems', 'Digital Workflows', 'Mobile Solutions'],
      impact: '65% efficiency boost'
    },
    {
      id: 'process',
      title: 'Process Optimization',
      icon: 'Zap',
      description: 'Streamline operations and eliminate bottlenecks',
      features: ['Workflow Analysis', 'Bottleneck Removal', 'Quality Control', 'Continuous Improvement'],
      impact: '45% cost reduction'
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      icon: 'BarChart3',
      description: 'Leverage data for strategic decision making',
      features: ['Real-time Analytics', 'Predictive Insights', 'Dashboard Reporting', 'Data Visualization'],
      impact: '89% better decisions'
    },
    {
      id: 'customer',
      title: 'Customer Experience',
      icon: 'Users',
      description: 'Transform customer interactions and satisfaction',
      features: ['360° Customer View', 'Personalization', 'Support Automation', 'Feedback Systems'],
      impact: '72% satisfaction increase'
    }
  ];
  
  // Different page configurations by slug
  export const pagesConfig = {
    // Default/ Agriculture configuration
    agriculture: {
      name: 'Agriculture Transformation',
      slug: 'agriculture',
      colors: {
        primaryFrom: '#A2E535', // Green
        primaryTo: '#16A34A',
        secondaryFrom: '#15803D',
        accent: '#22C55E',
        backgroundFrom: '#f8ffe8',
        backgroundTo: '#e8f5e8',
        textGradientFrom: '#16A34A',
        textGradientTo: '#15803D'
      },
      hero: {
        title: 'Transform Agriculture',
        subtitle: 'Boost crop yields and optimize farm operations with AI-powered solutions',
        description: 'Boost crop yields and optimize farm operations with AI-powered solutions',
        videoPoster: '/api/placeholder/600/400',
        videoSrc: '/videos/agriculture-demo.mp4',
        ctaPrimary: 'Get Free Consultation',
        ctaSecondary: 'Watch Demo',
        growthOptions: [
          { key: 'revenue', value: '35%', label: 'Crop Yield', icon: 'TrendingUp' },
          { key: 'users', value: '67%', label: 'Farm Efficiency', icon: 'Target' },
          { key: 'efficiency', value: '52%', label: 'Resource Optimization', icon: 'Zap' },
          { key: 'market', value: '89%', label: 'Market Reach', icon: 'Sparkles' }
        ]
      },
      growthStats: {
        revenue: { value: '35%', description: 'Crop yield increase' },
        users: { value: '67%', description: 'Farm efficiency gain' },
        efficiency: { value: '52%', description: 'Resource optimization' },
        market: { value: '89%', description: 'Market reach expansion' }
      },
      about: {
        badgeText: 'LEADING AGRITECH SINCE 2018',
        mainTitle: 'Revolutionizing Agriculture',
        mainDescription: 'We empower farmers with cutting-edge technology to maximize yields, minimize waste, and ensure sustainable practices.',
        image: '/images/agriculture/about-hero.jpg',
        introTitle: 'Sustainable Farming Solutions',
        introDescription: [
          'Smart farming systems using IoT sensors for real-time monitoring',
          'AI-driven crop management and predictive analytics',
          'Automated irrigation and climate control systems'
        ],
        milestones: [
          { year: '2018', title: 'Agritech Founded', description: 'Started with precision farming vision' },
          { year: '2020', title: 'IoT Integration', description: 'Launched smart sensor network' },
          { year: '2022', title: 'AI Analytics', description: 'Introduced crop prediction AI' },
          { year: '2024', title: 'Global Reach', description: 'Serving 50+ countries' }
        ]
      },
      socialMedia: {
        headerTag: 'AGRITECH SOCIAL EXCELLENCE',
        mainTitle: 'Digital Farm Community',
        mainDescription: 'Engage farmers, share knowledge, and build sustainable agriculture networks through social platforms.',
        stats: [
          { percentage: '87%', label: 'Engagement Rate', description: 'Farmer community interactions', improvement: '+12%' },
          { percentage: '2.3M', label: 'Total Reach', description: 'Agricultural content exposure', improvement: '+45%' },
          { percentage: '156%', label: 'Growth Rate', description: 'Farm network expansion', improvement: '+67%' }
        ],
        campaigns: [
          {
            id: 1,
            title: 'Smart Farming Campaign',
            description: 'IoT sensor adoption program reaching 2M+ farmers',
            platform: 'Instagram',
            metrics: { engagement: '12.5%', reach: '2.3M', conversions: '15K' },
            image: '/api/placeholder/600/800'
          },
          {
            id: 2,
            title: 'Crop Analytics Launch',
            description: 'AI prediction tools for 45% better yield planning',
            platform: 'Facebook',
            metrics: { engagement: '8.7%', reach: '1.8M', conversions: '12K' },
            image: '/api/placeholder/600/800'
          }
        ]
      },
      transformation: {
        headerTag: 'AGRICULTURE TRANSFORMATION',
        mainTitle: 'Modernize Your Farm Operations',
        mainDescription: 'Transform traditional farming into smart, sustainable agriculture with our comprehensive solutions.',
        caseStudies: [
          {
            company: 'GreenFields Farm',
            industry: 'Agriculture',
            challenge: 'Manual irrigation and monitoring',
            solution: 'IoT sensors & AI analytics',
            results: ['156% yield increase', '65% water savings', '89% labor efficiency'],
            timeline: '6 months'
          }
        ]
      },
      features: baseFeatures.map(f => ({
        ...f,
        description: f.text.includes('AI') ? 'AI-driven crop monitoring' : 
                    f.text.includes('Support') ? '24/7 farm operations support' :
                    f.text.includes('Security') ? 'Secure farm data protection' :
                    f.text.includes('Analytics') ? 'Real-time farm analytics' : 'Custom farm solutions'
      })),
      platforms: baseSocialPlatforms,
      transformationAreas: baseTransformationAreas.map(area => ({
        ...area,
        description: area.id === 'digital' ? 'Digitize farm operations with IoT and mobile apps' :
                     area.id === 'process' ? 'Optimize farming processes and resource allocation' :
                     area.id === 'data' ? 'Leverage farm data for better decision making' :
                     'Improve farmer community engagement and support'
      })),
      cta: {
        primary: 'Start Your Transformation',
        secondary: 'Schedule Farm Demo'
      }
    },
  
    // Gym configuration
    gym: {
      name: 'Fitness Business Transformation',
      slug: 'gym',
      colors: {
        primaryFrom: '#F97316', // Orange
        primaryTo: '#EA580C',
        secondaryFrom: '#C2410C',
        accent: '#FB923C',
        backgroundFrom: '#fff7ed',
        backgroundTo: '#fed7aa',
        textGradientFrom: '#EA580C',
        textGradientTo: '#C2410C'
      },
      hero: {
        title: 'Transform Your Fitness Business',
        subtitle: 'Engage clients, streamline operations, and grow revenue with digital fitness solutions',
        description: 'Engage clients, streamline operations, and grow revenue with digital fitness solutions',
        videoPoster: '/api/placeholder/600/400',
        videoSrc: '/videos/gym-demo.mp4',
        ctaPrimary: 'Start Free Trial',
        ctaSecondary: 'Book Demo',
        growthOptions: [
          { key: 'revenue', value: '45%', label: 'Membership Growth', icon: 'TrendingUp' },
          { key: 'users', value: '78%', label: 'Client Retention', icon: 'Target' },
          { key: 'efficiency', value: '63%', label: 'Operational Efficiency', icon: 'Zap' },
          { key: 'market', value: '92%', label: 'Online Presence', icon: 'Sparkles' }
        ]
      },
      growthStats: {
        revenue: { value: '45%', description: 'Membership growth' },
        users: { value: '78%', description: 'Client retention rate' },
        efficiency: { value: '63%', description: 'Operational efficiency' },
        market: { value: '92%', description: 'Online presence expansion' }
      },
      about: {
        badgeText: 'FITNESS INNOVATION SINCE 2018',
        mainTitle: 'Revolutionizing Fitness Industry',
        mainDescription: 'We empower gyms and trainers with cutting-edge technology to enhance client experiences and business growth.',
        image: '/images/gym/about-hero.jpg',
        introTitle: 'Digital Fitness Solutions',
        introDescription: [
          'Mobile workout tracking and progress monitoring',
          'Virtual training platforms and community building',
          'Automated membership and billing systems',
          'AI-powered personalized workout plans'
        ],
        milestones: [
          { year: '2018', title: 'FitnessTech Founded', description: 'Started with mobile fitness vision' },
          { year: '2020', title: 'App Launch', description: 'Released first fitness tracking app' },
          { year: '2022', title: 'AI Integration', description: 'Introduced personalized training AI' },
          { year: '2024', title: 'Global Expansion', description: 'Serving 10,000+ gyms worldwide' }
        ]
      },
      socialMedia: {
        headerTag: 'FITNESS SOCIAL EXCELLENCE',
        mainTitle: 'Build Fitness Community',
        mainDescription: 'Create engaging fitness communities, showcase transformations, and drive membership growth through social platforms.',
        stats: [
          { percentage: '92%', label: 'Engagement Rate', description: 'Fitness community interactions', improvement: '+18%' },
          { percentage: '3.1M', label: 'Total Reach', description: 'Fitness content exposure', improvement: '+56%' },
          { percentage: '189%', label: 'Growth Rate', description: 'Gym network expansion', improvement: '+89%' }
        ],
        campaigns: [
          {
            id: 1,
            title: 'Fitness Challenge Campaign',
            description: '30-day transformation challenge reaching 3M+ fitness enthusiasts',
            platform: 'Instagram',
            metrics: { engagement: '18.2%', reach: '3.1M', conversions: '25K' },
            image: '/api/placeholder/600/800'
          },
          {
            id: 2,
            title: 'Virtual Training Launch',
            description: 'Online workout programs with 67% retention rate',
            platform: 'YouTube',
            metrics: { engagement: '23.4%', reach: '2.8M', conversions: '18K' },
            image: '/api/placeholder/600/800'
          }
        ]
      },
      transformation: {
        headerTag: 'FITNESS BUSINESS TRANSFORMATION',
        mainTitle: 'Digital Gym Revolution',
        mainDescription: 'Transform your gym from traditional to digital-first with our comprehensive fitness business solutions.',
        caseStudies: [
          {
            company: 'Peak Fitness',
            industry: 'Fitness Centers',
            challenge: 'Low online engagement and membership retention',
            solution: 'Digital transformation & mobile app integration',
            results: ['189% membership growth', '72% retention improvement', '3.5x online revenue'],
            timeline: '4 months'
          }
        ]
      },
      features: baseFeatures.map(f => ({
        ...f,
        description: f.text.includes('AI') ? 'AI-powered workout recommendations' : 
                    f.text.includes('Support') ? '24/7 member support platform' :
                    f.text.includes('Security') ? 'Secure member data protection' :
                    f.text.includes('Analytics') ? 'Real-time gym performance analytics' : 'Custom fitness solutions'
      })),
      platforms: baseSocialPlatforms,
      transformationAreas: baseTransformationAreas.map(area => ({
        ...area,
        description: area.id === 'digital' ? 'Digitize gym operations with mobile apps and online booking' :
                     area.id === 'process' ? 'Optimize gym operations and member management' :
                     area.id === 'data' ? 'Leverage member data for personalized fitness programs' :
                     'Improve member engagement and community building'
      })),
      cta: {
        primary: 'Start Fitness Transformation',
        secondary: 'Schedule Gym Demo'
      }
    },
  
    // Add more slugs like healthcare, education, etc.
    default: {
      name: 'Business Transformation',
      slug: 'default',
      colors: {
        primaryFrom: '#A2E535',
        primaryTo: '#16A34A',
        secondaryFrom: '#15803D',
        accent: '#22C55E',
        backgroundFrom: '#f8ffe8',
        backgroundTo: '#e8f5e8',
        textGradientFrom: '#16A34A',
        textGradientTo: '#15803D'
      },
      // ... default values
    }
  };
  
  // Convert pagesConfig object to array format for domainsData
  export const domainsData = Object.values(pagesConfig).filter(config => config.slug !== 'default');
  
  // Helper function to get domain icons
  export const getDomainIcons = (slug) => {
    const iconMap = {
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
      }
    };
    
    return iconMap[slug] || iconMap.agriculture; // Default to agriculture icons
  };
  
  export default pagesConfig;
  