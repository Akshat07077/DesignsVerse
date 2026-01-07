'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Script from "next/script";

interface ServiceDetailContentProps {
  post: any;
  serviceSchema: any;
  data: any[];
}

const ServiceDetailContent = ({ post, serviceSchema, data }: ServiceDetailContentProps) => {
  // Animation variants
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerChildren: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section with Enhanced Gradient and Parallax-like Blobs */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Enhanced Animated Background Blobs with Motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.8, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
        </div>

        <main className="relative mt-[120px] max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          {/* Breadcrumb Navigation with Hover Effects */}
          <motion.nav 
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Link href="/" className="hover:text-primary transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors duration-300">Services</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{post.title}</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content with Staggered Animations */}
            <motion.section 
              className="w-full lg:w-2/3"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              {/* Premium Header Card with Glassmorphism */}
              <motion.div variants={fadeInUp} className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] p-8 md:p-12 mb-8">
                {/* Service Category Badge with Pulse */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Premium Service
                  </span>
                </motion.div>

                {/* Title with Gradient and Hover Effect */}
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                    {post.title}
                  </span>
                </motion.h1>

                {/* Author & Meta Info with Icons */}
              {/* Ultra Clean One-Line Stats */}
<div className="flex flex-wrap items-center justify-center gap-8 pb-8 border-b border-gray-200/50 dark:border-gray-700/50 text-sm">
  <span className="font-bold text-gray-700 dark:text-gray-300">✓ Verified Service</span>
  <span className="font-bold text-gray-700 dark:text-gray-300">⚡ 24hr Response</span>
  <span className="font-bold text-gray-700 dark:text-gray-300">⭐ 4.9 Rating</span>
  <span className="font-bold text-gray-700 dark:text-gray-300">🎯 100+ Projects</span>
  <span className="font-bold text-gray-700 dark:text-gray-300">🏆 5+ Years</span>
</div>

              </motion.div>

              {/* Video Section with Scale on Hover */}
              {post.video && (
                <motion.div 
                  variants={fadeInUp}
                  className="relative mb-8 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <video 
                      src={post.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Enhanced Decorative Elements with Motion */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </motion.div>
              )}

              {/* Service Description with Premium Typography and Fade In */}
              <motion.article 
                variants={fadeInUp}
                className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-lg p-8 md:p-12 mb-8"
              >
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-a:text-primary hover:prose-a:text-primary/80 prose-a:no-underline
                    prose-strong:text-gray-900 dark:prose-strong:text-white
                    prose-ul:list-none prose-ul:pl-0
                    prose-li:relative prose-li:pl-7 prose-li:mb-3
                    before:prose-li:content-['✓'] before:prose-li:absolute before:prose-li:left-0 
                    before:prose-li:text-primary before:prose-li:font-bold before:prose-li:text-xl"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </motion.article>
              
              {/* AI Services Grid - Enhanced with Staggered Card Animations */}
              {post.id === "1" && (
                <motion.div 
                  variants={fadeInUp}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-gray-900/80 dark:to-blue-900/20 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-lg p-8 md:p-12 mb-8"
                >
                  <motion.div 
                    className="text-center mb-12"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                  >
                    <span className="inline-block px-4 py-2 mb-4 text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 rounded-full">
                      AI POWERED
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      Our AI Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                      Leverage cutting-edge artificial intelligence to transform your business
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="initial"
                    animate="animate"
                    variants={staggerChildren}
                  >
                    {[
                      { 
                        title: "Chatbot Development", 
                        desc: "Create intelligent chatbots for customer support and engagement.",
                        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                        gradient: "from-blue-500 to-cyan-500",
                        bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30"
                      },
                      { 
                        title: "Model Fine-Tuning", 
                        desc: "Fine-tune AI models for specific tasks and improve performance.",
                        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                        gradient: "from-green-500 to-emerald-500",
                        bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30"
                      },
                      { 
                        title: "NLP Project Development", 
                        desc: "Develop NLP projects to analyze and understand human language.",
                        icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                        gradient: "from-purple-500 to-pink-500",
                        bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30"
                      },
                      { 
                        title: "Data Analysis", 
                        desc: "Analyze data to extract insights and drive decision-making.",
                        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                        gradient: "from-orange-500 to-red-500",
                        bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30"
                      },
                      { 
                        title: "Custom AI Solutions", 
                        desc: "Build custom AI solutions tailored to your business needs.",
                        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                        gradient: "from-rose-500 to-pink-500",
                        bgGradient: "from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30"
                      },
                      { 
                        title: "AI Consultation", 
                        desc: "Consult with our experts to explore AI opportunities for your business.",
                        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                        gradient: "from-indigo-500 to-blue-500",
                        bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30"
                      },
                    ].map((service, index) => (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                      >
                        {/* Icon with Gradient and Rotation on Hover */}
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                          </svg>
                        </motion.div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {service.desc}
                        </p>

                        {/* Decorative corner accent with opacity change */}
                        <motion.div 
                          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} opacity-10 rounded-bl-[100px]`}
                          whileHover={{ opacity: 0.3 }}
                          transition={{ duration: 0.5 }}
                        ></motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            
              {/* Features Card with Video and Staggered Points */}
              <motion.div 
                variants={fadeInUp}
                className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-lg p-8 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Small Video Section with Scale on Hover */}
                  <motion.div 
                    className="relative w-full md:w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <video 
                      src={post.smallVideo} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </motion.div>

                  {/* Content Section with Staggered Animations */}
                  <motion.div 
                    className="flex-1"
                    initial="initial"
                    animate="animate"
                    variants={staggerChildren}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                      {post.heading}
                    </h3>
                    <div className="space-y-4">
                      {post.points?.map((point: string, index: number) => (
                        <motion.div 
                          key={index} 
                          variants={fadeInUp}
                          className="flex items-start gap-4 group"
                        >
                          <motion.div 
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2 }}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.section>

            {/* Sidebar with Premium Design and Sticky Positioning */}
            <motion.aside 
              className="w-full lg:w-1/3 space-y-8 sticky top-24"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              {/* Premium CTA Card with Particle-like Effects */}
              <div className="sticky top-24 space-y-8">
                <motion.div 
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-8 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Background Pattern with Motion */}
                  <motion.div 
                    className="absolute inset-0 opacity-10"
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                  </motion.div>

                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
                      <p className="text-blue-100 text-sm">Connect with our experts now</p>
                    </div>

                    <div className="space-y-4">
                      <motion.a
                        href="tel:+919413466075"
                        className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-white hover:bg-gray-50 text-blue-600 font-bold rounded-2xl transition-all duration-300 transform shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.5)" }}
                      >
                        <Image
                          src="/images/call.png"
                          alt="Call Icon"
                          width={24}
                          height={24}
                        />
                        <span>Call Now</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>

                      <div className="grid grid-cols-2 gap-3 text-white text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <p className="text-2xl font-bold">24/7</p>
                          <p className="text-xs text-blue-100">Available</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <p className="text-2xl font-bold">100+</p>
                          <p className="text-xs text-blue-100">Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Services List with Modern Design and Hover Lift */}
                <motion.div 
                  className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-lg p-8"
                  initial="initial"
                  animate="animate"
                  variants={staggerChildren}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-primary to-purple-600 rounded-full"></span>
                    All Services
                  </h3>
                  <div className="space-y-3">
                    {data.map((service) => (
                      <motion.div key={service.id} variants={fadeInUp}>
                        <Link 
                          href={`/services/${service.id}`}
                          className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                            service.id === post.id 
                              ? 'bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary/20' 
                              : 'bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 border-2 border-transparent'
                          }`}
                        >
                          <span className={`text-sm font-semibold ${
                            service.id === post.id 
                              ? 'text-primary' 
                              : 'text-gray-700 dark:text-gray-300 group-hover:text-primary'
                          } transition-colors`}>
                            {service.title}
                          </span>
                          <svg className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform ${
                            service.id === post.id ? 'text-primary' : 'text-gray-400'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Sidebar Video with Premium Frame and Parallax Effect */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <video 
                      src="/video/sbimg.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-[400px] object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                      initial={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-white text-xl font-bold mb-2">See Our Work</h4>
                      <p className="text-white/80 text-sm">Transforming ideas into reality</p>
                    </div>
                  </div>
                  {/* Decorative Elements with Rotation */}
                  <motion.div 
                    className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.aside>
          </div>
        </main>
      </div>
    </>
  );
};

export default ServiceDetailContent;
