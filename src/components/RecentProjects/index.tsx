"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import projectsData from "@/data/projects.json";

const RecentProjects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative z-10 py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 dark:from-[#0a0e1a] dark:via-[#121723] dark:to-[#0a0e1a] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[url('/images/grid-pattern.svg')] bg-repeat bg-[length:40px_40px]"></div>
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-pink-400/20 to-orange-500/20 dark:from-pink-500/10 dark:to-orange-600/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="Our Recent Masterpieces"
          paragraph="Explore our portfolio of innovative digital solutions that transform businesses and delight users."
          center
          mb="80px"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              {/* Premium Top Accent Bar with Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.lightAccent} dark:${project.darkAccent} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Animated Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              </div>

              {/* Image Section with Enhanced Overlay */}
              <Link href={`/projects/${project.slug}`} className="block">
                <motion.div
                  className="relative w-full h-[200px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 4}
                    quality={95}
                  />
                  
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* View Project Button - Appears on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <span className="px-6 py-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900 dark:text-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </Link>

              {/* Content Section with Better Spacing */}
              <div className="p-6 relative z-20">
                {/* Project Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light">
                    {project.tags[0] || "Web Design"}
                  </span>
                </div>

                {/* Title and Description */}
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300 leading-tight">
                    {project.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-4" />

                {/* Tech Stack Tags */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer with Link */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/link inline-flex items-center text-sm font-semibold text-primary dark:text-primary-light hover:gap-2 transition-all duration-300"
                  >
                    <span className="relative">
                      View Details
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-primary-light group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {/* Live Preview Icon */}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                      title="Live Preview"
                    >
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Premium Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 dark:group-hover:border-primary-light/30 rounded-2xl transition-all duration-500 pointer-events-none" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
