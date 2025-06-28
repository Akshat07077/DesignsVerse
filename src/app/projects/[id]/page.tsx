"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import projectsData from '@/data/projects.json';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview');
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.projects.find(p => p.slug === params.id);
  
  if (!project) {
    notFound();
  }

  // Use images array if available, otherwise fallback to single image
  const images = project.images || [project.imageUrl];
  const maxImages = Math.min(images.length, 3); // Maximum 3 images

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (maxImages <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % maxImages);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [maxImages]);

  if (!isMounted) {
    return null;
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 pt-24 md:pt-32 relative z-10">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured Project
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Main Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-none overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-gray-700 mb-16"
        >
          {/* Image Carousel Section */}
          <div className="lg:w-1/2 relative overflow-hidden h-[400px] lg:h-auto">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={images[currentImageIndex]} 
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            {maxImages > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex space-x-2">
                  {Array.from({ length: maxImages }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-110 shadow-lg' 
                          : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="absolute top-6 left-6 z-20">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 md:p-10 lg:p-12">
            {/* Tabs */}
            <motion.div 
              className="flex border-b border-gray-200 dark:border-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-4 px-4 font-medium text-sm md:text-base relative ${activeTab === 'overview' ? 'text-primary dark:text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                Overview
                {activeTab === 'overview' && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-primary"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-4 px-4 font-medium text-sm md:text-base relative ${activeTab === 'features' ? 'text-primary dark:text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                Features
                {activeTab === 'features' && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-primary"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className={`pb-4 px-4 font-medium text-sm md:text-base relative ${activeTab === 'tech' ? 'text-primary dark:text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                Tech Stack
                {activeTab === 'tech' && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-primary"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[300px]"
              >
                {activeTab === 'overview' && (
                  <div>
                    <motion.p 
                      className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                    <ul className="space-y-3 mb-8">
                      {project.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      {/* <motion.a
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        href="#"
                        className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 font-medium"
                      >
                        View Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href="#"
                        className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 font-medium"
                      >
                        GitHub Repository
                      </motion.a> */}
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Technologies Used</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                      {project.techStack.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                          <div className="w-10 h-10 mb-2 relative">
                            <Image 
                              src={tech.logo} 
                              alt={tech.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-center text-gray-700 dark:text-gray-300">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary p-0.5 rounded-2xl mb-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Interested in this project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with similar innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-8 py-4 bg-[#6E89F9] hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300"
              >
                Get Free Quote
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 