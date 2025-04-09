'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-neutral-100/90 to-white/80 dark:from-neutral-900/90 dark:to-neutral-800/80 dir-rtl" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Section - Glassmorphism Card */}
          <motion.div 
            className="lg:w-1/2 w-full"
            variants={itemVariants}
          >
            <div className="relative rounded-2xl overflow-hidden glassmorphism-card border border-white/20 p-3 shadow-neumorphic">
              <div className="aspect-w-4 aspect-h-3 relative rounded-xl overflow-hidden">
                <Image
                  src="/images/gamma-cafe-interior.jpg"
                  alt="בית קפה גמא - האווירה המיוחדת שלנו"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P//fwAJsAP1XEGDhwAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glassmorphism-panel rounded-lg">
                <p className="text-white text-sm md:text-base font-medium">מסורת של איכות מאז 2005</p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="lg:w-1/2 w-full"
            variants={itemVariants}
          >
            <div className="neumorphic-panel p-8 rounded-2xl">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-white mb-6">
                  <span className="text-primary">בית קפה גמא</span> - הסיפור שלנו
                </h2>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 mb-6 leading-relaxed">
                  בית קפה גמא נוסד בשנת 2005 מתוך אהבה לקפה איכותי ואווירה ייחודית. המייסדים שלנו, שהגיעו מעולם הבידור והאמנות, חלמו ליצור מקום שמשלב בין חוויה קולינרית מעולה לבין אווירה תרבותית עשירה.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 mb-8 leading-relaxed">
                  לאורך השנים, הפכנו למוקד תרבותי המארח הופעות חיות, ערבי שירה, תערוכות אמנות ואירועים קהילתיים. הקפה שלנו נבחר בקפידה ממיטב היבואנים, והתפריט שלנו משלב מנות מקוריות עם מסורת קולינרית עשירה.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="neumorphic-card p-5 rounded-xl flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">איכות ללא פשרות</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">אנו בוחרים רק את חומרי הגלם הטובים ביותר ומקפידים על הכנה מדויקת של כל מנה.</p>
                  </div>
                  <div className="neumorphic-card p-5 rounded-xl flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">חוויה תרבותית</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">מעבר לאוכל, אנו מציעים מרחב תרבותי עשיר עם אירועים והופעות לאורך כל השנה.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="glassmorphism-panel p-6 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">המומחיות שלנו</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                      <span>מעל 18 שנות ניסיון בתעשיית האירוח והבידור</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                      <span>שיתופי פעולה עם אמנים ויוצרים מקומיים</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                      <span>תפריט ייחודי המשלב השפעות מהמטבח הים-תיכוני והעולמי</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button className="neumorphic-button px-8 py-3 rounded-full text-primary font-medium transition-all duration-300 hover:shadow-neumorphic-pressed active:shadow-neumorphic-pressed">
                  קראו עוד על הסיפור שלנו
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;