'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  // Base classes for all buttons
  const baseClasses = 'relative font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rtl:text-right flex items-center justify-center';
  
  // Size classes
  const sizeClasses = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };
  
  // Variant classes with neumorphic and glassmorphism styles
  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary-400 to-primary-600 text-white backdrop-blur-sm border border-primary-300/30 shadow-neumorphic-primary hover:shadow-neumorphic-primary-hover active:shadow-neumorphic-primary-active disabled:opacity-70 disabled:shadow-none',
    secondary: 'bg-gradient-to-br from-secondary-400 to-secondary-600 text-white backdrop-blur-sm border border-secondary-300/30 shadow-neumorphic-secondary hover:shadow-neumorphic-secondary-hover active:shadow-neumorphic-secondary-active disabled:opacity-70 disabled:shadow-none',
    outline: 'bg-white/10 backdrop-blur-md border border-primary-300/50 text-primary-600 shadow-neumorphic-light hover:bg-primary-50/50 hover:shadow-neumorphic-light-hover active:shadow-neumorphic-light-active disabled:opacity-70 disabled:shadow-none',
    text: 'bg-transparent hover:bg-primary-50/30 text-primary-600 disabled:opacity-70',
  };

  // Animation variants
  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.button
      type={type}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? 'hover' : undefined}
      whileTap={!disabled ? 'tap' : undefined}
      variants={buttonVariants}
      aria-disabled={disabled}
      {...props}
    >
      {children}
      {/* Glassmorphism overlay */}
      <span className={clsx(
        'absolute inset-0 rounded-xl pointer-events-none',
        variant !== 'text' && 'bg-white/5 backdrop-blur-sm'
      )} />
    </motion.button>
  );
};

export default Button;