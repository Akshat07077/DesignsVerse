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
  },
  {
    id: 2,
    name: "Brownway Medical",
    description: "Healthcare management system with user-friendly interface",
    image: "/images/cient/client-1.png",
    link: "#",
  },
  {
    id: 3,
    name: "Nagar Security Group",
    description: "Security services portal with advanced features",
    image: "/images/cient/client-1.png",
    link: "#",
  },
  {
    id: 4,
    name: "Beauty Essence",
    description: "Beauty and cosmetics e-commerce solution",
    image: "/images/cient/client-1.png",
    link: "#",
  },
];

const RecentProjects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative z-10 py-7 md:py-15 lg:py-20 bg-white dark:bg-[#121723]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Recent Masterpieces"
          paragraph="Explore DevnDez's latest projects showcasing innovative design, seamless functionality, and tailored solutions."
          center
          mb="50px"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-all duration-500"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Container (Name and View More) */}
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {project.name}
                </h3>
                <Link
                  href={project.link}
                  className="flex items-center text-primary dark:text-primary-light font-semibold text-xs bg-primary/10 dark:bg-primary-light/10 px-3 py-1 rounded-full transition-all duration-300 group/link"
                >
                  View More
                  <svg
                    className="ml-1 w-3 h-3 transform rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Decorative Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;