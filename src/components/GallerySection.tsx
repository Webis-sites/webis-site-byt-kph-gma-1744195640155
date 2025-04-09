'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56',
      alt: 'אווירה חמימה בבית קפה גמא',
      description: 'האווירה החמימה והנעימה בבית הקפה שלנו'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
      alt: 'קפה מיוחד בבית קפה גמא',
      description: 'קפה איכותי בהכנה מיוחדת'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      alt: 'מאפים טריים בבית קפה גמא',
      description: 'מאפים טריים מהתנור'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      alt: 'ארוחת בוקר בבית קפה גמא',
      description: 'ארוחת בוקר עשירה ומפנקת'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0',
      alt: 'פינת ישיבה נעימה בבית קפה גמא',
      description: 'פינות ישיבה נעימות ומזמינות'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1497935586047-9395ee065e52',
      alt: 'בריסטה מכין קפה בבית קפה גמא',
      description: 'הבריסטה המקצועי שלנו בפעולה'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
      alt: 'קינוחים מיוחדים בבית קפה גמא',
      description: 'קינוחים מיוחדים מעשה ידי השף שלנו'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2',
      alt: 'אווירת ערב בבית קפה גמא',
      description: 'אווירת הערב המיוחדת בבית הקפה'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') prevImage(); // RTL navigation
      if (e.key === 'ArrowLeft') nextImage(); // RTL navigation
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section dir="rtl" className="py-16 px-4 md:px-8 relative overflow-hidden" id="gallery">
      {/* Glassmorphism background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-60 z-0"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/30 to-primary/30 blur-3xl opacity-60 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Neumorphic section header */}
        <div className="mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 rounded-2xl bg-gray-100 shadow-neumorphic mb-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">הגלריה שלנו</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            טעימה קטנה מהאווירה, המנות והחוויה שמחכה לכם בבית קפה גמא
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="aspect-square relative rounded-2xl overflow-hidden group"
            >
              {/* Neumorphic card with glassmorphism hover effect */}
              <div 
                className="absolute inset-0 rounded-2xl shadow-neumorphic bg-gray-100 overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`${image.src}?w=600&h=600&fit=crop&q=80`}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-end p-4">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20"
              onClick={closeLightbox}
            >
              <FaTimes />
            </motion.button>

            {/* Navigation buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20"
              onClick={nextImage} // RTL navigation
            >
              <FaArrowLeft />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20"
              onClick={prevImage} // RTL navigation
            >
              <FaArrowRight />
            </motion.button>

            {/* Image container with glassmorphism effect */}
            <div className="relative w-full h-full max-h-[80vh] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
              <div className="relative w-full h-full">
                <Image
                  src={`${galleryImages[currentImage].src}?w=1200&q=90`}
                  alt={galleryImages[currentImage].alt}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-center text-lg">
                  {galleryImages[currentImage].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;