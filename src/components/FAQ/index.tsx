"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import SectionTitle from "../Common/SectionTitle";

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<boolean[]>([]);
  const { theme, setTheme } = useTheme();

  // FAQ Data
  const faqData = {
    "Web Development": [
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
        answer: "Yes, we provide maintenance plans including security updates, performance audits, content changes, and emergency support. Plans range from $99/month to $499/month, depending on your site’s needs."
      },
      { 
        question: "What is headless CMS and its benefits?", 
        answer: "A headless CMS separates content management from presentation, offering flexibility, omnichannel publishing, and improved security. It’s ideal for companies using modern frameworks like React or Vue."
      },
    ],
    "Digital Marketing": [
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
        answer: "PPC offers instant visibility, precise targeting, and full budget control. It’s highly measurable, with our Google Ads campaigns typically delivering 200-300% ROI through smart bidding and remarketing."
      },
      { 
        question: "How do you boost brand visibility effectively?", 
        answer: "We use SEO, strategic content, social media, PR, and influencer outreach to increase visibility. Our methods result in significant traffic growth and improved brand awareness."
      },
      { 
        question: "What makes content marketing successful?", 
        answer: "Successful content marketing requires deep audience research, a solid keyword strategy, regular publishing, and multi-channel distribution. We focus on creating '10x content' that outperforms competitors."
      },
    ],
    "SEO": [
      { 
        question: "What does professional SEO involve?", 
        answer: "SEO includes technical improvements (site speed, mobile-friendliness), on-page content optimization, and off-page link building. We focus on sustainable growth and follow the latest Google algorithm updates."
      },
      { 
        question: "How long until we see SEO results?", 
        answer: "SEO shows technical results in 4-8 weeks and content-based rankings in 3-6 months. Results accelerate as domain authority builds, with significant improvements often appearing after 6-12 months."
      },
      { 
        question: "Why are backlinks important and how do you build them?", 
        answer: "Backlinks improve SEO rankings. We build them through guest blogging, PR outreach, and original research, focusing on high-quality, authoritative links to boost your site’s authority."
      },
      { 
        question: "What's included in local SEO services?", 
        answer: "Local SEO services include Google Business Profile optimization, local citations, geo-targeted pages, and review generation. We help businesses boost local visibility and drive foot traffic."
      },
      { 
        question: "How do you conduct keyword research effectively?", 
        answer: "Our keyword research includes competitor analysis, volume evaluation, difficulty scoring, and intent classification. We deliver a tailored strategy with 300-500 prioritized keywords to match your business goals."
      },
    ],
    "Mobile Development": [
      { 
        question: "What are the benefits of native app development?", 
        answer: "Native apps offer superior performance, offline functionality, and full hardware access. They provide smoother experiences and better security, making them ideal for complex or performance-heavy apps."
      },
      { 
        question: "What determines mobile app development costs?", 
        answer: "Costs depend on platform, features, design complexity, and backend requirements. Basic apps start at $15K, while complex apps can go up to $100K+. We offer MVP development to reduce initial costs."
      },
      { 
        question: "When is cross-platform development the right choice?", 
        answer: "Cross-platform development is ideal for budget-conscious projects with simpler features. It offers faster time-to-market and works well for apps that don’t need deep device integration or high performance."
      },
      { 
        question: "What's your app testing methodology?", 
        answer: "We conduct functional, UI, performance, security, and compatibility testing across multiple devices and platforms. Automated testing covers 80-90% of code, while manual testing ensures top-notch user experience."
      },
      { 
        question: "How do you optimize apps for app stores?", 
        answer: "Our ASO strategy includes keyword optimization, compelling visuals, review generation, and A/B testing to boost app installs. We monitor 15+ factors and adjust based on data and competitor strategies."
      },
    ],
    "Graphic Designing": [
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
      },
    ],
  };
  

  const initialFAQs = Object.keys(faqData).map(category => faqData[category][0]);
  const displayedFAQs = activeCategory ? faqData[activeCategory] : initialFAQs;

  useEffect(() => {
    setOpenItems(new Array(displayedFAQs.length).fill(false));
  }, [activeCategory, displayedFAQs.length]);

  useEffect(() => {
    const adjustHeight = () => {
      document.querySelectorAll('.faq-item .content').forEach((content, index) => {
        const contentElement = content as HTMLElement;
        if (openItems[index]) {
          contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
        } else {
          contentElement.style.maxHeight = '0';
        }
      });
    };
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => window.removeEventListener('resize', adjustHeight);
  }, [openItems]);

  const toggleFAQ = (index: number) => {
    setOpenItems(prev => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  useEffect(() => {
    if (theme === undefined) {
      setTheme('dark');
    }
  }, [theme, setTheme]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center min-h-[80vh] bg-[#F0F2F9] pb-20 dark:bg-[#121723] pt-16"> {/* Reduced mt-20 to pt-16 */}
        <div className="container mx-auto px-4">
          <SectionTitle
            title="FAQ"
            paragraph="Stay updated with expert tips, industry trends, and digital strategies to grow your business online. 🚀"
            center
          />
          <div className="rounded-xl p-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center my-4 bg-white dark:bg-gray-dark"> {/* Reduced my-6 to my-4 */}
            <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0"> {/* Reduced mb-6 to mb-4 */}
              <Image
                src="/images/blog/blog-1.jpg"
                alt="Illustration"
                width={300}
                height={300}
                className="w-3/4 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-1/2">
              {/* Desktop Filter */}
              <div className="hidden md:flex flex-wrap gap-2 mb-3"> {/* Reduced mb-4 to mb-3 */}
                <button
                  className={`px-3 py-1 rounded-sm font-medium border border-primary text-primary dark:border-white dark:text-white ${!activeCategory ? 'bg-primary text-white dark:bg-primary dark:text-white' : ''} hover:bg-primary/90 hover:text-white dark:hover:bg-primary dark:hover:text-white`}
                  onClick={() => setActiveCategory(null)}
                >
                  All
                </button>
                {Object.keys(faqData).map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded-sm font-medium border border-primary text-primary dark:border-white dark:text-white ${activeCategory === category ? 'bg-primary text-white dark:bg-primary dark:text-white' : ''} hover:bg-primary/90 hover:text-white dark:hover:bg-primary dark:hover:text-white`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Mobile Filter */}
              <div className="md:hidden mb-3"> {/* Reduced mb-4 to mb-3 */}
                <select
                  className="w-full p-2 rounded-sm border bg-[#f8f8f8] text-primary border-primary focus:border-primary dark:bg-[#2C303B] dark:text-white dark:border-white dark:focus:border-primary"
                  value={activeCategory || ""}
                  onChange={(e) => setActiveCategory(e.target.value || null)}
                >
                  <option value="" className="bg-[#f8f8f8] text-black dark:bg-[#2C303B] dark:text-white">All</option>
                  {Object.keys(faqData).map((category) => (
                    <option key={category} value={category} className="bg-[#f8f8f8] text-black dark:bg-[#2C303B] dark:text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* FAQ Items */}
              <div className="space-y-3"> {/* Reduced space-y-4 to space-y-3 */}
                {displayedFAQs.map((faq, index) => (
                  <div className={`faq-item ${openItems[index] ? 'open' : ''}`} key={index}>
                    <div
                      className="flex justify-between items-center cursor-pointer py-2 rounded-sm shadow-md px-3 bg-white text-black border-primary dark:bg-[#2C303B] dark:text-white dark:border-white"
                      onClick={() => toggleFAQ(index)}
                    >
                      <p className="text-lg font-medium">{faq.question}</p>
                      <span className="transition-transform duration-300 text-primary dark:text-white">
                        {openItems[index] ? "↑" : "↓"}
                      </span>
                    </div>
                    <div
                      className="content mt-2 text-base text-body-color dark:text-body-color-dark" 
                      style={{ maxHeight: openItems[index] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;