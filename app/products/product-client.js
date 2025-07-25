"use client";
import BgLayout from "../../components/templates/bgLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function ProductsClient() {
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const featuresRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const isCategoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const categories = [
    {
      title: "AC Tools",
      description: "Corded power tools for max performance and reliability in demanding applications",
      image: "/ac-tools/BNIMD710.webp",
      href: "/products/ac-tools",
      features: ["Consistent Power", "Heavy-Duty Performance", "Professional Grade", "Multiple Voltage Options"],
      toolCount: "15+ Tools"
    },
    {
      title: "DC Tools",
      description: "Cordless freedom with our own ONE Battery Platform for ultimate mobility",
      image: "/square/p4.png",
      href: "/products/dc-tools",
      features: ["ONE Battery Platform", "Cordless Freedom", "Extended Runtime", "Quick Charge Technology"],
      toolCount: "20+ Tools"
    },
    {
      title: "Hand Tools",
      description: "Precision hand tools for detailed work and professional craftsmanship",
      image: "/hand-tools/BCP7X180.webp",
      href: "/products/hand-tools",
      features: ["Precision Crafted", "Ergonomic Design", "Durable Materials", "Professional Quality"],
      toolCount: "30+ Tools"
    },
    {
      title: "Accessories",
      description: "Complete range of accessories, attachments, and replacement spare parts",
      image: "/accessories/BWCB125M.webp",
      href: "/products/accessories",
      features: ["Wide Selection", "Premium Quality", "Universal Compatibility", "Replacement Parts"],
      toolCount: "100+ Items"
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Every tool is engineered for accuracy and performance"
    },
    {
      icon: "🛡️",
      title: "Built to Last",
      description: "Durable construction for professional use"
    },
    {
      icon: "🔧",
      title: "Versatile Applications",
      description: "Tools for every trade and application"
    },
    {
      icon: "⚡",
      title: "Power & Performance",
      description: "Unleash maximum power in every task"
    }
  ];

  return (
    <BgLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Our Products
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Power
              </span>{" "}
              Tools
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4"
            >
              Discover our comprehensive range of AC tools, DC tools, Hand Tools, and Accessories 
              designed for professionals who demand excellence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
            >
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-xs sm:text-sm font-semibold">Professional Grade</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-xs sm:text-sm font-semibold">ONE Battery Platform</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-xs sm:text-sm font-semibold">Global Warranty</span>
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              onClick={() => categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#989b2e] text-white text-lg sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Explore Categories
            </motion.button>
          </motion.div>

          {/* Floating Tools - Hidden on small screens */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-4 sm:right-10 lg:right-20 opacity-20 hidden md:block"
          >
            <img src="/ac-tools/Router.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-34 lg:h-34 object-contain" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 left-4 sm:left-10 lg:left-20 opacity-20 hidden md:block"
          >
            <img src="/dc-tools/20J Rotary Hammer.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 object-contain" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-4 sm:left-10 lg:left-20 opacity-20 hidden lg:block"
          >
            <img src="/dc-tools/60nm.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-34 lg:h-34 object-contain" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 right-4 sm:right-10 lg:right-20 opacity-20 hidden lg:block"
          >
            <img src="/ac-tools/1100W-Impact-Drill.png" alt="Tool" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 object-contain" />
          </motion.div>
        </section>

        {/* Categories Section */}
        <section 
          ref={categoriesRef}
          className="py-5 sm:py-10 px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCategoriesInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Product{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choose from our four main categories of professional tools and accessories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  {/* Large Product Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6 sm:p-8">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative"
                    >
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-contain max-w-42 sm:max-w-60 opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.div>
                    
                    {/* Tool Count Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-yellow-400 text-black text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
                      {category.toolCount}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-white/80 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                          className="flex items-center space-x-2 text-white/70 text-xs sm:text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link href={category.href}>
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 25px rgba(255,196,0,0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-2 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                      >
                        Explore {category.title}
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section 
          ref={featuresRef}
          className="py-5 sm:py-10 px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Stevron
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Experience the difference with tools designed for professionals who demand the best.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-5 sm:py-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
            //   className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/30 rounded-3xl p-12 relative overflow-hidden"
            >
              {/* Background Animation */}
              {/* <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
              /> */}

              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl sm:text-6xl lg:text-8xl mb-6 sm:mb-8"
                >
                  🛠️
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Ready to Get{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Started?
                  </span>
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Explore our complete range of professional tools and find the perfect solution for your needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 25px 50px rgba(59,130,246,0.4)",
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-[#989b2e] text-white text-lg sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      Get Quote
                    </motion.button>
                  </Link>
                  
                  <Link href="/about">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: "rgba(59,130,246,0.8)",
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto border-2 border-white/30 text-white text-lg sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </BgLayout>
  );
}

export default ProductsClient;