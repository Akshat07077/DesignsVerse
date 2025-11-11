"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import projectsData from "@/data/projects.json";

const RecentProjects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };



  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-24 bg-white dark:bg-[#121723] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('/images/grid-pattern.svg')] bg-repeat bg-[length:40px_40px]"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 dark:bg-secondary/5"></div>
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
          initial="hidden"
          animate="visible"
        >
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#161b22] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${project.lightAccent} dark:${project.darkAccent}`}></div>
              <div className="absolute inset-0 bg-white/30 dark:bg-black/20 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500 rounded-xl" />
              <motion.div
                className="relative w-full h-[180px] overflow-hidden bg-gray-50 dark:bg-gray-900"
                initial="initial"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                  quality={100}
                />
              </motion.div>
              <motion.div className="p-5 relative z-20" >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {project.name}
                    </h3>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-primary dark:text-primary-light"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 dark:group-hover:border-primary-light/20 rounded-xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default RecentProjects;  