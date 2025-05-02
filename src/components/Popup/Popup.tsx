"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const callNumber = "+919413466075";
  const popupRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Color scheme based on #4A6CF7
  const colors = {
    primary: "#4A6CF7",
    secondary: "#FFB020",
    background: "rgba(255, 255, 255, 0.98)",
    text: "#1A2B6D",
    overlay: "rgba(26, 43, 109, 0.6)",
    gradient: "linear-gradient(135deg, #4A6CF7, #3B5BDB)",
  };

  // Show popup after 5 seconds (reduced for testing) or if not previously shown
  useEffect(() => {
    // For testing: Remove this line in production to respect localStorage
    // localStorage.removeItem("popupShown");

    const hasPopupBeenShown = localStorage.getItem("popupShown");
    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000); // Reduced to 5 seconds for faster testing
      return () => clearTimeout(timer);
    } else {
      // Force show for debugging (remove in production)
      setIsOpen(true);
    }
  }, []);

  // Handle close button and store state in localStorage
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("popupShown", "true");
  };

  // Handle clicks outside the popup
  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      handleClose();
    }
  };

  // Handle keyboard navigation (Escape key to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus management: Focus close button when popup opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
          role="dialog"
          aria-labelledby="popup-title"
          aria-modal="true"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Popup Content */}
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="relative w-full max-w-md mx-4 sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                background: colors.background,
                border: `1px solid ${colors.primary}20`,
              }}
            >
              {/* Decorative Header Bar */}
              <div
                className="absolute top-0 left-0 w-full h-1.5"
                style={{ background: colors.gradient }}
              />

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center 
                          transition-all duration-300 ease-in-out hover:bg-[#4A6CF7]/10 
                          focus:outline-none focus:ring-2 focus:ring-[#4A6CF7] focus:ring-offset-2
                          active:scale-95"
                style={{
                  color: colors.text,
                  backgroundColor: `${colors.primary}05`,
                  border: `1px solid ${colors.primary}15`,
                }}
                aria-label="Close popup"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ strokeWidth: "2.5" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Header */}
              <h2
                id="popup-title"
                className="text-2xl sm:text-3xl font-bold mb-4 text-center"
                style={{ color: colors.primary }}
              >
                Call Us Now!
                <span
                  className="block w-16 h-1 mx-auto mt-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                />
              </h2>

              {/* Message */}
              <p
                className="text-center mb-6 leading-relaxed text-base sm:text-lg"
                style={{ color: colors.text }}
              >
                Click the <span className="font-semibold">"Call Now"</span> button to connect with us instantly.
              </p>

              {/* Call Button */}
              <div className="text-center">
                <a
                  href={`tel:${callNumber}`}
                  className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg 
                            transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                            focus:ring-2 focus:ring-offset-2 focus:ring-[#4A6CF7] group"
                  style={{
                    background: colors.gradient,
                    color: "#FFFFFF",
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5 group-hover:animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
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
                We're here to assist you!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;