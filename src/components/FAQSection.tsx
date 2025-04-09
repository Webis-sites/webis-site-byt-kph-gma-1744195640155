'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "מהן שעות הפעילות של בית קפה גמא?",
      answer: "בית קפה גמא פתוח בימים א'-ה' בין השעות 07:00-22:00, בימי שישי בין השעות 07:00-16:00, ובשבת בין השעות 09:00-22:00. שעות הפעילות עשויות להשתנות בחגים ואירועים מיוחדים."
    },
    {
      id: 2,
      question: "האם ניתן להזמין מקום מראש?",
      answer: "כן, ניתן להזמין מקום מראש דרך האתר שלנו או בטלפון 03-1234567. אנו ממליצים להזמין מקום מראש בסופי שבוע ובשעות העומס. הזמנות לקבוצות של 6 אנשים ומעלה מחייבות הזמנה מראש."
    },
    {
      id: 3,
      question: "האם יש תפריט טבעוני/צמחוני?",
      answer: "בהחלט! בבית קפה גמא אנו מציעים מגוון רחב של מנות טבעוניות וצמחוניות. כל המנות הטבעוניות מסומנות בתפריט, וניתן לבקש התאמות למנות רבות נוספות. הצוות שלנו ישמח לסייע בבחירת מנות המתאימות להעדפות התזונתיות שלכם."
    },
    {
      id: 4,
      question: "האם ניתן לקיים אירועים פרטיים בבית הקפה?",
      answer: "כן, בית קפה גמא מציע אפשרות לקיום אירועים פרטיים כגון ימי הולדת, מפגשים עסקיים, אירועי חברה ועוד. ניתן לשכור את האזור הפרטי שלנו או את כל בית הקפה בהתאם לגודל האירוע. לפרטים נוספים והזמנות, אנא צרו קשר עם מנהל האירועים שלנו."
    },
    {
      id: 5,
      question: "האם יש חנייה בקרבת בית הקפה?",
      answer: "ישנה חנייה ציבורית במרחק של כ-100 מטר מבית הקפה. בנוסף, לקוחות בית הקפה זכאים להנחה בחניון הסמוך עם הצגת חשבונית מבית הקפה. בסופי שבוע החנייה ברחובות הסמוכים היא ללא תשלום."
    },
    {
      id: 6,
      question: "האם ניתן להזמין עוגות ומאפים מיוחדים?",
      answer: "כן, אנו מקבלים הזמנות מיוחדות לעוגות, מאפים וקינוחים לאירועים. יש להזמין לפחות 48 שעות מראש. אנו יכולים להתאים את ההזמנות לדרישות תזונתיות מיוחדות כגון ללא גלוטן, טבעוני, או ללא סוכר. לפרטים והזמנות, אנא צרו קשר בטלפון או דרך האתר."
    },
    {
      id: 7,
      question: "האם יש Wi-Fi חופשי בבית הקפה?",
      answer: "כן, בבית קפה גמא מוצע Wi-Fi חופשי לכל הלקוחות. הסיסמה מופיעה על גבי הקבלה או ניתן לבקש אותה מאחד המלצרים. החיבור יציב ומהיר, מה שהופך את בית הקפה למקום מושלם לעבודה או לימודים."
    },
    {
      id: 8,
      question: "האם בית הקפה נגיש לבעלי מוגבלויות?",
      answer: "בית קפה גמא נגיש באופן מלא לבעלי מוגבלויות. יש לנו רמפה בכניסה, שירותים מותאמים, ומרווח מספיק בין השולחנות למעבר כיסאות גלגלים. אנו מקפידים על נגישות מלאה ושירות שוויוני לכל הלקוחות שלנו."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 rtl text-right bg-gradient-to-br from-purple-50 to-white" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">שאלות נפוצות</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר על בית קפה גמא. אם לא מצאתם את התשובה לשאלתכם, אל תהססו ליצור איתנו קשר.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="rounded-2xl overflow-hidden"
            >
              <div 
                className={`
                  backdrop-filter backdrop-blur-md bg-white/70 border border-white/30
                  shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]
                  transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.07),-8px_-8px_20px_rgba(255,255,255,0.9)]
                  ${activeIndex === faq.id ? 'bg-opacity-90' : 'bg-opacity-70'}
                `}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-right focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-xl"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeIndex === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center justify-center h-8 w-8 rounded-full ${
                      activeIndex === faq.id 
                        ? 'bg-primary text-white' 
                        : 'bg-purple-100 text-primary'
                    }`}
                  >
                    {activeIndex === faq.id ? <FiMinus /> : <FiPlus />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-gray-600 border-t border-purple-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;