"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://m.facebook.com/people/DesignsVerse/100086505502218/",
      icon: <FaFacebookF />,
      color: "hover:text-[#1877F2]"
    },
    {
      name: "Twitter",
      href: "https://x.com/designs_verse",
      icon: <FaTwitter />,
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/designsverse.in/",
      icon: <FaInstagram />,
      color: "hover:text-[#E4405F]"
    },
    {
      name: "LinkedIn",
      href: "https://in.linkedin.com/company/designsverse",
      icon: <FaLinkedin />,
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919413466075",
      icon: <FaWhatsapp />,
      color: "hover:text-[#25D366]"
    }
  ];

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Web Development", href: "/services/1 " },
        { name: "ERP Solutions", href: "/services/2" },
        { name: "Digital Marketing", href: "/services/3" },
        { name: "UI/UX Design", href: "/services/4" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms-of-use" },
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <FiMail className="text-blue-500" />,
      text: "info@designsverse.com",
      href: "mailto:info@designsverse.com"
    },
    {
      icon: <FiPhone className="text-blue-500" />,
      text: "+91 94134 66075",
      href: "tel:+919413466075"
    }
  ];

  return (
    <motion.footer 
      ref={footerRef}
      style={{ opacity }}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent dark:from-blue-900/10"></div>
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Brand column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/LOGO-1.png"
                  alt="DesignsVerse Logo"
                  width={180}
                  height={45}
                  className="h-50 w-auto dark:hidden"
                />
                <Image
                  src="/images/logo/LOGO-2.png"
                  alt="DesignsVerse Logo"
                  width={180}
                  height={45}
                  className="hidden h-50 w-auto dark:block"
                />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg leading-7 text-gray-600 dark:text-gray-300"
            >
              Transforming brands with cutting-edge digital solutions for the modern era.
            </motion.p>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">{method.icon}</span>
                  <Link 
                    href={method.href} 
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    {method.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`text-xl text-gray-500 ${social.color} dark:text-gray-400 transition-colors`}
                  whileHover={{ 
                    y: -5,
                    scale: 1.2,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2"
          >
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  {section.title}
                </motion.h3>
                <motion.ul 
                  className="mt-6 space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2 + (index * 0.1)
                      }
                    }
                  }}
                >
                  {section.links.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ 
                        x: 5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <Link
                        href={link.href}
                        className="text-base leading-6 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 shadow-lg sm:p-10 lg:mt-24"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Stay updated
              </h3>
              <p className="mt-2 text-blue-100">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
            </div>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border-0 px-5 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-500"
                  required
                />
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe <FiArrowRight />
                </motion.button>
              </div>
              <p className="text-xs text-blue-100">
                We care about your data. Read our{' '}
                <Link href="/privacy" className="underline hover:text-white">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </motion.div> */}

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-900/10 dark:border-gray-800 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} DesignsVerse. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </Link>
             
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles animation */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
          className={`absolute hidden h-1 w-1 rounded-full bg-blue-500/30 lg:block`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </motion.footer>
  );
};

export default Footer;