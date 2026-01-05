'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Target, 
  Users, 
  Shield, 
  Cloud,
  BarChart3,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Clock,
  DollarSign,
  Infinity
} from 'lucide-react';

const BusinessTransformationPage = ({ data, colors, domainSlug }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('digital');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Default transformation areas if not provided
  const transformationAreas = data?.areas || [
    {
      id: 'digital',
      title: `${domainSlug} Digital Transformation`,
      icon: 'Smartphone',
      description: `Modernize your ${domainSlug} operations with cutting-edge digital solutions`,
      color: colors.gradient1,
      features: [
        'Digital Infrastructure',
        'Automation Systems',
        'Workflow Digitization',
        'Mobile Integration'
      ],
      impact: '65% efficiency boost'
    },
    {
      id: 'process',
      title: `${domainSlug} Process Optimization`,
      icon: 'Zap',
      description: `Streamline ${domainSlug} operations and eliminate bottlenecks`,
      color: colors.gradient2,
      features: [
        'Process Analysis',
        'Bottleneck Removal',
        'Quality Enhancement',
        'Continuous Improvement'
      ],
      impact: '45% cost reduction'
    },
    {
      id: 'data',
      title: `${domainSlug} Data & Analytics`,
      icon: 'BarChart3',
      description: `Leverage data for ${domainSlug} strategic decision making`,
      color: colors.gradient3,
      features: [
        'Real-time Analytics',
        'Predictive Modeling',
        'Dashboard Solutions',
        'Data Visualization'
      ],
      impact: '89% better decisions'
    },
    {
      id: 'customer',
      title: `${domainSlug} Customer Experience`,
      icon: 'Users',
      description: `Transform ${domainSlug} customer interactions and satisfaction`,
      color: 'from-[var(--accent-color)] to-[var(--secondary-color)]',
      features: [
        'Customer 360 View',
        'Personalization Engine',
        'Support Automation',
        'Feedback Integration'
      ],
      impact: '72% satisfaction increase'
    }
  ];

  const transformationSteps = [
    {
      step: '01',
      title: 'Assessment & Analysis',
      description: `Comprehensive ${domainSlug} business analysis to identify transformation opportunities`,
      duration: '2-3 weeks',
      outcome: 'Detailed ${domainSlug} transformation roadmap'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: `Customized ${domainSlug} transformation strategy aligned with business goals`,
      duration: '3-4 weeks',
      outcome: 'Implementation blueprint for ${domainSlug} success'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Phased ${domainSlug} implementation with minimal business disruption',
      duration: '8-12 weeks',
      outcome: 'Operational ${domainSlug} transformation complete'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous ${domainSlug} monitoring and performance improvement',
      duration: 'Ongoing',
      outcome: 'Sustained ${domainSlug} business growth'
    }
  ];

  const caseStudies = [
    {
      company: `${domainSlug.toUpperCase()} Solutions Inc.`,
      industry: domainSlug.charAt(0).toUpperCase() + domainSlug.slice(1),
      challenge: `Legacy ${domainSlug} systems slowing business growth`,
      solution: `${domainSlug} digital transformation & cloud migration`,
      results: [
        '156% revenue growth',
        '65% operational efficiency',
        '89% customer satisfaction'
      ],
      timeline: '6 months'
    },
    {
      company: `${domainSlug.toUpperCase()}Max Enterprises`,
      industry: 'Digital Services',
      challenge: `Inefficient ${domainSlug} customer experience platforms`,
      solution: `${domainSlug} CX transformation & automation`,
      results: [
        '72% faster response times',
        '45% cost reduction',
        '3.2x ROI in first year'
      ],
      timeline: '4 months'
    }
  ];

  const activeTransformation = transformationAreas.find(area => area.id === activeTab);

  const IconComponent = ({ name, className }) => {
    const LucideIcon = { 
      TrendingUp, Zap, Target, Users, Shield, Cloud, BarChart3, Smartphone, 
      Globe, CheckCircle, ArrowRight, Play, Award, Clock, DollarSign, Infinity 
    }[name] || TrendingUp;
    return <LucideIcon className={className} />;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-white via-[${colors.background}] to-[#e8f5e8] py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Dynamic Colors */}
        <motion.div 
          className={`text-center mb-16 lg:mb-20 ${isVisible ? 'animate-fade-in-up' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-[${colors.primary}]/20 shadow-lg mb-8`}>
            <div className={`w-2 h-2 rounded-full bg-[${colors.primary}] animate-pulse mr-3`}></div>
            <span className={`text-sm font-semibold bg-gradient-to-r from-[${colors.secondary}] to-[${colors.accent}] bg-clip-text text-transparent`}>
              ${domainSlug.toUpperCase()} BUSINESS TRANSFORMATION
            </span>
          </div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transform Your{' '}
            <span className={`bg-gradient-to-r ${colors.gradient1} bg-clip-text text-transparent`}>
              ${domainSlug} Future
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Revolutionize your ${domainSlug} operations, accelerate growth, and future-proof your business with our comprehensive transformation solutions.
          </motion.p>
        </motion.div>

        {/* Dynamic Transformation Areas with Tabs */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            
            {/* Dynamic Tabs Navigation */}
            <div className="space-y-4">
              {transformationAreas.map((area, index) => {
                const Icon = IconComponent({ name: area.icon, className: "w-7 h-7 text-white" });
                const isActive = activeTab === area.id;
                
                return (
                  <motion.button
                    key={area.id}
                    onClick={() => setActiveTab(area.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group hover:shadow-2xl ${
                      isActive 
                        ? `bg-gradient-to-r ${area.color} text-white shadow-2xl transform -translate-y-1 scale-105` 
                        : 'bg-white shadow-lg hover:shadow-xl border border-[var(--primary-color)]/10 hover:-translate-y-1 hover:scale-102'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: isActive ? 1.02 : 1.03 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                        isActive 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : `bg-gradient-to-br ${area.color}`
                      }`}>
                        {Icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-black mb-2 ${
                          isActive ? 'text-white' : 'text-gray-900'
                        }`}>
                          {area.title}
                        </h3>
                        <p className={`mb-3 text-sm leading-relaxed ${
                          isActive ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {area.description}
                        </p>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          isActive 
                            ? 'bg-white/20 text-white shadow-lg' 
                            : `bg-[var(--primary-color)]/10 text-[var(--primary-color)]`
                        }`}>
                          <TrendingUp className="w-4 h-4" />
                          <span>{area.impact}</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Dynamic Active Tab Content */}
            <motion.div 
              className={`bg-white rounded-2xl shadow-2xl border border-[${colors.primary}]/10 p-8 ${isVisible ? 'animate-fade-in-up' : ''}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              {activeTransformation && (
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeTransformation.color} flex items-center justify-center shadow-2xl`}>
                      <IconComponent 
                        name={activeTransformation.icon} 
                        className="w-8 h-8 text-white" 
                      />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-black text-gray-900`}>
                        {activeTransformation.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {activeTransformation.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50/50 rounded-2xl p-6 border border-[var(--primary-color)]/5">
                    <h4 className={`text-lg font-bold text-gray-900 mb-4 flex items-center gap-2`}>
                      <CheckCircle className="w-5 h-5 text-[var(--primary-color)]" />
                      Key ${domainSlug} Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeTransformation.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-[var(--primary-color)]/5 transition-all duration-300 border border-[var(--primary-color)]/10`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4 + (index * 0.05) }}
                        >
                          <div className={`w-2 h-8 bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex-shrink-0`}></div>
                          <span className="font-medium text-gray-900">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className={`bg-gradient-to-r ${activeTransformation.color} rounded-2xl p-6 text-white shadow-2xl`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-6 h-6" />
                      <span className="font-bold text-lg">Expected ${domainSlug} Impact</span>
                    </div>
                    <p className="text-white/95 text-lg leading-relaxed">
                      Transform your ${domainSlug} business operations with {activeTransformation.impact.toLowerCase()} through optimized processes and cutting-edge technology implementation that drives measurable results.
                    </p>
                  </motion.div>

                  {/* Dynamic Implementation CTA */}
                  <motion.div
                    className="text-center pt-6 border-t border-gray-200/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <motion.button 
                      className={`px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-2xl font-bold shadow-2xl hover:shadow-3xl flex items-center gap-3 mx-auto transition-all duration-500`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe className="w-5 h-5" />
                      <span>Start Your ${domainSlug} Transformation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Dynamic 4-Step Transformation Process */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <motion.h2 
              className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our 4-Step{' '}
              <span className={`bg-gradient-to-r from-[${colors.secondary}] to-[${colors.accent}] bg-clip-text text-transparent`}>
                ${domainSlug} Transformation Process
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Proven methodology that ensures smooth ${domainSlug} digital transformation with measurable results and minimal disruption.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {transformationSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border border-[${colors.primary}]/10 p-6 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${index === 3 ? 'lg:col-span-1' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Dynamic Step Number with Colors */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[${colors.primary}] to-[${colors.secondary}] rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg border-2 border-white/20`}>
                  {step.step}
                </div>

                <div className="pt-6">
                  <h3 className={`text-xl font-black text-gray-900 mb-3 flex items-center gap-2`}>
                    <div className={`w-3 h-3 rounded-full bg-[${colors.primary}] shadow-lg`}></div>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-[var(--primary-color)]" />
                      <span className="font-medium text-gray-700">{step.duration}</span>
                    </div>
                    <div className={`bg-gradient-to-r from-[${colors.primary}]/10 to-[${colors.secondary}]/10 rounded-lg p-3 border border-[${colors.primary}]/20`}>
                      <div className={`text-sm font-semibold text-[${colors.primary}]`}>
                        {step.outcome}
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Progress Line for Steps */}
                  {index < 3 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 h-0.5 bg-gradient-to-r from-[var(--primary-color)]/30 to-transparent hidden lg:block"></div>
                  )}
                </div>

                {/* Dynamic Hover Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[${colors.primary}]/0 to-[${colors.secondary}]/0 group-hover:from-[${colors.primary}]/5 group-hover:to-[${colors.secondary}]/5 transition-all duration-500 opacity-0 group-hover:opacity-100`}
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Case Studies Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <motion.h2 
              className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ${domainSlug} Transformation{' '}
              <span className={`bg-gradient-to-r ${colors.gradient1} bg-clip-text text-transparent`}>
                Success Stories
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Real results from ${domainSlug} businesses that transformed with our proven methodology.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-[${colors.primary}]/10 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Case Study Header with Dynamic Colors */}
                <div className={`bg-gradient-to-r from-[${colors.primary}]/5 to-[${colors.secondary}]/5 p-6 border-b border-[${colors.primary}]/10`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] text-white rounded-full text-sm font-bold`}>
                      {study.industry} Case Study
                    </div>
                    <div className={`px-3 py-1 bg-white/20 rounded-full text-xs text-white`}>
                      {study.timeline}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-black text-gray-900 mb-2`}>{study.company}</h3>
                  <p className={`text-gray-600 text-sm`}>{study.challenge}</p>
                </div>

                {/* Solution Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.gradient1} flex items-center justify-center flex-shrink-0`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Solution</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, rIndex) => (
                      <motion.div
                        key={rIndex}
                        className={`text-center p-4 rounded-xl bg-gradient-to-br from-[${colors.primary}]/5 to-[${colors.secondary}]/5 border border-[${colors.primary}]/10`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6 + (rIndex * 0.05) }}
                      >
                        <div className={`text-2xl font-black text-[${colors.primary}] mb-1`}>{result}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Result</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button 
                    className={`w-full py-3 px-6 bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <DollarSign className="w-4 h-4" />
                    Read Full ${domainSlug} Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Dynamic CTA for Transformation */}
        <motion.div 
          className={`text-center py-16 ${isVisible ? 'animate-fade-in-up' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div 
            className={`bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] rounded-3xl p-1.5 shadow-3xl mx-auto max-w-6xl`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl p-12 lg:p-16 relative overflow-hidden">
              <div className={`absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_30%,${colors.primary},transparent_50%)]`} />
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 relative z-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to Transform Your ${domainSlug} Business?
              </motion.h2>
              
              <motion.p 
                className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Join 50,000+ forward-thinking ${domainSlug} companies that trust our transformation expertise to power their success with innovative technology solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  className={`group px-12 py-5 bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] text-white rounded-2xl font-bold shadow-3xl hover:shadow-4xl flex items-center gap-4 text-lg transition-all duration-500`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <Rocket className="w-6 h-6" /> */}
                  <span>Start ${domainSlug} Transformation</span>
                </motion.button>
                
                <motion.a
                  href={`https://${domainSlug}transform.com`}
                  className={`px-12 py-5 border-3 border-[${colors.secondary}] text-[${colors.accent}] rounded-2xl font-bold hover:bg-[${colors.primary}] hover:text-white transition-all duration-500 shadow-2xl hover:shadow-3xl text-lg`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book ${domainSlug} Consultation
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
              <motion.div
                className={`absolute top-1/2 left-8 w-2 h-2 bg-[${colors.accent}] rounded-full opacity-20`}
                animate={{ x: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2.5, delay: 0.5 }}
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
      `}</style>
    </div>
  );
};

export default BusinessTransformationPage;
