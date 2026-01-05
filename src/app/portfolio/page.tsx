"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  const projects = projectsData.projects;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black transition-colors duration-500">
      {/* Premium Background Effects - Dual Theme */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-400/40 via-blue-300/30 to-transparent dark:from-blue-500/30 dark:via-blue-500/20 dark:to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-400/30 via-indigo-300/20 to-transparent dark:from-blue-600/20 dark:via-indigo-600/20 dark:to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-transparent to-transparent dark:from-slate-900/50 dark:via-transparent dark:to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 dark:opacity-10 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-24 md:pt-32 relative z-10 max-w-7xl">
        {/* Header Section - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 dark:border-blue-500/30 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-500/10 dark:to-indigo-500/10 backdrop-blur-xl px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-400 shadow-lg shadow-blue-500/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
            Selected Work
          </motion.span>
          
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400">
              Crafting Digital
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-400 dark:to-indigo-500">
              Excellence
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Each project represents a journey from concept to creation—blending 
            cutting-edge technology with timeless design principles.
          </p>
        </motion.div>

        {/* Single Column Projects Grid - Left Aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-6 md:space-y-8"
        >
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <article className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/80 dark:border-slate-700/50 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 dark:from-slate-900/90 dark:via-slate-800/70 dark:to-slate-950/90 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 hover:shadow-2xl hover:shadow-blue-200/60 dark:hover:shadow-blue-500/20 transition-all duration-700 hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:-translate-y-1">
                  
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 via-transparent to-indigo-200/10 dark:from-blue-500/5 dark:via-transparent dark:to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="relative lg:w-5/12 h-64 md:h-80 lg:h-96 overflow-hidden">
                      <Image
                        src={project.imageUrl || project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Floating Project Number */}
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      {/* Category Badge */}
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-500/20 dark:to-indigo-500/20 border border-blue-400/50 dark:border-blue-500/30 px-4 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-3 md:mb-4 shadow-sm shadow-blue-500/20"
                      >
                        {project.name}
                      </motion.span>

                      {/* Title */}
                      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all duration-500 leading-tight">
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        {project.tags?.slice(0, 4).map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-slate-100/80 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50 px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur-sm hover:border-blue-400/50 dark:hover:border-blue-500/30 hover:text-blue-700 dark:hover:text-blue-400 transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Tech Stack & CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4 pt-4 md:pt-6 border-t border-slate-200/80 dark:border-slate-700/50">
                        <div className="flex flex-wrap items-center gap-2">
                          {project.techStack?.slice(0, 4).map((tech: any) => (
                            <span
                              key={tech.name}
                              className="inline-flex items-center rounded-lg bg-slate-100/50 dark:bg-slate-800/30 border border-slate-300/40 dark:border-slate-700/30 px-2.5 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs text-slate-600 dark:text-slate-300 font-mono"
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                        
                        <motion.span 
                          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all whitespace-nowrap"
                          whileHover={{ x: 5 }}
                        >
                          Explore Project
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 max-w-4xl"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-base md:text-lg">Have a project in mind?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 px-6 md:px-8 py-3 md:py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Let's Create Together
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
