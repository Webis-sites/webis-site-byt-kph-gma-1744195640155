'use client';

import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BookingSystem from '../components/BookingSystem';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import BookingPage from '../components/BookingPage';
import MenuPage from '../components/MenuPage';
import Button from '../components/Button';
import Card from '../components/Card';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <HeroSection />
    <ServicesSection />
    <BookingSystem />
    <TestimonialsSection />
    <FAQSection />
    <AboutSection />
    <GallerySection />
    <LocationSection />
    <CTASection />
    <Footer />
    <Navbar />
    <Layout />
    <BookingPage />
    <MenuPage />
    <Button />
    <Card />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 בית קפה גמא. webis
        </div>
      </footer>
    </div>
  );
}