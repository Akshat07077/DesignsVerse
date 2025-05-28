"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const projects = [
  {
    id: 1,
    name: "Alphamkela",
    description: "E-commerce platform with cutting-edge design",
    image: "/images/cient/client-1.png",
    link: "#",
    tags: ["E-commerce", "React", "Node.js"],
  },
  {
    id: 2,
    name: "Brownway Medical",
    description: "Healthcare management system with user-friendly interface",
    image: "/images/cient/client-1.png",
    link: "#",
    tags: ["Healthcare", "UI/UX", "Database"],
  },
  {
    id: 3,
    name: "Nagar Security Group",
    description: "Security services portal with advanced features",
    image: "/images/cient/client-1.png",
    link: "#",
    tags: ["Security", "Dashboard", "API"],
  },
  {
    id: 4,
    name: "Beauty Essence",
    description: "Beauty and cosmetics e-commerce solution",
    image: "/images/cient/client-1.png",
    link: "#",
    tags: ["Cosmetics", "Payment", "Mobile"],
  },
];

const RecentProjects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1] 
      },
    }),
    hover: {
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="relative z-10 py-12 md:py-16 lg:py-20 bg-white dark:bg-[#121723]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Recent Masterpieces"
          paragraph="Explore DevnDez's latest projects showcasing innovative design, seamless functionality, and tailored solutions."
          center
          mb="60px"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500 rounded-lg" />
              
              {/* Image Container */}
              <motion.div 
                className="relative w-full h-[160px] overflow-hidden rounded-t-lg"
                variants={imageVariants}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                  quality={90}
                />
              </motion.div>

              {/* Content Container */}
              <div className="p-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Info */}
                <div>
                  <h3 className="text-base font-bold text-gray-800 dark:text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 dark:group-hover:border-primary-light/20 rounded-lg transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary transition-colors duration-300"
          >
            View all projects
            <svg
              className="ml-2 w-4 h-4"
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
              />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default RecentProjects;