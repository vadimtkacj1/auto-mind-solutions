'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookiePopupProps {
  onNavigate?: (page: 'privacy' | 'terms') => void;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';

const CookiePopup: React.FC<CookiePopupProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    }
    setIsVisible(false);
  };

  const handleDecline = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      <div 
        dir="rtl"
        className="relative pointer-events-auto w-full max-w-[440px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-8 lg:p-10 animate-in fade-in slide-in-from-bottom-8 duration-500"
      >
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 transition-colors p-1"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <div className="text-3xl mb-4 text-center">🍪</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            שימוש בעוגיות באתר
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            האתר שלנו משתמש בעוגיות כדי לשפר את חוויית הגלישה שלך ולנתח את השימוש באתר. 
            בהמשך גלישה באתר או בלחיצה על מאשר/ת הכל, את/ה מסכים/ה לשימוש שלנו בעוגיות בהתאם ל
            <button
              onClick={() => onNavigate?.('privacy')}
              className="text-blue-600 font-bold hover:underline"
            >
              מדיניות הפרטיות
            </button>.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => onNavigate?.('terms')}
            className="w-full py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            ניהול העדפות
          </button>
          
          <button
            onClick={handleDecline}
            className="w-full py-3.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            לא מאשר/ת
          </button>

          <button
            onClick={handleAccept}
            className="w-full py-4 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-[0.98]"
          >
            מאשר/ת הכל
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
