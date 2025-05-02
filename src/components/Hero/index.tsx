"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50 pb-16 pt-[120px] dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-[length:80px_80px] bg-repeat"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute -right-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-blue-500 opacity-10 blur-[100px] dark:opacity-5"></div>
      <div className="absolute -bottom-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-blue-400 opacity-10 blur-[100px] dark:opacity-5"></div>

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mx-auto max-w-[850px] text-center"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
                Digital Transformation Experts
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl md:leading-[1.2]"
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Elevate Your</span>
                  <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-blue-200/70 dark:bg-blue-900/50"></span>
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mx-auto mb-10 max-w-[700px] text-xl leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl"
              >
                We craft bespoke digital solutions that drive growth, enhance
                efficiency, and position your brand as an industry leader.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
              >
                <Link
                  target="_blank"
                  href="http://api.whatsapp.com/send/?phone=9413466075&text=Hello,%20I%20Want%20to+book+a+free+consultancy+call&type=phone_number&app_absent=0"
                  className="group relative flex items-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    {/* <FiPhone className="mr-3 h-5 w-5" /> */}
                    Book Free Consutancy
                  </span>
                  <span className="absolute -right-5 -top-5 h-10 w-10 rounded-full bg-white/20 transition-all duration-500 group-hover:scale-[15]"></span>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={itemVariants}
                className="mt-12 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0"
              >
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <Image
                        key={item}
                        src={`/images/hero/${item}.png`}
                        alt="Client"
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                      />
                    ))}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      100+ Happy Clients
                    </div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="text-yellow-400 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute right-10 top-1/4 z-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]"></div>
                <div className="absolute bottom-1/4 left-10 z-0 h-40 w-40 rounded-full bg-blue-400/10 blur-[80px]"></div>

                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Trusted by
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Global Brands
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute right-10 top-1/4 z-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]"></div>
      <div className="absolute bottom-1/4 left-10 z-0 h-40 w-40 rounded-full bg-blue-400/10 blur-[80px]"></div>

      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-1/3 hidden h-16 w-16 rounded-lg bg-blue-600/10 shadow-lg backdrop-blur-sm dark:bg-blue-400/10 lg:block"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-10 hidden h-20 w-20 rotate-45 rounded-lg bg-blue-600/10 shadow-lg backdrop-blur-sm dark:bg-blue-400/10 lg:block"
      ></motion.div>

      {/* Floating Screenshot Mockup */}
      {/* <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -10, 0]
        }}
        transition={{ 
          delay: 0.8, 
          duration: 0.8,
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute right-10 top-1/2 hidden -translate-y-1/2 transform lg:block"
      >
        <div className="relative  rounded-2xl border-8 border-gray-900 shadow-2xl dark:border-gray-700 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="/video/s1.mp4" 
          >
            <source src="/videos/dashboard-demo.mp4" type="video/mp4" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Video not supported</p>
            </div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h4 className="text-lg font-semibold">Our Dashboard</h4>
            <p className="text-sm text-gray-300">See it in action</p>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
