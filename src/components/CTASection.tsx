'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const CTASection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section dir="rtl" className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-purple-300/30 backdrop-blur-md z-0"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/30 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/40 shadow-neumorphic">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text content */}
            <div className="flex-1 text-right">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              >
                הזמן את החוויה המושלמת ב<span className="text-primary">בית קפה גמא</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 mb-8"
              >
                אירועים מיוחדים, פגישות עסקיות או סתם בילוי משפחתי - הצוות שלנו מחכה להעניק לכם חוויה בלתי נשכחת. המקומות מוגבלים!
              </motion.p>
              
              {/* CTA Button with neumorphic style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  className={clsx(
                    "px-8 py-4 text-lg font-bold rounded-xl relative",
                    "bg-primary text-white",
                    "shadow-neumorphic-button transition-all duration-300",
                    "hover:shadow-neumorphic-button-hover active:shadow-neumorphic-button-active",
                    "overflow-hidden"
                  )}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button background animation */}
                  <motion.div 
                    className="absolute inset-0 bg-primary-dark opacity-0"
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Button text with animation */}
                  <motion.span 
                    className="relative z-10 flex items-center justify-center gap-2"
                    animate={{ x: isHovered ? [0, -4, 0] : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    קבע תור עכשיו
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2.5} 
                      stroke="currentColor" 
                      className="w-5 h-5"
                      animate={{ x: isHovered ? [0, 4, 0] : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </motion.svg>
                  </motion.span>
                </motion.button>
              </motion.div>
              
              {/* Limited time offer badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 inline-block"
              >
                <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 shadow-sm">
                  <p className="text-sm font-medium text-gray-700">
                    <span className="text-primary font-bold">מבצע מיוחד:</span> 15% הנחה בהזמנה מראש לסוף השבוע
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative image with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/40 shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/70 to-transparent">
                    <p className="text-white font-bold text-lg">בית קפה גמא</p>
                    <p className="text-white/90 text-sm">חוויה קולינרית מושלמת</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;