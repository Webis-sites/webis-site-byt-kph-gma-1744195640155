'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'right',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const decorativeLineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={clsx(
        'w-full mb-10 px-4 py-6 relative',
        alignmentClasses[alignment],
        className
      )}
      dir="rtl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="relative z-10">
        {/* Glassmorphism decorative element */}
        <div className="absolute inset-0 -z-10 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-glass"></div>
        
        <div className="p-6">
          {/* Decorative element */}
          <motion.div
            className="h-1.5 bg-gradient-to-r from-primary/40 to-primary mb-4 rounded-full max-w-[120px] mx-auto"
            variants={decorativeLineVariants}
            style={{ marginRight: alignment === 'right' ? '0' : 'auto', marginLeft: alignment === 'left' ? '0' : 'auto' }}
          ></motion.div>
          
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 neumorphic-text"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          
          {/* Subtitle (if provided) */}
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
              variants={itemVariants}
              style={{ marginRight: alignment === 'right' ? '0' : 'auto', marginLeft: alignment === 'left' ? '0' : 'auto' }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Neumorphic decorative element */}
          <motion.div 
            className="neumorphic-circle mt-4"
            variants={itemVariants}
            style={{ marginRight: alignment === 'right' ? '0' : 'auto', marginLeft: alignment === 'left' ? '0' : 'auto' }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionHeader;