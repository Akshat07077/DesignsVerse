"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import SectionTitle from "../Common/SectionTitle";
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const { theme, setTheme } = useTheme();

  // FAQ Data with icons for each category
  const faqData = {
    "AI & Machine Learning": {
      icon: "🤖",
      items: [
        {
          question: "What AI services do you offer?",
          answer: "We provide custom AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, and AI integration services. Our solutions are tailored to your specific business needs."
        },
        {
          question: "How can AI benefit my business?",
          answer: "AI can automate processes, improve decision-making, enhance customer experiences, and create new revenue streams. We help businesses identify and implement AI solutions that deliver measurable ROI."
        },
        {
          question: "What's the process for implementing AI solutions?",
          answer: "Our AI implementation process includes requirement analysis, data assessment, model development, testing, deployment, and ongoing optimization. We ensure smooth integration with your existing systems."
        },
        {
          question: "How do you ensure AI solutions are ethical?",
          answer: "We follow strict ethical guidelines for AI development, including bias prevention, transparency, data privacy, and security. Our solutions are designed to be fair, accountable, and beneficial to all stakeholders."
        },
        {
          question: "What industries do you serve with AI solutions?",
          answer: "We serve healthcare, finance, retail, manufacturing, and technology sectors with specialized AI solutions. Our industry-specific expertise ensures relevant and effective AI implementations."
        }
      ]
    },
    "Web Development": {
      icon: "💻",
      items: [
        {
          question: "How do you implement AI features in websites?",
          answer: "We integrate AI features like chatbots, recommendation engines, and personalization systems into websites. Our approach ensures seamless integration while maintaining performance and user experience."
        },
        {
          question: "What AI tools do you use for web development?",
          answer: "We utilize AI-powered tools for code completion, bug detection, performance optimization, and automated testing. Our development stack includes AI-enhanced IDEs, testing frameworks, and deployment tools."
        },
        
        { 
          question: "What is responsive web design?", 
          answer: "Responsive web design ensures websites adapt to different screen sizes using flexible layouts and media queries. It enhances usability across devices, with fast load times, touch-friendly elements, and device-specific optimizations."
        },
        { 
          question: "How long does it take to build a website?", 
          answer: "Basic websites take 3-4 weeks, while medium-complex sites need 6-8 weeks. Large e-commerce sites can take 3-6 months. We use agile methods for incremental updates and detailed project timelines."
        },
        { 
          question: "What's the best framework for web development?", 
          answer: "The best framework depends on your needs: React for interactive UIs, Angular for large-scale apps, Vue for rapid prototyping, and Next.js for SEO-driven projects. We recommend based on your specific goals."
        },
        { 
          question: "Do you offer ongoing website maintenance?", 
          answer: "Yes, we provide maintenance plans including security updates, performance audits, content changes, and emergency support. Plans range from $99/month to $499/month, depending on your site's needs."
        },
        { 
          question: "What is headless CMS and its benefits?", 
          answer: "A headless CMS separates content management from presentation, offering flexibility, omnichannel publishing, and improved security. It's ideal for companies using modern frameworks like React or Vue."
        }
      ]
    },
    "Digital Marketing": {
      icon: "📈",
      items: [
        {
          question: "How is AI transforming digital marketing?",
          answer: "AI revolutionizes digital marketing through predictive analytics, automated content creation, personalized customer experiences, and smart campaign optimization. We leverage AI to deliver better targeting and higher ROI."
        },
        {
          question: "What AI tools do you use for marketing automation?",
          answer: "We use AI-powered tools for customer segmentation, predictive analytics, content optimization, and campaign automation. Our marketing stack includes advanced AI solutions for better targeting and personalization."
        },
        {
          question: "How do you use AI for customer behavior analysis?",
          answer: "We employ AI algorithms to analyze customer behavior patterns, predict future actions, and optimize marketing strategies. Our AI systems provide deep insights into customer preferences and buying patterns."
        },
        { 
          question: "What does digital marketing encompass?", 
          answer: "Our digital marketing includes SEO, PPC, social media ads, content marketing, and conversion rate optimization. We create tailored campaigns to drive awareness, engagement, and conversions."
        },
        { 
          question: "How effective is email marketing compared to other channels?", 
          answer: "Email marketing offers high ROI, with segmented campaigns achieving 25-35% open rates. It provides direct access to customer inboxes, high conversion rates, and detailed tracking."
        },
        { 
          question: "What are the advantages of PPC advertising?", 
          answer: "PPC offers instant visibility, precise targeting, and full budget control. It's highly measurable, with our Google Ads campaigns typically delivering 200-300% ROI through smart bidding and remarketing."
        },
        { 
          question: "How do you boost brand visibility effectively?", 
          answer: "We use SEO, strategic content, social media, PR, and influencer outreach to increase visibility. Our methods result in significant traffic growth and improved brand awareness."
        },
        { 
          question: "What makes content marketing successful?", 
          answer: "Successful content marketing requires deep audience research, a solid keyword strategy, regular publishing, and multi-channel distribution. We focus on creating '10x content' that outperforms competitors."
        }
      ]
    },
    "SEO": {
      icon: "🔍",
      items: [
        { 
          question: "How long until we see SEO results?", 
          answer: "SEO shows technical results in 4-8 weeks and content-based rankings in 3-6 months. Results accelerate as domain authority builds, with significant improvements often appearing after 6-12 months."
        },
        {
          question: "What AI tools do you use for SEO optimization?",
          answer: "We utilize AI-powered tools for content analysis, keyword research, competitor tracking, and performance prediction. Our SEO stack includes advanced AI solutions for better ranking and visibility."
        },
        
        { 
          question: "What does professional SEO involve?", 
          answer: "SEO includes technical improvements (site speed, mobile-friendliness), on-page content optimization, and off-page link building. We focus on sustainable growth and follow the latest Google algorithm updates."
        },
        
        { 
          question: "Why are backlinks important and how do you build them?", 
          answer: "Backlinks improve SEO rankings. We build them through guest blogging, PR outreach, and original research, focusing on high-quality, authoritative links to boost your site's authority."
        },
        { 
          question: "What's included in local SEO services?", 
          answer: "Local SEO services include Google Business Profile optimization, local citations, geo-targeted pages, and review generation. We help businesses boost local visibility and drive foot traffic."
        },
        { 
          question: "How do you conduct keyword research effectively?", 
          answer: "Our keyword research includes competitor analysis, volume evaluation, difficulty scoring, and intent classification. We deliver a tailored strategy with 300-500 prioritized keywords to match your business goals."
        }
      ]
    },
    "Mobile Development": {
      icon: "📱",
      items: [
        { 
          question: "When is cross-platform development the right choice?", 
          answer: "Cross-platform development is ideal for budget-conscious projects with simpler features. It offers faster time-to-market and works well for apps that don't need deep device integration or high performance."
        },
        {
          question: "What AI features can be integrated into mobile apps?",
          answer: "We integrate AI features like voice assistants, image recognition, predictive text, and personalized recommendations. Our mobile apps leverage AI to provide smarter, more intuitive user experiences."
        },
        {
          question: "How do you use AI for mobile app testing?",
          answer: "We employ AI-powered testing tools for automated UI testing, performance monitoring, and bug detection. Our AI testing systems ensure comprehensive coverage and faster release cycles."
        },
        { 
          question: "What are the benefits of native app development?", 
          answer: "Native apps offer superior performance, offline functionality, and full hardware access. They provide smoother experiences and better security, making them ideal for complex or performance-heavy apps."
        },
        { 
          question: "What determines mobile app development costs?", 
          answer: "Costs depend on platform, features, design complexity, and backend requirements. Basic apps start at $15K, while complex apps can go up to $100K+. We offer MVP development to reduce initial costs."
        },
       
        { 
          question: "What's your app testing methodology?", 
          answer: "We conduct functional, UI, performance, security, and compatibility testing across multiple devices and platforms. Automated testing covers 80-90% of code, while manual testing ensures top-notch user experience."
        },
        { 
          question: "How do you optimize apps for app stores?", 
          answer: "Our ASO strategy includes keyword optimization, compelling visuals, review generation, and A/B testing to boost app installs. We monitor 15+ factors and adjust based on data and competitor strategies."
        }
      ]
    },
    "Graphic Designing": {
      icon: "🎨",
      items: [
        {
          question: "How is AI transforming graphic design?",
          answer: "AI enhances graphic design through automated layout generation, style transfer, image enhancement, and design suggestions. We leverage AI tools to streamline workflows and create innovative designs while maintaining human creativity."
        },
        {
          question: "What AI tools do you use for graphic design?",
          answer: "We utilize AI-powered tools for image generation, style transfer, color optimization, and layout suggestions. Our design stack includes advanced AI solutions for faster and more creative design processes."
        },
        {
          question: "How do you use AI for design automation?",
          answer: "We employ AI algorithms to automate repetitive tasks, generate design variations, and optimize layouts. Our AI systems help create consistent, high-quality designs while saving time and resources."
        },
        { 
          question: "What services does graphic design include?", 
          answer: "We offer brand identity, marketing collateral, digital assets, presentations, packaging design, and environmental graphics. Our process includes discovery, concept development, and final production files."
        },
        { 
          question: "What's your logo design process?", 
          answer: "Our logo design process involves discovery, research, sketching, digitalization, refinement, and delivery. We ensure scalability, versatility, and alignment with your brand values."
        },
        { 
          question: "Which professional design tools do you use?", 
          answer: "We use tools like Adobe Illustrator, Photoshop, Figma, After Effects, and Blender for vector design, photo editing, prototypes, and motion graphics. Clients receive fully editable source files."
        },
        { 
          question: "What are typical design project timelines?", 
          answer: "Simple designs take 3-5 days, medium projects require 1-2 weeks, and comprehensive designs can take 3-6 weeks. Large projects are split into phases with client reviews after each stage."
        },
        { 
          question: "Do you handle full print production?", 
          answer: "Yes, we manage end-to-end print production, including prepress, color matching, and print supervision. We ensure quality control and can handle large print runs or specialty finishes."
        }
      ]
    }
  };

  const getDisplayedFAQs = () => {
    if (!activeCategory) {
      return Object.entries(faqData).map(([category, data]) => ({
        ...data.items[0],
        category
      }));
    }
    return faqData[activeCategory].items.map(item => ({ 
      ...item, 
      category: activeCategory 
    }));
  };

  const displayedFAQs = getDisplayedFAQs();

  // Toggle FAQ item
  const toggleFAQ = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Set initial theme
  useEffect(() => {
    if (theme === undefined) {
      setTheme('dark');
    }
  }, [theme, setTheme]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FAQs - Professional Services</title>
      </Head>
      
      <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-[#121723]">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            paragraph="Find comprehensive answers to common questions about our services."
            center
            mb="60px"
          />

          {/* Category Filters - Single line with hidden scrollbar */}
          <div className="mb-12 w-full overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2 w-max mx-auto px-2">
              <button
                className={`px-5 py-2.5 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 flex-shrink-0 ${
                  !activeCategory
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(null)}
              >
                ✨ All
              </button>
              {Object.entries(faqData).map(([category, { icon }]) => (
                <button
                  key={category}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 flex-shrink-0 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {icon} {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {displayedFAQs.map((faq, index) => {
              const id = `${faq.category}-${index}`;
              return (
                <div 
                  key={id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                    openItems[id] ? 'ring-2 ring-primary/50' : ''
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full p-6 text-left"
                    onClick={() => toggleFAQ(id)}
                  >
                    <div className="flex items-start">
                      <span className="inline-block mr-4 mt-1 text-primary dark:text-primary-light text-xl">
                        {faqData[faq.category as keyof typeof faqData].icon}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="ml-4 shrink-0 text-2xl text-primary dark:text-primary-light">
                      {openItems[id] ? '−' : '+'}
                    </span>
                  </button>
                  {openItems[id] && (
                    <div className="px-6 pb-6 ml-10">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                      {!activeCategory && (
                        <button 
                          onClick={() => setActiveCategory(faq.category)}
                          className="mt-4 text-primary dark:text-primary-light font-medium hover:underline"
                        >
                          View all {faq.category} questions →
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Still have questions?
            </h3>
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Add this style to hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default FAQ;