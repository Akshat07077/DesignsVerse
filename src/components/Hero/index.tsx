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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-50 pb-16 pt-[180px] dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 md:pb-[120px] md:pt-[120px] xl:pb-[180px] xl:pt-[140px] 2xl:pb-[200px] 2xl:pt-[150px]"
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
                className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
                AI-Powered Digital Solutions
              </motion.div>

              <motion.h1
                className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl md:leading-[1.2]"
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Transform Your Business</span>
                  <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-blue-200/70 dark:bg-blue-900/50"></span>
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  with AI Innovation
                </span>
              </motion.h1>

              <motion.p
                className="mx-auto mb-10 max-w-[700px] text-xl leading-relaxed text-gray-600 dark:text-gray-300 sm:text-2xl"
              >
                We leverage cutting-edge AI technology to create intelligent digital solutions that automate processes, 
                enhance customer experiences, and drive unprecedented growth for your business.
              </motion.p>

              <motion.div
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
              >
                <Link
                  target="_blank"
                  href="http://api.whatsapp.com/send/?phone=9413466075&text=Hello,%20I%20Want%20to+book+a+free+consultancy+call&type=phone_number&app_absent=0"
                  className="group relative flex items-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    <FiPhone className="mr-3 h-5 w-5" />
                    Get Free Consultation
                  </span>
                  <span className="absolute -right-5 -top-5 h-10 w-10 rounded-full bg-white/20 transition-all duration-500 group-hover:scale-[15]"></span>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
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
                      100+ AI Projects Delivered
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
                        4.9
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
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Powered by
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Advanced AI
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
