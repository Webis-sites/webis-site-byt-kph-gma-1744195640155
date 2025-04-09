import React from 'react';
import { Inter, Heebo } from 'next/font/google';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import clsx from 'clsx';

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const heebo = Heebo({ 
  subsets: ['hebrew'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-heebo'
});

// Metadata for the application
export const metadata: Metadata = {
  title: 'בית קפה גמא | Gamma Cafe',
  description: 'בית קפה גמא - מקום מפגש לאוהבי קפה איכותי, אוכל טעים ואווירה נעימה במרכז העיר',
  keywords: 'בית קפה, קפה, גמא, אוכל, משקאות, מאפים, ישראל, קפה איכותי',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://gammacafe.co.il',
    title: 'בית קפה גמא | Gamma Cafe',
    description: 'בית קפה גמא - מקום מפגש לאוהבי קפה איכותי, אוכל טעים ואווירה נעימה במרכז העיר',
    siteName: 'בית קפה גמא',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'בית קפה גמא',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'בית קפה גמא | Gamma Cafe',
    description: 'בית קפה גמא - מקום מפגש לאוהבי קפה איכותי, אוכל טעים ואווירה נעימה במרכז העיר',
    images: ['/images/twitter-image.jpg'],
  },
};

// Schema.org structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'בית קפה גמא',
  alternateName: 'Gamma Cafe',
  description: 'בית קפה גמא - מקום מפגש לאוהבי קפה איכותי, אוכל טעים ואווירה נעימה במרכז העיר',
  url: 'https://gammacafe.co.il',
  telephone: '+972-XX-XXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'רחוב הדוגמה 123',
    addressLocality: 'תל אביב',
    postalCode: '6100000',
    addressCountry: 'IL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '32.0853',
    longitude: '34.7818'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '08:00',
      closes: '16:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '22:00'
    }
  ],
  servesCuisine: ['Coffee', 'Israeli', 'Cafe'],
  priceRange: '$$'
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="he" dir="rtl" className={clsx(inter.variable, heebo.variable)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-heebo">
        <div className="flex flex-col min-h-screen">
          {/* Glassmorphic header */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
            <Navbar />
          </header>

          {/* Main content */}
          <main className="flex-grow">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
              {/* Neumorphic content wrapper */}
              <div className="rounded-2xl bg-gray-50 p-6 shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.05)]">
                {children}
              </div>
            </div>
          </main>

          {/* Glassmorphic footer */}
          <footer className="mt-auto backdrop-blur-md bg-white/70 border-t border-white/20">
            <Footer />
          </footer>
        </div>

        {/* Decorative elements */}
        <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        </div>
      </body>
    </html>
  );
}