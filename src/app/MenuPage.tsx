'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCoffee, FaMugHot, FaCookie, FaEgg, FaUtensils, FaGlassMartini } from 'react-icons/fa';
import clsx from 'clsx';

// Menu data (in Hebrew)
const menuData = {
  coffee: [
    {
      id: 1,
      name: 'אספרסו',
      description: 'שוט אספרסו עשיר וארומטי',
      price: '₪12',
      image: '/images/espresso.jpg'
    },
    {
      id: 2,
      name: 'קפה שחור',
      description: 'קפה שחור חזק מפולים טריים',
      price: '₪10',
      image: '/images/black-coffee.jpg'
    },
    {
      id: 3,
      name: 'קפוצ׳ינו',
      description: 'אספרסו עם חלב מוקצף בשכבות',
      price: '₪16',
      image: '/images/cappuccino.jpg'
    },
    {
      id: 4,
      name: 'לאטה',
      description: 'אספרסו עם חלב מוקצף וציור לאטה ארט',
      price: '₪18',
      image: '/images/latte.jpg'
    }
  ],
  tea: [
    {
      id: 1,
      name: 'תה ירוק',
      description: 'תה ירוק עדין עם ניחוחות יסמין',
      price: '₪14',
      image: '/images/green-tea.jpg'
    },
    {
      id: 2,
      name: 'תה צמחים',
      description: 'תערובת צמחים מרגיעה עם דבש',
      price: '₪16',
      image: '/images/herbal-tea.jpg'
    },
    {
      id: 3,
      name: 'צ׳אי',
      description: 'תה שחור עם תבלינים וחלב',
      price: '₪18',
      image: '/images/chai.jpg'
    }
  ],
  pastries: [
    {
      id: 1,
      name: 'קרואסון חמאה',
      description: 'קרואסון חמאה פריך אפוי במקום',
      price: '₪14',
      image: '/images/croissant.jpg'
    },
    {
      id: 2,
      name: 'עוגת גבינה',
      description: 'עוגת גבינה קרמית על בסיס עוגיות',
      price: '₪18',
      image: '/images/cheesecake.jpg'
    },
    {
      id: 3,
      name: 'מאפה שוקולד',
      description: 'מאפה שמרים במילוי שוקולד בלגי',
      price: '₪16',
      image: '/images/chocolate-pastry.jpg'
    }
  ],
  breakfast: [
    {
      id: 1,
      name: 'שקשוקה',
      description: 'ביצים ברוטב עגבניות עם טחינה וסלט ירקות',
      price: '₪48',
      image: '/images/shakshuka.jpg'
    },
    {
      id: 2,
      name: 'בוקר ישראלי',
      description: 'ביצים לבחירה, סלט, גבינות, לחם ומטבלים',
      price: '₪58',
      image: '/images/israeli-breakfast.jpg'
    },
    {
      id: 3,
      name: 'כריך אבוקדו',
      description: 'כריך לחם מחמצת עם אבוקדו, ביצה עלומה וירקות',
      price: '₪42',
      image: '/images/avocado-sandwich.jpg'
    }
  ],
  lunch: [
    {
      id: 1,
      name: 'סלט קינואה',
      description: 'קינואה עם ירקות טריים, עשבי תיבול וטחינה',
      price: '₪52',
      image: '/images/quinoa-salad.jpg'
    },
    {
      id: 2,
      name: 'פסטה פטריות',
      description: 'פסטה ברוטב שמנת עם פטריות מוקפצות',
      price: '₪58',
      image: '/images/mushroom-pasta.jpg'
    },
    {
      id: 3,
      name: 'טוסט גבינות',
      description: 'טוסט עם מבחר גבינות, עגבניה ופסטו',
      price: '₪38',
      image: '/images/cheese-toast.jpg'
    }
  ],
  drinks: [
    {
      id: 1,
      name: 'לימונדה ביתית',
      description: 'לימונדה טרייה עם נענע',
      price: '₪16',
      image: '/images/lemonade.jpg'
    },
    {
      id: 2,
      name: 'מיץ תפוזים סחוט',
      description: 'מיץ תפוזים טרי סחוט במקום',
      price: '₪18',
      image: '/images/orange-juice.jpg'
    },
    {
      id: 3,
      name: 'סמוזי פירות',
      description: 'שייק פירות טריים עם יוגורט',
      price: '₪24',
      image: '/images/fruit-smoothie.jpg'
    }
  ]
};

// Category icons and labels
const categories = [
  { id: 'coffee', label: 'קפה', icon: <FaCoffee /> },
  { id: 'tea', label: 'תה', icon: <FaMugHot /> },
  { id: 'pastries', label: 'מאפים', icon: <FaCookie /> },
  { id: 'breakfast', label: 'ארוחות בוקר', icon: <FaEgg /> },
  { id: 'lunch', label: 'ארוחות צהריים', icon: <FaUtensils /> },
  { id: 'drinks', label: 'משקאות', icon: <FaGlassMartini /> }
];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white text-right rtl" dir="rtl">
      {/* Hero section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cafe-hero.jpg"
            alt="בית קפה גמא"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            התפריט שלנו
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            בית קפה גמא - טעמים שמחברים אנשים
          </motion.p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex overflow-x-auto gap-2 md:gap-4 pb-2 md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={clsx(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all duration-300",
                  "hover:shadow-inner hover:shadow-purple-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white/80 text-gray-700 shadow-[0_4px_10px_rgba(190,138,255,0.1),_inset_0_1px_1px_rgba(255,255,255,0.8)]"
                )}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuData[activeCategory as keyof typeof menuData].map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(190,138,255,0.1)]"
                style={{
                  boxShadow: "0 10px 30px rgba(190,138,255,0.1), inset 0 1px 1px rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.4)"
                }}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <div className="my-12 py-12 bg-gradient-to-r from-primary/10 to-purple-100/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
            style={{
              boxShadow: "0 20px 40px rgba(190,138,255,0.15), inset 0 1px 1px rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,255,255,0.6)"
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">רוצים לטעום מהתפריט שלנו?</h2>
            <p className="text-gray-600 mb-6">הזמינו שולחן עכשיו וצאו להנות מחוויה קולינרית מיוחדת בבית קפה גמא</p>
            <button 
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              style={{
                boxShadow: "0 4px 10px rgba(190,138,255,0.3), inset 0 -2px 5px rgba(0,0,0,0.1)"
              }}
            >
              הזמינו שולחן
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 border-t border-purple-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} בית קפה גמא - כל הזכויות שמורות</p>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;