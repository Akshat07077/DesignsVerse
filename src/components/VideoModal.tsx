'use client';
import { useState, useRef, useEffect } from 'react';
import { X, Play, Maximize2, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  posterUrl = "/api/placeholder/600/400", 
  title = "Video Demo",
  colors = { 
    primary: "#4A6CF7", 
    secondary: "#6B7280",
    bg: "#000"
  }
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset video state when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setLoading(true);
      return;
    }

    // Auto play when modal opens (with fallback)
    const timer = setTimeout(() => {
      if (videoRef.current && !isPlaying) {
        videoRef.current.play().catch(() => {
          // Handle autoplay failure gracefully
          console.log('Autoplay prevented, user interaction required');
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [isOpen, isPlaying]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';

      // Preload video
      if (videoRef.current) {
        videoRef.current.load();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setLoading(false);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          ref={containerRef}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Loading Overlay */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Loader2 className={`w-8 h-8 animate-spin text-white`} />
                    <span className="text-white/80 text-sm">Loading video...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video Element */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-contain"
              poster={posterUrl}
              onLoadedData={handleVideoLoad}
              onCanPlay={handleVideoLoad}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              preload="metadata"
              playsInline
              disablePictureInPicture
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
              Your browser does not support the video tag.
              <a href={videoUrl} className="text-white hover:underline">
                Download video
              </a>
            </video>

            {/* Play/Pause Overlay */}
            {!isPlaying && !loading && (
              <motion.button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 hover:bg-black/60 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 shadow-2xl border-2 border-white/30">
                  <Play className="w-8 h-8 lg:w-10 lg:h-10 ml-1 text-white" />
                </div>
              </motion.button>
            )}

            {/* Controls Overlay */}
            <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              
              {/* Left Controls */}
              <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                {/* Play/Pause Button */}
                <motion.button
                  onClick={handlePlayPause}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Play className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </motion.button>

                {/* Volume Control */}
                <motion.button
                  onClick={handleMuteToggle}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </motion.button>

                {/* Time Display */}
                <div className="text-white/80 text-xs min-w-[80px] text-center">
                  <span id="current-time">0:00</span> / 
                  <span id="duration">0:00</span>
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                
                {/* Fullscreen Button */}
                <motion.button
                  onClick={handleFullscreen}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </motion.button>

                {/* Progress Bar */}
                <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden mx-2">
                  <div 
                    id="progress-bar" 
                    className="h-full bg-white/80 transition-all duration-300"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Top Controls Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
              {/* Video Title */}
              <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full max-w-xs truncate">
                <span className="text-white text-sm font-medium">{title}</span>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors ml-auto"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                title="Close video"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Error State */}
          <AnimatePresence>
            {(loading || !videoRef.current) && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900/80 to-black text-white p-8 text-center"
              >
                <div className="mb-4">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Video Player</h3>
                <p className="text-gray-300 mb-4 max-w-sm">
                  {loading ? 'Preparing video player...' : 'Unable to load video. Please try again.'}
                </p>
                {loading && (
                  <Loader2 className="w-6 h-6 animate-spin text-white mx-auto" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Keyboard Instructions */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[10000] pointer-events-none">
          <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Press ESC to close • Click outside to close
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Custom Hooks for Video Modal
const useVideoModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const openModal = (videoUrl, posterUrl, title) => {
    setIsOpen(true);
    return { videoUrl, posterUrl, title };
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

export { VideoModal, useVideoModal };
