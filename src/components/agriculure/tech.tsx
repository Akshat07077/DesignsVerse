// components/TechStackPage.jsx
'use client';
import { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Globe,
  Cpu,
  Smartphone,
  Server,
  GitBranch,
  MessageCircle,
  BarChart3,
  Palette,
  Terminal,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';

const TechStackPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      description: 'Modern, responsive, and performant user interfaces',
      color: 'from-[#A2E535] to-[#16A34A]',
      technologies: [
        {
          name: 'Next.js 14',
          logo: '⚡',
          description: 'React framework with app router & server components',
          features: ['App Router', 'Server Components', 'Turbopack', 'SEO Optimized'],
          proficiency: 95
        },
        {
          name: 'React 18',
          logo: '⚛️',
          description: 'Library for building user interfaces',
          features: ['Concurrent Features', 'Hooks', 'Suspense', 'Error Boundaries'],
          proficiency: 98
        },
        {
          name: 'TypeScript',
          logo: '🔷',
          description: 'Typed JavaScript for better development',
          features: ['Type Safety', 'Better IDE Support', 'Early Error Detection'],
          proficiency: 92
        },
        {
          name: 'Tailwind CSS',
          logo: '🎨',
          description: 'Utility-first CSS framework',
          features: ['Rapid Development', 'Responsive Design', 'Customizable'],
          proficiency: 90
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: Server,
      description: 'Scalable server architecture and robust APIs',
      color: 'from-[#16A34A] to-[#15803D]',
      technologies: [
        {
          name: 'Node.js',
          logo: '🟢',
          description: 'JavaScript runtime built on Chrome V8',
          features: ['Event-Driven', 'Non-blocking I/O', 'NPM Ecosystem'],
          proficiency: 94
        },
        {
          name: 'Express.js',
          logo: '🚂',
          description: 'Minimal web framework for Node.js',
          features: ['Middleware Support', 'RESTful APIs', 'Fast Development'],
          proficiency: 92
        },
        {
          name: 'GraphQL',
          logo: '📊',
          description: 'Query language for APIs',
          features: ['Type System', 'Single Endpoint', 'Real-time Subscriptions'],
          proficiency: 88
        },
        {
          name: 'PostgreSQL',
          logo: '🐘',
          description: 'Powerful open-source relational database',
          features: ['ACID Compliance', 'JSON Support', 'Scalable'],
          proficiency: 90
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and deployment automation',
      color: 'from-[#A2E535] to-[#15803D]',
      technologies: [
        {
          name: 'AWS',
          logo: '☁️',
          description: 'Amazon Web Services cloud platform',
          features: ['EC2', 'S3', 'Lambda', 'RDS'],
          proficiency: 87
        },
        {
          name: 'Docker',
          logo: '🐳',
          description: 'Containerization platform',
          features: ['Containerization', 'Microservices', 'CI/CD Integration'],
          proficiency: 89
        },
        {
          name: 'Kubernetes',
          logo: '⚓',
          description: 'Container orchestration system',
          features: ['Auto-scaling', 'Service Discovery', 'Load Balancing'],
          proficiency: 85
        },
        {
          name: 'Vercel',
          logo: '▲',
          description: 'Platform for frontend frameworks',
          features: ['Zero Configuration', 'Edge Network', 'Automatic HTTPS'],
          proficiency: 93
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Cross-platform mobile applications',
      color: 'from-[#15803D] to-[#16A34A]',
      technologies: [
        {
          name: 'React Native',
          logo: '📱',
          description: 'Framework for building native apps with React',
          features: ['Cross-platform', 'Native Performance', 'Hot Reload'],
          proficiency: 91
        },
        {
          name: 'Flutter',
          logo: '💙',
          description: 'UI toolkit for natively compiled applications',
          features: ['Single Codebase', 'Fast Development', 'Beautiful UIs'],
          proficiency: 86
        },
        {
          name: 'Expo',
          logo: '🎪',
          description: 'Platform for universal React applications',
          features: ['Rapid Development', 'Over-the-air Updates', 'Rich Ecosystem'],
          proficiency: 88
        }
      ]
    }
  ];

  const tools = [
    {
      category: 'Development',
      items: [
        { name: 'VS Code', description: 'Code editor', icon: '💻' },
        { name: 'Git & GitHub', description: 'Version control', icon: '📚' },
        { name: 'Figma', description: 'Design & prototyping', icon: '🎨' },
        { name: 'Postman', description: 'API development', icon: '📬' }
      ]
    },
    {
      category: 'Productivity',
      items: [
        { name: 'Slack', description: 'Team communication', icon: '💬' },
        { name: 'Notion', description: 'Project management', icon: '📋' },
        { name: 'Linear', description: 'Issue tracking', icon: '🎯' },
        { name: 'Loom', description: 'Video messaging', icon: '🎥' }
      ]
    },
    {
      category: 'Monitoring',
      items: [
        { name: 'Sentry', description: 'Error tracking', icon: '🚨' },
        { name: 'Datadog', description: 'Application monitoring', icon: '📊' },
        { name: 'Google Analytics', description: 'Web analytics', icon: '📈' },
        { name: 'Hotjar', description: 'User behavior analytics', icon: '🔥' }
      ]
    }
  ];

  const performanceMetrics = [
    {
      metric: '99.9%',
      label: 'Uptime',
      description: 'Application reliability',
      icon: Shield,
      color: 'text-[#A2E535]'
    },
    {
      metric: '<100ms',
      label: 'Response Time',
      description: 'API response speed',
      icon: Zap,
      color: 'text-[#16A34A]'
    },
    {
      metric: 'A+',
      label: 'Security Score',
      description: 'Security compliance',
      icon: Shield,
      color: 'text-[#15803D]'
    },
    {
      metric: '95%',
      label: 'Lighthouse Score',
      description: 'Performance metrics',
      icon: BarChart3,
      color: 'text-[#A2E535]'
    }
  ];

  const activeCategoryData = techCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-[#A2E535]/20 shadow-lg mb-8">
            <div className="w-2 h-2 rounded-full bg-[#A2E535] animate-pulse mr-3"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#A2E535] to-[#16A34A] bg-clip-text text-transparent">
              PREMIUM TECH STACK
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Cutting-Edge{' '}
            <span className="bg-gradient-to-r from-[#A2E535] via-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built with modern, scalable, and performant technologies to deliver 
            exceptional digital experiences and robust solutions.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {performanceMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-6 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#A2E535]/30"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A2E535] to-[#16A34A] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-black ${metric.color} mb-2`}>
                  {metric.metric}
                </div>
                <div className="font-bold text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Carefully selected technologies for optimal performance, scalability, and developer experience
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techCategories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 group ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white shadow-2xl transform -translate-y-1' 
                      : 'bg-gray-800 shadow-lg hover:shadow-xl border border-gray-700 hover:-translate-y-1 text-gray-300 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-semibold">{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Content */}
          {activeCategoryData && (
            <div className="bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
              <div className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <activeCategoryData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {activeCategoryData.title}
                    </h3>
                    <p className="text-white/90">
                      {activeCategoryData.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeCategoryData.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 rounded-2xl p-6 group hover:bg-gray-600 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{tech.logo}</div>
                          <div>
                            <h4 className="text-xl font-black text-white">
                              {tech.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-[#A2E535]">
                            {tech.proficiency}%
                          </div>
                          <div className="text-xs text-gray-400">Proficiency</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
                        <div 
                          className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {tech.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-gray-600 rounded-full text-xs text-gray-300 group-hover:bg-[#A2E535]/20 group-hover:text-[#A2E535] transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        

   
      </div>
    </div>
  );
};

export default TechStackPage;