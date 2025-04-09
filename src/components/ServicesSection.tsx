'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaCouch, FaUsers, FaBirthdayCake } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="service-card relative overflow-hidden rounded-2xl p-6 h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(190, 138, 255, 0.2)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="service-icon mb-4 text-primary text-4xl">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaCoffee />,
      title: "קפה איכותי",
      description: "אנו מציעים מבחר רחב של קפה איכותי מהטובים בעולם, נטחן טרי במקום."
    },
    {
      icon: <FaCouch />,
      title: "אווירה נעימה",
      description: "סביבה מעוצבת ונעימה המאפשרת לכם להירגע וליהנות מחוויה מושלמת."
    },
    {
      icon: <FaUsers />,
      title: "שירות מקצועי",
      description: "צוות מקצועי ואדיב שישמח לעזור לכם ולהתאים את החוויה לטעמכם האישי."
    },
    {
      icon: <FaBirthdayCake />,
      title: "אירועים מיוחדים",
      description: "אנו מארחים אירועים פרטיים ועסקיים בחלל מעוצב ואינטימי."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="services-section py-16 px-4 rtl text-right" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">השירותים שלנו</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            עם ניסיון של למעלה מ-10 שנים, בית קפה גמא מציע לכם את החוויה הטובה ביותר
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

// Add these styles to your globals.css or as a style tag in your component
/*
.service-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    8px 8px 16px rgba(174, 174, 192, 0.4),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: rgba(190, 138, 255, 0.4);
  box-shadow: 
    8px 8px 18px rgba(174, 174, 192, 0.6),
    -8px -8px 18px rgba(255, 255, 255, 0.9),
    0 0 20px rgba(190, 138, 255, 0.2);
}

.service-icon {
  background: linear-gradient(145deg, #f5f5f5, #ffffff);
  box-shadow: 
    4px 4px 8px rgba(174, 174, 192, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.7);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-section {
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
}
*/