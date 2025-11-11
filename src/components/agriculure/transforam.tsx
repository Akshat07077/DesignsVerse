// components/BusinessTransformationPage.jsx
'use client';
import { useState, useEffect } from 'react';
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
  DollarSign
} from 'lucide-react';

const BusinessTransformationPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('digital');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const transformationAreas = [
    {
      id: 'digital',
      title: 'Digital Transformation',
      icon: Smartphone,
      description: 'Modernize your operations with cutting-edge digital solutions',
      color: 'from-[#A2E535] to-[#16A34A]',
      features: [
        'Cloud Migration',
        'Automation Systems',
        'Digital Workflows',
        'Mobile Solutions'
      ],
      impact: '65% efficiency boost'
    },
    {
      id: 'process',
      title: 'Process Optimization',
      icon: Zap,
      description: 'Streamline operations and eliminate bottlenecks',
      color: 'from-[#16A34A] to-[#15803D]',
      features: [
        'Workflow Analysis',
        'Bottleneck Removal',
        'Quality Control',
        'Continuous Improvement'
      ],
      impact: '45% cost reduction'
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      icon: BarChart3,
      description: 'Leverage data for strategic decision making',
      color: 'from-[#A2E535] to-[#15803D]',
      features: [
        'Real-time Analytics',
        'Predictive Insights',
        'Dashboard Reporting',
        'Data Visualization'
      ],
      impact: '89% better decisions'
    },
    {
      id: 'customer',
      title: 'Customer Experience',
      icon: Users,
      description: 'Transform customer interactions and satisfaction',
      color: 'from-[#15803D] to-[#16A34A]',
      features: [
        '360° Customer View',
        'Personalization',
        'Support Automation',
        'Feedback Systems'
      ],
      impact: '72% satisfaction increase'
    }
  ];



  const transformationSteps = [
    {
      step: '01',
      title: 'Assessment & Analysis',
      description: 'Comprehensive business analysis to identify opportunities',
      duration: '2-3 weeks',
      outcome: 'Detailed transformation roadmap'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Customized transformation strategy aligned with goals',
      duration: '3-4 weeks',
      outcome: 'Implementation blueprint'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Phased implementation with minimal disruption',
      duration: '8-12 weeks',
      outcome: 'Operational transformation'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and improvement',
      duration: 'Ongoing',
      outcome: 'Sustained growth'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Legacy systems slowing growth',
      solution: 'Digital transformation & cloud migration',
      results: [
        '156% revenue growth',
        '65% operational efficiency',
        '89% customer satisfaction'
      ],
      timeline: '6 months'
    },
    {
      company: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Inefficient customer experience',
      solution: 'CX transformation & automation',
      results: [
        '72% faster response times',
        '45% cost reduction',
        '3.2x ROI in first year'
      ],
      timeline: '4 months'
    },
    {
      company: 'ManufacturePro',
      industry: 'Manufacturing',
      challenge: 'Outdated processes',
      solution: 'Process optimization & IoT integration',
      results: [
        '78% productivity increase',
        '56% quality improvement',
        '2.8x output capacity'
      ],
      timeline: '5 months'
    }
  ];

  const activeTransformation = transformationAreas.find(area => area.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f8ffe8] to-[#e8f5e8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#A2E535]/20 shadow-lg mb-8">
            <div className="w-2 h-2 rounded-full bg-[#A2E535] animate-pulse mr-3"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
              BUSINESS TRANSFORMATION
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-[#A2E535] via-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
              Business Future
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your operations, accelerate growth, and future-proof your business 
            with our comprehensive transformation solutions.
          </p>
        </div>


        {/* Transformation Areas */}
        <div className="mb-20">
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tabs Navigation */}
            <div className="space-y-4">
              {transformationAreas.map((area) => {
                const IconComponent = area.icon;
                const isActive = activeTab === area.id;
                
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveTab(area.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white shadow-2xl transform -translate-y-1' 
                        : 'bg-white shadow-lg hover:shadow-xl border border-[#A2E535]/10 hover:-translate-y-1'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-gradient-to-br from-[#A2E535] to-[#16A34A]'
                      }`}>
                        <IconComponent className={`w-7 h-7 ${isActive ? 'text-white' : 'text-white'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-black mb-2 ${
                          isActive ? 'text-white' : 'text-gray-900'
                        }`}>
                          {area.title}
                        </h3>
                        <p className={`mb-3 ${
                          isActive ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {area.description}
                        </p>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-[#A2E535]/10 text-[#15803D]'
                        }`}>
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-semibold">{area.impact}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Content */}
            <div className="bg-white rounded-2xl shadow-2xl border border-[#A2E535]/10 p-8">
              {activeTransformation && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeTransformation.color} flex items-center justify-center`}>
                      <activeTransformation.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">
                        {activeTransformation.title}
                      </h3>
                      <p className="text-gray-600">
                        {activeTransformation.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {activeTransformation.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#A2E535]/5 transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                          <span className="font-medium text-gray-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-6 h-6" />
                      <span className="font-bold text-lg">Expected Impact</span>
                    </div>
                    <p className="text-white/90">
                      Transform your business operations with {activeTransformation.impact.toLowerCase()} through optimized processes and cutting-edge technology implementation.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Transformation Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our 4-Step{' '}
              <span className="bg-gradient-to-r from-[#16A34A] to-[#15803D] bg-clip-text text-transparent">
                Transformation Process
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {transformationSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-xl border border-[#A2E535]/10 p-6 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#A2E535] to-[#16A34A] rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{step.duration}</span>
                    </div>
                    <div className="bg-[#A2E535]/10 rounded-lg p-3">
                      <div className="text-sm font-semibold text-[#15803D]">
                        {step.outcome}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

  

     
      </div>
    </div>
  );
};

export default BusinessTransformationPage;