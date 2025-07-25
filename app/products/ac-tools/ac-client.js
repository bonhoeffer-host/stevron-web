"use client";
import BgLayout from "../../../components/templates/bgLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import productsData from "./products.json";
import Link from "next/link";

function ACClient() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    productCode: '',
    fullName: '',
    email: '',
    phone: '',
    quantity: '',
    country: '',
    message: ''
  });

  const products = Object.entries(productsData).map(([key, product]) => ({
    ...product,
    key
  }));

  const handleImageError = (productCode) => {
    setImageErrors(prev => ({
      ...prev,
      [productCode]: true
    }));
  };

  const handleQuoteClick = (product) => {
    setFormData(prev => ({
      ...prev,
      productCode: product.code
    }));
    setShowQuoteForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const fieldMap = {
      'Product_Code': 'productCode',
      'Full_Name': 'fullName',
      'Email_Address': 'email',
      'Phone_Number': 'phone',
      'Quantity': 'quantity',
      'Country': 'country',
      'Message': 'message'
    };
    
    const stateField = fieldMap[name] || name;
    setFormData(prev => ({
      ...prev,
      [stateField]: value
    }));
  };

  const handleFormSubmit = (e) => {
    // Allow the form to submit normally to formsubmit.co
    // User will be redirected to home page after submission
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <BgLayout modalOpen={!!selectedProduct}>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div> */}

        {/* Hero Section */}
        <div className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white my-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tools</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our premium collection of professional-grade AC tools designed for precision and reliability
            </motion.p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.key}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group cursor-pointer"
                  id={product.code || product.key}
                  onClick={() => setSelectedProduct(product)}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative w-full mb-4 sm:mb-6 rounded-2xl overflow-hidden">
                      <img
                        src={imageErrors[product.code] ? "/ac-tools/BNIMD710.webp" : product.image}
                        alt={product.name}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-95"
                        onError={() => handleImageError(product.code)}
                      />
                    </div>

                    <div className="">
                      {/* Product Info */}
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#989b2e] transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400 font-mono">
                          {product.code}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                          {product.description.split('\n')[0]}
                        </p>
                      </div>

                      {/* View Details Button */}
                      <motion.div
                        className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-[#989b2e] font-medium text-sm sm:text-base group-hover:text-[#989b2e]/80 transition-colors duration-300 flex items-center gap-2">
                          View Details
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>

                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed h-screen lg:py-5 inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] lg:max-h-screen overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 gap-4">
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-[#989b2e] font-mono text-lg sm:text-xl">
                    {selectedProduct.code}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-4xl sm:text-5xl cursor-pointer flex-shrink-0"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Product Image */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="relative w-full h-64 sm:h-90 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={imageErrors[selectedProduct.code] ? "/ac-tools/BNIMD710.webp" : selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(selectedProduct.code)}
                    />
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuoteClick(selectedProduct)}
                      className="flex-1 text-lg sm:text-xl bg-gradient-to-r from-[#989b2e] to-[#b8bb32] text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:from-[#8a8d29] hover:to-[#a6a92e] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      Get a Quote
                    </motion.button>
                    <Link href="tel:+918595817577" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full text-lg sm:text-xl bg-white/10 backdrop-blur-lg text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
                      >
                        Call Us
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Description</h3>
                    <div className="text-gray-300 leading-relaxed space-y-2">
                      {selectedProduct.description.split('\n').map((line, index) => (
                        <p key={index} className="text-sm sm:text-base">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {selectedProduct.specifications && (
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Specifications</h3>
                      <div className="text-gray-300 leading-relaxed space-y-1">
                        {selectedProduct.specifications.split('\n').map((spec, index) => (
                          <p key={index} className="text-xs sm:text-sm">
                            {spec}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Quote Form Modal */}
        {showQuoteForm && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed h-screen inset-0 bg-black/80 backdrop-blur-sm z-60 flex items-center justify-center p-4"
            onClick={() => setShowQuoteForm(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 gap-4">
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Get a Quote
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg">
                    Fill out the form below and we&apos;ll get back to you soon
                  </p>
                </div>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-4xl sm:text-5xl cursor-pointer flex-shrink-0"
                >
                  ×
                </button>
              </div>

              <form 
                action="https://formsubmit.co/ashwin@stevrontools.com" 
                method="POST"
                className="space-y-4 sm:space-y-6"
              >
                {/* Hidden fields for formsubmit.co */}
                <input type="hidden" name="_next" value="https://stevrontools.com/" />
                <input type="hidden" name="_subject" value="New Quote Request from AC Tools Page" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Product Code - Pre-filled */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Product Code</label>
                    <input
                      type="text"
                      name="Product_Code"
                      value={formData.productCode}
                      readOnly
                      className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#989b2e] transition-colors duration-300"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="Full_Name"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      required
                      className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#989b2e] transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="Email_Address"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#989b2e] transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="Phone_Number"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#989b2e] transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Quantity *</label>
                    <input
                      type="number"
                      name="Quantity"
                      value={formData.quantity}
                      onChange={handleFormChange}
                      required
                      min="1"
                      className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#989b2e] transition-colors duration-300"
                      placeholder="Enter quantity"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Country *</label>
                    <input
                      type="text"
                      name="Country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                      className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#989b2e] transition-colors duration-300"
                      placeholder="Enter your country"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="Message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full p-3 sm:p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#989b2e] transition-colors duration-300 resize-none"
                    placeholder="Enter any additional details or requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-lg sm:text-xl lg:text-2xl cursor-pointer bg-gradient-to-r from-[#989b2e] to-[#b8bb32] text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:from-[#8a8d29] hover:to-[#a6a92e] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Quote Request
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </BgLayout>
  );
}

export default ACClient;