"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

function NewHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Master AC Tools",
      subtitle: "Power Through Every Project",
      description: "Experience unmatched precision with our professional-grade AC power tools. ",
      cta: {
        primary: { text: "Shop AC Tools", href: "/products/ac-tools" },
        secondary: { text: "View Catalog", href: "https://www.flipsnack.com/66BE5ECC5A8/stevron-tools-hardware-accesories-2025/full-view.html" }
      },
      image: "/ac-tools/BNIMD710.webp",
    //   bgGradient: "from-blue-600/20 via-purple-600/20 to-pink-600/20"
      bgGradient: "from-green-600/20 via-teal-600/20 to-blue-600/20"
    },
    {
      id: 2,
      title: "Reliable DC Tools",
      subtitle: "Cordless Freedom",
      description: "Unleash your potential with our advanced DC power tools. Maximum portability without compromising on power and precision.",
      cta: {
        primary: { text: "Explore DC Tools", href: "/products/dc-tools" },
        secondary: { text: "View Catalog", href: "https://www.flipsnack.com/66BE5ECC5A8/stevron-tools-hardware-accesories-2025/full-view.html" }
      },
      image: "/square/p4.png",
      bgGradient: "from-green-600/20 via-teal-600/20 to-blue-600/20"
    },
    {
      id: 3,
      title: "Essential Hand Tools",
      subtitle: "Crafted for Perfection",
      description: "Master every detail with our premium hand tools collection. Precision-engineered for professionals who demand excellence.",
      cta: {
        primary: { text: "Browse Hand Tools", href: "/products/hand-tools" },
        secondary: { text: "View Catalog", href: "https://www.flipsnack.com/66BE5ECC5A8/stevron-tools-hardware-accesories-2025/full-view.html" }
      },
      image: "/hand-tools/BCP7X180.webp",
    //   bgGradient: "from-green-600/20 via-purple-600/20 to-blue-600/20"
      bgGradient: "from-green-600/20 via-teal-600/20 to-blue-600/20"
    },
    {
      id: 4,
      title: "Quality Accessories",
      subtitle: "Complete Your Toolkit",
      description: "Enhance your workflow with our comprehensive range of accessories. Every component designed to maximize your tool's potential.",
      cta: {
        primary: { text: "Shop Accessories", href: "/products/accessories" },
        secondary: { text: "View Catalog", href: "https://www.flipsnack.com/66BE5ECC5A8/stevron-tools-hardware-accesories-2025/full-view.html" }
      },
      image: "/accessories/BWCB150M.webp",
    //   bgGradient: "from-purple-600/20 via-indigo-600/20 to-blue-600/20"
      bgGradient: "from-green-600/20 via-teal-600/20 to-blue-600/20"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center mt-5 p-4 sm:p-6">
      {/* Background with animated gradient */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} blur-3xl`}
      />

      {/* Main Slider Container */}
      <div
        // className="relative w-full max-w-7xl mx-auto bg-black/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[90vh] flex flex-col lg:flex-row">
          {/* Mobile Layout - Image First */}
          <div className="lg:hidden w-full flex items-center justify-center p-4 sm:p-6 relative order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <motion.div
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-auto h-52 mt-10 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Layout - Title and CTA */}
          <div className="lg:hidden w-full flex flex-col justify-center items-center p-4 sm:p-6 relative z-10 order-2 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-4"
              >
                {/* Mobile Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Mobile Primary CTA Only */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-2"
                >
                  <Link href={slides[currentSlide].cta.primary.href}>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full max-w-xs bg-[#989b2e] cursor-pointer text-white text-lg sm:text-xl font-semibold px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {slides[currentSlide].cta.primary.text}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Layout - Left Side Text Content */}
          <div className="hidden lg:flex w-1/2 flex-col justify-center p-6 md:p-8 lg:p-12 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-4 md:space-y-6"
              >
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[#989b2e] text-lg md:text-xl font-medium tracking-wide uppercase"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col md:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                >
                  <Link href={slides[currentSlide].cta.primary.href}>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto bg-[#989b2e] cursor-pointer text-white text-lg md:text-xl lg:text-2xl font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {slides[currentSlide].cta.primary.text}
                    </motion.button>
                  </Link>
                  <Link href={slides[currentSlide].cta.secondary.href}>
                    <motion.button
                      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto border-2 cursor-pointer border-white/30 text-white text-lg md:text-xl lg:text-2xl font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                      {slides[currentSlide].cta.secondary.text}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Layout - Right Side Image */}
          <div className="hidden lg:flex w-1/2 items-center justify-center p-4 sm:p-6 lg:p-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <motion.div
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-auto h-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#989b2e] shadow-lg shadow-yellow-400/50'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}

        {/* Progress Bar */}
        {/* <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
          <motion.div
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            // className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
            className="h-full bg-[#989b2e] "
          />
        </div> */}
      </div>
      <div>
        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 text-white transition-all duration-300 z-20 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 text-white transition-all duration-300 z-20 cursor-pointer"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}

export default NewHero;
