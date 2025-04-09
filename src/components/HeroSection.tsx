"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(190, 138, 255, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      dir="rtl" 
      className={cn(
        "relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cafe-background.jpg"
          alt="בית קפה גמא"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-sm" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glassmorphism Card */}
        <motion.div 
          className="w-full max-w-3xl p-8 md:p-12 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-neumorphic"
          variants={itemVariants}
        >
          {/* Logo */}
          <motion.div 
            className="mb-6 inline-block"
            variants={itemVariants}
          >
            <div className="text-white text-3xl font-bold bg-primary/80 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 shadow-neumorphic-inset">
              בית קפה גמא
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
            variants={itemVariants}
          >
            בית קפה מוביל בישראל
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              className="px-8 py-4 bg-primary text-white text-lg font-medium rounded-full shadow-neumorphic-button transition-all"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              קבע תור עכשיו
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute -z-1 top-1/3 right-[10%] w-32 h-32 rounded-full bg-primary/20 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 45 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div 
          className="absolute -z-1 bottom-1/4 left-[15%] w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
      </motion.div>
    </section>
  );
}

// This utility function is needed for the component to work properly
// Create a file at @/lib/utils.ts with this content if it doesn't exist:
/*
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
*/