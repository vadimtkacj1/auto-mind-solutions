'use client';

import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'light' | 'dark';
}

export default function SuccessModal({ isOpen, onClose, variant = 'light' }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lightContent = {
    title: 'הפרטים התקבלו בהצלחה',
    description: 'אנחנו כבר בודקים את הבקשה שלך, נחזור אליך תוך 24 שעות עם כיוון אסטרטגי ראשוני מותאם לעסק שלך.',
    buttonText: 'מעולה, מחזור'
  };

  const darkContent = {
    title: 'מעולה! אנחנו יוצאים לדרך',
    description: 'נציג מהצוות יחזור אליך במהרה כדי לבנות מסלול צמיחה מותאמת לעסק שלך.',
    buttonText: 'סגור'
  };

  const content = variant === 'light' ? lightContent : darkContent;

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4" style={{ zIndex: 10000 }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 animate-fadeIn"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.3s ease-out'
        }}
      ></div>

      {/* Modal */}
      <div
        className={`relative max-w-md w-full p-8 rounded-3xl shadow-2xl ${
          variant === 'light' ? 'bg-white' : 'bg-gray-900'
        }`}
        style={{
          animation: 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 left-4 w-10 h-10 rounded-xl border-2 flex items-center justify-center transition ${
            variant === 'light'
              ? 'border-blue-500 text-blue-500 hover:bg-blue-50'
              : 'border-blue-400 text-blue-400 hover:bg-gray-800'
          }`}
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mt-4">
          <h2
            className={`text-2xl font-extrabold mb-4 ${
              variant === 'light' ? 'text-gray-900' : 'text-white'
            }`}
          >
            {content.title}
          </h2>
          <p
            className={`text-base mb-8 leading-relaxed ${
              variant === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            {content.description}
          </p>

          {/* Button */}
          <button
            onClick={onClose}
            className="w-full py-3 px-6 text-white text-base font-bold rounded-full transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #0EA5E9 0%, #2563EB 100%)',
              boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)'
            }}
          >
            {content.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
