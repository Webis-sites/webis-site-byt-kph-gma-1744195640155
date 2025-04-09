'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export interface CardProps {
  /**
   * Card variant style
   */
  variant?: 'bordered' | 'elevated' | 'flat';
  /**
   * Optional image URL
   */
  imageUrl?: string;
  /**
   * Optional icon component
   */
  icon?: React.ReactNode;
  /**
   * Card heading/title
   */
  heading?: string;
  /**
   * Main content text
   */
  content?: string;
  /**
   * Action button text
   */
  buttonText?: string;
  /**
   * Action button click handler
   */
  onButtonClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Card children
   */
  children?: React.ReactNode;
  /**
   * Optional alt text for image
   */
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  imageUrl,
  icon,
  heading,
  content,
  buttonText,
  onButtonClick,
  className,
  children,
  imageAlt = '',
}) => {
  // Base styles for all card variants
  const baseStyles = "relative rtl overflow-hidden rounded-2xl p-6 transition-all duration-300 w-full";
  
  // Variant-specific styles
  const variantStyles = {
    bordered: "border border-primary/30 bg-white/80 backdrop-blur-md",
    elevated: "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(190,138,255,0.12)] hover:shadow-[0_8px_30px_rgb(190,138,255,0.2)]",
    flat: "bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm"
  };
  
  // Neumorphic and glassmorphism effects
  const effectStyles = {
    bordered: "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-primary/20 before:to-white before:content-[''] before:-z-10",
    elevated: "after:absolute after:inset-0 after:rounded-2xl after:p-[1px] after:bg-gradient-to-br after:from-white after:to-primary/10 after:content-[''] after:-z-10",
    flat: ""
  };

  return (
    <motion.div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        effectStyles[variant],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: variant === 'elevated' ? '0 10px 40px rgba(190, 138, 255, 0.25)' : ''
      }}
    >
      {/* Image section */}
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-xl -mx-2 -mt-2">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      
      {/* Icon section */}
      {icon && (
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
      )}
      
      {/* Content section */}
      <div className="space-y-3">
        {heading && (
          <h3 className="text-xl font-bold text-gray-800">{heading}</h3>
        )}
        
        {content && (
          <p className="text-gray-600">{content}</p>
        )}
        
        {children}
        
        {buttonText && (
          <motion.button
            className="mt-4 px-6 py-2 rounded-lg bg-primary text-white font-medium 
                      shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_10px_rgba(190,138,255,0.2)] 
                      hover:shadow-[inset_0_-1px_2px_rgba(0,0,0,0.1),0_6px_15px_rgba(190,138,255,0.3)]
                      active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]
                      active:translate-y-0.5
                      transition-all duration-200"
            onClick={onButtonClick}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Card;