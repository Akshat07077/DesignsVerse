"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WhatsAppButton = () => {
  // WhatsApp configuration
  const phoneNumber = "+919413466075"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Animation variants for the button
  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -5, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  // Animation variants for the tooltip
  const tooltipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label="Chat with us on WhatsApp"
        role="button"
      >
        {/* WhatsApp Icon */}
        <Image
          src="/images/whatsapp/whatsapp.png" // Replace with your WhatsApp icon path
          alt="WhatsApp Icon"
          width={55}
          height={55}
          className="object-contain h-30 w-30"
        />
        {/* Tooltip with Message */}
        <motion.span
          variants={tooltipVariants}
          initial="hidden"
          whileHover="visible"
          className="absolute bottom-20 right-0 px-4 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-md whitespace-nowrap"
        >
          Chat with us on WhatsApp!
        </motion.span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;