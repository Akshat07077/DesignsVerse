'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "82495069-61df-41f2-8dee-8380a0fa117c",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="contact"
      className="relative  bg-white dark:bg-[#121723] py-16 md:py-20 lg:py-28"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap -mx-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our team is here to assist you. Drop us a message, and we’ll respond promptly!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <motion.div variants={inputVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition"
                      required
                    />
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition"
                      required
                    />
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Enter your message"
                      className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition resize-none"
                      required
                    ></textarea>
                  </motion.div>
                  <motion.div variants={inputVariants}>
                    <motion.button
                      type="submit"
                      className={`w-full rounded-md px-6 py-3 text-white font-medium ${
                        isSubmitted
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      } flex items-center justify-center transition duration-300`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                          ></path>
                        </svg>
                      ) : null}
                      {isSubmitted ? "Message Sent!" : isLoading ? "Sending..." : "Send Message"}
                    </motion.button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              className="relative h-[400px] md:h-[500px] lg:h-full rounded-lg overflow-hidden shadow-2xl"
              variants={containerVariants}
            >
              <Image
                src="/images/contact/1.png"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <motion.h3
                  className="text-white text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Let’s Connect!
                </motion.h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;