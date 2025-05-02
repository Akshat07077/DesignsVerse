"use client";

import { Brand } from "@/types/brand";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"; // Added for animations
import brandsData from "./brandsData";

const Brands = () => {
  // Animation variants for brand cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative  ">
      <div className="container mx-auto ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-2xl  py-20">
              <Marquee
                gradient={false}
                speed={60}
                pauseOnHover
                className="space-x-8"
              >
                {brandsData.map((brand, index) => (
                  <motion.div
                    key={brand.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <SingleBrand brand={brand} />
                  </motion.div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { name, number } = brand;

  return (
    <div className="flex flex-col items-center justify-center text-center mx-6 mb-2 w-48">
      <a
        target="_blank"
        rel="nofollow noreferrer"
        className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300"
      >
        <div className="text-4xl font-extrabold text-primary dark:text-primary-light">
          {number}
        </div>
        <div className="text-base font-semibold text-gray-800 dark:text-gray-200 mt-2">
          {name}
        </div>
      </a>
    </div>
  );
};

export default Brands;