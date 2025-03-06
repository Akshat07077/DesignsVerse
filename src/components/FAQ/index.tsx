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
      { question: "What is responsive web design?", answer: "Responsive web design ensures your site adapts to different screen sizes using flexible layouts and CSS." },
      { question: "How long does it take to build a website?", answer: "Simple sites take 2-4 weeks; custom ones can take 2-6 months." },
      { question: "What’s the best framework?", answer: "React, Angular, and Vue.js are top choices based on project needs." },
      { question: "Do you offer maintenance?", answer: "Yes, we provide updates, security, and optimization post-launch." },
      { question: "What is headless CMS?", answer: "A headless CMS separates content from the front-end, using APIs for flexibility." },
    ],
    "Digital Marketing": [
      { question: "What is digital marketing?", answer: "It promotes brands online via social media, email, and search engines." },
      { question: "How effective is email marketing?", answer: "It offers a $42 ROI per $1 spent with personalized campaigns." },
      { question: "What are PPC campaigns?", answer: "Pay-Per-Click ads charge only when clicked, like Google Ads." },
      { question: "Can you boost brand visibility?", answer: "Yes, via targeted ads, content, and social media strategies." },
      { question: "What is content marketing?", answer: "It’s creating valuable content to attract your audience." },
    ],
    "SEO": [
      { question: "What is SEO?", answer: "SEO improves your site’s visibility on search engines." },
      { question: "How long for SEO results?", answer: "It takes 3-6 months for significant ranking improvements." },
      { question: "What are backlinks?", answer: "Links from other sites to yours, boosting credibility." },
      { question: "Do you offer local SEO?", answer: "Yes, we optimize for local searches with Google My Business." },
      { question: "What is keyword research?", answer: "It identifies search terms for content strategy." },
    ],
    "Mobile Development": [
      { question: "What is native app development?", answer: "Native apps are built for iOS/Android using Swift or Kotlin." },
      { question: "How much does an app cost?", answer: "Simple apps cost $10K, complex ones up to $100K+." },
      { question: "What’s cross-platform dev?", answer: "Tools like Flutter allow one codebase for iOS and Android." },
      { question: "Do you test apps?", answer: "Yes, we ensure functionality, performance, and security." },
      { question: "What is app store optimization?", answer: "ASO boosts app visibility in app stores." },
    ],
    "Graphic Designing": [
      { question: "What is graphic design?", answer: "It uses visuals to communicate ideas effectively." },
      { question: "Can you create a logo?", answer: "Yes, we design unique logos for your brand." },
      { question: "What tools do you use?", answer: "We use Photoshop, Illustrator, and Figma." },
      { question: "How long for a design?", answer: "Simple designs take 3-5 days, complex ones 2-3 weeks." },
      { question: "Do you offer print design?", answer: "Yes, we create brochures, banners, and cards." },
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