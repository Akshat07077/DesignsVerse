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
        answer: "Responsive web design is an approach that ensures websites automatically adapt to different screen sizes and devices. We implement fluid grids, flexible images, and CSS media queries to create layouts that respond to the user's environment. This includes optimizing typography for readability across devices, implementing touch-friendly navigation elements, and ensuring all interactive elements work perfectly on both desktop and mobile. Our responsive designs also consider varying connection speeds, with techniques like lazy loading for images on mobile networks. We test across 50+ device sizes to guarantee perfect rendering everywhere." 
      },
      { 
        question: "How long does it take to build a website?", 
        answer: "Website development timelines vary based on complexity. A basic 5-page brochure site typically takes 3-4 weeks including content creation. Medium complexity sites (15-20 pages with custom features) require 6-8 weeks. Large e-commerce platforms or web applications often take 3-6 months. Our process includes: 1 week discovery/planning, 2 weeks design/UX, 3-8 weeks development (depending on features), 1 week testing/QA, and 1 week launch preparation. We provide detailed project timelines upfront and use agile methodologies to deliver incremental updates every 2 weeks." 
      },
      { 
        question: "What's the best framework for web development?", 
        answer: "The ideal framework depends on your project requirements. For dynamic single-page applications, React.js offers excellent performance with its virtual DOM. Angular provides a full-featured solution for enterprise applications needing strict architecture. Vue.js strikes a balance with its gentle learning curve. For server-side rendering, Next.js (React) or Nuxt.js (Vue) are excellent. We typically recommend: React for interactive UIs, Angular for large teams, Vue for rapid prototyping, and Next.js for SEO-critical applications. Our architects will analyze your specific needs to recommend the optimal stack." 
      },
      { 
        question: "Do you offer ongoing website maintenance?", 
        answer: "Yes, we provide comprehensive maintenance plans including: Weekly security updates and patches, monthly performance audits, quarterly UX reviews, emergency support with 1-hour response time, content updates within 24 hours, and monthly analytics reporting. Our maintenance packages range from Basic ($99/month) covering essential updates to Enterprise ($499/month) including 24/7 monitoring and dedicated support. All plans include regular backups, malware scanning, and performance optimization. We'll create a customized maintenance plan based on your website's complexity and traffic levels." 
      },
      { 
        question: "What is headless CMS and its benefits?", 
        answer: "A headless CMS is a backend-only content management system that makes content accessible via APIs for display on any device. Unlike traditional CMS platforms, it completely separates content creation from presentation. Key benefits include: Omnichannel publishing (web, mobile apps, IoT), future-proof architecture, improved security (no public CMS interface), and developer flexibility to use any frontend technology. Popular options we work with include Contentful, Strapi, and Sanity. Headless CMS is ideal for companies needing content syndication across multiple platforms or those using modern JavaScript frameworks like React or Vue." 
      },
    ],
    "Digital Marketing": [
      { 
        question: "What does digital marketing encompass?", 
        answer: "Our digital marketing services cover: Search Engine Marketing (Google/Bing Ads with 20%+ conversion rates), Social Media Advertising (Facebook, Instagram, LinkedIn with precise audience targeting), Content Marketing (strategic blogging that generates 3x more leads), Email Marketing (automated campaigns with 40%+ open rates), Influencer Marketing (authentic partnerships driving brand trust), Conversion Rate Optimization (A/B testing improving conversions by 30-200%), and Analytics (custom dashboards tracking 50+ KPIs). We create integrated campaigns aligning with your sales funnel, from awareness to conversion tactics." 
      },
      { 
        question: "How effective is email marketing compared to other channels?", 
        answer: "Email marketing delivers exceptional ROI, averaging $42 for every $1 spent. Our segmented campaigns achieve 25-35% open rates (vs 15-25% industry average) and 3-5% click-through rates (vs 2% average). Key advantages include: Direct access to customer inboxes (90% check email daily), complete message control, high conversion potential (6x higher than social media), and detailed tracking. We combine email with other channels - for example, retargeting website visitors with email sequences increases conversions by 150%. Our AI-powered tools optimize send times and personalize content for each recipient." 
      },
      { 
        question: "What are the advantages of PPC advertising?", 
        answer: "PPC (Pay-Per-Click) advertising offers: Immediate visibility (unlike SEO's 3-6 month timeline), precise targeting (demographics, locations, devices, even life events), complete budget control (set exact daily limits), and detailed performance tracking. Our Google Ads campaigns typically achieve 200-300% ROI using advanced features like: Remarketing lists (70% higher conversion rates), smart bidding strategies (30% cost reduction), conversion tracking, and negative keywords to filter irrelevant traffic. We continuously optimize based on performance data, adjusting bids up to 50 times per campaign for maximum efficiency." 
      },
      { 
        question: "How do you boost brand visibility effectively?", 
        answer: "Our brand visibility strategies combine: SEO optimization (increasing organic traffic by 200-400%), strategic content creation (positioning you as an industry authority), social media engagement (growing communities by 30% monthly), PR outreach (securing features in relevant publications), and influencer collaborations (building credibility). For a SaaS client, we increased branded search volume by 320% in 6 months. We track visibility through: Search impression share (targeting 80%+), direct traffic growth (30-50% increases), branded mentions (50-100 monthly), and social share of voice (measuring against competitors)." 
      },
      { 
        question: "What makes content marketing successful?", 
        answer: "Successful content marketing requires: 1) Deep audience research identifying 50+ pain points, 2) Comprehensive keyword strategy (500+ terms mapped to buyer journey), 3) Consistent publishing calendar (2-4 pieces weekly), 4) Multi-format content (blogs, videos, infographics, podcasts), 5) Strategic distribution across 10+ channels, 6) Performance analysis (tracking 25+ engagement metrics). Our approach generates 15,000+ monthly visitors and 250+ qualified leads within 9 months for B2B clients. We focus on creating '10x content' that significantly outperforms competitors' materials in depth, quality, and usefulness." 
      },
    ],
    "SEO": [
      { 
        question: "What does professional SEO involve?", 
        answer: "Our comprehensive SEO services include: Technical SEO (site speed optimization achieving <2s load times, mobile-friendliness scoring 90/100+, structured data markup), On-Page SEO (content optimization with semantic analysis, internal linking strategies), and Off-Page SEO (quality backlink building earning 50-100 monthly links). We conduct thorough competitor gap analysis, identify 200-500 high-potential keywords, and implement E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) principles. Recent algorithm updates emphasize page experience metrics (Core Web Vitals), which we optimize alongside traditional ranking factors for sustainable results." 
      },
      { 
        question: "How long until we see SEO results?", 
        answer: "SEO follows a predictable timeline: Technical improvements show impact in 4-8 weeks. Content-based rankings mature in 3-6 months. Competitive keywords require 6-12 months. We provide monthly reports tracking: Organic traffic growth (typically 30-50% monthly increases), keyword rankings (50-100 new rankings monthly), and conversion rates (2-3x improvements). For an e-commerce client, we increased organic traffic by 180% in 8 months through content expansion and technical optimization. SEO is cumulative - results accelerate as domain authority grows, with month 6-12 often showing the most dramatic improvements." 
      },
      { 
        question: "Why are backlinks important and how do you build them?", 
        answer: "Backlinks remain Google's #2 ranking factor, serving as 'votes of confidence' from other sites. Our white-hat link building includes: Guest blogging on authoritative sites (placing 10-20 monthly), original research studies (generating 30-50 natural links), digital PR outreach (securing features in industry publications), expert roundups (positioning clients as authorities), and broken link building (replacing outdated resources). We focus on quality - one relevant link from an .edu or .gov site can be more valuable than 100 low-quality links. All links undergo strict quality vetting to ensure editorial value and compliance with Google's guidelines." 
      },
      { 
        question: "What's included in local SEO services?", 
        answer: "Our local SEO package includes: Google Business Profile optimization (complete setup, posts, Q&A management), local citation building across 100+ directories (ensuring NAP consistency), localized content creation (city/neighborhood pages), geo-targeted landing pages (10-15 location pages), review generation strategies (30-50 authentic monthly reviews), and local link building (chamber of commerce, local blogs). For a restaurant client, this approach increased 'dinner near me' visibility by 240% and drove 35% more foot traffic in 4 months. We also implement local business schema markup for enhanced search appearances." 
      },
      { 
        question: "How do you conduct keyword research effectively?", 
        answer: "Our 7-step keyword research process: 1) Seed brainstorming (100+ initial terms), 2) Competitor gap analysis (identifying 200-500 opportunities), 3) Search volume evaluation (focusing on 100-1,000 monthly searches), 4) Difficulty scoring (targeting achievable terms first), 5) Intent classification (matching content to search purpose), 6) Long-tail identification (30-50 character phrases), 7) Local variations for geo-targeted businesses. We use 5+ tools (Ahrefs, SEMrush, Google Keyword Planner) and deliver a prioritized keyword strategy document mapping 300-500 terms to specific pages and content types based on conversion potential." 
      },
    ],
    "Mobile Development": [
      { 
        question: "What are the benefits of native app development?", 
        answer: "Native apps provide superior performance and user experience by being specifically optimized for each platform. Key advantages include: Full hardware access (camera, GPS, sensors), smoother animations (consistent 60fps), offline functionality, immediate access to new OS features, and better security. Native development allows following platform-specific design guidelines (Material Design for Android, Human Interface Guidelines for iOS) for intuitive UX. Performance benchmarks show native apps load 30-50% faster than cross-platform alternatives. For complex applications like healthcare or finance apps requiring maximum performance and security, native development is ideal despite higher initial costs." 
      },
      { 
        question: "What determines mobile app development costs?", 
        answer: "App costs depend on: 1) Platforms (iOS $15-50K, Android $15-50K, both $25-80K), 2) Features (user auth $3-5K, payments $5-10K, APIs $2-5K each), 3) Design complexity (custom animations $5-15K), 4) Backend (database $8-15K, admin panel $5-10K), 5) Maintenance (15-20% of dev cost annually). Basic apps start around $15K, mid-range $50-80K, complex enterprise solutions $100K+. Our detailed proposals break costs by phase: Discovery ($2-5K), Design ($5-15K), Development ($15-60K), Testing ($3-8K). We offer MVP development at 30-50% cost reduction to validate concepts before full investment." 
      },
      { 
        question: "When is cross-platform development the right choice?", 
        answer: "Cross-platform frameworks (Flutter, React Native) are ideal when: Budget requires single codebase for both platforms (70-90% code reuse), time-to-market is critical (30-40% faster development), or the app doesn't need deep device integration. Modern tools achieve near-native performance (85-90% of native speed) with hot reload for faster iteration. We recommend cross-platform for: Content apps, simple CRUD applications, prototypes, or when targeting both platforms with limited resources. Performance testing shows cross-platform works well for apps where 60fps animations aren't critical and hardware access is minimal." 
      },
      { 
        question: "What's your app testing methodology?", 
        answer: "Our rigorous testing protocol includes: Functional testing (500-1,000 test cases), UI testing (20+ device sizes), Performance testing (load times <2s, memory leaks), Security testing (OWASP Top 10 compliance), Compatibility testing (10+ OS versions), and User acceptance testing (50-100 real user sessions). We use automated testing (Appium, XCTest) covering 80-90% of code and manual testing for UX evaluation. For financial apps, we conduct penetration testing identifying vulnerabilities. Our test reports include 50-100 page documentation of all test cases with screenshots, videos, and performance metrics." 
      },
      { 
        question: "How do you optimize apps for app stores?", 
        answer: "Our App Store Optimization (ASO) strategy covers: Keyword optimization (title character analysis, 10-15 relevant keywords), compelling visuals (5-7 screenshots with benefit captions), engaging preview videos (30-60 sec demonstrating key features), localized descriptions (5-10 languages), review generation (maintaining 4.5+ average rating), and conversion optimization (A/B testing different creatives). For a productivity app, our ASO increased organic installs by 150% in 3 months. We monitor 15+ ASO factors daily and adjust based on algorithm changes, competitor strategies, and performance data." 
      },
    ],
    "Graphic Designing": [
      { 
        question: "What services does graphic design include?", 
        answer: "Our graphic design services encompass: Brand identity systems (logos with 3-5 concepts, complete style guides), Marketing collateral (brochures, flyers, banners with print-ready files), Digital assets (social media templates sized for 10+ platforms), Presentation design (50+ slide templates), Packaging design (structural engineering + 3D mockups), and Environmental graphics (trade show booths, signage). We follow a structured process: Discovery (brand audit), Concept development (3-5 directions), Refinement (2-3 revision rounds), Finalization (production files in 10+ formats). All deliverables maintain pixel-perfect precision across print and digital mediums." 
      },
      { 
        question: "What's your logo design process?", 
        answer: "Our 6-phase logo process: 1) Discovery (brand questionnaire, competitor analysis), 2) Research (industry trends, color psychology), 3) Sketching (100+ hand-drawn concepts), 4) Digitalization (3-5 polished directions), 5) Refinement (2-3 revision rounds), 6) Delivery (final files in 15+ formats). We create logos that work at all sizes (from 16px favicons to billboards) with careful attention to: Scalability (vector-based), versatility (works in color/BW), memorability (distinctive shapes), and appropriateness (aligns with brand values). Clients receive brand guidelines covering exact color codes (Pantone, CMYK, RGB), typography pairings, and clear usage rules." 
      },
      { 
        question: "Which professional design tools do you use?", 
        answer: "We utilize industry-standard tools: Adobe Illustrator (vector graphics with 100+ artboards), Photoshop (photo editing with non-destructive layers), InDesign (multi-page layouts with master pages), Figma (interactive prototypes with design systems), After Effects (motion graphics with 60fps animations), and Blender (3D modeling for packaging). Files are meticulously organized with: Proper layer naming (50+ layers per complex design), color profiles (CMYK for print with Pantone spot colors), version control (Git for design), and export presets (100+ asset sizes automatically generated). Clients receive source files with full editing capabilities." 
      },
      { 
        question: "What are typical design project timelines?", 
        answer: "Design timelines vary: Simple designs (business cards, social posts) take 3-5 days. Medium complexity (8-page brochures, email templates) require 1-2 weeks. Comprehensive projects (brand identities, packaging systems) take 3-6 weeks. Our process includes: Day 1-2: Discovery, Day 3-5: Concepts, Day 6-10: Revisions, Day 11+: Finalization. Rush services (24-48 hour turnaround) carry a 30-50% premium. For large projects, we work in phases: Week 1: Logo concepts, Week 2-3: Brand assets, Week 4-5: Marketing materials, with client reviews after each phase." 
      },
      { 
        question: "Do you handle full print production?", 
        answer: "Yes, we manage complete print production including: Prepress (high-resolution files with bleeds and crop marks), color correction (matching Pantone colors within ΔE<3), paper selection (100+ stock options with samples), printing supervision (press checks for color accuracy), and quality control (10-point inspection checklist). We work with certified printing partners worldwide for: Offset printing (10,000+ units), digital printing (short runs), large format (up to 10ft banners), and specialty finishes (foil stamping, embossing). For clients needing distribution, we coordinate fulfillment with 3PL providers, including barcode implementation and packaging design." 
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