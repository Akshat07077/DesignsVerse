// data/landingSections.ts
export interface ColorTheme {
    primaryGradient: string;      // Main button backgrounds: "from-red-600 to-orange-600"
    secondaryGradient: string;    // Text gradients: "from-red-400 to-orange-400"
    backgroundGradient: string;   // Section backgrounds: "from-gray-900 to-black"
    accentColor: string;          // Icons, highlights: "red"
    darkAccent: string;           // Dark variations: "from-red-800 to-orange-800"
    lightAccent: string;          // Light variations: "from-red-300 to-orange-300"
    borderColor: string;          // Borders: "red-500"
  }
  
  export interface SectionData {
    id: string;
    slug: string;
    title: string;
    description: string;
    colors: ColorTheme;
    hero: {
      title: string;
      subtitle: string;
      stats: Array<{ label: string; value: string }>;
      ctaPrimary: string;
      ctaSecondary: string;
      videoPlaceholder?: string;
      backgroundImage?: string;
    };
    growth: {
      title: string;
      description: string;
      timeline: Array<{ year: string; title: string; description: string }>;
      cta: string;
      socialPlatforms: Array<{
        name: string;
        icon: string;
        followers: string;
        growth: string;
        platformColor: string;  // Each platform gets its own color
      }>;
    };
    socialFuture: {
      title: string;
      description: string;
      socialStats: Array<{
        platform: string;
        followers: string;
        growth: string;
        statColor: string;  // Each stat gets themed color
      }>;
      testimonial: {
        quote: string;
        author: string;
        role: string;
      };
      futurePlans: Array<{
        title: string;
        description: string;
        icon: string;
        planColor: string;  // Each plan gets themed color
      }>;
    };
    cta: {
      title: string;
      description: string;
      formFields: Array<{ name: string; placeholder: string; type: string }>;
      ctaButton: string;
      trustIndicators: Array<string>;
    };
  }
  
  const colorThemes: Record<string, ColorTheme> = {
    'gym-owners': {
      primaryGradient: 'from-red-600 via-red-700 to-red-900',
      secondaryGradient: 'from-white via-red-100 to-orange-200',
      backgroundGradient: 'from-black via-red-950 to-black',
      accentColor: 'red',
      darkAccent: 'from-red-800 via-red-900 to-black',
      lightAccent: 'from-white via-red-50 to-orange-50',
      borderColor: 'red-500'
    },
  
    'astrologers': {
      primaryGradient: 'from-violet-600 via-purple-700 to-indigo-800',
      secondaryGradient: 'from-white via-purple-100 to-violet-200',
      backgroundGradient: 'from-indigo-950 via-purple-950 to-black',
      accentColor: 'violet',
      darkAccent: 'from-purple-800 via-violet-900 to-indigo-950',
      lightAccent: 'from-white via-purple-50 to-violet-50',
      borderColor: 'violet-500'
    },
  
    'influencers': {
      primaryGradient: 'from-pink-500 via-rose-500 to-fuchsia-600',
      secondaryGradient: 'from-white via-pink-50 to-rose-100',
      backgroundGradient: 'from-white via-pink-50 to-rose-50',
      accentColor: 'fuchsia',
      darkAccent: 'from-pink-600 via-rose-600 to-fuchsia-700',
      lightAccent: 'from-white via-pink-50 to-rose-50',
      borderColor: 'fuchsia-500'
    },
  
    'coaches': {
      primaryGradient: 'from-cyan-500 via-blue-600 to-teal-600',
      secondaryGradient: 'from-white via-cyan-100 to-blue-200',
      backgroundGradient: 'from-slate-950 via-blue-950 to-cyan-950',
      accentColor: 'cyan',
      darkAccent: 'from-blue-700 via-cyan-800 to-teal-800',
      lightAccent: 'from-white via-cyan-50 to-blue-50',
      borderColor: 'cyan-500'
    },
  
    'consultants': {
      primaryGradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      secondaryGradient: 'from-white via-emerald-100 to-teal-200',
      backgroundGradient: 'from-slate-950 via-emerald-950 to-teal-950',
      accentColor: 'emerald',
      darkAccent: 'from-emerald-700 via-teal-800 to-cyan-800',
      lightAccent: 'from-white via-emerald-50 to-teal-50',
      borderColor: 'emerald-500'
    }
  };
  
  
  export const landingSections: SectionData[] = [
    {
      id: "gym-owners",
      slug: "gym-owners",
      title: "Transform Your Gym Business",
      description: "Scale your gym from local to legendary with proven strategies",
      colors: colorThemes['gym-owners'],
      hero: {
        title: "Scale Your Gym\nBusiness 10X",
        subtitle: "Join 500+ gym owners who transformed their businesses",
        stats: [
          { label: "Active Gyms", value: "500+" },
          { label: "Revenue Growth", value: "300%+" },
          { label: "New Members", value: "25K+" }
        ],
        ctaPrimary: "Start Your Free Strategy Session",
        ctaSecondary: "Watch Gym Success Stories",
        videoPlaceholder: "/gym-owners-video.jpg",
        backgroundImage: "/gym-hero-bg.jpg"
      },
      growth: {
        title: "Real Business Growth",
        description: "From local studios to fitness empires - watch the transformation",
        timeline: [
          { year: "2020", title: "Foundation", description: "50 gym owners joined our network" },
          { year: "2022", title: "Expansion", description: "200+ gyms using our systems" },
          { year: "2024", title: "Dominance", description: "500+ gyms, $10M+ combined revenue" }
        ],
        cta: "See Gym Success Stories",
        socialPlatforms: [
          {
            name: "Instagram",
            icon: "instagram",
            followers: "18K",
            growth: "+25%",
            platformColor: "from-purple-600 via-pink-600 to-red-600"
          },
          {
            name: "Facebook Groups",
            icon: "facebook",
            followers: "12K",
            growth: "+19%",
            platformColor: "from-blue-600 to-indigo-600"
          },
          {
            name: "LinkedIn Network", 
            icon: "linkedin",
            followers: "8K",
            growth: "+32%",
            platformColor: "from-blue-700 to-blue-500"
          }
        ]
      },
      socialFuture: {
        title: "Gym Community & Future Expansion",
        description: "Join the largest network of successful gym owners worldwide",
        socialStats: [
          { 
            platform: "Instagram Business Community", 
            followers: "18K", 
            growth: "+25% this month", 
            statColor: "purple" 
          },
          { 
            platform: "Gym Owner Facebook", 
            followers: "12K", 
            growth: "+19% this month", 
            statColor: "blue" 
          },
          { 
            platform: "LinkedIn Professionals", 
            followers: "8K", 
            growth: "+32% this month", 
            statColor: "indigo" 
          }
        ],
        testimonial: {
          quote: "This platform 10X'd my gym revenue in just 18 months. The strategies and community support are unmatched.",
          author: "Raj Patel",
          role: "Gym Owner, Mumbai • 18 months member"
        },
        futurePlans: [
          { 
            title: "Franchise Network", 
            description: "100+ gym franchise opportunities by 2026", 
            icon: "network", 
            planColor: "red" 
          },
          { 
            title: "Gym Tech Suite", 
            description: "AI-powered membership management", 
            icon: "ai", 
            planColor: "orange" 
          },
          { 
            title: "Global Expansion", 
            description: "International gym owner partnerships", 
            icon: "globe", 
            planColor: "yellow" 
          }
        ]
      },
      cta: {
        title: "Ready to Scale Your Gym\n10X This Year?",
        description: "Book your FREE 45-minute strategy session with our gym business experts. Get your personalized growth roadmap.",
        formFields: [
          { name: "name", placeholder: "Gym Owner Name", type: "text" },
          { name: "email", placeholder: "Business Email", type: "email" },
          { name: "gymName", placeholder: "Gym Name", type: "text" },
          { name: "phone", placeholder: "Phone Number", type: "tel" }
        ],
        ctaButton: "Book My Gym Strategy Session",
        trustIndicators: [
          "🏋️ 300% Average Revenue Growth", 
          "⭐ 4.9/5 Gym Owner Rating", 
          "📈 Proven Business Systems", 
          "🤝 500+ Successful Gyms"
        ]
      }
    },
  
    {
      id: "astrologers",
      slug: "astrologers",
      title: "Elevate Your Astrology Practice",
      description: "Build your digital presence and attract premium global clients",
      colors: colorThemes['astrologers'],
      hero: {
        title: "Unlock Global\nAstrology Success",
        subtitle: "Join 300+ astrologers serving clients in 50+ countries",
        stats: [
          { label: "Global Clients", value: "10K+" },
          { label: "Daily Readings", value: "500+" },
          { label: "Premium Astrologers", value: "300+" }
        ],
        ctaPrimary: "Start Your Free Astrology Setup",
        ctaSecondary: "Watch Astrologer Success Stories",
        videoPlaceholder: "/astrology-video.jpg",
        backgroundImage: "/astrology-hero-bg.jpg"
      },
      growth: {
        title: "From Local to Global Readings",
        description: "Transform your practice from neighborhood consultations to worldwide spiritual guidance",
        timeline: [
          { year: "2021", title: "Spiritual Beginnings", description: "20 astrologers started digital journey" },
          { year: "2023", title: "Global Platform", description: "100+ astrologers serving international clients" },
          { year: "2024", title: "Spiritual Empire", description: "300+ astrologers, 50+ countries reached" }
        ],
        cta: "See Astrology Success Stories",
        socialPlatforms: [
          {
            name: "Instagram Spiritual",
            icon: "instagram",
            followers: "25K",
            growth: "+38%",
            platformColor: "from-purple-600 via-pink-600 to-red-600"
          },
          {
            name: "YouTube Channel",
            icon: "youtube",
            followers: "15K",
            growth: "+42%",
            platformColor: "from-red-600 via-pink-500 to-red-400"
          },
          {
            name: "Facebook Community",
            icon: "facebook",
            followers: "10K",
            growth: "+28%",
            platformColor: "from-indigo-600 to-purple-600"
          }
        ]
      },
      socialFuture: {
        title: "Global Spiritual Community & Vision",
        description: "Join the world's largest network of professional astrologers and spiritual guides",
        socialStats: [
          { 
            platform: "Instagram Spiritual Reach", 
            followers: "25K", 
            growth: "+38% this month", 
            statColor: "purple" 
          },
          { 
            platform: "YouTube Astrology Views", 
            followers: "15K", 
            growth: "+42% this month", 
            statColor: "pink" 
          },
          { 
            platform: "Facebook Spiritual Network", 
            followers: "10K", 
            growth: "+28% this month", 
            statColor: "indigo" 
          }
        ],
        testimonial: {
          quote: "From local readings to global consultations, this platform completely transformed my astrology career. Now I help people worldwide.",
          author: "Priya Sharma",
          role: "Vedic Astrologer, Delhi • 2 years member"
        },
        futurePlans: [
          { 
            title: "AI Horoscope Engine", 
            description: "Advanced AI-powered personalized readings", 
            icon: "brain", 
            planColor: "purple" 
          },
          { 
            title: "Global Astrology Academy", 
            description: "Professional certification and training programs", 
            icon: "graduation", 
            planColor: "pink" 
          },
          { 
            title: "Spiritual Mobile App", 
            description: "24/7 astrology consultations on demand", 
            icon: "phone", 
            planColor: "indigo" 
          }
        ]
      },
      cta: {
        title: "Ready to Take Your Astrology\nPractice Global?",
        description: "Book your FREE 30-minute digital strategy session. Get your complete online presence roadmap for attracting premium clients worldwide.",
        formFields: [
          { name: "name", placeholder: "Astrologer Name", type: "text" },
          { name: "email", placeholder: "Professional Email", type: "email" },
          { name: "specialty", placeholder: "Your Specialty (Vedic/Numerology/etc)", type: "text" },
          { name: "phone", placeholder: "Phone Number", type: "tel" }
        ],
        ctaButton: "Book My Astrology Growth Session",
        trustIndicators: [
          "🌟 98% Client Satisfaction", 
          "⭐ 4.9/5 Astrologer Rating", 
          "🌍 Global Client Reach", 
          "🔮 Authentic Spiritual Guidance"
        ]
      }
    },
  
    // ... Add remaining sections (influencers, coaches, consultants) with their unique color themes
    // I'll show the pattern with one more for brevity
  
    {
      id: "influencers",
      slug: "influencers",
      title: "Monetize Your Influence Empire",
      description: "Turn your social media passion into a 6-figure personal brand business",
      colors: colorThemes['influencers'],
      hero: {
        title: "Build Your\nInfluence Empire",
        subtitle: "Join 1,000+ creators earning 6-figures from their personal brand",
        stats: [
          { label: "Active Creators", value: "1K+" },
          { label: "Brand Deals", value: "500+" },
          { label: "Monthly Revenue", value: "$2M+" }
        ],
        ctaPrimary: "Start Your Monetization Journey",
        ctaSecondary: "Watch Influencer Success Stories",
        videoPlaceholder: "/influencer-video.jpg",
        backgroundImage: "/influencer-hero-bg.jpg"
      },
      growth: {
        title: "From Follower to 6-Figure Creator",
        description: "Transform your social media presence into a profitable business empire",
        timeline: [
          { year: "2019", title: "Creator Beginnings", description: "100 micro-influencers started monetizing" },
          { year: "2022", title: "Brand Partnerships", description: "500+ creator-brand collaborations" },
          { year: "2024", title: "Creator Economy", description: "1,000+ creators, $2M+ monthly revenue" }
        ],
        cta: "See Creator Success Stories",
        socialPlatforms: [
          {
            name: "Instagram Creators",
            icon: "instagram",
            followers: "45K",
            growth: "+48%",
            platformColor: "from-pink-500 via-rose-500 to-pink-600"
          },
          {
            name: "TikTok Influencers",
            icon: "tiktok",
            followers: "35K",
            growth: "+62%",
            platformColor: "from-black via-gray-800 to-black"
          },
          {
            name: "YouTube Partners",
            icon: "youtube",
            followers: "22K",
            growth: "+39%",
            platformColor: "from-red-600 via-pink-500 to-red-400"
          }
        ]
      },
      socialFuture: {
        title: "Creator Network & Future Vision",
        description: "Join the revolution of creators building sustainable personal brand empires",
        socialStats: [
          { 
            platform: "Instagram Creator Community", 
            followers: "45K", 
            growth: "+48% this month", 
            statColor: "pink" 
          },
          { 
            platform: "TikTok Creator Network", 
            followers: "35K", 
            growth: "+62% this month", 
            statColor: "black" 
          },
          { 
            platform: "YouTube Partner Program", 
            followers: "22K", 
            growth: "+39% this month", 
            statColor: "red" 
          }
        ],
        testimonial: {
          quote: "I went from 10K followers to 100K+ and now earn consistently from brand deals and my own products. This platform made it possible.",
          author: "Aisha Khan",
          role: "Fashion & Lifestyle Influencer • 15 months member"
        },
        futurePlans: [
          { 
            title: "Creator NFT Marketplace", 
            description: "Own your digital collectibles and exclusive content", 
            icon: "nft", 
            planColor: "pink" 
          },
          { 
            title: "Live Commerce Platform", 
            description: "Real-time shopping experiences with your audience", 
            icon: "live", 
            planColor: "rose" 
          },
          { 
            title: "AI Content Studio", 
            description: "Smart content creation and analytics tools", 
            icon: "ai", 
            planColor: "purple" 
          }
        ]
      },
      cta: {
        title: "Ready to Turn Your Influence\nInto a 6-Figure Business?",
        description: "Book your FREE 30-minute monetization strategy session. Get your complete creator roadmap to consistent revenue streams.",
        formFields: [
          { name: "name", placeholder: "Your Name", type: "text" },
          { name: "email", placeholder: "Email Address", type: "email" },
          { name: "instagram", placeholder: "@ Your Instagram Handle", type: "text" },
          { name: "niche", placeholder: "Your Niche (Fashion/Tech/Fitness)", type: "text" }
        ],
        ctaButton: "Book My Creator Revenue Session",
        trustIndicators: [
          "💰 $2M+ Creator Revenue", 
          "⭐ 4.8/5 Creator Rating", 
          "🤝 500+ Brand Partnerships", 
          "📈 Advanced Analytics Dashboard"
        ]
      }
    },

    {
      id: "coaches",
      slug: "coaches",
      title: "Scale Your Coaching Business",
      description: "Transform your coaching practice into a thriving business empire",
      colors: colorThemes['coaches'],
      hero: {
        title: "Build Your\nCoaching Empire",
        subtitle: "Join 800+ coaches building 6-figure coaching businesses",
        stats: [
          { label: "Active Coaches", value: "800+" },
          { label: "Client Success Rate", value: "94%" },
          { label: "Monthly Revenue", value: "$1.5M+" }
        ],
        ctaPrimary: "Start Your Free Coaching Strategy Session",
        ctaSecondary: "Watch Coach Success Stories",
        videoPlaceholder: "/coaches-video.jpg",
        backgroundImage: "/coaches-hero-bg.jpg"
      },
      growth: {
        title: "From Solo Coach to Business Leader",
        description: "Transform your coaching practice from one-on-one sessions to scalable business systems",
        timeline: [
          { year: "2020", title: "Coaching Beginnings", description: "50 coaches started their journey" },
          { year: "2022", title: "Business Systems", description: "300+ coaches using our proven systems" },
          { year: "2024", title: "Coaching Empire", description: "800+ coaches, $1.5M+ monthly revenue" }
        ],
        cta: "See Coaching Success Stories",
        socialPlatforms: [
          {
            name: "LinkedIn Coaches",
            icon: "linkedin",
            followers: "28K",
            growth: "+35%",
            platformColor: "from-blue-600 to-cyan-600"
          },
          {
            name: "YouTube Channel",
            icon: "youtube",
            followers: "18K",
            growth: "+42%",
            platformColor: "from-red-600 via-pink-500 to-red-400"
          },
          {
            name: "Facebook Community",
            icon: "facebook",
            followers: "15K",
            growth: "+28%",
            platformColor: "from-blue-700 to-blue-500"
          }
        ]
      },
      socialFuture: {
        title: "Coaching Community & Future Vision",
        description: "Join the world's largest network of successful coaches building sustainable businesses",
        socialStats: [
          { 
            platform: "LinkedIn Coach Network", 
            followers: "28K", 
            growth: "+35% this month", 
            statColor: "blue" 
          },
          { 
            platform: "YouTube Coaching Views", 
            followers: "18K", 
            growth: "+42% this month", 
            statColor: "cyan" 
          },
          { 
            platform: "Facebook Coach Community", 
            followers: "15K", 
            growth: "+28% this month", 
            statColor: "teal" 
          }
        ],
        testimonial: {
          quote: "I went from struggling solo coach to running a 6-figure coaching business in just 12 months. The systems and support are incredible.",
          author: "Michael Chen",
          role: "Business Coach, San Francisco • 12 months member"
        },
        futurePlans: [
          { 
            title: "AI Coaching Assistant", 
            description: "Smart tools for client management and scaling", 
            icon: "ai", 
            planColor: "cyan" 
          },
          { 
            title: "Coaching Certification", 
            description: "Professional certification and training programs", 
            icon: "certificate", 
            planColor: "blue" 
          },
          { 
            title: "Global Coach Network", 
            description: "International coaching partnerships", 
            icon: "network", 
            planColor: "teal" 
          }
        ]
      },
      cta: {
        title: "Ready to Scale Your Coaching\nBusiness to 6-Figures?",
        description: "Book your FREE 45-minute business strategy session. Get your complete roadmap to building a scalable coaching empire.",
        formFields: [
          { name: "name", placeholder: "Coach Name", type: "text" },
          { name: "email", placeholder: "Professional Email", type: "email" },
          { name: "specialty", placeholder: "Your Coaching Specialty", type: "text" },
          { name: "phone", placeholder: "Phone Number", type: "tel" }
        ],
        ctaButton: "Book My Coaching Growth Session",
        trustIndicators: [
          "📈 94% Client Success Rate", 
          "⭐ 4.9/5 Coach Rating", 
          "💼 Proven Business Systems", 
          "🤝 800+ Successful Coaches"
        ]
      }
    },

    {
      id: "consultants",
      slug: "consultants",
      title: "Automate Your Consulting Business",
      description: "Scale your consulting practice with proven systems and automation",
      colors: colorThemes['consultants'],
      hero: {
        title: "Scale Your\nConsulting Empire",
        subtitle: "Join 600+ consultants automating their practices for 10X growth",
        stats: [
          { label: "Active Consultants", value: "600+" },
          { label: "Revenue Growth", value: "400%+" },
          { label: "Automated Systems", value: "500+" }
        ],
        ctaPrimary: "Start Your Free Automation Strategy",
        ctaSecondary: "Watch Consultant Success Stories",
        videoPlaceholder: "/consultants-video.jpg",
        backgroundImage: "/consultants-hero-bg.jpg"
      },
      growth: {
        title: "From Manual to Automated Excellence",
        description: "Transform your consulting practice from time-for-money to scalable automated systems",
        timeline: [
          { year: "2021", title: "Consulting Beginnings", description: "40 consultants started automation journey" },
          { year: "2023", title: "System Implementation", description: "200+ consultants using automated systems" },
          { year: "2024", title: "Consulting Empire", description: "600+ consultants, 400%+ average growth" }
        ],
        cta: "See Consultant Success Stories",
        socialPlatforms: [
          {
            name: "LinkedIn Professionals",
            icon: "linkedin",
            followers: "32K",
            growth: "+38%",
            platformColor: "from-emerald-600 to-teal-600"
          },
          {
            name: "Twitter Network",
            icon: "twitter",
            followers: "22K",
            growth: "+45%",
            platformColor: "from-cyan-600 to-blue-600"
          },
          {
            name: "Professional Community",
            icon: "network",
            followers: "18K",
            growth: "+32%",
            platformColor: "from-teal-600 to-emerald-600"
          }
        ]
      },
      socialFuture: {
        title: "Consultant Network & Future Vision",
        description: "Join the revolution of consultants building automated, scalable practices",
        socialStats: [
          { 
            platform: "LinkedIn Consultant Network", 
            followers: "32K", 
            growth: "+38% this month", 
            statColor: "emerald" 
          },
          { 
            platform: "Twitter Professional Network", 
            followers: "22K", 
            growth: "+45% this month", 
            statColor: "teal" 
          },
          { 
            platform: "Consultant Community", 
            followers: "18K", 
            growth: "+32% this month", 
            statColor: "cyan" 
          }
        ],
        testimonial: {
          quote: "Automation transformed my consulting practice. I went from working 60 hours a week to 20 hours while tripling my revenue. This is the future.",
          author: "Sarah Johnson",
          role: "Business Consultant, New York • 18 months member"
        },
        futurePlans: [
          { 
            title: "AI Consulting Tools", 
            description: "Advanced AI-powered consulting automation", 
            icon: "ai", 
            planColor: "emerald" 
          },
          { 
            title: "Automation Marketplace", 
            description: "Pre-built systems and templates library", 
            icon: "automation", 
            planColor: "teal" 
          },
          { 
            title: "Global Consultant Network", 
            description: "International consulting partnerships", 
            icon: "globe", 
            planColor: "cyan" 
          }
        ]
      },
      cta: {
        title: "Ready to Automate Your\nConsulting Business 10X?",
        description: "Book your FREE 45-minute automation strategy session. Get your complete roadmap to building scalable consulting systems.",
        formFields: [
          { name: "name", placeholder: "Consultant Name", type: "text" },
          { name: "email", placeholder: "Professional Email", type: "email" },
          { name: "specialty", placeholder: "Your Consulting Specialty", type: "text" },
          { name: "phone", placeholder: "Phone Number", type: "tel" }
        ],
        ctaButton: "Book My Automation Strategy Session",
        trustIndicators: [
          "⚡ 400% Average Revenue Growth", 
          "⭐ 4.9/5 Consultant Rating", 
          "🤖 Proven Automation Systems", 
          "🚀 600+ Successful Consultants"
        ]
      }
    }
  ];
  
  export function getSectionBySlug(slug: string): SectionData | undefined {
    return landingSections.find(section => section.slug === slug);
  }
  