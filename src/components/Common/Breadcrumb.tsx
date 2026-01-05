"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <section className="relative z-10 overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-10 bg-[#FCFCFC] dark:bg-[#121723]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Side - Title & Description */}
          <div className="w-full px-4 md:w-7/12 lg:w-8/12">
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
                {pageName}
              </motion.span>
              
              <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400">
                  {pageName}
                </span>
              </h1>
              
              <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </motion.div>
          </div>

          {/* Right Side - Breadcrumb Navigation */}
          <div className="w-full px-4 md:w-5/12 lg:w-4/12">
            <motion.nav 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-start md:justify-end items-center"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/50 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-black/30">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:scale-110" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="hidden sm:inline">Home</span>
                  </Link>
                </li>
                
                <li>
                  <div className="flex items-center">
                    <svg 
                      className="w-4 h-4 text-slate-400 dark:text-slate-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </li>

                <li className="inline-flex items-center">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {pageName}
                  </span>
                </li>
              </ol>
            </motion.nav>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Breadcrumb;
