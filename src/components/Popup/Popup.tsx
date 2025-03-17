"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const callNumber = "+919153164444";

  // Updated color scheme based on #4A6CF7
  const colors = {
    primary: "#4A6CF7",      // Your website's main color
    secondary: "#FFB020",    // Complementary accent color
    background: "rgba(255, 255, 255, 0.95)", // Light blog opacity
    text: "#1A2B6D",        // Darker shade for contrast
    overlay: "rgba(26, 43, 109, 0.5)", // Overlay with blue tint
    gradient: "linear-gradient(135deg, #4A6CF7, #3B5BDB)",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
      localStorage.setItem("popupShown", "true");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 flex justify-center items-center z-50"
          
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-lg mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl shadow-xl p-8 relative overflow-hidden backdrop-blur-sm"
              style={{ background: colors.background, border: "1px solid rgba(74, 108, 247, 0.1)" }}
            >
              {/* Decorative Element */}
              <div
                className="absolute top-0 left-0 w-full h-2"
                style={{ background: colors.gradient }}
              />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:bg-opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-[#4A6CF7]"
                style={{ color: colors.text, backgroundColor: "rgba(74, 108, 247, 0.1)" }}
                aria-label="Close popup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <h2
                className="text-3xl font-bold mb-4 text-center relative z-10"
                style={{ color: colors.primary }}
              >
                Call Us Now!
                <span
                  className="block w-20 h-1 mx-auto mt-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                />
              </h2>

              {/* Message */}
              <p
                className="text-center mb-6 leading-relaxed text-lg"
                style={{ color: colors.text }}
              >
                Click the <span className="font-medium">"Call Now"</span> button below to speak with us instantly.
              </p>

              {/* Call Button */}
              <div className="text-center">
                <a
                  href={`tel:${callNumber}`}
                  className="inline-block px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-[#4A6CF7] group"
                  style={{
                    background: colors.gradient,
                    color: "#FFFFFF",
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </span>
                </a>
              </div>

              {/* Footer Note */}
              <p
                className="text-center text-sm mt-6 opacity-80 italic"
                style={{ color: colors.text }}
              >
                We’re eagerly waiting for your call!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;