'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface BusinessHour {
  day: string;
  hours: string;
}

const LocationSection: React.FC = () => {
  const businessHours: BusinessHour[] = [
    { day: 'ראשון', hours: '08:00 - 22:00' },
    { day: 'שני', hours: '08:00 - 22:00' },
    { day: 'שלישי', hours: '08:00 - 22:00' },
    { day: 'רביעי', hours: '08:00 - 22:00' },
    { day: 'חמישי', hours: '08:00 - 22:00' },
    { day: 'שישי', hours: '08:00 - 16:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 text-right" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            המיקום שלנו
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            בואו לבקר אותנו בבית קפה גמא ותיהנו מהאווירה הייחודית והקפה המשובח שלנו
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-neumorphic bg-white/80 backdrop-blur-md border border-white/30"
          >
            {/* Placeholder for Google Maps - Replace with actual implementation */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">מפת מיקום בית קפה גמא</p>
              {/* Actual implementation would be:
              <iframe 
                src="https://www.google.com/maps/embed?pb=..." 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl shadow-neumorphic bg-white/80 backdrop-blur-md border border-white/30 transition-all hover:shadow-neumorphic-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">כתובת</h3>
                  <p className="text-gray-600">רחוב האלון 15, תל אביב</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl shadow-neumorphic bg-white/80 backdrop-blur-md border border-white/30 transition-all hover:shadow-neumorphic-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">טלפון</h3>
                  <p className="text-gray-600 hover:text-primary transition-colors">
                    <a href="tel:+972-3-1234567" dir="ltr">03-1234567</a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl shadow-neumorphic bg-white/80 backdrop-blur-md border border-white/30 transition-all hover:shadow-neumorphic-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">אימייל</h3>
                  <p className="text-gray-600 hover:text-primary transition-colors">
                    <a href="mailto:info@gammacafe.co.il">info@gammacafe.co.il</a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl shadow-neumorphic bg-white/80 backdrop-blur-md border border-white/30 transition-all hover:shadow-neumorphic-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <FaClock size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">שעות פעילות</h3>
                  <ul className="space-y-2">
                    {businessHours.map((item, index) => (
                      <li key={index} className="flex justify-between text-gray-600">
                        <span className="font-medium">{item.day}</span>
                        <span>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <a 
                href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block py-3 px-8 bg-primary text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all transform hover:-translate-y-1"
              >
                נווט אלינו עכשיו
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;