'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const linkAnimation = {
    initial: { x: 0 },
    hover: { x: -5, transition: { duration: 0.3 } }
  };
  
  const socialAnimation = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } }
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md text-white border-t border-white/10 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] rtl">
      <div className="neumorphic-container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div className="glassmorphic-card">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-start">
                <div className="relative h-16 w-16 mr-3">
                  <Image
                    src="/logo.png"
                    alt="בית קפה גמא"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-primary">בית קפה גמא</h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                בית קפה גמא הוא מקום מפגש ייחודי המציע חוויה קולינרית מיוחדת במינה, אווירה נעימה ושירות מעולה. בואו ליהנות מקפה איכותי ומאפים טריים בכל יום.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="פייסבוק"
                  className="neumorphic-icon-button text-white hover:text-primary transition-colors"
                  variants={socialAnimation}
                  initial="initial"
                  whileHover="hover"
                >
                  <FaFacebook size={20} />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="אינסטגרם"
                  className="neumorphic-icon-button text-white hover:text-primary transition-colors"
                  variants={socialAnimation}
                  initial="initial"
                  whileHover="hover"
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="טוויטר"
                  className="neumorphic-icon-button text-white hover:text-primary transition-colors"
                  variants={socialAnimation}
                  initial="initial"
                  whileHover="hover"
                >
                  <FaTwitter size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="glassmorphic-card">
            <h3 className="text-xl font-bold mb-6 text-primary">ניווט מהיר</h3>
            <ul className="space-y-3">
              {[
                { name: 'דף הבית', href: '/' },
                { name: 'אודות', href: '/about' },
                { name: 'התפריט שלנו', href: '/menu' },
                { name: 'אירועים', href: '/events' },
                { name: 'הזמנת מקום', href: '/booking' },
                { name: 'צור קשר', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.div
                    variants={linkAnimation}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center">
                      <span className="mr-2">›</span>
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="glassmorphic-card">
            <h3 className="text-xl font-bold mb-6 text-primary">צור קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="ml-3 text-primary" />
                <span className="text-gray-300">רחוב הרצל 123, תל אביב</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="ml-3 text-primary" />
                <a href="tel:+972123456789" className="text-gray-300 hover:text-primary transition-colors">
                  03-1234567
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="ml-3 text-primary" />
                <a href="https://wa.me/972123456789" className="text-gray-300 hover:text-primary transition-colors">
                  שלח הודעת וואטסאפ
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-3 text-primary" />
                <a href="mailto:info@gammacafe.co.il" className="text-gray-300 hover:text-primary transition-colors">
                  info@gammacafe.co.il
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Opening Hours */}
          <div className="glassmorphic-card">
            <h3 className="text-xl font-bold mb-6 text-primary">שעות פתיחה</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">ראשון - חמישי:</span>
                <span className="text-white">8:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">שישי:</span>
                <span className="text-white">8:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">שבת:</span>
                <span className="text-white">סגור</span>
              </li>
            </ul>
            <div className="mt-6">
              <motion.button
                className="neumorphic-button w-full py-3 px-4 bg-primary/80 hover:bg-primary text-white rounded-lg transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                הזמן מקום
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} בית קפה גמא. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-primary transition-colors">
                מדיניות פרטיות
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-primary transition-colors">
                תנאי שימוש
              </Link>
              <Link href="/accessibility" className="text-gray-400 text-sm hover:text-primary transition-colors">
                הצהרת נגישות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;