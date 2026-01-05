"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import projectsData from '@/data/projects.json';
import {
  FaReact,
  FaNodeJs,
  FaBrain,
  FaSearch,
  FaLink,
  FaRobot,
} from 'react-icons/fa';
import {
  SiTensorflow,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiStripe,
  SiRedis,
} from 'react-icons/si';

// Icon mapping object
const iconMap: { [key: string]: any } = {
  FaReact,
  FaNodeJs,
  FaBrain,
  FaSearch,
  FaLink,
  FaRobot,
  SiTensorflow,
  SiMongodb,
  SiAmazonaws: SiAmazon,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiStripe,
  SiRedis,
};

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState<'overview' | 'tech'>('overview');
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.projects.find(p => p.slug === id);
  
  if (!project) {
    notFound();
  }

  const images = project.images || [project.imageUrl];
  const maxImages = Math.min(images.length, 5);
  const hasVideo = (project as any).videoUrl;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (maxImages <= 1 || hasVideo) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % maxImages);
    }, 4000);

    return () => clearInterval(interval);
  }, [maxImages, hasVideo]);

  if (!isMounted) {
    return null;
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black transition-colors duration-500">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/30 via-orange-300/20 to-transparent dark:from-amber-500/20 dark:via-orange-500/15 dark:to-transparent blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-400/25 via-purple-300/15 to-transparent dark:from-blue-600/15 dark:via-purple-600/15 dark:to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-transparent to-transparent dark:from-slate-900/50 dark:via-transparent dark:to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-24 md:pt-32 relative z-10 max-w-7xl">
        
        {/* Breadcrumb & Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </a>
        </motion.div>

        {/* Hero Section - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 dark:border-amber-500/30 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-500/10 dark:to-orange-500/10 backdrop-blur-xl px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400/90 shadow-lg shadow-amber-500/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
            Case Study
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400">
              {project.title}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl"
          >
            {project.description}
          </motion.p>

          {/* Project Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-6 mt-8 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-slate-500 dark:text-slate-500 uppercase tracking-wider text-xs font-semibold">Category</span>
              <span className="text-slate-900 dark:text-white font-medium">{project.name}</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Main Hero Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-16 md:mb-24"
        >
          <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/50 shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
            {hasVideo ? (
              <div className="relative w-full h-full bg-black">
                <video
                  src={(project as any).videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Live Preview</p>
                    <p className="text-sm font-medium">{(project as any).videoLabel ?? 'Interactive Demo'}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-medium">Recording</span>
                  </div>
                </div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            )}
            
            {/* Navigation Dots */}
            {!hasVideo && maxImages > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="flex gap-2 rounded-full bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20">
                  {Array.from({ length: maxImages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-amber-400 w-8'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Content Grid - Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Overview Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Key Features & Solutions
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-900/90 dark:via-slate-800/50 dark:to-slate-900/90 border border-slate-200/80 dark:border-slate-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-amber-200/20 dark:hover:shadow-amber-500/10 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Showcase Gallery */}
            {maxImages > 1 && (
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Visual Showcase
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {images.slice(0, maxImages).map((img, index) => (
                    <motion.div
                      key={img}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 cursor-pointer"
                      onClick={() => goToImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">View Full Screen</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Tech Stack Card */}
            <div className="sticky top-24 space-y-8">
              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-900/90 dark:via-slate-800/50 dark:to-slate-900/90 border border-slate-200/80 dark:border-slate-800/50 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-black/30">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  Tech Stack
                </h3>
                
                <div className="space-y-3">
                  {project.techStack.map((tech: any, index: number) => {
                    const IconComponent = iconMap[tech.icon];
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-amber-400/50 dark:hover:border-amber-500/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center text-xl shadow-sm">
                          {IconComponent ? <IconComponent className="text-slate-700 dark:text-slate-300" /> : <span>🔧</span>}
                        </div>
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl shadow-amber-500/30">
                <h3 className="text-xl font-bold mb-3">
                  Like This Project?
                </h3>
                <p className="text-sm text-white/90 mb-6 leading-relaxed">
                  Let's discuss how we can create something amazing for your business.
                </p>
                <a
                  href="/contact"
                  className="block w-full px-6 py-3 bg-white text-amber-600 rounded-xl font-semibold text-center hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-12 md:p-16 text-center border border-slate-800 dark:border-slate-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View More Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
