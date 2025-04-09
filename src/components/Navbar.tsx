'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsCalendarCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'דף הבית', href: '/' },
  { name: 'אודות', href: '/about' },
  { name: 'תפריט', href: '/menu' },
  { name: 'גלריה', href: '/gallery' },
  { name: 'אירועים', href: '/events' },
  { name: 'צור קשר', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-neumorphic'
          : 'py-4 bg-transparent'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-50"
          >
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-2 shadow-neumorphic-sm">
                <span className="text-primary font-bold text-xl">γ</span>
              </div>
              <span className="text-xl font-bold text-gray-800">בית קפה גמא</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative px-3 py-2 mx-1 text-gray-700 hover:text-primary transition-colors rounded-lg group"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 shadow-neumorphic-sm"
                  initial={false}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4"
            >
              <Link
                to="/booking"
                className="flex items-center px-5 py-2 rounded-full bg-primary text-white font-medium shadow-neumorphic hover:shadow-neumorphic-pressed transition-all duration-300"
              >
                <BsCalendarCheck className="ml-2" />
                <span>קבע תור עכשיו</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white/90 shadow-neumorphic focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-primary" />
              ) : (
                <FiMenu className="h-6 w-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full right-0 left-0 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMenu}
                    className="px-4 py-3 text-gray-700 hover:text-primary rounded-lg bg-white/50 shadow-neumorphic-sm hover:shadow-neumorphic-pressed transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/booking"
                  onClick={closeMenu}
                  className="flex items-center justify-center px-5 py-3 mt-2 rounded-full bg-primary text-white font-medium shadow-neumorphic hover:shadow-neumorphic-pressed transition-all duration-300"
                >
                  <BsCalendarCheck className="ml-2" />
                  <span>קבע תור עכשיו</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;