'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiCheck, FiAlertCircle } from 'react-icons/fi';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const BookingSystem: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <div className="font-sans rtl" dir="rtl">
      <div className="max-w-3xl mx-auto p-6 md:p-8">
        <motion.div 
          className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-white/30 -z-10"></div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            הזמינו שולחן בבית קפה גמא
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            אנו מזמינים אתכם להזמין מקום או אירוע מיוחד בבית הקפה שלנו
          </motion.p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                      שם מלא
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <FiUser />
                      </div>
                      <motion.input
                        whileFocus={{ boxShadow: '0 0 0 2px rgba(190, 138, 255, 0.5)' }}
                        type="text"
                        id="name"
                        className={`w-full pr-10 py-3 px-4 rounded-xl bg-white/70 backdrop-blur-sm border ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:outline-none transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]`}
                        placeholder="הכנס את שמך המלא"
                        {...register('name', { required: 'שדה חובה' })}
                      />
                    </div>
                    {errors.name && (
                      <motion.p 
                        className="mt-1 text-red-500 flex items-center text-sm" 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FiAlertCircle className="mr-1" /> {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                      טלפון
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <FiPhone />
                      </div>
                      <motion.input
                        whileFocus={{ boxShadow: '0 0 0 2px rgba(190, 138, 255, 0.5)' }}
                        type="tel"
                        id="phone"
                        className={`w-full pr-10 py-3 px-4 rounded-xl bg-white/70 backdrop-blur-sm border ${errors.phone ? 'border-red-300' : 'border-gray-200'} focus:outline-none transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]`}
                        placeholder="הכנס את מספר הטלפון שלך"
                        {...register('phone', { 
                          required: 'שדה חובה',
                          pattern: {
                            value: /^[0-9]{9,10}$/,
                            message: 'מספר טלפון לא תקין'
                          }
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <motion.p 
                        className="mt-1 text-red-500 flex items-center text-sm" 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FiAlertCircle className="mr-1" /> {errors.phone.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                      אימייל
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <FiMail />
                      </div>
                      <motion.input
                        whileFocus={{ boxShadow: '0 0 0 2px rgba(190, 138, 255, 0.5)' }}
                        type="email"
                        id="email"
                        className={`w-full pr-10 py-3 px-4 rounded-xl bg-white/70 backdrop-blur-sm border ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:outline-none transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]`}
                        placeholder="הכנס את כתובת האימייל שלך"
                        {...register('email', { 
                          required: 'שדה חובה',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'כתובת אימייל לא תקינה'
                          }
                        })}
                      />
                    </div>
                    {errors.email && (
                      <motion.p 
                        className="mt-1 text-red-500 flex items-center text-sm" 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FiAlertCircle className="mr-1" /> {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                      הודעה
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 right-3 pointer-events-none text-gray-500">
                        <FiMessageSquare />
                      </div>
                      <motion.textarea
                        whileFocus={{ boxShadow: '0 0 0 2px rgba(190, 138, 255, 0.5)' }}
                        id="message"
                        rows={4}
                        className={`w-full pr-10 py-3 px-4 rounded-xl bg-white/70 backdrop-blur-sm border ${errors.message ? 'border-red-300' : 'border-gray-200'} focus:outline-none transition-all duration-300 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),_inset_-2px_-2px_5px_rgba(255,255,255,0.5)]`}
                        placeholder="הוסף פרטים נוספים או בקשות מיוחדות"
                        {...register('message', { required: 'שדה חובה' })}
                      />
                    </div>
                    {errors.message && (
                      <motion.p 
                        className="mt-1 text-red-500 flex items-center text-sm" 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FiAlertCircle className="mr-1" /> {errors.message.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary text-white font-medium rounded-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 10px 25px rgba(190, 138, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <span className="relative z-10">קבע תור עכשיו</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="bg-green-50 p-6 rounded-xl border border-green-100 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <FiCheck className="text-green-600 text-2xl" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">ההזמנה התקבלה בהצלחה!</h3>
                <p className="text-gray-600">
                  תודה על פנייתך. ניצור איתך קשר בהקדם לאישור ההזמנה.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingSystem;