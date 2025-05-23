'use client';
  
import React from 'react';

/**
 * BookingPage Component
 * (Fallback component due to generation failure)
 */
export default function BookingPage() {
  return (
    <div className="w-full py-12 px-4 bg-white" dir="ltr">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#be8aff'}}>
          בית קפה מוביל בישראל
        </h2>
        <p className="text-lg mb-8 text-center">
          חווית לקוח מושלמת בכל ביקור
        </p>
        <div className="text-center">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium"
            style={{backgroundColor: '#ffffff'}}
          >
            קבע תור עכשיו
          </button>
        </div>
      </div>
    </div>
  );
}