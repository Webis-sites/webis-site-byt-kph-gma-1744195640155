'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  avatar?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "דניאל כהן",
      quote: "בית קפה גמא הוא המקום המושלם לפגישות עסקיות. הקפה מעולה והאווירה נעימה ושקטה.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "מיכל לוי",
      quote: "המאפים הטריים והקפה האיכותי הפכו את בית קפה גמא למקום הקבוע שלי. השירות תמיד אדיב ומהיר!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "יוסי אברהם",
      quote: "התפריט המגוון והאווירה הנעימה הופכים כל ביקור לחוויה מיוחדת. ממליץ בחום על הקרואסון שוקולד!",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "שירה גולן",
      quote: "המקום האידיאלי לשבת עם מחשב נייד ולעבוד. הוויפי מהיר, השקעים זמינים והקפה? פשוט מושלם.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      name: "אורי שמעוני",
      quote: "אני מגיע לבית קפה גמא כבר שנתיים, והאיכות והשירות תמיד נשארים ברמה הגבוהה ביותר. מקום מיוחד!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  const slidesPerView = isMobile ? 1 : isTabletOrMobile ? 2 : 3;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - slidesPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - slidesPerView : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`inline-block ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const visibleTestimonials = () => {
    const endIndex = currentIndex + slidesPerView;
    const items = [];
    
    for (let i = currentIndex; i < endIndex; i++) {
      const index = i >= testimonials.length ? i - testimonials.length : i;
      items.push(testimonials[index]);
    }
    
    return items;
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 500 : -500,
        opacity: 0
      };
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-white rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנחנו גאים להעניק חוויה יוצאת דופן לכל לקוח ולקוחה. הנה כמה מהחוויות שלקוחותינו שיתפו איתנו.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-6 w-full">
                {visibleTestimonials().map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-1 min-w-0"
                    style={{ minWidth: `${100 / slidesPerView}%` }}
                  >
                    <motion.div
                      className="h-full p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(190,138,255,0.1)] transition-all duration-300"
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 15px 30px rgba(190, 138, 255, 0.15)'
                      }}
                      style={{
                        boxShadow: '8px 8px 16px rgba(209, 205, 224, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="mb-4 flex items-center">
                          {testimonial.avatar && (
                            <div className="mr-4 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                            <div className="text-sm">{renderStars(testimonial.rating)}</div>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:translate-x-0 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-sm border border-white/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,0,0.05)]"
            style={{
              boxShadow: '4px 4px 8px rgba(209, 205, 224, 0.5), -4px -4px 8px rgba(255, 255, 255, 0.8)'
            }}
            aria-label="הקודם"
          >
            <FaChevronRight />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-0 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-sm border border-white/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,0,0.05)]"
            style={{
              boxShadow: '4px 4px 8px rgba(209, 205, 224, 0.5), -4px -4px 8px rgba(255, 255, 255, 0.8)'
            }}
            aria-label="הבא"
          >
            <FaChevronLeft />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: testimonials.length - slidesPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`עבור לחוות דעת ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;